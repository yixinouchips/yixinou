// Croatian (hr-HR) locale pack for YIXINOU — industry detail pages.
// Mirrors src/industryDetails.js key-for-key: same structure, same keys, same array lengths.
// Slugs, route hrefs, image paths, icon identifiers, technical brands and units are never
// translated. Internal analysis is attributed to our partner laboratories only; no
// certification, accreditation or capability is claimed that the source does not state.
const groups = {
  eyebrow: 'Grupe proizvoda',
  title: 'Proizvodi koje isporučujemo',
  lead: 'Iste grupe komponenti koje isporučujemo u svim industrijama u kojima poslujemo.',
  items: [
    { title: 'Integrirani sklopovi', href: '/all-products' },
    { title: 'Tranzistori', href: '/all-products' },
    { title: 'Konektori', href: '/all-products' },
    { title: 'Kondenzatori', href: '/all-products' },
    { title: 'Otpornici', href: '/all-products' },
    { title: 'Senzori i prekidači', href: '/all-products' },
    { title: 'LED diode i moduli', href: '/all-products' },
  ],
};

const inspect = {
  eyebrow: 'Kako provjeravamo',
  title: 'Što se događa prije nego što vaši dijelovi budu otpremljeni',
  text: 'Ulazna kontrola i vanjski vizualni pregled provode se u našem vlastitom pogonu u Shenzhenu. Internu analizu — rendgensko snimanje, XRF, dekapsulaciju, provjeru lemljivosti i električna ispitivanja — provode naši partnerski laboratoriji. Ne posjedujemo vlastiti ispitni laboratorij i to otvoreno kažemo kako biste točno znali tko ispituje vaše komponente.',
  img: '/assets/images/quality-step-3-visual.jpg',
  alt: 'Inspektor postavlja komponentu pod digitalni inspekcijski mikroskop na antistatičkoj podlozi',
  ctaLabel: 'Pogledajte naš proces kvalitete',
  ctaHref: '/quality',
};

const industries = {
  'aerospace': {
    hero: {
      heading: 'Elektroničke komponente za zrakoplovstvo i nabava zastarjelih dijelova',
      lead: 'Nabavljamo elektroničke komponente za zrakoplovne i avijacijske programe — uključujući zastarjele i teško dostupne artikle — i pritom čuvamo rokove vaše proizvodnje.',
      img: '/assets/images/industry-aerospace-hero.jpg',
      alt: 'Upravljačke ploče avionike i instrumentni zasloni u kokpitu zrakoplova',
    },
    intro: {
      title: 'Isti standardi. Brži pristup.',
      paragraphs: [
        'Zrakoplovna proizvodnja ne može prihvatiti neprovjerenu komponentu. Kada linija čeka komponentu, javlja se pritisak da se uzme ono što je dostupno — i upravo tada u lanac opskrbe ulaze preoznačeni, neodgovarajući ili nesljedivi dijelovi.',
        'Nabavljamo prema vašoj specifikaciji (BOM) od dobavljača koje smo kvalificirali i kažemo vam kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu. Svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu, a sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Označene kartonske kutije s elektroničkim komponentama na policama skladišta YIXINOU',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Znamo kako vam pomoći da smanjite rizik',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'quality',
          title: 'Osiguranje kvalitete',
          text: 'Svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu, a sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
        },
        {
          icon: 'inventory',
          title: 'Upravljanje zalihama',
          text: 'Jednokratna kupnja ili stalni program — možemo držati dogovorene zalihe prema vašem proizvodnom planu, tako da dijelovi budu spremni kada ih vaša linija treba.',
        },
        {
          icon: 'obsolete',
          title: 'Upravljanje zastarjevanjem',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za zrakoplovnu i avijacijsku industriju',
      lead: 'Kategorije koje najčešće isporučujemo za zrakoplovne, obrambene i programe kopnene potpore.',
      items: [
        'Komponente za ploče upravljanja letom i avioniku',
        'Dijelovi navigacijskih i komunikacijskih sustava',
        'Komponente radarske i kopnene pomoćne opreme',
        'Konektori, releji i prekidači visoke pouzdanosti',
        'Poluvodiči za napajanje, memoriju i sučelja',
        'Ukinuti, LTB i zastarjeli artikli',
      ],
    },
    cta: {
      title: 'Pošaljite nam svoju zrakoplovnu specifikaciju (BOM)',
      text: 'Navedite artikle, količine i svoje kriterije prihvatljivosti. Potvrdit ćemo dostupnost, rok isporuke i točno to kako ćemo pregledati dijelove prije otpreme.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'automotive': {
    hero: {
      heading: 'Elektroničke komponente za automobilsku industriju i nabava komponenti za ADAS',
      lead: 'Nabavljamo komponente za automobilske sustave — ADAS, infotainment, rasvjetu i napajanje električnih vozila (EV) — i radimo u uvjetima neravnoteže ponude i potražnje zbog koje automobilske proizvodnje kasne.',
      img: '/assets/images/industry-automotive-hero.jpg',
      alt: 'Instrumentna ploča vozila s uklonjenom oblogom koja otkriva tiskanu pločicu i kabelske snopove',
    },
    intro: {
      title: 'Znamo kako osigurati ono što vam treba',
      paragraphs: [
        'Automobilski programi rade s dugim ciklusima kvalifikacije i nepopustljivim proizvodnim rokovima. Kada komponente nema, ponovna kvalifikacija alternative može odnijeti više vremena nego što sam dio vrijedi, pa je prioritet brzo pronaći pravi artikl i dokazati da je originalan.',
        'Radimo prema vašoj specifikaciji (BOM), kupujemo od dobavljača koje smo kvalificirali i pregledavamo svaku narudžbu po dolasku u naš pogon u Shenzhenu. Dijelovi koji zahtijevaju internu analizu idu u naše partnerske laboratorije.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'YIXINOU inspektor radi s digitalnim inspekcijskim mikroskopom na radnom mjestu',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Znamo kako osigurati ono što vam treba',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'quality',
          title: 'Osiguranje kvalitete',
          text: 'Svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu, a sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
        },
        {
          icon: 'inventory',
          title: 'Brzina izlaska na tržište',
          text: 'Dostupnost se odlučuje prije nego što nastupi nestašica. Rano dajemo ponudu, brzo potvrđujemo zalihe i označavamo dijelove koji će zaustaviti vašu proizvodnju.',
        },
        {
          icon: 'obsolete',
          title: 'Podrška životnom ciklusu',
          text: 'Automobilske platforme ostaju u proizvodnji znatno dulje nego što se proizvode njihovi čipovi. Pratimo obavijesti o posljednjoj kupnji i nastavljamo nabavljati artikle koje vaša platforma još koristi.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za automobilske sustave',
      lead: 'Kategorije koje najčešće isporučujemo za automobilske programe i EV programe.',
      items: [
        'Komponente za ADAS, senzore i kamere',
        'Komponente za infotainment, zaslone i audio',
        'Komponente za LED rasvjetu i upravljanje karoserijom',
        'Komponente za upravljanje baterijom EV i napajanje',
        'Konektori, releji i pasivne komponente',
        'Ukinuti i LTB artikli',
      ],
    },
    cta: {
      title: 'Pošaljite nam svoju automobilsku specifikaciju (BOM)',
      text: 'Navedite artikle, količine i svoje kriterije prihvatljivosti. Potvrdit ćemo dostupnost, rok isporuke i točno to kako ćemo pregledati dijelove prije otpreme.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'consumer-electronics': {
    hero: {
      heading: 'Elektroničke komponente za potrošačku elektroniku',
      lead: 'Isporučujemo komponente za pametne telefone, nosive uređaje, audio opremu i uređaje pametnog doma, gdje trošak po jedinici i rok isporuke odlučuju tko dobiva posao.',
      img: '/assets/images/industry-consumer-electronics-hero.jpg',
      alt: 'Rastavljeni pametni telefon pokraj otvorenih bežičnih slušalica s vidljivim tiskanim pločicama',
    },
    intro: {
      title: 'Pomažemo vam da budete korak ispred',
      paragraphs: [
        'Potrošačka elektronika brzo se mijenja. Dizajn može biti zamijenjen unutar jedne sezone, a specifikacija se mijenja zajedno s njim, pa nabava mora ići ukorak s planom razvoja, a ne zaostajati za njim.',
        'Dajemo ponudu za punu specifikaciju (BOM), nabavljamo od dobavljača koje smo kvalificirali i pregledavamo svaku narudžbu prije otpreme. Kada se neki artikl ukida, javljamo vam dovoljno rano da možete donijeti odluku o posljednjoj kupnji.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Ladice i koluti s komponentama poredani u redove na radnim stolovima za brojanje i označavanje serija',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Pomažemo vam da budete korak ispred',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'inventory',
          title: 'Smanjenje troškova',
          text: 'Ekonomiku potrošačkih programa određuje trošak po jedinici. Dajemo ponudu za cijelu specifikaciju (BOM), nudimo alternative tamo gdje su doista ekvivalentne i pokazujemo od čega se trošak stvarno sastoji.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje zalihama',
          text: 'Svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu, a sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
        },
        {
          icon: 'obsolete',
          title: 'Smanjenje viškova',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za potrošačke uređaje',
      lead: 'Kategorije koje najčešće isporučujemo za programe potrošačke elektronike.',
      items: [
        'Komponente za zaslone, dodir i kamere',
        'IC-ovi za upravljanje napajanjem i punjenjem',
        'Komponente za bežičnu komunikaciju, audio i RF',
        'Senzori, prekidači i LED diode',
        'Pasivne komponente i konektori',
        'Moduli i naslijeđeni artikli',
      ],
    },
    cta: {
      title: 'Pošaljite nam svoju specifikaciju (BOM) za potrošačku elektroniku',
      text: 'Navedite artikle, količine i ciljani trošak. Vratit ćemo se s dostupnošću, rokom isporuke i informacijom o tome gdje postoje alternative.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'contract-manufacturing': {
    hero: {
      heading: 'Nabava komponenti za ugovorne proizvođače i EMS',
      lead: 'Podrška pri zastoju linije i isporuka količina za EMS pružatelje — ponuda prema vašoj specifikaciji (BOM), a ne komponentu po komponentu.',
      img: '/assets/images/industry-contract-manufacturing-hero.jpg',
      alt: 'Ploča golišnih tiskanih pločica kreće se SMT linijom pokraj koluta s komponentama za površinsku montažu',
    },
    intro: {
      title: 'Predani smo isporuci onoga što smo obećali',
      paragraphs: [
        'Ugovorni se proizvođač ocjenjuje prema rokovima isporuke koje ne kontrolira u potpunosti. Varijabla su komponente: jedan artikl koji nedostaje dovoljan je da zaustavi gotov sklop, a jedna neprovjerena komponenta može vas stajati kupca.',
        'Dajemo ponudu za cijelu specifikaciju (BOM), nabavljamo od dobavljača koje smo kvalificirali i pregledavamo svaku narudžbu po dolasku u naš pogon u Shenzhenu. Kada je linija već zaustavljena, nestašicu tretiramo kao hitnu i brzo kažemo možemo li pomoći.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Označene kartonske kutije s elektroničkim komponentama na policama skladišta YIXINOU',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Predani smo isporuci onoga što smo obećali',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'inventory',
          title: 'Smanjenje troškova',
          text: 'Marža na sklopu je tanka, pa je trošak komponenti važan. Dajemo ponudu za cijelu specifikaciju (BOM), izdvajamo dijelove gdje je ekvivalentna alternativa doista jeftinija i ne napuhavamo cijenu dijelovima koje već imate.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje zalihama',
          text: 'Svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu, a sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
        },
        {
          icon: 'obsolete',
          title: 'Smanjenje viškova',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za programe montaže i proizvodnje',
      lead: 'Kategorije koje najčešće isporučujemo za EMS i ugovornu proizvodnju.',
      items: [
        'Ponuda prema BOM-u i narudžbe na jednom mjestu',
        'Nabava kod zastoja linije i nestašice',
        'Provjera drugog izvora',
        'Uravnoteženje viškova i zaliha',
        'Konektori, pasivne komponente i poluvodiči',
        'Programirani i kompletirani dijelovi',
      ],
    },
    cta: {
      title: 'Pošaljite nam specifikaciju (BOM) za ponudu',
      text: 'Prenesite ili zalijepite svoju specifikaciju (BOM) i dati ćemo ponudu za cijelu poziciju, uključujući dijelove koje već imate pokrivene, kako biste mogli usporediti usporedivo.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'energy': {
    hero: {
      heading: 'Elektroničke komponente za energetiku i pretvorbu energije',
      lead: 'Isporučujemo komponente za solarnu energiju, pohranu energije, mrežnu opremu i pretvarače snage, gdje komponente moraju izdržati toplinu, opterećenje i vrijeme.',
      img: '/assets/images/industry-energy-hero.jpg',
      alt: 'Otvoreni ormar za pretvorbu snage invertera s sabirnicama, hladnjacima i energetskim modulima',
    },
    intro: {
      title: 'Podržavamo vaš lanac opskrbe',
      paragraphs: [
        'Energetska elektronika radi u teškim uvjetima. Inverter ili ormar za pohranu energije mora godinama raditi na povišenoj temperaturi, pa komponenta na granici specifikacije nije mali rizik — to je kvar u pogonu koji samo čeka svoj trenutak.',
        'Nabavljamo prema vašoj specifikaciji (BOM) od dobavljača koje smo kvalificirali, a svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu. Sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'YIXINOU inspektor radi s digitalnim inspekcijskim mikroskopom na radnom mjestu',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Podržavamo vaš lanac opskrbe',
      items: [
        {
          icon: 'sourcing',
          title: 'Brzina i točnost',
          text: 'Rokovi projekata rijetko se pomiču, pa ponuda mora biti i brza i točna. Potvrđujemo dostupnost prema stvarnim zalihama i označavamo dijelove koji neće stići na vrijeme.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje zalihama',
          text: 'Svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu, a sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
        },
        {
          icon: 'inventory',
          title: 'Smanjenje troškova',
          text: 'Energetske komponente čine velik udio u trošku specifikacije (BOM). Dajemo ponudu za cijelu poziciju i pokazujemo gdje je ekvivalentni artikl doista jeftiniji.',
        },
        {
          icon: 'obsolete',
          title: 'Fleksibilnost',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za energetske i elektroenergetske sustave',
      lead: 'Kategorije koje najčešće isporučujemo za programe energetike i pretvorbe snage.',
      items: [
        'IGBT-ovi, gate driveri i energetski moduli',
        'Dijelovi za invertere i pretvorbu snage',
        'Elektronika za upravljanje i nadzor',
        'Magnetske komponente i kondenzatori',
        'Konektori, releji i stezaljke',
        'Ukinuti artikli za ugrađenu opremu',
      ],
    },
    cta: {
      title: 'Pošaljite nam specifikaciju (BOM) svog projekta',
      text: 'Navedite artikle, količine i rok isporuke prema kojem radite. Potvrdit ćemo što je izvedivo, a što nije.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'enterprise-computing': {
    hero: {
      heading: 'Nabava komponenti za poslužitelje i podatkovne centre',
      lead: 'Komponente za poslužitelje, sustave pohrane, mrežne uređaje i opremu podatkovnih centara — uključujući zastarjele artikle koji održavaju rad već ugrađenog parka.',
      img: '/assets/images/industry-enterprise-computing-hero.jpg',
      alt: 'Blade poslužitelji izvučeni iz stalka s vidljivim tiskanim pločicama i memorijskim modulima',
    },
    intro: {
      title: 'Održavamo rad vaših linija',
      paragraphs: [
        'Poslovna oprema ostaje u upotrebi znatno dulje od platformi za koje je napravljena. Kada generacija poslužitelja izgubi podršku, dijelove je teže pronaći — upravo u trenutku kada stopa kvarova počinje rasti.',
        'Nabavljamo prema vašoj specifikaciji (BOM), uključujući artikle na kraju životnog ciklusa, i pregledavamo svaku narudžbu po dolasku u naš pogon u Shenzhenu. Sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Označene kartonske kutije s elektroničkim komponentama na policama skladišta YIXINOU',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Održavamo rad vaših linija',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'obsolete',
          title: 'Smanjenje viškova',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
        {
          icon: 'inventory',
          title: 'Smanjenje troškova',
          text: 'Ciklusi obnove opreme su skupi. Produljenje vijeka trajanja postojećeg parka često je jeftinija odluka, pa nabavljamo dijelove koji to omogućuju.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje životnim ciklusom proizvoda',
          text: 'Pratimo obavijesti o posljednjoj kupnji i prestanku proizvodnje i javljamo vam kada će artikl iz vašeg parka uskoro postati teško dostupan, dok još ima vremena za reakciju.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za poslužiteljske platforme i sustave pohrane',
      lead: 'Kategorije koje najčešće isporučujemo za poslovno računarstvo i opremu podatkovnih centara.',
      items: [
        'Kontroleri za poslužitelje, pohranu i sučelja',
        'Dijelovi za memoriju i podršku čipsetu',
        'Napajanja i regulatori napona',
        'Hlađenje, konektori i kabelski sklopovi',
        'Mrežne komponente i komponente sučelja',
        'Zastarjeli artikli za ugrađeni park',
      ],
    },
    cta: {
      title: 'Pošaljite nam specifikaciju (BOM) svoje poslužiteljske platforme',
      text: 'Navedite platformu, artikle i količine, uključujući artikle na kraju životnog ciklusa (EOL). Potvrdit ćemo što je stvarno dostupno.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'gaming': {
    hero: {
      heading: 'Elektroničke komponente za igraće i zabavne automate',
      lead: 'Komponente za igraći hardver, zabavne, lutrijske i prodajne automate — uključujući dijelove koji održavaju rad strojeva s dugim vijekom trajanja.',
      img: '/assets/images/industry-gaming-hero.jpg',
      alt: 'Upravljačka ploča igraćeg automata s osvijetljenim tipkama i joystickom, iza koje se vide tiskana pločica i ožičenje',
    },
    intro: {
      title: 'Predani smo isporuci kvalitetnih dijelova, svaki put',
      paragraphs: [
        'Igraći i zabavni hardver ostaje u upotrebi godinama, često u prostorima gdje je pokvareni automat izravan gubitak prihoda. Komponente u njemu često su ukinute davno prije.',
        'Nabavljamo i aktualne dijelove i ukinute artikle od dobavljača koje smo kvalificirali, a svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu prije otpreme.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Ladice i koluti s komponentama poredani u redove na radnim stolovima za brojanje i označavanje serija',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Predani smo isporuci kvalitetnih dijelova, svaki put',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'inventory',
          title: 'Smanjenje troškova',
          text: 'Operateri rade s tijesnom ekonomikom po jedinici. Dajemo ponudu za dijelove koji vam trebaju bez napuhavanja narudžbe i otvoreno kažemo kada jeftinija alternativa zapravo nije ekvivalentna.',
        },
        {
          icon: 'obsolete',
          title: 'Smanjenje viškova',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje zalihama',
          text: 'Svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu, a sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za igraći i zabavni hardver',
      lead: 'Kategorije koje najčešće isporučujemo za igraće, zabavne i prodajne automate.',
      items: [
        'Komponente za zaslone i kontrolere',
        'Tipke, joysticki i enkoderi',
        'Komponente za napajanje, sučelja i rasvjetu',
        'Glavne ploče i moduli',
        'Konektori, kabelski snopovi i pasivne komponente',
        'Dugotrajne zamjenske komponente za zastarjele automate',
      ],
    },
    cta: {
      title: 'Pošaljite nam specifikaciju (BOM) svog automata',
      text: 'Navedite model automata, artikle i količine. Potvrdit ćemo dostupnost i rok isporuke za aktualne i ukinute artikle.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'healthcare': {
    hero: {
      heading: 'Elektroničke komponente za medicinsku i zdravstvenu opremu',
      lead: 'Komponente za praćenje pacijenata, dijagnostičko snimanje i laboratorijsku opremu, gdje je sljedivost jednako važna kao dostupnost.',
      img: '/assets/images/industry-healthcare-hero.jpg',
      alt: 'Stražnja strana uređaja za praćenje pacijenta s otvorenom glavnom pločom, konektorima senzora i plosnatim kabelom',
    },
    intro: {
      title: 'Vaš lanac opskrbe stavljamo na prvo mjesto',
      paragraphs: [
        'Medicinska se oprema kvalificira prema fiksnoj specifikaciji (BOM) i ostaje u upotrebi znatno dulje nego što se proizvode njezine komponente. Zamjena komponente nije odluka o nabavi — to je regulatorna odluka.',
        'Zato je sljedivost ključna. Nabavljamo prema vašim odobrenim artiklima, čuvamo brojeve serija i datume proizvodnje za svaku isporuku i pregledavamo svaku narudžbu po dolasku u naš pogon u Shenzhenu. Internu analizu provode naši partnerski laboratoriji.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Označene kartonske kutije s elektroničkim komponentama na policama skladišta YIXINOU',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Vaš lanac opskrbe stavljamo na prvo mjesto',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje životnim ciklusom proizvoda',
          text: 'Pratimo obavijesti o posljednjoj kupnji i prestanku proizvodnje za artikle koje koristite, pa o ukidanju doznajete unaprijed, a ne u trenutku kvara.',
        },
        {
          icon: 'inventory',
          title: 'Upravljanje zalihama',
          text: 'Jednokratna kupnja ili stalni program — možemo držati dogovorene zalihe prema vašem proizvodnom planu, tako da dijelovi budu spremni kada ih vaša linija treba.',
        },
        {
          icon: 'obsolete',
          title: 'Smanjenje viškova',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za medicinsku i laboratorijsku opremu',
      lead: 'Kategorije koje najčešće isporučujemo za medicinske uređaje i dijagnostičku opremu.',
      items: [
        'Komponente za ploče za praćenje i dijagnostiku',
        'Senzori i dijelovi za obradu signala',
        'Komponente za napajanje i galvansko odvajanje',
        'Zasloni, konektori i kabelski sklopovi',
        'Poluvodiči za sučelja i memoriju',
        'Ukinuti artikli za ugrađenu opremu',
      ],
    },
    cta: {
      title: 'Pošaljite nam specifikaciju (BOM) svog uređaja',
      text: 'Navedite odobrene artikle, količine i zahtjeve za sljedivost. Potvrdit ćemo što možemo isporučiti i kako će to biti dokumentirano.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'industrial-automation': {
    hero: {
      heading: 'Elektroničke komponente za industrijsku automatizaciju',
      lead: 'Komponente za robotiku, pogone, PLC-ove, senzore i energetsku elektroniku — nabavljamo ih tako da vaša proizvodna linija ne stane zbog komponente.',
      img: '/assets/images/industry-industrial-automation-hero.jpg',
      alt: 'Upravljački ormar s PLC modulima i kabelskim kanalima pokraj robotske ruke u proizvodnoj ćeliji',
    },
    intro: {
      title: 'Održavamo rad vaših linija',
      paragraphs: [
        'Automatizacija se ocjenjuje prema vremenu neprekidnog rada. Zaustavljena linija stoji više po satu od gotovo svake svoje komponente, pa je prioritet obično dobiti pravi dio danas, a ne najjeftiniji idući mjesec.',
        'Nabavljamo prema vašoj specifikaciji (BOM) od dobavljača koje smo kvalificirali i pregledavamo svaku narudžbu po dolasku u naš pogon u Shenzhenu. Ako ugrađeni stroj koristi ukinuti artikl, reći ćemo vam može li se još nabaviti.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Ladice i koluti s komponentama poredani u redove na radnim stolovima za brojanje i označavanje serija',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Održavamo rad vaših linija',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'inventory',
          title: 'Smanjenje troškova',
          text: 'Specifikacije (BOM) za automatizaciju sadrže mnogo standardnih dijelova. Dajemo ponudu za cijelu poziciju i pokazujemo gdje se trošak stvarno nalazi, umjesto da svaku stavku maržiramo jednako.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje zalihama',
          text: 'Svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu, a sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
        },
        {
          icon: 'obsolete',
          title: 'Smanjenje viškova',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za automatizaciju i upravljanje',
      lead: 'Kategorije koje najčešće isporučujemo za industrijsku automatizaciju i sustave upravljanja.',
      items: [
        'Dijelovi za PLC, pogone i upravljanje gibanjem',
        'Senzori i IC-ovi za sučelja',
        'Energetska elektronika i gate driveri',
        'Releji, kontaktori i stezaljke',
        'Konektori, kabeli i pasivne komponente',
        'Zastarjeli rezervni dijelovi za ugrađene strojeve',
      ],
    },
    cta: {
      title: 'Pošaljite nam specifikaciju (BOM) za automatizaciju',
      text: 'Navedite stroj ili platformu, artikle i količine. Ako je linija već zaustavljena, javite nam i tretirat ćemo zahtjev kao hitan.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'personal-computing': {
    hero: {
      heading: 'Elektroničke komponente za osobna računala',
      lead: 'Komponente za prijenosnike, stolna računala, periferiju i njihov lanac opskrbe — od aktualnih platformi do zastarjelih artikala koji su servisnim timovima još potrebni.',
      img: '/assets/images/industry-personal-computing-hero.jpg',
      alt: 'Otvoreno kućište prijenosnog računala s matičnom pločom, memorijskim modulima, ventilatorom za hlađenje i baterijom',
    },
    intro: {
      title: 'Zadovoljavamo vaše potrebe u ponudi i potražnji',
      paragraphs: [
        'Osobna računala rade u kratkim ciklusima platformi i s dugim servisnim repom. Novi dizajni trebaju aktualne čipove i to brzo; strojevi koji su već u upotrebi trebaju artikle koje je proizvođač prestao proizvoditi prije godinama.',
        'Pokrivamo oboje: nabavljamo prema vašoj specifikaciji (BOM) od dobavljača koje smo kvalificirali i pregledavamo svaku narudžbu po dolasku u naš pogon u Shenzhenu prije otpreme.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Označene kartonske kutije s elektroničkim komponentama na policama skladišta YIXINOU',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Zadovoljavamo vaše potrebe u ponudi i potražnji',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'inventory',
          title: 'Smanjenje troškova',
          text: 'Maržu platforme određuje trošak po jedinici. Dajemo ponudu za cijelu specifikaciju (BOM) i označavamo stavke gdje pravi ekvivalent mijenja brojku.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje životnim ciklusom proizvoda',
          text: 'Pratimo obavijesti o prestanku proizvodnje za artikle s kojima radite, kako bi vas vijest o ukidanju stigla prije nego što postane nestašica.',
        },
        {
          icon: 'obsolete',
          title: 'Smanjenje viškova',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za računalne platforme',
      lead: 'Kategorije koje najčešće isporučujemo za osobna računala i periferiju.',
      items: [
        'IC-ovi za upravljanje napajanjem i punjenjem',
        'Kontroleri za sučelja, USB i zaslone',
        'Komponente za memoriju i pohranu',
        'Konektori, kabeli i pasivne komponente',
        'Dijelovi za hlađenje i mehaniku',
        'Zastarjeli artikli za popravak i servis',
      ],
    },
    cta: {
      title: 'Pošaljite nam specifikaciju (BOM) svoje platforme',
      text: 'Navedite platformu, artikle i količine — aktualne ili zastarjele. Potvrdit ćemo što je dostupno i s kojim rokom isporuke.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'semiconductor-manufacturing': {
    hero: {
      heading: 'Komponente i rezervni dijelovi za proizvodnju poluvodiča',
      lead: 'Pomoćne komponente, dijelovi sučelja i rezervni dijelovi za proizvodnju, ispitivanje i pakiranje, gdje se zastoj mjeri u pločicama.',
      img: '/assets/images/industry-semiconductor-hero.jpg',
      alt: 'Silicijska pločica koju manipulator drži iznad stola i druga pločica u otvorenoj kaseti',
    },
    intro: {
      title: 'Znamo kako održati učinkovitost',
      paragraphs: [
        'Fabrika ili odjel ispitivanja ne mogu čekati pomoćni dio. Sučelja alata, potrošni materijal rukovatelja i upravljačka elektronika često su zastarjele stavke s dugim rokovima isporuke i malo preostalih izvora.',
        'Nabavljamo prema vašem popisu dijelova od dobavljača koje smo kvalificirali i pregledavamo svaku narudžbu po dolasku u naš pogon u Shenzhenu. Sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'YIXINOU inspektor radi s digitalnim inspekcijskim mikroskopom na radnom mjestu',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Znamo kako održati učinkovitost',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'inventory',
          title: 'Smanjenje troškova',
          text: 'Pomoćni se dijelovi kupuju u malim količinama po visokoj cijeni po jedinici. Dajemo ponudu za cijeli popis i kažemo gdje ekvivalentni artikl doista smanjuje trošak.',
        },
        {
          icon: 'obsolete',
          title: 'Smanjenje viškova',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje zalihama',
          text: 'Svaka se narudžba pregledava po dolasku u naš pogon u Shenzhenu, a sve što zahtijeva internu analizu ide u naše partnerske laboratorije.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente i rezervni dijelovi za proizvodnju i ispitivanje',
      lead: 'Kategorije koje najčešće isporučujemo za proizvodnju i ispitivanje poluvodiča.',
      items: [
        'Dijelovi sučelja za testere i rukovatelje',
        'Potrošni materijal za probe i ležišta',
        'Napajanja i upravljačka elektronika',
        'Senzori, ventili i komponente za gibanje',
        'Konektori, kabeli i pasivne komponente',
        'Zastarjeli rezervni dijelovi za ugrađene alate',
      ],
    },
    cta: {
      title: 'Pošaljite nam popis dijelova svoje opreme',
      text: 'Navedite alat, artikle i količine. Potvrdit ćemo dostupnost i rok isporuke za aktualne i zastarjele artikle.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
  'telecom-networking': {
    hero: {
      heading: 'Nabava komponenti za telekomunikacije i mreže',
      lead: 'Komponente za bazne stanice, usmjerivače, preklopnike, optički transport i pristupnu opremu — uključujući podršku linijskim karticama za mreže koje su već u pogonu.',
      img: '/assets/images/industry-telecom-networking-hero.jpg',
      alt: 'Mrežni preklopnik u stalku s upaljenim LED indikatorima portova i optičkim patch kabelima uvučenima u ploču iznad',
    },
    intro: {
      title: 'Radimo za vaš lanac opskrbe',
      paragraphs: [
        'Telekomunikacijska infrastruktura građena je za desetljeće rada, a podržava se i dulje. Operateri ne mogu izvaditi karticu iz pogona samo zato što se neka komponenta više ne proizvodi, pa je nabava zastarjelih artikala jednako važna kao i nabava novih.',
        'Radimo prema vašoj specifikaciji (BOM), nabavljamo od dobavljača koje smo kvalificirali i pregledavamo svaku narudžbu po dolasku u naš pogon u Shenzhenu prije nego što vam je otpremimo.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Označene kartonske kutije s elektroničkim komponentama na policama skladišta YIXINOU',
    },
    risk: {
      eyebrow: 'Upravljanje rizicima',
      title: 'Radimo za vaš lanac opskrbe',
      items: [
        {
          icon: 'sourcing',
          title: 'Strateška nabava',
          text: 'Radimo prema vašoj specifikaciji (BOM) i vašim odobrenim artiklima i otvoreno kažemo kada artikl nije moguće nabaviti, umjesto da potiho ugrađujemo zamjenu.',
        },
        {
          icon: 'obsolete',
          title: 'Smanjenje viškova',
          text: 'Pratimo obavijesti o posljednjoj kupnji (LTB) i prestanku proizvodnje te pronalazimo ukinute artikle, kako komponenta na kraju životnog ciklusa ne bi zaustavila vaš program.',
        },
        {
          icon: 'inventory',
          title: 'Smanjenje troškova',
          text: 'Linijske kartice čine nerazmjerno velik dio specifikacije (BOM). Dajemo ponudu za karticu u cjelini i utvrđujemo stavke na kojima se trošak doista može pomaknuti.',
        },
        {
          icon: 'quality',
          title: 'Upravljanje životnim ciklusom proizvoda',
          text: 'Pratimo obavijesti o posljednjoj kupnji za artikle u vašoj mreži, pa ukidanje postaje stavka u planu, a ne ispad sustava.',
        },
      ],
    },
    parts: {
      eyebrow: 'Što nabavljamo',
      title: 'Komponente za telekomunikacijsku i mrežnu opremu',
      lead: 'Kategorije koje najčešće isporučujemo za telekomunikacije, mreže i optički prijenos.',
      items: [
        'RF, optičke i sučeljske komponente',
        'Dijelovi za napajanje i zaštitu strujnih krugova',
        'Filtri, konektori i pasivne komponente',
        'IC-ovi za memoriju, logiku i kontrolere',
        'Moduli i sklopovi linijskih kartica',
        'Zastarjeli artikli za mreže u pogonu',
      ],
    },
    cta: {
      title: 'Pošaljite nam specifikaciju (BOM) svoje mrežne platforme',
      text: 'Navedite platformu, artikle i količine, uključujući zastarjele artikle linijskih kartica. Potvrdit ćemo što je stvarno dostupno.',
      primary: {
        label: 'Kontaktirajte nas',
        href: '/Contact',
      },
      secondary: {
        label: 'Svi proizvodi',
        href: '/all-products',
      },
    },
  },
};

export { groups, inspect, industries };
export default { groups, inspect, industries };
