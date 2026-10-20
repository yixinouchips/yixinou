// Danish (da-DK) locale pack for YIXINOU — industry detail pages.
// Mirrors src/industryDetails.js key-for-key: same structure, same keys, same array lengths.
// Slugs, route hrefs, image paths, icon identifiers, technical brands and units are never
// translated. Internal analysis is attributed to our partner laboratories only; no
// certification, accreditation or capability is claimed that the source does not state.
const groups = {
  eyebrow: 'Produktgrupper',
  title: 'Produkter vi leverer',
  lead: 'De samme komponentgrupper leverer vi til alle de brancher, vi betjener.',
  items: [
    { title: 'Integrerede kredsløb', href: '/all-products' },
    { title: 'Transistorer', href: '/all-products' },
    { title: 'Stik', href: '/all-products' },
    { title: 'Kondensatorer', href: '/all-products' },
    { title: 'Modstande', href: '/all-products' },
    { title: 'Sensorer og kontakter', href: '/all-products' },
    { title: 'LED\'er og moduler', href: '/all-products' },
  ],
};

const inspect = {
  eyebrow: 'Sådan kontrollerer vi',
  title: 'Hvad der sker, før dine varer sendes',
  text: 'Indgående kontrol og ekstern visuel kontrol udføres på vores egen facilitet i Shenzhen. Intern analyse — røntgen, XRF, dekapsulering, loddebarhed og elektrisk test — udføres af vores partnerlaboratorier. Vi driver ikke vores eget testlaboratorium, og det siger vi klart, så du ved præcis, hvem der tester dine varer.',
  img: '/assets/images/quality-step-3-visual.jpg',
  alt: 'En inspektør placerer en komponent under et digitalt inspektionsmikroskop på en antistatisk måtte',
  ctaLabel: 'Se vores kvalitetsproces',
  ctaHref: '/quality',
};

const industries = {
  'aerospace': {
    hero: {
      heading: 'Elektroniske komponenter til luft- og rumfart og sourcing af udgåede dele',
      lead: 'Vi skaffer elektroniske komponenter til luft- og rumfartsprogrammer — herunder udgåede og svært tilgængelige referencer — og beskytter samtidig din produktionstidsplan.',
      img: '/assets/images/industry-aerospace-hero.jpg',
      alt: 'Avionikkontrolpaneler og instrumentdisplay i et flys cockpit',
    },
    intro: {
      title: 'Samme standarder. Hurtigere adgang.',
      paragraphs: [
        'En luft- og rumfartsproduktion kan ikke bære en uvedificeret vare. Når en linje venter på en komponent, er presset stort for at tage, hvad der er tilgængeligt — og det er præcis der, omærkede, ikke-matchende eller usporbare varer kommer ind i forsyningskæden.',
        'Vi skaffer efter din stykliste hos leverandører, vi selv har kvalificeret, og vi siger det, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind. Hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, og alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Mærkede kasser med elektroniske komponenter på reoler i YIXINOU-lageret',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi ved, hvordan vi hjælper dig med at mindske risikoen',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'quality',
          title: 'Kvalitetssikring',
          text: 'Hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, og alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
        },
        {
          icon: 'inventory',
          title: 'Lagerstyring',
          text: 'Et enkeltstående køb eller et løbende program — vi kan holde et aftalt lager op imod din produktionsplan, så varerne er klar, når din linje har brug for dem.',
        },
        {
          icon: 'obsolete',
          title: 'Forældelsesstyring',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til luft- og rumfart',
      lead: 'De kategorier, vi oftest leverer til luft- og rumfarts-, forsvars- og jordstøtteprogrammer.',
      items: [
        'Komponenter til flyvestyrings- og avionikkort',
        'Dele til navigations- og kommunikationssystemer',
        'Komponenter til radar- og jordstøtteudstyr',
        'Stik, relæer og kontakter med høj pålidelighed',
        'Halvledere til strøm, hukommelse og interface',
        'Udgåede referencer, referencer til sidste indkøb og forældede varer',
      ],
    },
    cta: {
      title: 'Send os din stykliste til luft- og rumfart',
      text: 'Fortæl os varenumrene, mængderne og dine acceptkriterier. Vi bekræfter tilgængelighed, leveringstid og præcis, hvordan vi kontrollerer varerne, før de sendes.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'automotive': {
    hero: {
      heading: 'Elektroniske komponenter til bilindustrien og sourcing af ADAS',
      lead: 'Vi skaffer komponenter til bilsystemer — ADAS, infotainment, belysning og elbilstrøm — og arbejder omkring de ubalancer mellem udbud og efterspørgsel, der forsinker bilproduktionen.',
      img: '/assets/images/industry-automotive-hero.jpg',
      alt: 'Et instrumentbræt i en bil med afmonteret beklædning, så printkort og ledningsnet er synlige',
    },
    intro: {
      title: 'Vi ved, hvordan vi sikrer dig det, du har brug for',
      paragraphs: [
        'Bilprogrammer kører på lange kvalifikationscyklusser og kompromisløse produktionsplaner. Når en komponent er i mangel, kan en ny kvalificering af en alternativ vare koste mere tid, end varen er værd, så prioriteten er at finde den rigtige reference hurtigt og dokumentere, at den er ægte.',
        'Vi arbejder ud fra din stykliste, køber hos leverandører, vi selv har kvalificeret, og kontrollerer hver ordre ved ankomsten til vores facilitet i Shenzhen. Varer, der kræver intern analyse, sendes til vores partnerlaboratorier.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'En YIXINOU-inspektør betjener et digitalt inspektionsmikroskop ved en arbejdsstation',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi ved, hvordan vi sikrer dig det, du har brug for',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'quality',
          title: 'Kvalitetssikring',
          text: 'Hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, og alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
        },
        {
          icon: 'inventory',
          title: 'Hurtigere på markedet',
          text: 'Tilgængelighed afgøres, før manglen slår igennem. Vi giver tilbud tidligt, bekræfter lager hurtigt og markerer de varer, der vil forsinke din produktion.',
        },
        {
          icon: 'obsolete',
          title: 'Livscyklusstøtte',
          text: 'Bilplatforme er i produktion længe efter, at deres kredse er udgået. Vi holder øje med varsler om sidste indkøb og bliver ved med at skaffe de referencer, din platform stadig bruger.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til bilsystemer',
      lead: 'De kategorier, vi oftest leverer til bil- og elbilsprogrammer.',
      items: [
        'ADAS-, sensor- og kamerakomponenter',
        'Infotainment-, display- og audiodele',
        'Komponenter til LED-belysning og karrosseristyring',
        'Komponenter til batteristyring og strømforsyning i elbiler',
        'Stik, relæer og passive komponenter',
        'Udgåede referencer og referencer til sidste indkøb',
      ],
    },
    cta: {
      title: 'Send os din stykliste til bilindustrien',
      text: 'Fortæl os varenumrene, mængderne og dine acceptkriterier. Vi bekræfter tilgængelighed, leveringstid og præcis, hvordan vi kontrollerer varerne, før de sendes.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'consumer-electronics': {
    hero: {
      heading: 'Elektroniske komponenter til forbrugerelektronik',
      lead: 'Vi leverer komponenterne bag telefoner, wearable-enheder, lyd og smart home-enheder, hvor enhedspris og leveringstid afgør, hvem der får ordren.',
      img: '/assets/images/industry-consumer-electronics-hero.jpg',
      alt: 'En adskilt smartphone ved siden af åbnede trådløse øretelefoner med synlige kredsløbskort',
    },
    intro: {
      title: 'Vi hjælper dig med at komme i forkøbet',
      paragraphs: [
        'Forbrugerelektronik bevæger sig hurtigt. Et design kan blive afløst inden for en enkelt sæson, og styklisten ændrer sig med det, så sourcing skal følge vejkortet i stedet for at sakke bagud.',
        'Vi giver tilbud ud fra din fulde stykliste, skaffer hos leverandører, vi selv har kvalificeret, og kontrollerer hver ordre, før den sendes. Er en reference på vej ud, siger vi det tidligt nok til, at du kan træffe beslutning om et sidste indkøb.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Komponentbakker og spoler lagt op i rækker på bordene til optælling og lot-kodning',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi hjælper dig med at komme i forkøbet',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'inventory',
          title: 'Omkostningsbesparelser',
          text: 'Enhedsøkonomien afgør forbrugerprogrammer. Vi giver tilbud på hele styklisten, foreslår alternativer, hvor de reelt er ligeværdige, og fortæller, hvor omkostningen faktisk ligger.',
        },
        {
          icon: 'quality',
          title: 'Lagerstyring',
          text: 'Hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, og alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
        },
        {
          icon: 'obsolete',
          title: 'Håndtering af overskud',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til forbrugerenheder',
      lead: 'De kategorier, vi oftest leverer til programmer inden for forbrugerelektronik.',
      items: [
        'Display-, berørings- og kamerakomponenter',
        'IC\'er til strømstyring og opladning',
        'Trådløse komponenter samt lyd- og RF-komponenter',
        'Sensorer, kontakter og LED\'er',
        'Passive komponenter og stik',
        'Moduler og ældre referencer',
      ],
    },
    cta: {
      title: 'Send os din stykliste til forbrugerelektronik',
      text: 'Fortæl os varenumrene, mængderne og din målpris. Vi vender tilbage med tilgængelighed, leveringstid og hvor alternativerne ligger.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'contract-manufacturing': {
    hero: {
      heading: 'Sourcing af komponenter til kontraktproducenter og EMS',
      lead: 'Støtte ved linjestop og til volumen hos EMS-leverandører, tilbudt ud fra din stykliste i stedet for én vare ad gangen.',
      img: '/assets/images/industry-contract-manufacturing-hero.jpg',
      alt: 'Et panel med rå printkort, der bevæger sig gennem en SMT-linje ved siden af spoler med overflademonterede komponenter',
    },
    intro: {
      title: 'Vi er forpligtet til at levere til dig',
      paragraphs: [
        'En kontraktproducent vurderes på leveringsdatoer, som den ikke selv er herre over. Varerne er den variable faktor: én manglende reference kan tilbageholde en færdig samling, og én uvedificeret vare kan koste en kunde.',
        'Vi giver tilbud på hele styklisten, skaffer hos leverandører, vi selv har kvalificeret, og kontrollerer hver ordre ved ankomsten til vores facilitet i Shenzhen. Står en linje allerede stille, behandler vi manglen som akut og siger hurtigt, om vi kan hjælpe.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Mærkede kasser med elektroniske komponenter på reoler i YIXINOU-lageret',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi er forpligtet til at levere til dig',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'inventory',
          title: 'Omkostningsbesparelser',
          text: 'Avancen på en samling er tynd, så komponentomkostningen betyder noget. Vi giver tilbud på den fulde stykliste, fremhæver de varer, hvor et ligeværdigt alternativ reelt er billigere, og undgår at lægge pris oveni for varer, du allerede har på lager.',
        },
        {
          icon: 'quality',
          title: 'Lagerstyring',
          text: 'Hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, og alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
        },
        {
          icon: 'obsolete',
          title: 'Håndtering af overskud',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til samle- og produktionsprogrammer',
      lead: 'De kategorier, vi oftest leverer til EMS og kontraktproduktion.',
      items: [
        'Stykklistetilbud og samlede ordrer',
        'Sourcing ved linjestop og mangel',
        'Verifikation af sekundære kilder',
        'Afbalancering af overskud og lager',
        'Stik, passive komponenter og halvledere',
        'Programmerede og samlede dele (kits)',
      ],
    },
    cta: {
      title: 'Send os en stykliste til tilbud',
      text: 'Upload eller indsæt din stykliste, og vi giver tilbud på hele linjen — også de varer, du allerede er dækket ind på — så du kan sammenligne på samme grundlag.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'energy': {
    hero: {
      heading: 'Elektroniske komponenter til energi og strømkonvertering',
      lead: 'Vi leverer komponenter til sol, lagring, net og udstyr til strømkonvertering, hvor varerne skal tåle varme, belastning og tid.',
      img: '/assets/images/industry-energy-hero.jpg',
      alt: 'Det åbne konverteringsskab på en inverter med samleskinner, køleprofiler og strømmoduler',
    },
    intro: {
      title: 'Vi støtter din forsyningskæde',
      paragraphs: [
        'Effektelektronik lever i barske omgivelser. En inverter eller et lageringsskab skal kunne køre i årevis ved temperatur, så en vare på grænsen er ikke en lille risiko — det er en fejl i marken, der bare venter på at ske.',
        'Vi skaffer efter din stykliste hos leverandører, vi selv har kvalificeret, og hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen. Alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'En YIXINOU-inspektør betjener et digitalt inspektionsmikroskop ved en arbejdsstation',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi støtter din forsyningskæde',
      items: [
        {
          icon: 'sourcing',
          title: 'Hastighed og præcision',
          text: 'Projekttidsplaner flytter sig sjældent, så et tilbud skal være både hurtigt og korrekt. Vi bekræfter tilgængelighed mod det faktiske lager og markerer de varer, der ikke når datoen.',
        },
        {
          icon: 'quality',
          title: 'Lagerstyring',
          text: 'Hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, og alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
        },
        {
          icon: 'inventory',
          title: 'Omkostningsbesparelser',
          text: 'Strømkomponenter udgør en stor del af styklistens omkostning. Vi giver tilbud på linjen som helhed og peger på, hvor en ligeværdig reference reelt er billigere.',
        },
        {
          icon: 'obsolete',
          title: 'Fleksibilitet',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til energi- og strømsystemer',
      lead: 'De kategorier, vi oftest leverer til programmer inden for energi og strømkonvertering.',
      items: [
        'IGBT\'er, gatedrivere og strømmoduler',
        'Dele til invertere og strømkonvertering',
        'Styre- og overvågningselektronik',
        'Magnetiske komponenter og kondensatorer',
        'Stik, relæer og klemmer',
        'Udgåede referencer til installeret udstyr',
      ],
    },
    cta: {
      title: 'Send os din projektstykliste',
      text: 'Fortæl os varenumrene, mængderne og den leveringsdato, du arbejder efter. Vi bekræfter, hvad der kan overholdes, og hvad der ikke kan.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'enterprise-computing': {
    hero: {
      heading: 'Sourcing af komponenter til servere og datacentre',
      lead: 'Komponenter til servere, lageringssystemer, netværksenheder og hardware til datacentre — herunder de ældre referencer, der holder den installerede park kørende.',
      img: '/assets/images/industry-enterprise-computing-hero.jpg',
      alt: 'Blade-servere trukket ud af et rack med synlige kredsløbskort og hukommelsesmoduler',
    },
    intro: {
      title: 'Vi holder dine linjer kørende',
      paragraphs: [
        'Virksomhedshardware holdes i drift langt længere end de platforme, den blev bygget på. Når en servergeneration er ude af support, bliver delene sværere at skaffe — netop som fejlraten begynder at stige.',
        'Vi skaffer efter din stykliste, herunder referencer, der er udgået, og kontrollerer hver ordre ved ankomsten til vores facilitet i Shenzhen. Alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Mærkede kasser med elektroniske komponenter på reoler i YIXINOU-lageret',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi holder dine linjer kørende',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'obsolete',
          title: 'Håndtering af overskud',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
        {
          icon: 'inventory',
          title: 'Omkostningsbesparelser',
          text: 'Udskiftningscyklusser er dyre. At holde en eksisterende park i drift længere er ofte den billigste beslutning, så vi skaffer de varer, der gør det muligt.',
        },
        {
          icon: 'quality',
          title: 'Styring af produktets livscyklus',
          text: 'Vi holder øje med varsler om sidste indkøb og produktionsstop og siger til, når en reference i din park er ved at blive svær at skaffe — mens der stadig er tid til at handle.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til server- og lageringsplatforme',
      lead: 'De kategorier, vi oftest leverer til virksomheds-IT og hardware til datacentre.',
      items: [
        'Server-, lager- og interfacecontrollere',
        'Hukommelse og dele til chipsetsupport',
        'Strømforsyninger og spændingsregulatorer',
        'Køling, stik og kabler',
        'Netværks- og interfacekomponenter',
        'Ældre referencer til installerede parker',
      ],
    },
    cta: {
      title: 'Send os din stykliste til serverplatformen',
      text: 'Fortæl os platformen, varenumrene og mængderne, herunder referencer, der er udgået. Vi bekræfter, hvad der reelt kan skaffes.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'gaming': {
    hero: {
      heading: 'Elektroniske komponenter til spille- og underholdningsmaskiner',
      lead: 'Komponenter til spilhardware, underholdnings-, lotteri- og POS-maskiner — herunder de dele, der holder maskiner med lang levetid kørende.',
      img: '/assets/images/industry-gaming-hero.jpg',
      alt: 'Et kontrolpanel til en spilleautomat med belyste knapper og et joystick og med synligt kredsløbskort og ledninger bagved',
    },
    intro: {
      title: 'Vi er forpligtet til at levere kvalitetsdele hver gang',
      paragraphs: [
        'Spil- og underholdningshardware er i drift i årevis, ofte på steder, hvor en maskine, der går ned, er et direkte tab af omsætning. Komponenterne indeni er tit udgået for længe siden.',
        'Vi skaffer både aktuelle dele og udgåede referencer hos leverandører, vi selv har kvalificeret, og hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, før den sendes.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Komponentbakker og spoler lagt op i rækker på bordene til optælling og lot-kodning',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi er forpligtet til at levere kvalitetsdele hver gang',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'inventory',
          title: 'Omkostningsbesparelser',
          text: 'Operatører kører med stram enhedsøkonomi. Vi giver tilbud på de varer, du har brug for, uden at lægge ekstra på ordren, og siger klart, når et billigere alternativ faktisk ikke er ligeværdigt.',
        },
        {
          icon: 'obsolete',
          title: 'Håndtering af overskud',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
        {
          icon: 'quality',
          title: 'Lagerstyring',
          text: 'Hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, og alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til spil- og underholdningshardware',
      lead: 'De kategorier, vi oftest leverer til spille-, underholdnings- og POS-maskiner.',
      items: [
        'Display- og controllerkomponenter',
        'Knapper, joysticks og encodere',
        'Komponenter til strøm, interface og belysning',
        'Hovedkort og moduler',
        'Stik, ledningsnet og passive komponenter',
        'Langtidsholdbare reservedele til ældre maskiner',
      ],
    },
    cta: {
      title: 'Send os din stykliste til maskinen',
      text: 'Fortæl os maskinen, varenumrene og mængderne. Vi bekræfter tilgængelighed og leveringstid for både aktuelle og udgåede referencer.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'healthcare': {
    hero: {
      heading: 'Elektroniske komponenter til medicinsk udstyr og sundhedssektoren',
      lead: 'Komponenter til patientovervågning, diagnostisk billeddannelse og laboratorieudstyr, hvor sporbarhed betyder lige så meget som tilgængelighed.',
      img: '/assets/images/industry-healthcare-hero.jpg',
      alt: 'Bagsiden af en patientmonitor med synligt hovedkort, sensortilslutninger og et fladt kabel',
    },
    intro: {
      title: 'Vi prioriterer din forsyningskæde',
      paragraphs: [
        'Medicinsk udstyr er kvalificeret ud fra en fast stykliste og forbliver i drift længe efter, at dets komponenter er udgået. At udskifte en vare er ikke en indkøbsbeslutning — det er en regulatorisk beslutning.',
        'Det gør sporbarheden til det afgørende. Vi skaffer efter dine godkendte referencer, gemmer lot- og datokoder for hver forsendelse og kontrollerer hver ordre ved ankomsten til vores facilitet i Shenzhen. Intern analyse udføres af vores partnerlaboratorier.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Mærkede kasser med elektroniske komponenter på reoler i YIXINOU-lageret',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi prioriterer din forsyningskæde',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'quality',
          title: 'Styring af produktets livscyklus',
          text: 'Vi holder øje med varsler om sidste indkøb og produktionsstop for de referencer, du bruger, så du hører om et produktionsstop i god tid og ikke først, når noget fejler.',
        },
        {
          icon: 'inventory',
          title: 'Lagerstyring',
          text: 'Et enkeltstående køb eller et løbende program — vi kan holde et aftalt lager op imod din produktionsplan, så varerne er klar, når din linje har brug for dem.',
        },
        {
          icon: 'obsolete',
          title: 'Håndtering af overskud',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til medicinsk og laboratorieudstyr',
      lead: 'De kategorier, vi oftest leverer til medicinsk udstyr og diagnoseudstyr.',
      items: [
        'Komponenter til overvågnings- og diagnostikkort',
        'Sensorer og dele til signalbehandling',
        'Komponenter til strøm og galvanisk isolation',
        'Displays, stik og kabler',
        'Halvledere til interface og hukommelse',
        'Udgåede referencer til installeret udstyr',
      ],
    },
    cta: {
      title: 'Send os din stykliste til udstyret',
      text: 'Fortæl os de godkendte referencer, mængderne og eventuelle krav til sporbarhed. Vi bekræfter, hvad vi kan levere, og hvordan det bliver dokumenteret.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'industrial-automation': {
    hero: {
      heading: 'Elektroniske komponenter til industriautomation',
      lead: 'Komponenter til robotter, drivere, PLC\'er, sensorer og effektelektronik — skaffet, så din produktionslinje ikke stopper på grund af en vare.',
      img: '/assets/images/industry-industrial-automation-hero.jpg',
      alt: 'Et styreskab med PLC-moduler og kabelkanaler ved siden af en robotarm i en produktionscelle',
    },
    intro: {
      title: 'Vi holder dine linjer kørende',
      paragraphs: [
        'Automation vurderes på oppetid. En stoppet linje koster mere i timen end næsten enhver komponent på den, så prioriteten er som regel at få den rigtige vare i dag frem for den billigste vare i næste måned.',
        'Vi skaffer efter din stykliste hos leverandører, vi selv har kvalificeret, og kontrollerer hver ordre ved ankomsten til vores facilitet i Shenzhen. Hvis en installeret maskine bruger en udgået reference, siger vi, om den stadig kan skaffes.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Komponentbakker og spoler lagt op i rækker på bordene til optælling og lot-kodning',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi holder dine linjer kørende',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'inventory',
          title: 'Omkostningsbesparelser',
          text: 'Styklister til automation indeholder mange standardvarer. Vi giver tilbud på linjen som helhed og viser, hvor omkostningen faktisk ligger, i stedet for at lægge samme avance på hver linje.',
        },
        {
          icon: 'quality',
          title: 'Lagerstyring',
          text: 'Hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, og alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
        },
        {
          icon: 'obsolete',
          title: 'Håndtering af overskud',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til automation og styring',
      lead: 'De kategorier, vi oftest leverer til industriautomation og styresystemer.',
      items: [
        'Dele til PLC, drivere og bevægelsesstyring',
        'Sensorer og interface-IC\'er',
        'Effektelektronik og gatedrivere',
        'Relæer, kontaktorer og klemmer',
        'Stik, kabler og passive komponenter',
        'Ældre reservedele til installerede maskiner',
      ],
    },
    cta: {
      title: 'Send os din stykliste til automation',
      text: 'Fortæl os maskinen eller platformen, varenumrene og mængderne. Står en linje allerede stille, så sig det, og vi behandler sagen som akut.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'personal-computing': {
    hero: {
      heading: 'Elektroniske komponenter til personlige computere',
      lead: 'Komponenter til bærbare og stationære computere, tilbehør og deres underleverandørkæde — fra aktuelle platforme til de ældre referencer, serviceorganisationer stadig har brug for.',
      img: '/assets/images/industry-personal-computing-hero.jpg',
      alt: 'Et åbnet kabinet på en bærbar computer med bundkort, hukommelsesmoduler, køleventilator og batteri',
    },
    intro: {
      title: 'Vi dækker både udbud og efterspørgsel',
      paragraphs: [
        'Personlige computere kører med korte platformscyklusser og lange servicehaler. Nye designs har hurtigt brug for aktuelle kredse; maskiner, der allerede er i marken, har brug for referencer, som producenten stoppede med at fremstille for år tilbage.',
        'Vi dækker begge dele: vi skaffer efter din stykliste hos leverandører, vi selv har kvalificeret, og kontrollerer hver ordre ved ankomsten til vores facilitet i Shenzhen, før den sendes.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Mærkede kasser med elektroniske komponenter på reoler i YIXINOU-lageret',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi dækker både udbud og efterspørgsel',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'inventory',
          title: 'Omkostningsbesparelser',
          text: 'Platformens avance afgøres af enhedsomkostningen. Vi giver tilbud på den fulde stykliste og markerer de linjer, hvor et reelt ligeværdigt alternativ ændrer tallet.',
        },
        {
          icon: 'quality',
          title: 'Styring af produktets livscyklus',
          text: 'Vi holder øje med varsler om produktionsstop for de referencer, du bygger med, så du hører om et stop, før det bliver en mangel.',
        },
        {
          icon: 'obsolete',
          title: 'Håndtering af overskud',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til computerplatforme',
      lead: 'De kategorier, vi oftest leverer til personlige computere og tilbehør.',
      items: [
        'IC\'er til strømstyring og opladning',
        'Controllere til interface, USB og display',
        'Komponenter til hukommelse og lagring',
        'Stik, kabler og passive komponenter',
        'Køle- og mekaniske dele',
        'Ældre referencer til reparation og service',
      ],
    },
    cta: {
      title: 'Send os din stykliste til platformen',
      text: 'Fortæl os platformen, varenumrene og mængderne — aktuelle eller ældre. Vi bekræfter, hvad der er tilgængeligt, og med hvilken leveringstid.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'semiconductor-manufacturing': {
    hero: {
      heading: 'Komponenter og reservedele til halvlederproduktion',
      lead: 'Støttekomponenter, interfacedele og reservedele til fremstilling, test og pakning, hvor nedetid måles i wafere.',
      img: '/assets/images/industry-semiconductor-hero.jpg',
      alt: 'En siliciumwafer holdt over et bord af et håndteringsværktøj, mens en anden wafer ligger i en åben kassette',
    },
    intro: {
      title: 'Vi ved, hvordan effektiviteten holdes oppe',
      paragraphs: [
        'En fab eller et testområde kan ikke vente på en støttekomponent. Værktøjsinterfaces, forbrugsdele til handlere og styreelektronik er ofte ældre varer med lang leveringstid og få tilbageværende kilder.',
        'Vi skaffer efter din deleliste hos leverandører, vi selv har kvalificeret, og kontrollerer hver ordre ved ankomsten til vores facilitet i Shenzhen. Alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'En YIXINOU-inspektør betjener et digitalt inspektionsmikroskop ved en arbejdsstation',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi ved, hvordan effektiviteten holdes oppe',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'inventory',
          title: 'Omkostningsbesparelser',
          text: 'Støttekomponenter købes i små mængder til høje enhedspriser. Vi giver tilbud på hele listen og fortæller, hvor en ligeværdig reference reelt sænker omkostningen.',
        },
        {
          icon: 'obsolete',
          title: 'Håndtering af overskud',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
        {
          icon: 'quality',
          title: 'Lagerstyring',
          text: 'Hver ordre kontrolleres ved ankomsten til vores facilitet i Shenzhen, og alt, der kræver intern analyse, sendes til vores partnerlaboratorier.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter og reservedele til fab og test',
      lead: 'De kategorier, vi oftest leverer til halvlederproduktion og testaktiviteter.',
      items: [
        'Interfacedele til testere og handlere',
        'Forbrugsdele til prober og sokler',
        'Strømforsyninger og styreelektronik',
        'Sensorer, ventiler og bevægelseskomponenter',
        'Stik, kabler og passive komponenter',
        'Ældre reservedele til installerede værktøjer',
      ],
    },
    cta: {
      title: 'Send os din deleliste til udstyret',
      text: 'Fortæl os værktøjet, varenumrene og mængderne. Vi bekræfter tilgængelighed og leveringstid for både aktuelle og ældre referencer.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
  'telecom-networking': {
    hero: {
      heading: 'Sourcing af komponenter til telekom og netværk',
      lead: 'Komponenter til basestationer, routere, switche, optisk transport og accessudstyr — herunder støtte til line cards for netværk, der allerede er i drift.',
      img: '/assets/images/industry-telecom-networking-hero.jpg',
      alt: 'En netværksswitch monteret i et rack med lysende port-LED\'er og fiberpatchkabler ført ind i panelet ovenover',
    },
    intro: {
      title: 'Vi arbejder for din forsyningskæde',
      paragraphs: [
        'Teleinfrastruktur er bygget til at køre i et årti og supporteres i endnu længere tid. Operatører kan ikke tage et kort ud af drift, fordi en komponent ikke fremstilles mere, så det at skaffe ældre referencer betyder lige så meget som at skaffe nye.',
        'Vi arbejder ud fra din stykliste, skaffer hos leverandører, vi selv har kvalificeret, og kontrollerer hver ordre ved ankomsten til vores facilitet i Shenzhen, før den sendes til dig.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Mærkede kasser med elektroniske komponenter på reoler i YIXINOU-lageret',
    },
    risk: {
      eyebrow: 'Risikostyring',
      title: 'Vi arbejder for din forsyningskæde',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategisk sourcing',
          text: 'Vi arbejder ud fra din stykliste og dine godkendte referencer og siger det klart, hvis en reference ikke kan skaffes, i stedet for lydløst at sætte en anden vare ind.',
        },
        {
          icon: 'obsolete',
          title: 'Håndtering af overskud',
          text: 'Vi holder øje med varsler om sidste indkøb (last-time-buy) og produktionsstop og opsporer udgåede referencer, så en EOL-vare ikke stopper dit program.',
        },
        {
          icon: 'inventory',
          title: 'Omkostningsbesparelser',
          text: 'Line cards udgør en uforholdsmæssigt stor del af styklisten. Vi giver tilbud på kortet som helhed og peger på de linjer, hvor omkostningen faktisk kan flytte sig.',
        },
        {
          icon: 'quality',
          title: 'Styring af produktets livscyklus',
          text: 'Vi holder øje med varsler om sidste indkøb for de referencer, der er i dit netværk, så et produktionsstop bliver et planlægningspunkt i stedet for en nedbrud.',
        },
      ],
    },
    parts: {
      eyebrow: 'Det skaffer vi',
      title: 'Komponenter til telekom- og netværksudstyr',
      lead: 'De kategorier, vi oftest leverer til telekom, netværk og optisk transport.',
      items: [
        'RF-, optiske og interfacekomponenter',
        'Dele til strøm og kredsløbsbeskyttelse',
        'Filtre, stik og passive komponenter',
        'IC\'er til hukommelse, logik og controllere',
        'Moduler og samlede line cards',
        'Ældre referencer til installerede netværk',
      ],
    },
    cta: {
      title: 'Send os din stykliste til netværksplatformen',
      text: 'Fortæl os platformen, varenumrene og mængderne, herunder ældre line card-referencer. Vi bekræfter, hvad der reelt kan skaffes.',
      primary: {
        label: 'Kontakt os',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle produkter',
        href: '/all-products',
      },
    },
  },
};

export { groups, inspect, industries };
export default { groups, inspect, industries };
