import { useConfig } from './config';
import { useI18n } from './i18n';
import { useCarousel, useMediaQuery, useReveal } from './hooks';

export default function Partners() {
  const { partners: PARTNERS } = useConfig();
  const { t } = useI18n();
  const isLg = useMediaQuery('(min-width: 1200px)');
  const isMd = useMediaQuery('(min-width: 768px)');
  const perView = isLg ? 6 : isMd ? 4 : 2;
  const ref = useReveal('fadeInUp', 0.2);
  const { page, pages, setPage } = useCarousel(PARTNERS, perView, { autoplay: 4000, loop: true });

  const pageItems = [];
  for (let p = 0; p < pages; p += 1) {
    pageItems.push(PARTNERS.slice(p * perView, p * perView + perView));
  }

  return (
    <section className="partner-block" ref={ref}>
      <div className="bixol-case-study">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="bixol-ct-left">
                <div className="ct-content">
                  <span className="ct-title">
                    20<sup>+</sup>
                  </span>
                  <span className="ct-subtitle">{t('partner.title')}</span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bixol-ct-right">
                <div className="partner-track" style={{ transform: `translateX(-${page * 100}%)` }}>
                  {pageItems.map((group, g) => (
                    <div className="row partner-slide" key={g}>
                      {group.map((p) => (
                        <div className="col-md-4 col-sm-6 col-6 p-0 grid-item" key={p.name}>
                          <div className="bixol-pt-item">
                            <div className="item-img">
                              <img src={p.img} alt={p.name} width="120" height="40" loading="lazy" decoding="async" style={{ objectFit: "contain", aspectRatio: "3 / 1" }} />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination">
                  {Array.from({ length: pages }).map((_, i) => (
                    <span key={i} className={i === page ? 'active' : ''} onClick={() => setPage(i)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
