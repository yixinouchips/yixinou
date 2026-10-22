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
          // overlay copy is optional: the managed config wins, i18n is a fallback.
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
              <picture className="banner-picture">
                {b.mobileImg && <source media="(max-width: 768px)" srcSet={b.mobileImg} type="image/webp" />}
                <img src={b.img} alt={b.alt || ''} width="1920" height="864" fetchPriority={i === 0 ? 'high' : 'auto'} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />
              </picture>
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
