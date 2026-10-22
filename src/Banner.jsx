import { useEffect, useState } from 'react';
import { Link } from './router';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useConfig } from './config';
import { useI18n } from './i18n';

export default function Banner() {
  const { banners: BANNERS } = useConfig();
  const { t } = useI18n();
  const [idx, setIdx] = useState(0);
  const count = BANNERS.length;

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % count), 6000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <>
    <div id="sutong-banner" className="banner">
      <div className="swiper">
        {BANNERS.map((b, i) => {
          const n = i + 1;
          const title = b.title || t(`banner.b${n}.title`);
          const text = b.text || t(`banner.b${n}.text`);
          const cta = b.cta || t(`banner.b${n}.cta`);
          const accent = b.accent || t(`banner.b${n}.accent`);
          const hasCopy = Boolean(title || text || cta);
          return (
            <div
              key={b.img}
              className={`swiper-slide ${i === idx ? 'active' : ''}`}
            >
              {/* 1. Desktop (min-width: 769px): WebP background image */}
              <div className="banner-desktop-bg">
                <img
                  src={b.img}
                  alt={b.alt || ''}
                  width="1920"
                  height="864"
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>

              {/* 2. Mobile (max-width: 768px): 0-byte pure CSS gradient + vector circuitry for instant LCP */}
              <div
                className="banner-mobile-bg"
                style={{
                  background: 'radial-gradient(circle at 80% 20%, #1e3a8a 0%, #0d1b2a 60%, #050b14 100%)',
                }}
              >
                <svg className="banner-mobile-circuit" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M10 10 H90 V90 H10 Z" stroke="#60a5fa" strokeWidth="1.5" />
                  <path d="M25 25 H75 V75 H25 Z" stroke="#60a5fa" strokeWidth="1" strokeDasharray="2 2" />
                  <circle cx="50" cy="50" r="12" stroke="#93c5fd" strokeWidth="1.5" />
                  <path d="M50 0 V10 M50 90 V100 M0 50 H10 M90 50 H100" stroke="#60a5fa" strokeWidth="2" />
                </svg>
              </div>

              <Link to={b.href} className="slide-link">
                {hasCopy && (
                  <div className="banner-copy">
                    <h2 className="banner-title">
                      {title}
                      {accent && <span> {accent}</span>}
                    </h2>
                    <p className="banner-text">{text}</p>
                    <span className="banner-cta">{cta}</span>
                  </div>
                )}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="banner-nav">
        <button type="button" className="swiper-button-prev" onClick={() => setIdx((idx - 1 + count) % count)} aria-label="Previous slide">
          <ChevronLeft size={20} />
        </button>
        <button type="button" className="swiper-button-next" onClick={() => setIdx((idx + 1) % count)} aria-label="Next slide">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
    {/* The banner artwork carries its own baked-in headline, so the page's
        real <h1> sits directly beneath it as a strapline. */}
    <div className="home-h1-band">
      <div className="container">
        <h1>{t('home.h1')}</h1>
      </div>
    </div>
    </>
  );
}