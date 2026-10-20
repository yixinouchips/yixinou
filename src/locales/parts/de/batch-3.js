/*
 * German part records, batch 3.
 *
 * Translated field-by-field from _replaced/2026-10-02-scratch/parts-src/batch-3.json.
 * Part numbers, brand names, package codes, standard identifiers and every number,
 * unit and range are carried over unchanged; only the prose is German.
 */
export default {
  'ESP32-S3R8': {
    mpn: 'ESP32-S3R8',
    brand: 'Espressif',
    title: 'Wi-Fi- und Bluetooth-SoC mit Dual-Core-Xtensa-LX7 und 8MB PSRAM, QFN-56',
    category: 'Integrierte Schaltungen (ICs)',
    categoryHref: '/all-products',
    summary:
      'Der ESP32-S3R8 ist ein SoC von Espressif, das einen Dual-Core-32-Bit-Prozessor Xtensa LX7 mit bis zu 240MHz mit 2.4GHz Wi-Fi (IEEE 802.11 b/g/n) und Bluetooth 5 (LE) kombiniert. Das Suffix R8 kennzeichnet 8MB PSRAM, die zusammen mit 512KB SRAM auf dem Chip integriert sind. Der Baustein bietet 45 GPIO sowie Schnittstellen für USB OTG, TWAI (CAN) und LCD-Panels und unterstützt Flash und PSRAM wahlweise mit 1.8V oder 3.3V. Geliefert wird das Bauteil im QFN-56-Gehäuse mit 7x7mm.',
    img: '/assets/images/esp32-s3r8-package.jpg',
    alt: 'Ein 56-poliges QFN-Gehäuse, das Gehäuse des ESP32-S3R8',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gerätetyp', 'Wi-Fi- und Bluetooth-SoC mit integriertem MCU'],
      ['Prozessorkern', 'Dual-Core Xtensa 32-Bit LX7'],
      ['Maximaler Takt', '240MHz'],
      ['Speicher auf dem Chip', '512KB SRAM plus 8MB PSRAM (Suffix R8)'],
      ['Funk', '2.4GHz Wi-Fi (IEEE 802.11 b/g/n) und Bluetooth 5 (LE)'],
      ['Anzahl GPIO', '45'],
      ['Gehäuse', 'QFN-56, 7x7mm'],
      ['Spannung für Flash und PSRAM', '1.8V oder 3.3V'],
      ['Schnittstellen', 'USB OTG, TWAI(CAN)-Controller, LCD-Schnittstelle'],
      ['CAN-Norm', 'ISO 11898 über den TWAI-Controller'],
    ],
    about:
      'Der ESP32-S3R8 ist ein Wireless-System-on-Chip von Espressif auf Basis eines Dual-Core-32-Bit-Prozessors Xtensa LX7 mit bis zu 240MHz. Integriert sind 2.4GHz Wi-Fi nach IEEE 802.11 b/g/n, Bluetooth 5 (LE) und in der Variante R8 8MB PSRAM, dazu 512KB SRAM, 45 GPIO, USB OTG, ein TWAI(CAN)-Controller und eine LCD-Schnittstelle. Typische Einsatzbereiche sind Geräte zur KI-Sprachinteraktion, Smart-Home-Zentralen, Terminals zur Bilderkennung, HMI-Displays und Edge-Knoten für KI-Inferenz.',
    standards: [
      'Espressif ESP32-S3 Series Datasheet Version 2.2',
      'RoHS-konform',
      'Verpackungs- und ESD-Normen nach JEDEC JESD22',
      'Zuverlässigkeitsqualifikation nach JESD47 und Latch-up-Test nach JESD78',
      'REACH-konform',
      'Funkspezifikationen nach IEEE 802.11 b/g/n und Bluetooth 5 (LE)',
      'ESD-empfindliches Bauteil — nur unter ESD-geschützten Bedingungen handhaben',
    ],
    features: [
      'Dual-Core-32-Bit-Xtensa LX7 mit bis zu 240MHz',
      '8MB PSRAM auf dem Chip (Suffix R8) plus 512KB SRAM',
      '2.4GHz Wi-Fi (IEEE 802.11 b/g/n) und Bluetooth 5 (LE)',
      '45 GPIO verfügbar',
      'USB OTG, TWAI(CAN)-Controller und LCD-Schnittstelle',
      'Unterstützt Flash und PSRAM mit 1.8V oder 3.3V',
      'QFN-56-Gehäuse mit 7x7mm',
      'Unterstützt KI-Vektorbefehle und das Framework ESP-DL',
    ],
    applications: [
      'Geräte zur KI-Sprachinteraktion',
      'Smart-Home-Steuerzentralen',
      'Terminals zur Bilderkennung',
      'HMI-Displays',
      'Edge-Knoten für KI-Inferenz',
    ],
    faq: [
      {
        q: 'Wofür wird der ESP32-S3R8 eingesetzt?',
        a: 'Er wird in Geräten zur KI-Sprachinteraktion, Smart-Home-Steuerzentralen, Terminals zur Bilderkennung, HMI-Displays und Edge-Knoten für KI-Inferenz eingesetzt. Der Dual-Core-Prozessor LX7, 8MB PSRAM sowie die Bild- und LCD-Schnittstellen ermöglichen es einem einzigen Chip, Funkverbindung, Bedienoberfläche und einfache Inferenz direkt auf dem Gerät zu übernehmen.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines ESP32-S3R8?',
        a: 'Einkäufer prüfen, ob das Suffix R8 mit 8MB PSRAM genau die Variante ist, die das Design benötigt, denn der Preisunterschied zu Bauteilen ohne PSRAM ist erheblich. Ebenso prüfen sie die Unterstützung von KI-Vektorbefehlen und des Frameworks ESP-DL, planen Antennendesign und Funkzulassung, entscheiden zwischen dem reinen SoC und einem Modul ESP32-S3-WROOM und bewerten das Thermik- und Stromverhalten eines Designs mit großem PSRAM sowie Preis und Verfügbarkeit.',
      },
      {
        q: 'Wie prüft YIXINOU einen ESP32-S3R8 vor dem Versand?',
        a: 'Chargen im QFN-56 (7x7mm) werden vor dem Versand geprüft; dabei werden Gehäusekörper, Pinanzahl und Kennzeichnung mit der Bestellung abgeglichen und das Suffix R8 bestätigt. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Chargenfotos sind mit den Versandunterlagen erhältlich.',
      },
    ],
  },

  'ESP8266EX': {
    mpn: 'ESP8266EX',
    brand: 'Espressif',
    title: 'Hochintegriertes Wi-Fi-SoC mit Tensilica-L106-Kern im QFN-32',
    category: 'Integrierte Schaltungen (ICs)',
    categoryHref: '/all-products',
    summary:
      'Der ESP8266EX ist ein Wi-Fi-System-on-Chip von Espressif auf Basis eines 32-Bit-RISC-Kerns Tensilica L106 mit bis zu 160MHz und integriertem 2.4GHz Wi-Fi nach IEEE 802.11 b/g/n. Er kommt im QFN-32-Gehäuse mit 5x5mm, arbeitet von 2.5V bis 3.6V und ist für -40 bis +85°C spezifiziert, wobei einige Bestellvarianten bis 125°C angegeben sind. Der Chip enthält SRAM und eine SPI-Flash-Schnittstelle und unterstützt externen SPI-Flash bis 16MB. Das Datenblatt vermerkt, dass der Bereich der VDDPST-Versorgungsdomäne von 1.8 bis 3.3V auf 1.8 bis 3.6V aktualisiert wurde; der Baustein ist als nicht für Neuentwicklungen empfohlen gekennzeichnet, vorgeschlagen wird stattdessen der ESP8684.',
    img: '/assets/images/esp8266ex-package.jpg',
    alt: 'Ein 32-poliges QFN-Gehäuse, das Gehäuse des ESP8266EX',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gerätetyp', 'Wi-Fi-SoC mit integriertem MCU'],
      ['Prozessorkern', 'Tensilica L106 32-Bit RISC'],
      ['Maximaler Takt', '160MHz'],
      ['Funk', '2.4GHz Wi-Fi (IEEE 802.11 b/g/n)'],
      ['Speicher auf dem Chip', 'SRAM plus SPI-Flash-Schnittstelle'],
      ['Externer Flash-Speicher', 'SPI-Flash bis 16MB (extern)'],
      ['Gehäuse', 'QFN-32, 5x5mm'],
      ['Versorgungsspannung', '2.5V bis 3.6V'],
      ['Betriebstemperatur', '-40°C bis +85°C, einige Varianten bis +125°C angegeben'],
      ['Lebenszyklusstatus', 'Nicht für Neuentwicklungen empfohlen; ESP8684 vorgeschlagen'],
    ],
    about:
      'Der ESP8266EX ist ein hochintegriertes Wi-Fi-SoC von Espressif, das einen 32-Bit-RISC-Kern Tensilica L106 mit bis zu 160MHz zusammen mit 2.4GHz Wi-Fi nach IEEE 802.11 b/g/n enthält. Es kommt im QFN-32-Gehäuse mit 5x5mm, arbeitet an einer Versorgung von 2.5V bis 3.6V und ist in den Standardversionen für -40 bis +85°C spezifiziert. Der Chip bietet SRAM und eine SPI-Flash-Schnittstelle und kann externen SPI-Flash mit bis zu 16MB ansteuern. Typische Einsatzbereiche sind Smart-Home-Geräte, intelligente Steckdosen, Sensor-Gateways, Wi-Fi-Module wie ESP-01 und ESP-12 sowie industrielle IoT-Knoten.',
    standards: [
      'Espressif ESP8266EX Datasheet Version 7.1',
      'RoHS-konform',
      'Verpackungs- und ESD-Normen nach JEDEC',
      'REACH-konform',
      'IEEE 802.11 b/g/n und Zertifizierungsrahmen der Wi-Fi Alliance',
      'ESD-empfindliches Bauteil — nur unter ESD-geschützten Bedingungen handhaben',
    ],
    features: [
      'Tensilica-L106-32-Bit-RISC-Kern mit bis zu 160MHz',
      'Integriertes 2.4GHz Wi-Fi nach IEEE 802.11 b/g/n',
      'SRAM auf dem Chip plus SPI-Flash-Schnittstelle',
      'Unterstützt externen SPI-Flash bis 16MB',
      'Versorgung von 2.5V bis 3.6V',
      'Für -40 bis +85°C spezifiziert, einige Varianten bis +125°C angegeben',
      'QFN-32-Gehäuse mit 5x5mm',
      'Hinweis im Datenblatt: VDDPST-Versorgungsdomäne von 1.8 bis 3.3V auf 1.8 bis 3.6V aktualisiert',
    ],
    applications: [
      'Smart-Home-Geräte',
      'Intelligente Steckdosen',
      'Sensor-Gateways',
      'Wi-Fi-Module wie ESP-01 und ESP-12',
      'Industrielle IoT-Knoten',
    ],
    faq: [
      {
        q: 'Wofür wird der ESP8266EX eingesetzt?',
        a: 'Er wird in Smart-Home-Produkten, intelligenten Steckdosen, Sensor-Gateways, Wi-Fi-Modulen wie ESP-01 und ESP-12 sowie industriellen IoT-Knoten eingesetzt. Der L106-Kern und der integrierte Wi-Fi-Funk übernehmen sowohl den Anwendungscode als auch die Netzwerkanbindung, während externer SPI-Flash mit bis zu 16MB die Firmware speichert.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines ESP8266EX?',
        a: 'Einkäufer klären, welche Kapazität des externen SPI-Flash benötigt wird, da der ESP8266EX keinen internen Flash besitzt und mit einem Flash-Baustein kombiniert werden muss. Sie prüfen außerdem Funkzulassungen wie CE, FCC und SRRC zusammen mit der Modulplanung, vergewissern sich, dass es sich um Originalware von Espressif und nicht um geklontes Modulmaterial handelt, entscheiden zwischen dem nackten Chip und einem Modul ESP-WROOM und klären, ob das Design stattdessen auf die Serie ESP32-C wechseln sollte. Preis und Mindestbestellmenge werden zuletzt geprüft.',
      },
      {
        q: 'Wie prüft YIXINOU einen ESP8266EX vor dem Versand?',
        a: 'Chargen im QFN-32 (5x5mm) werden vor dem Versand über Kennzeichnung, Pinanzahl und Gehäuseprüfung gegen die Bestellung verifiziert. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Prüfaufzeichnungen zur versandten Charge werden aufbewahrt und auf Anfrage bereitgestellt.',
      },
    ],
  },

  'FS100R12KT4G': {
    mpn: 'FS100R12KT4G',
    brand: 'Infineon',
    title: '1200V-/100A-IGBT-Modul im EconoPACK 2, Sixpack-Topologie',
    category: 'Module',
    categoryHref: '/all-products',
    summary:
      'Das FS100R12KT4G ist ein IGBT-Leistungsmodul von Infineon mit 1200V und 100A in Sixpack-Topologie als dreiphasige Vollbrücke; für diesen Bestellcode wird zusätzlich die PIM-Ausführung mit drei Einheiten angegeben. Es verwendet die IGBT4-Technologie in Trench-/Fieldstop-Ausführung im Gehäuse EconoPACK 2 und ist für den Betrieb von -40 bis +150°C spezifiziert. Das Modul ist nach IEC 60747 ausgelegt und RoHS-konform. Es eignet sich für Industrieumrichter, Motorantriebe, Photovoltaik-Wechselrichter, USV-Anlagen, Servoantriebe sowie Aufzugs- und Hebetechnik.',
    img: '/assets/images/fs100r12kt4g-package.jpg',
    alt: 'Ein EconoPACK-2-Gehäuse, das Gehäuse des FS100R12KT4G',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gerätetyp', 'IGBT-Leistungsmodul'],
      ['Kollektor-Emitter-Spannung', '1200V'],
      ['Strombelastbarkeit', '100A'],
      ['Schaltungstopologie', 'Sixpack-Dreiphasen-Vollbrücke; zusätzlich PIM-Topologie mit drei Einheiten angegeben'],
      ['IGBT-Technologie', 'Trench/Fieldstop IGBT4'],
      ['Schalter pro Modul', 'Sechs'],
      ['Gehäuse', 'EconoPACK 2'],
      ['Betriebstemperatur', '-40°C bis +150°C'],
      ['Normen', 'IEC 60747'],
      ['RoHS', 'Konform'],
    ],
    about:
      'Das FS100R12KT4G ist ein IGBT-Modul mit 1200V und 100A von Infineon auf Basis der IGBT4-Technologie in Trench-/Fieldstop-Ausführung, geliefert im Gehäuse EconoPACK 2. Es wird als dreiphasige Vollbrücke in Sixpack-Konfiguration angeboten, wobei für diesen Bestellcode zusätzlich eine PIM-Topologie mit drei Einheiten aufgeführt ist, und ist für den Betrieb von -40 bis +150°C spezifiziert. Das Modul folgt IEC 60747 und ist RoHS-konform. Typische Anwendungen sind Industriefrequenzumrichter, Motorantriebe, Photovoltaik-Wechselrichter, USV-Anlagen, Servoantriebe sowie Aufzugs- und Hebetechnik.',
    standards: [
      'IEC 60747',
      'RoHS-konform',
      'ESD-empfindliches Bauteil — nur unter ESD-geschützten Bedingungen handhaben',
    ],
    features: [
      'Kollektor-Emitter-Spannung 1200V bei 100A Strombelastbarkeit',
      'IGBT4-Technologie in Trench-/Fieldstop-Ausführung',
      'Sixpack-Topologie als dreiphasige Vollbrücke',
      'Gehäuse EconoPACK 2',
      'Betriebsbereich von -40 bis +150°C',
      'Ausgelegt nach IEC 60747 und RoHS-konform',
      'Geeignet für leistungsstarke Motorantriebs- und Wechselrichterdesigns',
    ],
    applications: [
      'Industriefrequenzumrichter',
      'Motorantriebe',
      'Photovoltaik-Wechselrichter',
      'USV-Anlagen',
      'Servoantriebe',
      'Aufzugs- und Hebetechnik',
    ],
    faq: [
      {
        q: 'Wofür wird der FS100R12KT4G eingesetzt?',
        a: 'Er wird in Industriefrequenzumrichtern, Motorantrieben, Photovoltaik-Wechselrichtern, USV-Anlagen, Servoantrieben sowie in der Aufzugs- und Hebetechnik eingesetzt. Die Sixpack-Topologie bildet eine vollständige dreiphasige Wechselrichterstufe, und die Auslegung mit 1200V / 100A deckt industrielle Antriebe mittlerer Leistung ab.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines FS100R12KT4G?',
        a: 'Einkäufer stimmen zuerst die Schaltungstopologie ab, denn ein PIM-, Sixpack- oder Halbbrückenmodul ist nicht gegen ein anderes Schaltungskonzept austauschbar. Sie bewerten außerdem das Thermikkonzept mit Grundplatte, Wärmeleitpaste und Wärmewiderstand des Kühlkörpers, die die Lebensdauer des Moduls bestimmen, und prüfen die Schaltverluste im Verhältnis zur Wahl der Gate-Widerstände sowie die Stromaufteilung bei parallelen Modulen. Da generalüberholte und aus Altgeräten gewonnene Infineon-IGBT-Module verbreitet sind, verifizieren sie zudem die Echtheit der Bauteile und wägen den hohen Preis gegen die langen Lieferzeiten ab.',
      },
      {
        q: 'Wie prüft YIXINOU ein FS100R12KT4G vor dem Versand?',
        a: 'Module im EconoPACK 2 werden vor dem Versand geprüft; dabei werden Anschlusszustand, Grundplatte, Befestigungslöcher und Kennzeichnungen gegen die Bestellung verifiziert. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fotos des tatsächlichen Moduls werden mit den Versandunterlagen bereitgestellt.',
      },
    ],
  },

  'H54G68CYRBX248': {
    mpn: 'H54G68CYRBX248',
    brand: 'SK hynix',
    title: 'LPDDR4X-SDRAM-Die mit 64Gb (8GB) und 32-Bit-Bus im BGA-200',
    category: 'Integrierte Schaltungen (ICs) / Integrierte Schaltungen (ICs) / Speicherkomponenten / RAM / LPDDR',
    categoryHref: '/all-products',
    summary:
      'Der H54G68CYRBX248 ist ein LPDDR4X-SDRAM-Baustein von SK hynix mit 64Gb (8GB) Dichte in 2Gx32-Organisation und einem 32 Bit breiten Datenbus. Er arbeitet mit 4266Mbps bei VDD1 1.8V, VDD2 1.1V und VDDQ 0.6V und wird im 200-Ball-BGA-Gehäuse geliefert. Die referenzierten Daten nennen einen Betriebstemperaturbereich von 0 bis +85°C. Eingesetzt wird er in Flaggschiff-Smartphones, Tablets, Chromebooks, Cockpit-Domaincontrollern im Automotive-Bereich sowie in Edge-KI- und AR/VR-Geräten.',
    img: '/assets/images/h54g68cyrbx248-bga-200.jpg',
    alt: 'Ein 200-Ball-BGA-Gehäuse, das Gehäuse des H54G68CYRBX248',
    imageNote:
      'Illustrative Gehäuseabbildung. Fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gerätetyp', 'LPDDR4X SDRAM'],
      ['Dichte', '64Gb (8GB), 2Gx32-Organisation'],
      ['Datenrate', '4266Mbps'],
      ['Busbreite', '32 Bit (x32)'],
      ['Gehäuse', 'BGA-200'],
      ['Montageart', 'Oberflächenmontage'],
      ['Versorgungsspannung', 'VDD1 1.8V, VDD2 1.1V, VDDQ 0.6V'],
      ['Serie', 'H54G'],
      ['Betriebstemperatur', '0°C bis +85°C'],
      ['Referenznorm', 'JESD209-4'],
    ],
    about:
      'Der H54G68CYRBX248 ist ein LPDDR4X-SDRAM-Die mit 64Gb (8GB) von SK hynix in 2Gx32-Organisation mit einem 32 Bit breiten Datenbus. Er arbeitet mit 4266Mbps bei VDD1 1.8V, VDD2 1.1V und VDDQ 0.6V, folgt der LPDDR4X-Referenznorm JESD209-4 und kommt im 200-Ball-BGA-Gehäuse mit Nennbereich von 0 bis +85°C. Typische Einsatzbereiche sind Flaggschiff-Smartphones, Tablets, Chromebooks, Cockpit-Domaincontroller im Automotive-Bereich sowie Edge-KI- und AR/VR-Geräte.',
    standards: [
      'JESD209-4',
      'ESD-empfindliches Bauteil — nur unter ESD-geschützten Bedingungen handhaben',
    ],
    features: [
      'LPDDR4X-SDRAM mit 64Gb (8GB) Dichte',
      '2Gx32-Organisation an einem 32 Bit breiten Datenbus',
      'Datenrate 4266Mbps',
      'Versorgungsschienen VDD1 1.8V, VDD2 1.1V und VDDQ 0.6V',
      '200-Ball-BGA-Gehäuse',
      'Betriebsbereich von 0 bis +85°C',
      'Ausgelegt nach der LPDDR4X-Referenznorm JESD209-4',
    ],
    applications: [
      'Flaggschiff-Smartphones',
      'Tablets',
      'Chromebooks',
      'Cockpit-Domaincontroller im Automotive-Bereich',
      'Edge-KI- und AR/VR-Geräte',
    ],
    faq: [
      {
        q: 'Wofür wird der H54G68CYRBX248 eingesetzt?',
        a: 'Er wird in Flaggschiff-Smartphones, Tablets, Chromebooks, Cockpit-Domaincontrollern im Automotive-Bereich sowie in Edge-KI- und AR/VR-Geräten eingesetzt. Ein einzelnes Die mit 64Gb (8GB) bietet hohe Kapazität in einem Gehäuse, und die LPDDR4X-Schnittstelle mit 4266Mbps liefert die Speicherbandbreite, die diese Plattformen erwarten.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines H54G68CYRBX248?',
        a: 'Einkäufer prüfen, ob das Host-SoC die Kapazität eines einzelnen 8GB-Dies unterstützt, denn die hohe Kapazität in einem Gehäuse hängt an der Grenze des Speichercontrollers. Sie gleichen die Qualified Vendor List der Plattform für Chromebook- und Handy-Designs ab, vergewissern sich, dass es sich um Original-Dies und nicht um herabgestuftes Material handelt, da diese Artikelnummer auch als White-Label-Ware aufgetreten ist, und bewerten Thermik und Zuverlässigkeit des gestapelten Gehäuses, die Chargenkonsistenz und die langfristige Verfügbarkeit.',
      },
      {
        q: 'Wie prüft YIXINOU einen H54G68CYRBX248 vor dem Versand?',
        a: 'Chargen im BGA-200 werden vor dem Versand verifiziert; dabei werden Ballanzahl, Gehäuseabmessungen, Kennzeichnung und Datumscode gegen die Bestellung abgeglichen. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Die Ergebnisse werden zur Charge abgelegt und auf Anfrage mit der Lieferung bereitgestellt.',
      },
    ],
  },

  'H5CG46MEBDX015N': {
    mpn: 'H5CG46MEBDX015N',
    brand: 'SK hynix',
    title: 'DDR5-SDRAM-Die mit 16Gb und 4800Mbps im FCBGA-106',
    category: 'Integrierte Schaltungen (ICs) / Integrierte Schaltungen (ICs) / Speicherkomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'Der H5CG46MEBDX015N ist ein DDR5-SDRAM-Baustein von SK hynix mit 16Gb Dichte und einer Datenrate von 4800Mbps. Er arbeitet an einer Versorgung von 1.045V bis 1.155V mit einer 1.8V-VPP-Schiene und wird im 106-Ball-FCBGA-Gehäuse geliefert, das auf der Platinenoberfläche montiert wird. Der Baustein nutzt eine synchrone Schnittstelle und ist von 0 bis +95°C spezifiziert. Er ist nach der DDR5-Referenznorm JESD79-5 ausgelegt und wird in Server- und Workstation-Speichermodulen, Industriecomputern, Edge-Servern und Rechenzentrumsausrüstung eingesetzt.',
    img: '/assets/images/h5cg46mebdx015n-fcbga-106.jpg',
    alt: 'Ein 106-Ball-FCBGA-Gehäuse, das Gehäuse des H5CG46MEBDX015N',
    imageNote:
      'Illustrative Gehäuseabbildung. Fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gerätetyp', 'DDR5 SDRAM, synchron'],
      ['Dichte', '16Gb'],
      ['Datenrate', '4800Mbps'],
      ['Gehäuse', 'FCBGA-106'],
      ['Pinanzahl', '106'],
      ['Montageart', 'Oberflächenmontage'],
      ['Versorgungsspannung', '1.045V bis 1.155V; VPP 1.8V'],
      ['Serie', 'H5CG'],
      ['Betriebstemperatur', '0°C bis +95°C'],
      ['Referenznorm', 'JESD79-5'],
    ],
    about:
      'Der H5CG46MEBDX015N ist ein DDR5-SDRAM-Die mit 16Gb von SK hynix im 106-Ball-FCBGA-Gehäuse. Er arbeitet mit 4800Mbps, nutzt eine synchrone Schnittstelle mit einer Versorgung von 1.045V bis 1.155V und einer 1.8V-VPP-Schiene und ist über 0 bis +95°C spezifiziert. Der Baustein ist nach der DDR5-Referenznorm JESD79-5 ausgelegt. Typische Anwendungen sind DDR5-Speichermodule für Server und Workstations, Industriecomputer, Edge-Server und Rechenzentrumsausrüstung.',
    standards: [
      'JESD79-5',
      'ESD-empfindliches Bauteil — nur unter ESD-geschützten Bedingungen handhaben',
    ],
    features: [
      'DDR5-SDRAM mit 16Gb Dichte',
      'Datenrate 4800Mbps',
      '106-Ball-FCBGA-Gehäuse',
      'Versorgung von 1.045V bis 1.155V mit 1.8V-VPP-Schiene',
      'Synchrone Schnittstelle',
      'Betriebsbereich von 0 bis +95°C',
      'Ausgelegt nach der DDR5-Referenznorm JESD79-5',
    ],
    applications: [
      'DDR5-Speichermodule für Server und Workstations',
      'Industriecomputer',
      'Edge-Server',
      'Rechenzentrumsausrüstung',
    ],
    faq: [
      {
        q: 'Wofür wird der H5CG46MEBDX015N eingesetzt?',
        a: 'Er wird auf DDR5-Speichermodulen für Server und Workstations sowie in Industriecomputern, Edge-Servern und Rechenzentrumsausrüstung eingesetzt. Die Dichte von 16Gb bei 4800Mbps liefert die Kapazität und Bandbreite, die Plattformspeicher benötigt — von Servermodulen bis zu kompakten Edge-Systemen.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines H5CG46MEBDX015N?',
        a: 'Einkäufer prüfen die Plattformkompatibilität, denn ein Baustein mit 4800Mbps läuft auf einer Plattform mit 5600Mbps nur mit reduzierter Geschwindigkeit. Außerdem verifizieren sie, dass es sich um Original-Dies und nicht um herabgestuftes Material handelt, klären das Zusammenspiel von On-Die-ECC mit dem ECC-Schema des Systems und bewerten Plattformqualifikation, Chargenkonsistenz, Preis und Lieferzeit.',
      },
      {
        q: 'Wie prüft YIXINOU einen H5CG46MEBDX015N vor dem Versand?',
        a: 'Chargen im FCBGA-106 werden vor dem Versand geprüft; dabei werden Ballanzahl, Kennzeichnung, Gehäusezustand und Datumscode gegen die Bestellung verifiziert. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Prüfaufzeichnungen gehen mit der Lieferung mit, Chargenfotos sind auf Anfrage erhältlich.',
      },
    ],
  },

  'H5CG48MEBDX014N': {
    mpn: 'H5CG48MEBDX014N',
    brand: 'SK hynix',
    title: 'DDR5-SDRAM-Die mit 16Gb und x8-Datenbus im 78-Ball-FCBGA-Gehäuse',
    category: 'Integrierte Schaltungen (ICs) / Integrierte Schaltungen (ICs) / Speicherkomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'Der H5CG48MEBDX014N ist ein DDR5-SDRAM-Die von SK Hynix mit 16Gb Dichte und x8-Datenbus, geliefert im 78-Ball-FCBGA-Gehäuse für die Oberflächenmontage. Er trägt die Geschwindigkeitsklasse 4800 MHz und arbeitet an einer 1.1 V Schiene für VDD/VDDQ mit separater 1.8 V VPP-Versorgung, innerhalb eines Versorgungsfensters von 1.045 V bis 1.155 V. Der Nennbetriebsbereich ist 0 °C bis 85 °C, das Design folgt der DDR5-Norm JEDEC JESD79-5. Typische Einsatzbereiche sind Server-RDIMM-Module, Enterprise-Storage, Industriecomputer sowie Server für KI-Training und -Inferenz.',
    img: '/assets/images/h5cg48mebdx014n-fcbga-78.jpg',
    alt: 'Ein 78-Ball-FCBGA-Gehäuse, das Gehäuse des H5CG48MEBDX014N',
    imageNote:
      'Illustrative Gehäuseabbildung. Fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'FCBGA'],
      ['Pinanzahl', '78'],
      ['Montageart', 'Oberflächenmontage'],
      ['Speichergröße', '16Gb'],
      ['Speichertechnologie', 'DDR5 SDRAM'],
      ['Datenbusbreite', 'x8'],
      ['Geschwindigkeitsklasse', '4800 MHz'],
      ['Versorgungsspannung', '1.1 V (VDD/VDDQ), 1.8 V (VPP)'],
      ['Versorgungsfenster', '1.045 V bis 1.155 V'],
      ['Betriebstemperatur', '0 °C bis 85 °C'],
    ],
    about:
      'Der H5CG48MEBDX014N ist ein DDR5-SDRAM-Baustein von SK Hynix mit 16Gb Dichte in x8-Organisation, verpackt als 78-Ball-FCBGA für die Oberflächenmontage. Er ist für die Geschwindigkeitsklasse 4800 MHz spezifiziert, für eine 1.1 V Versorgung von VDD/VDDQ mit einer 1.8 V VPP-Schiene und für ein Versorgungsfenster von 1.045 V bis 1.155 V über einen Betriebsbereich von 0 °C bis 85 °C. Das Bauteil folgt der DDR5-Norm JEDEC JESD79-5. Es ist für Server-RDIMM-Speichermodule, Enterprise-Storage-Systeme, Industriecomputer und Server für KI-Training und -Inferenz vorgesehen, als 16Gb-x8-DDR5-Die je Modul-Rank.',
    standards: [
      'JEDEC JESD79-5',
    ],
    features: [
      'DDR5-SDRAM mit 16Gb Dichte und x8-Datenbus',
      'Geschwindigkeitsklasse 4800 MHz für DDR5-Modulaufbauten',
      '1.1 V Versorgung für VDD/VDDQ mit separater 1.8 V VPP-Schiene',
      'Versorgungsfenster von 1.045 V bis 1.155 V',
      '78-Ball-FCBGA-Gehäuse für die Oberflächenmontage',
      'Betriebsbereich von 0 °C bis 85 °C',
      'Ausgelegt nach der DDR5-Norm JEDEC JESD79-5',
    ],
    applications: [
      'Server-RDIMM-Speichermodule',
      'Enterprise-Storage-Systeme',
      'Industriecomputer',
      'Server für KI-Training und -Inferenz',
    ],
    faq: [
      {
        q: 'Wofür wird der H5CG48MEBDX014N eingesetzt?',
        a: 'Er ist ein 16Gb-x8-DDR5-SDRAM-Die und wird in Server-RDIMM-Speichermodulen, Enterprise-Storage-Systemen, Industriecomputern sowie in Servern für KI-Training und -Inferenz eingesetzt, wo die Geschwindigkeitsklasse 4800 MHz eines DDR5-Dies und eine 1.1 V Schiene gefordert sind.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines H5CG48MEBDX014N?',
        a: 'Einkäufer klären üblicherweise, wie sich die Geschwindigkeitsklassen 4800 und 5600 substituieren oder mischen lassen, denn gemischt bestückte DDR5-Bänke fallen auf die langsamere Rate zurück; ob das Die original oder ein herabgestuftes Bauteil ist; die Unterstützung von On-Die-ECC; die Kompatibilitätszertifizierung mit dem Ziel-Mainboard oder der CPU; die Preisvolatilität samt Preisbindung; und die Konsistenz von Charge zu Charge.',
      },
      {
        q: 'Wie prüft YIXINOU einen H5CG48MEBDX014N vor dem Versand?',
        a: 'Für jede Charge im 78-Ball-FCBGA gleichen wir Kennzeichnung, Verpackung und Chargencode gegen die Bestellung ab und bestätigen die Menge vor dem Versand. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fragen Sie uns vor der Auftragserteilung nach einem Foto der tatsächlichen Charge.',
      },
    ],
  },

  'H5TC4G63EFR-PBA': {
    mpn: 'H5TC4G63EFR-PBA',
    brand: 'SK hynix',
    title: 'DDR3L-SDRAM, 4Gb x16, 1600 MHz im 96-Ball-FBGA-Gehäuse',
    category: 'Integrierte Schaltungen (ICs) / Integrierte Schaltungen (ICs) / Speicherkomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'Der H5TC4G63EFR-PBA ist ein DDR3L-SDRAM von SK Hynix mit 4Gb Dichte und x16-Organisation, geliefert im 96-Ball-FBGA-Gehäuse für die Oberflächenmontage. Er läuft in der Geschwindigkeitsklasse 1600 MHz (DDR3-1600, CL11) an einer 1.35 V Versorgung, die auch in 1.5 V DDR3-Designs verwendbar ist, innerhalb eines Versorgungsfensters von 1.283 V bis 1.45 V. Der Datensatz der Vergleichsseite bewertet das Bauteil mit -40 °C bis 105 °C, das Design folgt der Norm JEDEC JESD79-3. Eingesetzt wird es auf Industriesteuerungsplatinen, in Netzwerkgeräten, Set-Top-Boxen, Werbedisplays, In-Car-Entertainment-Systemen und DDR3-Plattformspeichermodulen.',
    img: '/assets/images/h5tc4g63efr-pba-fbga-96.jpg',
    alt: 'Ein 96-Ball-FBGA-Gehäuse, das Gehäuse des H5TC4G63EFR-PBA',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'FBGA'],
      ['Pinanzahl', '96'],
      ['Montageart', 'Oberflächenmontage'],
      ['Speichergröße', '4Gb'],
      ['Speichertechnologie', 'DDR3L SDRAM'],
      ['Datenbusbreite', 'x16'],
      ['Geschwindigkeitsklasse', '1600 MHz (DDR3-1600, CL11)'],
      ['Versorgungsspannung', '1.35 V (1.5 V kompatibel)'],
      ['Versorgungsfenster', '1.283 V bis 1.45 V'],
      ['Betriebstemperatur', '-40 °C bis 105 °C'],
    ],
    about:
      'Der H5TC4G63EFR-PBA ist ein DDR3L-SDRAM-Baustein von SK Hynix mit 4Gb Dichte in x16-Organisation, verpackt als 96-Ball-FBGA für die Oberflächenmontage. Er ist für die Geschwindigkeitsklasse 1600 MHz (DDR3-1600, CL11) mit einer 1.35 V Versorgung spezifiziert, die auch in 1.5 V DDR3-Designs arbeitet, sowie für ein Versorgungsfenster von 1.283 V bis 1.45 V. Der Datensatz der Vergleichsseite nennt einen Betriebsbereich von -40 °C bis 105 °C, und das Bauteil folgt der Norm JEDEC JESD79-3. Es wird auf Industriesteuerungsplatinen, in Netzwerkgeräten, Set-Top-Boxen, Werbedisplays, In-Car-Entertainment-Systemen und DDR3-Plattformspeichermodulen eingesetzt.',
    standards: [
      'JEDEC JESD79-3',
    ],
    features: [
      'DDR3L-SDRAM mit 4Gb Dichte und x16-Datenbus',
      'Geschwindigkeitsklasse 1600 MHz, DDR3-1600 mit CL11-Latenz',
      '1.35 V Betrieb mit 1.5 V DDR3-Kompatibilität',
      'Versorgungsfenster von 1.283 V bis 1.45 V',
      '96-Ball-FBGA-Gehäuse für die Oberflächenmontage',
      'Betriebsbereich von -40 °C bis 105 °C',
      'Ausgelegt nach der Norm JEDEC JESD79-3',
    ],
    applications: [
      'Industriesteuerungsplatinen',
      'Netzwerkgeräte',
      'Set-Top-Boxen',
      'Werbedisplays',
      'In-Car-Entertainment-Systeme',
      'DDR3-Plattformspeichermodule',
    ],
    faq: [
      {
        q: 'Wofür wird der H5TC4G63EFR-PBA eingesetzt?',
        a: 'Er ist ein 4Gb-x16-DDR3L-SDRAM-Die und wird auf Industriesteuerungsplatinen, in Netzwerkgeräten, Set-Top-Boxen, Werbedisplays, In-Car-Entertainment-Systemen und DDR3-Plattformspeichermodulen eingesetzt, wo ein DDR3L-Die mit 1600 MHz benötigt wird.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines H5TC4G63EFR-PBA?',
        a: 'Einkäufer prüfen die Kompatibilität und das Mischrisiko zwischen den 1.35 V DDR3L- und den 1.5 V DDR3-Schienen; ob das Bauteil das End-of-Life erreicht hat und welcher Ersatz verfügbar ist; den Preisabstand zwischen Original- und White-Label-Dies; die Unterschiede bei Bandbreite und Leitungslayout zwischen x16- und x8-Organisationen; ob eine industrielle oder eine kommerzielle Temperaturklasse benötigt wird; und die Konsistenz von Charge zu Charge.',
      },
      {
        q: 'Wie prüft YIXINOU einen H5TC4G63EFR-PBA vor dem Versand?',
        a: 'Jede Charge im 96-Ball-FBGA wird vor dem Versand auf Kennzeichnung, Chargencode und Menge gegen die Bestellung geprüft. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fotos der tatsächlichen Charge sind auf Anfrage erhältlich.',
      },
    ],
  },

  'H9HCNNNBKMMLXR-NEE': {
    mpn: 'H9HCNNNBKMMLXR-NEE',
    brand: 'SK hynix',
    title: 'LPDDR4X-SDRAM 16Gb x32 im 200-Ball-FBGA-Gehäuse',
    category: 'Integrierte Schaltungen (ICs) / Integrierte Schaltungen (ICs) / Speicherkomponenten / RAM / LPDDR',
    categoryHref: '/all-products',
    summary:
      'Der H9HCNNNBKMMLXR-NEE ist ein LPDDR4X-SDRAM von SK Hynix mit 16Gb Dichte und x32-Datenbus, geliefert im 200-Ball-FBGA-Gehäuse für die Oberflächenmontage. Er arbeitet mit einem Takt von 2.133 GHz, was einer Datenrate von 4266 Mbps entspricht, an einer VDD1-Schiene von 1.7 V bis 1.95 V und einer VDD2-Schiene von 1.06 V bis 1.17 V. Der Nennbetriebsbereich ist -25 °C bis 85 °C, das Design folgt der Norm JEDEC JESD209-4. Eingesetzt wird er in Flaggschiff- und gehobenen Mittelklasse-Smartphones, Tablets, Automotive-Cockpits, AR- und VR-Geräten sowie Edge-KI-Boxen.',
    img: '/assets/images/h9hcnnnbkmmlxr-nee-fbga-200.jpg',
    alt: 'Ein 200-Ball-FBGA-Gehäuse, das Gehäuse des H9HCNNNBKMMLXR-NEE',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'FBGA'],
      ['Pinanzahl', '200'],
      ['Montageart', 'Oberflächenmontage'],
      ['Speichergröße', '16Gb'],
      ['Speichertechnologie', 'LPDDR4X SDRAM'],
      ['Datenbusbreite', 'x32'],
      ['Taktfrequenz', '2.133 GHz (4266 Mbps)'],
      ['Versorgungsspannung', '1.7 V bis 1.95 V (VDD1), 1.06 V bis 1.17 V (VDD2)'],
      ['Serie', 'H9HCNNN'],
      ['Betriebstemperatur', '-25 °C bis 85 °C'],
    ],
    about:
      'Der H9HCNNNBKMMLXR-NEE ist ein LPDDR4X-SDRAM-Baustein von SK Hynix mit 16Gb Dichte in x32-Organisation, verpackt als 200-Ball-FBGA für die Oberflächenmontage. Er läuft mit einem Takt von 2.133 GHz, entsprechend einer Datenrate von 4266 Mbps, an einer VDD1-Schiene von 1.7 V bis 1.95 V und einer VDD2-Schiene von 1.06 V bis 1.17 V. Der Datensatz der Vergleichsseite nennt einen Betriebsbereich von -25 °C bis 85 °C, und das Bauteil folgt der Norm JEDEC JESD209-4. Es ist für Flaggschiff- und gehobene Mittelklasse-Smartphones, Tablets, Automotive-Cockpits, AR- und VR-Geräte sowie Edge-KI-Boxen mit einem x32-LPDDR4X-Speicherkanal vorgesehen.',
    standards: [
      'JEDEC JESD209-4',
    ],
    features: [
      'LPDDR4X-SDRAM mit 16Gb Dichte und x32-Datenbus',
      'Takt von 2.133 GHz, entsprechend einer Datenrate von 4266 Mbps',
      'Zwei Versorgungsschienen: 1.7 V bis 1.95 V (VDD1) und 1.06 V bis 1.17 V (VDD2)',
      '200-Ball-FBGA-Gehäuse für die Oberflächenmontage',
      'Betriebsbereich von -25 °C bis 85 °C',
      'Kompaktes Single-Die-Gehäuse für platzbeschränkte Platinen',
      'Ausgelegt nach der Norm JEDEC JESD209-4',
    ],
    applications: [
      'Flaggschiff- und gehobene Mittelklasse-Smartphones',
      'Tablets',
      'Automotive-Cockpits',
      'AR- und VR-Geräte',
      'Edge-KI-Boxen',
    ],
    faq: [
      {
        q: 'Wofür wird der H9HCNNNBKMMLXR-NEE eingesetzt?',
        a: 'Er ist ein 16Gb-x32-LPDDR4X-SDRAM-Die und wird in Flaggschiff- und gehobenen Mittelklasse-Smartphones, Tablets, Automotive-Cockpits, AR- und VR-Geräten sowie Edge-KI-Boxen eingesetzt, wo ein stromsparender Speicherkanal mit 4266 Mbps benötigt wird.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines H9HCNNNBKMMLXR-NEE?',
        a: 'Einkäufer prüfen das Bauteil gegen die DDR-Unterstützungsliste des Host-SoC, etwa bei Plattformen von Rockchip, Qualcomm oder MediaTek; den Platinenaufbau und das Thermikkonzept, die ein einzelnes Die hoher Dichte erfordert; ob der Speicher original oder White-Label-Ware ist; die Spannungsunterschiede zwischen LPDDR4X und LPDDR4; die Herkunft von Charge und Gehäuse; sowie Preis und Lieferzeit.',
      },
      {
        q: 'Wie prüft YIXINOU einen H9HCNNNBKMMLXR-NEE vor dem Versand?',
        a: 'Jede Charge im 200-Ball-FBGA wird vor dem Versand auf Kennzeichnung, Chargencode und Menge gegen die Bestellung verifiziert. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fotos der tatsächlichen Charge senden wir auf Anfrage.',
      },
    ],
  },

  'HF115F-A-230-2ZS4': {
    mpn: 'HF115F-A/230-2ZS4',
    brand: 'Hongfa',
    title: 'Miniatur-Hochleistungsrelais HF115F, 230 VAC Spule, 2 Umschaltkontakte',
    category: 'Sonstige',
    categoryHref: '/all-products',
    summary:
      'Das HF115F-A/230-2ZS4 ist ein Miniatur-Hochleistungsrelais der Serie HF115F von Hongfa mit einer 230 VAC-Wechselspannungsspule und zwei Umschaltkontakten (2 Form C, 2 CO). Es schaltet bis zu 8 A bei 250 VAC, kommt im Through-Hole-DIP-Gehäuse mit 8 Pins und ist von -40 °C bis +70 °C spezifiziert. Das Bauteil fällt unter IEC 61810 und UL508 und ist RoHS-konform. Eingesetzt wird es in der Hausgerätesteuerung, etwa von Klimaanlagen, Waschmaschinen und Warmwasserbereitern, sowie in Industriesteuerungsplatinen, Stromzählern, der Lichtsteuerung und intelligenten Elektrizitätszählern.',
    img: '/assets/images/hf115f-a-230-2zs4-package.jpg',
    alt: 'Ein Through-Hole-DIP-Relaisgehäuse mit 8 Pins, das Gehäuse des HF115F-A/230-2ZS4',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'Through-Hole-DIP, 8 Pins'],
      ['Pinanzahl', '8'],
      ['Montageart', 'Durchsteckmontage'],
      ['Relais-Typ', 'Miniatur-Hochleistungsrelais, Serie HF115F'],
      ['Spulenspannung', '230 VAC'],
      ['Kontaktkonfiguration', '2 Form C (2 CO, zwei Umschaltkontakte)'],
      ['Kontaktbelastbarkeit', '8 A bei 250 VAC'],
      ['Spulenart', 'Wechselspannungsspule (AC)'],
      ['Betriebstemperatur', '-40 °C bis +70 °C'],
      ['Normen', 'IEC 61810, UL508, RoHS'],
    ],
    about:
      'Das HF115F-A/230-2ZS4 ist ein Miniatur-Hochleistungsrelais aus der Serie HF115F von Hongfa. Es hat eine 230 VAC-Wechselspannungsspule und zwei Umschaltkontakte (2 Form C, 2 CO) mit 8 A und 250 VAC und ist in ein Through-Hole-DIP-Gehäuse mit 8 Pins für die übliche Leiterplattenbestückung eingebaut. Das Relais ist für einen Betriebsbereich von -40 °C bis +70 °C spezifiziert und fällt unter IEC 61810 und UL508, dazu RoHS-Konformität. Es dient dem Schalten von Gerätelasten in Klimaanlagen, Waschmaschinen und Warmwasserbereitern sowie in Industriesteuerungsplatinen, Stromzählern, der Lichtsteuerung und intelligenten Elektrizitätszählern.',
    standards: [
      'IEC 61810',
      'UL508',
      'RoHS-konform',
    ],
    features: [
      '230 VAC-Wechselspannungsspule mit zwei Umschaltkontakten (2 Form C, 2 CO)',
      'Kontaktbelastbarkeit von 8 A bei 250 VAC',
      'Through-Hole-DIP-Gehäuse mit 8 Pins für die übliche Leiterplattenbestückung',
      'Betriebsbereich von -40 °C bis +70 °C',
      'Miniatur-Hochleistungsrelais aus der Serie HF115F von Hongfa',
      'Fällt unter IEC 61810 und UL508, RoHS-konform',
    ],
    applications: [
      'Hausgerätesteuerung (Klimaanlagen, Waschmaschinen, Warmwasserbereiter)',
      'Industriesteuerungsplatinen',
      'Stromzähler',
      'Lichtsteuerung',
      'Intelligente Elektrizitätszähler',
    ],
    faq: [
      {
        q: 'Wofür wird das HF115F-A/230-2ZS4 eingesetzt?',
        a: 'Es ist ein Relais mit 230 VAC-Spule und zwei Umschaltkontakten für 8 A und dient dem Schalten von Gerätelasten in Klimaanlagen, Waschmaschinen und Warmwasserbereitern sowie in Industriesteuerungsplatinen, Stromzählern, der Lichtsteuerung und intelligenten Elektrizitätszählern.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines HF115F-A/230-2ZS4?',
        a: 'Einkäufer prüfen, ob die Spulenspannung zur Ansteuerschaltung passt, denn eine 230 VAC-Spule benötigt einen Triac oder einen Relaistreiber und lässt sich nicht mit 5 V-Logik ansteuern; die Derating-Grenzen des 8 A/250 VAC-Kontakts für induktive, kapazitive oder Lampenlasten; die elektrische und mechanische Lebensdauer; Rastermaß und Leiterplattenlayout; ob es sich um Originalware von Hongfa handelt, da in diesem Markt Fälschungen verbreitet sind; sowie Preis und Mindestbestellmenge.',
      },
      {
        q: 'Wie prüft YIXINOU ein HF115F-A/230-2ZS4 vor dem Versand?',
        a: 'Bei diesem Through-Hole-DIP-Relais mit 8 Pins prüfen wir Spulenkennzeichnung, Kontaktkonfiguration, Pinbelegung und Menge gegen die Bestellung vor dem Versand. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fotos der tatsächlichen Charge sind auf Anfrage erhältlich.',
      },
    ],
  },

  'HMC472ALP4ETR': {
    mpn: 'HMC472ALP4ETR',
    brand: 'Analog Devices',
    title: 'GaAs-MMIC-Digitaldämpfungsglied, 0.5 dB LSB, 6 Bit, DC bis 3.8 GHz',
    category: 'Integrierte Schaltungen (ICs) / Integrierte Schaltungen (ICs) / HF-Halbleiter und Bauelemente / HF-Dämpfungsglieder',
    categoryHref: '/all-products',
    summary:
      'Das HMC472ALP4ETR ist ein 6-Bit-GaAs-MMIC-Digitaldämpfungsglied von Analog Devices mit einem LSB von 0.5 dB und einem Dämpfungsbereich von 31.5 dB, das von DC bis 3.8 GHz arbeitet. Die Einfügedämpfung liegt unter 2 dB, der Eingangs-Interceptpunkt dritter Ordnung beträgt 48 dBm. Es arbeitet an einer einfachen +5 V Versorgung mit typisch 2.6 mA und schaltet in 30 ns, angesteuert parallel oder seriell mit TTL- und CMOS-kompatiblen Pegeln. Eingesetzt wird es in Kommunikationsbasisstationen, Mess- und Prüfgeräten, Phased-Array-Radar, HF-Transceiver-Frontends und in der Satellitenkommunikation.',
    img: '/assets/images/hmc472alp4etr-qfn-24.jpg',
    alt: 'Ein 24-poliges LFCSP-Gehäuse (QFN) mit 4 mm x 4 mm, das Gehäuse des HMC472ALP4ETR',
    imageNote:
      'Illustrative Gehäuseabbildung. Fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'QFN, 24-poliges LFCSP (4 mm x 4 mm, LP4)'],
      ['Pinanzahl', '24'],
      ['Montageart', 'Oberflächenmontage'],
      ['Frequenzbereich', 'DC bis 3.8 GHz'],
      ['Dämpfungsbereich', '31.5 dB'],
      ['Dämpfungsschritt', '0.5 dB LSB, 6 Bit'],
      ['Steuerschnittstelle', '6 Bit parallel oder seriell, TTL- und CMOS-kompatibel'],
      ['Versorgungsspannung', '5 V einfache Versorgung (2.6 mA max.)'],
      ['Schaltzeit', '30 ns'],
      ['Betriebstemperatur', '-40 °C bis 85 °C'],
    ],
    about:
      'Das HMC472ALP4ETR ist ein 6-Bit-GaAs-MMIC-Digitaldämpfungsglied von Analog Devices für DC bis 3.8 GHz mit einem kleinsten Dämpfungsschritt (LSB) von 0.5 dB und einem Dämpfungsbereich von 31.5 dB. Die Einfügedämpfung bleibt unter 2 dB, der Eingangs-Interceptpunkt dritter Ordnung erreicht 48 dBm. Das Bauteil arbeitet an einer einfachen +5 V Versorgung mit maximal 2.6 mA, schaltet in 30 ns und wird über einen 6 Bit breiten parallelen oder seriellen Steuerbus mit TTL- und CMOS-kompatiblen Pegeln angesteuert. Es kommt im 24-poligen LFCSP mit 4 mm x 4 mm und wird in Basisstationen, Messgeräten, Phased-Array-Radar, HF-Frontends und Satellitenstrecken eingesetzt.',
    standards: [
      'Analog Devices datasheet HMC472A (v02.0420)',
      'RoHS-konform',
      'Erfüllt JEDEC-Verpackungs- und ESD-Normen',
      'Feuchteempfindlichkeitsstufe MSL3 (J-STD-020)',
      'ESD-empfindliches Bauteil — nur unter ESD-geschützten Bedingungen handhaben',
    ],
    features: [
      '6-Bit-Digitaldämpfungsglied mit einem kleinsten Schritt von 0.5 dB',
      'Dämpfungsbereich von 31.5 dB von DC bis 3.8 GHz',
      'Einfügedämpfung unter 2 dB über das gesamte Band',
      'Eingangs-Interceptpunkt dritter Ordnung von 48 dBm',
      'Einfache +5 V Versorgung mit maximal 2.6 mA Stromaufnahme',
      'Schaltzeit von 30 ns',
      'Parallele und serielle Ansteuerung, TTL- und CMOS-kompatibel',
      '24-poliges LFCSP-Gehäuse mit 4 mm x 4 mm',
    ],
    applications: [
      'Kommunikationsbasisstationen',
      'Mess- und Prüfgeräte (Spektrumanalysatoren, Signalquellen)',
      'Phased-Array-Radar',
      'HF-Transceiver-Frontends',
      'Satellitenkommunikation',
    ],
    faq: [
      {
        q: 'Wofür wird das HMC472ALP4ETR eingesetzt?',
        a: 'Es ist ein 6-Bit-GaAs-MMIC-Digitaldämpfungsglied für DC bis 3.8 GHz und wird in Kommunikationsbasisstationen, Mess- und Prüfgeräten wie Spektrumanalysatoren und Signalquellen, in Phased-Array-Radar, HF-Transceiver-Frontends und in der Satellitenkommunikation eingesetzt, überall dort, wo ein Pegelsteller mit 0.5 dB Schrittweite und 31.5 dB Bereich benötigt wird.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines HMC472ALP4ETR?',
        a: 'Einkäufer prüfen die Einfügedämpfung und die Dämpfungsgenauigkeit je Bit, die bei etwa ±0.3 dB Fehler liegt; die Pegel der Steuerschnittstelle für seriellen, parallelen oder gelatchten Betrieb; die Auslegung der einfachen Versorgung samt Bypass-Entkopplung; die breitbandige Impedanzanpassung und das HF-Leitungslayout auf der Leiterplatte; ob es sich um Originalware von Analog Devices handelt, da gefälschte Mikrowellenbauteile verbreitet sind; sowie den hohen Preis zusammen mit den langen Lieferzeiten.',
      },
      {
        q: 'Wie prüft YIXINOU ein HMC472ALP4ETR vor dem Versand?',
        a: 'Für jede Charge im 24-poligen LFCSP prüfen wir Kennzeichnung, Datumscode, Spulenbeschriftung und Menge gegen die Bestellung vor dem Versand. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fragen Sie uns vor der Auftragserteilung nach einem Foto der tatsächlichen Charge.',
      },
    ],
  },

  'HMC624ALP4ETR': {
    mpn: 'HMC624ALP4ETR',
    brand: 'Analog Devices',
    title: 'GaAs-Digitaldämpfungsglied, 0.5 dB LSB, 6 Bit, 0.1 GHz bis 6.0 GHz',
    category: 'Integrierte Schaltungen (ICs) / Integrierte Schaltungen (ICs) / HF-Halbleiter und Bauelemente / HF-Dämpfungsglieder',
    categoryHref: '/all-products',
    summary:
      'Das HMC624ALP4ETR ist ein 6-Bit-GaAs-Digitaldämpfungsglied von Analog Devices mit einem LSB von 0.5 dB und einem Dämpfungsbereich von 31.5 dB für 0.1 GHz bis 6.0 GHz. Es arbeitet an einer einfachen +3 V bis +5 V Versorgung und schaltet in 30 ns, angesteuert über 6 Bit seriell oder parallel mit Unterstützung der seriellen Adressauswahl. Das Bauteil kommt im 24-poligen LFCSP mit 4 mm x 4 mm und wird auf Gurt und Rolle geliefert. Eingesetzt wird es in der 5G-Kommunikation, in Mikrowellen-Messgeräten, in Radar, in der elektronischen Kampfführung und in der automatischen Verstärkungsregelung von HF-Transceiver-Ketten.',
    img: '/assets/images/hmc624alp4etr-qfn-24.jpg',
    alt: 'Ein 24-poliges LFCSP-Gehäuse (QFN) mit 4 mm x 4 mm, das Gehäuse des HMC624ALP4ETR',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'QFN, 24-poliges LFCSP (4 mm x 4 mm, LP4)'],
      ['Pinanzahl', '24'],
      ['Montageart', 'Oberflächenmontage'],
      ['Frequenzbereich', '0.1 GHz bis 6.0 GHz'],
      ['Dämpfungsbereich', '31.5 dB'],
      ['Dämpfungsschritt', '0.5 dB LSB, 6 Bit'],
      ['Steuerschnittstelle', '6 Bit seriell oder parallel, mit serieller Adressauswahl'],
      ['Versorgungsspannung', '3 V bis 5 V einfache Versorgung'],
      ['Schaltzeit', '30 ns'],
      ['Betriebstemperatur', '-40 °C bis 85 °C'],
    ],
    about:
      'Das HMC624ALP4ETR ist ein 6-Bit-GaAs-Digitaldämpfungsglied von Analog Devices für 0.1 GHz bis 6.0 GHz mit einem kleinsten Dämpfungsschritt (LSB) von 0.5 dB und einem Dämpfungsbereich von 31.5 dB. Es arbeitet an einer einfachen +3 V bis +5 V Versorgung, schaltet innerhalb von 30 ns und nimmt eine 6 Bit breite serielle oder parallele Ansteuerung mit serieller Adressauswahl für Busse mit mehreren Bauteilen entgegen. Das Bauteil sitzt in einem 24-poligen LFCSP mit 4 mm x 4 mm und wird auf Gurt und Rolle geliefert. Eingesetzt wird es in der 5G-Kommunikation, in Mikrowellen-Messgeräten, in Radar, in der elektronischen Kampfführung und in der automatischen Verstärkungsregelung von HF-Transceiver-Ketten.',
    standards: [
      'Analog Devices datasheet HMC624A Rev. B',
      'RoHS-konform',
      'Erfüllt JEDEC-Verpackungs- und ESD-Normen, einschließlich der Thermiknormen JESD51',
      'Feuchteempfindlichkeitsstufe MSL3 (J-STD-020)',
      'Feuchteempfindlichkeitsstufe MSL1 (J-STD-020)',
      'ESD-empfindliches Bauteil — nur unter ESD-geschützten Bedingungen handhaben',
    ],
    features: [
      '6-Bit-Digitaldämpfungsglied mit einem kleinsten Schritt von 0.5 dB',
      'Dämpfungsbereich von 31.5 dB von 0.1 GHz bis 6.0 GHz',
      'Einfache +3 V bis +5 V Versorgung',
      'Schaltzeit von 30 ns',
      '6 Bit serielle oder parallele Ansteuerung mit serieller Adressauswahl',
      '24-poliges LFCSP-Gehäuse mit 4 mm x 4 mm',
      'Lieferung auf Gurt und Rolle (ETR)',
      'GaAs-MMIC-Prozess für breitbandige HF-Eigenschaften',
    ],
    applications: [
      '5G-Kommunikationssysteme',
      'Mikrowellen-Messgeräte',
      'Radar',
      'Elektronische Kampfführung',
      'Automatische Verstärkungsregelung in HF-Transceiver-Ketten',
    ],
    faq: [
      {
        q: 'Wofür wird das HMC624ALP4ETR eingesetzt?',
        a: 'Es ist ein 6-Bit-GaAs-Digitaldämpfungsglied für 0.1 GHz bis 6.0 GHz und wird in 5G-Kommunikationssystemen, Mikrowellen-Messgeräten, Radar, Geräten der elektronischen Kampfführung sowie in Regelkreisen zur automatischen Verstärkungsregelung in HF-Transceiver-Ketten eingesetzt, die einen Pegelsteller mit 0.5 dB Schrittweite und 31.5 dB Bereich benötigen.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines HMC624ALP4ETR?',
        a: 'Einkäufer prüfen die Einfügedämpfung und die Anpassung am oberen Bandende bei 6 GHz; ob eine serielle oder parallele Ansteuerung verwendet wird und wie sich das Latch-Timing verhält; ob eine eigene GaAs-Vorspannung und Gleichspannungs-Blockkondensatoren erforderlich sind; die Wärmeabfuhr und die Anordnung der Masse-Durchkontaktierungen auf der Leiterplatte; ob es sich um Originalware von Analog Devices handelt; sowie Lieferzeit und Preis, die bei den Mikrowellenlinien von ADI volatil sind.',
      },
      {
        q: 'Wie prüft YIXINOU ein HMC624ALP4ETR vor dem Versand?',
        a: 'Jede Charge im 24-poligen LFCSP wird vor dem Versand auf Kennzeichnung, Datumscode, Rollenetiketten und Menge gegen die Bestellung geprüft. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fotos der tatsächlichen Charge senden wir auf Anfrage.',
      },
    ],
  },

  'ICM-42688-P': {
    mpn: 'ICM-42688-P',
    brand: 'InvenSense',
    title: '6-Achsen-MEMS-Inertialmesseinheit im 14-poligen LGA-Gehäuse',
    category: 'Sensor / Sensoren / Bewegungssensoren / Inertiale Messeinheiten (IMUs)',
    categoryHref: '/all-products',
    summary:
      'Der ICM-42688-P ist eine 6-Achsen-MEMS-Inertialmesseinheit, die einen 3-Achsen-Beschleunigungssensor und einen 3-Achsen-Drehratensensor in einem Bauteil vereint. Der Messbereich des Drehratensensors reicht von ±15.625 dps bis ±2000 dps, der des Beschleunigungssensors von ±2 g bis ±16 g, die Ausgabe erfolgt mit 16 Bit oder 18 Bit. Die Kommunikation läuft über I2C, SPI oder I3C, die Versorgung von 1.71 V bis 3.6 V, das Gehäuse ist ein 14-poliges LGA mit 2.5 mm x 3.0 mm. Der Betriebsbereich ist -40 °C bis +85 °C, das Bauteil ist RoHS-konform.',
    img: '/assets/images/icm-42688-p-package.jpg',
    alt: 'Ein 14-poliges LGA-Gehäuse mit 2.5 mm x 3.0 mm, das Gehäuse des ICM-42688-P',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'LGA, 14-polig (2.5 mm x 3.0 mm)'],
      ['Pinanzahl', '14'],
      ['Montageart', 'Oberflächenmontage'],
      ['Sensortyp', '6-Achsen-MEMS-IMU (3-Achsen-Beschleunigungssensor und 3-Achsen-Drehratensensor)'],
      ['Messbereich Drehrate', '±15.625 dps bis ±2000 dps'],
      ['Messbereich Beschleunigung', '±2 g bis ±16 g'],
      ['Ausgabeauflösung', '16 Bit / 18 Bit'],
      ['Schnittstelle', 'I2C, SPI, I3C'],
      ['Versorgungsspannung', '1.71 V bis 3.6 V'],
      ['Betriebstemperatur', '-40 °C bis +85 °C'],
    ],
    about:
      'Der ICM-42688-P ist eine 6-Achsen-MEMS-Inertialmesseinheit von InvenSense, die einen 3-Achsen-Beschleunigungssensor und einen 3-Achsen-Drehratensensor in einem einzigen Bauteil vereint. Der Messbereich des Drehratensensors umfasst ±15.625 dps bis ±2000 dps, der des Beschleunigungssensors ±2 g bis ±16 g, bei 16 Bit und 18 Bit Ausgabeauflösung. Die Daten werden über I2C, SPI oder I3C gelesen, und das Bauteil arbeitet von 1.71 V bis 3.6 V über -40 °C bis +85 °C. Es sitzt in einem 14-poligen LGA mit 2.5 mm x 3.0 mm und ist RoHS-konform.',
    standards: [
      'RoHS-konform',
      'REACH SVHC nicht betroffen',
    ],
    features: [
      '6-Achsen-MEMS-IMU, die einen 3-Achsen-Beschleunigungssensor und einen 3-Achsen-Drehratensensor vereint',
      'Messbereich des Drehratensensors von ±15.625 dps bis ±2000 dps',
      'Messbereich des Beschleunigungssensors von ±2 g bis ±16 g',
      'Ausgabedaten mit 16 Bit und 18 Bit',
      'Digitale Schnittstellen I2C, SPI und I3C',
      'Kompaktes 14-poliges LGA-Gehäuse mit 2.5 mm x 3.0 mm',
      'Versorgungsbereich von 1.71 V bis 3.6 V',
      'Betriebsbereich von -40 °C bis +85 °C',
    ],
    applications: [
      'Bewegungsverfolgung in Handgeräten und Wearables',
      'Steuerung von Robotern und autonomen Plattformen',
      'Bildstabilisierung für Kameras und Gimbals',
      'Überwachung von Vibration und Bewegung in der Industrie',
    ],
    faq: [
      {
        q: 'Wofür wird der ICM-42688-P eingesetzt?',
        a: 'Der ICM-42688-P ist eine 6-Achsen-MEMS-Inertialmesseinheit: ein 3-Achsen-Beschleunigungssensor und ein 3-Achsen-Drehratensensor in einem 14-poligen LGA-Gehäuse, mit Drehratenbereichen von ±15.625 dps bis ±2000 dps, Beschleunigungsbereichen von ±2 g bis ±16 g und 16 Bit oder 18 Bit Ausgabe über I2C, SPI oder I3C. Der vorliegende Datensatz führt für dieses Bauteil keine Endgeräte-Anwendungen auf; klären Sie den vorgesehenen Einsatz deshalb bitte vor dem Design-in mit YIXINOU ab.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines ICM-42688-P?',
        a: 'Einkäufer prüfen, ob eine Automotive-Variante benötigt wird, denn die Artikelnummern für Industrie- und Automotive-Ausführung unterscheiden sich; die Stabilität des Drehraten-Bias und die Temperaturdrift; die Datenrate der SPI-Schnittstelle und die Tiefe des FIFO; die Anforderungen des Lötprozesses, da ein LGA empfindlich auf Spannungen auf Platinenebene reagiert; ob es sich um Originalware handelt, da diese Serie gefälscht wird; sowie Preis und Lieferzeit.',
      },
      {
        q: 'Wie prüft YIXINOU einen ICM-42688-P vor dem Versand?',
        a: 'Für jede Charge im 14-poligen LGA verifizieren wir Kennzeichnung, Datumscode, Verpackung und Menge gegen die Bestellung vor dem Versand. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fragen Sie uns vor der Auftragserteilung nach einem Foto der tatsächlichen Charge.',
      },
    ],
  },

  'K4A4G085WF-BCTD': {
    mpn: 'K4A4G085WF-BCTD',
    brand: 'Samsung',
    title: 'DDR4-SDRAM-Die mit 4Gb und x8-Datenbus im 78-Ball-FBGA-Gehäuse',
    category: 'Integrierte Schaltungen (ICs) / Integrierte Schaltungen (ICs) / Speicherkomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'Der K4A4G085WF-BCTD ist ein DDR4-SDRAM-Die von Samsung mit 4Gb Dichte und x8-Datenbus, geliefert im 78-Ball-FBGA-Gehäuse für die Oberflächenmontage. Er läuft in der Geschwindigkeitsklasse 2666 MHz an einer 1.2 V Schiene für VDD/VDDQ mit einer 2.5 V VPP-Versorgung, innerhalb eines Versorgungsfensters von 1.14 V bis 1.26 V. Der Datensatz der Vergleichsseite nennt einen Betriebsbereich von 0 °C bis 85 °C, das Design folgt der DDR4-Norm JEDEC JESD79-4. Eingesetzt wird er auf Industriesteuerungsplatinen, in Netzwerkgeräten, Set-Top-Boxen, Digital Signage und auf Einstiegs-Embedded-Plattformen.',
    img: '/assets/images/k4a4g085wf-bctd-fbga-78.jpg',
    alt: 'Ein 78-Ball-FBGA-Gehäuse, das Gehäuse des K4A4G085WF-BCTD',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'FBGA'],
      ['Pinanzahl', '78'],
      ['Montageart', 'Oberflächenmontage'],
      ['Speichergröße', '4Gb'],
      ['Speichertechnologie', 'DDR4 SDRAM'],
      ['Datenbusbreite', 'x8'],
      ['Geschwindigkeitsklasse', '2666 MHz (2666 Mbps)'],
      ['Versorgungsspannung', '1.2 V (VDD/VDDQ), 2.5 V (VPP)'],
      ['Versorgungsfenster', '1.14 V bis 1.26 V'],
      ['Betriebstemperatur', '0 °C bis 85 °C'],
    ],
    about:
      'Der K4A4G085WF-BCTD ist ein DDR4-SDRAM-Baustein von Samsung mit 4Gb Dichte in x8-Organisation, verpackt als 78-Ball-FBGA für die Oberflächenmontage. Er ist für die Geschwindigkeitsklasse 2666 MHz spezifiziert, für eine 1.2 V Versorgung von VDD/VDDQ mit einer 2.5 V VPP-Schiene und für ein Versorgungsfenster von 1.14 V bis 1.26 V über einen Betriebsbereich von 0 °C bis 85 °C. Das Bauteil folgt der DDR4-Norm JEDEC JESD79-4. Es wird auf Industriesteuerungsplatinen, in Netzwerkgeräten, Set-Top-Boxen, Digital Signage und auf Einstiegs-Embedded-Plattformen eingesetzt, die ein DDR4-x8-Die geringer Dichte benötigen.',
    standards: [
      'JEDEC JESD79-4',
    ],
    features: [
      'DDR4-SDRAM in 4Gb Dichte mit x8-Datenbus',
      'Geschwindigkeitsklasse 2666 MHz',
      '1.2 V Versorgung für VDD/VDDQ mit 2.5 V VPP-Schiene',
      'Versorgungsfenster von 1.14 V bis 1.26 V',
      '78-Ball-FBGA-Gehäuse für die Oberflächenmontage',
      'Betriebsbereich von 0 °C bis 85 °C',
      'Ausgelegt nach der DDR4-Norm JEDEC JESD79-4',
    ],
    applications: [
      'Industriesteuerungsplatinen',
      'Netzwerkgeräte',
      'Set-Top-Boxen',
      'Digital Signage',
      'Einstiegs-Embedded-Plattformen',
    ],
    faq: [
      {
        q: 'Wofür wird der K4A4G085WF-BCTD eingesetzt?',
        a: 'Er ist ein 4Gb-x8-DDR4-SDRAM-Die und wird auf Industriesteuerungsplatinen, in Netzwerkgeräten, Set-Top-Boxen, Digital Signage und auf Einstiegs-Embedded-Plattformen eingesetzt, wo ein DDR4-Die mit 2666 MHz und einer 1.2 V Schiene benötigt wird.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines K4A4G085WF-BCTD?',
        a: 'Einkäufer prüfen, ob die Dichte von 4Gb ausläuft und wie lange noch ein Fenster für einen Last-Time-Buy bleibt; ob die Geschwindigkeitsklasse zum SPD des Mainboards passt; ob das Die original oder herabgestuft ist; ob stattdessen eine 8Gb-Alternative eingeplant werden sollte; Preis und Lieferzeit; sowie die Konsistenz von Charge zu Charge.',
      },
      {
        q: 'Wie prüft YIXINOU einen K4A4G085WF-BCTD vor dem Versand?',
        a: 'Jede Charge im 78-Ball-FBGA wird vor dem Versand auf Kennzeichnung, Chargencode und Menge gegen die Bestellung geprüft. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fotos der tatsächlichen Charge sind auf Anfrage erhältlich.',
      },
    ],
  },

  'K4A4G165WF-BCTD': {
    mpn: 'K4A4G165WF-BCTD',
    brand: 'Samsung',
    title: 'DDR4-SDRAM-Die mit 4Gb und x16-Datenbus im 96-Ball-FBGA-Gehäuse',
    category: 'Integrierte Schaltungen (ICs) / Integrierte Schaltungen (ICs) / Speicherkomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'Der K4A4G165WF-BCTD ist ein DDR4-SDRAM-Die von Samsung mit 4Gb Dichte und x16-Datenbus, geliefert im 96-Ball-FBGA-Gehäuse für die Oberflächenmontage. Er läuft in der Geschwindigkeitsklasse 2666 Mbps (DDR4-2666, CL19) an einer 1.2 V Versorgung, innerhalb eines Versorgungsfensters von 1.14 V bis 1.26 V; der Datensatz der Vergleichsseite führt als Lebenszyklusstatus die Serienproduktion. Der Betriebsbereich ist 0 °C bis 85 °C, das Design folgt der DDR4-Norm JEDEC JESD79-4. Eingesetzt wird er auf Industriesteuerungsplatinen, in Netzwerkkommunikationsgeräten, Digital Signage, POS-Terminals sowie auf Einstiegs-Servern und Embedded-Plattformen.',
    img: '/assets/images/k4a4g165wf-bctd-fbga-96.jpg',
    alt: 'Ein 96-Ball-FBGA-Gehäuse, das Gehäuse des K4A4G165WF-BCTD',
    imageNote:
      'Foto dieses Bauteils. Chargenkennzeichnung und Datumscode variieren je Lieferung — fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'FBGA'],
      ['Pinanzahl', '96'],
      ['Montageart', 'Oberflächenmontage'],
      ['Speichergröße', '4Gb'],
      ['Speichertechnologie', 'DDR4 SDRAM'],
      ['Datenbusbreite', 'x16'],
      ['Geschwindigkeitsklasse', '2666 Mbps (DDR4-2666, CL19)'],
      ['Versorgungsspannung', '1.2 V'],
      ['Betriebstemperatur', '0 °C bis 85 °C'],
      ['Lebenszyklusstatus', 'In Produktion (Hersteller)'],
    ],
    about:
      'Der K4A4G165WF-BCTD ist ein DDR4-SDRAM-Baustein von Samsung mit 4Gb Dichte in x16-Organisation, verpackt als 96-Ball-FBGA für die Oberflächenmontage. Er läuft in der Geschwindigkeitsklasse 2666 Mbps (DDR4-2666, CL19) an einer 1.2 V Versorgung innerhalb eines Fensters von 1.14 V bis 1.26 V, mit Lebenszyklusstatus in Serienproduktion. Der Betriebsbereich ist 0 °C bis 85 °C, das Bauteil folgt der DDR4-Norm JEDEC JESD79-4. Es wird auf Industriesteuerungsplatinen, in Netzwerkkommunikationsgeräten, Digital Signage, POS-Terminals sowie auf Einstiegs-Servern und Embedded-Plattformen eingesetzt.',
    standards: [
      'JEDEC JESD79-4',
    ],
    features: [
      'DDR4-SDRAM in 4Gb Dichte mit x16-Datenbus',
      'Geschwindigkeitsklasse 2666 Mbps, DDR4-2666 mit CL19-Latenz',
      '1.2 V Versorgung mit einem Fenster von 1.14 V bis 1.26 V',
      '96-Ball-FBGA-Gehäuse für die Oberflächenmontage',
      'Betriebsbereich von 0 °C bis 85 °C',
      'Lebenszyklusstatus laut Hersteller in Serienproduktion',
      'Ausgelegt nach der DDR4-Norm JEDEC JESD79-4',
    ],
    applications: [
      'Industriesteuerungsplatinen',
      'Netzwerkkommunikationsgeräte',
      'Digital Signage',
      'POS-Terminals',
      'Einstiegs-Server und Embedded-Plattformen',
    ],
    faq: [
      {
        q: 'Wofür wird der K4A4G165WF-BCTD eingesetzt?',
        a: 'Er ist ein 4Gb-x16-DDR4-SDRAM-Die und wird auf Industriesteuerungsplatinen, in Netzwerkkommunikationsgeräten, Digital Signage, POS-Terminals sowie auf Einstiegs-Servern und Embedded-Plattformen eingesetzt, wo ein DDR4-x16-Die mit 2666 Mbps benötigt wird.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines K4A4G165WF-BCTD?',
        a: 'Einkäufer prüfen, ob sich die Dichte von 4Gb aus dem Markt zurückzieht und wie groß das Risiko bei der langfristigen Versorgung oder einem Last-Time-Buy bleibt; ob die Geschwindigkeitsklasse zum SPD des Mainboards passt; ob das Die original oder herabgestuft ist; ob das Bauteil eine industrielle Temperaturanforderung erfüllt; Preis und Lieferzeit; sowie ob der Bestand generalüberholt oder aus Altgeräten ausgebaut ist.',
      },
      {
        q: 'Wie prüft YIXINOU einen K4A4G165WF-BCTD vor dem Versand?',
        a: 'Für jede Charge im 96-Ball-FBGA prüfen wir Kennzeichnung, Chargencode, Verpackung und Menge gegen die Bestellung vor dem Versand. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fragen Sie uns vor der Auftragserteilung nach einem Foto der tatsächlichen Charge.',
      },
    ],
  },

  'K4A8G045WD-BCWE': {
    mpn: 'K4A8G045WD-BCWE',
    brand: 'Samsung',
    title: 'DDR4-SDRAM-Die mit 8Gb und x4-Organisation im 78-Ball-FBGA-Gehäuse',
    category: 'Integrierte Schaltungen (ICs)',
    categoryHref: '/all-products',
    summary:
      'Der K4A8G045WD-BCWE ist ein DDR4-SDRAM-Die von Samsung mit 8Gb Dichte und x4-Organisation, geliefert im 78-Ball-FBGA-Gehäuse. Er läuft in der Geschwindigkeitsklasse 3200 Mbps an einer 1.2 V Schiene für VDD/VDDQ mit einer 2.5 V VPP-Versorgung, über einen Betriebsbereich von 0 °C bis 95 °C, und das Design folgt der DDR4-Norm JEDEC JESD79-4. Die x4-Organisation ist für Server-ECC-Modulaufbauten vorgesehen. Eingesetzt wird er auf Server-RDIMM- und LRDIMM-Speichermodulen, in Rechenzentren sowie in Enterprise-Servern und Storage-Geräten.',
    img: '/assets/images/k4a8g045wd-bcwe-package.jpg',
    alt: 'Ein 78-Ball-FBGA-Gehäuse, das Gehäuse des K4A8G045WD-BCWE',
    imageNote:
      'Illustrative Gehäuseabbildung. Fragen Sie uns nach einem Foto der tatsächlichen Charge.',
    specs: [
      ['Gehäuse / Bauform', 'FBGA-78'],
      ['Pinanzahl', '78'],
      ['Montageart', 'Oberflächenmontage'],
      ['Speichergröße', '8Gb'],
      ['Speichertechnologie', 'DDR4 SDRAM'],
      ['Datenbusbreite', 'x4'],
      ['Geschwindigkeitsklasse', '3200 Mbps'],
      ['Versorgungsspannung', '1.2 V (VDD/VDDQ), 2.5 V (VPP)'],
      ['Betriebstemperatur', '0 °C bis 95 °C'],
      ['Produktnormen', 'JEDEC JESD79-4'],
    ],
    about:
      'Der K4A8G045WD-BCWE ist ein DDR4-SDRAM-Baustein von Samsung mit 8Gb Dichte in x4-Organisation, verpackt als 78-Ball-FBGA. Er ist für die Geschwindigkeitsklasse 3200 Mbps an einer 1.2 V Versorgung von VDD/VDDQ mit einer 2.5 V VPP-Schiene spezifiziert, über einen Betriebsbereich von 0 °C bis 95 °C, und folgt der DDR4-Norm JEDEC JESD79-4. Die x4-Organisation wird überwiegend für Server-ECC-Module verwendet. Er ist für Server-RDIMM- und LRDIMM-Speichermodule, Rechenzentren sowie Enterprise-Server und Storage-Geräte vorgesehen.',
    standards: [
      'JEDEC JESD79-4',
    ],
    features: [
      'DDR4-SDRAM in 8Gb Dichte mit x4-Organisation',
      'Geschwindigkeitsklasse 3200 Mbps für Server-Modulaufbauten',
      '1.2 V Versorgung für VDD/VDDQ mit 2.5 V VPP-Schiene',
      '78-Ball-FBGA-Gehäuse',
      'Betriebsbereich von 0 °C bis 95 °C',
      'x4-Organisation für Server-ECC-Module vorgesehen',
      'Ausgelegt nach der DDR4-Norm JEDEC JESD79-4',
    ],
    applications: [
      'Server-RDIMM- und LRDIMM-Speichermodule',
      'Rechenzentren',
      'Enterprise-Server',
      'Enterprise-Storage-Geräte',
    ],
    faq: [
      {
        q: 'Wofür wird der K4A8G045WD-BCWE eingesetzt?',
        a: 'Er ist ein 8Gb-x4-DDR4-SDRAM-Die und wird auf Server-RDIMM- und LRDIMM-Speichermodulen, in Rechenzentren sowie in Enterprise-Servern und Storage-Geräten eingesetzt, wo die für Server-ECC-Module erforderliche x4-Organisation benötigt wird.',
      },
      {
        q: 'Worauf achten Einkäufer vor der Bestellung eines K4A8G045WD-BCWE?',
        a: 'Einkäufer prüfen, dass eine x4-Organisation überwiegend für Server-ECC-Module verwendet wird und nicht gegen x8- oder x16-Bauteile austauschbar ist; dass die Geschwindigkeitsklasse 3200 hohe Anforderungen an Leiterplatte und Signalintegrität stellt; ob das Die original oder White-Label-Ware ist; ob das Moduldesign die QVL-Zertifizierung der Serverplattform erhält; Preis und Lieferzeit; sowie die Konsistenz von Charge zu Charge.',
      },
      {
        q: 'Wie prüft YIXINOU einen K4A8G045WD-BCWE vor dem Versand?',
        a: 'Für jede Charge im 78-Ball-FBGA prüfen wir Kennzeichnung, Datumscode und Menge gegen die Bestellung vor dem Versand. Die Laboranalytik — Röntgenprüfung, XRF, Dekapsulation, Lötbarkeit und elektrische Prüfung — führen unsere Partnerlabore durch; YIXINOU betreibt selbst kein Prüflabor. Fotos der tatsächlichen Charge sind auf Anfrage erhältlich.',
      },
    ],
  },
};
