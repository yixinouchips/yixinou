import { useConfig } from './config';
import { useI18n } from './i18n';
import { useReveal } from './hooks';

export default function Team() {
  const { team: TEAM } = useConfig();
  const { t } = useI18n();
  const headRef = useReveal('slideInUp', 0);
  return (
    <section className="team-section">
      <div className="container">
        <div className="section-title text-center" ref={headRef}>
          <div className="section-sub-title">
            <h4>{t('team.subTitle')}</h4>
          </div>
          <div className="section-main-title">
            <h2>{t('team.title')}</h2>
          </div>
        </div>
        <div className="row team-row">
          {TEAM.map((m, i) => (
            <div className="listItem" key={m.name} style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="team-items-box">
                <div className="team-thumb">
                  <img src={m.img} alt={m.name} loading="lazy" />
                  <div className="team-content">
                    <h4>{m.name}</h4>
                    <span />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
