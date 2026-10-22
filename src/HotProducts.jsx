import { Link } from './router';
import { useConfig } from './config';
import { useI18n } from './i18n';
import { useReveal } from './hooks';

/*
 * Curated home-page slots. HOT_PRODUCTS holds ids of published part records rather than
 * hand-written cards, so a featured slot cannot point at a page that does not exist and its
 * image and wording come from the same record the part page uses.
 */
export default function HotProducts() {
  const { hotProducts, productParts } = useConfig();
  const { t } = useI18n();
  const titleRef = useReveal('fadeInLeft', 0);
  const listRef = useReveal('fadeInUp', 0.3);

  const items = (hotProducts || [])
    .map((id) => (productParts && productParts[id] ? { id, ...productParts[id] } : null))
    .filter(Boolean);

  // nothing published to feature yet: render nothing rather than a broken strip
  if (!items.length) return null;

  return (
    <section className="zhuli-hot_product">
      <div className="container">
        <div className="tit" ref={titleRef}>
          <h3>{t('hot.title')}</h3>
          <p />
        </div>
        <ul className="row" ref={listRef}>
          {items.map((p) => (
            <li key={p.id}>
              <div className="box">
                <Link
                  aria-label={`${p.mpn}, ${p.title}`}
                  className="pic"
                  to={`/product/${p.id}`}
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  <img src={p.img.replace(/\.(jpg|png)$/i, '.webp')} alt={p.alt} width="240" height="180" loading="lazy" decoding="async" style={{ objectFit: "contain", aspectRatio: "4 / 3" }} />
                </Link>
                <p className="brand">{p.brand}</p>
                <h4>
                  <Link to={`/product/${p.id}`}>{p.mpn}</Link>
                </h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
