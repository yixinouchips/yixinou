import React, { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { I18nProvider } from './i18n';
import { ConfigProvider, useConfig } from './config';
import { LOCALES, defaultLocale, stripLocale } from './content';
import ErrorBoundary from './ErrorBoundary';
import { initAnalytics } from './analytics';
import { usePageMeta, usePageTracking } from './hooks';
import Seo from './Seo';
import CookieConsent from './CookieConsent';
import Header from './Header';
import Banner from './Banner';
import Advantages from './Advantages';
import Categories from './Categories';
import HotProducts from './HotProducts';
import Industries from './Industries';
import VideoSection from './VideoSection';
import Factory from './Factory';
import Team from './Team';
import Subscribe from './Subscribe';
import News from './News';
import Partners from './Partners';
import RelatedSearch from './RelatedSearch';
import Footer, { SideBar } from './Footer';
import AboutUs from './pages/AboutUs';
import AllProducts from './pages/AllProducts';
import Blogs from './pages/Blogs';
import IndustriesPage from './pages/IndustriesPage';
import ProductDetail from './pages/ProductDetail';
import IndustryDetail from './pages/IndustryDetail';
import Quality from './pages/Quality';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import AdminApp from './admin/AdminApp';
import './styles.css';

const SECTION_COMPONENTS = {
  banner: Banner,
  advantages: Advantages,
  categories: Categories,
  hotProducts: HotProducts,
  industries: Industries,
  video: VideoSection,
  factory: Factory,
  team: Team,
  subscribe: Subscribe,
  news: News,
  partners: Partners,
  related: RelatedSearch,
};

function Home() {
  const cfg = useConfig();
  const sections = (cfg.layout.homeSections || []).filter((s) => s.enabled);
  return (
    <main>
      {sections.map((s) => {
        const Comp = SECTION_COMPONENTS[s.key];
        return Comp ? <Comp key={s.key} /> : null;
      })}
    </main>
  );
}

// Fallbacks matching the static tags in index.html. Routes with no TDK entry
// (a part number that is not published yet, or an unmapped path) must still set
// a real <title> — otherwise the tab and the crawler see "undefined".
const DEFAULT_TITLE =
  'YIXINOU | Electronic Components Supplier - Capacitors, IC Chips, Integrated Circuits';
const DEFAULT_DESCRIPTION =
  'Shenzhen electronic components manufacturer and distributor. Capacitors, IC chips, integrated circuits, resistors, transistors. BOM orders and one-stop shopping.';
const DEFAULT_KEYWORDS =
  'capacitors, ic chips, integrated circuits, resistor, transistors, shenzhen chips supplies, electronic components supplier, ic chip distributor, integrated circuits manufacturer, wholesale electronic components, BOM service, transistors wholesale';

// Applies per-route TDK (title/description/keywords) from site-config.json
function TdkApplier() {
  const { pathname } = useLocation();
  const cfg = useConfig();
  // A localised path first looks for its own entry (/de/all-products), then falls back to the
  // unprefixed one so a page without translated metadata still gets a real title.
  const bare = stripLocale(pathname);
  const tdk = cfg.tdk?.[pathname] || cfg.tdk?.[bare] || {};
  const siteName = cfg.site?.name || 'YIXINOU';

  let { title, description } = tdk;
  // A part page whose MPN has no TDK entry yet still gets a usable, quotable title.
  if (!title && bare.startsWith('/product/')) {
    const mpn = decodeURIComponent(bare.slice('/product/'.length));
    if (mpn) {
      title = `${mpn} - Request Price and Availability | ${siteName}`;
      description = `Request a quote for ${mpn}. ${siteName} sources electronic components through franchise and verified independent channels, with incoming inspection before every shipment.`;
    }
  }

  usePageMeta(
    title || DEFAULT_TITLE,
    description || DEFAULT_DESCRIPTION,
    tdk.keywords || DEFAULT_KEYWORDS
  );
  return null;
}

/*
 * One route table, used twice: unprefixed for English, and under a locale prefix for every
 * locale that actually has translated content. The prefix only selects the language the
 * components read from the dictionary — routing, data and structured output stay shared, so
 * a German page cannot drift from its English counterpart.
 */
const PAGES = [
  ['/', Home],
  ['/about-us', AboutUs],
  ['/all-products', AllProducts],
  ['/blogs800', Blogs],
  ['/quality', Quality],
  ['/industries', IndustriesPage],
  ['/industries/:slug', IndustryDetail],
  ['/product/:mpn', ProductDetail],
  ['/Contact', Contact],
  ['/privacy', Privacy],
];

// A locale is routable only once its dictionary exists, otherwise its URLs would render
// English under a foreign prefix.
const LIVE_PREFIXES = LOCALES.filter((l) => l.live && l.code !== defaultLocale.code);

function LocaleTree() {
  return (
    <Routes>
      {PAGES.map(([p, C]) =>
        p === '/' ? (
          <Route key={p} index element={<C />} />
        ) : (
          <Route key={p} path={p.replace(/^\//, '')} element={<C />} />
        ),
      )}
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

function Shell() {
  const { pathname } = useLocation();
  usePageTracking(pathname);
  useEffect(() => {
    initAnalytics();
  }, []);

  if (pathname.startsWith('/admin')) {
    return (
      <>
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Seo />
      <TdkApplier />
      {/* Every route now renders its own visible <h1>: the banner-carried title
          on inner pages, the title band on Blogs and Contact, and the
          strapline under the carousel on Home. The hidden fallback heading
          that used to sit here would have produced a second <h1>. */}
      <Header />
      <Routes>
        {PAGES.map(([p, C]) => (
          <Route key={p} path={p} element={<C />} />
        ))}
        {LIVE_PREFIXES.map((l) => (
          <Route key={l.code} path={`/${l.code}/*`} element={<LocaleTree />} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
      <SideBar />
      <Footer />
      <CookieConsent />
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        {/* both providers sit inside the router: the i18n provider reads the locale prefix off
            the URL, and the config provider then reads the language from it to merge the
            matching copy pack */}
        <I18nProvider>
          <ConfigProvider>
            <Shell />
          </ConfigProvider>
        </I18nProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

createRoot(document.getElementById('root')).render(<App />);
