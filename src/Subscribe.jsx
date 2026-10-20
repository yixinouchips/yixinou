import { Link } from './router';
import { ChevronRight } from 'lucide-react';
import { useConfig } from './config';
import { useI18n } from './i18n';
import { useReveal } from './hooks';

export default function Subscribe() {
  const { company: COMPANY } = useConfig();
  const { t } = useI18n();
  const ref = useReveal('fadeInUp', 0.2);

  return (
    <section className="sung-subscribe" style={{ backgroundImage: `url(${COMPANY.subscribeBg})` }}>
      <div className="container">
        <h2>{t('subscribe.ctaTitle')}</h2>
        <div className="subscribe-cta" ref={ref}>
          <Link className="subscribe-btn" to="/Contact">
            {t('subscribe.ctaBtn')}
            <span className="subscribe-btn-arrow" aria-hidden="true">
              <ChevronRight size={20} strokeWidth={3} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
