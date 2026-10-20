import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useConfig } from './config';
import { CERTIFICATE_METADATA, LOCALES, defaultLocale, localeOfPath, stripLocale, withLocale } from './content';
import { useCanonical } from './hooks';

/*
 * hreflang alternates and the self-referencing canonical for the current route.
 *
 * Both are written as real <link> tags because that is where a crawler looks, and both are
 * locale-aware: the German listing must point at the German listing, not back at the English
 * one, or the German page would be consolidated away as a duplicate.
 */
/*
 * Paths whose content is genuinely translated into the other live locales.
 *
 * The locale routes exist for every page so the localised navigation never dead-ends, but the
 * body copy of a page that has not been translated yet is still English. Declaring hreflang
 * for those would tell a crawler that an English page is the German version — a false claim,
 * and exactly the kind of thing that costs trust. They are therefore excluded until their
 * copy is translated.
 */
// Pages whose body copy exists in every enabled locale. Blog articles are still English and are
// deliberately excluded from alternates until their titles and bodies are translated.
const TRANSLATED_PATHS = new Set([
  '/',
  '/about-us',
  '/all-products',
  '/industries',
  '/quality',
  '/Contact',
  '/privacy',
]);

// Part pages are documented per locale: only a part that was actually written in that language
// may declare the others. `null` means every published part has a record in that language;
// a Set lists the exceptions.
const TRANSLATED_PARTS = {
  de: null,
  fr: null,
  es: null,
  ar: null,
  ru: null,
  ja: null,
  ko: null,
  zh: null,
  bg: null,
  hr: null,
  cs: null,
  da: null,
  nl: null,
};

const hasTranslatedPart = (bare, code) => {
  if (!bare.startsWith('/product/')) return false;
  const set = TRANSLATED_PARTS[code];
  if (set === null) return true;   // every published part has a record in this language
  if (!set) return false;          // this language has no part pages yet — declare nothing
  return set.has(decodeURIComponent(bare.slice('/product/'.length)));
};

/*
 * Coverage is tracked per locale, not just per path. Claiming an alternate for a page whose
 * body is in another language is a false signal, and it is the kind of thing that costs trust
 * with both readers and crawlers.
 */
// Every shipped language covers the same set of page bodies, so the rule is derived from the
// locale table instead of listed per language — a new language appears here the moment it is
// marked live, and cannot be forgotten. Part pages stay per-language because coverage is audited
// independently from the page-level copy.
const TRANSLATED = Object.fromEntries(
  LOCALES.filter((l) => l.live && l.code !== defaultLocale.code).map((l) => [
    l.code,
    (bare) => TRANSLATED_PATHS.has(bare) || hasTranslatedPart(bare, l.code),
  ]),
);

function isTranslated(bare, code) {
  if (code === 'en') return true;
  const test = TRANSLATED[code];
  return test ? test(bare) : false;
}

function useLocaleLinks(pathname) {
  const { site } = useConfig();
  const siteUrl = site?.url || 'https://www.yixinou.com';
  const bare = stripLocale(pathname);
  const code = localeOfPath(pathname) || 'en';

  // A single canonical element, shared with pages that need to override it (the product
  // listing does, for its filtered and paged states). This runs first on mount and the
  // listing's override runs after it, so there is never more than one canonical tag.
  useCanonical(siteUrl + withLocale(bare, code));

  useEffect(() => {
    const made = [];
    const add = (rel, attrs) => {
      const el = document.createElement('link');
      el.setAttribute('rel', rel);
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      el.dataset.routeManaged = '1';
      document.head.appendChild(el);
      made.push(el);
    };

    const href = siteUrl + (bare === '/' ? '/' : bare);

    // Alternates are declared only for a page that really exists in the other languages.
    // The English page declares alternates for every locale that has this page in its own
    // language; a localised page declares them for the others it can point at.
    const siblings = LOCALES.filter((l) => l.live && isTranslated(bare, l.code));
    // the current locale must itself have this page translated, otherwise a page
    // whose body is still English would advertise a translated alternate set
    if (isTranslated(bare, code) && siblings.length > 1) {
      siblings.forEach((l) => {
        add('alternate', {
          hreflang: l.hreflang,
          href: siteUrl + withLocale(bare, l.code),
        });
      });
      add('alternate', { hreflang: 'x-default', href });
    }

    return () => made.forEach((el) => el.remove());
  }, [bare, code, siteUrl]);
}

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const ROUTES = [
  { path: '/', label: 'Home' },
  { path: '/about-us', label: 'About us' },
  { path: '/all-products', label: 'All products' },
  { path: '/blogs800', label: 'Blogs' },
  { path: '/Contact', label: 'Contact us' },
  { path: '/privacy', label: 'Privacy Policy' },
];

// JSON-LD ItemList for the product listing page
export function ProductsItemList({ products }) {
  const { site } = useConfig();
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${site.name} Electronic Components`,
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: `${site.url}${p.href}`,
    })),
  };
  return <JsonLd data={data} />;
}

// JSON-LD Product schema for a single part page.
// No `offers` block is emitted: YIXINOU quotes per enquiry and does not publish
// prices or stock levels, so claiming `price` or `availability` here would be a
// claim the site cannot evidence.
export function ProductJsonLd({ part }) {
  const { site } = useConfig();
  const siteUrl = site.url || 'https://www.yixinou.com';
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${part.brand} ${part.mpn} ${part.title}`,
    sku: part.mpn,
    mpn: part.mpn,
    brand: { '@type': 'Brand', name: part.brand },
    category: part.category,
    description: part.summary,
    image: `${siteUrl}${part.img}`,
    url: `${siteUrl}/product/${part.mpn}`,
    additionalProperty: part.specs.map(([name, value]) => ({
      '@type': 'PropertyValue',
      name,
      value,
    })),
  };
  return <JsonLd data={data} />;
}

export function CertificateImageListJsonLd() {
  const { site } = useConfig();
  const siteUrl = site?.url || 'https://www.yixinou.com';
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'YIXINOU certificates and registrations',
    itemListElement: CERTIFICATE_METADATA.map((certificate, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'ImageObject',
        name: certificate.title,
        caption: certificate.alt,
        contentUrl: `${siteUrl}${certificate.src}`,
        width: certificate.width,
        height: certificate.height,
      },
    })),
  };
  return <JsonLd data={data} />;
}

export default function Seo() {
  const { pathname } = useLocation();
  const { company, site } = useConfig();
  const siteUrl = site.url || 'https://www.yixinou.com';

  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `${company.name} Electronic Co., Ltd.`,
    alternateName: company.name,
    legalName: company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/logo-official.png`,
    description:
      'YIXINOU specializes in the production and manufacturing of capacitors, IC chips, integrated circuits, resistors, transistors, etc. We support BOM orders and one-stop shopping.',
    address: {
      '@type': 'PostalAddress',
      streetAddress:
        'Room 2501-2503, Tower A, New Asia Guoli Building, No. 18 Zhonghang Road',
      addressLocality: 'Shenzhen',
      addressRegion: 'Guangdong',
      postalCode: '518031',
      addressCountry: 'CN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+86-18516133798',
        email: 'Jessie@yixinouchips.com',
        contactType: 'sales',
        areaServed: 'Worldwide',
        availableLanguage: ['English', 'Chinese'],
      },
    ],
    sameAs: Object.values(site.socials || {}).filter((u) => u && u !== '#'),
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${site.name} - Electronic Components Supplier`,
    url: siteUrl,
    inLanguage: 'en',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        // must resolve: the product listing is the only route that renders search,
        // so the sitelinks searchbox declaration points there rather than at a
        // /search path the site does not serve.
        urlTemplate: `${siteUrl}/all-products?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  useLocaleLinks(pathname);

  const breadcrumbItems = [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }];
  // the breadcrumb matches on the path without its locale prefix
  const current = ROUTES.find((r) => r.path === stripLocale(pathname));
  if (current && current.path !== '/') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: current.label,
      item: `${siteUrl}${current.path}`,
    });
  }
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  return (
    <>
      <JsonLd data={org} />
      <JsonLd data={website} />
      {current && <JsonLd data={breadcrumb} />}
    </>
  );
}
