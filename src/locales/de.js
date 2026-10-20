/*
 * German page-level TDK.
 *
 * This lives in the bundle rather than only in public/site-config.json. That file is refreshed
 * by the admin workbench's "publish to site" action, which a site publish does not run, so a
 * page title kept only there can sit stale on the CDN while the code around it is already new.
 * Carrying it with the locale makes the metadata travel with the page that renders it.
 *
 * Paths are locale-relative: '/' is the German home page, i.e. /de/ on the site.
 */
const de = {
  tdk: {
    "/": {
      title: "YIXINOU | Elektronische Komponenten aus Shenzhen",
      description: "Elektronische Komponenten aus Shenzhen: ICs, Speicher, Transistoren, Kondensatoren, Steckverbinder. Wareneingangsprüfung inklusive – Stückliste senden und Angebot erhalten.",
      keywords: "elektronische Komponenten, Bauteile kaufen, ICs, Speicher, Transistoren, Kondensatoren, Steckverbinder, Stückliste, Shenzhen, YIXINOU",
    },
    "/Contact": {
      title: "Kontakt | Stückliste senden | YIXINOU",
      description: "Senden Sie uns Ihre Stückliste oder Ihre Anfrage. Wir melden uns mit Verfügbarkeit, Preis und Lieferzeit – die ganze Position, nicht nur ein Bauteil.",
      keywords: "Kontakt, Stückliste, Angebot anfordern, Bauteile Anfrage, YIXINOU",
    },
    "/about-us": {
      title: "Über uns | YIXINOU Elektronikkomponenten",
      description: "YIXINOU ist ein Distributor für elektronische Komponenten in Shenzhen: über 8 Jahre Erfahrung, Kunden in 12 Branchen auf 5 Kontinenten. Lernen Sie unser Team und unsere Prüfprozesse kennen.",
      keywords: "über YIXINOU, Elektronikkomponenten Distributor, Shenzhen, Bauteile Lieferant",
    },
    "/all-products": {
      title: "Produkte | Bauteile nach Artikelnummer suchen | YIXINOU",
      description: "Suchen Sie Bauteile nach Artikelnummer, Marke, Gehäuse oder Spezifikation – etwa DDR5, BGA-96 oder 24 Gb. Jede Bauteilseite nennt die vollständigen Spezifikationen.",
      keywords: "Bauteile Suche, Artikelnummer, ICs, Speicher, DDR5, BGA-96, elektronische Komponenten, Stückliste",
    },
    "/privacy": {
      title: "Datenschutzerklärung | YIXINOU",
      description: "Wie YIXINOU personenbezogene Daten auf dieser Website verarbeitet, welche Cookies gesetzt werden und welche Rechte Sie haben.",
      keywords: "Datenschutz, Datenschutzerklärung, Cookies, DSGVO",
    },
    "/product/H5CGD8MGBDX021N": {
      title: "H5CGD8MGBDX021N - SK hynix DDR5 SDRAM 24Gb | YIXINOU",
      description: "Der H5CGD8MGBDX021N ist ein DDR5-SDRAM-Die mit 24 Gb und x8-Datenbus von SK hynix im 96-Ball-BGA-Gehäuse, 2800 MHz, 1,045 V bis 1,155 V. Angebot anfordern.",
      keywords: "H5CGD8MGBDX021N, SK hynix DDR5, DDR5 SDRAM 24Gb, BGA-96, DRAM Die, Speicher Bauteil",
    },
    "/quality": {
      title: "Qualität | Wareneingangsprüfung | YIXINOU",
      description: "Wareneingangsprüfung, Sichtprüfung sowie Verpackungs- und Kennzeichnungskontrolle in Shenzhen. Laboranalysen – Röntgen, XRF, Entkapselung, Lötbarkeit, Elektrik – führen unsere Partnerlabore durch.",
      keywords: "Qualitätssicherung, Wareneingangsprüfung, Bauteileprüfung, Röntgenprüfung, XRF, Lötbarkeit, Partnerlabor",
    },
    "/blogs800": {
      title: "Blog | Marktinformationen und Unternehmensnews | YIXINOU",
      description: "Brancheninformationen, Markttrends und Unternehmensnews aus dem Markt für elektronische Komponenten – Artikel zu Beschaffung, Qualitätsprüfung und Lieferketten.",
      keywords: "Elektronik-Blog, Bauteile-News, Marktinformationen, Beschaffung, Lieferkette, Shenzhen",
    },
    "/industries": {
      title: "Branchen | Bauteile für zwölf Branchen | YIXINOU",
      description: "Bauteile für zwölf Branchen – Luft- und Raumfahrt, Medizintechnik, Automotive, Industrieautomation und Telekommunikation. Senden Sie uns Ihre Stückliste.",
      keywords: "Branchen, Anwendungsbereiche, Luft- und Raumfahrt, Medizintechnik, Automotive, Industrieautomation, Telekommunikation",
    },
  },
};

export default de;
