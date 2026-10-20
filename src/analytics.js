// ============================================================
// Analytics integration point.
// Fill in your own IDs below (or load them from a config file).
// Nothing is loaded or sent until analytics consent is granted
// via the cookie banner.
// ============================================================

export const ANALYTICS_CONFIG = {
  gtmId: '', // e.g. 'GTM-XXXXXXX'  (Google Tag Manager container)
  ga4Id: '', // e.g. 'G-XXXXXXXXXX' (Google Analytics 4 measurement id)
  matomoUrl: '', // e.g. 'https://your-matomo.example.com/'
  matomoSiteId: '', // e.g. '1'
};

const CONSENT_KEY = 'yixinou-consent';

export function getConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    return raw ? JSON.parse(raw) : null; // null = undecided yet
  } catch {
    return null;
  }
}

export function setConsent(granted) {
  const value = { analytics: !!granted, necessary: true, ts: Date.now() };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
  } catch {
    /* storage unavailable */
  }
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });
  }
  if (granted) {
    // load the configured trackers on first grant
    setTimeout(() => initAnalytics(), 0);
  }
  return value;
}

function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

function loadScript(src, id) {
  if (document.getElementById(id)) return;
  const s = document.createElement('script');
  s.id = id;
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

let loaded = false;

// Idempotent: registers consent defaults and loads configured trackers.
export function initAnalytics() {
  if (loaded) return;
  loaded = true;

  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500,
  });
  const consent = getConsent();
  if (consent && consent.analytics) {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }

  const { gtmId, ga4Id, matomoUrl, matomoSiteId } = ANALYTICS_CONFIG;

  if (gtmId) {
    gtag('js', new Date());
    gtag('config', gtmId);
    loadScript(`https://www.googletagmanager.com/gtm.js?id=${gtmId}`, 'yixinou-gtm');
  }
  if (ga4Id) {
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`, 'yixinou-ga4');
    gtag('config', ga4Id);
  }
  if (matomoUrl && matomoSiteId) {
    window._paq = window._paq || [];
    window._paq.push(['trackPageView']);
    window._paq.push(['enableLinkTracking']);
    window._paq.push(['setTrackerUrl', `${matomoUrl}matomo.php`]);
    window._paq.push(['setSiteId', matomoSiteId]);
    loadScript(`${matomoUrl}matomo.js`, 'yixinou-matomo');
  }
}

// Call on every route change (SPA pageview).
export function trackPageview(path) {
  const consent = getConsent();
  if (!consent || !consent.analytics) return;
  const { ga4Id, gtmId } = ANALYTICS_CONFIG;
  if (ga4Id) {
    gtag('event', 'page_view', { page_path: path, page_location: window.location.href });
  }
  if (gtmId) {
    gtag('event', 'pageview', { page: path });
  }
  if (window._paq) {
    window._paq.push(['setCustomUrl', path]);
    window._paq.push(['trackPageView']);
  }
}

// Generic event tracker for future conversions (form submits, clicks...).
export function trackEvent(category, action, label) {
  const consent = getConsent();
  if (!consent || !consent.analytics) return;
  gtag('event', action, { event_category: category, event_label: label });
}
