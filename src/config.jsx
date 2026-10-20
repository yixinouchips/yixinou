import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as D from './content';
import { useI18n } from './i18n';

// ---- build the default config from content.js (fallback when no published config) ----
export const DEFAULT_CONFIG = {
  version: 1,
  site: { name: D.COMPANY.name, url: 'https://www.yixinou.com', adminPin: '', socials: { facebook: '#', linkedin: '#', youtube: '#' } },
  company: { ...D.COMPANY },
  nav: D.NAV,
  banners: D.BANNERS,
  advantages: D.ADVANTAGES,
  categories: D.CATEGORIES,
  hotProducts: D.HOT_PRODUCTS,
  factory: D.FACTORY,
  team: D.TEAM,
  news: D.NEWS,
  partners: D.PARTNERS,
  relatedKeywords: D.RELATED_KEYWORDS,
  industries: D.INDUSTRIES,
  about: { text: D.ABOUT_TEXT, factory: D.ABOUT_FACTORY, certificates: D.CERTIFICATES },
  aboutPage: D.ABOUT_EXTRA,
  // items now come from the real part records, so the listing and the part pages
  // can never disagree. The placeholder catalogue that used to live here was removed.
  products: { categories: D.PRODUCT_CATEGORIES, items: Object.values(D.PRODUCT_PARTS) },
  blogs: D.BLOG_POSTS,
  quality: D.QUALITY,
  industriesPage: D.INDUSTRIES_PAGE,
  pageBanners: D.PAGE_BANNERS,
  productParts: D.PRODUCT_PARTS,
  contact: { info: D.CONTACT_INFO, mapEmbed: D.MAP_EMBED },
  tdk: {
    '/': { title: document?.title || 'YIXINOU', description: '', keywords: '' },
    '/about-us': { title: 'About us - YIXINOU', description: '', keywords: '' },
    '/all-products': { title: 'All Products - YIXINOU', description: '', keywords: '' },
    '/blogs800': { title: 'Blogs - YIXINOU', description: '', keywords: '' },
    '/quality': { title: 'Quality Process - YIXINOU', description: '', keywords: '' },
    '/Contact': { title: 'Contact us - YIXINOU', description: '', keywords: '' },
    '/privacy': { title: 'Privacy Policy - YIXINOU', description: '', keywords: '' },
  },
  layout: {
    homeSections: [
      { key: 'banner', label: 'Banner', enabled: true },
      { key: 'advantages', label: 'Advantages', enabled: true },
      { key: 'categories', label: 'Product Categories', enabled: true },
      { key: 'hotProducts', label: 'Hot Products', enabled: true },
      { key: 'industries', label: 'Industries We Serve', enabled: true },
      { key: 'video', label: 'Video', enabled: true },
      { key: 'factory', label: 'Factory Environment', enabled: true },
      { key: 'team', label: 'Team', enabled: true },
      { key: 'subscribe', label: 'Subscribe', enabled: true },
      { key: 'news', label: 'News', enabled: true },
      { key: 'partners', label: 'Partners', enabled: true },
      { key: 'related', label: 'Related Search', enabled: true },
    ],
  },
};

function isObj(v) {
  return v && typeof v === 'object' && !Array.isArray(v);
}

// arrays replace, objects merge (published config wins over defaults)
export function deepMerge(base, override) {
  if (Array.isArray(base) || Array.isArray(override)) return override ?? base;
  if (isObj(base) && isObj(override)) {
    const out = { ...base };
    for (const k of Object.keys(override)) out[k] = deepMerge(base[k], override[k]);
    return out;
  }
  return override ?? base;
}

const ADMIN_DRAFT_KEY = 'yixinou-admin-draft';

export const loadDraft = () => {
  try {
    const raw = localStorage.getItem(ADMIN_DRAFT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};
export const saveDraft = (cfg) => {
  try {
    localStorage.setItem(ADMIN_DRAFT_KEY, JSON.stringify(cfg));
  } catch {
    /* storage full or unavailable */
  }
};
export const clearDraft = () => {
  try {
    localStorage.removeItem(ADMIN_DRAFT_KEY);
  } catch {
    /* ignore */
  }
};

const ConfigContext = createContext({ config: DEFAULT_CONFIG, ready: false });

export function ConfigProvider({ children }) {
  const [published, setPublished] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch('/site-config.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((cfg) => {
        if (!alive) return;
        if (cfg) setPublished(cfg);
        setReady(true);
      })
      .catch(() => {
        if (alive) setReady(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  const { lang } = useI18n();

  const config = useMemo(() => {
    const base = published ? deepMerge(DEFAULT_CONFIG, published) : DEFAULT_CONFIG;
    // The locale pack is merged last so translated copy wins over the English defaults and the
    // published configuration. deepMerge replaces arrays wholesale, which is what the copy
    // structures need (a paragraph list must not be merged element by element).
    const locale = D.LOCALE_COPY[lang];
    const withCopy = locale ? deepMerge(base, locale) : base;
    const industryLocale = D.LOCALE_INDUSTRIES?.[lang];
    const withIndustry = industryLocale
      ? deepMerge(withCopy, {
          industryDetails: industryLocale.industries,
          industryGroups: industryLocale.groups,
          industryInspect: industryLocale.inspect,
          industriesPage: {
            ...withCopy.industriesPage,
            items: (withCopy.industriesPage?.items || []).map((item) => {
              const detail = industryLocale.industries?.[item.slug];
              return detail
                ? { ...item, desc: detail.hero.lead, items: detail.parts.items }
                : item;
            }),
          },
        })
      : withCopy;

    // Per-locale page metadata ships in the bundle (see LOCALE_TDK). public/site-config.json is
    // only refreshed by the admin workbench's own publish action, so relying on it alone lets a
    // localised page keep a stale title long after the code around it shipped. Keys are expanded
    // to their full localised path, which is what TdkApplier looks up before the bare path.
    const localeTdk = D.LOCALE_TDK?.[lang];
    let out = withIndustry;
    if (localeTdk) {
      const prefixed = {};
      for (const [path, entry] of Object.entries(localeTdk)) {
        prefixed[path === '/' ? `/${lang}/` : `/${lang}${path}`] = entry;
      }
      out = deepMerge(out, { tdk: prefixed });
    }

    // Localized part records are overlaid field by field, so a part without a translation keeps
    // its English record instead of rendering empty space.
    const localeParts = D.LOCALE_PARTS?.[lang];
    if (!localeParts) return out;
    const productParts = { ...out.productParts };
    for (const [id, overlay] of Object.entries(localeParts)) {
      const en = productParts[id];
      if (!en) continue;
      // `category` is translated for the breadcrumb, but the listing filter and every nav link
      // address a part by its English taxonomy group, so the original value is preserved
      // alongside it. Without this the category rail would offer labels no link can reach.
      productParts[id] = { ...en, ...overlay, categoryEn: en.categoryEn || en.category };
    }
    return { ...out, productParts };
  }, [published, lang]);

  return <ConfigContext.Provider value={{ config, ready }}>{children}</ConfigContext.Provider>;
}

export const useConfig = () => useContext(ConfigContext).config;
export const useConfigReady = () => useContext(ConfigContext).ready;
