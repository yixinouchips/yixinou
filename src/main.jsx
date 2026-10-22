import React, { useEffect, Suspense, lazy } from 'react';
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
import LazySection from './LazySection';
import Footer, { SideBar } from './Footer';
import './styles.css';

// Below-the-fold home sections (Lazy loaded)
const Industries = lazy(() => import('./Industries'));
const VideoSection = lazy(() => import('./VideoSection'));
const Factory = lazy(() => import('./Factory'));
const Team = lazy(() => import('./Team'));
const Subscribe = lazy(() => import('./Subscribe'));
const News = lazy(() => import('./News'));
const Partners = lazy(() => import('./Partners'));
const RelatedSearch = lazy(() => import('./RelatedSearch'));

// Subpage routes (Lazy loaded)
const AboutUs = lazy(() => import('./pages/AboutUs'));
const AllProducts = lazy(() => import('./pages/AllProducts'));
const Blogs = lazy(() => import('./pages/Blogs'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const Quality = lazy(() => import('./pages/Quality'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const AdminApp = lazy(() => import('./admin/AdminApp'));

const PageLoader = () => (
  <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div style={{ width: '32px', height: '32px', border: '3px solid #e2e8f0', borderTopColor: '#2563eb', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
  </div>
);

const SYNC_SECTIONS = {
  banner: Banner,
  advantages: Advantages,
  categories: Categories,
  hotProducts: HotProducts,
};

const LAZY_SECTIONS = {
  industries: { Comp: Industries, minHeight: '380px' },
  video: { Comp: VideoSection, minHeight: '320px' },
  factory: { Comp: Factory, minHeight: '340px' },
  team: { Comp: Team, minHeight: '340px' },
  subscribe: { Comp: Subscribe, minHeight: '180px' },
  news: { Comp: News, minHeight: '340px' },
  partners: { Comp: Partners, minHeight: '240px' },
  related: { Comp: RelatedSearch, minHeight: '180px' },
};

function Home() {
  const cfg = useConfig();
  const sections = (cfg.layout.homeSections || []).filter((s) => s.enabled);
  return (
    <main>
      {sections.map((s) => {
        if (SYNC_SECTIONS[s.key]) {
          const Comp = SYNC_SECTIONS[s.key];
          return <Comp key={s.key} />;
        }
        if (LAZY_SECTIONS[s.key]) {
          const { Comp, minHeight } = LAZY_SECTIONS[s.key];
          return (
            <LazySection key={s.key} minHeight={minHeight}>
              <Suspense fallback={<div style={{ minHeight }} />}>
                <Comp />
              </Suspense>
            </LazySection>
          );
        }
        return null;
      })}
    </main>
  );
}

const DEFAULT_TITLE =
  'YIXINOU | Electronic Components Supplier - Capacitors, IC Chips, Integrated Circuits';
const DEFAULT_DESCRIPTION =
  'Shenzhen electronic components manufacturer and distributor. Capacitors, IC chips, integrated circuits, resistors, transistors. BOM orders and one-stop shopping.';
const DEFAULT_KEYWORDS =
  'capacitors, ic chips, integrated circuits, resistor, transistors, shenzhen chips supplies, electronic components supplier, ic chip distributor, integrated circuits manufacturer, wholesale electronic components, BOM service, transistors wholesale';

function TdkApplier() {
  const { pathname } = useLocation();
  const cfg = useConfig();
  const bare = stripLocale(pathname);
  const tdk = cfg.tdk?.[pathname] || cfg.tdk?.[bare] || {};
  const siteName = cfg.site?.name || 'YIXINOU';

  let { title, description } = tdk;
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

const LIVE_PREFIXES = LOCALES.filter((l) => l.live && l.code !== defaultLocale.code);

function LocaleTree() {
  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      </Suspense>
    );
  }

  return (
    <>
      <Seo />
      <TdkApplier />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {PAGES.map(([p, C]) => (
            <Route key={p} path={p} element={<C />} />
          ))}
          {LIVE_PREFIXES.map((l) => (
            <Route key={l.code} path={`/${l.code}/*`} element={<LocaleTree />} />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
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
