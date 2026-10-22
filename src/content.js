// YIXINOU site content
import { GROUPS as DEFAULT_INDUSTRY_GROUPS, INSPECT as DEFAULT_INDUSTRY_INSPECT, INDUSTRY_DETAILS as DEFAULT_INDUSTRY_DETAILS } from './industryDetails.js';

export const LOCALE_INDUSTRIES = {};
export const LOCALE_TDK = {};
export const LOCALE_PARTS = {};
export const LOCALE_COPY = {};

// ---------------- Industries ----------------
// The twelve industries YIXINOU supplies, matching the applications the company
// already states its components are used in. Certifications held by the
// reference site (AS9120B, AS6081, ISO/IEC 17025, ISO 14001, ISO 9001) are NOT
// reproduced here because YIXINOU's own certification status is not confirmed.
export const INDUSTRY_LIST = [
  {
    slug: 'aerospace',
    icon: 'rocket',
    title: 'Aerospace',
    href: '/industries/aerospace',
    href: '/industries/aerospace',
    desc: 'Components for avionics, flight control and ground support equipment, including discontinued and hard-to-find references.',
    items: [
      'Avionics, flight-control and instrument boards',
      'Discontinued, last-time-buy and obsolete references',
      'Connectors, relays, oscillators and passive components',
    ],
  },
  {
    slug: 'automotive',
    icon: 'car',
    title: 'Automotive',
    href: '/industries/automotive',
    href: '/industries/automotive',
    desc: 'Components for ADAS, infotainment, lighting, body control and electric-vehicle power systems.',
    items: [
      'ADAS, sensor and camera components',
      'Infotainment, display and audio parts',
      'Lighting, body control and power-management parts',
    ],
  },
  {
    slug: 'consumer-electronics',
    icon: 'monitor',
    title: 'Consumer Electronics',
    href: '/industries/consumer-electronics',
    desc: 'Components for phones, wearables, audio, smart home and small appliances, where cost and lead time decide the order.',
    items: [
      'Display, touch and camera components',
      'Power management and charging ICs',
      'Wireless, audio and passive components',
    ],
  },
  {
    slug: 'contract-manufacturing',
    icon: 'factory',
    title: 'Contract Manufacturing',
    href: '/industries/contract-manufacturing',
    desc: 'Line-down and volume support for EMS and contract manufacturers, quoted against your bill of materials.',
    items: [
      'BOM quotation and one-stop orders',
      'Line-down and shortage sourcing',
      'Second-source verification and inventory balancing',
    ],
  },
  {
    slug: 'energy',
    icon: 'zap',
    title: 'Energy',
    href: '/industries/energy',
    desc: 'Components for solar, storage, grid and power-conversion equipment.',
    items: [
      'Inverters and power-conversion parts',
      'Gate drivers, IGBTs and power modules',
      'Control, monitoring and magnetic components',
    ],
  },
  {
    slug: 'enterprise-computing',
    icon: 'server',
    title: 'Enterprise Computing & Servers',
    href: '/industries/enterprise-computing',
    desc: 'Components for servers, storage systems, networking appliances and data-centre hardware.',
    items: [
      'Server, storage and interface controllers',
      'Power supplies and voltage regulators',
      'Cooling, connectors and cabling',
    ],
  },
  {
    slug: 'gaming',
    icon: 'gamepad',
    title: 'Gaming',
    href: '/industries/gaming',
    desc: 'Components for gaming hardware, amusement, lottery and point-of-sale machines.',
    items: [
      'Display and controller parts',
      'Power, interface and lighting components',
      'Long-life replacements for legacy machines',
    ],
  },
  {
    slug: 'healthcare',
    icon: 'heart-pulse',
    title: 'Healthcare',
    href: '/industries/healthcare',
    desc: 'Components for patient monitoring, diagnostic imaging and laboratory equipment, where traceability matters.',
    items: [
      'Monitoring and diagnostic boards',
      'Sensors and signal-conditioning parts',
      'Power, isolation and discontinued references',
    ],
  },
  {
    slug: 'industrial-automation',
    icon: 'cog',
    title: 'Industrial Automation',
    href: '/industries/industrial-automation',
    desc: 'Components for robotics, drives, PLCs, sensors and power electronics on the factory floor.',
    items: [
      'PLC, drive and motion-control parts',
      'Sensors and interface ICs',
      'Power electronics, relays and terminals',
    ],
  },
  {
    slug: 'personal-computing',
    icon: 'keyboard',
    title: 'Personal Computing',
    href: '/industries/personal-computing',
    desc: 'Components for laptops, desktops, peripherals and their accessory supply chain.',
    items: [
      'Power management and charging ICs',
      'Interface, USB and display controllers',
      'Legacy references for repair and service',
    ],
  },
  {
    slug: 'semiconductor-manufacturing',
    icon: 'cpu',
    title: 'Semiconductor Manufacturing',
    href: '/industries/semiconductor-manufacturing',
    desc: 'Support components and spares for fabrication, test and packaging operations.',
    items: [
      'Test and handler interface parts',
      'Power supplies and control electronics',
      'Sensors, motion components and legacy spares',
    ],
  },
  {
    slug: 'telecom-networking',
    icon: 'network',
    title: 'Telecom & Networking',
    href: '/industries/telecom-networking',
    desc: 'Components for base stations, routers, switches, optical transport and access equipment.',
    items: [
      'RF, optical and interface components',
      'Power and circuit-protection parts',
      'Filters, connectors and line-card support',
    ],
  },
];

export const INDUSTRIES_PAGE = {
  eyebrow: 'Industries',
  title: 'Industries We Serve',
  lead:
    'We supply electronic components to manufacturers, contract manufacturers and traders across twelve industries. Every order is checked before it ships, and any part that needs internal analysis goes to our partner laboratories.',
  menuDesc:
    'We provide services and build partnerships with a multitude of companies across a broad array of industries.',
  ctaLabel: 'View all industries',
  ctaHref: '/industries',
  items: INDUSTRY_LIST,
};

export const NAV = [
  { label: 'Home', href: '/', active: true },
  { label: 'About us ', href: '/about-us' },
  {
    label: 'All products',
    href: '/all-products',
    children: [
      { label: 'Integrated Circuits（ICS）', href: '/all-products?category=Integrated Circuits (ICS)' },
      { label: 'Transistors', href: '/all-products?category=Transistors' },
      { label: 'Connector', href: '/all-products?category=Connector' },
      { label: 'Others', href: '/all-products?category=Others' },
      { label: 'Module', href: '/all-products?category=Module' },
      { label: 'Capacitors', href: '/all-products?category=Capacitors' },
      { label: 'Resistor', href: '/all-products?category=Resistor' },
      { label: 'Sensor', href: '/all-products?category=Sensor' },
      { label: 'Switch', href: '/all-products?category=Switch' },
      { label: 'LED', href: '/all-products?category=LED' },
    ],
  },
  { label: 'Industries', href: '/industries', mega: true, children: INDUSTRY_LIST },
  { label: 'Quality', href: '/quality' },
  {
    label: 'Blogs',
    href: '/blogs800',
    children: [
      // Both point at the blog index: /industry-information and /company-news were
      // never routes, so they fell through to the catch-all and behaved as 404s.
      // Split them out again once there are real per-category blog pages.
      { label: 'Industry Information', href: '/blogs800' },
      { label: 'Company News', href: '/blogs800' },
    ],
  },
  { label: 'Contact us ', href: '/Contact' },
];

export const BANNERS = [
  {
    img: '/assets/images/banner-r1-deepnavy.jpg',
    alt: 'YIXINOU electronic components and PCBA solutions banner',
    title: '',
    accent: '',
    text: '',
    cta: '',
    href: '/Contact',
  },
  {
    img: '/assets/images/banner-r2-deepnavy.jpg',
    alt: 'Reliable electronic components and PCBA solutions - from component sourcing to SMT assembly',
    title: '',
    text: '',
    cta: '',
    href: '/Contact',
  },
  {
    img: '/assets/images/banner-r3-deepnavy.jpg',
    alt: '100% new and original factory sealed electronic components guarantee',
    title: '',
    text: '',
    cta: '',
    href: '/Contact',
  },
];

export const ADVANTAGES = [
  { img: '/assets/images/adv-powerful.png', alt: 'Powerful Production', title: 'Powerful Production' },
  { img: '/assets/images/adv-premium.png', alt: 'Premium Supply', title: 'Premium Supply' },
  { img: '/assets/images/adv-price.png', alt: 'Competitive Prices', title: 'Competitive Prices' },
  { img: '/assets/images/adv-tailored.png', alt: 'Tailored Solutions', title: 'Tailored Solutions' },
  { img: '/assets/images/adv-customized.png', alt: 'Customized Services', title: 'Customized Services' },
  { img: '/assets/images/adv-expert.png', alt: 'Expert Support', title: 'Expert Support' },
  { img: '/assets/images/adv-experience.png', alt: 'Rich Industry Experience', title: 'Rich Industry Experience' },
  { img: '/assets/images/adv-quality.png', alt: 'High Quality And Strict Quality Control System', title: 'High Quality And Strict Quality Control System' },
];

export const CATEGORIES = [
  { img: '/assets/images/cat-ics.jpg', label: 'Integrated Circuits（ICS）', href: '/all-products?category=Integrated Circuits (ICS)' },
  { img: '/assets/images/cat-transistors.jpg', label: 'Transistors', href: '/all-products?category=Transistors' },
  { img: '/assets/images/cat-connector.jpg', label: 'Connector', href: '/all-products?category=Connector' },
  { img: '/assets/images/cat-others.jpg', label: 'Others', href: '/all-products?category=Others' },
];

// Curated home-page slots. Each entry is the id of a published part record; the
// component reads the part number, image and link from that record, so a featured
// slot cannot point at a page that does not exist.
export const HOT_PRODUCTS = [
  'STM32F103RCT6',
  'ESP8266EX',
  'XC6SLX9-3TQG144I',
  'TMS320F28335PGFA',
  'K4A8G085WB-BCTD',
  'MT41K256M16TW-107',
  'ATMEGA128A-AU',
  'AD780BRZ-REEL7',
];

export const FACTORY = [
  { img: '/assets/images/factory-office.jpg', alt: 'Office' },
  { img: '/assets/images/factory-warehouse.jpg', alt: 'Warehouse' },
  { img: '/assets/images/factory-smt.jpg', alt: 'SMT warehouse' },
  { img: '/assets/images/factory-storage.jpg', alt: 'Component storage' },
];

export const TEAM = [
  { img: '/assets/images/team-linda.jpg', name: 'Linda' },
  { img: '/assets/images/team-lucy.jpg', name: 'Lucy' },
  { img: '/assets/images/team-jessie.jpg', name: 'Jessie' },
  { img: '/assets/images/team-joon.jpg', name: 'Joon' },
  { img: '/assets/images/team-lisa.jpg', name: 'Lisa' },
];

export const NEWS = [
  {
    img: '/assets/images/news-ic-testing.jpg',
    title: 'Definition and fundamentals of IC testing',
    href: '/definition-and-fundamentals-of-ic-testing',
    snippet:
      'Integrated Circuit Testing refers to the process of testing the performance, functionality and reliability of integrated circuits.The purpose of IC testing is to ensure that integrated circuits can meet the design requirements and performance targets in practical applications, and to improve the reliability and stability of integrated circuits.',
    date: 'Aug, 05, 2024',
  },
  {
    img: '/assets/images/news-pcb.jpg',
    title: 'A few knowledges about PCB',
    href: '/a-few-knowledges-about-pcb',
    snippet:
      'As the mother of electronic components, PCB plays an important role in electronic applications. According to different design principles, PCB can be divided into single panel, multi-layer board, soft board, hard board, soft and hard combined board and other types.',
    date: 'Jul, 30, 2024',
  },
  {
    img: '/assets/images/news-munich.jpg',
    title: 'Visit the Munich Shanghai Electronics Fair',
    href: '/visit-the-munich-shanghai-electronics-fair',
    snippet:
      'The electronics industry in the first half of this year is not very good, but the Munich Shanghai Electronics Show on July 8 is extremely hot, including more than 1670 exhibitors, more than 75,400 professional visitors to the scene. A number of companies focused on new energy vehicles, photovoltaic, energy storage, robotics, third-generation semiconductors and other cutting-edge hot areas.',
    date: 'Jul, 25, 2024',
  },
  {
    img: '/assets/images/news-meal.jpg',
    title: 'Company summer collective meals in Shenzhen China 2024',
    href: '/company-summer-collective-meals-in-shenzhen-china-2024',
    snippet:
      'We organised a summer group dinner at the five-star hotel Grand Cloud Sky in Shenzhen. In 24th July, not only all the staffs of the company attended the activity, but also invited our domestic famous brand agent friends. We gathered together to enjoy a delicious dinner, but also reach an agreement in the supplying and selling of electronic components.',
    date: 'Jul, 15, 2024',
  },
];

export const PARTNERS = [
  { img: '/assets/images/partner-walsin.webp', name: 'Walsin' },
  { img: '/assets/images/partner-vishay.png', name: 'Vishay' },
  { img: '/assets/images/partner-toshiba.png', name: 'Toshiba' },
  { img: '/assets/images/partner-te.webp', name: 'TE Connectivity' },
  { img: '/assets/images/partner-st.png', name: 'STMicroelectronics' },
  { img: '/assets/images/partner-sanrex.webp', name: 'SanRex' },
  { img: '/assets/images/partner-rohm.png', name: 'Rohm' },
  { img: '/assets/images/partner-panasonic.webp', name: 'PANASONIC' },
  { img: '/assets/images/partner-onsemi.png', name: 'onsemi' },
  { img: '/assets/images/partner-nxp.png', name: 'NXP' },
  { img: '/assets/images/partner-molex.png', name: 'Molex' },
  { img: '/assets/images/partner-microchip.png', name: 'Microchip' },
  { img: '/assets/images/partner-kemet.jpeg', name: 'KEMET' },
  { img: '/assets/images/partner-ixys.jpg', name: 'IXYS' },
  { img: '/assets/images/partner-infineon.png', name: 'Infineon' },
  { img: '/assets/images/partner-epson.png', name: 'Epson' },
  { img: '/assets/images/partner-diodes.png', name: 'Diodes' },
  { img: '/assets/images/partner-broadcom.png', name: 'Broadcom' },
  { img: '/assets/images/partner-adi.png', name: 'Analog Devices' },
  { img: '/assets/images/partner-3m.png', name: '3M' },
];

export const RELATED_KEYWORDS = [
  { label: 'Capacitors', href: '/sadipic/capacitors' },
  { label: 'Ic Chips', href: '/sadipic/ic-chips' },
  { label: 'Integrated Circuits', href: '/sadipic/integrated-circuits' },
  { label: 'Resistor', href: '/sadipic/resistor' },
  { label: 'Transistors', href: '/sadipic/transistors' },
];

// language selector: [code, label, sprite object-position] ('' = no flag)
/*
 * Locale table: the single source of truth for the language selector and, once the
 * translated pages exist, for the /<code>/ routes and the hreflang alternates.
 *
 *   code     path prefix, and the key looked up in the UI dictionary
 *   label    shown in the selector, in the language itself
 *   flag     offset into the flag sprite; empty means no artwork, so the selector
 *            falls back to a letter chip instead of showing the wrong flag
 *   hreflang value for <link rel="alternate" hreflang>; not always the same as
 *            the code (zh-Hant, nb)
 *   live     true only where translated content actually exists. A locale that is
 *            not live is listed but not selectable, because pointing it at a route
 *            that does not exist sends the visitor to the English home page
 */
export const LOCALES = [
  { code: 'en', label: 'EN', flag: '-384px -38px', hreflang: 'en', live: true, dir: 'ltr' },
  { code: 'zh', label: '繁體中文', flag: '', hreflang: 'zh-Hant', live: true, dir: 'ltr' },
  { code: 'ar', label: 'العربية', flag: '-90px -6px', hreflang: 'ar', live: true, dir: 'rtl' },
  { code: 'bg', label: 'Български', flag: '-216px -6px', hreflang: 'bg', live: true, dir: 'ltr' },
  { code: 'hr', label: 'Hrvatski', flag: '-300px -102px', hreflang: 'hr', live: true, dir: 'ltr' },
  { code: 'cs', label: 'Čeština', flag: '-90px -38px', hreflang: 'cs', live: true, dir: 'ltr' },
  { code: 'da', label: 'Dansk', flag: '-174px -38px', hreflang: 'da', live: true, dir: 'ltr' },
  { code: 'nl', label: 'Nederlands', flag: '-342px -198px', hreflang: 'nl', live: true, dir: 'ltr' },
  { code: 'fi', label: 'Suomi', flag: '-258px -70px', hreflang: 'fi', live: false, dir: 'ltr' },
  { code: 'fr', label: 'Français', flag: '-300px -70px', hreflang: 'fr', live: true, dir: 'ltr' },
  { code: 'de', label: 'Deutsch', flag: '-216px -38px', hreflang: 'de', live: true, dir: 'ltr' },
  { code: 'el', label: 'Ελληνικά', flag: '-300px -38px', hreflang: 'el', live: false, dir: 'ltr' },
  { code: 'he', label: 'עברית', flag: '', hreflang: 'he', live: false, dir: 'rtl' },
  { code: 'hi', label: 'हिन्दी', flag: '-216px -102px', hreflang: 'hi', live: false, dir: 'ltr' },
  { code: 'it', label: 'Italiano', flag: '-132px -134px', hreflang: 'it', live: false, dir: 'ltr' },
  { code: 'ja', label: '日本語', flag: '-216px -134px', hreflang: 'ja', live: true, dir: 'ltr' },
  { code: 'ko', label: '한국어', flag: '-6px -166px', hreflang: 'ko', live: true, dir: 'ltr' },
  { code: 'no', label: 'Norsk', flag: '-384px -198px', hreflang: 'nb', live: false, dir: 'ltr' },
  { code: 'pl', label: 'Polski', flag: '-48px -230px', hreflang: 'pl', live: false, dir: 'ltr' },
  { code: 'pt', label: 'Português', flag: '-132px -230px', hreflang: 'pt', live: false, dir: 'ltr' },
  { code: 'ro', label: 'Română', flag: '-216px -230px', hreflang: 'ro', live: false, dir: 'ltr' },
  { code: 'ru', label: 'Русский', flag: '-258px -230px', hreflang: 'ru', live: true, dir: 'ltr' },
  { code: 'sr', label: 'Српски', flag: '', hreflang: 'sr', live: false, dir: 'ltr' },
  { code: 'sk', label: 'Slovenčina', flag: '-426px -230px', hreflang: 'sk', live: false, dir: 'ltr' },
  { code: 'sl', label: 'Slovenščina', flag: '', hreflang: 'sl', live: false, dir: 'ltr' },
  { code: 'es', label: 'Español', flag: '-6px -70px', hreflang: 'es', live: true, dir: 'ltr' },
  { code: 'sv', label: 'Svenska', flag: '-342px -262px', hreflang: 'sv', live: false, dir: 'ltr' },
  { code: 'th', label: 'ไทย', flag: '', hreflang: 'th', live: false, dir: 'ltr' },
  { code: 'tl', label: 'Tagalog', flag: '-132px -294px', hreflang: 'tl', live: false, dir: 'ltr' },
  { code: 'id', label: 'Indonesia', flag: '-6px -134px', hreflang: 'id', live: false, dir: 'ltr' },
  { code: 'uk', label: 'Українська', flag: '-258px -294px', hreflang: 'uk', live: false, dir: 'ltr' },
  { code: 'vi', label: 'Tiếng Việt', flag: '-216px -294px', hreflang: 'vi', live: false, dir: 'ltr' },
  { code: 'hu', label: 'Magyar', flag: '-384px -102px', hreflang: 'hu', live: false, dir: 'ltr' },
  { code: 'tr', label: 'Türkçe', flag: '-174px -294px', hreflang: 'tr', live: false, dir: 'ltr' },
  { code: 'ms', label: 'Melayu', flag: '-132px -198px', hreflang: 'ms', live: false, dir: 'ltr' },
  { code: 'ga', label: 'Gaeilge', flag: '-426px -70px', hreflang: 'ga', live: false, dir: 'ltr' },
  { code: 'hy', label: 'Հայերեն', flag: '-426px -102px', hreflang: 'hy', live: false, dir: 'ltr' },
  { code: 'ur', label: 'اردو', flag: '-300px -294px', hreflang: 'ur', live: false, dir: 'rtl' },
  { code: 'bn', label: 'বাংলা', flag: '-258px -6px', hreflang: 'bn', live: false, dir: 'ltr' },
];

export const defaultLocale = LOCALES[0];

const LOCALE_CODES = new Set(LOCALES.map((l) => l.code));

/**
 * Locale code carried by a path, or null when the path has no locale prefix. None of the 39
 * codes collides with a real route segment, so the first segment can be tested directly.
 */
export function localeOfPath(pathname) {
  const seg = String(pathname || '').split('/')[1] || '';
  return LOCALE_CODES.has(seg) ? seg : null;
}

/** The same path with any locale prefix removed, so route, TDK and breadcrumb lookups work. */
export function stripLocale(pathname) {
  const p = String(pathname || '/');
  const seg = p.split('/')[1] || '';
  if (!LOCALE_CODES.has(seg)) return p;
  const rest = p.slice(seg.length + 1);
  return rest.startsWith('/') ? rest : `/${rest}`;
}

/** Prefix a path for a locale. English is served unprefixed. */
export function withLocale(pathname, code) {
  const p = stripLocale(pathname);
  if (!code || code === defaultLocale.code) return p;
  // the root keeps its trailing slash so the canonical form is the conventional /de/ rather
  // than /de; a crawler treats those as two different URLs
  return p === '/' ? `/${code}/` : `/${code}${p}`;
}

export const COMPANY = {
  name: 'YIXINOU',
  legalName: 'Shenzhen Yixinou Electronic Co., Ltd.',
  tel: '+86 18516133798',
  telHref: 'tel:+8618516133798',
  whatsapp: 'https://wa.me/8618516133798',
  email: 'mailto:Jessie@yixinouchips.com',
  video: '/assets/videos/company.mp4',
  videoPoster: '/assets/images/about-video-poster.jpg',
  homeVideo: '/assets/videos/promo-30s.mp4',
  homeVideoPoster: '/assets/images/promo-poster.jpg',
  subscribeBg: '/assets/images/subscribe-bg.webp',
  qr: '/assets/images/jessie-wechat-qrcode.jpg',
};

// ---------------- About us ----------------
export const ABOUT_TEXT = [
  'Shenzhen Yixinou Electronic Co., Ltd. is an electronic component supplier based in Futian District, Shenzhen, China. We buy, verify and ship the parts our customers need to keep production running \u2014 from a single reel to a complete bill of materials.',
  'Most customers reach us when a line is short of a part, a bill of materials has to be quoted quickly, or a batch has to be checked before it goes into production. That is the work we are built for: confirming what is genuinely available, inspecting what arrives, and being straight with you when a part cannot be verified.',
  'We supply ICs, transistors, connectors, capacitors, resistors, sensors, switches, LEDs and modules. Our components are used in consumer electronics, IoT, new energy, communications, industrial and automotive applications, and we ship to customers across Asia, Europe, Africa and the Americas.',
];

export const ABOUT_FACTORY = [
  {
    img: '/assets/images/team-group.jpg',
    alt: 'The YIXINOU team photographed together in the Shenzhen office',
  },
  { img: '/assets/images/gallery-01.jpg', alt: 'Component reels and trays laid out for sorting' },
  { img: '/assets/images/gallery-02.jpg', alt: 'Outbound warehouse area before shipment' },
  { img: '/assets/images/gallery-03.jpg', alt: 'Warehouse aisle at the Shenzhen facility' },
  { img: '/assets/images/gallery-04.jpg', alt: 'Operators working on the surface-mount line' },
  { img: '/assets/images/gallery-05.jpg', alt: 'Precision assembly equipment on the surface-mount line' },
  { img: '/assets/images/gallery-06.jpg', alt: 'Component storage shelving in the warehouse' },
  { img: '/assets/images/gallery-07.jpg', alt: 'Packed orders labelled and ready for dispatch' },
];

export const CERTIFICATE_METADATA = [
  {
    src: '/assets/images/verpackg-registration-certificate.webp',
    title: 'YIXINOU German Packaging Act (VerpackG) registration certificate',
    alt: 'YIXINOU German Packaging Act (VerpackG) registration certificate issued by the Central Agency Packaging Register',
    width: 1658,
    height: 2339,
  },
  {
    src: '/assets/images/epr-leko-membership-certificate.webp',
    title: 'YIXINOU EPR household packaging membership certificate',
    alt: 'YIXINOU EPR household packaging membership certificate from Leko',
    width: 638,
    height: 860,
  },
  {
    src: '/assets/images/sgs-verified-supplier-assessment.webp',
    title: 'YIXINOU SGS verified supplier assessment certificate',
    alt: 'YIXINOU Alibaba.com verified supplier assessment report presented by SGS',
    width: 3173,
    height: 4490,
  },
  {
    src: '/assets/images/yixinou-class-9-trademark-registration.webp',
    title: 'YIXINOU Class 9 trademark registration certificate',
    alt: 'YIXINOU Class 9 trademark registration certificate for electronic components',
    width: 3173,
    height: 4512,
  },
];

export const CERTIFICATES = CERTIFICATE_METADATA.map(({ src }) => src);

// ---------------- All products ----------------
export const PRODUCT_CATEGORIES = [
  { label: 'Integrated Circuits（ICS）', href: '/all-products?category=Integrated Circuits (ICS)' },
  { label: 'Transistors', href: '/all-products?category=Transistors' },
  { label: 'Connector', href: '/all-products?category=Connector' },
  { label: 'Others', href: '/all-products?category=Others' },
  { label: 'Module', href: '/all-products?category=Module' },
  { label: 'Capacitors', href: '/all-products?category=Capacitors' },
  { label: 'Resistor', href: '/all-products?category=Resistor' },
  { label: 'Sensor', href: '/all-products?category=Sensor' },
  { label: 'Switch', href: '/all-products?category=Switch' },
  { label: 'LED', href: '/all-products?category=LED' },
];

// ---------------- Blogs ----------------
export const BLOG_POSTS = [
  {
    title: 'Designing a switch-mode power supply? This transistor is a top-tier option.',
    href: '/-designing-a-switch---mode-power-supply-this-transistor-is-a-top---tier-option',
    img: '/assets/images/blog-r01.jpg',
    date: '20250411',
    snippet:
      'Understanding Transistor Requirements in Modern Power Conversion — For those designing switch-mode power supplies (SMPS), it\'s like walking a tightrope. They have to balance three important things: efficiency, size, and reliability. And right at the...',
  },
  {
    title: 'Need high-speed data transmission? These integrated circuits are worth considering.',
    href: '/-need-high---speed-data-transmission-these-integrated-circuits-are-worth-considering',
    img: '/assets/images/blog-r02.jpg',
    date: '20250415',
    snippet:
      'Key Features of Modern Data Transmission Components — In today\'s digital age, where information travels at lightning speed, the components designed for high-speed data transfer are truly remarkable. These advanced integrated circuits have their eyes...',
  },
  {
    title: 'Working on advanced signal processing? Find the right IC chip here.',
    href: '/-working-on-advanced-signal-processing-find-the-right-ic-chip-here',
    img: '/assets/images/blog-r03.jpg',
    date: '20250407',
    snippet:
      'Critical Factors in Selecting IC Chips for Signal Processing — When it comes to advanced signal processing systems, the integrated circuits (ICs) we choose are like the heart and brain of the operation. These systems have high demands. They need ICs th...',
  },
  {
    title: 'Tired of electromagnetic interference? These inductors can eliminate it.',
    href: '/tired-of-electromagnetic-interference-these-inductors-can-eliminate-it',
    img: '/assets/images/blog-r04.jpg',
    date: '20250403',
    snippet:
      'The Hidden Costs of Uncontrolled EMI — In today\'s modern world, where electronic systems are everywhere, we often don\'t realize the lurking threat of electromagnetic interference (EMI). EMI shows up in various annoying ways, like those pesky unwanted v...',
  },
  {
    title: 'Looking for a connector with low-resistance connections? This one has top-notch conductivity.',
    href: '/essential-guide-to-high---performance-low---resistance-electrical-connectors',
    img: '/assets/images/blog-r05.jpg',
    date: '20250401',
    snippet:
      'Struggling with energy loss and overheating in electrical systems? Discover how low-resistance connectors improve efficiency, reliability, and ROI. Get expert selection & maintenance tips now.',
  },
  {
    title: 'Exploring the Benefits of Build in Smart IC Chip Technology',
    href: '/exploring-the-benefits-of-build-in-smart-ic-chip-technology',
    img: '/assets/images/blog-r06.jpg',
    date: '20250115',
    snippet:
      'Benefits of Smart IC Chips — With the increasing advancement in technology, there is much focus in the smart integrated chip technology. Their small size enable usage in electronics, communications, medicine, and even in automobiles. The advantages are...',
  },
  {
    title: 'The Benefits of 12W SMD Transistors in Compact Designs',
    href: '/the-benefits-of-12w-smd-transistors-in-compact-designs',
    img: '/assets/images/blog-r07.jpg',
    date: '20250124',
    snippet:
      'The evolution of electronics has led to increased emphasis on components such as circuits, microcontrollers, and sensors. This advancement also comes with challenges like miniaturization of electronics. Hence the increased use of SMDs (Surface Mount...',
  },
  {
    title: 'Definition and fundamentals of IC testing',
    href: '/definition-and-fundamentals-of-ic-testing',
    img: '/assets/images/blog-r08.jpg',
    date: '20240805',
    snippet:
      'Integrated Circuit Testing refers to the process of testing the performance, functionality and reliability of integrated circuits. The purpose of IC testing is to ensure that integrated circuits can meet the design requirements and performance targets in practical applications, and to improve the reliability and stability of integrated circuits.',
  },
  {
    title: 'A few knowledges about PCB',
    href: '/a-few-knowledges-about-pcb',
    img: '/assets/images/blog-r09.jpg',
    date: '20240730',
    snippet:
      'As the mother of electronic components, PCB plays an important role in electronic applications. According to different design principles, PCB can be divided into single panel, multi-layer board, soft board, hard board, soft and hard combined board and other types.',
  },
  {
    title: 'Visit the Munich Shanghai Electronics Fair',
    href: '/visit-the-munich-shanghai-electronics-fair',
    img: '/assets/images/blog-r10.jpg',
    date: '20240725',
    snippet:
      'The electronics industry in the first half of this year is not very good, but the Munich Shanghai Electronics Show on July 8 is extremely hot, including more than 1670 exhibitors, more than 75,400 professional visitors to the scene. A number of companies focused on new energy vehicles, photovoltaic, energy storage, robotics, third-generation semiconductors and other cutting-edge hot areas.',
  },
  {
    title: 'Company summer collective meals in Shenzhen China 2024',
    href: '/company-summer-collective-meals-in-shenzhen-china-2024',
    img: '/assets/images/blog-r11.jpg',
    date: '20240715',
    snippet:
      'We organised a summer group dinner at the five-star hotel Grand Cloud Sky in Shenzhen. In 24th July, not only all the staffs of the company attended the activity, but also invited our domestic famous brand agent friends. We gathered together to enjoy a delicious dinner, but also reach an agreement in the supplying and selling of electronic components.',
  },
  {
    title: 'Key Factors to Consider When Selecting Semiconductor IC Chips for Industrial Use',
    href: '/Key-Factors-to-Consider-When-Selecting-Semiconductor-IC-Chips-for-Industrial-Use',
    img: '/assets/images/blog-r12.jpg',
    date: '20251108',
    snippet:
      'Ensure 10+ year reliability and lower TCO with proven semiconductor selection strategies for harsh industrial environments. Discover how mature nodes, thermal design, and lifecycle planning reduce failures and costs. Get the full guide.',
  },
];

// ---------------- Contact ----------------
export const CONTACT_INFO = [
  { icon: 'building', label: 'Company Name', value: 'Shenzhen Yixinou Electronic Co., Ltd.' },
  { icon: 'pin', label: 'Address', value: 'Room 2501-2503, Tower A, New Asia Guoli Building, No. 18 Zhonghang Road, Futian District, Shenzhen City,GuangDong Provice,China.518031' },
  { icon: 'phone', label: 'Phone', value: '+86 18516133798', href: 'tel:+8618516133798' },
  { icon: 'whatsapp', label: 'WhatsApp', value: '8618516133798', href: 'https://wa.me/8618516133798' },
  { icon: 'mail', label: 'E-mail', value: 'Jessie@yixinouchips.com', href: 'mailto:Jessie@yixinouchips.com' },
  { icon: 'wechat', label: 'Wechat', value: '18516133798' },
];

export const CONTACT_LABEL_KEYS = {
  'Company Name': 'contact.companyName',
  Address: 'contact.address',
  Phone: 'contact.phone',
  WhatsApp: 'contact.whatsapp',
  'E-mail': 'contact.email',
  Wechat: 'contact.wechat',
};

export const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14739.62244575719!2d114.08631886226314!3d22.54520829010234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f437b1835c39%3A0xa312c0a9f02af1ce!2sHuaqiangbei%2C%20Futian%20District%2C%20Shenzhen%2C%20Guangdong%20Province%2C%20China%2C%20518027!5e0!3m2!1sen!2sus!4v1723632347776!5m2!1sen!2sus';

// ---------------- Industries we serve (home page) ----------------
export const INDUSTRIES = [
  {
    key: 'industrial',
    img: '/assets/images/industry-industrial.jpg',
    title: 'Industrial Electronics',
    desc: 'Industrial electronics refers to the application of electronic devices, systems, and technologies in industrial settings to automate processes, monitor operations, and control machinery and equipment.',
    href: '/industries/industrial-automation',
  },
  {
    key: 'medical',
    img: '/assets/images/industry-medical.jpg',
    title: 'Medical Devices',
    desc: 'Medical devices encompass a broad category of instruments, machines, implants, and other tools used in healthcare settings for the diagnosis, treatment, monitoring, and management of medical conditions.',
    href: '/industries/healthcare',
  },
  {
    key: 'marine',
    img: '/assets/images/industry-marine.jpg',
    title: 'Marine',
    desc: 'Marine electronics is a specialized sector within the broader electronics industry that focuses on developing, manufacturing, and supplying electronic systems, devices, and equipment specifically designed for maritime applications.',
    href: '/all-products',
  },
  {
    key: 'battery',
    img: '/assets/images/industry-battery.jpg',
    title: 'Battery/Charge',
    desc: 'Battery and charging technologies are integral components of the electronics industry, powering a wide range of devices from portable electronics to electric vehicles and renewable energy systems.',
    href: '/all-products',
  },
  {
    key: 'aerospace',
    img: '/assets/images/industry-aerospace.jpg',
    title: 'Aerospace/Aviation',
    desc: 'Aerospace and aviation are sectors within the broader electronics industry that encompass the design, development, manufacturing, and operation of aircraft, spacecraft, satellites, and related systems.',
    href: '/industries/aerospace',
  },
  {
    key: 'renewable',
    img: '/assets/images/industry-renewable.jpg',
    title: 'Renewable Energy',
    desc: 'Renewable energy refers to energy derived from sources that are naturally replenished on a human timescale and can be continuously used without the risk of depletion.',
    href: '/industries/energy',
  },
  {
    key: 'automotive',
    img: '/assets/images/industry-automotive.jpg',
    title: 'Automotive',
    desc: 'Automotive electronics is a specialized branch of the electronics industry that focuses on the development, manufacturing, and integration of electronic systems and components into vehicles.',
    href: '/industries/automotive',
  },
  {
    key: 'consumer',
    img: '/assets/images/industry-consumer.jpg',
    title: 'Consumer Electronics',
    desc: 'Consumer electronics refer to electronic devices designed for everyday use by individuals in their personal and domestic environments.',
    href: '/industries/consumer-electronics',
  },
];

// ---------------- Quality ----------------
// Layout follows the reference quality-process page; wording, figures and
// imagery are YIXINOU's own. Third-party brand names, certification badges and
// supplier/engineer counts belonging to the reference site are not reproduced.
// Images: real photographs of YIXINOU's own facility and real stills from the
// company video, except where noted (steps 2, 4 and 5).
export const QUALITY = {
  banner: '/assets/images/quality-banner.jpg',
  hero: {
    eyebrow: 'Quality',
    title: 'Every order inspected before it ships',
    lead: 'YIXINOU supplies ICs, transistors, connectors, capacitors, resistors, sensors, switches, LEDs and modules to buyers who cannot afford a bad lot. Components are checked on arrival at our Shenzhen facility, and anything that needs internal analysis goes to our partner laboratories.',
    points: [
      'Incoming inspection on every order we receive',
      'External visual inspection under a digital microscope',
      'Internal analysis and electrical testing by our partner laboratories',
      'An inspection record kept for the lots we ship',
    ],
    ctaLabel: 'Contact our quality team',
    ctaHref: '/Contact',
    img: '/assets/images/quality-hero-inspection.jpg',
    alt: 'A YIXINOU inspector operating a digital inspection microscope at his work station, with the magnified component shown on the screen beside him',
  },
  checks: {
    eyebrow: 'What we check',
    title: 'Four things we do on every order',
    items: [
      {
        icon: 'sampling',
        title: 'Agreed Sampling',
        text: 'We agree the sampling plan with you before we start, and adapt it to the part, the quantity and your own acceptance criteria.',
      },
      {
        icon: 'visual',
        title: 'Visual Inspection',
        text: 'External checks under a digital microscope for damaged, re-marked or mismatched parts, plus lead, scrape, acetone and marking-permanency testing.',
      },
      {
        icon: 'records',
        title: 'Inspection Records',
        text: 'We keep the inspection result, the photographs and the lot and date codes for every shipment, so you can trace what was checked.',
      },
      {
        icon: 'reporting',
        title: 'Reporting To Your Format',
        text: 'Tell us what your report needs to contain and we will include the findings with your shipment.',
      },
    ],
  },
  process: {
    eyebrow: 'Our Process',
    title: 'Our Quality Process',
    statement:
      'Practical inspection equipment applied to every order we handle — and a partner laboratory whenever a part needs deeper analysis.',
    note: 'Steps 1 to 3 are carried out at our own facility in Shenzhen. Steps 4 and 5 are carried out by our partner laboratories — YIXINOU does not operate its own testing laboratory, and we say so plainly so you know exactly who tests your parts.',
    steps: [
      {
        title: 'Photography and Review',
        text: [
          'We count and organise your components by part and serial number, and photograph them as received.',
          'We record the quantity and country of origin, then give each lot its own lot and date code.',
        ],
        img: '/assets/images/quality-step-1-photography.jpg',
        alt: 'Electronic component reels, trays and anti-static bags laid out in labelled rows on the sorting floor at the YIXINOU facility',
        inhouse: true,
      },
      {
        title: 'Barcode Scanning and Review',
        text: [
          'A second review confirms exact quantities and specifications against your order.',
          'Labels are scanned into our records, so each part stays traceable to the lot it came from.',
        ],
        img: '/assets/images/quality-step-2-barcode.jpg',
        alt: 'Illustration: a handheld barcode scanner reading the label of a sealed anti-static bag held over a bench',
        inhouse: true,
        illustrative: true,
      },
      {
        title: 'Visual Inspection',
        text: [
          'Our inspectors examine components externally under a digital inspection microscope.',
          'We check for damaged, re-marked or mismatched parts, and run lead inspection, scrape testing, acetone testing and marking permanency testing.',
        ],
        img: '/assets/images/quality-step-3-visual.jpg',
        alt: 'A YIXINOU inspector positioning a component under a digital inspection microscope, with the magnified surface of the part displayed on the monitor behind',
        inhouse: true,
      },
      {
        title: 'Laboratory Inspection and Testing',
        text: [
          'Parts that need internal analysis are sent to our partner laboratories, where their engineers carry out advanced testing using X-ray, X-ray Fluorescence (XRF) and high-magnification microscopy.',
          'Their laboratories also perform heated and chemical decapsulation to verify that a part is genuine, together with solderability testing to confirm the leads or terminations can be reliably soldered.',
        ],
        img: '/assets/images/quality-step-4-laboratory.jpg',
        alt: 'Illustration: X-ray inspection cabinet, XRF analyser and inspection microscope on a partner laboratory bench with a tray of component samples',
        inhouse: false,
        illustrative: true,
      },
      {
        title: 'Electrical Testing',
        text: [
          "Electrical performance is measured at our partner laboratories against the part's datasheet specification.",
          'Their engineers use curve tracers, functional testing, or inductance, capacitance and resistance (LCR) measurement to characterise active and passive parts.',
        ],
        img: '/assets/images/quality-step-5-electrical.jpg',
        alt: 'Illustration: curve tracer and LCR test bench with a component held in a test fixture and measurement traces on screen',
        inhouse: false,
        illustrative: true,
      },
    ],
  },
  midCta: {
    title: 'Tell us what your parts need to pass',
    text: 'Send us your acceptance criteria — sampling level, tests required and report format — and we will confirm exactly how we will check your order before it reaches you.',
    ctaLabel: 'Send us your requirements',
    ctaHref: '/Contact',
  },
  standard: {
    eyebrow: 'Why YIXINOU',
    title: 'Excellence Is Our Standard',
    blocks: [
      {
        eyebrow: 'Qualification',
        title: 'Suppliers we can stand behind',
        text: 'We buy from suppliers we have qualified and we keep the ones that perform. Suppliers with reported quality issues are restricted or removed from our list. Where a part\u2019s history cannot be verified, we tell you rather than ship it as certain.',
        img: '/assets/images/quality-standard-vendors.jpg',
        alt: 'High-bay racking holding palletised electronic components in the YIXINOU warehouse',
      },
      {
        eyebrow: 'Traceability',
        title: 'A record for every lot',
        text: 'Every shipment is logged with its inspection result, its photographs and its lot and date codes. If you need to know what was checked on a specific lot, we can pull the record and send it to you.',
        img: '/assets/images/quality-standard-records.jpg',
        alt: 'YIXINOU staff at their work stations maintaining the inspection and shipment records',
      },
    ],
  },
  stats: {
    eyebrow: 'By the Numbers',
    title: 'The YIXINOU Advantage',
    items: [
      { value: '8+', label: 'Years in the Components Industry' },
      { value: '10', label: 'Product Categories Supplied' },
      { value: '20+', label: 'Partners Worldwide' },
      { value: '5', label: 'Continents Shipped To' },
    ],
  },
  services: {
    eyebrow: 'Quality Services',
    title: 'Setting the Standard for Quality',
    items: [
      {
        icon: 'process',
        title: 'Incoming Inspection',
        text: 'See the five checks we apply to your components, and where each one is carried out.',
        href: '/quality#quality-process',
      },
      {
        icon: 'report',
        title: 'Inspection Reporting',
        text: 'Ask for the findings, photographs and lot records for your shipment, in the format your team needs.',
        href: '/Contact',
      },
      {
        icon: 'shield',
        title: 'Supplier Qualification',
        text: 'How we screen the suppliers we buy from, and what we do when one of them underperforms.',
        href: '/quality#quality-standard',
      },
      {
        icon: 'testing',
        title: 'Component Testing',
        text: 'Arrange X-ray, XRF, decapsulation, solderability or electrical testing through our partner laboratories.',
        href: '/Contact',
      },
      {
        icon: 'team',
        title: 'Quality Control Team',
        text: 'Meet the inspectors who check your components and coordinate testing on your behalf.',
        href: '/about-us',
      },
      {
        icon: 'award',
        title: 'Certifications',
        text: 'Browse the certifications and cross-industry memberships that back our quality services.',
        href: '/about-us',
      },
    ],
  },
  faq: {
    eyebrow: 'Common Questions',
    title: 'Questions buyers ask us about quality',
    items: [
      {
        q: 'Do you test components in-house?',
        a: 'Partly. Incoming inspection, photography, barcode review and external visual inspection under a digital microscope are carried out in-house at our Shenzhen facility. Internal analysis — X-ray, XRF, decapsulation, solderability and electrical testing — is carried out by our partner laboratories.',
      },
      {
        q: 'Who performs your laboratory testing?',
        a: 'Our partner laboratories. YIXINOU does not operate its own testing laboratory, and we state that plainly so you know exactly who is testing your parts.',
      },
      {
        q: 'Can I get an inspection report with my order?',
        a: 'Yes. Tell us what your report needs to contain and we will include the findings, photographs and lot records with your shipment.',
      },
      {
        q: 'What happens if you find a problem?',
        a: 'We stop the lot and come back to you with what we found and the evidence behind it, rather than shipping it and hoping it passes your incoming check.',
      },
      {
        q: 'How much of my order do you check?',
        a: 'We agree the sampling plan with you before we start. Larger quantities, mixed lots and unverified sources are checked more heavily.',
      },
    ],
  },
  closing: {
    title: 'Quality Control',
    text: 'Every part inspected. See what\u2019s available.',
    primary: { label: 'Contact Us', href: '/Contact' },
    secondary: { label: 'Explore All Products', href: '/all-products' },
  },
};

// ---------------- About page (Our Story) ----------------
// Narrative structure follows the reference "Our Story" page. Every figure and
// statement here is YIXINOU's own; the reference site's founding year, headcount,
// offices, milestones and named executives are deliberately not reproduced.
export const ABOUT_EXTRA = {
  hero: {
    eyebrow: 'Our Story',
    title: 'Eight years sourcing the components your production depends on',
    statement:
      'Shenzhen Yixinou Electronic Co., Ltd. is an independent distributor of electronic components. We supply ICs, transistors, connectors, capacitors, resistors, sensors, switches, LEDs and modules from Shenzhen to customers on five continents.',
    ctaLabel: 'Talk to our team',
    ctaHref: '/Contact',
    img: '/assets/images/about-hero.jpg',
    alt: 'The YIXINOU team at their desks in the Shenzhen sales office',
  },
  cards: [
    {
      icon: 'sourcing',
      title: 'Component Sourcing',
      text: 'ICs, transistors, connectors, capacitors, resistors, sensors, switches, LEDs and modules, sourced against your bill of materials.',
    },
    {
      icon: 'bom',
      title: 'BOM and One-Stop Orders',
      text: 'Send us a bill of materials and we quote the whole line, rather than one part at a time.',
    },
    {
      icon: 'inspection',
      title: 'Incoming Inspection',
      text: 'Every order is checked on arrival at our Shenzhen facility before it is packed for you.',
    },
    {
      icon: 'export',
      title: 'Export and Logistics',
      text: 'Documentation, packing and shipping to customers across five continents.',
    },
  ],
  facts: {
    eyebrow: 'At a Glance',
    title: 'YIXINOU at a glance',
    items: [
      { value: '8+', label: 'Years in the components business' },
      { value: '10', label: 'Product categories supplied' },
      { value: '5', label: 'Continents shipped to' },
      { value: 'Shenzhen', label: 'Registered office and warehouse' },
    ],
  },
  values: {
    eyebrow: 'Our Values',
    title: "Here's what drives us forward.",
    items: [
      {
        title: 'Accuracy first',
        text: 'We would rather tell you a part cannot be verified than ship it and let you find out at your incoming inspection.',
      },
      {
        title: 'Traceability',
        text: 'Lots, date codes and inspection records are kept, so when you ask what was checked, we can answer.',
      },
      {
        title: 'Straight answers',
        text: 'That includes who tests your parts: laboratory analysis is carried out by our partner laboratories, and we say so plainly.',
      },
      {
        title: 'Responsiveness',
        text: 'Quotations and stock checks come back as fast as we can turn them around.',
      },
      {
        title: 'Relationships over orders',
        text: 'We would rather keep a customer for years than win a single order.',
      },
      {
        title: 'Continuous improvement',
        text: 'Every claim is logged and reviewed, and it changes how we source and inspect.',
      },
    ],
  },
  team: {
    eyebrow: 'Our Team',
    title: 'The people you will deal with',
    lead: 'One team handles your enquiry, your quotation and your inspection records, so you are not passed from desk to desk.',
  },
  video: {
    eyebrow: 'A closer look',
    title: 'Inside our Shenzhen operation',
    text: 'Filmed at our facility \u2014 the work stations, the inspection bench and the components we handle every day.',
  },
  related: {
    eyebrow: 'About Us',
    title: 'Learn more about us.',
    items: [
      {
        title: 'Quality Process',
        text: 'The five checks we apply to your components, and where each one is carried out.',
        href: '/quality',
      },
      {
        title: 'All Products',
        text: 'ICs, transistors, connectors, capacitors, resistors, sensors, switches, LEDs and modules.',
        href: '/all-products',
      },
      {
        title: 'Blogs',
        text: 'Industry information and company news from the components market.',
        href: '/blogs800',
      },
      {
        title: 'Contact Us',
        text: 'Send us your bill of materials or your enquiry and we will come back to you.',
        href: '/Contact',
      },
    ],
  },
};

// ---------------- Sub-banner marketing copy ----------------
// Every figure quoted here is taken from the site's own content:
//   8+ years       -> ABOUT_EXTRA.facts
//   12 industries  -> INDUSTRY_LIST / INDUSTRIES_PAGE.items length
//   10 categories  -> PRODUCT_CATEGORIES length
//   5 continents   -> ABOUT_EXTRA.facts
export const PAGE_BANNERS = {
  '/about-us': {
    title: 'Eight years sourcing electronic components from Shenzhen',
    sub:
      'Shenzhen Yixinou Electronic Co., Ltd. supplies ICs, transistors, connectors, capacitors '
      + 'and modules to customers on five continents — every order inspected before it ships.',
    cta: { label: 'Talk to our team', href: '/Contact' },
    micro: 'Incoming inspection on every order · Laboratory testing through our partner laboratories',
  },
  '/industries': {
    title: 'One components supplier for twelve industries',
    sub:
      'Aerospace to automotive, healthcare to telecom — we source the parts your sector runs on, '
      + 'verify them on arrival, and quote against your bill of materials.',
    cta: { label: 'Ask about your industry', href: '/Contact' },
    micro: '12 industries · 10 product categories · Customers on five continents',
  },
  '/all-products': {
    title: 'ICs, transistors, connectors, capacitors and more',
    sub:
      'Send us your bill of materials and we quote the whole line — not one part at a time. '
      + 'Incoming inspection is included on every order.',
    cta: { label: 'Get a Free Quote', href: '/Contact' },
    micro: 'BOM and one-stop orders · Line-down sourcing · Export to five continents',
  },
};

// ---------------- Product parts ----------------
// Per-part content for the /product/:mpn detail template. Every specification
// below is taken from the part's own data sheet in the product material folder
// (产品素材/<mpn>/<mpn>产品信息.md) — nothing here is inferred.

// ---------------- Product parts (Homepage Featured 8 items) ----------------
export const HOT_PRODUCT_PARTS = {
  'H5CGD8MGBDX021N': {
    brand: 'SK hynix',
    mpn: 'H5CGD8MGBDX021N',
    category: 'ICs',
    title: 'SK hynix 24Gb DDR5 SDRAM (x8) Die in 96-Ball BGA',
    alt: 'H5CGD8MGBDX021N SK hynix 24Gb DDR5 SDRAM memory chip in BGA package',
    img: '/assets/images/h5cgd8mgbdx021n-bga-96-package.webp',
  },
  'ESP32-S3R8': {
    brand: 'Espressif Systems',
    mpn: 'ESP32-S3R8',
    category: 'ICs',
    title: 'Dual-core 32-bit MCU with 2.4 GHz Wi-Fi and Bluetooth 5 (LE), 8 MB octal PSRAM in QFN-56',
    alt: 'ESP32-S3R8 Espressif Wi-Fi and Bluetooth MCU chip in QFN-56 package',
    img: '/assets/images/esp32-s3r8-package.webp',
  },
  'FS100R12KT4G': {
    brand: 'Infineon',
    mpn: 'FS100R12KT4G',
    category: 'Transistors',
    title: '1200 V, 100 A sixpack IGBT module with Trench/Fieldstop technology and NTC',
    alt: 'FS100R12KT4G Infineon 1200V 100A IGBT power module',
    img: '/assets/images/fs100r12kt4g-package.webp',
  },
  'ATMega328P-AU': {
    brand: 'Microchip',
    mpn: 'ATMega328P-AU',
    category: 'ICs',
    title: '8-bit AVR microcontroller with 32 KB flash, 20 MHz, 32-pin TQFP',
    alt: 'ATMega328P-AU Microchip 8-bit AVR microcontroller in TQFP-32 package',
    img: '/assets/images/atmega328p-au-tqfp-32.webp',
  },
  'AD780BRZ-REEL7': {
    brand: 'Analog Devices',
    mpn: 'AD780BRZ-REEL7',
    category: 'ICs',
    title: 'Ultrahigh precision 2.5 V/3.0 V voltage reference, 8-lead SOIC',
    alt: 'AD780BRZ-REEL7 Analog Devices high-precision voltage reference in SOIC-8 package',
    img: '/assets/images/ad780brz-reel7-soic-8.webp',
  },
  'HF115F-A/230-2ZS4': {
    brand: 'Hongfa',
    mpn: 'HF115F-A/230-2ZS4',
    category: 'Relays',
    title: '8 A, 230 VAC miniature intermediate power relay with 2 CO (DPDT) contacts',
    alt: 'HF115F-A/230-2ZS4 Hongfa power relay',
    img: '/assets/images/hf115f-a-230-2zs4-package.webp',
  },
  'STM32F407VGT6': {
    brand: 'STMicroelectronics',
    mpn: 'STM32F407VGT6',
    category: 'ICs',
    title: 'ARM Cortex-M4 MCU with 1 MB Flash, 168 MHz, LQFP-100',
    alt: 'STM32F407VGT6 STMicroelectronics 32-bit ARM MCU in LQFP-100 package',
    img: '/assets/images/stm32f407vgt6-package.webp',
  },
  'LM358DR': {
    brand: 'Texas Instruments',
    mpn: 'LM358DR',
    category: 'ICs',
    title: 'Dual operational amplifier, 3 V to 32 V supply, SOIC-8',
    alt: 'LM358DR Texas Instruments dual op amp in SOIC-8 package',
    img: '/assets/images/lm358dr-package.webp',
  },
};

export const PRODUCT_PARTS = HOT_PRODUCT_PARTS;
