/*
 * German industry-detail copy — product groups, the incoming-inspection section and the
 * twelve industry detail pages. Structure, keys and array lengths mirror the English
 * source so the German pages render the same components with translated text.
 *
 * Slugs, hrefs, image paths, icons and technical units/brands are carried over unchanged.
 * Internal analysis is attributed to "Partnerlabore"; no certification is claimed.
 */
const groups = {
  eyebrow: "Produktgruppen",
  title: "Produkte, die wir liefern",
  lead: "Dieselben Bauteilgruppen liefern wir in jeder Branche, die wir betreuen.",
  items: [
    {
      title: "Integrierte Schaltkreise",
      href: "/all-products",
    },
    {
      title: "Transistoren",
      href: "/all-products",
    },
    {
      title: "Steckverbinder",
      href: "/all-products",
    },
    {
      title: "Kondensatoren",
      href: "/all-products",
    },
    {
      title: "Widerstände",
      href: "/all-products",
    },
    {
      title: "Sensoren und Schalter",
      href: "/all-products",
    },
    {
      title: "LEDs und Module",
      href: "/all-products",
    },
  ],
};

const inspect = {
  eyebrow: "So prüfen wir",
  title: "Was geschieht, bevor Ihre Bauteile versendet werden",
  text: "Wareneingangsprüfung und äußere Sichtprüfung finden in unserem eigenen Betrieb in Shenzhen statt. Die interne Analyse – Röntgenprüfung, XRF, Entkapselung, Lötbarkeits- und Elektrotest – führen unsere Partnerlabore durch. Wir betreiben kein eigenes Testlabor, und das sagen wir klar, damit Sie genau wissen, wer Ihre Bauteile prüft.",
  img: "/assets/images/quality-step-3-visual.jpg",
  alt: "Ein Prüfer positioniert ein Bauteil auf einer antistatischen Unterlage unter einem digitalen Inspektionsmikroskop",
  ctaLabel: "Unseren Qualitätsprozess ansehen",
  ctaHref: "/quality",
};

const industries = {
  aerospace: {
    hero: {
      heading: "Elektronische Komponenten für die Luft- und Raumfahrt und Beschaffung obsoleter Bauteile",
      lead: "Wir beschaffen elektronische Komponenten für Programme in Luft- und Raumfahrt und Luftfahrt – einschließlich obsoleter und schwer beschaffbarer Referenzen – und sichern dabei Ihren Produktionstermin ab.",
      img: "/assets/images/industry-aerospace-hero.jpg",
      alt: "Avionik-Bedienpanels und Instrumentendisplays in einem Flugzeugcockpit",
    },
    intro: {
      title: "Gleiche Standards. Schnellerer Zugriff.",
      paragraphs: [
        "Ein Luft- und Raumfahrtprojekt verträgt kein ungeprüftes Bauteil. Wenn eine Linie auf eine Komponente wartet, wächst der Druck, zu nehmen, was verfügbar ist – und genau dann gelangen umgekennzeichnete, nicht passende oder nicht rückverfolgbare Bauteile in eine Lieferkette.",
        "Wir beschaffen anhand Ihrer Stückliste bei Lieferanten, die wir qualifiziert haben, und wir sagen Ihnen, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen. Jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft, und alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
      ],
      img: "/assets/images/gallery-06.jpg",
      alt: "Beschriftete Kartons mit elektronischen Komponenten auf Regalen im Lager von YIXINOU",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir wissen, wie wir Ihr Risiko senken können",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "quality",
          title: "Qualitätssicherung",
          text: "Jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft; alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
        },
        {
          icon: "inventory",
          title: "Bestandsmanagement",
          text: "Einmaliger Kauf oder laufendes Programm – wir können vereinbarte Bestände auf Ihren Fertigungsplan halten, damit die Bauteile bereitstehen, wenn Ihre Linie sie braucht.",
        },
        {
          icon: "obsolete",
          title: "Obsoleszenz-Management",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Luft- und Raumfahrt und Luftfahrt",
      lead: "Die Kategorien, die wir am häufigsten für Luft- und Raumfahrt-, Verteidigungs- und Bodensupportprogramme liefern.",
      items: [
        "Komponenten für Flugsteuerungs- und Avionikplatinen",
        "Bauteile für Navigations- und Kommunikationssysteme",
        "Komponenten für Radar- und Bodensupportgeräte",
        "Hochzuverlässige Steckverbinder, Relais und Schalter",
        "Leistungs-, Speicher- und Schnittstellen-Halbleiter",
        "Abgekündigte Referenzen, Last-Time-Buy- und obsolete Bauteile",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Stückliste für die Luft- und Raumfahrt",
      text: "Nennen Sie uns die Artikelnummern, die Mengen und Ihre Abnahmekriterien. Wir bestätigen Verfügbarkeit, Lieferzeit und genau, wie wir die Bauteile vor dem Versand prüfen.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  automotive: {
    hero: {
      heading: "Elektronische Komponenten für die Automobilindustrie und ADAS-Beschaffung",
      lead: "Wir beschaffen Komponenten für Automobilsysteme – ADAS, Infotainment, Beleuchtung und EV-Leistungselektronik – und arbeiten um die Angebots- und Nachfrageungleichgewichte herum, die Automobilprojekte verzögern.",
      img: "/assets/images/industry-automotive-hero.jpg",
      alt: "Ein Fahrzeugcockpit mit demontierter Verkleidung, das eine Leiterplatte und Kabelbäume freilegt",
    },
    intro: {
      title: "Wir wissen, wie wir sichern, was Sie brauchen",
      paragraphs: [
        "Automobilprogramme laufen mit langen Qualifizierungszyklen und kompromisslosen Fertigungsplänen. Wenn eine Komponente knapp ist, kann die Requalifizierung einer Alternative mehr Zeit kosten, als das Bauteil wert ist; deshalb haben das schnelle Finden der richtigen Referenz und der Nachweis ihrer Echtheit Priorität.",
        "Wir arbeiten mit Ihrer Stückliste, kaufen bei Lieferanten, die wir qualifiziert haben, und prüfen jede Bestellung bei Ankunft in unserem Betrieb in Shenzhen. Bauteile, die eine interne Analyse erfordern, gehen an unsere Partnerlabore.",
      ],
      img: "/assets/images/quality-open-market-inspection.jpg",
      alt: "Ein Prüfer von YIXINOU bedient ein digitales Inspektionsmikroskop an einem Arbeitsplatz",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir wissen, wie wir sichern, was Sie brauchen",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "quality",
          title: "Qualitätssicherung",
          text: "Jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft; alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
        },
        {
          icon: "inventory",
          title: "Time-to-Market",
          text: "Verfügbarkeit wird entschieden, bevor die Knappheit eintritt. Wir kalkulieren früh, bestätigen Bestände schnell und markieren die Bauteile, die Ihre Fertigung aufhalten würden.",
        },
        {
          icon: "obsolete",
          title: "Lebenszyklus-Betreuung",
          text: "Automobilplattformen bleiben lange in Produktion, nachdem ihr Silizium abgekündigt wurde. Wir verfolgen Last-Time-Buy-Mitteilungen und beschaffen weiterhin die Referenzen, die Ihre Plattform noch verwendet.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Automobilsysteme",
      lead: "Die Kategorien, die wir am häufigsten für Automobil- und EV-Programme liefern.",
      items: [
        "ADAS-, Sensor- und Kamerakomponenten",
        "Infotainment-, Display- und Audiobauteile",
        "LED-Beleuchtung und Karosserieelektronik-Komponenten",
        "EV-Batteriemanagement- und Leistungskomponenten",
        "Steckverbinder, Relais und passive Bauelemente",
        "Abgekündigte Referenzen und Last-Time-Buy-Bauteile",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Stückliste für die Automobilindustrie",
      text: "Nennen Sie uns die Artikelnummern, die Mengen und Ihre Abnahmekriterien. Wir bestätigen Verfügbarkeit, Lieferzeit und genau, wie wir die Bauteile vor dem Versand prüfen.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  "consumer-electronics": {
    hero: {
      heading: "Elektronische Komponenten für die Unterhaltungselektronik",
      lead: "Wir liefern die Komponenten hinter Smartphones, Wearables, Audio- und Smart-Home-Geräten, wo Stückkosten und Lieferzeit darüber entscheiden, wer den Auftrag gewinnt.",
      img: "/assets/images/industry-consumer-electronics-hero.jpg",
      alt: "Ein zerlegtes Smartphone neben geöffneten kabellosen Ohrhörern mit sichtbaren Leiterplatten",
    },
    intro: {
      title: "Wir helfen Ihnen, die Nase vorn zu behalten",
      paragraphs: [
        "Unterhaltungselektronik ist schnelllebig. Ein Design kann innerhalb einer Saison abgelöst werden und die Stückliste ändert sich mit, sodass die Beschaffung mit der Roadmap Schritt halten muss statt hinter ihr zurückzubleiben.",
        "Wir kalkulieren auf Basis Ihrer vollständigen Stückliste, beziehen von Lieferanten, die wir qualifiziert haben, und prüfen jede Bestellung vor dem Versand. Wird eine Referenz abgekündigt, sagen wir es Ihnen früh genug, um eine Last-Time-Buy-Entscheidung zu treffen.",
      ],
      img: "/assets/images/quality-step-1-photography.jpg",
      alt: "Bauteiltrays und Rollen in Reihen auf Werkbänken zum Zählen und für die Loskennzeichnung",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir helfen Ihnen, die Nase vorn zu behalten",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "inventory",
          title: "Kosteneinsparungen",
          text: "Die Stückkosten entscheiden über Consumer-Programme. Wir kalkulieren die gesamte Stückliste, bieten Alternativen an, wo sie wirklich gleichwertig sind, und sagen Ihnen, wo die Kosten tatsächlich liegen.",
        },
        {
          icon: "quality",
          title: "Bestandsmanagement",
          text: "Jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft; alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
        },
        {
          icon: "obsolete",
          title: "Überschussreduzierung",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Consumergeräte",
      lead: "Die Kategorien, die wir am häufigsten für Programme der Unterhaltungselektronik liefern.",
      items: [
        "Display-, Touch- und Kamerakomponenten",
        "Power-Management- und Lade-ICs",
        "Funk-, Audio- und HF-Komponenten",
        "Sensoren, Schalter und LEDs",
        "Passive Bauelemente und Steckverbinder",
        "Module und Legacy-Referenzen",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Stückliste für Unterhaltungselektronik",
      text: "Nennen Sie uns die Artikelnummern, die Mengen und Ihre Zielkosten. Wir melden uns mit Verfügbarkeit, Lieferzeit und den Stellen, an denen Alternativen möglich sind.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  "contract-manufacturing": {
    hero: {
      heading: "Komponentenbeschaffung für Auftragsfertiger und EMS",
      lead: "Unterstützung bei Linienstillstand und für Serienmengen – für EMS-Dienstleister kalkuliert auf Basis Ihrer Stückliste statt Bauteil für Bauteil.",
      img: "/assets/images/industry-contract-manufacturing-hero.jpg",
      alt: "Ein Panel unbestückter Leiterplatten auf einer SMT-Linie neben Rollen mit SMD-Bauteilen",
    },
    intro: {
      title: "Wir liefern Ihnen verlässlich",
      paragraphs: [
        "Ein Auftragsfertiger wird an Lieferterminen gemessen, die er nicht vollständig kontrolliert. Die Bauteile sind die Variable: Eine knappe Referenz kann eine fertige Baugruppe aufhalten, und ein ungeprüftes Bauteil kann einen Kunden kosten.",
        "Wir kalkulieren die gesamte Stückliste, beziehen von Lieferanten, die wir qualifiziert haben, und prüfen jede Bestellung bei Ankunft in unserem Betrieb in Shenzhen. Steht eine Linie bereits, behandeln wir den Engpass als dringend und sagen schnell, ob wir helfen können.",
      ],
      img: "/assets/images/gallery-06.jpg",
      alt: "Beschriftete Kartons mit elektronischen Komponenten auf Regalen im Lager von YIXINOU",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir liefern Ihnen verlässlich",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "inventory",
          title: "Kosteneinsparungen",
          text: "Bei einer Baugruppe ist die Marge dünn, daher zählen die Bauteilkosten. Wir kalkulieren die vollständige Stückliste, heben die Positionen hervor, bei denen eine gleichwertige Alternative tatsächlich günstiger ist, und vermeiden es, den Preis mit Bauteilen aufzublähen, die Sie bereits vorhalten.",
        },
        {
          icon: "quality",
          title: "Bestandsmanagement",
          text: "Jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft; alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
        },
        {
          icon: "obsolete",
          title: "Überschussreduzierung",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Montage- und Bauprogramme",
      lead: "Die Kategorien, die wir am häufigsten für EMS und Auftragsfertigung liefern.",
      items: [
        "Stücklisten-Kalkulation und Komplettbestellungen",
        "Beschaffung bei Linienstillstand und Engpässen",
        "Verifizierung von Zweitquellen",
        "Überschuss- und Bestandsausgleich",
        "Steckverbinder, passive Bauelemente und Halbleiter",
        "Programmierte und konfektionierte Bauteile",
      ],
    },
    cta: {
      title: "Senden Sie uns eine Stückliste zur Kalkulation",
      text: "Laden Sie Ihre Stückliste hoch oder fügen Sie sie ein; wir kalkulieren die gesamte Linie, einschließlich der Positionen, die Sie bereits abgedeckt haben, damit Sie Vergleichbares gegenüberstellen können.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  energy: {
    hero: {
      heading: "Elektronische Komponenten für Energie und Leistungswandlung",
      lead: "Wir liefern Komponenten für Photovoltaik, Speicher, Netze und Leistungswandlung – Bereiche, in denen die Bauteile Hitze, Last und Zeit überstehen müssen.",
      img: "/assets/images/industry-energy-hero.jpg",
      alt: "Das geöffnete Leistungsschrankgehäuse eines Wechselrichters mit Stromschienen, Kühlkörpern und Leistungsmodulen",
    },
    intro: {
      title: "Wir unterstützen Ihre Lieferkette",
      paragraphs: [
        "Leistungselektronik arbeitet unter rauen Bedingungen. Ein Wechselrichter oder ein Speicherschrank soll über Jahre unter Temperatur laufen; ein grenzwertiges Bauteil ist daher kein kleines Risiko, sondern ein drohender Feldausfall.",
        "Wir beschaffen anhand Ihrer Stückliste bei Lieferanten, die wir qualifiziert haben, und jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft. Alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
      ],
      img: "/assets/images/quality-open-market-inspection.jpg",
      alt: "Ein Prüfer von YIXINOU bedient ein digitales Inspektionsmikroskop an einem Arbeitsplatz",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir unterstützen Ihre Lieferkette",
      items: [
        {
          icon: "sourcing",
          title: "Geschwindigkeit und Genauigkeit",
          text: "Projekttermine verschieben sich selten, deshalb muss ein Angebot schnell und korrekt sein. Wir bestätigen die Verfügbarkeit gegen reale Bestände und markieren die Bauteile, die den Termin nicht halten.",
        },
        {
          icon: "quality",
          title: "Bestandsmanagement",
          text: "Jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft; alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
        },
        {
          icon: "inventory",
          title: "Kosteneinsparungen",
          text: "Leistungskomponenten haben einen großen Anteil an den Kosten der Stückliste. Wir kalkulieren die Linie als Ganzes und weisen darauf hin, wo eine gleichwertige Referenz tatsächlich günstiger ist.",
        },
        {
          icon: "obsolete",
          title: "Flexibilität",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Energie- und Leistungssysteme",
      lead: "Die Kategorien, die wir am häufigsten für Energie- und Leistungswandlungsprogramme liefern.",
      items: [
        "IGBTs, Gate-Treiber und Leistungsmodule",
        "Bauteile für Wechselrichter und Leistungswandlung",
        "Steuerungs- und Überwachungselektronik",
        "Magnetische Bauteile und Kondensatoren",
        "Steckverbinder, Relais und Klemmen",
        "Abgekündigte Referenzen für installierte Anlagen",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Projektstückliste",
      text: "Nennen Sie uns die Artikelnummern, die Mengen und den Liefertermin, auf den Sie hinarbeiten. Wir bestätigen, was gehalten werden kann und was nicht.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  "enterprise-computing": {
    hero: {
      heading: "Komponentenbeschaffung für Server und Rechenzentren",
      lead: "Komponenten für Server, Storage, Netzwerkgeräte und Rechenzentrums-Hardware – einschließlich der Legacy-Referenzen, die installierte Bestände am Laufen halten.",
      img: "/assets/images/industry-enterprise-computing-hero.jpg",
      alt: "Aus einem Rack gezogene Blade-Server mit freiliegenden Leiterplatten und Speichermodulen",
    },
    intro: {
      title: "Wir halten Ihre Linien am Laufen",
      paragraphs: [
        "Enterprise-Hardware bleibt weitaus länger im Einsatz als die Plattformen, auf denen sie gebaut wurde. Ist eine Servergeneration aus dem Support, werden die Bauteile genau dann schwerer zu finden, wenn die Ausfallrate zu steigen beginnt.",
        "Wir beschaffen anhand Ihrer Stückliste, einschließlich End-of-Life-Referenzen, und prüfen jede Bestellung bei Ankunft in unserem Betrieb in Shenzhen. Alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
      ],
      img: "/assets/images/gallery-06.jpg",
      alt: "Beschriftete Kartons mit elektronischen Komponenten auf Regalen im Lager von YIXINOU",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir halten Ihre Linien am Laufen",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "obsolete",
          title: "Überschussreduzierung",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
        {
          icon: "inventory",
          title: "Kosteneinsparungen",
          text: "Refresh-Zyklen sind teuer. Einen bestehenden Bestand länger wartbar zu halten, ist oft die günstigere Entscheidung; deshalb beschaffen wir die Bauteile, die das möglich machen.",
        },
        {
          icon: "quality",
          title: "Produktlebenszyklus-Management",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und sagen Ihnen, wann eine Referenz in Ihrem Bestand schwer beschaffbar wird – solange noch Zeit zum Handeln bleibt.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Server- und Storage-Plattformen",
      lead: "Die Kategorien, die wir am häufigsten für Enterprise-Computing und Rechenzentrums-Hardware liefern.",
      items: [
        "Server-, Storage- und Schnittstellen-Controller",
        "Speicher- und Chipsatz-Bauteile",
        "Netzteile und Spannungsregler",
        "Kühlung, Steckverbinder und Verkabelung",
        "Netzwerk- und Schnittstellenkomponenten",
        "Legacy-Referenzen für installierte Bestände",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Serverplattform-Stückliste",
      text: "Nennen Sie uns die Plattform, die Artikelnummern und die Mengen, einschließlich End-of-Life-Referenzen. Wir bestätigen, was tatsächlich verfügbar ist.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  gaming: {
    hero: {
      heading: "Elektronische Komponenten für Spiel- und Unterhaltungsautomaten",
      lead: "Komponenten für Gaming-Hardware, Unterhaltungs-, Lotterie- und Kassensysteme – einschließlich der Bauteile, die langjährig genutzte Automaten am Laufen halten.",
      img: "/assets/images/industry-gaming-hero.jpg",
      alt: "Ein Arcade-Bedienpult mit beleuchteten Tasten und einem Joystick, dahinter sichtbar die Leiterplatte und die Verkabelung",
    },
    intro: {
      title: "Wir liefern jedes Mal Qualitätsbauteile",
      paragraphs: [
        "Gaming- und Unterhaltungshardware bleibt jahrelang im Einsatz, oft an Orten, an denen ein ausgefallener Automat unmittelbar Umsatzverlust bedeutet. Die verbauten Komponenten wurden häufig vor langer Zeit abgekündigt.",
        "Wir beschaffen aktuelle Bauteile und abgekündigte Referenzen bei Lieferanten, die wir qualifiziert haben, und jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft, bevor sie versendet wird.",
      ],
      img: "/assets/images/quality-step-1-photography.jpg",
      alt: "Bauteiltrays und Rollen in Reihen auf Werkbänken zum Zählen und für die Loskennzeichnung",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir liefern jedes Mal Qualitätsbauteile",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "inventory",
          title: "Kosteneinsparungen",
          text: "Betreiber arbeiten mit engen Stückkosten. Wir kalkulieren die Bauteile, die Sie brauchen, ohne die Bestellung aufzublähen, und sagen klar, wenn ein günstigeres Äquivalent nicht tatsächlich gleichwertig ist.",
        },
        {
          icon: "obsolete",
          title: "Überschussreduzierung",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
        {
          icon: "quality",
          title: "Bestandsmanagement",
          text: "Jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft; alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Gaming- und Unterhaltungshardware",
      lead: "Die Kategorien, die wir am häufigsten für Spiel-, Unterhaltungs- und Kassensysteme liefern.",
      items: [
        "Display- und Controller-Komponenten",
        "Tasten, Joysticks und Encoder",
        "Leistungs-, Schnittstellen- und Beleuchtungskomponenten",
        "Hauptplatinen und Module",
        "Steckverbinder, Kabelbäume und passive Bauelemente",
        "Langlebige Ersatzteile für Legacy-Automaten",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Automaten-Stückliste",
      text: "Nennen Sie uns den Automaten, die Artikelnummern und die Mengen. Wir bestätigen Verfügbarkeit und Lieferzeit für aktuelle und abgekündigte Referenzen.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  healthcare: {
    hero: {
      heading: "Elektronische Komponenten für Medizin- und Gesundheitstechnik",
      lead: "Komponenten für Patientenmonitoring, diagnostische Bildgebung und Laborgeräte – Bereiche, in denen Rückverfolgbarkeit ebenso zählt wie Verfügbarkeit.",
      img: "/assets/images/industry-healthcare-hero.jpg",
      alt: "Die Rückseite eines Patientenmonitors mit freiliegender Hauptplatine, Sensoranschlüssen und einem Flachkabel",
    },
    intro: {
      title: "Ihre Lieferkette hat für uns Priorität",
      paragraphs: [
        "Medizinische Geräte werden gegen eine feste Stückliste qualifiziert und bleiben lange im Einsatz, nachdem ihre Komponenten abgekündigt wurden. Ein Bauteil auszutauschen ist keine Einkaufsentscheidung, sondern eine regulatorische.",
        "Damit wird Rückverfolgbarkeit zum entscheidenden Punkt. Wir beschaffen anhand Ihrer freigegebenen Referenzen, dokumentieren Los- und Datumscodes für jede Lieferung und prüfen jede Bestellung bei Ankunft in unserem Betrieb in Shenzhen. Interne Analysen gehen an unsere Partnerlabore.",
      ],
      img: "/assets/images/gallery-06.jpg",
      alt: "Beschriftete Kartons mit elektronischen Komponenten auf Regalen im Lager von YIXINOU",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Ihre Lieferkette hat für uns Priorität",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "quality",
          title: "Produktlebenszyklus-Management",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen für die Referenzen, die Sie verwenden, damit Sie von einer Abkündigung im Voraus erfahren und nicht erst beim Ausfall.",
        },
        {
          icon: "inventory",
          title: "Bestandsmanagement",
          text: "Einmaliger Kauf oder laufendes Programm – wir können vereinbarte Bestände auf Ihren Fertigungsplan halten, damit die Bauteile bereitstehen, wenn Ihre Linie sie braucht.",
        },
        {
          icon: "obsolete",
          title: "Überschussreduzierung",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für medizinische Geräte und Laborausstattung",
      lead: "Die Kategorien, die wir am häufigsten für Medizinprodukte und diagnostische Geräte liefern.",
      items: [
        "Komponenten für Monitoring- und Diagnoseplatinen",
        "Sensoren und Bauteile zur Signalaufbereitung",
        "Leistungs- und Isolationskomponenten",
        "Displays, Steckverbinder und Verkabelung",
        "Schnittstellen- und Speicher-Halbleiter",
        "Abgekündigte Referenzen für installierte Geräte",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Gerätestückliste",
      text: "Nennen Sie uns die freigegebenen Referenzen, die Mengen und alle Anforderungen an die Rückverfolgbarkeit. Wir bestätigen, was wir liefern können und wie es dokumentiert wird.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  "industrial-automation": {
    hero: {
      heading: "Elektronische Komponenten für die industrielle Automatisierung",
      lead: "Komponenten für Robotik, Antriebe, SPS, Sensoren und Leistungselektronik – so beschafft, dass Ihre Produktionslinie nicht wegen eines Bauteils steht.",
      img: "/assets/images/industry-industrial-automation-hero.jpg",
      alt: "Ein Schaltschrank mit SPS-Modulen und Kabelkanälen neben einem Roboterarm in einer Fertigungszelle",
    },
    intro: {
      title: "Wir halten Ihre Linien am Laufen",
      paragraphs: [
        "Automatisierung wird in Verfügbarkeit gemessen. Eine stehende Linie kostet pro Stunde mehr als fast jede Komponente darin; deshalb hat meist das richtige Bauteil heute Vorrang vor dem günstigsten Bauteil im nächsten Monat.",
        "Wir beschaffen anhand Ihrer Stückliste bei Lieferanten, die wir qualifiziert haben, und prüfen jede Bestellung bei Ankunft in unserem Betrieb in Shenzhen. Verwendet eine installierte Maschine eine abgekündigte Referenz, sagen wir, ob sie noch beschaffbar ist.",
      ],
      img: "/assets/images/quality-step-1-photography.jpg",
      alt: "Bauteiltrays und Rollen in Reihen auf Werkbänken zum Zählen und für die Loskennzeichnung",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir halten Ihre Linien am Laufen",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "inventory",
          title: "Kosteneinsparungen",
          text: "Automatisierungs-Stücklisten enthalten viele Standardbauteile. Wir kalkulieren die Linie als Ganzes und zeigen, wo die Kosten tatsächlich liegen, statt jede Position gleich aufzuschlagen.",
        },
        {
          icon: "quality",
          title: "Bestandsmanagement",
          text: "Jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft; alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
        },
        {
          icon: "obsolete",
          title: "Überschussreduzierung",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Automatisierung und Steuerung",
      lead: "Die Kategorien, die wir am häufigsten für industrielle Automatisierung und Steuerungssysteme liefern.",
      items: [
        "SPS-, Antriebs- und Motion-Control-Bauteile",
        "Sensoren und Schnittstellen-ICs",
        "Leistungselektronik und Gate-Treiber",
        "Relais, Schütze und Klemmen",
        "Steckverbinder, Kabel und passive Bauelemente",
        "Legacy-Ersatzteile für installierte Maschinen",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Automatisierungs-Stückliste",
      text: "Nennen Sie uns die Maschine oder Plattform, die Artikelnummern und die Mengen. Steht eine Linie bereits, sagen Sie es uns – wir behandeln den Fall als dringend.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  "personal-computing": {
    hero: {
      heading: "Elektronische Komponenten für den PC-Bereich",
      lead: "Komponenten für Notebooks, Desktops, Peripherie und deren Zubehörkette – von aktuellen Plattformen bis zu den Legacy-Referenzen, die Serviceteams noch benötigen.",
      img: "/assets/images/industry-personal-computing-hero.jpg",
      alt: "Ein geöffnetes Notebook-Gehäuse mit Hauptplatine, Speichermodulen, Lüfter und Akku",
    },
    intro: {
      title: "Wir decken Ihren Bedarf an Angebot und Nachfrage",
      paragraphs: [
        "Der PC-Bereich lebt von kurzen Plattformzyklen und langen Servicezeiträumen. Neue Designs brauchen aktuelles Silizium schnell; bereits installierte Geräte brauchen Referenzen, deren Fertigung der Hersteller vor Jahren eingestellt hat.",
        "Wir decken beides ab, beschaffen anhand Ihrer Stückliste bei Lieferanten, die wir qualifiziert haben, und prüfen jede Bestellung bei Ankunft in unserem Betrieb in Shenzhen, bevor sie versendet wird.",
      ],
      img: "/assets/images/gallery-06.jpg",
      alt: "Beschriftete Kartons mit elektronischen Komponenten auf Regalen im Lager von YIXINOU",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir decken Ihren Bedarf an Angebot und Nachfrage",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "inventory",
          title: "Kosteneinsparungen",
          text: "Über die Marge einer Plattform entscheiden die Stückkosten. Wir kalkulieren die vollständige Stückliste und markieren die Positionen, bei denen ein echtes Äquivalent die Zahl verändert.",
        },
        {
          icon: "quality",
          title: "Produktlebenszyklus-Management",
          text: "Wir verfolgen End-of-Life-Mitteilungen für die Referenzen, mit denen Sie bauen, damit eine Abkündigung Sie erreicht, bevor daraus ein Engpass wird.",
        },
        {
          icon: "obsolete",
          title: "Überschussreduzierung",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Computing-Plattformen",
      lead: "Die Kategorien, die wir am häufigsten für PCs und Peripherie liefern.",
      items: [
        "Power-Management- und Lade-ICs",
        "Schnittstellen-, USB- und Display-Controller",
        "Speicher- und Storage-Komponenten",
        "Steckverbinder, Kabel und passive Bauelemente",
        "Kühlungs- und mechanische Bauteile",
        "Legacy-Referenzen für Reparatur und Service",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Plattform-Stückliste",
      text: "Nennen Sie uns die Plattform, die Artikelnummern und die Mengen – aktuell oder als Legacy-Referenz. Wir bestätigen, was verfügbar ist und zu welcher Lieferzeit.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  "semiconductor-manufacturing": {
    hero: {
      heading: "Komponenten und Ersatzteile für die Halbleiterfertigung",
      lead: "Unterstützungskomponenten, Schnittstellenbauteile und Ersatzteile für Fertigung, Test und Verpackung – Bereiche, in denen Stillstand in Wafern gemessen wird.",
      img: "/assets/images/industry-semiconductor-hero.jpg",
      alt: "Ein Siliziumwafer, von einem Handhabungswerkzeug über einer Werkbank gehalten, während ein zweiter Wafer in einer offenen Kassette liegt",
    },
    intro: {
      title: "Wir wissen, wie wir Effizienz erhalten",
      paragraphs: [
        "Ein Fab oder ein Testbereich kann nicht auf ein Support-Bauteil warten. Tool-Schnittstellen, Verbrauchsmaterial für Handler und Steuerungselektronik sind oft Legacy-Artikel mit langen Lieferzeiten und wenigen verbleibenden Quellen.",
        "Wir beschaffen anhand Ihrer Teileliste bei Lieferanten, die wir qualifiziert haben, und prüfen jede Bestellung bei Ankunft in unserem Betrieb in Shenzhen. Alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
      ],
      img: "/assets/images/quality-open-market-inspection.jpg",
      alt: "Ein Prüfer von YIXINOU bedient ein digitales Inspektionsmikroskop an einem Arbeitsplatz",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir wissen, wie wir Effizienz erhalten",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "inventory",
          title: "Kosteneinsparungen",
          text: "Support-Bauteile werden in kleinen Mengen zu hohen Stückpreisen gekauft. Wir kalkulieren die Liste als Ganzes und sagen Ihnen, wo eine gleichwertige Referenz die Kosten tatsächlich senkt.",
        },
        {
          icon: "obsolete",
          title: "Überschussreduzierung",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
        {
          icon: "quality",
          title: "Bestandsmanagement",
          text: "Jede Bestellung wird bei Ankunft in unserem Betrieb in Shenzhen geprüft; alles, was eine interne Analyse erfordert, geht an unsere Partnerlabore.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten und Ersatzteile für Fab und Test",
      lead: "Die Kategorien, die wir am häufigsten für Halbleiterfertigung und Testbetrieb liefern.",
      items: [
        "Schnittstellenbauteile für Test und Handler",
        "Verbrauchsmaterial für Probes und Sockets",
        "Netzteile und Steuerungselektronik",
        "Sensoren, Ventile und Bewegungskomponenten",
        "Steckverbinder, Kabel und passive Bauelemente",
        "Legacy-Ersatzteile für installierte Anlagen",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Anlagenteile-Liste",
      text: "Nennen Sie uns die Anlage, die Artikelnummern und die Mengen. Wir bestätigen Verfügbarkeit und Lieferzeit für aktuelle und Legacy-Referenzen.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
  "telecom-networking": {
    hero: {
      heading: "Komponentenbeschaffung für Telekommunikation und Netzwerke",
      lead: "Komponenten für Basisstationen, Router, Switches, optische Übertragung und Zugangsgeräte – einschließlich Line-Card-Unterstützung für bereits im Betrieb befindliche Netze.",
      img: "/assets/images/industry-telecom-networking-hero.jpg",
      alt: "Ein rackmontierter Netzwerk-Switch mit leuchtenden Port-LEDs und Glasfaser-Patchkabeln, die in das darüberliegende Panel geführt sind",
    },
    intro: {
      title: "Wir arbeiten für Ihre Lieferkette",
      paragraphs: [
        "Telekommunikationsinfrastruktur ist auf ein Jahrzehnt Betrieb ausgelegt und wird noch länger unterstützt. Betreiber können eine Karte nicht außer Betrieb nehmen, weil eine Komponente nicht mehr gefertigt wird; die Beschaffung von Legacy-Referenzen ist daher ebenso wichtig wie die aktueller Bauteile.",
        "Wir arbeiten mit Ihrer Stückliste, beziehen von Lieferanten, die wir qualifiziert haben, und prüfen jede Bestellung bei Ankunft in unserem Betrieb in Shenzhen, bevor sie an Sie versendet wird.",
      ],
      img: "/assets/images/gallery-06.jpg",
      alt: "Beschriftete Kartons mit elektronischen Komponenten auf Regalen im Lager von YIXINOU",
    },
    risk: {
      eyebrow: "Risikosteuerung",
      title: "Wir arbeiten für Ihre Lieferkette",
      items: [
        {
          icon: "sourcing",
          title: "Strategische Beschaffung",
          text: "Wir arbeiten mit Ihrer Stückliste und Ihren freigegebenen Referenzen und sagen es, wenn eine Referenz nicht beschaffbar ist, statt sie stillschweigend auszutauschen.",
        },
        {
          icon: "obsolete",
          title: "Überschussreduzierung",
          text: "Wir verfolgen Last-Time-Buy- und End-of-Life-Mitteilungen und suchen abgekündigte Referenzen, damit ein EOL-Bauteil Ihr Programm nicht stoppt.",
        },
        {
          icon: "inventory",
          title: "Kosteneinsparungen",
          text: "Line Cards haben einen überproportionalen Anteil an der Stückliste. Wir kalkulieren die Karte als Ganzes und benennen die Positionen, bei denen sich die Kosten tatsächlich bewegen lassen.",
        },
        {
          icon: "quality",
          title: "Produktlebenszyklus-Management",
          text: "Wir verfolgen Last-Time-Buy-Mitteilungen für die Referenzen in Ihrem Netz, damit eine Abkündigung ein Planungsthema bleibt und nicht zu einem Ausfall wird.",
        },
      ],
    },
    parts: {
      eyebrow: "Was wir beschaffen",
      title: "Komponenten für Telekommunikations- und Netzwerkgeräte",
      lead: "Die Kategorien, die wir am häufigsten für Telekommunikation, Netzwerke und optische Übertragung liefern.",
      items: [
        "HF-, optische und Schnittstellenkomponenten",
        "Leistungs- und Schaltungsschutz-Bauteile",
        "Filter, Steckverbinder und passive Bauelemente",
        "Speicher-, Logik- und Controller-ICs",
        "Module und Line-Card-Baugruppen",
        "Legacy-Referenzen für installierte Netze",
      ],
    },
    cta: {
      title: "Senden Sie uns Ihre Netzwerkplattform-Stückliste",
      text: "Nennen Sie uns die Plattform, die Artikelnummern und die Mengen, einschließlich Legacy-Line-Card-Referenzen. Wir bestätigen, was tatsächlich verfügbar ist.",
      primary: {
        label: "Kontakt aufnehmen",
        href: "/Contact",
      },
      secondary: {
        label: "Alle Produkte",
        href: "/all-products",
      },
    },
  },
};

export { groups, inspect, industries };
export default { groups, inspect, industries };
