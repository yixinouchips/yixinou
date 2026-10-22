import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import * as D from './content';
import { useI18n } from './i18n';
import { loadLocalePack } from './localeLoader';

export const DEFAULT_CONFIG = {
  version: 1,
  site: { name: D.COMPANY.name, url: 'https://yixinouchips.com', adminPin: '', socials: { facebook: '#', linkedin: '#', youtube: '#' } },
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
  const [localePack, setLocalePack] = useState(null);

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

  useEffect(() => {
    if (lang && lang !== 'en') {
      loadLocalePack(lang).then((p) => {
        if (p) setLocalePack({ lang, pack: p });
      });
    } else {
      setLocalePack(null);
    }
  }, [lang]);

  const config = useMemo(() => {
    const base = published ? deepMerge(DEFAULT_CONFIG, published) : DEFAULT_CONFIG;
    if (!localePack || localePack.lang !== lang) return base;

    const { copy: locale, industry: industryLocale, tdk: localeTdk, parts: localeParts } = localePack.pack;
    const withCopy = locale ? deepMerge(base, locale) : base;
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

    let out = withIndustry;
    if (localeTdk) {
      const prefixed = {};
      for (const [path, entry] of Object.entries(localeTdk)) {
        prefixed[path === '/' ? `/${lang}/` : `/${lang}${path}`] = entry;
      }
      out = deepMerge(out, { tdk: prefixed });
    }

    if (!localeParts) return out;
    const productParts = { ...out.productParts };
    for (const [id, overlay] of Object.entries(localeParts)) {
      const en = productParts[id];
      if (!en) continue;
      productParts[id] = { ...en, ...overlay, categoryEn: en.categoryEn || en.category };
    }
    return { ...out, productParts };
  }, [published, lang, localePack]);

  return <ConfigContext.Provider value={{ config, ready }}>{children}</ConfigContext.Provider>;
}

export const useConfig = () => useContext(ConfigContext).config;
export const useConfigReady = () => useContext(ConfigContext).ready;
