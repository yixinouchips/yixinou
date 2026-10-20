import { useState } from 'react';
import { Link } from './router';
import { Phone, MessageCircle, Mail, QrCode, Facebook, Linkedin, Youtube, Send } from 'lucide-react';
import { useConfig } from './config';
import { useI18n } from './i18n';

export function SideBar() {
  const { company: COMPANY } = useConfig();
  return (
    <div className="derun-side-bar" role="complementary" aria-label="Quick contact sidebar">
      <a href={COMPANY.telHref} aria-label="Phone" title="Phone">
        <Phone size={20} strokeWidth={2} />
      </a>
      <a href={COMPANY.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">
        <MessageCircle size={20} strokeWidth={2} />
      </a>
      <a href={COMPANY.email} aria-label="Email" title="Email">
        <Mail size={20} strokeWidth={2} />
      </a>
      <button type="button" aria-label="WeChat" title="WeChat" className="wx-trigger">
        <QrCode size={20} strokeWidth={2} />
        <div className="wx-box">
          <div className="box">
            <img
              src={COMPANY.qr || '/assets/images/jessie-wechat-qrcode.jpg'}
              alt="Jessie WeChat QR code - Shenzhen Yixinou Electronic Co., Ltd."
              title="Scan QR code to connect with Jessie on WeChat"
              width="150"
              height="150"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="arrowPanel">
            <div className="arrow01" />
            <div className="arrow02" />
          </div>
        </div>
      </button>
    </div>
  );
}

export default function Footer() {
  const { company: COMPANY } = useConfig();
  const { t } = useI18n();
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  const quickLinks = [
    ['/about-us', t('nav.about')],
    ['/all-products', t('nav.products')],
    ['/blogs800', t('nav.blogs')],
    ['/Contact', t('nav.contact')],
    ['/privacy', t('footer.privacy')],
  ];
  const productLinks = [
    ['/integrated-circuitsics', 'Integrated Circuits（ICS）'],
    ['/transistors', 'Transistors'],
    ['/connector', 'Connector'],
    ['/others', 'Others'],
    ['/module', 'Module'],
    ['/capacitors805', 'Capacitors'],
    ['/resistor', 'Resistor'],
    ['/sensor', 'Sensor'],
    ['/switch', 'Switch'],
    ['/led', 'LED'],
  ];

  return (
    <footer className="sung-footer">
      <div className="container">
        <div className="foot-top">
          <img src="/assets/images/logo-horizontal-white.png" alt="YIXINOU Electronic Co., Ltd." />
          <div className="share">
            <a aria-label="facebook" href="#" onClick={(e) => e.preventDefault()}>
              <Facebook size={18} />
            </a>
            <a aria-label="linkedin" href="#" onClick={(e) => e.preventDefault()}>
              <Linkedin size={18} />
            </a>
            <a aria-label="youtube" href="#" onClick={(e) => e.preventDefault()}>
              <Youtube size={18} />
            </a>
          </div>
        </div>
        <div id="footer">
          <div className="foot-nav">
            <h5>{t('footer.quickLinks')}</h5>
            <ul>
              {quickLinks.map(([href, label]) => (
                <li key={href}>
                  <Link aria-label={label} to={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-list">
            <h5>{t('footer.products')}</h5>
            <ul>
              {productLinks.map(([href, label]) => (
                <li key={href}>
                  <Link aria-label={label} to={href}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot-form">
            <h5>{t('footer.newsletter')}</h5>
            <p>{t('footer.newsletterDesc')}</p>
            <form
              className="form-box"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setDone(true);
              }}
            >
              {done ? (
                <p className="subscribe-done dark">{t('footer.done')}</p>
              ) : (
                <>
                  <input
                    className="submit_text"
                    type="email"
                    name="email"
                    placeholder={t('footer.yourEmail')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button aria-label={t('footer.subscribe')} className="submit_btn submit" type="submit">
                    <Send size={16} /> {t('footer.subscribe')}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>
            {t('footer.copyright')}{' '}
            <Link aria-label={t('footer.privacy')} to="/privacy">
              {t('footer.privacy')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
