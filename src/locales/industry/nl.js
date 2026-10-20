// Dutch (nl-NL) locale pack for YIXINOU — industry detail pages.
// Mirrors src/industryDetails.js key-for-key: same structure, same keys, same array lengths.
// Slugs, route hrefs, image paths, icon identifiers, technical brands and units are never
// translated. Internal analysis is attributed to our partner laboratories only; no
// certification, accreditation or capability is claimed that the source does not state.
const groups = {
  eyebrow: 'Productgroepen',
  title: 'Producten die wij leveren',
  lead: 'Dezelfde componentgroepen die wij leveren aan elke sector die wij bedienen.',
  items: [
    { title: 'Geïntegreerde schakelingen', href: '/all-products' },
    { title: 'Transistoren', href: '/all-products' },
    { title: 'Connectoren', href: '/all-products' },
    { title: 'Condensatoren', href: '/all-products' },
    { title: 'Weerstanden', href: '/all-products' },
    { title: 'Sensoren en schakelaars', href: '/all-products' },
    { title: "LED's en modules", href: '/all-products' },
  ],
};

const inspect = {
  eyebrow: 'Hoe wij controleren',
  title: 'Wat er gebeurt voordat uw onderdelen worden verzonden',
  text: 'Inkomende inspectie en externe visuele controles vinden plaats in onze eigen faciliteit in Shenzhen. Interne analyse — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — wordt uitgevoerd door onze partnerlaboratoria. Wij hebben geen eigen testlaboratorium en zeggen dat duidelijk, zodat u precies weet wie uw onderdelen test.',
  img: '/assets/images/quality-step-3-visual.jpg',
  alt: 'Een inspecteur plaatst een component onder een digitale inspectiemicroscoop op een antistatische mat',
  ctaLabel: 'Bekijk ons kwaliteitsproces',
  ctaHref: '/quality',
};

const industries = {
  'aerospace': {
    hero: {
      heading: 'Elektronische componenten voor de lucht- en ruimtevaart en inkoop van verouderde onderdelen',
      lead: 'Wij kopen elektronische componenten in voor lucht- en ruimtevaart- en luchtvaartprogramma\'s — inclusief verouderde en moeilijk verkrijgbare referenties — en bewaken daarbij uw productietijdlijn.',
      img: '/assets/images/industry-aerospace-hero.jpg',
      alt: 'Avionica-bedieningspanelen en instrumentendisplays in een vliegtuigcockpit',
    },
    intro: {
      title: 'Dezelfde normen. Snellere beschikbaarheid.',
      paragraphs: [
        'Een productielijn in de lucht- en ruimtevaart kan zich geen ongeverifieerd onderdeel permitteren. Als een lijn op een component wacht, ontstaat de druk om te nemen wat beschikbaar is — en juist dan komen hergemerkte, niet-overeenkomende of niet-traceerbare onderdelen in een toeleveringsketen terecht.',
        'Wij kopen in op basis van uw stuklijst (BOM) bij door ons gekwalificeerde leveranciers, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren. Elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen geïnspecteerd, en alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Gelabelde dozen met elektronische componenten op stellingen in het magazijn van YIXINOU',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij weten hoe wij u risico\'s helpen beperken',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'quality',
          title: 'Kwaliteitsborging',
          text: 'Elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen gecontroleerd, en alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
        },
        {
          icon: 'inventory',
          title: 'Voorraadbeheer',
          text: 'Een eenmalige aankoop of een doorlopend programma — wij kunnen een afgesproken voorraad aanhouden die aansluit op uw productieschema, zodat onderdelen klaar zijn wanneer uw lijn ze nodig heeft.',
        },
        {
          icon: 'obsolete',
          title: 'Obsolescentiebeheer',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor de lucht- en ruimtevaart en de luchtvaart',
      lead: 'De categorieën die wij het vaakst leveren voor lucht- en ruimtevaart-, defensie- en grondondersteuningsprogramma\'s.',
      items: [
        'Componenten voor vluchtregelings- en avionicakaarten',
        'Onderdelen voor navigatie- en communicatiesystemen',
        'Componenten voor radar- en grondondersteuningsapparatuur',
        'Connectoren, relais en schakelaars met hoge betrouwbaarheid',
        'Halfgeleiders voor voeding, geheugen en interfaces',
        'Uit productie genomen, last-time-buy- en verouderde referenties',
      ],
    },
    cta: {
      title: 'Stuur ons uw stuklijst voor de lucht- en ruimtevaart',
      text: 'Geef ons de artikelnummers, de aantallen en uw acceptatiecriteria. Wij bevestigen de beschikbaarheid, de levertijd en precies hoe wij de onderdelen inspecteren voordat ze worden verzonden.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'automotive': {
    hero: {
      heading: 'Elektronische componenten voor de auto-industrie en ADAS-inkoop',
      lead: 'Wij kopen componenten in voor autosystemen — ADAS, infotainment, verlichting en EV-voeding — en spelen in op de verstoringen tussen vraag en aanbod waardoor autoproducties vertraging oplopen.',
      img: '/assets/images/industry-automotive-hero.jpg',
      alt: 'Een dashboard van een voertuig met verwijderde afwerking, waarbij een printplaat en kabelbomen zichtbaar zijn',
    },
    intro: {
      title: 'Wij weten hoe wij veiligstellen wat u nodig heeft',
      paragraphs: [
        'Autoprogramma\'s draaien op lange kwalificatiecycli en onverbiddelijke productieschema\'s. Wanneer een component schaars is, kan het herkwalificeren van een alternatief meer tijd kosten dan het onderdeel waard is; daarom is het prioriteit om snel de juiste referentie te vinden en aan te tonen dat die authentiek is.',
        'Wij werken vanuit uw stuklijst (BOM), kopen bij door ons gekwalificeerde leveranciers en inspecteren elke bestelling bij aankomst in onze faciliteit in Shenzhen. Onderdelen waarvoor interne analyse nodig is, gaan naar onze partnerlaboratoria.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Een inspecteur van YIXINOU bedient een digitale inspectiemicroscoop bij een werkplek',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij weten hoe wij veiligstellen wat u nodig heeft',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'quality',
          title: 'Kwaliteitsborging',
          text: 'Elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen gecontroleerd, en alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
        },
        {
          icon: 'inventory',
          title: 'Sneller naar de markt',
          text: 'Beschikbaarheid wordt bepaald voordat de schaarste toeslaat. Wij offreren vroeg, bevestigen de voorraad snel en markeren de onderdelen die uw productie ophouden.',
        },
        {
          icon: 'obsolete',
          title: 'Ondersteuning gedurende de levenscyclus',
          text: 'Autoplatforms blijven in productie lang nadat hun halfgeleiders uit productie zijn genomen. Wij volgen last-time-buy-berichten en blijven de referenties inkopen die uw platform nog gebruikt.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor autosystemen',
      lead: 'De categorieën die wij het vaakst leveren voor auto- en EV-programma\'s.',
      items: [
        'Componenten voor ADAS, sensoren en camera\'s',
        'Onderdelen voor infotainment, displays en audio',
        'Componenten voor LED-verlichting en carrosserie-elektronica',
        'Componenten voor EV-accubeheer en voeding',
        'Connectoren, relais en passieve componenten',
        'Uit productie genomen en last-time-buy-referenties',
      ],
    },
    cta: {
      title: 'Stuur ons uw stuklijst voor de auto-industrie',
      text: 'Geef ons de artikelnummers, de aantallen en uw acceptatiecriteria. Wij bevestigen de beschikbaarheid, de levertijd en precies hoe wij de onderdelen inspecteren voordat ze worden verzonden.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'consumer-electronics': {
    hero: {
      heading: 'Elektronische componenten voor consumentenelektronica',
      lead: 'Wij leveren de componenten achter telefoons, wearables, audio en smart-home-apparaten, waar kosten per eenheid en levertijd bepalen wie de order krijgt.',
      img: '/assets/images/industry-consumer-electronics-hero.jpg',
      alt: 'Een gedemonteerde smartphone naast geopende draadloze oordopjes waarvan de printplaten zichtbaar zijn',
    },
    intro: {
      title: 'Wij helpen u voorop te blijven lopen',
      paragraphs: [
        'Consumentenelektronica beweegt snel. Een ontwerp kan binnen één seizoen worden opgevolgd en de stuklijst verandert mee, dus inkoop moet gelijke tred houden met de roadmap in plaats van erachteraan te lopen.',
        'Wij offreren op basis van uw volledige stuklijst (BOM), kopen bij door ons gekwalificeerde leveranciers en inspecteren elke bestelling voordat deze wordt verzonden. Wanneer een referentie uit productie gaat, melden wij dat vroeg genoeg om een last-time-buy-beslissing te nemen.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Componentlades en spoelen in rijen opgesteld op werkbanken voor het tellen en coderen van partijen',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij helpen u voorop te blijven lopen',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'inventory',
          title: 'Kostenbesparing',
          text: 'De economie per eenheid bepaalt consumentenprogramma\'s. Wij offreren de volledige stuklijst (BOM), bieden alternatieven aan waar die werkelijk gelijkwaardig zijn, en laten zien waar de kosten feitelijk zitten.',
        },
        {
          icon: 'quality',
          title: 'Voorraadbeheer',
          text: 'Elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen gecontroleerd, en alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
        },
        {
          icon: 'obsolete',
          title: 'Beperking van overtollige voorraad',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor consumentenapparaten',
      lead: 'De categorieën die wij het vaakst leveren voor consumentenelektronicaprogramma\'s.',
      items: [
        'Componenten voor display, touch en camera',
        "IC's voor voedingsbeheer en opladen",
        'Componenten voor draadloze verbindingen, audio en RF',
        "Sensoren, schakelaars en LED's",
        'Passieve componenten en connectoren',
        'Modules en legacy-referenties',
      ],
    },
    cta: {
      title: 'Stuur ons uw stuklijst voor consumentenelektronica',
      text: 'Geef ons de artikelnummers, de aantallen en uw doelkosten. Wij komen terug met de beschikbaarheid, de levertijd en waar de alternatieven zitten.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'contract-manufacturing': {
    hero: {
      heading: 'Componentinkoop voor contractfabrikanten en EMS',
      lead: 'Ondersteuning bij lijnstilstand en bij volume voor EMS-partijen, geoffreerd op basis van uw stuklijst (BOM) in plaats van per los onderdeel.',
      img: '/assets/images/industry-contract-manufacturing-hero.jpg',
      alt: 'Een paneel met onbestukte printplaten op een SMT-lijn naast spoelen met componenten voor oppervlaktemontage',
    },
    intro: {
      title: 'Wij zetten ons in om voor u te leveren',
      paragraphs: [
        'Een contractfabrikant wordt beoordeeld op leverdata die hij niet volledig zelf bepaalt. De onderdelen zijn de variabele: één ontbrekende referentie kan een complete assemblage ophouden, en één ongeverifieerd onderdeel kan een klant kosten.',
        'Wij offreren de volledige stuklijst (BOM), kopen bij door ons gekwalificeerde leveranciers en inspecteren elke bestelling bij aankomst in onze faciliteit in Shenzhen. Als een lijn al stil ligt, behandelen wij het tekort als urgent en zeggen wij snel of wij kunnen helpen.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Gelabelde dozen met elektronische componenten op stellingen in het magazijn van YIXINOU',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij zetten ons in om voor u te leveren',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'inventory',
          title: 'Kostenbesparing',
          text: 'De marge op een assemblage is klein, dus de componentkosten zijn belangrijk. Wij offreren de volledige stuklijst (BOM), brengen de onderdelen naar voren waar een gelijkwaardig alternatief werkelijk goedkoper is, en voorkomen dat de prijs wordt opgehoogd met onderdelen die u al heeft.',
        },
        {
          icon: 'quality',
          title: 'Voorraadbeheer',
          text: 'Elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen gecontroleerd, en alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
        },
        {
          icon: 'obsolete',
          title: 'Beperking van overtollige voorraad',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor assemblage- en productieprogramma\'s',
      lead: 'De categorieën die wij het vaakst leveren voor EMS en contractproductie.',
      items: [
        'Stuklijstoffertes en alles-in-één-orders',
        'Inkoop bij lijnstilstand en tekorten',
        'Verificatie van een tweede bron',
        'Balanceren van overtollige voorraad en voorraadposities',
        'Connectoren, passieven en halfgeleiders',
        'Geprogrammeerde en als set geleverde onderdelen',
      ],
    },
    cta: {
      title: 'Stuur ons een stuklijst voor een offerte',
      text: 'Upload of plak uw stuklijst (BOM) en wij offreren de volledige lijst, inclusief de onderdelen waarvoor u al gedekt bent, zodat u gelijke gevallen met elkaar kunt vergelijken.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'energy': {
    hero: {
      heading: 'Elektronische componenten voor energie en vermogensconversie',
      lead: 'Wij leveren componenten voor zonne-energie, opslag, net en vermogensconversie, waar de onderdelen bestand moeten zijn tegen warmte, belasting en tijd.',
      img: '/assets/images/industry-energy-hero.jpg',
      alt: 'De geopende vermogensconversiekast van een omvormer, met busbars, koellichamen en vermogensmodules',
    },
    intro: {
      title: 'Wij ondersteunen uw toeleveringsketen',
      paragraphs: [
        'Vermogenselektronica werkt onder zware omstandigheden. Van een omvormer of een opslagkast wordt verwacht dat deze jarenlang onder temperatuur blijft werken, dus een marginaal onderdeel is geen klein risico — het is een storing in het veld die staat te wachten.',
        'Wij kopen in op basis van uw stuklijst (BOM) bij door ons gekwalificeerde leveranciers, en elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen geïnspecteerd. Alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Een inspecteur van YIXINOU bedient een digitale inspectiemicroscoop bij een werkplek',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij ondersteunen uw toeleveringsketen',
      items: [
        {
          icon: 'sourcing',
          title: 'Snelheid en nauwkeurigheid',
          text: 'Projectschema\'s verschuiven zelden, dus een offerte moet zowel snel als juist zijn. Wij bevestigen de beschikbaarheid op basis van werkelijke voorraad en markeren de onderdelen die de datum niet halen.',
        },
        {
          icon: 'quality',
          title: 'Voorraadbeheer',
          text: 'Elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen gecontroleerd, en alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
        },
        {
          icon: 'inventory',
          title: 'Kostenbesparing',
          text: 'Vermogenscomponenten vormen een groot deel van de stuklijstkosten (BOM). Wij offreren de lijst als geheel en wijzen aan waar een gelijkwaardige referentie werkelijk goedkoper is.',
        },
        {
          icon: 'obsolete',
          title: 'Flexibiliteit',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor energie- en vermogenssystemen',
      lead: 'De categorieën die wij het vaakst leveren voor energie- en vermogensconversieprogramma\'s.',
      items: [
        "IGBT's, gate-drivers en vermogensmodules",
        'Onderdelen voor omvormers en vermogensconversie',
        'Elektronica voor regeling en bewaking',
        'Magnetische componenten en condensatoren',
        'Connectoren, relais en klemmen',
        'Uit productie genomen referenties voor geïnstalleerde apparatuur',
      ],
    },
    cta: {
      title: 'Stuur ons uw projectstuklijst',
      text: 'Geef ons de artikelnummers, de aantallen en de leverdatum waarvoor u werkt. Wij bevestigen wat haalbaar is en wat niet.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'enterprise-computing': {
    hero: {
      heading: 'Componentinkoop voor servers en datacenters',
      lead: 'Componenten voor servers, opslagsystemen, netwerkapparatuur en datacenterhardware — inclusief de legacy-referenties die een geïnstalleerde omgeving draaiende houden.',
      img: '/assets/images/industry-enterprise-computing-hero.jpg',
      alt: 'Bladeservers die uit een rack zijn geschoven, met zichtbare printplaten en geheugenmodules',
    },
    intro: {
      title: 'Wij houden uw systemen draaiende',
      paragraphs: [
        'Enterprisehardware blijft veel langer in gebruik dan de platforms waarvoor deze is gebouwd. Zodra een servergeneratie uit support raakt, worden de onderdelen moeilijker te vinden — precies wanneer het storingspercentage begint te stijgen.',
        'Wij kopen in op basis van uw stuklijst (BOM), inclusief end-of-life-referenties, en inspecteren elke bestelling bij aankomst in onze faciliteit in Shenzhen. Alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Gelabelde dozen met elektronische componenten op stellingen in het magazijn van YIXINOU',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij houden uw systemen draaiende',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'obsolete',
          title: 'Beperking van overtollige voorraad',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
        {
          icon: 'inventory',
          title: 'Kostenbesparing',
          text: 'Vernieuwingscycli zijn duur. Een bestaande omgeving langer inzetbaar houden is vaak de goedkopere keuze, dus kopen wij de onderdelen in die dat mogelijk maken.',
        },
        {
          icon: 'quality',
          title: 'Productlevenscyclusbeheer',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en melden wanneer een referentie in uw omgeving moeilijk leverbaar dreigt te worden, terwijl er nog tijd is om te handelen.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor server- en opslagplatforms',
      lead: 'De categorieën die wij het vaakst leveren voor enterprise computing en datacenterhardware.',
      items: [
        'Controllers voor servers, opslag en interfaces',
        'Onderdelen voor geheugen en chipsetondersteuning',
        'Voedingen en spanningsregelaars',
        'Koeling, connectoren en bekabeling',
        'Netwerk- en interfacecomponenten',
        'Legacy-referenties voor geïnstalleerde omgevingen',
      ],
    },
    cta: {
      title: 'Stuur ons de stuklijst van uw serverplatform',
      text: 'Geef ons het platform, de artikelnummers en de aantallen, inclusief end-of-life-referenties. Wij bevestigen wat werkelijk beschikbaar is.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'gaming': {
    hero: {
      heading: 'Elektronische componenten voor speel- en amusementsautomaten',
      lead: 'Componenten voor gaminghardware, amusements-, loterij- en kassasystemen — inclusief de onderdelen die lang meegaande machines draaiende houden.',
      img: '/assets/images/industry-gaming-hero.jpg',
      alt: 'Een arcadebedieningspaneel met verlichte knoppen en een joystick, met daarachter de zichtbare printplaat en bedrading',
    },
    intro: {
      title: 'Wij zijn toegewijd om elke keer kwaliteitsonderdelen te leveren',
      paragraphs: [
        'Gaming- en amusementshardware blijft jaren in gebruik, vaak op locaties waar een defecte machine direct omzetverlies betekent. De componenten erin zijn dikwijls al lang geleden uit productie genomen.',
        'Wij kopen actuele onderdelen en uit productie genomen referenties in bij door ons gekwalificeerde leveranciers, en elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen geïnspecteerd voordat deze wordt verzonden.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Componentlades en spoelen in rijen opgesteld op werkbanken voor het tellen en coderen van partijen',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij zijn toegewijd om elke keer kwaliteitsonderdelen te leveren',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'inventory',
          title: 'Kostenbesparing',
          text: 'Exploitanten werken met krappe cijfers per eenheid. Wij offreren de onderdelen die u nodig heeft zonder de order op te blazen, en zeggen duidelijk wanneer een goedkoper alternatief niet werkelijk gelijkwaardig is.',
        },
        {
          icon: 'obsolete',
          title: 'Beperking van overtollige voorraad',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
        {
          icon: 'quality',
          title: 'Voorraadbeheer',
          text: 'Elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen gecontroleerd, en alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor gaming- en amusementshardware',
      lead: 'De categorieën die wij het vaakst leveren voor speel-, amusements- en kassasystemen.',
      items: [
        'Componenten voor display en controllers',
        'Knoppen, joysticks en encoders',
        'Componenten voor voeding, interface en verlichting',
        'Moederborden en modules',
        'Connectoren, kabelbomen en passieven',
        'Lang meegaande vervangingsonderdelen voor legacy-machines',
      ],
    },
    cta: {
      title: 'Stuur ons de stuklijst van uw machine',
      text: 'Geef ons de machine, de artikelnummers en de aantallen. Wij bevestigen de beschikbaarheid en de levertijd voor actuele en uit productie genomen referenties.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'healthcare': {
    hero: {
      heading: 'Elektronische componenten voor medische en zorgapparatuur',
      lead: 'Componenten voor patiëntmonitoring, diagnostische beeldvorming en laboratoriumapparatuur, waar traceerbaarheid net zo belangrijk is als beschikbaarheid.',
      img: '/assets/images/industry-healthcare-hero.jpg',
      alt: 'De achterzijde van een patiëntmonitor met een zichtbaar hoofdbord, sensorconnectoren en een lintkabel',
    },
    intro: {
      title: 'Wij stellen uw toeleveringsketen voorop',
      paragraphs: [
        'Medische apparatuur wordt gekwalificeerd tegen een vaste stuklijst (BOM) en blijft in gebruik lang nadat de componenten uit productie zijn genomen. Een onderdeel vervangen is geen inkoopbeslissing — het is een regelgevende beslissing.',
        'Daarom draait het om traceerbaarheid. Wij kopen in op basis van uw goedgekeurde referenties, bewaren de partij- en datumcodes van elke zending en inspecteren elke bestelling bij aankomst in onze faciliteit in Shenzhen. Interne analyse gaat naar onze partnerlaboratoria.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Gelabelde dozen met elektronische componenten op stellingen in het magazijn van YIXINOU',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij stellen uw toeleveringsketen voorop',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'quality',
          title: 'Productlevenscyclusbeheer',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten voor de referenties die u gebruikt, zodat u van een uitfasering op de hoogte bent voordat deze zich voordoet in plaats van op het moment van uitval.',
        },
        {
          icon: 'inventory',
          title: 'Voorraadbeheer',
          text: 'Een eenmalige aankoop of een doorlopend programma — wij kunnen een afgesproken voorraad aanhouden die aansluit op uw productieschema, zodat onderdelen klaar zijn wanneer uw lijn ze nodig heeft.',
        },
        {
          icon: 'obsolete',
          title: 'Beperking van overtollige voorraad',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor medische en laboratoriumapparatuur',
      lead: 'De categorieën die wij het vaakst leveren voor medische hulpmiddelen en diagnostische apparatuur.',
      items: [
        'Componenten voor monitor- en diagnosekaarten',
        'Sensoren en componenten voor signaalconditionering',
        'Componenten voor voeding en galvanische scheiding',
        'Displays, connectoren en bekabeling',
        'Halfgeleiders voor interface en geheugen',
        'Uit productie genomen referenties voor geïnstalleerde apparatuur',
      ],
    },
    cta: {
      title: 'Stuur ons de stuklijst van uw apparaat',
      text: 'Geef ons de goedgekeurde referenties, de aantallen en eventuele eisen op het gebied van traceerbaarheid. Wij bevestigen wat wij kunnen leveren en hoe dat wordt gedocumenteerd.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'industrial-automation': {
    hero: {
      heading: 'Elektronische componenten voor industriële automatisering',
      lead: "Componenten voor robotica, aandrijvingen, PLC's, sensoren en vermogenselektronica — ingekocht zodat uw productielijn niet stil komt te staan voor een onderdeel.",
      img: '/assets/images/industry-industrial-automation-hero.jpg',
      alt: 'Een besturingskast met PLC-modules en kabelgoten naast een robotarm in een productiecel',
    },
    intro: {
      title: 'Wij houden uw productielijnen draaiende',
      paragraphs: [
        'Automatisering wordt beoordeeld op uptime. Een stilstaande lijn kost per uur meer dan vrijwel elk component erop, dus de prioriteit is meestal om vandaag het juiste onderdeel te krijgen in plaats van volgende maand het goedkoopste.',
        'Wij kopen in op basis van uw stuklijst (BOM) bij door ons gekwalificeerde leveranciers, en inspecteren elke bestelling bij aankomst in onze faciliteit in Shenzhen. Als een geïnstalleerde machine een uit productie genomen referentie gebruikt, zeggen wij of die nog leverbaar is.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Componentlades en spoelen in rijen opgesteld op werkbanken voor het tellen en coderen van partijen',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij houden uw productielijnen draaiende',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'inventory',
          title: 'Kostenbesparing',
          text: 'Stuklijsten voor automatisering bevatten veel standaardcomponenten. Wij offreren de lijst als geheel en laten zien waar de kosten feitelijk zitten, in plaats van elke regel gelijk op te hogen.',
        },
        {
          icon: 'quality',
          title: 'Voorraadbeheer',
          text: 'Elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen gecontroleerd, en alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
        },
        {
          icon: 'obsolete',
          title: 'Beperking van overtollige voorraad',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor automatisering en besturing',
      lead: 'De categorieën die wij het vaakst leveren voor industriële automatisering en besturingssystemen.',
      items: [
        "Onderdelen voor PLC's, aandrijvingen en motion control",
        "Sensoren en interface-IC's",
        'Vermogenselektronica en gate-drivers',
        'Relais, contactoren en klemmen',
        'Connectoren, kabels en passieven',
        'Legacy-vervangingsonderdelen voor geïnstalleerde machines',
      ],
    },
    cta: {
      title: 'Stuur ons uw automatiseringsstuklijst',
      text: 'Geef ons de machine of het platform, de artikelnummers en de aantallen. Als een lijn al stil ligt, meld het dan; wij behandelen het als urgent.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'personal-computing': {
    hero: {
      heading: 'Elektronische componenten voor personal computing',
      lead: 'Componenten voor laptops, desktops, randapparatuur en de bijbehorende toeleveringsketen — van actuele platforms tot de legacy-referenties die serviceteams nog nodig hebben.',
      img: '/assets/images/industry-personal-computing-hero.jpg',
      alt: 'Een geopende laptopbehuizing met een zichtbaar moederbord, geheugenmodules, koelventilator en accu',
    },
    intro: {
      title: 'Wij voorzien in uw vraag en aanbod',
      paragraphs: [
        'Personal computing draait op korte platformcycli en een lange servicenaloop. Nieuwe ontwerpen hebben snel actuele halfgeleiders nodig; machines die al in het veld staan hebben referenties nodig die de fabrikant jaren geleden heeft gestaakt.',
        'Wij dekken beide: wij kopen in op basis van uw stuklijst (BOM) bij door ons gekwalificeerde leveranciers en inspecteren elke bestelling bij aankomst in onze faciliteit in Shenzhen voordat deze wordt verzonden.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Gelabelde dozen met elektronische componenten op stellingen in het magazijn van YIXINOU',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij voorzien in uw vraag en aanbod',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'inventory',
          title: 'Kostenbesparing',
          text: 'De marge op een platform wordt bepaald door de kosten per eenheid. Wij offreren de volledige stuklijst (BOM) en markeren de regels waar een werkelijk gelijkwaardig alternatief het cijfer verandert.',
        },
        {
          icon: 'quality',
          title: 'Productlevenscyclusbeheer',
          text: 'Wij volgen end-of-life-berichten voor de referenties waarmee u bouwt, zodat een uitfasering u bereikt voordat deze een tekort wordt.',
        },
        {
          icon: 'obsolete',
          title: 'Beperking van overtollige voorraad',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor computerplatforms',
      lead: 'De categorieën die wij het vaakst leveren voor personal computing en randapparatuur.',
      items: [
        "IC's voor voedingsbeheer en opladen",
        'Controllers voor interface, USB en displays',
        'Componenten voor geheugen en opslag',
        'Connectoren, kabels en passieven',
        'Koelings- en mechanische onderdelen',
        'Legacy-referenties voor reparatie en service',
      ],
    },
    cta: {
      title: 'Stuur ons de stuklijst van uw platform',
      text: 'Geef ons het platform, de artikelnummers en de aantallen, actueel of legacy. Wij bevestigen wat beschikbaar is en met welke levertijd.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'semiconductor-manufacturing': {
    hero: {
      heading: 'Componenten en reserveonderdelen voor halfgeleiderproductie',
      lead: 'Ondersteunende componenten, interfacedelen en reserveonderdelen voor fabricage-, test- en verpakkingsprocessen, waar stilstand in wafers wordt gemeten.',
      img: '/assets/images/industry-semiconductor-hero.jpg',
      alt: 'Een siliciumwafer die met een handlingtool boven een tafel wordt gehouden, met een tweede wafer in een open cassette',
    },
    intro: {
      title: 'Wij weten hoe wij de efficiëntie op peil houden',
      paragraphs: [
        'Een fab of een testvloer kan niet wachten op een ondersteunend onderdeel. Toolinterfaces, verbruiksartikelen voor handlers en besturingselektronica zijn vaak legacy-artikelen met lange levertijden en weinig resterende bronnen.',
        'Wij kopen in op basis van uw onderdelenlijst bij door ons gekwalificeerde leveranciers, en inspecteren elke bestelling bij aankomst in onze faciliteit in Shenzhen. Alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Een inspecteur van YIXINOU bedient een digitale inspectiemicroscoop bij een werkplek',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij weten hoe wij de efficiëntie op peil houden',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'inventory',
          title: 'Kostenbesparing',
          text: 'Ondersteunende onderdelen worden in kleine aantallen tegen hoge stukprijzen gekocht. Wij offreren de lijst als geheel en zeggen waar een gelijkwaardige referentie de kosten werkelijk verlaagt.',
        },
        {
          icon: 'obsolete',
          title: 'Beperking van overtollige voorraad',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
        {
          icon: 'quality',
          title: 'Voorraadbeheer',
          text: 'Elke bestelling wordt bij aankomst in onze faciliteit in Shenzhen gecontroleerd, en alles waarvoor interne analyse nodig is, gaat naar onze partnerlaboratoria.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten en reserveonderdelen voor fab en test',
      lead: 'De categorieën die wij het vaakst leveren voor halfgeleiderproductie en testactiviteiten.',
      items: [
        'Interfaceonderdelen voor testers en handlers',
        'Verbruiksartikelen voor probes en sockets',
        'Voedingen en besturingselektronica',
        'Sensoren, ventielen en bewegingscomponenten',
        'Connectoren, kabels en passieven',
        'Legacy-reserveonderdelen voor geïnstalleerde tools',
      ],
    },
    cta: {
      title: 'Stuur ons de onderdelenlijst van uw apparatuur',
      text: 'Geef ons de tool, de artikelnummers en de aantallen. Wij bevestigen de beschikbaarheid en de levertijd voor actuele en legacy-referenties.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
  'telecom-networking': {
    hero: {
      heading: 'Componentinkoop voor telecom en netwerken',
      lead: 'Componenten voor basisstations, routers, switches, optische transport- en toegangsapparatuur — inclusief ondersteuning van lijnkaarten voor netwerken die al in bedrijf zijn.',
      img: '/assets/images/industry-telecom-networking-hero.jpg',
      alt: 'Een in een rack gemonteerde netwerkswitch met oplichtende poort-leds en glasvezelpatchkabels die naar het paneel erboven lopen',
    },
    intro: {
      title: 'Wij werken voor uw toeleveringsketen',
      paragraphs: [
        'Telecominfrastructuur is gebouwd voor een decennium en wordt nog langer ondersteund. Operators kunnen een kaart niet uit bedrijf nemen omdat een component niet meer wordt gemaakt, dus het inkopen van legacy-referenties is net zo belangrijk als het inkopen van nieuwe.',
        'Wij werken vanuit uw stuklijst (BOM), kopen bij door ons gekwalificeerde leveranciers en inspecteren elke bestelling bij aankomst in onze faciliteit in Shenzhen voordat deze naar u wordt verzonden.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Gelabelde dozen met elektronische componenten op stellingen in het magazijn van YIXINOU',
    },
    risk: {
      eyebrow: 'Risicobeheersing',
      title: 'Wij werken voor uw toeleveringsketen',
      items: [
        {
          icon: 'sourcing',
          title: 'Strategische inkoop',
          text: 'Wij werken vanuit uw stuklijst (BOM) en uw goedgekeurde referenties, en wij melden het wanneer een referentie niet leverbaar is in plaats van er stilzwijgend een vervanging voor te leveren.',
        },
        {
          icon: 'obsolete',
          title: 'Beperking van overtollige voorraad',
          text: 'Wij volgen last-time-buy- en end-of-life-berichten en sporen uit productie genomen referenties op, zodat een onderdeel dat het einde van zijn levenscyclus bereikt uw programma niet stillegt.',
        },
        {
          icon: 'inventory',
          title: 'Kostenbesparing',
          text: 'Lijnkaarten nemen een onevenredig groot deel van de stuklijst (BOM) voor hun rekening. Wij offreren de kaart als geheel en benoemen de regels waar de kosten werkelijk kunnen bewegen.',
        },
        {
          icon: 'quality',
          title: 'Productlevenscyclusbeheer',
          text: 'Wij volgen last-time-buy-berichten voor de referenties in uw netwerk, zodat een uitfasering een planningspunt is in plaats van een storing.',
        },
      ],
    },
    parts: {
      eyebrow: 'Wat wij inkopen',
      title: 'Componenten voor telecom- en netwerkapparatuur',
      lead: 'De categorieën die wij het vaakst leveren voor telecom, netwerken en optisch transport.',
      items: [
        'RF-, optische en interfacecomponenten',
        'Componenten voor voeding en circuitbeveiliging',
        'Filters, connectoren en passieven',
        "IC's voor geheugen, logica en controllers",
        'Modules en assemblages van lijnkaarten',
        'Legacy-referenties voor geïnstalleerde netwerken',
      ],
    },
    cta: {
      title: 'Stuur ons de stuklijst van uw netwerkplatform',
      text: 'Geef ons het platform, de artikelnummers en de aantallen, inclusief legacy-referenties voor lijnkaarten. Wij bevestigen wat werkelijk beschikbaar is.',
      primary: {
        label: 'Contact opnemen',
        href: '/Contact',
      },
      secondary: {
        label: 'Alle producten',
        href: '/all-products',
      },
    },
  },
};

export { groups, inspect, industries };
export default { groups, inspect, industries };
