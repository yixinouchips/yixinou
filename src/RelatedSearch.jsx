import { Link } from './router';
import { useConfig } from './config';
import { useI18n } from './i18n';
import { useReveal } from './hooks';

export default function RelatedSearch() {
  const { relatedKeywords: RELATED_KEYWORDS } = useConfig();
  const { t } = useI18n();
  const ref = useReveal('fadeInUp', 0.1);
  return (
    <section className="bobo-keyword-box" ref={ref}>
      <div className="container">
        <h2>{t('related.title')}</h2>
        <ul>
          {RELATED_KEYWORDS.map((k) => (
            <li key={k.href}>
              <div className="section_title">
                <Link to={k.href}>
                  <h2>{k.label}</h2>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
