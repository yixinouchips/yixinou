import { useEffect, useState } from 'react';
import { Link } from './router';
import { getConsent, setConsent } from './analytics';
import { useI18n } from './i18n';

export default function CookieConsent() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-label="Cookie consent">
      <p className="cookie-text">
        {t('cookie.text')}{' '}
        <Link to="/privacy" onClick={() => setVisible(false)}>
          {t('cookie.link')}
        </Link>
        .
      </p>
      <div className="cookie-actions">
        <button
          type="button"
          className="btn-decline"
          onClick={() => {
            setConsent(false);
            setVisible(false);
          }}
        >
          {t('cookie.decline')}
        </button>
        <button
          type="button"
          className="btn-accept"
          onClick={() => {
            setConsent(true);
            setVisible(false);
          }}
        >
          {t('cookie.accept')}
        </button>
      </div>
    </div>
  );
}
