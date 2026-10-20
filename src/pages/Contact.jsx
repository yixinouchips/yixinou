import { Building2, MapPin, Smartphone, Mail, MessageCircle, QrCode } from 'lucide-react';
import InquiryForm from '../InquiryForm';
import { CONTACT_LABEL_KEYS } from '../content';
import { useConfig } from '../config';
import { useI18n } from '../i18n';
import { useScrollTop } from '../hooks';

const ICONS = {
  building: Building2,
  pin: MapPin,
  phone: Smartphone,
  whatsapp: MessageCircle,
  mail: Mail,
  wechat: QrCode,
};

export default function Contact() {
  const { t } = useI18n();
  const { contact } = useConfig();
  const CONTACT_INFO = contact.info;
  const MAP_EMBED = contact.mapEmbed;
  useScrollTop();

  return (
    <>
      <div className="page-title-band">
        <div className="container">
          <h1>{t('contact.h1')}</h1>
          <p>{t('contact.lead')}</p>
        </div>
      </div>
      <div className="mach-contact">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="contact-info">
                {CONTACT_INFO.map((item) => {
                  const Icon = ICONS[item.icon] || MapPin;
                  return (
                    <dl className="d-flex" key={item.label}>
                      <dt>
                        <i className="contact-icon">
                          <Icon size={22} />
                        </i>
                      </dt>
                      <dd>
                        <h5>{t(CONTACT_LABEL_KEYS[item.label] || item.label)}</h5>
                        {item.href ? (
                          <p>
                            <a aria-label={item.label.toLowerCase()} href={item.href}>
                              {item.value}
                            </a>
                          </p>
                        ) : (
                          <p>{item.value}</p>
                        )}
                      </dd>
                    </dl>
                  );
                })}
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="contact-inquiry">
                <InquiryForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="guanxiang-map">
        <div className="container">
          <iframe
            src={MAP_EMBED}
            title="YIXINOU location on Google Maps"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="600"
          />
        </div>
      </section>
    </>
  );
}
