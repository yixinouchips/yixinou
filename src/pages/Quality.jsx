import {
  Award,
  Boxes,
  ChevronRight,
  ClipboardCheck,
  ClipboardList,
  Layers,
  Microscope,
  SearchCheck,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { Link } from '../router';
import PageBanner from '../PageBanner';
import { useConfig } from '../config';
import { useI18n } from '../i18n';
import { useReveal, useScrollTop } from '../hooks';

const ICONS = {
  sampling: Boxes,
  visual: SearchCheck,
  records: Layers,
  reporting: ClipboardList,
  process: ClipboardCheck,
  report: ClipboardList,
  shield: ShieldCheck,
  testing: Microscope,
  team: Users,
  award: Award,
};

function CtaButton({ href, children, variant = 'solid' }) {
  return (
    <Link className={`quality-btn quality-btn-${variant}`} to={href}>
      {children}
      <span className="quality-btn-arrow" aria-hidden="true">
        <ChevronRight size={18} strokeWidth={3} />
      </span>
    </Link>
  );
}

function SectionHead({ eyebrow, title, lead }) {
  return (
    <div className="quality-head text-center">
      {eyebrow && <span className="quality-eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {lead && <p className="quality-lead">{lead}</p>}
    </div>
  );
}

export default function Quality() {
  const { t } = useI18n();
  const { quality } = useConfig();
  useScrollTop();

  const heroRef = useReveal('fadeInUp', 0);
  const checksRef = useReveal('fadeInUp', 0.1);
  const processRef = useReveal('fadeInUp', 0.1);
  const midRef = useReveal('fadeInUp', 0.1);
  const standardRef = useReveal('fadeInUp', 0.1);
  const statsRef = useReveal('fadeInUp', 0.1);
  const servicesRef = useReveal('fadeInUp', 0.1);
  const faqRef = useReveal('fadeInUp', 0.1);
  const closingRef = useReveal('fadeInUp', 0.1);

  const { hero, checks, process: proc, midCta, standard, stats, services, faq, closing } = quality;

  return (
    <>
      <PageBanner
        img={quality.banner}
        title={t('quality.h1')}
        crumb={{ href: '/quality', label: t('nav.quality') }}
      />

      {/* ---------- hero: the promise, the proof, the first contact route ---------- */}
      <section className="quality-hero">
        <div className="container">
          <div className="quality-hero-inner" ref={heroRef}>
            <div className="quality-hero-txt">
              <span className="quality-eyebrow">{hero.eyebrow}</span>
              <h2>{hero.title}</h2>
              <p className="quality-hero-lead">{hero.lead}</p>
              <ul className="quality-hero-points">
                {hero.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <CtaButton href={hero.ctaHref}>{hero.ctaLabel}</CtaButton>
            </div>
            <figure className="quality-hero-pic">
              <img src={hero.img} alt={hero.alt} loading="eager" />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- what we check ---------- */}
      <section className="quality-checks">
        <div className="container">
          <SectionHead eyebrow={checks.eyebrow} title={checks.title} />
          <div className="row quality-checks-row" ref={checksRef}>
            {checks.items.map((it) => {
              const Icon = ICONS[it.icon] || ShieldCheck;
              return (
                <div className="col-lg-6 col-md-6" key={it.title}>
                  <div className="quality-card">
                    <span className="quality-card-icon" aria-hidden="true">
                      <Icon size={26} strokeWidth={1.8} />
                    </span>
                    <div className="quality-card-body">
                      <h3>{it.title}</h3>
                      <p>{it.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- the five steps: photo and step card alternating around a
           dashed connector, following the reference page's stepped layout ---------- */}
      <section className="quality-process" id="quality-process">
        <div className="container">
          <div className="quality-process-head">
            <div className="quality-process-head-l">
              <span className="quality-eyebrow">{proc.eyebrow}</span>
              <h2>{proc.title}</h2>
            </div>
            <p className="quality-process-statement">{proc.statement}</p>
          </div>

          <p className="quality-note">{proc.note}</p>

          <ol className="quality-steps" ref={processRef}>
            {proc.steps.map((s, i) => (
              <li className={`quality-step${i % 2 ? ' quality-step-reverse' : ''}`} key={s.title}>
                <div className="quality-step-rail" aria-hidden="true">
                  <span className="quality-step-num">{i + 1}</span>
                </div>
                <figure className="quality-step-media">
                  <img src={s.img} alt={s.alt} loading="lazy" />
                  <figcaption className="quality-step-badge">
                    {s.inhouse ? 'Our facility' : 'Partner laboratory'}
                  </figcaption>
                </figure>
                <div className="quality-step-card">
                  <span className="quality-step-tag">Step {i + 1}</span>
                  <h3>{s.title}</h3>
                  <ul className="quality-step-list">
                    {s.text.map((p) => (
                      <li key={p.slice(0, 24)}>{p}</li>
                    ))}
                  </ul>
                  <span className="quality-step-where">
                    {s.inhouse ? 'Carried out in-house' : 'Carried out by our partner laboratories'}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- mid-page contact route ---------- */}
      <section className="quality-midcta">
        <div className="container">
          <div className="quality-midcta-inner" ref={midRef}>
            <div className="quality-midcta-txt">
              <h2>{midCta.title}</h2>
              <p>{midCta.text}</p>
            </div>
            <div className="quality-midcta-act">
              <CtaButton href={midCta.ctaHref} variant="light">
                {midCta.ctaLabel}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- why YIXINOU ---------- */}
      <section className="quality-standard" id="quality-standard">
        <div className="container">
          <SectionHead eyebrow={standard.eyebrow} title={standard.title} />
          <div className="quality-standard-list" ref={standardRef}>
            {standard.blocks.map((b, i) => (
              <div className={`quality-standard-block${i % 2 ? ' quality-standard-reverse' : ''}`} key={b.title}>
                <figure className="quality-standard-pic">
                  <img src={b.img} alt={b.alt} loading="lazy" />
                </figure>
                <div className="quality-standard-txt">
                  <span className="quality-block-eyebrow">{b.eyebrow}</span>
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- numbers ---------- */}
      <section className="quality-stats">
        <div className="container">
          <SectionHead eyebrow={stats.eyebrow} title={stats.title} />
          <div className="row quality-stats-row" ref={statsRef}>
            {stats.items.map((s) => (
              <div className="col-lg-3 col-6" key={s.label}>
                <div className="quality-stat">
                  <div className="quality-stat-value">{s.value}</div>
                  <span className="quality-stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- services ---------- */}
      <section className="quality-services">
        <div className="container">
          <SectionHead eyebrow={services.eyebrow} title={services.title} />
          <div className="row quality-services-row" ref={servicesRef}>
            {services.items.map((it) => {
              const Icon = ICONS[it.icon] || ShieldCheck;
              return (
                <div className="col-lg-4 col-md-6" key={it.title}>
                  <Link className="quality-service" to={it.href}>
                    <span className="quality-service-icon" aria-hidden="true">
                      <Icon size={28} strokeWidth={1.7} />
                    </span>
                    <h3>{it.title}</h3>
                    <p>{it.text}</p>
                    <span className="quality-service-more">
                      Learn more <ChevronRight size={15} strokeWidth={3} />
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- FAQ: answers kept in the DOM, not hidden behind a toggle ---------- */}
      <section className="quality-faq">
        <div className="container">
          <SectionHead eyebrow={faq.eyebrow} title={faq.title} />
          <dl className="quality-faq-list" ref={faqRef}>
            {faq.items.map((f) => (
              <div className="quality-faq-item" key={f.q}>
                <dt>{f.q}</dt>
                <dd>{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- closing contact route ---------- */}
      <section className="quality-closing">
        <div className="container">
          <div className="quality-closing-inner text-center" ref={closingRef}>
            <h2>{closing.title}</h2>
            <p>{closing.text}</p>
            <div className="quality-closing-actions">
              <CtaButton href={closing.primary.href}>{closing.primary.label}</CtaButton>
              <CtaButton href={closing.secondary.href} variant="outline">
                {closing.secondary.label}
              </CtaButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
