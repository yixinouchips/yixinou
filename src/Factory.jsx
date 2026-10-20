import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useConfig } from './config';
import { useI18n } from './i18n';
import { useCarousel, useMediaQuery, useReveal } from './hooks';

function Lightbox({ src, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="lightbox" onClick={onClose}>
      <button type="button" className="lightbox-close" aria-label="Close">
        <X size={26} />
      </button>
      <img src={src} alt="Factory environment enlarged" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

export default function Factory() {
  const { factory: FACTORY } = useConfig();
  const { t } = useI18n();
  const perView = useMediaQuery('(min-width: 992px)') ? 4 : 2;
  const [lightbox, setLightbox] = useState(null);
  const titleRef = useReveal('fadeInDown', 0);
  const listRef = useReveal('fadeInUp', 0.2);
  const { page, pages, next, prev, setPage } = useCarousel(FACTORY, perView, { autoplay: 0 });

  return (
    <section className="sutong-factory">
      <div className="container">
        <h3 className="section-heading" ref={titleRef}>
          {t('factory.title')}
        </h3>
        <div className="list" ref={listRef}>
          <div className="swiper">
            <div
              className="swiper-wrapper"
              style={{ transform: `translateX(-${page * (100 / perView)}%)` }}
            >
              {FACTORY.map((f, i) => (
                <div className="swiper-slide" style={{ width: `${100 / perView}%` }} key={f.img}>
                  <button type="button" className="pic" onClick={() => setLightbox(f.img)} aria-label={`Enlarge ${f.alt}`}>
                    <img src={f.img} alt={f.alt} loading="lazy" />
                  </button>
                  <p>{i + 1}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bot">
            <div className="page">
              <button type="button" className="swiper-button-prev" onClick={prev} aria-label="Previous">
                <ChevronLeft size={18} />
              </button>
              <button type="button" className="swiper-button-next" onClick={next} aria-label="Next">
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="tips">
              <div className="swiper-pagination">
                {Array.from({ length: pages }).map((_, i) => (
                  <span
                    key={i}
                    className={i === page ? 'active' : ''}
                    onClick={() => setPage(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {lightbox && <Lightbox src={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
