import { Boxes, ChevronRight, ClipboardList, PackageCheck, RefreshCw, ShieldCheck } from 'lucide-react';
import { Link, Navigate, useParams } from '../router';
import PageBanner from '../PageBanner';
import { useConfig } from '../config';
import { useI18n } from '../i18n';
import { useReveal, useScrollTop } from '../hooks';
import { INDUSTRY_ICONS } from '../industryIcons';
import { GROUPS as DEFAULT_GROUPS, INDUSTRY_DETAILS as DEFAULT_INDUSTRY_DETAILS, INSPECT as DEFAULT_INSPECT } from '../industryDetails';

const RISK_ICONS = {
  sourcing: Boxes,
  quality: ShieldCheck,
  inventory: PackageCheck,
  obsolete: RefreshCw,
};

// One template serves every /industries/<slug> page. The copy for each
// industry lives in src/industryDetails.js.
export default function IndustryDetail() {
  const { slug } = useParams();
  const config = useConfig();
  const { industriesPage: IP } = config;
  const { t } = useI18n();
  const groups = config.industryGroups || DEFAULT_GROUPS;
  const inspect = config.industryInspect || DEFAULT_INSPECT;
  const industryDetails = config.industryDetails || DEFAULT_INDUSTRY_DETAILS;
  useScrollTop();

  const detail = industryDetails[slug];
  const entry = (IP.items || []).find((i) => i.slug === slug);

  const heroRef = useReveal('fadeInUp', 0);
  const introRef = useReveal('fadeInUp', 0.1);
  const riskRef = useReveal('fadeInUp', 0.1);
  const inspectRef = useReveal('fadeInUp', 0.1);
  const relatedRef = useReveal('fadeInUp', 0.1);

  if (!detail || !entry) return <Navigate to="/industries" replace />;

  const others = (IP.items || []).filter((i) => i.slug !== slug);

  return (
    <>
      <PageBanner
        img="/assets/images/about-sidebanner.jpg"
        title={entry.title}
        crumb={[
          { href: '/industries', label: t('nav.industries') },
          { href: `/industries/${slug}`, label: entry.title },
        ]}
      />

      {/* ---------- hero ---------- */}
      <section className="about-hero" aria-label={t('industry.componentsAria').replace('{industry}', entry.title)}>
        <div className="container">
          <div className="about-hero-inner" ref={heroRef}>
            <div className="about-hero-txt">
              <span className="ind-eyebrow">{IP.eyebrow}</span>
              <h2 className="aero-hero-title">{detail.hero.heading}</h2>
              <p className="aero-hero-lead">{detail.hero.lead}</p>
              <Link className="ind-btn" to="/Contact">
                {t('inquiry.title')}
                <span className="ind-btn-arrow" aria-hidden="true">
                  <ChevronRight size={18} strokeWidth={3} />
                </span>
              </Link>
            </div>
            <figure className="about-hero-pic">
              <img src={detail.hero.img} alt={detail.hero.alt} loading="eager" />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- intro ---------- */}
      <section className="about-who">
        <div className="container">
          <div className="about-who-inner" ref={introRef}>
            <div className="about-who-txt">
              <span className="ind-eyebrow">{entry.title}</span>
              <h2>{detail.intro.title}</h2>
              <div className="about-rich">
                {detail.intro.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
            <figure className="about-who-pic">
              <img src={detail.intro.img} alt={detail.intro.alt} loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- mitigating risk ---------- */}
      <section className="aero-risk">
        <div className="container">
          <div className="about-head text-center">
            <span className="ind-eyebrow">{detail.risk.eyebrow}</span>
            <h2>{detail.risk.title}</h2>
          </div>
          <div className="row about-cards" ref={riskRef}>
            {detail.risk.items.map((c) => {
              const Icon = RISK_ICONS[c.icon] || Boxes;
              return (
                <div className="col-lg-3 col-md-6" key={c.title}>
                  <div className="about-card">
                    <span className="about-card-icon" aria-hidden="true">
                      <Icon size={24} strokeWidth={1.8} />
                    </span>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- what we source + product groups ---------- */}
      <section className="aero-parts">
        <div className="container">
          <div className="aero-parts-grid">
            <div className="aero-parts-col">
              <span className="ind-eyebrow">{detail.parts.eyebrow}</span>
              <h2>{detail.parts.title}</h2>
              <p className="aero-sub">{detail.parts.lead}</p>
              <ul className="aero-check">
                {detail.parts.items.map((x) => (
                  <li key={x}>
                    <ClipboardList size={16} strokeWidth={2.4} aria-hidden="true" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="aero-parts-col">
              <span className="ind-eyebrow">{groups.eyebrow}</span>
              <h2>{groups.title}</h2>
              <p className="aero-sub">{groups.lead}</p>
              <ul className="aero-groups">
                {groups.items.map((g) => (
                  <li key={g.title}>
                    <Link to={g.href}>
                      {g.title}
                      <ChevronRight size={15} strokeWidth={3} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- how we check ---------- */}
      <section className="aero-inspect" ref={inspectRef}>
        <div className="container">
          <div className="aero-inspect-inner">
            <figure className="aero-inspect-pic">
              <img src={inspect.img} alt={inspect.alt} loading="lazy" />
            </figure>
            <div className="aero-inspect-txt">
              <span className="ind-eyebrow">{inspect.eyebrow}</span>
              <h2>{inspect.title}</h2>
              <p>{inspect.text}</p>
              <Link className="ind-card-more" to={inspect.ctaHref}>
                {inspect.ctaLabel}
                <ChevronRight size={15} strokeWidth={3} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- call to action ---------- */}
      <section className="ind-cta">
        <div className="container">
          <div className="ind-cta-inner">
            <h2>{detail.cta.title}</h2>
            <p>{detail.cta.text}</p>
            <div className="ind-cta-actions">
              <Link className="ind-btn ind-btn-light" to={detail.cta.primary.href}>
                {detail.cta.primary.label}
                <span className="ind-btn-arrow" aria-hidden="true">
                  <ChevronRight size={18} strokeWidth={3} />
                </span>
              </Link>
              <Link className="ind-btn ind-btn-outline" to={detail.cta.secondary.href}>
                {detail.cta.secondary.label}
                <span className="ind-btn-arrow" aria-hidden="true">
                  <ChevronRight size={18} strokeWidth={3} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- other industries ---------- */}
      <section className="aero-related">
        <div className="container">
          <div className="about-head text-center">
            <span className="ind-eyebrow">{IP.eyebrow}</span>
            <h2>{t('industry.other')}</h2>
          </div>
          <ul className="aero-related-grid" ref={relatedRef}>
            {others.map((it) => {
              const Icon = INDUSTRY_ICONS[it.icon];
              return (
                <li key={it.slug}>
                  <Link to={it.href || `/industries#${it.slug}`}>
                    <span className="aero-related-ico" aria-hidden="true">
                      {Icon ? <Icon size={20} strokeWidth={1.8} /> : null}
                    </span>
                    {it.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
