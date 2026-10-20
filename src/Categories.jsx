import { Link } from './router';
import { ChevronRight } from 'lucide-react';
import { useConfig } from './config';
import { useI18n } from './i18n';
import { useReveal } from './hooks';

export default function Categories() {
  const { categories: CATEGORIES } = useConfig();
  const { t } = useI18n();
  const titleRef = useReveal('fadeInLeft', 0);
  const txtRef = useReveal('fadeInRight', 0);
  const gridRef = useReveal('fadeInUp', 0.2);
  return (
    <section className="sutong-goods_type">
      <div className="container">
        <div className="top">
          <div className="col-lg-6 t" ref={titleRef}>
            <h3>{t('cat.title')}</h3>
            <Link aria-label={t('cat.explore')} className="more1" to="/all-products">
              {t('cat.explore')} <ChevronRight size={14} />
            </Link>
          </div>
          <div className="col-lg-6 txt" ref={txtRef}>
            <p>{t('cat.subtitle')}</p>
          </div>
        </div>
        <ul className="row" ref={gridRef}>
          {CATEGORIES.map((c, i) => (
            <li className="col-md-6 col-lg-3" key={c.href} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <div className="box">
                <Link aria-label={c.label} className="pic" to={c.href}>
                  <img src={c.img} alt={c.label} loading="lazy" />
                </Link>
                <h5>
                  <Link aria-label={c.label} to={c.href}>
                    {c.label}
                  </Link>
                </h5>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
