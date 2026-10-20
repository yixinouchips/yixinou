import { useConfig } from './config';
import { useI18n } from './i18n';
import { useReveal } from './hooks';

export default function Advantages() {
  const { advantages: ADVANTAGES } = useConfig();
  const { t } = useI18n();
  const ref = useReveal('fadeInUp', 0.1);
  return (
    <section className="amenities" ref={ref}>
      <div className="container">
        <div className="content text-center">
          <div className="row">
            {ADVANTAGES.map((a) => (
              <div className="col-xl-3 col-lg-4 col-md-4 col-6" key={a.title}>
                <div className="box">
                  <img src={a.img} alt={a.alt} width="48" height="48" loading="lazy" />
                  <h6>{t(`adv.${a.title}`)}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
