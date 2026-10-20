import { useRef, useState } from 'react';
import { Boxes, ChevronLeft, ChevronRight, ClipboardList, Play, SearchCheck, Truck } from 'lucide-react';
import { Link } from '../router';
import PageBanner from '../PageBanner';
import InquiryForm from '../InquiryForm';
import Lightbox from '../Lightbox';
import { CertificateImageListJsonLd } from '../Seo';
import { CERTIFICATE_METADATA, CONTACT_LABEL_KEYS } from '../content';
import { useConfig } from '../config';
import { useI18n } from '../i18n';
import { useCarousel, useMediaQuery, useReveal, useScrollTop } from '../hooks';

const CARD_ICONS = {
  sourcing: Boxes,
  bom: ClipboardList,
  inspection: SearchCheck,
  export: Truck,
};

function AboutVideo() {
  const { company } = useConfig();
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="about-video">
      <video
        ref={videoRef}
        controls
        preload="none"
        poster={company.videoPoster || '/assets/images/about-video-poster.jpg'}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      >
        <source src={company.video || '/assets/videos/company.mp4'} type="video/mp4" />
      </video>
      {!playing && (
        <button
          type="button"
          className="about-video-play"
          aria-label="Play company video"
          onClick={() => {
            const v = videoRef.current;
            if (v) {
              v.play();
              setPlaying(true);
            }
          }}
        >
          <Play size={30} />
        </button>
      )}
    </div>
  );
}

export default function AboutUs() {
  const { t } = useI18n();
  const { about, aboutPage, team: TEAM, contact, pageBanners: PB } = useConfig();
  const ABOUT_TEXT = about.text;
  const ABOUT_FACTORY = about.factory;
  const CONTACT_INFO = contact.info;
  useScrollTop();

  const heroRef = useReveal('fadeInUp', 0);
  const whoRef = useReveal('fadeInUp', 0.1);
  const cardsRef = useReveal('fadeInUp', 0.1);
  const factsRef = useReveal('fadeInUp', 0.1);
  const valuesRef = useReveal('fadeInUp', 0.1);
  const teamRef = useReveal('fadeInUp', 0.1);
  const videoRef = useReveal('fadeInUp', 0.1);
  const relatedRef = useReveal('fadeInUp', 0.1);

  const isLgFactory = useMediaQuery('(min-width: 992px)');
  const factoryPerView = isLgFactory ? 3 : 2;
  const isLgCert = useMediaQuery('(min-width: 1200px)');
  const isMdCert = useMediaQuery('(min-width: 768px)');
  const certPerView = isLgCert ? 4 : isMdCert ? 2 : 1;
  const [lightbox, setLightbox] = useState(null);
  const factory = useCarousel(ABOUT_FACTORY, factoryPerView);
  const certs = useCarousel(CERTIFICATE_METADATA, certPerView);

  const { hero, cards, facts, values, team: teamBlock, video: videoBlock, related } = aboutPage;
  const lightboxCertificate = CERTIFICATE_METADATA.find((certificate) => certificate.src === lightbox);

  return (
    <>
        <PageBanner
          img="/assets/images/yixinou-about-us-banner.jpg"
          title={PB['/about-us']?.title || t('page.about.title')}
          sub={PB['/about-us']?.sub}
          cta={PB['/about-us']?.cta}
          micro={PB['/about-us']?.micro}
          crumb={{ href: '/about-us', label: t('nav.about') }}
        />

      {/* ---------- our story: entity statement first, so the page is quotable ---------- */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-inner" ref={heroRef}>
            <div className="about-hero-txt">
              <span className="about-eyebrow">{hero.eyebrow}</span>
              <h2>{hero.title}</h2>
              <p className="about-hero-statement">{hero.statement}</p>
              <Link className="about-btn" to={hero.ctaHref}>
                {hero.ctaLabel}
                <span className="about-btn-arrow" aria-hidden="true">
                  <ChevronRight size={18} strokeWidth={3} />
                </span>
              </Link>
            </div>
            <figure className="about-hero-pic">
              <img src={hero.img} alt={hero.alt} loading="eager" />
            </figure>
          </div>
        </div>
      </section>

      {/* ---------- who we are ---------- */}
      <section className="about-who">
        <div className="container">
          <div className="about-who-inner" ref={whoRef}>
            <div className="about-who-txt">
              <span className="about-eyebrow">{t('about.heading')}</span>
              <h2>{t('about.whoWeAre')}</h2>
              <div className="about-rich">
                {ABOUT_TEXT.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
            <figure className="about-who-pic">
              <img
                src="/assets/images/yixinou-shenzhen-office-entrance.jpg"
                alt="The YIXINOU office entrance in Shenzhen, with the company's hexagonal brand signs on the wall and staff working in the open-plan office behind"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>

          <div className="row about-cards" ref={cardsRef}>
            {cards.map((c) => {
              const Icon = CARD_ICONS[c.icon] || Boxes;
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

      {/* ---------- at a glance: quotable, checkable figures ---------- */}
      <section className="about-facts">
        <div className="container">
          <div className="about-facts-head">
            <span className="about-eyebrow">{facts.eyebrow}</span>
            <h2>{facts.title}</h2>
          </div>
          <div className="row about-facts-row" ref={factsRef}>
            {facts.items.map((f) => (
              <div className="col-lg-3 col-6" key={f.label}>
                <div className="about-fact">
                  <div className="about-fact-value">{f.value}</div>
                  <span className="about-fact-label">{f.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- values ---------- */}
      <section className="about-values">
        <div className="container">
          <div className="about-head text-center">
            <span className="about-eyebrow">{values.eyebrow}</span>
            <h2>{values.title}</h2>
          </div>
          <div className="about-values-grid" ref={valuesRef}>
            {values.items.map((v) => (
              <div className="about-value" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- team ---------- */}
      <section className="about-team">
        <div className="container">
          <div className="about-head text-center">
            <span className="about-eyebrow">{teamBlock.eyebrow}</span>
            <h2>{teamBlock.title}</h2>
            <p className="about-lead">{teamBlock.lead}</p>
          </div>
          <div className="about-team-row" ref={teamRef}>
            {TEAM.map((m) => (
              <figure className="about-member" key={m.name}>
                <img src={m.img} alt={`${m.name}, YIXINOU team`} loading="lazy" />
                <figcaption>{m.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- video: first-hand evidence ---------- */}
      <section className="about-film">
        <div className="container">
          <div className="about-head text-center">
            <span className="about-eyebrow">{videoBlock.eyebrow}</span>
            <h2>{videoBlock.title}</h2>
            <p className="about-lead">{videoBlock.text}</p>
          </div>
          <div ref={videoRef}>
            <AboutVideo />
          </div>
        </div>
      </section>

      {/* ---------- company gallery ---------- */}
      <section className="arshine-pic-list">
        <div className="container">
          <h3>{t('about.gallery')}</h3>
          <div className="list">
            <div className="swiper">
              <div className="swiper-wrapper" style={{ transform: `translateX(-${factory.page * (100 / factoryPerView)}%)` }}>
                {ABOUT_FACTORY.map((f) => (
                  <div className="swiper-slide" style={{ width: `${100 / factoryPerView}%` }} key={f.img}>
                    <button type="button" className="pic" onClick={() => setLightbox(f.img)} aria-label={`Enlarge ${f.alt}`}>
                      <img src={f.img} alt={f.alt} loading="lazy" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="swiper-pagination">
              {Array.from({ length: factory.pages }).map((_, i) => (
                <span key={i} className={i === factory.page ? 'active' : ''} onClick={() => factory.setPage(i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- certificates ---------- */}
      <CertificateImageListJsonLd />
      <section className="bobo-cert-list">
        <div className="container">
          <div className="index-tit">
            <h2>{t('about.certificate')}</h2>
          </div>
          <div className="list">
            <div className="swiper">
              <div className="swiper-wrapper" style={{ transform: `translateX(-${certs.page * 100}%)` }}>
                {CERTIFICATE_METADATA.map((certificate) => (
                  <div className="swiper-slide" style={{ width: `${100 / certPerView}%` }} key={certificate.src}>
                    <button
                      type="button"
                      onClick={() => setLightbox(certificate.src)}
                      aria-label={`Enlarge ${certificate.title}`}
                    >
                      <img
                        src={certificate.src}
                        alt={certificate.alt}
                        title={certificate.title}
                        width={certificate.width}
                        height={certificate.height}
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <button type="button" className="swiper-button-prev" onClick={certs.prev} aria-label="Previous">
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="swiper-button-next" onClick={certs.next} aria-label="Next">
              <ChevronRight size={18} />
            </button>
          </div>
          <div className="swiper-pagination">
            {Array.from({ length: certs.pages }).map((_, i) => (
              <span key={i} className={i === certs.page ? 'active' : ''} onClick={() => certs.setPage(i)} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- related ---------- */}
      <section className="about-related">
        <div className="container">
          <div className="about-head text-center">
            <span className="about-eyebrow">{related.eyebrow}</span>
            <h2>{related.title}</h2>
          </div>
          <div className="row about-related-row" ref={relatedRef}>
            {related.items.map((r) => (
              <div className="col-lg-3 col-md-6" key={r.title}>
                <Link className="about-related-card" to={r.href}>
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                  <span className="about-related-more">
                    Learn more <ChevronRight size={15} strokeWidth={3} />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- contact ---------- */}
      <section className="sung_inquiry container main">
        <div className="content">
          <div className="container contact-info">
            <div className="row">
              {CONTACT_INFO.filter((c) => c.label !== 'Company Name').map((item) => (
                <div className="text col-lg-6" key={item.label}>
                  <h5>{t(CONTACT_LABEL_KEYS[item.label] || item.label)}</h5>
                  <p>
                    {item.href ? (
                      <a
                        aria-label={item.label.toLowerCase()}
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <InquiryForm />
        </div>
      </section>

      {lightbox && (
        <Lightbox
          src={lightbox}
          alt={lightboxCertificate?.alt}
          onClose={() => setLightbox(null)}
        />
      )}
    </>
  );
}
