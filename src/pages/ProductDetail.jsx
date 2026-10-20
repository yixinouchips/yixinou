import { ChevronDown, ChevronRight, Home } from 'lucide-react';
import { Link, useParams } from '../router';
import { ProductJsonLd } from '../Seo';
import { useConfig } from '../config';
import { useI18n } from '../i18n';
import { useReveal, useScrollTop } from '../hooks';

/**
 * Collapsible section.
 *
 * Built on <details>/<summary> so the heading stays a real <h2>, keyboard and
 * screen-reader support come for free, and — importantly for GEO — every
 * section's text stays in the DOM whether the section is open or closed.
 */
function Section({ index, title, children, open = false }) {
  return (
    <details className="pd-sec" open={open}>
      <summary className="pd-sec-sum">
        <span className="pd-sec-idx" aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
        <h2 className="pd-sec-title">{title}</h2>
        <span className="pd-sec-chev" aria-hidden="true">
          <ChevronDown size={18} strokeWidth={3} />
        </span>
      </summary>
      <div className="pd-sec-body">{children}</div>
    </details>
  );
}

export default function ProductDetail() {
  const { mpn } = useParams();
  const { productParts, contact } = useConfig();
  const { t } = useI18n();
  useScrollTop();
  const mainRef = useReveal('fadeInUp', 0);
  const asideRef = useReveal('fadeInUp', 0.15);

  const findInfo = (re) => (contact?.info || []).find((c) => re.test(c.label || ''));
  const email = findInfo(/e-?mail/i)?.value || 'Jessie@yixinouchips.com';
  // WhatsApp and WeChat are read from the same contact list the Contact page renders,
  // so a number only ever has to be maintained in one place.
  const whatsapp = findInfo(/whatsapp/i);
  const wechat = findInfo(/wechat/i);

  const part = productParts && mpn ? productParts[mpn] : null;

  if (!part) {
    return (
      <section className="pd-missing">
        <div className="container">
          <h1>{t('pd.missingTitle')}</h1>
          <p>{t('pd.missingBody').replace('{mpn}', mpn)}</p>
          <Link className="pd-cta" to="/Contact">
            {t('pd.cta')}
            <span className="pd-cta-arrow" aria-hidden="true">
              <ChevronRight size={18} strokeWidth={3} />
            </span>
          </Link>
          <p className="pd-missing-alt">
            <Link to="/all-products">{t('pd.browseCategories')}</Link>.
          </p>
        </div>
      </section>
    );
  }

  const specTop = part.specs.slice(0, 4);

  return (
    <>
      <ProductJsonLd part={part} />

      <div className="pd-crumbs">
        <div className="container">
          <p className="breadcrumb">
            <Home size={14} /> <Link to="/">{t('nav.home')}</Link>
            {' > '}
            <Link to="/all-products">{t('nav.products')}</Link>
            {' > '}
            <Link to={part.categoryHref}>{part.category}</Link>
            {' > '}
            <span>{part.mpn}</span>
          </p>
        </div>
      </div>

      <section className="pd">
        <div className="container">
          <div className="pd-grid">
            <article className="pd-main" ref={mainRef}>
              {/* identity block — always visible, as on the reference page */}
              <div className="pd-head">
                <div className="pd-head-txt">
                  <p className="pd-brand">{part.brand}</p>
                  <h1>{part.mpn}</h1>
                  <p className="pd-title">{part.title}</p>
                  <table className="pd-spec pd-spec-top">
                    <tbody>
                      {specTop.map(([k, v]) => (
                        <tr key={k}>
                          <th scope="row">{k}</th>
                          <td>{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <figure className="pd-figure">
                  <img
                    src={part.img}
                    alt={part.alt}
                    width="900"
                    height="900"
                    loading="eager"
                    decoding="async"
                  />
                  <figcaption>{part.imageNote}</figcaption>
                </figure>
              </div>

              <p className="pd-summary">{part.summary}</p>

              <Section index={1} title={t('pd.about')} open>
                <p>{part.about}</p>
              </Section>

              {/* Default open state for the template: only "Full specifications"
                  starts collapsed — the spec table is the longest block and the
                  four headline specs are already shown in the identity table above,
                  so collapsing it keeps the page scannable. Every other section
                  starts expanded so a visitor (and a crawler rendering the page)
                  sees the full content without interaction. */}
              <Section index={2} title={t('pd.specs')}>
                <table className="pd-spec pd-spec-full">
                  <tbody>
                    {part.specs.map(([k, v]) => (
                      <tr key={k}>
                        <th scope="row">{k}</th>
                        <td>{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Section>

              <Section index={3} title={t('pd.features')} open>
                <ul className="pd-list">
                  {part.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </Section>

              <Section index={4} title={t('pd.standards')} open>
                <ul className="pd-list">
                  {part.standards.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </Section>

              <Section index={5} title={t('pd.uses')} open>
                <ul className="pd-list">
                  {part.applications.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </Section>

              {part.faq.map((f, i) => (
                <Section key={f.q} index={6 + i} title={f.q} open>
                  <p>{f.a}</p>
                </Section>
              ))}

              <Section index={6 + part.faq.length} title={t('pd.related')} open>
                <ul className="pd-related">
                  <li>
                    <Link to="/quality">{t('pd.relatedQuality')}</Link> — {t('pd.relatedQualityText')}
                  </li>
                  <li>
                    <Link to="/industries/enterprise-computing">{t('pd.relatedEnterprise')}</Link> — {t('pd.relatedEnterpriseText')}
                  </li>
                  <li>
                    <Link to="/all-products">{t('pd.relatedAll')}</Link> — {t('pd.relatedAllText')}
                  </li>
                </ul>
              </Section>
            </article>

            <aside className="pd-aside" ref={asideRef}>
              <div className="pd-card">
                <h2 className="pd-card-h">{t('pd.cta')}</h2>
                <p className="pd-card-p">{t('pd.quoteText').replace('{mpn}', part.mpn)}</p>
                <Link className="pd-cta" to="/Contact">
                  {t('pd.cta')}
                  <span className="pd-cta-arrow" aria-hidden="true">
                    <ChevronRight size={18} strokeWidth={3} />
                  </span>
                </Link>
                <p className="pd-card-note">
                  Or email <a href={`mailto:${email}`}>{email}</a>
                </p>
                {(whatsapp || wechat) && (
                  <ul className="pd-card-contacts">
                    {whatsapp && (
                      <li>
                        <span className="pd-card-contacts-k">WhatsApp</span>
                        <a
                          href={whatsapp.href || `https://wa.me/${whatsapp.value}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {whatsapp.value}
                        </a>
                      </li>
                    )}
                    {wechat && (
                      <li>
                        <span className="pd-card-contacts-k">WeChat</span>
                        <span className="pd-card-contacts-v">{wechat.value}</span>
                      </li>
                    )}
                  </ul>
                )}
              </div>

              <div className="pd-card pd-card-alt">
                <h2 className="pd-card-h">{t('pd.notPart')}</h2>
                <p className="pd-card-p">{t('pd.notPartText')}</p>
                <Link className="pd-link" to="/Contact">
                  {t('pd.askSource')}
                  <ChevronRight size={15} strokeWidth={3} />
                </Link>
              </div>

              <div className="pd-card">
                <h2 className="pd-card-h">{t('pd.checked')}</h2>
                <p className="pd-card-p">{t('pd.checkedText')}</p>
                <Link className="pd-link" to="/quality">
                  {t('pd.seeQuality')}
                  <ChevronRight size={15} strokeWidth={3} />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
