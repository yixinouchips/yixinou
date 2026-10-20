import { useState } from 'react';
import { Link, useLocation, useNavigate } from './router';
import { Search, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useConfig } from './config';
import { LOCALES, stripLocale, withLocale } from './content';
import { INDUSTRY_ICONS } from './industryIcons';
import { useI18n } from './i18n';

const NAV_KEYS = {
  '/': 'nav.home',
  '/about-us': 'nav.about',
  '/all-products': 'nav.products',
  '/industries': 'nav.industries',
  '/quality': 'nav.quality',
  '/blogs800': 'nav.blogs',
  '/Contact': 'nav.contact',
};

function LangSelector() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const current = LOCALES.find((l) => l.code === lang) || LOCALES[0];

  // Switching language keeps the visitor on the page they were reading and only swaps the
  // locale prefix, so a German chip page leads to the German chip page, not the German home.
  const targetFor = (l) => withLocale(pathname, l.code) + search;
  return (
    <div className={`lang-selector ${open ? 'open' : ''}`} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button type="button" className="current-lang" onClick={() => setOpen((v) => !v)} aria-label="Language selector">
        {current.flag ? (
          <img src="/assets/images/flags.png" width="30" height="20" alt={current.label} style={{ objectPosition: current.flag }} />
        ) : (
          <span className="lang-noflag" aria-hidden="true">
            {current.label.slice(0, 2)}
          </span>
        )}
        <em>{current.label}</em>
        <ChevronDown size={12} className="qico-down" />
      </button>
      <div className="lang-box">
        <ul className="lang-list">
          {LOCALES.map((l) => {
            const flag = l.flag ? (
              <img
                src="/assets/images/flags.png"
                alt=""
                width="30"
                height="20"
                style={{ objectPosition: l.flag }}
              />
            ) : (
              <span className="lang-noflag" aria-hidden="true">
                {l.label.slice(0, 2)}
              </span>
            );
            // A locale with no translated content is listed but not selectable: the selector
            // swaps UI strings rather than navigating, so offering it would be a control that
            // silently does nothing (or falls back to English).
            return (
              <li key={l.code}>
                {l.live ? (
                  <a
                    href={targetFor(l)}
                    hrefLang={l.hreflang}
                    lang={l.code}
                    data-lang={l.code}
                    aria-label={l.label}
                    className={l.code === lang ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      setLang(l.code);
                      navigate(targetFor(l));
                    }}
                  >
                    {flag}
                    {l.label}
                  </a>
                ) : (
                  <span className="lang-pending" lang={l.code} title={t('lang.pending')}>
                    {flag}
                    {l.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function MobileDrawer({ open, onClose }) {
  const { nav: NAV } = useConfig();
  const { pathname } = useLocation();
  const { t } = useI18n();
  const [openGroups, setOpenGroups] = useState({});
  const toggleGroup = (href) => setOpenGroups((g) => ({ ...g, [href]: !g[href] }));
  return (
    <div className={`sung-mo-leftmenu ${open ? 'open' : ''}`}>
      <div className="tit">
        <h6>{t('nav.allCategories')}</h6>
        <span onClick={onClose}>
          <X size={16} />
        </span>
      </div>
      <ul>
        {NAV.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <li key={item.href} className={isActive ? 'active' : ''}>
              {item.children ? (
                <>
                  <a
                    aria-label={t(NAV_KEYS[item.href] || item.label)}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleGroup(item.href);
                    }}
                  >
                    {t(NAV_KEYS[item.href] || item.label)} <ChevronDown size={12} className="down-btn" />
                  </a>
                  <ul className={openGroups[item.href] ? 'open' : ''}>
                    {item.children.map((c) => {
                      // mega-menu children carry slug/title, plain ones href/label
                      const to = c.href || `${item.href}#${c.slug}`;
                      return (
                        // keyed on the label, not the target: two entries may legitimately
                        // point at the same page (the two blog categories both resolve to the
                        // blog index until they get pages of their own)
                        <li key={c.label || c.slug || to}>
                          <Link to={to} onClick={onClose}>
                            <ChevronRight size={12} /> {c.label || c.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </>
              ) : (
                <Link to={item.href} onClick={onClose}>
                  {t(NAV_KEYS[item.href] || item.label)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Header() {
  const { nav: NAV, industriesPage: IP } = useConfig();
  const { pathname } = useLocation();
  const { t } = useI18n();
  const [drawer, setDrawer] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <>
      <MobileDrawer open={drawer} onClose={() => setDrawer(false)} />
      <header className="sung-header">
        <div className="sung-content-wrap">
          <span className="sung-line-position" />
          <div className="container">
            <span className="fl sung-mo-header-menu" onClick={() => setDrawer(true)}>
              <Menu size={20} />
            </span>
            <div className="logo">
              <Link aria-label="home" to="/">
                <img src="/assets/images/logo-horizontal.png" alt="YIXINOU Electronic Co., Ltd." />
              </Link>
            </div>
            <nav className="sung-nav" aria-label="Main navigation">
              <ul>
                {NAV.map((item) => {
                  const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
                  return (
                    <li key={item.href} className={`${isActive ? 'active' : ''}${item.mega ? ' has-mega' : ''}`}>
                      <Link aria-label={t(NAV_KEYS[item.href] || item.label)} to={item.href}>
                        {t(NAV_KEYS[item.href] || item.label)}
                      </Link>
                      {item.mega ? (
                        <div className="sung-meganav">
                          <div className="sung-meganav-inner">
                            <div className="sung-meganav-aside">
                              <h3>{IP.title}</h3>
                              <p>{IP.menuDesc}</p>
                              <Link className="sung-meganav-all" to={IP.ctaHref}>
                                {IP.ctaLabel}
                                <ChevronRight size={15} strokeWidth={3} />
                              </Link>
                            </div>
                            <ul className="sung-meganav-grid">
                              {item.children.map((c) => {
                                const Icon = INDUSTRY_ICONS[c.icon];
                                return (
                                  <li key={c.slug}>
                                    <Link to={c.href || `${item.href}#${c.slug}`}>
                                      <span className="sung-mega-ico" aria-hidden="true">
                                        {Icon ? <Icon size={22} strokeWidth={1.8} /> : null}
                                      </span>
                                      <span className="sung-mega-lab">{c.title}</span>
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      ) : item.children ? (
                        <ul className="subnav">
                          {item.children.map((c) => (
                            <li key={c.label || c.href} className="sung-custom-col-md">
                              <Link className="sub-title-a" to={c.href}>
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className="sung-header_right">
              <div className="sung-search" onClick={() => setSearchOpen((v) => !v)}>
                <span>
                  <Search size={18} />
                </span>
              </div>
              <div className="sung-header-lang">
                <LangSelector />
              </div>
            </div>
          </div>
          <div className={`sung-search-box ${searchOpen ? 'open' : ''}`}>
            <div className="container">
              <div className="box">
                <form
                  className="serchbox"
                  name="search"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (query.trim()) window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
                  }}
                >
                  <input type="hidden" name="type" value="product" />
                  <button aria-label="search" type="submit" className="submit_btn">
                    <Search size={18} />
                  </button>
                  <input
                    className="submit_text"
                    id="sung-search-input"
                    type="text"
                    name="keys"
                    placeholder={t('search.placeholder')}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </form>
              </div>
              <div className="sung-search-link">
                <span>{t('search.quickLinks')}</span>
                <ul>
                  <li><Link aria-label={t('nav.about')} to="/about-us">{t('nav.about')}</Link></li>
                  <li><Link aria-label={t('nav.products')} to="/all-products">{t('nav.products')}</Link></li>
                  <li><Link aria-label={t('nav.blogs')} to="/blogs800">{t('nav.blogs')}</Link></li>
                  <li><Link aria-label={t('nav.contact')} to="/Contact">{t('nav.contact')}</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
