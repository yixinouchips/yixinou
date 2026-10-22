import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { LOCALES, localeOfPath } from './content';
import { loadLocalePack } from './localeLoader';

const LANG_KEY = 'yixinou-lang';

export const UI = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About us ',
    'nav.products': 'All products',
    'nav.industries': 'Industries',
    'nav.quality': 'Quality',
    'nav.blogs': 'Blogs',
    'nav.contact': 'Contact us ',
    'home.h1': 'Electronic component distributor in Shenzhen — ICs, transistors, connectors, capacitors and modules',
    'blogs.h1': 'Blogs',
    'blogs.lead': 'Industry information and company news from the electronic components market.',
    'contact.h1': 'Contact us',
    'contact.lead': 'Send us your bill of materials or your enquiry — we will come back to you as fast as we can.',
    'nav.allCategories': 'All Categories',
    'common.manufacture': 'Manufacture',
    'common.prev': 'PREV',
    'common.next': 'NEXT',
    'al.searchLabel': 'Search components by part number or specification',
    'al.searchPlaceholder': 'e.g. H5CGD8MGBDX021N, DDR5, BGA-96',
    'al.searchBtn': 'Search',
    'al.searchClear': 'Clear search',
    'al.searchHint': 'Search by manufacturer part number, brand, package, or a specification value such as 24 Gb or BGA-96.',
    'al.cats': 'Browse by category',
    'al.allCats': 'All products',
    'al.hAll': 'Part pages',
    'al.hSearch': 'Search results',
    'al.view': 'View part',
    'al.noneTitle': 'No part matches that search',
    'al.noneBody': 'We publish a page for every part we can fully document. If you cannot find yours, send us the part number or your bill of materials and we will come back with availability, price and lead time.',
    'al.noneCta': 'Ask us to source it',
    'al.sideCtaTitle': 'Cannot find your part?',
    'al.sideCtaBody': 'Send us your bill of materials and we will quote the whole line, not one part at a time.',
    'al.sideCtaLink': 'Send your BOM',
    'al.pager': 'Pagination',
    'al.pagePrev': 'Previous',
    'al.pageNext': 'Next',
    'al.showing': 'Showing',
    'al.ofTotal': 'of',
    'al.brands': 'Browse by brand',
    'al.allBrands': 'All brands',
    'about.whoWeAre': 'Who We Are',
    'quality.h1': 'Quality Process',
    'lang.pending': 'Translation in progress',
    'pd.about': 'About this part',
    'pd.specs': 'Full specifications',
    'pd.features': 'Key features',
    'pd.standards': 'Standards this part follows',
    'pd.uses': 'Where this part is used',
    'pd.related': 'Related pages',
    'pd.cta': 'Request a quote',
    'search.placeholder': 'Search',
    'search.quickLinks': 'Quick Links',
    'footer.quickLinks': 'Quick Links',
    'footer.products': 'Products',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterDesc': 'Subscribe to get the latest product news and offers.',
    'footer.done': 'Thank you for subscribing.',
    'footer.yourEmail': 'Your Email Address',
    'footer.subscribe': 'Subscribe',
    'footer.copyright': 'Copyright © 2024 Shenzhen Yixinou Electronic Co., Ltd. all rights reserved',
    'footer.privacy': 'Privacy Policy',
    'banner.b1.title': '',
    'banner.b1.text': '',
    'banner.b1.cta': '',
    'banner.b1.accent': '',
    'banner.b2.title': '',
    'banner.b2.text': '',
    'banner.b2.cta': '',
    'banner.b2.accent': '',
    'banner.b3.title': '',
    'banner.b3.text': '',
    'banner.b3.cta': '',
    'banner.b3.accent': '',
    'adv.Powerful Production': 'Powerful Production',
    'adv.Premium Supply': 'Premium Supply',
    'adv.Competitive Prices': 'Competitive Prices',
    'adv.Tailored Solutions': 'Tailored Solutions',
    'adv.Customized Services': 'Customized Services',
    'adv.Expert Support': 'Expert Support',
    'adv.Rich Industry Experience': 'Rich Industry Experience',
    'adv.High Quality And Strict Quality Control System': 'High Quality And Strict Quality Control System',
    'cat.title': 'Our product categories',
    'cat.explore': 'Explore all products',
    'cat.subtitle': 'Explore our comprehensive selection today and elevate your industrial processes to new heights.',
    'hot.title': 'Hot product',
    'factory.title': 'Factory environment',
    'news.title': 'News & Events',
    'news.viewAll': 'View all news',
    'news.subtitle': '',
    'related.title': 'Related Search',
    'team.subTitle': 'Meet Experience Team',
    'team.title': 'Our team members',
    'subscribe.title': 'Get the latest information on our products solutions that meet your needs',
    'subscribe.done': 'Thank you for subscribing!',
    'subscribe.placeholder': 'Your Email Address',
    'subscribe.ctaTitle':
      "We're here round-the-clock for inquiries, partnership opportunities, or any assistance you need.",
    'subscribe.ctaBtn': 'Contact Us',
    'partner.count': '20+',
    'partner.title': 'Partners in world wide',
    'inquiry.title': 'Get a Free Quote',
    'inquiry.desc': 'Our representative will contact you soon.',
    'inquiry.done': 'Thank you for your inquiry. We will reply to you as soon as possible.',
    'inquiry.email': 'Email',
    'inquiry.name': 'Name',
    'inquiry.company': 'Company Name',
    'inquiry.message': 'Message',
    'inquiry.emailPh': 'Please enter your email address',
    'inquiry.namePh': 'Please enter your name',
    'inquiry.companyPh': 'Please enter your company name',
    'inquiry.messagePh': 'Please enter your message',
    'blogs.menuIndustry': 'Industry Information',
    'blogs.menuCompany': 'Company News',
    'blogs.readMore': 'Read more',
    'page.about.title': 'About us ',
    'page.products.title': 'ALL PRODUCTS',
    'about.heading': 'About us',
    'about.gallery': 'Company Gallery',
    'about.certificate': 'Certificate',
    'about.address': 'Address',
    'about.email': 'Email',
    'about.tell': 'Tel',
    'about.mobile': 'Mobile',
    'about.skype': 'Skype',
    'about.whatsapp': 'Whatsapp',
    'contact.companyName': 'Company Name',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.tel': 'Tel',
    'contact.email': 'E-mail',
    'contact.skype': 'Skype',
    'contact.whatsapp': 'WhatsApp',
    'contact.wechat': 'Wechat',
    'inquiry.submit': 'Submit',
    'cookie.text': 'We use cookies to improve your browsing experience and analyze site traffic. See our',
    'cookie.link': 'Privacy Policy',
    'cookie.accept': 'Accept all',
    'cookie.decline': 'Decline',
    'privacy.bannerTitle': 'Privacy Policy',
  },
};

const I18nContext = createContext({ lang: 'en', t: (k) => k, setLang: () => {} });

export function I18nProvider({ children }) {
  const pathname = useLocation().pathname;
  const urlLocale = localeOfPath(pathname);

  const [stored, setStored] = useState(() => {
    try {
      return localStorage.getItem(LANG_KEY) || '';
    } catch {
      return '';
    }
  });

  const lang = urlLocale && LOCALES.some((l) => l.code === urlLocale) ? urlLocale : 'en';
  const [activePack, setActivePack] = useState(null);

  useEffect(() => {
    if (lang && lang !== 'en') {
      loadLocalePack(lang).then((pack) => {
        if (pack) setActivePack({ lang, ui: pack.ui });
      });
    } else {
      setActivePack(null);
    }
  }, [lang]);

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* storage unavailable */
    }
    const loc = LOCALES.find((l) => l.code === lang);
    document.documentElement.lang = loc?.hreflang || 'en';
    document.documentElement.dir = loc?.dir === 'rtl' ? 'rtl' : 'ltr';
  }, [lang]);

  const setLang = (code) => setStored(LOCALES.some((l) => l.code === code) ? code : 'en');
  const dict = activePack?.lang === lang && activePack.ui ? { ...UI.en, ...activePack.ui } : (UI[lang] || UI.en);
  const t = (key) => dict[key] ?? UI.en[key] ?? key;

  return <I18nContext.Provider value={{ lang, t, setLang }}>{children}</I18nContext.Provider>;
}

export const useI18n = () => useContext(I18nContext);
