// Czech (cs-CZ) locale pack for YIXINOU — industry detail pages.
// Mirrors src/industryDetails.js key for key: same structure, same keys, same array lengths.
// Slugs, route hrefs, image paths, icon identifiers, technical brands and units are never
// translated. Internal analysis is attributed to our partner laboratories only; no
// certification, accreditation or capability is claimed that the source does not state.
const groups = {
  eyebrow: 'Produktové skupiny',
  title: 'Produkty, které dodáváme',
  lead: 'Stejné skupiny komponentů dodáváme ve všech odvětvích, kterým se věnujeme.',
  items: [
    { title: 'Integrované obvody', href: '/all-products' },
    { title: 'Tranzistory', href: '/all-products' },
    { title: 'Konektory', href: '/all-products' },
    { title: 'Kondenzátory', href: '/all-products' },
    { title: 'Rezistory', href: '/all-products' },
    { title: 'Senzory a spínače', href: '/all-products' },
    { title: 'LED a moduly', href: '/all-products' },
  ],
};

const inspect = {
  eyebrow: 'Jak prověřujeme',
  title: 'Co se děje před odesláním vašich komponentů',
  text: 'Vstupní kontrolu a vnější vizuální prohlídku provádíme ve vlastním závodě v Šen-čenu. Vnitřní analýzu — rentgen, XRF, dekapsulaci, zkoušku pájitelnosti a elektrické testování — zajišťují naše partnerské laboratoře. Nevlastníme vlastní zkušební laboratoř a říkáme to otevřeně, abyste přesně věděli, kdo vaše komponenty testuje.',
  img: '/assets/images/quality-step-3-visual.jpg',
  alt: 'Inspektor umísťuje komponent pod digitální inspekční mikroskop na antistatické podložce',
  ctaLabel: 'Prohlédněte si náš proces kvality',
  ctaHref: '/quality',
};

const industries = {
  'aerospace': {
    hero: {
      heading: 'Elektronické součástky pro letectví a kosmonautiku a zajištění vyřazených dílů',
      lead: 'Zajišťujeme elektronické součástky pro letecké a kosmické programy — včetně vyřazených a obtížně dostupných referencí — a přitom chráníme váš výrobní termín.',
      img: '/assets/images/industry-aerospace-hero.jpg',
      alt: 'Panely řízení avioniky a přístrojové displeje v kokpitu letadla',
    },
    intro: {
      title: 'Stejné standardy. Rychlejší dostupnost.',
      paragraphs: [
        'Letecká výroba si nemůže dovolit neověřený komponent. Když linka čeká na součástku, tlak velí vzít, co je k dispozici — a právě tehdy se do dodavatelského řetězce dostávají přeznačené, neodpovídající nebo nedohledatelné díly.',
        'Nakupujeme podle vašeho kusovníku (BOM) od námi kvalifikovaných dodavatelů a v případě, že referenci nelze sehnat, vám to řekneme, místo abychom ji potichu nahradili. Každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu a vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Popisované kartony s elektronickými komponenty ve skladu YIXINOU',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Víme, jak vám pomoci snížit rizika',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'quality',
          title: 'Zajištění kvality',
          text: 'Každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu a vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
        },
        {
          icon: 'inventory',
          title: 'Řízení zásob',
          text: 'Jednorázový nákup nebo průběžný program — můžeme držet dohodnuté zásoby podle vašeho výrobního plánu, aby byly komponenty připraveny, když je vaše linka potřebuje.',
        },
        {
          icon: 'obsolete',
          title: 'Řízení zastarávání',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro letecký a kosmický průmysl',
      lead: 'Kategorie, které dodáváme nejčastěji pro letecké, obranné a pozemní podpůrné programy.',
      items: [
        'Komponenty desek řízení letu a avioniky',
        'Díly navigačních a komunikačních systémů',
        'Komponenty radarového a pozemního podpůrného vybavení',
        'Vysoce spolehlivé konektory, relé a spínače',
        'Polovodiče pro napájení, paměti a rozhraní',
        'Vyřazené reference, reference posledního nákupu a nedostupné díly',
      ],
    },
    cta: {
      title: 'Pošlete nám svůj letecký kusovník (BOM)',
      text: 'Uveďte čísla dílů, množství a vaše kritéria přejímky. Potvrdíme dostupnost, dodací lhůtu a přesně to, jak komponenty před odesláním prověříme.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'automotive': {
    hero: {
      heading: 'Elektronické součástky pro automobilový průmysl a zajištění komponentů pro ADAS',
      lead: 'Zajišťujeme komponenty pro automobilové systémy — ADAS, infotainment, osvětlení a napájení elektromobilů — a pracujeme s nerovnováhou nabídky a poptávky, kvůli které se automobilová výroba opožďuje.',
      img: '/assets/images/industry-automotive-hero.jpg',
      alt: 'Palubní deska vozidla se sejmutým obložením, která odhaluje desku plošných spojů a kabelové svazky',
    },
    intro: {
      title: 'Víme, jak zajistit, co potřebujete',
      paragraphs: [
        'Automobilové programy stojí na dlouhých kvalifikačních cyklech a nekompromisních výrobních plánech. Když je komponentu nedostatek, může rekvalifikace alternativy stát více času, než kolik ten díl vydělá, a proto je prioritou rychle najít správnou referenci a prokázat její pravost.',
        'Pracujeme podle vašeho kusovníku (BOM), nakupujeme od námi kvalifikovaných dodavatelů a každou objednávku prověřujeme po příchodu v našem závodě v Šen-čenu. Díly, které vyžadují vnitřní analýzu, putují do našich partnerských laboratoří.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Inspektor YIXINOU obsluhuje digitální inspekční mikroskop na pracovišti',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Víme, jak zajistit, co potřebujete',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'quality',
          title: 'Zajištění kvality',
          text: 'Každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu a vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
        },
        {
          icon: 'inventory',
          title: 'Rychlost uvedení na trh',
          text: 'O dostupnosti se rozhoduje dřív, než udeří nedostatek. Nabídku připravujeme včas, rychle potvrzujeme sklad a označujeme díly, které zdrží vaši výrobu.',
        },
        {
          icon: 'obsolete',
          title: 'Podpora životního cyklu',
          text: 'Automobilové platformy zůstávají ve výrobě dlouho poté, co byla jejich křemíková řešení vyřazena. Sledujeme oznámení o posledním nákupu a dál zajišťujeme reference, které vaše platforma stále používá.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro automobilové systémy',
      lead: 'Kategorie, které dodáváme nejčastěji pro automobilové programy a programy elektromobilů.',
      items: [
        'Komponenty ADAS, senzorů a kamer',
        'Díly infotainmentu, displejů a audia',
        'Komponenty LED osvětlení a řízení karoserie',
        'Komponenty pro řízení baterie a napájení elektromobilů',
        'Konektory, relé a pasivní součástky',
        'Vyřazené reference a reference posledního nákupu',
      ],
    },
    cta: {
      title: 'Pošlete nám svůj automobilový kusovník (BOM)',
      text: 'Uveďte čísla dílů, množství a vaše kritéria přejímky. Potvrdíme dostupnost, dodací lhůtu a přesně to, jak komponenty před odesláním prověříme.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'consumer-electronics': {
    hero: {
      heading: 'Elektronické součástky pro spotřební elektroniku',
      lead: 'Dodáváme komponenty pro telefony, nositelnou elektroniku, audio a zařízení pro chytrou domácnost, kde o zakázce rozhoduje cena za jednotku a dodací lhůta.',
      img: '/assets/images/industry-consumer-electronics-hero.jpg',
      alt: 'Demontovaný smartphone vedle otevřených bezdrátových sluchátek s viditelnými deskami plošných spojů',
    },
    intro: {
      title: 'Pomáháme vám být o krok napřed',
      paragraphs: [
        'Spotřební elektronika se pohybuje rychle. Návrh může být nahrazen během jediné sezony a kusovník se mění spolu s ním, a proto musí zajišťování držet krok s plánem vývoje, a ne za ním zaostávat.',
        'Nabízíme ceny podle celého kusovníku (BOM), nakupujeme od námi kvalifikovaných dodavatelů a každou objednávku prověříme před odesláním. Pokud se některá reference vyřazuje, řekneme vám to včas, abyste mohli rozhodnout o posledním nákupu.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Zásobníky a cívky s komponentami rozložené v řadách na stolech pro počítání a označování šarží',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Pomáháme vám být o krok napřed',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'inventory',
          title: 'Úspora nákladů',
          text: 'Ekonomiku spotřebních programů určuje cena za jednotku. Nabízíme cenu za celý kusovník (BOM), navrhujeme alternativy tam, kde jsou skutečně rovnocenné, a říkáme, kde náklady skutečně leží.',
        },
        {
          icon: 'quality',
          title: 'Řízení zásob',
          text: 'Každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu a vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
        },
        {
          icon: 'obsolete',
          title: 'Zmírnění nadbytečných zásob',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro spotřebitelská zařízení',
      lead: 'Kategorie, které dodáváme nejčastěji pro programy spotřební elektroniky.',
      items: [
        'Komponenty displejů, dotykových vrstev a kamer',
        'Integrované obvody pro řízení napájení a nabíjení',
        'Komponenty bezdrátové komunikace, audia a RF',
        'Senzory, spínače a LED',
        'Pasivní součástky a konektory',
        'Moduly a starší reference',
      ],
    },
    cta: {
      title: 'Pošlete nám svůj kusovník (BOM) pro spotřební elektroniku',
      text: 'Uveďte čísla dílů, množství a cílové náklady. Ozveme se s dostupností, dodací lhůtou a informací, kde jsou alternativy.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'contract-manufacturing': {
    hero: {
      heading: 'Zajišťování komponentů pro smluvní výrobce a EMS',
      lead: 'Podpora při odstávce linky i objemové zakázky pro poskytovatele EMS — naceněno podle vašeho kusovníku (BOM), a ne po jednotlivých dílech.',
      img: '/assets/images/industry-contract-manufacturing-hero.jpg',
      alt: 'Panel holých desek plošných spojů projíždějící linkou SMT vedle cívek komponentů pro povrchovou montáž',
    },
    intro: {
      title: 'Jsme odhodláni vám dodávat',
      paragraphs: [
        'Smluvní výrobce je hodnocen podle termínů dodání, které sám plně nekontroluje. Proměnnou jsou díly: jediná chybějící reference může zdržet hotovou sestavu a jediný neověřený díl může stát zákazníka.',
        'Nabízíme cenu za celý kusovník (BOM), nakupujeme od námi kvalifikovaných dodavatelů a každou objednávku prověřujeme po příchodu v našem závodě v Šen-čenu. Pokud linka už stojí, považujeme nedostatek za naléhavý a rychle sdělíme, zda můžeme pomoci.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Popisované kartony s elektronickými komponenty ve skladu YIXINOU',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Jsme odhodláni vám dodávat',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'inventory',
          title: 'Úspora nákladů',
          text: 'Marže na sestavě je tenká, a proto na ceně komponentů záleží. Nabízíme cenu za celý kusovník (BOM), upozorňujeme na díly, kde je rovnocenná alternativa skutečně levnější, a nenavyšujeme cenu o díly, které už máte.',
        },
        {
          icon: 'quality',
          title: 'Řízení zásob',
          text: 'Každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu a vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
        },
        {
          icon: 'obsolete',
          title: 'Zmírnění nadbytečných zásob',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro montážní a výrobní programy',
      lead: 'Kategorie, které dodáváme nejčastěji pro EMS a smluvní výrobu.',
      items: [
        'Nacenění kusovníku (BOM) a kompletní objednávky na jednom místě',
        'Zajišťování při odstávce linky a nedostatku dílů',
        'Ověření druhého zdroje',
        'Vyrovnávání nadbytečných zásob',
        'Konektory, pasivní součástky a polovodiče',
        'Naprogramované díly a sestavené sady',
      ],
    },
    cta: {
      title: 'Pošlete nám kusovník k nacenění',
      text: 'Nahrajte nebo vložte svůj kusovník (BOM) a naceníme celou položku, včetně dílů, které už máte zajištěné, abyste mohli srovnávat srovnatelné.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'energy': {
    hero: {
      heading: 'Elektronické součástky pro energetiku a přeměnu energie',
      lead: 'Dodáváme komponenty pro fotovoltaiku, akumulaci, síťová zařízení a měniče, kde musí díly vydržet teplo, zatížení a čas.',
      img: '/assets/images/industry-energy-hero.jpg',
      alt: 'Otevřená skříň měniče pro přeměnu energie s přípojnicemi, chladiči a výkonovými moduly',
    },
    intro: {
      title: 'Podporujeme váš dodavatelský řetězec',
      paragraphs: [
        'Výkonová elektronika pracuje v náročných podmínkách. Od měniče nebo akumulační skříně se očekává, že budou roky pracovat při zvýšené teplotě, a proto hraniční díl není malé riziko — je to porucha v provozu, která jen čeká, až se projeví.',
        'Nakupujeme podle vašeho kusovníku (BOM) od námi kvalifikovaných dodavatelů a každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu. Vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Inspektor YIXINOU obsluhuje digitální inspekční mikroskop na pracovišti',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Podporujeme váš dodavatelský řetězec',
      items: [
        {
          icon: 'sourcing',
          title: 'Rychlost a přesnost',
          text: 'Termíny projektů se málokdy posouvají, a proto musí být nabídka rychlá i správná. Dostupnost potvrzujeme podle skutečných zásob a označujeme díly, které termín nestihnou.',
        },
        {
          icon: 'quality',
          title: 'Řízení zásob',
          text: 'Každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu a vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
        },
        {
          icon: 'inventory',
          title: 'Úspora nákladů',
          text: 'Výkonové komponenty nesou velký podíl nákladů kusovníku (BOM). Cenu nabízíme za celou položku a upozorňujeme, kde je rovnocenná reference skutečně levnější.',
        },
        {
          icon: 'obsolete',
          title: 'Flexibilita',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro energetiku a výkonové systémy',
      lead: 'Kategorie, které dodáváme nejčastěji pro programy v energetice a přeměně energie.',
      items: [
        'IGBT, budiče hradel a výkonové moduly',
        'Díly měničů a přeměny energie',
        'Elektronika řízení a monitorování',
        'Magnetické komponenty a kondenzátory',
        'Konektory, relé a svorky',
        'Vyřazené reference pro instalované zařízení',
      ],
    },
    cta: {
      title: 'Pošlete nám kusovník (BOM) vašeho projektu',
      text: 'Uveďte čísla dílů, množství a termín dodání, kterým se řídíte. Potvrdíme, co lze splnit a co ne.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'enterprise-computing': {
    hero: {
      heading: 'Zajišťování komponentů pro servery a datová centra',
      lead: 'Komponenty pro servery, úložiště, síťová zařízení a hardware datových center — včetně starších referencí, které udržují provoz instalovaných systémů.',
      img: '/assets/images/industry-enterprise-computing-hero.jpg',
      alt: 'Blade servery vytažené z racku s odkrytými deskami plošných spojů a paměťovými moduly',
    },
    intro: {
      title: 'Udržujeme vaše linky v provozu',
      paragraphs: [
        'Podnikový hardware zůstává v provozu mnohem déle než platformy, pro které byl postaven. Jakmile generace serverů ztratí podporu, je díly obtížnější sehnat právě ve chvíli, kdy začíná růst poruchovost.',
        'Nakupujeme podle vašeho kusovníku (BOM), včetně referencí na konci životního cyklu, a každou objednávku prověřujeme po příchodu v našem závodě v Šen-čenu. Vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Popisované kartony s elektronickými komponenty ve skladu YIXINOU',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Udržujeme vaše linky v provozu',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'obsolete',
          title: 'Zmírnění nadbytečných zásob',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
        {
          icon: 'inventory',
          title: 'Úspora nákladů',
          text: 'Obnovovací cykly jsou drahé. Udržet stávající systémy déle provozuschopné je často levnější rozhodnutí, a proto zajišťujeme díly, které to umožňují.',
        },
        {
          icon: 'quality',
          title: 'Řízení životního cyklu produktu',
          text: 'Sledujeme oznámení o posledním nákupu a o ukončení výroby a sdělujeme vám, kdy se reference ve vašem systému stane obtížně dostupnou, dokud je ještě čas jednat.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro serverové a úložné platformy',
      lead: 'Kategorie, které dodáváme nejčastěji pro podnikové výpočetní systémy a hardware datových center.',
      items: [
        'Řadiče serverů, úložišť a rozhraní',
        'Díly pamětí a podpory čipsetů',
        'Napájecí zdroje a regulátory napětí',
        'Chlazení, konektory a kabeláž',
        'Síťové a rozhranové komponenty',
        'Starší reference pro instalované systémy',
      ],
    },
    cta: {
      title: 'Pošlete nám kusovník (BOM) vaší serverové platformy',
      text: 'Uveďte platformu, čísla dílů a množství, včetně referencí na konci životního cyklu. Potvrdíme, co je skutečně dostupné.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'gaming': {
    hero: {
      heading: 'Elektronické součástky pro hrací a zábavní automaty',
      lead: 'Komponenty pro herní hardware, zábavní, loterijní a prodejní automaty — včetně dílů, které udržují v provozu stroje s dlouhou životností.',
      img: '/assets/images/industry-gaming-hero.jpg',
      alt: 'Ovládací panel hracího automatu s podsvícenými tlačítky a joystickem, za nímž je vidět deska plošných spojů a kabeláž',
    },
    intro: {
      title: 'Jsme odhodláni dodávat kvalitní díly, pokaždé',
      paragraphs: [
        'Herní a zábavní hardware zůstává v provozu roky, často v provozovnách, kde je nefunkční automat přímou ztrátou tržeb. Komponenty v jeho útrobách byly nezřídka vyřazeny už dávno.',
        'Zajišťujeme jak aktuální komponenty, tak vyřazené reference od námi kvalifikovaných dodavatelů a každá objednávka je před odesláním prověřena po příchodu v našem závodě v Šen-čenu.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Zásobníky a cívky s komponentami rozložené v řadách na stolech pro počítání a označování šarží',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Jsme odhodláni dodávat kvalitní díly, pokaždé',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'inventory',
          title: 'Úspora nákladů',
          text: 'Provozovatelé hospodaří s těsnou ekonomikou na jednotku. Naceníme díly, které potřebujete, aniž bychom objednávku navyšovali, a otevřeně řekneme, když levnější alternativa ve skutečnosti rovnocenná není.',
        },
        {
          icon: 'obsolete',
          title: 'Zmírnění nadbytečných zásob',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
        {
          icon: 'quality',
          title: 'Řízení zásob',
          text: 'Každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu a vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro herní a zábavní hardware',
      lead: 'Kategorie, které dodáváme nejčastěji pro hrací, zábavní a prodejní automaty.',
      items: [
        'Komponenty displejů a řadičů',
        'Tlačítka, joysticky a enkodéry',
        'Komponenty napájení, rozhraní a osvětlení',
        'Základní desky a moduly',
        'Konektory, svazky a pasivní součástky',
        'Náhradní díly s dlouhou životností pro starší automaty',
      ],
    },
    cta: {
      title: 'Pošlete nám kusovník (BOM) vašeho automatu',
      text: 'Uveďte stroj, čísla dílů a množství. Potvrdíme dostupnost a dodací lhůtu pro aktuální i vyřazené reference.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'healthcare': {
    hero: {
      heading: 'Elektronické součástky pro zdravotnickou a lékařskou techniku',
      lead: 'Komponenty pro monitorování pacientů, diagnostické zobrazování a laboratorní přístroje, kde je dohledatelnost stejně důležitá jako dostupnost.',
      img: '/assets/images/industry-healthcare-hero.jpg',
      alt: 'Zadní část přístroje pro monitorování pacienta s odkrytou základní deskou, konektory senzorů a plochým kabelem',
    },
    intro: {
      title: 'Řadíme váš dodavatelský řetězec na první místo',
      paragraphs: [
        'Zdravotnická technika je kvalifikována podle pevného kusovníku (BOM) a zůstává v provozu dlouho poté, co byly její komponenty vyřazeny. Nahrazení dílu není nákupní rozhodnutí — je to rozhodnutí regulační.',
        'Právě proto je klíčová dohledatelnost. Nakupujeme podle vámi schválených referencí, uchováváme čísla šarží a datumové kódy u každé dodávky a každou objednávku prověřujeme po příchodu v našem závodě v Šen-čenu. Vnitřní analýzu zajišťují naše partnerské laboratoře.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Popisované kartony s elektronickými komponenty ve skladu YIXINOU',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Řadíme váš dodavatelský řetězec na první místo',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'quality',
          title: 'Řízení životního cyklu produktu',
          text: 'Sledujeme oznámení o posledním nákupu a o ukončení výroby u referencí, které používáte, abyste se o ukončení výroby dozvěděli předem, a ne až v momentě poruchy.',
        },
        {
          icon: 'inventory',
          title: 'Řízení zásob',
          text: 'Jednorázový nákup nebo průběžný program — můžeme držet dohodnuté zásoby podle vašeho výrobního plánu, aby byly komponenty připraveny, když je vaše linka potřebuje.',
        },
        {
          icon: 'obsolete',
          title: 'Zmírnění nadbytečných zásob',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro zdravotnickou a laboratorní techniku',
      lead: 'Kategorie, které dodáváme nejčastěji pro zdravotnické prostředky a diagnostické přístroje.',
      items: [
        'Komponenty desek monitorování a diagnostiky',
        'Senzory a díly pro zpracování signálu',
        'Komponenty pro napájení a galvanické oddělení',
        'Displeje, konektory a kabeláž',
        'Polovodiče pro rozhraní a paměti',
        'Vyřazené reference pro instalované přístroje',
      ],
    },
    cta: {
      title: 'Pošlete nám kusovník (BOM) vašeho přístroje',
      text: 'Uveďte schválené reference, množství a případné požadavky na dohledatelnost. Potvrdíme, co můžeme dodat a jak to bude zdokumentováno.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'industrial-automation': {
    hero: {
      heading: 'Elektronické součástky pro průmyslovou automatizaci',
      lead: 'Komponenty pro robotiku, pohony, PLC, senzory a výkonovou elektroniku — zajištěné tak, aby se vaše výrobní linka nezastavila kvůli dílu.',
      img: '/assets/images/industry-industrial-automation-hero.jpg',
      alt: 'Rozváděčová skříň s moduly PLC a kabelovými kanály vedle robotického ramene ve výrobní buňce',
    },
    intro: {
      title: 'Udržujeme vaše linky v provozu',
      paragraphs: [
        'Automatizace se hodnotí podle doby provozu. Zastavená linka stojí za hodinu víc než téměř jakýkoli její komponent, a proto je prioritou obvykle získat správný díl dnes, a ne nejlevnější díl příští měsíc.',
        'Nakupujeme podle vašeho kusovníku (BOM) od námi kvalifikovaných dodavatelů a každou objednávku prověřujeme po příchodu v našem závodě v Šen-čenu. Pokud instalovaný stroj používá vyřazenou referenci, sdělíme vám, zda ji lze ještě sehnat.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Zásobníky a cívky s komponentami rozložené v řadách na stolech pro počítání a označování šarží',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Udržujeme vaše linky v provozu',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'inventory',
          title: 'Úspora nákladů',
          text: 'Kusovníky (BOM) pro automatizaci obsahují mnoho běžných dílů. Cenu nabízíme za celou položku a ukazujeme, kde náklady skutečně leží, místo abychom každý řádek navyšovali stejně.',
        },
        {
          icon: 'quality',
          title: 'Řízení zásob',
          text: 'Každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu a vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
        },
        {
          icon: 'obsolete',
          title: 'Zmírnění nadbytečných zásob',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro automatizaci a řízení',
      lead: 'Kategorie, které dodáváme nejčastěji pro průmyslovou automatizaci a řídicí systémy.',
      items: [
        'Díly PLC, pohonů a řízení pohybu',
        'Senzory a integrované obvody rozhraní',
        'Výkonová elektronika a budiče hradel',
        'Relé, stykače a svorky',
        'Konektory, kabely a pasivní součástky',
        'Starší náhradní díly pro instalované stroje',
      ],
    },
    cta: {
      title: 'Pošlete nám kusovník (BOM) pro automatizaci',
      text: 'Uveďte stroj nebo platformu, čísla dílů a množství. Pokud linka už stojí, řekněte nám to a budeme požadavek řešit jako naléhavý.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'personal-computing': {
    hero: {
      heading: 'Elektronické součástky pro osobní počítače',
      lead: 'Komponenty pro notebooky, stolní počítače, periferie a jejich příslušenství — od aktuálních platforem až po starší reference, které servisní týmy stále potřebují.',
      img: '/assets/images/industry-personal-computing-hero.jpg',
      alt: 'Otevřený kryt notebooku s odkrytou základní deskou, paměťovými moduly, chladicím ventilátorem a baterií',
    },
    intro: {
      title: 'Naplňujeme vaše potřeby nabídky a poptávky',
      paragraphs: [
        'Osobní počítače stojí na krátkých cyklech platforem a dlouhých servisních ocáscích. Nové návrhy potřebují aktuální křemíková řešení rychle, zatímco stroje, které jsou už v provozu, potřebují reference, jejichž výrobu výrobce ukončil před lety.',
        'Pokrýváme obojí: nakupujeme podle vašeho kusovníku (BOM) od námi kvalifikovaných dodavatelů a každou objednávku prověřujeme po příchodu v našem závodě v Šen-čenu před odesláním.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Popisované kartony s elektronickými komponenty ve skladu YIXINOU',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Naplňujeme vaše potřeby nabídky a poptávky',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'inventory',
          title: 'Úspora nákladů',
          text: 'Marži platformy určuje jednotková cena. Nabízíme cenu za celý kusovník (BOM) a označujeme řádky, kde skutečně rovnocenná alternativa mění výsledné číslo.',
        },
        {
          icon: 'quality',
          title: 'Řízení životního cyklu produktu',
          text: 'Sledujeme oznámení o ukončení výroby u referencí, se kterými stavíte, aby se k vám informace o ukončení výroby dostala dřív, než se z ní stane nedostatek.',
        },
        {
          icon: 'obsolete',
          title: 'Zmírnění nadbytečných zásob',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro výpočetní platformy',
      lead: 'Kategorie, které dodáváme nejčastěji pro osobní počítače a periferie.',
      items: [
        'Integrované obvody pro řízení napájení a nabíjení',
        'Řadiče rozhraní, USB a displejů',
        'Komponenty pamětí a úložišť',
        'Konektory, kabely a pasivní součástky',
        'Chladicí a mechanické díly',
        'Starší reference pro opravy a servis',
      ],
    },
    cta: {
      title: 'Pošlete nám kusovník (BOM) vaší platformy',
      text: 'Uveďte platformu, čísla dílů a množství, aktuální nebo starší. Potvrdíme, co je dostupné a s jakou dodací lhůtou.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'semiconductor-manufacturing': {
    hero: {
      heading: 'Komponenty a náhradní díly pro výrobu polovodičů',
      lead: 'Podpůrné komponenty, díly rozhraní a náhradní díly pro výrobu, testování a balení, kde se prostoje měří ve waferech.',
      img: '/assets/images/industry-semiconductor-hero.jpg',
      alt: 'Křemíkový wafer držený manipulačním nástrojem nad stolem a druhý wafer v otevřené kazetě',
    },
    intro: {
      title: 'Víme, jak udržet efektivitu',
      paragraphs: [
        'Fabrika ani testovací patro nemůže čekat na podpůrný díl. Rozhraní nástrojů, spotřební materiál handlerů a řídicí elektronika jsou často starší položky s dlouhými dodacími lhůtami a několika málo zbývajícími zdroji.',
        'Nakupujeme podle vašeho seznamu dílů od námi kvalifikovaných dodavatelů a každou objednávku prověřujeme po příchodu v našem závodě v Šen-čenu. Vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Inspektor YIXINOU obsluhuje digitální inspekční mikroskop na pracovišti',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Víme, jak udržet efektivitu',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'inventory',
          title: 'Úspora nákladů',
          text: 'Podpůrné díly se nakupují v malých množstvích za vysoké jednotkové ceny. Cenu nabízíme za celý seznam a sdělujeme, kde rovnocenná reference skutečně snižuje náklady.',
        },
        {
          icon: 'obsolete',
          title: 'Zmírnění nadbytečných zásob',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
        {
          icon: 'quality',
          title: 'Řízení zásob',
          text: 'Každá objednávka je po příchodu prověřena v našem závodě v Šen-čenu a vše, co vyžaduje vnitřní analýzu, putuje do našich partnerských laboratoří.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty a náhradní díly pro výrobu a testování',
      lead: 'Kategorie, které dodáváme nejčastěji pro výrobu a testování polovodičů.',
      items: [
        'Díly rozhraní testerů a handlerů',
        'Spotřební materiál pro sondy a sokety',
        'Napájecí zdroje a řídicí elektronika',
        'Senzory, ventily a pohybové komponenty',
        'Konektory, kabely a pasivní součástky',
        'Starší náhradní díly pro instalované nástroje',
      ],
    },
    cta: {
      title: 'Pošlete nám seznam dílů vašeho zařízení',
      text: 'Uveďte nástroj, čísla dílů a množství. Potvrdíme dostupnost a dodací lhůtu pro aktuální i starší reference.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
  'telecom-networking': {
    hero: {
      heading: 'Zajišťování komponentů pro telekomunikace a sítě',
      lead: 'Komponenty pro základnové stanice, routery, switche, optickou přenosovou techniku a přístupová zařízení — včetně podpory linkových karet pro sítě, které jsou již v provozu.',
      img: '/assets/images/industry-telecom-networking-hero.jpg',
      alt: 'Síťový switch v racku se svítícími LED portů a optickými propojovacími kabely vedenými do panelu nad ním',
    },
    intro: {
      title: 'Pracujeme pro váš dodavatelský řetězec',
      paragraphs: [
        'Telekomunikační infrastruktura je stavěná na desetiletí provozu a podporována ještě déle. Operátoři nemohou vyřadit kartu z provozu jen proto, že se daný komponent už nevyrábí, a proto je zajištění starších referencí stejně důležité jako zajištění nových.',
        'Pracujeme podle vašeho kusovníku (BOM), nakupujeme od námi kvalifikovaných dodavatelů a každou objednávku před odesláním k vám prověřujeme po příchodu v našem závodě v Šen-čenu.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Popisované kartony s elektronickými komponenty ve skladu YIXINOU',
    },
    risk: {
      eyebrow: 'Řízení rizik',
      title: 'Pracujeme pro váš dodavatelský řetězec',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategický sourcing',
          text: 'Pracujeme podle vašeho kusovníku (BOM) a vámi schválených referencí a v případě, že referenci nelze sehnat, to řekneme, místo abychom ji potichu nahradili.',
        },
        {
          icon: 'obsolete',
          title: 'Zmírnění nadbytečných zásob',
          text: 'Sledujeme oznámení o posledním nákupu (LTB) a o ukončení výroby a vyhledáváme vyřazené reference, aby komponent na konci životního cyklu nezastavil váš program.',
        },
        {
          icon: 'inventory',
          title: 'Úspora nákladů',
          text: 'Linkové karty nesou nepřiměřeně velký podíl kusovníku (BOM). Cenu nabízíme za kartu jako celek a určujeme řádky, kde se náklady skutečně mohou pohnout.',
        },
        {
          icon: 'quality',
          title: 'Řízení životního cyklu produktu',
          text: 'Sledujeme oznámení o posledním nákupu u referencí ve vaší síti, aby ukončení výroby bylo plánovací položkou, a ne výpadkem.',
        },
      ],
    },
    parts: {
      eyebrow: 'Co zajišťujeme',
      title: 'Komponenty pro telekomunikační a síťové zařízení',
      lead: 'Kategorie, které dodáváme nejčastěji pro telekomunikace, sítě a optický přenos.',
      items: [
        'RF, optické a rozhranové komponenty',
        'Díly pro napájení a ochranu obvodů',
        'Filtry, konektory a pasivní součástky',
        'Integrované obvody pamětí, logiky a řadičů',
        'Moduly a sestavy linkových karet',
        'Starší reference pro instalované sítě',
      ],
    },
    cta: {
      title: 'Pošlete nám kusovník (BOM) vaší síťové platformy',
      text: 'Uveďte platformu, čísla dílů a množství, včetně starších referencí linkových karet. Potvrdíme, co je skutečně dostupné.',
      primary: {
        label: 'Kontaktujte nás',
        href: '/Contact',
      },
      secondary: {
        label: 'Všechny produkty',
        href: '/all-products',
      },
    },
  },
};

export { groups, inspect, industries };
export default { groups, inspect, industries };
