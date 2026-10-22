import { UI_EXTRAS } from './localeUiExtras.js';

const localeCache = {};

export const loadLocalePack = async (lang) => {
  if (lang === 'en' || !lang) return null;
  if (localeCache[lang]) return localeCache[lang];

  let pack = null;
  switch (lang) {
    case 'de': {
      const [dePack, deParts, dePartsTdk, ind] = await Promise.all([
        import('./locales/de.js'),
        import('./locales/parts/de/index.js'),
        import('./locales/parts/de/tdk.js'),
        import('./locales/industry/de.js'),
      ]);
      pack = {
        ui: dePack.default?.ui || dePack.ui,
        copy: dePack.default?.copy || dePack.copy,
        tdk: { ...(dePack.default?.tdk || dePack.tdk), ...(dePartsTdk.default || dePartsTdk) },
        parts: deParts.default || deParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'fr': {
      const [frPack, frParts, frPartsTdk, ind] = await Promise.all([
        import('./locales/fr.js'),
        import('./locales/parts/fr/index.js'),
        import('./locales/parts/fr/tdk.js'),
        import('./locales/industry/fr.js'),
      ]);
      pack = {
        ui: frPack.default?.ui || frPack.ui,
        copy: frPack.default?.copy || frPack.copy,
        tdk: { ...(frPack.default?.tdk || frPack.tdk), ...(frPartsTdk.default || frPartsTdk) },
        parts: frParts.default || frParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'es': {
      const [esPack, ind] = await Promise.all([
        import('./locales/es.js'),
        import('./locales/industry/es.js'),
      ]);
      pack = {
        ui: esPack.default?.ui || esPack.ui,
        copy: esPack.default?.copy || esPack.copy,
        tdk: esPack.default?.tdk || esPack.tdk,
        parts: null,
        industry: ind.default || ind,
      };
      break;
    }
    case 'ar': {
      const [arPack, arParts, arPartsTdk, ind] = await Promise.all([
        import('./locales/ar.js'),
        import('./locales/parts/ar/index.js'),
        import('./locales/parts/ar/tdk.js'),
        import('./locales/industry/ar.js'),
      ]);
      pack = {
        ui: arPack.default?.ui || arPack.ui,
        copy: arPack.default?.copy || arPack.copy,
        tdk: { ...(arPack.default?.tdk || arPack.tdk), ...(arPartsTdk.default || arPartsTdk) },
        parts: arParts.default || arParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'ru': {
      const [ruPack, ruParts, ruPartsTdk, ind] = await Promise.all([
        import('./locales/ru.js'),
        import('./locales/parts/ru/index.js'),
        import('./locales/parts/ru/tdk.js'),
        import('./locales/industry/ru.js'),
      ]);
      pack = {
        ui: ruPack.default?.ui || ruPack.ui,
        copy: ruPack.default?.copy || ruPack.copy,
        tdk: { ...(ruPack.default?.tdk || ruPack.tdk), ...(ruPartsTdk.default || ruPartsTdk) },
        parts: ruParts.default || ruParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'ja': {
      const [jaPack, jaParts, jaPartsTdk, ind] = await Promise.all([
        import('./locales/ja.js'),
        import('./locales/parts/ja/index.js'),
        import('./locales/parts/ja/tdk.js'),
        import('./locales/industry/ja.js'),
      ]);
      pack = {
        ui: jaPack.default?.ui || jaPack.ui,
        copy: jaPack.default?.copy || jaPack.copy,
        tdk: { ...(jaPack.default?.tdk || jaPack.tdk), ...(jaPartsTdk.default || jaPartsTdk) },
        parts: jaParts.default || jaParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'ko': {
      const [koPack, koParts, koPartsTdk, ind] = await Promise.all([
        import('./locales/ko.js'),
        import('./locales/parts/ko/index.js'),
        import('./locales/parts/ko/tdk.js'),
        import('./locales/industry/ko.js'),
      ]);
      pack = {
        ui: koPack.default?.ui || koPack.ui,
        copy: koPack.default?.copy || koPack.copy,
        tdk: { ...(koPack.default?.tdk || koPack.tdk), ...(koPartsTdk.default || koPartsTdk) },
        parts: koParts.default || koParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'zh': {
      const [zhPack, zhParts, zhPartsTdk, ind] = await Promise.all([
        import('./locales/zh.js'),
        import('./locales/parts/zh/index.js'),
        import('./locales/parts/zh/tdk.js'),
        import('./locales/industry/zh.js'),
      ]);
      pack = {
        ui: zhPack.default?.ui || zhPack.ui,
        copy: zhPack.default?.copy || zhPack.copy,
        tdk: { ...(zhPack.default?.tdk || zhPack.tdk), ...(zhPartsTdk.default || zhPartsTdk) },
        parts: zhParts.default || zhParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'bg': {
      const [bgPack, bgParts, newTdk, ind] = await Promise.all([
        import('./locales/bg.js'),
        import('./locales/parts/bg/index.js'),
        import('./locales/parts/new-locale-tdk.js'),
        import('./locales/industry/bg.js'),
      ]);
      pack = {
        ui: bgPack.default?.ui || bgPack.ui,
        copy: bgPack.default?.copy || bgPack.copy,
        tdk: { ...(bgPack.default?.tdk || bgPack.tdk), ...(newTdk.default?.bg || newTdk.bg) },
        parts: bgParts.default || bgParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'hr': {
      const [hrPack, hrParts, newTdk, ind] = await Promise.all([
        import('./locales/hr.js'),
        import('./locales/parts/hr/index.js'),
        import('./locales/parts/new-locale-tdk.js'),
        import('./locales/industry/hr.js'),
      ]);
      pack = {
        ui: hrPack.default?.ui || hrPack.ui,
        copy: hrPack.default?.copy || hrPack.copy,
        tdk: { ...(hrPack.default?.tdk || hrPack.tdk), ...(newTdk.default?.hr || newTdk.hr) },
        parts: hrParts.default || hrParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'cs': {
      const [csPack, csParts, newTdk, ind] = await Promise.all([
        import('./locales/cs.js'),
        import('./locales/parts/cs/index.js'),
        import('./locales/parts/new-locale-tdk.js'),
        import('./locales/industry/cs.js'),
      ]);
      pack = {
        ui: csPack.default?.ui || csPack.ui,
        copy: csPack.default?.copy || csPack.copy,
        tdk: { ...(csPack.default?.tdk || csPack.tdk), ...(newTdk.default?.cs || newTdk.cs) },
        parts: csParts.default || csParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'da': {
      const [daPack, daParts, newTdk, ind] = await Promise.all([
        import('./locales/da.js'),
        import('./locales/parts/da/index.js'),
        import('./locales/parts/new-locale-tdk.js'),
        import('./locales/industry/da.js'),
      ]);
      pack = {
        ui: daPack.default?.ui || daPack.ui,
        copy: daPack.default?.copy || daPack.copy,
        tdk: { ...(daPack.default?.tdk || daPack.tdk), ...(newTdk.default?.da || newTdk.da) },
        parts: daParts.default || daParts,
        industry: ind.default || ind,
      };
      break;
    }
    case 'nl': {
      const [nlPack, nlParts, newTdk, ind] = await Promise.all([
        import('./locales/nl.js'),
        import('./locales/parts/nl/index.js'),
        import('./locales/parts/new-locale-tdk.js'),
        import('./locales/industry/nl.js'),
      ]);
      pack = {
        ui: nlPack.default?.ui || nlPack.ui,
        copy: nlPack.default?.copy || nlPack.copy,
        tdk: { ...(nlPack.default?.tdk || nlPack.tdk), ...(newTdk.default?.nl || newTdk.nl) },
        parts: nlParts.default || nlParts,
        industry: ind.default || ind,
      };
      break;
    }
    default:
      pack = null;
  }

  if (pack) {
    if (UI_EXTRAS[lang]) {
      pack.ui = { ...(pack.ui || {}), ...UI_EXTRAS[lang] };
    }
    localeCache[lang] = pack;
  }
  return pack;
};
