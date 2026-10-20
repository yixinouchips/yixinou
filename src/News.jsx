import { Link } from './router';
import { ChevronRight } from 'lucide-react';
import { useConfig } from './config';
import { useI18n } from './i18n';
import { useReveal } from './hooks';

export default function News() {
  const { news: NEWS } = useConfig();
  const { t } = useI18n();
  const headRef = useReveal('fadeInLeft', 0.2);
  const listRef = useReveal('fadeInUp', 0.4);
  const [feature, ...rest] = NEWS;

  return (
    <section className="sung-news">
      <div className="container">
        <div className="top" ref={headRef}>
          <div className="col-lg-6 t">
            <h3>{t('news.title')}</h3>
            <Link aria-label={t('news.viewAll')} className="more1" to="/blogs800">
              {t('news.viewAll')} <ChevronRight size={14} />
            </Link>
          </div>
          <div className="col-lg-6 txt">
            <p className="rich-text">{t('news.subtitle')}</p>
          </div>
        </div>
        <div className="list row" ref={listRef}>
          <div className="sung-fl col-lg-6">
            <div className="item">
              <img src={feature.img} alt={feature.title} loading="lazy" />
              <div className="txt">
                <h3>
                  <Link to={feature.href}>{feature.title}</Link>
                </h3>
                <p>{feature.snippet}</p>
                <em>{feature.date}</em>
              </div>
            </div>
          </div>
          <div className="sung-fr col-lg-6">
            {rest.map((n) => (
              <div className="item" key={n.href}>
                <img src={n.img} alt={n.title} loading="lazy" />
                <div className="txt">
                  <h3>
                    <Link to={n.href}>{n.title}</Link>
                  </h3>
                  <p>{n.snippet}</p>
                  <em>{n.date}</em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
