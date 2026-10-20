import { useEffect } from 'react';
import { Link, useLocation } from '../router';
import { ArrowRight, ChevronRight } from 'lucide-react';
import PageBanner from '../PageBanner';
import { useConfig } from '../config';
import { useI18n } from '../i18n';
import { useReveal, useScrollTop } from '../hooks';
import { INDUSTRY_ICONS } from '../industryIcons';

export default function IndustriesPage() {
  const { industriesPage: IP, contact, pageBanners: PB } = useConfig();
  const { t } = useI18n();
  const { hash } = useLocation();
  useScrollTop();

  const headRef = useReveal('fadeInUp', 0);
  const gridRef = useReveal('fadeInUp', 0.15);

  // Deep links from the mega menu land here, e.g. /industries#aerospace
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (!el) return;
    const id = window.setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 140);
    return () => window.clearTimeout(id);
  }, [hash]);

  return (
    <>
        <PageBanner
          img="/assets/images/yixinou-industries-banner.jpg"
          title={PB['/industries']?.title || IP.title}
          sub={PB['/industries']?.sub}
          cta={PB['/industries']?.cta}
          micro={PB['/industries']?.micro}
          crumb={{ href: '/industries', label: t('nav.industries') }}
        />

      <section className="ind-intro">
        <div className="container">
          <div className="ind-intro-inner" ref={headRef}>
            <span className="ind-eyebrow">{IP.eyebrow}</span>
            <h2>{IP.title}</h2>
            <p className="ind-lead">{IP.lead}</p>
            <Link className="ind-btn" to="/Contact">
              {t('inquiry.title')}
              <span className="ind-btn-arrow" aria-hidden="true">
                <ChevronRight size={18} strokeWidth={3} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="ind-list">
        <div className="container">
          <ul className="row ind-grid" ref={gridRef}>
            {IP.items.map((it) => {
              const Icon = INDUSTRY_ICONS[it.icon];
              return (
                <li className="col-lg-4 col-md-6" key={it.slug} id={it.slug}>
                  <article className="ind-card">
                    <span className="ind-card-ico" aria-hidden="true">
                      {Icon ? <Icon size={26} strokeWidth={1.8} /> : null}
                    </span>
                    <h3>{it.href ? <Link to={it.href}>{it.title}</Link> : it.title}</h3>
                    <p>{it.desc}</p>
                    <ul className="ind-card-list">
                      {it.items.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                    {it.href ? (
                      <Link className="ind-card-more" to={it.href}>
                        {t('industry.learnMore').replace('{industry}', it.title)}
                        <ArrowRight size={15} strokeWidth={3} />
                      </Link>
                    ) : (
                      <Link className="ind-card-more" to="/Contact">
                        {t('industry.enquire').replace('{industry}', it.title)}
                        <ArrowRight size={15} strokeWidth={3} />
                      </Link>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="ind-cta">
        <div className="container">
          <div className="ind-cta-inner">
            <h2>{t('industry.sendBom')}</h2>
            <p>{t('industry.sendBomText')}</p>
            <div className="ind-cta-actions">
              <Link className="ind-btn ind-btn-light" to="/Contact">
                {t('contact.h1')}
                <span className="ind-btn-arrow" aria-hidden="true">
                  <ChevronRight size={18} strokeWidth={3} />
                </span>
              </Link>
              <Link className="ind-btn ind-btn-outline" to="/quality">
                {t('industry.qualityProcess')}
                <span className="ind-btn-arrow" aria-hidden="true">
                  <ChevronRight size={18} strokeWidth={3} />
                </span>
              </Link>
            </div>
            <p className="ind-cta-contact">
              {contact.info.find((c) => c.label === 'E-mail')?.value} ·{' '}
              {contact.info.find((c) => c.label === 'Phone')?.value}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
