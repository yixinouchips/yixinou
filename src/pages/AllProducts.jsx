import { ChevronRight, Search, X } from 'lucide-react';
import { useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useSearchParams } from '../router';
import PageBanner from '../PageBanner';
import { ProductsItemList } from '../Seo';
import { useConfig } from '../config';
import { useI18n } from '../i18n';
import { useCanonical, useReveal, useScrollTop } from '../hooks';
import { brandLabel } from '../brands';
import { localeOfPath, withLocale } from '../content';
import { PER_PAGE, clampPage, pageCountFor, pageNumbers, pageRange, pageSlice } from '../pagination';

/*
 * This listing is generated from PRODUCT_PARTS — the same records that render the
 * /product/<MPN> pages — so publishing a new part page adds its card here with no
 * second edit. Nothing on this page is hand-maintained per product.
 */

const loose = (v) => String(v == null ? '' : v).toLowerCase();

// Compact form, so "h5cgd8" or "h5cgd8mgbdx021n" both find H5CGD8MGBDX021N and a
// visitor who types a part number with spaces or hyphens still gets a hit.
const tight = (v) => loose(v).replace(/[^a-z0-9]/g, '');

export default function AllProducts() {
  const { t } = useI18n();
  const { productParts, pageBanners: PB, site } = useConfig();
  const [params, setParams] = useSearchParams();
  const { pathname } = useLocation();
  useScrollTop();
  const listRef = useReveal('fadeInUp', 0.2);

  const siteUrl = site?.url || 'https://www.yixinou.com';

  const query = params.get('q') || '';
  const category = params.get('category') || '';
  const brand = params.get('brand') || '';

  // Iterate the entries rather than the values: the object key is the URL-safe id, while
  // `mpn` is the part number as printed. They differ for parts whose real number contains a
  // slash (PIC16F628A-I/P), which cannot appear in a path segment.
  const items = useMemo(
    () =>
      Object.entries(productParts || {}).map(([id, p]) => ({
        id,
        mpn: p.mpn,
        brand: p.brand,
        title: p.title,
        category: p.category,
        // the leading segment becomes the filter group, e.g.
        // "Integrated Circuits (ICS) / Memory / DRAM (DDR5)" -> "Integrated Circuits (ICS)"
        // A translated part carries its localized category for display plus the English one in
        // categoryEn. The rail keys off the English value on purpose: that is what every nav and
        // category link puts in the URL, so grouping by the translation would offer chips that
        // match nothing.
        group: String(p.categoryEn || p.category || '').split('/')[0].trim() || 'Other',
        img: p.img,
        alt: p.alt,
        href: `/product/${id}`,
        // keep the label alongside the value: two specs can share a value (a 1T1R radio has
        // "1" for both transmit and receive channels), and a React keyed on the value alone
        // would collide
        chips: (p.specs || []).slice(0, 3).map(([k, v]) => ({ k, v })),
        specs: p.specs || [],
      }))
        // Alphabetical by part number, with numeric segments compared as numbers so
        // STM32F405RGT6 sits before STM32F429IIT6. Paged browsing needs a predictable
        // order; insertion order would scatter the catalogue across nine arbitrary pages.
        .sort((a, b) => a.mpn.localeCompare(b.mpn, 'en', { numeric: true, sensitivity: 'base' })),
    [productParts],
  );

  // One predicate for every axis. `ignore` lets the rails count what each option would
  // actually return: a brand chip is counted against the active category and search but not
  // against the active brand, so the number on a chip is the number you get by clicking it
  // and no chip can lead to an empty page.
  const matches = (i, ignore = {}) => {
    if (!ignore.category && category && i.group !== category) return false;
    if (!ignore.brand && brand && i.brand !== brand) return false;
    const q = query.trim();
    if (!q) return true;
    const qq = loose(q);
    const qs = tight(q);
    // match on the printed part number and on the URL id, so both
    // "PIC16F628A-I/P" and "PIC16F628A-I-P" find the part
    if (loose(i.mpn).includes(qq) || tight(i.mpn).includes(qs)) return true;
    if (loose(i.id).includes(qq) || tight(i.id).includes(qs)) return true;
    if (loose(i.brand).includes(qq) || loose(i.title).includes(qq)) return true;
    if (loose(i.category).includes(qq)) return true;
    // specification values are searchable too, so "DDR5", "24 Gb" or "BGA-96" all work
    return i.specs.some(([k, v]) => loose(k).includes(qq) || loose(v).includes(qq));
  };

  const tally = (xs, key) => {
    const counts = new Map();
    xs.forEach((i) => counts.set(i[key], (counts.get(i[key]) || 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])));
  };

  const visible = useMemo(() => items.filter((i) => matches(i)), [items, query, category, brand]);

  // counts as if this axis were not applied
  const categoryPool = useMemo(() => items.filter((i) => matches(i, { category: true })), [items, query, brand]);
  const brandPool = useMemo(() => items.filter((i) => matches(i, { brand: true })), [items, query, category]);

  const groups = useMemo(
    () => tally(categoryPool, 'group').map(([label, count]) => ({ label, count })),
    [categoryPool],
  );

  // Brand rail derived from the same records, so it can never offer a brand with nothing
  // behind it and it grows on its own as parts from other manufacturers are published.
  const brandGroups = useMemo(
    () => tally(brandPool, 'brand').map(([b, count]) => ({ brand: b, label: brandLabel(b), count })),
    [brandPool],
  );

  // ---- pagination -------------------------------------------------------
  const pageCount = pageCountFor(visible.length);
  // clamp rather than trust the URL, so ?page=99 cannot render an empty grid
  const page = clampPage(params.get('page'), pageCount);
  const pageItems = pageSlice(visible, page);

  // Filtered and paginated states should not compete with the clean listing. Page 1 and
  // any search or category view point at /all-products; deeper pages self-canonicalise so
  // the series stays crawlable rather than collapsing into one page.
  // The canonical has to keep the locale prefix: pointing the German listing at the English
  // one would tell a crawler the German page is a duplicate and drop it.
  const listBase = withLocale('/all-products', localeOfPath(pathname));
  useCanonical(
    query || category || brand || page === 1
      ? `${siteUrl}${listBase}`
      : `${siteUrl}${listBase}?page=${page}`,
  );

  // Land at the top of the results after paging, but never on first paint.
  const resultsRef = useRef(null);
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    resultsRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }, [page]);

  const setParam = (key, value) => {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    // any change to the result set invalidates the current page number
    if (key !== 'page') next.delete('page');
    setParams(next, { replace: true });
  };

  const pageHref = (n) => {
    const next = new URLSearchParams(params);
    if (n > 1) next.set('page', String(n));
    else next.delete('page');
    const qs = next.toString();
    // built from the locale-aware base, so paging never drops the visitor back to English
    return `${listBase}${qs ? '?' + qs : ''}`;
  };

  const heading = query ? t('al.hSearch') : t('al.hAll');
  const { first: firstOnPage, last: lastOnPage } = pageRange(visible.length, page);

  return (
    <>
      {/* ItemList points only at pages that actually render */}
      <ProductsItemList
        products={pageItems.map((p) => ({ name: `${p.brand} ${p.mpn}`, href: p.href }))}
      />

      <PageBanner
        img="/assets/images/yixinou-all-products-banner.jpg"
        title={PB['/all-products']?.title || t('page.products.title')}
        sub={PB['/all-products']?.sub}
        cta={PB['/all-products']?.cta}
        micro={PB['/all-products']?.micro}
      />

      <section className="al-wrap">
        <div className="container al-grid">
          <aside className="al-side">
            <h2 className="al-side-h">{t('al.cats')}</h2>
            <ul className="al-cats">
              <li>
                <button
                  type="button"
                  className={`al-cat${category ? '' : ' is-active'}`}
                  aria-pressed={!category}
                  onClick={() => setParam('category', '')}
                >
                  <span className="al-cat-n">{t('al.allCats')}</span>
                  <span className="al-cat-c">{categoryPool.length}</span>
                </button>
              </li>
              {groups.map((g) => (
                <li key={g.label}>
                  <button
                    type="button"
                    className={`al-cat${category === g.label ? ' is-active' : ''}`}
                    aria-pressed={category === g.label}
                    onClick={() => setParam('category', category === g.label ? '' : g.label)}
                  >
                    <span className="al-cat-n">{g.label}</span>
                    <span className="al-cat-c">{g.count}</span>
                  </button>
                </li>
              ))}
            </ul>

            {brandGroups.length > 0 && (
              <div className="al-brand-block">
                <h2 className="al-side-h al-side-h-sub">{t('al.brands')}</h2>
                <ul className="al-brands">
                  <li>
                    <button
                      type="button"
                      className={`al-brand${brand ? '' : ' is-active'}`}
                      aria-pressed={!brand}
                      onClick={() => setParam('brand', '')}
                    >
                      <span className="al-brand-n">{t('al.allBrands')}</span>
                      <span className="al-brand-c">{brandPool.length}</span>
                    </button>
                  </li>
                  {brandGroups.map((b) => (
                    <li key={b.brand}>
                      <button
                        type="button"
                        className={`al-brand${brand === b.brand ? ' is-active' : ''}`}
                        aria-pressed={brand === b.brand}
                        onClick={() => setParam('brand', brand === b.brand ? '' : b.brand)}
                      >
                        <span className="al-brand-n">{b.label}</span>
                        <span className="al-brand-c">{b.count}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="al-side-cta">
              <h2 className="al-side-cta-h">{t('al.sideCtaTitle')}</h2>
              <p>{t('al.sideCtaBody')}</p>
              <Link className="al-side-cta-link" to="/Contact">
                {t('al.sideCtaLink')}
                <ChevronRight size={15} strokeWidth={3} />
              </Link>
            </div>
          </aside>

          <div className="al-main">
            <form
              className="al-search"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                e.currentTarget.querySelector('input')?.blur();
              }}
            >
              <label className="al-search-label" htmlFor="al-q">
                {t('al.searchLabel')}
              </label>
              <div className="al-search-row">
                <Search className="al-search-icon" size={18} strokeWidth={2.5} aria-hidden="true" />
                <input
                  id="al-q"
                  className="al-search-input"
                  type="search"
                  name="q"
                  value={query}
                  autoComplete="off"
                  placeholder={t('al.searchPlaceholder')}
                  onChange={(e) => setParam('q', e.target.value)}
                />
                {query && (
                  <button
                    type="button"
                    className="al-search-clear"
                    aria-label={t('al.searchClear')}
                    onClick={() => setParam('q', '')}
                  >
                    <X size={16} strokeWidth={2.5} aria-hidden="true" />
                  </button>
                )}
                <button type="submit" className="al-search-btn">
                  {t('al.searchBtn')}
                </button>
              </div>
              <p className="al-search-hint">{t('al.searchHint')}</p>
            </form>

            <div ref={resultsRef} className="al-results-head">
              <h2 className="al-h" role="status" aria-live="polite">
                {heading} <span className="al-h-n">({visible.length})</span>
              </h2>
              {visible.length > 0 && (
                <p className="al-range">
                  {t('al.showing')} {firstOnPage}-{lastOnPage} {t('al.ofTotal')} {visible.length}
                </p>
              )}
            </div>

            {visible.length > 0 ? (
              <ul className="al-list" ref={listRef}>
                {pageItems.map((p) => (
                  <li className="al-card" key={p.id}>
                    <Link className="al-card-pic" to={p.href} tabIndex={-1} aria-hidden="true">
                      <img src={p.img} alt={p.alt} loading="lazy" decoding="async" />
                    </Link>
                    <div className="al-card-body">
                      <p className="al-card-brand">{p.brand}</p>
                      <h3 className="al-card-h">
                        <Link to={p.href}>{p.mpn}</Link>
                      </h3>
                      <p className="al-card-title">{p.title}</p>
                      <ul className="al-card-chips">
                        {p.chips.map((c) => (
                          <li key={c.k}>{c.v}</li>
                        ))}
                      </ul>
                      <Link className="al-card-link" to={p.href}>
                        {t('al.view')}
                        <ChevronRight size={15} strokeWidth={3} aria-hidden="true" />
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            ) : null}

            {pageCount > 1 && (
              <nav className="al-pager" aria-label={t('al.pager')}>
                <ul className="al-pager-list">
                  <li>
                    {page > 1 ? (
                      <Link className="al-page" to={pageHref(page - 1)} aria-label={t('al.pagePrev')}>
                        {t('al.pagePrev')}
                      </Link>
                    ) : (
                      <span className="al-page is-disabled" aria-hidden="true">
                        {t('al.pagePrev')}
                      </span>
                    )}
                  </li>
                  {pageNumbers(page, pageCount).map((n) =>
                    typeof n === 'number' ? (
                      <li key={n}>
                        {n === page ? (
                          <span className="al-page is-current" aria-current="page">
                            {n}
                          </span>
                        ) : (
                          <Link className="al-page" to={pageHref(n)}>
                            {n}
                          </Link>
                        )}
                      </li>
                    ) : (
                      <li key={n}>
                        <span className="al-page is-gap" aria-hidden="true">
                          &hellip;
                        </span>
                      </li>
                    ),
                  )}
                  <li>
                    {page < pageCount ? (
                      <Link className="al-page" to={pageHref(page + 1)} aria-label={t('al.pageNext')}>
                        {t('al.pageNext')}
                      </Link>
                    ) : (
                      <span className="al-page is-disabled" aria-hidden="true">
                        {t('al.pageNext')}
                      </span>
                    )}
                  </li>
                </ul>
              </nav>
            )}

            {visible.length === 0 && (
              /* Reached either because nothing has been published yet or because the
                 filters excluded everything — in both cases the useful thing to say is
                 the same: we do not have that part listed, ask us and we will quote it. */
              <div className="al-empty">
                <h3 className="al-empty-h">{t('al.noneTitle')}</h3>
                <p>{t('al.noneBody')}</p>
                <Link className="al-empty-cta" to="/Contact">
                  {t('al.noneCta')}
                  <ChevronRight size={17} strokeWidth={3} aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
