/*
 * Dutch part records, batch 3.
 *
 * Translated field-by-field from _replaced/2026-10-02-scratch/parts-src/batch-3.json.
 * Part numbers, brand names, package codes, standard identifiers and every number,
 * unit and range are carried over unchanged; only the prose is Dutch.
 */
export default {
  'ESP32-S3R8': {
    mpn: 'ESP32-S3R8',
    brand: 'Espressif',
    title: 'Dual-core Xtensa LX7 Wi-Fi- en Bluetooth-SoC met 8MB PSRAM, QFN-56',
    category: 'Geïntegreerde schakelingen (IC’s)',
    categoryHref: '/all-products',
    summary:
      'De ESP32-S3R8 is een SoC van Espressif die een dual-core 32-bits Xtensa LX7-processor met maximaal 240MHz combineert met 2.4GHz Wi-Fi (IEEE 802.11 b/g/n) en Bluetooth 5 (LE). Het achtervoegsel R8 staat voor 8MB PSRAM die samen met 512KB SRAM op de chip is geïntegreerd. De chip biedt 45 GPIO en interfaces voor USB OTG, TWAI (CAN) en LCD-panelen, en ondersteunt flash en PSRAM op 1.8V of 3.3V. Het onderdeel wordt geleverd in een QFN-56-behuizing van 7x7mm.',
    img: '/assets/images/esp32-s3r8-package.jpg',
    alt: 'Een 56-pins QFN-behuizing, de behuizing van de ESP32-S3R8',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Apparaattype', 'Wi-Fi- en Bluetooth-SoC met geïntegreerde MCU'],
      ['Processorkern', 'Dual-core Xtensa 32-bits LX7'],
      ['Maximale klokfrequentie', '240MHz'],
      ['Geheugen op de chip', '512KB SRAM plus 8MB PSRAM (achtervoegsel R8)'],
      ['Draadloos', '2.4GHz Wi-Fi (IEEE 802.11 b/g/n) en Bluetooth 5 (LE)'],
      ['Aantal GPIO', '45'],
      ['Behuizing', 'QFN-56, 7x7mm'],
      ['Spanning voor flash en PSRAM', '1.8V of 3.3V'],
      ['Interfaces', 'USB OTG, TWAI (CAN)-controller, LCD-interface'],
      ['CAN-norm', 'ISO 11898 via de TWAI-controller'],
    ],
    about:
      'De ESP32-S3R8 is een wireless system-on-chip van Espressif rond een dual-core 32-bits Xtensa LX7-processor die op maximaal 240MHz loopt. Hij integreert 2.4GHz Wi-Fi volgens IEEE 802.11 b/g/n, Bluetooth 5 (LE) en in de R8-variant 8MB PSRAM, samen met 512KB SRAM, 45 GPIO, USB OTG, een TWAI (CAN)-controller en een LCD-interface. Typische toepassingen zijn apparaten voor AI-spraakinteractie, smarthome-hubs, terminals voor beeldherkenning, HMI-schermen en edge-knooppunten voor AI-inferentie.',
    standards: [
      'Espressif ESP32-S3 Series Datasheet Version 2.2',
      'RoHS-conform',
      'JEDEC JESD22-verpakkings- en ESD-normen',
      'JESD47-betrouwbaarheidskwalificatie en JESD78-latch-uptest',
      'REACH-conform',
      'Radiospecificaties volgens IEEE 802.11 b/g/n en Bluetooth 5 (LE)',
      'ESD-gevoelig onderdeel — alleen onder ESD-veilige omstandigheden hanteren',
    ],
    features: [
      'Dual-core 32-bits Xtensa LX7 tot maximaal 240MHz',
      '8MB PSRAM op de chip (achtervoegsel R8) plus 512KB SRAM',
      '2.4GHz Wi-Fi (IEEE 802.11 b/g/n) en Bluetooth 5 (LE)',
      '45 GPIO beschikbaar',
      'USB OTG, TWAI (CAN)-controller en LCD-interface',
      'Ondersteunt flash en PSRAM op 1.8V of 3.3V',
      'QFN-56-behuizing van 7x7mm',
      'Ondersteunt AI-vectorinstructies en het ESP-DL-framework',
    ],
    applications: [
      'Apparaten voor AI-spraakinteractie',
      'Smarthome-bedieningshubs',
      'Terminals voor beeldherkenning',
      'HMI-schermen',
      'Edge-knooppunten voor AI-inferentie',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de ESP32-S3R8 gebruikt?',
        a: 'Hij wordt gebruikt in apparaten voor AI-spraakinteractie, smarthome-bedieningshubs, terminals voor beeldherkenning, HMI-panelen en edge-knooppunten voor AI-inferentie. De dual-core LX7-processor, 8MB PSRAM en de beeld- en LCD-interfaces stellen één chip in staat om draadloze verbinding, gebruikersinterface en eenvoudige inferentie op het apparaat zelf te verzorgen.',
      },
      {
        q: 'Wat controleren kopers voordat zij een ESP32-S3R8 bestellen?',
        a: 'Kopers controleren of het achtervoegsel R8, dat staat voor 8MB PSRAM op de chip, precies de variant is die het ontwerp nodig heeft, want het prijsverschil met onderdelen zonder PSRAM is aanzienlijk. Zij letten ook op de ondersteuning van AI-vectorinstructies en het ESP-DL-framework, plannen het antenneontwerp en de RF-certificering, kiezen tussen de kale SoC en een ESP32-S3-WROOM-module, en beoordelen het thermische en stroomgedrag van een ontwerp met grote PSRAM, naast prijs en beschikbaarheid.',
      },
      {
        q: 'Hoe controleert YIXINOU een ESP32-S3R8 vóór verzending?',
        a: 'Partijen in QFN-56 (7x7mm) worden vóór verzending gecontroleerd, waarbij het behuizingslichaam, het aantal pins en de markering met de bestelling worden vergeleken en het achtervoegsel R8 wordt bevestigd. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Foto’s van de partij zijn samen met de verzenddocumentatie beschikbaar.',
      },
    ],
  },

  'ESP8266EX': {
    mpn: 'ESP8266EX',
    brand: 'Espressif',
    title: 'Hooggeïntegreerde Wi-Fi-SoC met Tensilica L106-kern in QFN-32',
    category: 'Geïntegreerde schakelingen (IC’s)',
    categoryHref: '/all-products',
    summary:
      'De ESP8266EX is een Wi-Fi-system-on-chip van Espressif op basis van een 32-bits RISC-kern Tensilica L106 die op maximaal 160MHz loopt, met geïntegreerde 2.4GHz Wi-Fi volgens IEEE 802.11 b/g/n. Hij komt in een QFN-32-behuizing van 5x5mm, werkt van 2.5V tot 3.6V en is gespecificeerd voor -40 tot +85°C, waarbij sommige bestelvarianten tot 125°C zijn opgegeven. De chip bevat SRAM en een SPI-flashinterface en ondersteunt externe SPI-flash tot 16MB. Het datablad vermeldt dat het bereik van het VDDPST-voedingsdomein is bijgewerkt van 1.8 tot 3.3V naar 1.8 tot 3.6V; het onderdeel is gemarkeerd als niet aanbevolen voor nieuwe ontwerpen, waarvoor in plaats daarvan de ESP8684 wordt voorgesteld.',
    img: '/assets/images/esp8266ex-package.jpg',
    alt: 'Een 32-pins QFN-behuizing, de behuizing van de ESP8266EX',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Apparaattype', 'Wi-Fi-SoC met geïntegreerde MCU'],
      ['Processorkern', 'Tensilica L106 32-bits RISC'],
      ['Maximale klokfrequentie', '160MHz'],
      ['Draadloos', '2.4GHz Wi-Fi (IEEE 802.11 b/g/n)'],
      ['Geheugen op de chip', 'SRAM plus SPI-flashinterface'],
      ['Ondersteuning voor externe flash', 'SPI-flash tot 16MB (extern)'],
      ['Behuizing', 'QFN-32, 5x5mm'],
      ['Voedingsspanning', '2.5V tot 3.6V'],
      ['Bedrijfstemperatuur', '-40°C tot +85°C, sommige varianten opgegeven tot +125°C'],
      ['Levenscyclusstatus', 'Niet aanbevolen voor nieuwe ontwerpen; ESP8684 voorgesteld'],
    ],
    about:
      'De ESP8266EX is een sterk geïntegreerde Wi-Fi-SoC van Espressif die een 32-bits RISC-kern Tensilica L106 tot maximaal 160MHz combineert met 2.4GHz Wi-Fi volgens IEEE 802.11 b/g/n. Hij komt in een QFN-32-behuizing van 5x5mm, werkt op een voeding van 2.5V tot 3.6V en is in de standaardversies gespecificeerd voor -40 tot +85°C. De chip biedt SRAM en een SPI-flashinterface en kan externe SPI-flash tot 16MB aansturen. Typische toepassingen zijn smarthome-apparaten, slimme stopcontacten, sensorgateways, Wi-Fi-modules zoals ESP-01 en ESP-12, en industriële IoT-knooppunten.',
    standards: [
      'Espressif ESP8266EX Datasheet Version 7.1',
      'RoHS-conform',
      'JEDEC-verpakkings- en ESD-normen',
      'REACH-conform',
      'IEEE 802.11 b/g/n en het certificeringskader van de Wi-Fi Alliance',
      'ESD-gevoelig onderdeel — alleen onder ESD-veilige omstandigheden hanteren',
    ],
    features: [
      '32-bits RISC-kern Tensilica L106 tot maximaal 160MHz',
      'Geïntegreerde 2.4GHz Wi-Fi volgens IEEE 802.11 b/g/n',
      'SRAM op de chip plus een SPI-flashinterface',
      'Ondersteunt externe SPI-flash tot 16MB',
      'Voeding van 2.5V tot 3.6V',
      'Gespecificeerd voor -40 tot +85°C, sommige varianten opgegeven tot +125°C',
      'QFN-32-behuizing van 5x5mm',
      'Databladnotitie: VDDPST-voedingsdomein bijgewerkt van 1.8 tot 3.3V naar 1.8 tot 3.6V',
    ],
    applications: [
      'Smarthome-apparaten',
      'Slimme stopcontacten',
      'Sensorgateways',
      'Wi-Fi-modules zoals ESP-01 en ESP-12',
      'Industriële IoT-knooppunten',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de ESP8266EX gebruikt?',
        a: 'Hij wordt gebruikt in smarthome-producten, slimme stopcontacten, sensorgateways, Wi-Fi-modules zoals ESP-01 en ESP-12, en industriële IoT-knooppunten. De L106-kern en de geïntegreerde Wi-Fi-radio verzorgen zowel de applicatiecode als de netwerkverbinding, terwijl externe SPI-flash tot 16MB de firmware opslaat.',
      },
      {
        q: 'Wat controleren kopers voordat zij een ESP8266EX bestellen?',
        a: 'Kopers bepalen welke capaciteit aan externe SPI-flash nodig is, omdat de ESP8266EX geen interne flash heeft en met een flashgeheugen gecombineerd moet worden. Zij controleren ook RF-certificeringen zoals CE, FCC en SRRC samen met het moduleplan, verifiëren dat de onderdelen echt Espressif-product zijn en geen gekloond modulemateriaal, kiezen tussen de kale chip en een ESP-WROOM-module, en bepalen of het ontwerp beter naar de ESP32-C-serie kan overstappen. Prijs en minimale bestelhoeveelheid worden als laatste bekeken.',
      },
      {
        q: 'Hoe controleert YIXINOU een ESP8266EX vóór verzending?',
        a: 'Partijen in QFN-32 (5x5mm) worden vóór verzending gecontroleerd via markering, aantal pins en behuizingsinspectie tegen de bestelling. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Inspectiegegevens van de verzonden partij worden bewaard en op verzoek gedeeld.',
      },
    ],
  },

  'FS100R12KT4G': {
    mpn: 'FS100R12KT4G',
    brand: 'Infineon',
    title: '1200V-/100A-IGBT-module in EconoPACK 2, sixpack-topologie',
    category: 'Module',
    categoryHref: '/all-products',
    summary:
      'De FS100R12KT4G is een IGBT-vermogensmodule van Infineon met 1200V en 100A in een sixpack-driefasige volledige brugtopologie, waarbij voor deze bestelcode ook een PIM-uitvoering met drie eenheden wordt vermeld. Hij gebruikt Trench/Fieldstop IGBT4-technologie in een EconoPACK 2-behuizing en is gespecificeerd voor bedrijf van -40 tot +150°C. De module is ontworpen volgens IEC 60747 en is RoHS-conform. Hij is geschikt voor industriële frequentieomvormers, motorregelingen, fotovoltaïsche omvormers, UPS-systemen, servoregelingen en hijs- en heftechniek.',
    img: '/assets/images/fs100r12kt4g-package.jpg',
    alt: 'Een EconoPACK 2-behuizing, de behuizing van de FS100R12KT4G',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Apparaattype', 'IGBT-vermogensmodule'],
      ['Collector-emitterspanning', '1200V'],
      ['Stroombelastbaarheid', '100A'],
      ['Schakeltopologie', 'Sixpack-driefasige volledige brug; ook PIM-topologie met drie eenheden vermeld'],
      ['IGBT-technologie', 'Trench/Fieldstop IGBT4'],
      ['Schakelaars per module', 'Zes'],
      ['Behuizing', 'EconoPACK 2'],
      ['Bedrijfstemperatuur', '-40°C tot +150°C'],
      ['Normen', 'IEC 60747'],
      ['RoHS', 'Conform'],
    ],
    about:
      'De FS100R12KT4G is een IGBT-module van Infineon met 1200V en 100A, gebouwd op Trench/Fieldstop IGBT4-technologie en geleverd in de EconoPACK 2-behuizing. Hij wordt aangeboden als sixpack-driefasige volledige brug, waarbij voor deze bestelcode ook een PIM-topologie met drie eenheden wordt vermeld, en is gespecificeerd voor bedrijf van -40 tot +150°C. De module volgt IEC 60747 en is RoHS-conform. Typische toepassingen zijn industriële frequentieomvormers, motorregelingen, fotovoltaïsche omvormers, UPS-systemen, servoregelingen en hijs- en heftechniek.',
    standards: [
      'IEC 60747',
      'RoHS-conform',
      'ESD-gevoelig onderdeel — alleen onder ESD-veilige omstandigheden hanteren',
    ],
    features: [
      'Collector-emitterspanning van 1200V bij 100A stroombelastbaarheid',
      'Trench/Fieldstop IGBT4-technologie',
      'Sixpack-topologie als driefasige volledige brug',
      'EconoPACK 2-behuizing',
      'Bedrijfsbereik van -40 tot +150°C',
      'Ontworpen volgens IEC 60747 en RoHS-conform',
      'Geschikt voor ontwerpen voor hoogvermogen-motorregeling en omvormers',
    ],
    applications: [
      'Industriële frequentieomvormers',
      'Motorregelingen',
      'Fotovoltaïsche omvormers',
      'UPS-systemen',
      'Servoregelingen',
      'Hijs- en heftechniek',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de FS100R12KT4G gebruikt?',
        a: 'Hij wordt gebruikt in industriële frequentieomvormers, motorregelingen, fotovoltaïsche omvormers, UPS-systemen, servoregelingen en hijs- en heftechniek. De sixpack-topologie vormt een complete driefasige omvormertrap, en de specificatie van 1200V / 100A dekt industriële aandrijvingen van gemiddeld vermogen.',
      },
      {
        q: 'Wat controleren kopers voordat zij een FS100R12KT4G bestellen?',
        a: 'Kopers stemmen eerst de schakeltopologie af, want een PIM-, sixpack- of halfbrugmodule is niet uitwisselbaar met een ander schakelconcept. Zij beoordelen ook het thermische ontwerp, met grondplaat, warmtegeleidingspasta en thermische weerstand van de koelplaat, die de levensduur van de module bepalen, en controleren de schakelverliezen tegen de keuze van de gate-weerstanden en de stroomverdeling bij parallel geschakelde modules. Omdat gereviseerde en uit oude apparatuur gehaalde Infineon-IGBT-modules veel voorkomen, verifiëren zij bovendien of de onderdelen echt zijn, en wegen zij de hoge prijs af tegen de lange levertijden.',
      },
      {
        q: 'Hoe controleert YIXINOU een FS100R12KT4G vóór verzending?',
        a: 'EconoPACK 2-modules worden vóór verzending gecontroleerd, waarbij de staat van de aansluitingen, de grondplaat, de montagegaten en de markeringen tegen de bestelling worden geverifieerd. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Foto’s van de werkelijke module worden samen met de verzendgegevens verstrekt.',
      },
    ],
  },

  'H54G68CYRBX248': {
    mpn: 'H54G68CYRBX248',
    brand: 'SK hynix',
    title: 'LPDDR4X-SDRAM-die van 64Gb (8GB) met 32-bits bus in BGA-200',
    category:
      'Geïntegreerde schakelingen (IC’s) / Geïntegreerde schakelingen (IC’s) / Geheugencomponenten / RAM / LPDDR',
    categoryHref: '/all-products',
    summary:
      'De H54G68CYRBX248 is een LPDDR4X-SDRAM-onderdeel van SK hynix met een dichtheid van 64Gb (8GB) in een 2Gx32-organisatie en een 32 bits brede databus. Hij werkt op 4266Mbps met VDD1 op 1.8V, VDD2 op 1.1V en VDDQ op 0.6V, en wordt geleverd in een BGA-behuizing met 200 balls. De vermelde gegevens geven een bedrijfstemperatuurbereik van 0 tot +85°C. Hij wordt gebruikt in vlaggenschiptelefoons, tablets, Chromebooks, automotive cockpit-domeincontrollers en edge-AI- en AR/VR-apparaten.',
    img: '/assets/images/h54g68cyrbx248-bga-200.jpg',
    alt: 'Een BGA-behuizing met 200 balls, de behuizing van de H54G68CYRBX248',
    imageNote:
      'Illustratieve behuizingsafbeelding. Vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Apparaattype', 'LPDDR4X SDRAM'],
      ['Dichtheid', '64Gb (8GB), 2Gx32-organisatie'],
      ['Datasnelheid', '4266Mbps'],
      ['Busbreedte', '32 bits (x32)'],
      ['Behuizing', 'BGA-200'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Voedingsspanning', 'VDD1 1.8V, VDD2 1.1V, VDDQ 0.6V'],
      ['Serie', 'H54G'],
      ['Bedrijfstemperatuur', '0°C tot +85°C'],
      ['Referentienorm', 'JESD209-4'],
    ],
    about:
      'De H54G68CYRBX248 is een LPDDR4X-SDRAM-die van 64Gb (8GB) van SK hynix, georganiseerd als 2Gx32 met een 32 bits brede databus. Hij werkt op 4266Mbps met VDD1 op 1.8V, VDD2 op 1.1V en VDDQ op 0.6V, volgt de LPDDR4X-referentienorm JESD209-4 en komt in een BGA-behuizing met 200 balls die is gespecificeerd van 0 tot +85°C. Typische toepassingen zijn vlaggenschipsmartphones, tablets, Chromebooks, automotive cockpit-domeincontrollers en edge-AI- of AR/VR-apparaten.',
    standards: [
      'JESD209-4',
      'ESD-gevoelig onderdeel — alleen onder ESD-veilige omstandigheden hanteren',
    ],
    features: [
      'LPDDR4X SDRAM met een dichtheid van 64Gb (8GB)',
      '2Gx32-organisatie op een 32 bits brede databus',
      'Datasnelheid van 4266Mbps',
      'Rails VDD1 1.8V, VDD2 1.1V en VDDQ 0.6V',
      'BGA-behuizing met 200 balls',
      'Bedrijfsbereik van 0 tot +85°C',
      'Gebouwd volgens de LPDDR4X-referentienorm JESD209-4',
    ],
    applications: [
      'Vlaggenschipsmartphones',
      'Tablets',
      'Chromebooks',
      'Automotive cockpit-domeincontrollers',
      'Edge-AI- en AR/VR-apparaten',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de H54G68CYRBX248 gebruikt?',
        a: 'Hij wordt gebruikt in vlaggenschipsmartphones, tablets, Chromebooks, automotive cockpit-domeincontrollers en edge-AI- of AR/VR-apparaten. Eén enkele die van 64Gb (8GB) biedt een grote capaciteit in één behuizing, en de LPDDR4X-interface met 4266Mbps levert de geheugenbandbreedte die deze platformen verwachten.',
      },
      {
        q: 'Wat controleren kopers voordat zij een H54G68CYRBX248 bestellen?',
        a: 'Kopers controleren of de host-SoC de capaciteit van één enkele die van 8GB ondersteunt, want een grote capaciteit in één behuizing zit tegen de grens van de geheugencontroller aan. Zij bekijken de qualified vendor list van het platform voor Chromebook- en telefoonontwerpen, verifiëren dat de onderdelen originele dies zijn en geen gedowngrade materiaal, omdat dit onderdeelnummer in white-labelvorm is gezien, en beoordelen het thermische en betrouwbaarheidsgedrag van de gestapelde behuizing, de partijconsistentie en de langetermijnlevering.',
      },
      {
        q: 'Hoe controleert YIXINOU een H54G68CYRBX248 vóór verzending?',
        a: 'BGA-200-partijen worden vóór verzending geverifieerd, waarbij het aantal balls, de behuizingsafmetingen, de markering en de datumcode met de bestelling worden vergeleken. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. De resultaten worden bij de partij gearchiveerd en op verzoek met de zending meegeleverd.',
      },
    ],
  },

  'H5CG46MEBDX015N': {
    mpn: 'H5CG46MEBDX015N',
    brand: 'SK hynix',
    title: 'DDR5 SDRAM-die van 16Gb op 4800Mbps in FCBGA-106',
    category:
      'Geïntegreerde schakelingen (IC’s) / Geïntegreerde schakelingen (IC’s) / Geheugencomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'De H5CG46MEBDX015N is een DDR5-SDRAM-onderdeel van SK hynix met een dichtheid van 16Gb en een datasnelheid van 4800Mbps. Hij werkt op een voeding van 1.045V tot 1.155V met een VPP-rail van 1.8V en wordt geleverd in een FCBGA-behuizing met 106 balls die op het oppervlak van de print wordt gemonteerd. Hij gebruikt een synchrone interface en is gespecificeerd van 0 tot +95°C. Het onderdeel is gebouwd volgens de DDR5-referentienorm JESD79-5 en wordt gebruikt in geheugenmodules voor servers en werkstations, industriële computers, edge-servers en datacenterapparatuur.',
    img: '/assets/images/h5cg46mebdx015n-fcbga-106.jpg',
    alt: 'Een FCBGA-behuizing met 106 balls, de behuizing van de H5CG46MEBDX015N',
    imageNote:
      'Illustratieve behuizingsafbeelding. Vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Apparaattype', 'DDR5 SDRAM, synchroon'],
      ['Dichtheid', '16Gb'],
      ['Datasnelheid', '4800Mbps'],
      ['Behuizing', 'FCBGA-106'],
      ['Aantal pins', '106'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Voedingsspanning', '1.045V tot 1.155V; VPP 1.8V'],
      ['Serie', 'H5CG'],
      ['Bedrijfstemperatuur', '0°C tot +95°C'],
      ['Referentienorm', 'JESD79-5'],
    ],
    about:
      'De H5CG46MEBDX015N is een DDR5-SDRAM-die van 16Gb van SK hynix in een FCBGA-behuizing met 106 balls. Hij loopt op 4800Mbps, gebruikt een synchrone interface met een voeding van 1.045V tot 1.155V en een VPP-rail van 1.8V, en is gespecificeerd van 0 tot +95°C. Het onderdeel is gebouwd volgens de DDR5-referentienorm JESD79-5. Typische toepassingen zijn DDR5-geheugenmodules voor servers en werkstations, industriële computers, edge-servers en datacenterapparatuur.',
    standards: [
      'JESD79-5',
      'ESD-gevoelig onderdeel — alleen onder ESD-veilige omstandigheden hanteren',
    ],
    features: [
      'DDR5 SDRAM met een dichtheid van 16Gb',
      'Datasnelheid van 4800Mbps',
      'FCBGA-behuizing met 106 balls',
      'Voeding van 1.045V tot 1.155V met een VPP-rail van 1.8V',
      'Synchrone interface',
      'Bedrijfsbereik van 0 tot +95°C',
      'Gebouwd volgens de DDR5-referentienorm JESD79-5',
    ],
    applications: [
      'DDR5-geheugenmodules voor servers en werkstations',
      'Industriële computers',
      'Edge-servers',
      'Datacenterapparatuur',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de H5CG46MEBDX015N gebruikt?',
        a: 'Hij wordt gebruikt op DDR5-geheugenmodules voor servers en werkstations, en in industriële computers, edge-servers en datacenterapparatuur. De dichtheid van 16Gb op 4800Mbps levert de capaciteit en bandbreedte die platformgeheugen nodig heeft, van servermodules tot compacte edgesystemen.',
      },
      {
        q: 'Wat controleren kopers voordat zij een H5CG46MEBDX015N bestellen?',
        a: 'Kopers controleren de platformcompatibiliteit, want een onderdeel van 4800Mbps loopt op een 5600-platform op een verlaagde snelheid. Zij verifiëren ook dat de onderdelen originele dies zijn en geen gedowngrade materiaal, bevestigen hoe on-die ECC samenwerkt met het ECC-schema van het systeem, en beoordelen platformkwalificatie, partijconsistentie, prijs en levertijd.',
      },
      {
        q: 'Hoe controleert YIXINOU een H5CG46MEBDX015N vóór verzending?',
        a: 'FCBGA-106-partijen worden vóór verzending gecontroleerd, waarbij het aantal balls, de markering, de staat van de behuizing en de datumcode tegen de bestelling worden geverifieerd. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Inspectiegegevens reizen mee met de zending en foto’s van de partij zijn op verzoek beschikbaar.',
      },
    ],
  },

  'H5CG48MEBDX014N': {
    mpn: 'H5CG48MEBDX014N',
    brand: 'SK hynix',
    title: 'DDR5 SDRAM-geheugendie van 16Gb x8 in een FCBGA-behuizing met 78 balls',
    category:
      'Geïntegreerde schakelingen (IC’s) / Geïntegreerde schakelingen (IC’s) / Geheugencomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'De H5CG48MEBDX014N is een DDR5-SDRAM-die van SK hynix met een dichtheid van 16Gb en een x8-databus, geleverd in een FCBGA-behuizing met 78 balls voor oppervlaktemontage. Hij heeft een snelheidsklasse van 4800 MHz en werkt op een VDD/VDDQ-rail van 1.1 V met een aparte VPP-voeding van 1.8 V, binnen een voedingsvenster van 1.045 V tot 1.155 V. Het nominale bedrijfsbereik is 0 °C tot 85 °C en het ontwerp volgt de DDR5-norm JEDEC JESD79-5. Typische toepassingen zijn RDIMM-modules voor servers, enterpriseopslag, industriële computers en servers voor AI-training of -inferentie.',
    img: '/assets/images/h5cg48mebdx014n-fcbga-78.jpg',
    alt: 'Een FCBGA-behuizing met 78 balls, de behuizing van de H5CG48MEBDX014N',
    imageNote:
      'Illustratieve behuizingsafbeelding. Vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'FCBGA'],
      ['Aantal pins', '78'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Geheugengrootte', '16Gb'],
      ['Geheugentechnologie', 'DDR5 SDRAM'],
      ['Databusbreedte', 'x8'],
      ['Snelheidsklasse', '4800 MHz'],
      ['Voedingsspanning', '1.1 V (VDD/VDDQ), 1.8 V (VPP)'],
      ['Voedingsvenster', '1.045 V tot 1.155 V'],
      ['Bedrijfstemperatuur', '0 °C tot 85 °C'],
    ],
    about:
      'De H5CG48MEBDX014N is een DDR5-SDRAM-onderdeel van SK hynix met een dichtheid van 16Gb en een x8-organisatie, verpakt als FCBGA met 78 balls voor oppervlaktemontage. Het is gespecificeerd voor een snelheidsklasse van 4800 MHz, een VDD/VDDQ-voeding van 1.1 V met een VPP-rail van 1.8 V, en een voedingsvenster van 1.045 V tot 1.155 V over een bedrijfsbereik van 0 °C tot 85 °C. Het onderdeel volgt de DDR5-norm JEDEC JESD79-5. Het is bedoeld voor RDIMM-geheugenmodules voor servers, enterpriseopslagsystemen, industriële computers en servers voor AI-training of -inferentie, als DDR5-die van 16Gb x8 per modulerank.',
    standards: [
      'JEDEC JESD79-5',
    ],
    features: [
      'DDR5 SDRAM met een dichtheid van 16Gb en een x8-databus',
      'Snelheidsklasse van 4800 MHz voor DDR5-moduleopbouw',
      'VDD/VDDQ-voeding van 1.1 V met een aparte VPP-rail van 1.8 V',
      'Voedingsvenster van 1.045 V tot 1.155 V',
      'FCBGA-behuizing met 78 balls voor oppervlaktemontage',
      'Bedrijfsbereik van 0 °C tot 85 °C',
      'Ontworpen volgens de DDR5-norm JEDEC JESD79-5',
    ],
    applications: [
      'RDIMM-geheugenmodules voor servers',
      'Enterpriseopslagsystemen',
      'Industriële computers',
      'Servers voor AI-training en -inferentie',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de H5CG48MEBDX014N gebruikt?',
        a: 'Het is een DDR5-SDRAM-die van 16Gb x8 die wordt gebruikt in RDIMM-geheugenmodules voor servers, enterpriseopslagsystemen, industriële computers en servers voor AI-training of -inferentie, waar een DDR5-snelheidsklasse van 4800 MHz en een rail van 1.1 V vereist zijn.',
      },
      {
        q: 'Wat controleren kopers voordat zij een H5CG48MEBDX014N bestellen?',
        a: 'Kopers bevestigen doorgaans hoe de snelheidsklassen 4800 en 5600 gesubstitueerd of gemengd kunnen worden, omdat gemengde DDR5-populaties terugvallen op de lagere snelheid; of de die origineel is of een gedowngrade onderdeel; de ondersteuning van On-Die ECC; de compatibiliteitscertificering met het doelmoederbord of de doel-CPU; de prijsvolatiliteit en prijsvastlegging; en de partij-tot-partijconsistentie.',
      },
      {
        q: 'Hoe controleert YIXINOU een H5CG48MEBDX014N vóór verzending?',
        a: 'Voor elke FCBGA-partij met 78 balls beoordelen wij de markering, de verpakking en de partijcode tegen de bestelling en bevestigen wij de hoeveelheid vóór verzending. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Vraag ons om een foto van de werkelijke partij voordat u zich vastlegt.',
      },
    ],
  },

  'H5TC4G63EFR-PBA': {
    mpn: 'H5TC4G63EFR-PBA',
    brand: 'SK hynix',
    title: 'DDR3L SDRAM, 4Gb x16, 1600 MHz in een FBGA-behuizing met 96 balls',
    category:
      'Geïntegreerde schakelingen (IC’s) / Geïntegreerde schakelingen (IC’s) / Geheugencomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'De H5TC4G63EFR-PBA is een DDR3L-SDRAM van SK hynix met een dichtheid van 4Gb en een x16-organisatie, geleverd in een FBGA-behuizing met 96 balls voor oppervlaktemontage. Hij loopt op een snelheidsklasse van 1600 MHz (DDR3-1600, CL11) op een voeding van 1.35 V die ook bruikbaar is in DDR3-ontwerpen met 1.5 V, binnen een voedingsvenster van 1.283 V tot 1.45 V. Het record van de vergelijkingspagina geeft het onderdeel een bereik van -40 °C tot 105 °C, en het ontwerp volgt de norm JEDEC JESD79-3. Hij wordt gebruikt in industriële besturingskaarten, netwerkapparatuur, settopboxen, reclamedisplays, infotainmentsystemen in de auto en DDR3-platformgeheugenmodules.',
    img: '/assets/images/h5tc4g63efr-pba-fbga-96.jpg',
    alt: 'Een FBGA-behuizing met 96 balls, de behuizing van de H5TC4G63EFR-PBA',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'FBGA'],
      ['Aantal pins', '96'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Geheugengrootte', '4Gb'],
      ['Geheugentechnologie', 'DDR3L SDRAM'],
      ['Databusbreedte', 'x16'],
      ['Snelheidsklasse', '1600 MHz (DDR3-1600, CL11)'],
      ['Voedingsspanning', '1.35 V (compatibel met 1.5 V)'],
      ['Voedingsvenster', '1.283 V tot 1.45 V'],
      ['Bedrijfstemperatuur', '-40 °C tot 105 °C'],
    ],
    about:
      'De H5TC4G63EFR-PBA is een DDR3L-SDRAM-onderdeel van SK hynix met een dichtheid van 4Gb en een x16-organisatie, verpakt als FBGA met 96 balls voor oppervlaktemontage. Het is gespecificeerd voor een snelheidsklasse van 1600 MHz (DDR3-1600, CL11) met een voeding van 1.35 V die ook in DDR3-ontwerpen met 1.5 V werkt, en een voedingsvenster van 1.283 V tot 1.45 V. Het record van de vergelijkingspagina geeft een bedrijfsbereik van -40 °C tot 105 °C, en het onderdeel volgt de norm JEDEC JESD79-3. Het wordt gebruikt op industriële besturingsmoederborden, netwerkapparatuur, settopboxen, reclamedisplays, infotainmentsystemen in de auto en DDR3-platformgeheugenmodules.',
    standards: [
      'JEDEC JESD79-3',
    ],
    features: [
      'DDR3L SDRAM met een dichtheid van 4Gb en een x16-databus',
      'Snelheidsklasse van 1600 MHz, DDR3-1600 met CL11-latentie',
      'Werking op 1.35 V met compatibiliteit met DDR3 op 1.5 V',
      'Voedingsvenster van 1.283 V tot 1.45 V',
      'FBGA-behuizing met 96 balls voor oppervlaktemontage',
      'Bedrijfsbereik van -40 °C tot 105 °C',
      'Ontworpen volgens de norm JEDEC JESD79-3',
    ],
    applications: [
      'Industriële besturingsmoederborden',
      'Netwerkapparatuur',
      'Settopboxen',
      'Reclamedisplays',
      'Infotainmentsystemen in de auto',
      'DDR3-platformgeheugenmodules',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de H5TC4G63EFR-PBA gebruikt?',
        a: 'Het is een DDR3L-SDRAM-die van 4Gb x16 die wordt gebruikt op industriële besturingsmoederborden, netwerkapparatuur, settopboxen, reclamedisplays, infotainmentsystemen in de auto en DDR3-platformgeheugenmodules waar een DDR3L-die van 1600 MHz nodig is.',
      },
      {
        q: 'Wat controleren kopers voordat zij een H5TC4G63EFR-PBA bestellen?',
        a: 'Kopers controleren de compatibiliteit en het mengrisico tussen de rails van 1.35 V DDR3L en 1.5 V DDR3; of het onderdeel end-of-life is bereikt en welke vervanger beschikbaar is; het prijsverschil tussen originele en white-label-dies; de bandbreedte- en routingverschillen tussen x16- en x8-organisaties; of een industriële of een commerciële temperatuurklasse nodig is; en de partij-tot-partijconsistentie.',
      },
      {
        q: 'Hoe controleert YIXINOU een H5TC4G63EFR-PBA vóór verzending?',
        a: 'Elke FBGA-partij met 96 balls wordt vóór verzending tegen de bestelling gecontroleerd op markering, partijcode en hoeveelheid. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Foto’s van de werkelijke partij zijn op verzoek beschikbaar.',
      },
    ],
  },

  'H9HCNNNBKMMLXR-NEE': {
    mpn: 'H9HCNNNBKMMLXR-NEE',
    brand: 'SK hynix',
    title: 'LPDDR4X SDRAM 16Gb x32 in een FBGA-behuizing met 200 balls',
    category:
      'Geïntegreerde schakelingen (IC’s) / Geïntegreerde schakelingen (IC’s) / Geheugencomponenten / RAM / LPDDR',
    categoryHref: '/all-products',
    summary:
      'De H9HCNNNBKMMLXR-NEE is een LPDDR4X-SDRAM van SK hynix met een dichtheid van 16Gb en een x32-databus, geleverd in een FBGA-behuizing met 200 balls voor oppervlaktemontage. Hij loopt op een klok van 2.133 GHz, wat overeenkomt met een datasnelheid van 4266 Mbps, op een VDD1-rail van 1.7 V tot 1.95 V en een VDD2-rail van 1.06 V tot 1.17 V. Het nominale bedrijfsbereik is -25 °C tot 85 °C en het ontwerp volgt de norm JEDEC JESD209-4. Hij wordt gebruikt in vlaggenschip- en midden-hogere smartphones, tablets, automotive cockpits, AR- en VR-apparaten en edge-AI-boxen.',
    img: '/assets/images/h9hcnnnbkmmlxr-nee-fbga-200.jpg',
    alt: 'Een FBGA-behuizing met 200 balls, de behuizing van de H9HCNNNBKMMLXR-NEE',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'FBGA'],
      ['Aantal pins', '200'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Geheugengrootte', '16Gb'],
      ['Geheugentechnologie', 'LPDDR4X SDRAM'],
      ['Databusbreedte', 'x32'],
      ['Klokfrequentie', '2.133 GHz (4266 Mbps)'],
      ['Voedingsspanning', '1.7 V tot 1.95 V (VDD1), 1.06 V tot 1.17 V (VDD2)'],
      ['Serie', 'H9HCNNN'],
      ['Bedrijfstemperatuur', '-25 °C tot 85 °C'],
    ],
    about:
      'De H9HCNNNBKMMLXR-NEE is een low-power DDR4X-SDRAM-onderdeel van SK hynix met een dichtheid van 16Gb en een x32-organisatie, verpakt als FBGA met 200 balls voor oppervlaktemontage. Hij loopt op een klok van 2.133 GHz, gelijk aan een datasnelheid van 4266 Mbps, op een VDD1-rail van 1.7 V tot 1.95 V en een VDD2-rail van 1.06 V tot 1.17 V. Het record van de vergelijkingspagina geeft een bedrijfsbereik van -25 °C tot 85 °C, en het onderdeel volgt de norm JEDEC JESD209-4. Het is bedoeld voor vlaggenschip- en midden-hogere smartphones, tablets, automotive cockpits, AR- en VR-apparaten en edge-AI-boxen met een x32 LPDDR4X-geheugenkanaal.',
    standards: [
      'JEDEC JESD209-4',
    ],
    features: [
      'LPDDR4X SDRAM met een dichtheid van 16Gb en een x32-databus',
      'Klok van 2.133 GHz, gelijk aan een datasnelheid van 4266 Mbps',
      'Dubbele voeding, VDD1 1.7 V tot 1.95 V en VDD2 1.06 V tot 1.17 V',
      'FBGA-behuizing met 200 balls voor oppervlaktemontage',
      'Bedrijfsbereik van -25 °C tot 85 °C',
      'Compacte single-die-behuizing voor ruimtebeperkte boards',
      'Ontworpen volgens de norm JEDEC JESD209-4',
    ],
    applications: [
      'Vlaggenschip- en midden-hogere smartphones',
      'Tablets',
      'Automotive cockpits',
      'AR- en VR-apparaten',
      'Edge-AI-boxen',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de H9HCNNNBKMMLXR-NEE gebruikt?',
        a: 'Het is een LPDDR4X-SDRAM-die van 16Gb x32 die wordt gebruikt in vlaggenschip- en midden-hogere smartphones, tablets, automotive cockpits, AR- en VR-apparaten en edge-AI-boxen, waar een low-power geheugenkanaal van 4266 Mbps vereist is.',
      },
      {
        q: 'Wat controleren kopers voordat zij een H9HCNNNBKMMLXR-NEE bestellen?',
        a: 'Kopers controleren het onderdeel tegen de DDR-ondersteuningslijst van de host-SoC, bijvoorbeeld platformen van Rockchip, Qualcomm of MediaTek; de boardopbouw en het thermische ontwerp dat nodig is voor één enkele die met grote dichtheid; of het geheugen origineel is of een white-label-die; de spanningsverschillen tussen LPDDR4X en LPDDR4; de herkomst van partij en behuizing; en prijs en levertijd.',
      },
      {
        q: 'Hoe controleert YIXINOU een H9HCNNNBKMMLXR-NEE vóór verzending?',
        a: 'Elke FBGA-partij met 200 balls wordt vóór verzending tegen de bestelling geverifieerd op markering, partijcode en hoeveelheid. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Wij sturen foto’s van de werkelijke partij op verzoek.',
      },
    ],
  },

  'HF115F-A-230-2ZS4': {
    mpn: 'HF115F-A/230-2ZS4',
    brand: 'Hongfa',
    title: 'HF115F miniatuur hoogvermogenrelais, 230 VAC-spoel, 2 Form C-contacten',
    category: 'Overige',
    categoryHref: '/all-products',
    summary:
      'De HF115F-A/230-2ZS4 is een miniatuur hoogvermogenrelais uit de HF115F-serie van Hongfa met een AC-spoel van 230 VAC en twee wisselcontacten (2 Form C, 2 CO). Hij schakelt tot 8 A bij 250 VAC, komt in een through-hole DIP-behuizing met 8 pins en is gespecificeerd van -40 °C tot +70 °C. Het onderdeel valt onder IEC 61810 en UL508 en is RoHS-conform. Het wordt gebruikt voor de besturing van huishoudelijke apparaten zoals airconditioners, wasmachines en boilers, in industriële besturingskaarten, elektriciteitsmeters, verlichtingsbesturing en slimme elektriciteitsmeters.',
    img: '/assets/images/hf115f-a-230-2zs4-package.jpg',
    alt: 'Een through-hole DIP-relaisbehuizing met 8 pins, de behuizing van de HF115F-A/230-2ZS4',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'Through-hole DIP, 8 pin'],
      ['Aantal pins', '8'],
      ['Montagewijze', 'Through-hole'],
      ['Relaistype', 'Miniatuur hoogvermogenrelais, HF115F-serie'],
      ['Spoelspanning', '230 VAC'],
      ['Contactconfiguratie', '2 Form C (2 CO, twee wisselcontacten)'],
      ['Contactbelasting', '8 A bij 250 VAC'],
      ['Spoeltype', 'AC-spoel'],
      ['Bedrijfstemperatuur', '-40 °C tot +70 °C'],
      ['Normen', 'IEC 61810, UL508, RoHS'],
    ],
    about:
      'De HF115F-A/230-2ZS4 is een miniatuur hoogvermogenrelais uit de HF115F-serie van Hongfa. Het heeft een AC-spoel van 230 VAC en twee wisselcontacten (2 Form C, 2 CO) met een belasting van 8 A en 250 VAC, en het is ondergebracht in een through-hole DIP-behuizing met 8 pins die geschikt is voor standaard PCB-assemblage. Het relais is gespecificeerd voor een bedrijfsbereik van -40 °C tot +70 °C en valt onder IEC 61810 en UL508, met RoHS-conformiteit. Het wordt gebruikt om belastingen van apparaten te schakelen in airconditioners, wasmachines en boilers, en in industriële besturingskaarten, elektriciteitsmeters, verlichtingsbesturing en slimme elektriciteitsmeters.',
    standards: [
      'IEC 61810',
      'UL508',
      'RoHS-conform',
    ],
    features: [
      'AC-spoel van 230 VAC met twee wisselcontacten (2 Form C, 2 CO)',
      'Contactbelasting van 8 A bij 250 VAC',
      'Through-hole DIP-behuizing met 8 pins voor standaard PCB-assemblage',
      'Bedrijfsbereik van -40 °C tot +70 °C',
      'Miniatuur hoogvermogenrelais uit de HF115F-serie van Hongfa',
      'Valt onder IEC 61810 en UL508, RoHS-conform',
    ],
    applications: [
      'Besturing van huishoudelijke apparaten (airconditioners, wasmachines, boilers)',
      'Industriële besturingskaarten',
      'Elektriciteitsmeters',
      'Verlichtingsbesturing',
      'Slimme elektriciteitsmeters',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de HF115F-A/230-2ZS4 gebruikt?',
        a: 'Het is een relais met een spoel van 230 VAC en twee wisselcontacten van 8 A, dat wordt gebruikt om belastingen van apparaten te schakelen in airconditioners, wasmachines en boilers, en in industriële besturingskaarten, elektriciteitsmeters, verlichtingsbesturing en slimme elektriciteitsmeters.',
      },
      {
        q: 'Wat controleren kopers voordat zij een HF115F-A/230-2ZS4 bestellen?',
        a: 'Kopers controleren of de spoelspanning bij het aanstuurcircuit past, want een spoel van 230 VAC vraagt om een triac of een relaisschakelaar en kan niet vanuit 5 V-logica worden aangestuurd; de derating van het contact van 8 A bij 250 VAC voor inductieve, capacitieve of lamplasten; de elektrische en mechanische levensduurcijfers; de pinafstand en de PCB-layout; of de onderdelen echt Hongfa-product zijn, omdat namaak in deze markt veel voorkomt; en prijs en minimale bestelhoeveelheid.',
      },
      {
        q: 'Hoe controleert YIXINOU een HF115F-A/230-2ZS4 vóór verzending?',
        a: 'Voor dit through-hole DIP-relais met 8 pins controleren wij de spoelmarkering, de contactconfiguratie, de pinindeling en de hoeveelheid tegen de bestelling vóór verzending. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Foto’s van de werkelijke partij zijn op verzoek beschikbaar.',
      },
    ],
  },

  'HMC472ALP4ETR': {
    mpn: 'HMC472ALP4ETR',
    brand: 'Analog Devices',
    title: 'GaAs MMIC digitale verzwakker, 0.5 dB LSB, 6 bit, DC tot 3.8 GHz',
    category:
      'Geïntegreerde schakelingen (IC’s) / Geïntegreerde schakelingen (IC’s) / RF-halfgeleiders en -componenten / RF-verzwakkers',
    categoryHref: '/all-products',
    summary:
      'De HMC472ALP4ETR is een 6-bits GaAs MMIC digitale verzwakker van Analog Devices met een LSB van 0.5 dB en een verzwakkingsbereik van 31.5 dB, werkend van DC tot 3.8 GHz. Het invoegverlies blijft onder 2 dB en het input-interceptpunt van de derde orde is 48 dBm. Hij werkt op een enkele voeding van +5 V met een typische stroom van 2.6 mA en schakelt in 30 ns, aangestuurd in parallelle of seriële modus met TTL- en CMOS-compatibele niveaus. Hij wordt gebruikt in communicatiebasisstations, test- en meetinstrumenten, phased-arrayradar, RF-zendontvanger-frontends en satellietcommunicatie.',
    img: '/assets/images/hmc472alp4etr-qfn-24.jpg',
    alt: 'Een LFCSP-behuizing (QFN) met 24 aansluitingen van 4 mm x 4 mm, de behuizing van de HMC472ALP4ETR',
    imageNote:
      'Illustratieve behuizingsafbeelding. Vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'QFN, 24-lead LFCSP (4 mm x 4 mm, LP4)'],
      ['Aantal pins', '24'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Frequentiebereik', 'DC tot 3.8 GHz'],
      ['Verzwakkingsbereik', '31.5 dB'],
      ['Verzwakkingsstap', '0.5 dB LSB, 6 bit'],
      ['Besturingsinterface', '6-bits parallel of serieel, TTL- en CMOS-compatibel'],
      ['Voedingsspanning', '5 V enkele voeding (max. 2.6 mA)'],
      ['Schakeltijd', '30 ns'],
      ['Bedrijfstemperatuur', '-40 °C tot 85 °C'],
    ],
    about:
      'De HMC472ALP4ETR is een 6-bits GaAs MMIC digitale stappenverzwakker van Analog Devices, werkend van DC tot 3.8 GHz met een least significant bit van 0.5 dB en een verzwakkingsbereik van 31.5 dB. Het invoegverlies blijft onder 2 dB en het input-interceptpunt van de derde orde bereikt 48 dBm. Het onderdeel werkt op een enkele voeding van +5 V bij maximaal 2.6 mA, schakelt in 30 ns en wordt aangestuurd via een 6-bits parallelle of seriële besturingsbus met TTL- en CMOS-compatibele niveaus. Het komt in een LFCSP met 24 aansluitingen van 4 mm x 4 mm en wordt gebruikt in basisstations, testinstrumenten, phased-arrayradar, RF-frontends en satellietverbindingen.',
    standards: [
      'Analog Devices datasheet HMC472A (v02.0420)',
      'RoHS-conform',
      'Voldoet aan JEDEC-behuizings- en ESD-normen',
      'MSL3-vochtgevoeligheidsniveau (J-STD-020)',
      'ESD-gevoelig onderdeel — alleen onder ESD-veilige omstandigheden hanteren',
    ],
    features: [
      '6-bits digitale verzwakker met een least significant bit van 0.5 dB',
      'Verzwakkingsbereik van 31.5 dB van DC tot 3.8 GHz',
      'Invoegverlies onder 2 dB over de band',
      'Input-interceptpunt van de derde orde van 48 dBm',
      'Enkele voeding van +5 V met een maximale stroom van 2.6 mA',
      'Schakeltijd van 30 ns',
      'Parallelle en seriële besturing, TTL- en CMOS-compatibel',
      'LFCSP-behuizing met 24 aansluitingen van 4 mm x 4 mm',
    ],
    applications: [
      'Communicatiebasisstations',
      'Test- en meetinstrumenten (spectrumanalysatoren, signaalbronnen)',
      'Phased-arrayradar',
      'RF-zendontvanger-frontends',
      'Satellietcommunicatie',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de HMC472ALP4ETR gebruikt?',
        a: 'Het is een 6-bits GaAs MMIC digitale verzwakker van DC tot 3.8 GHz die wordt gebruikt in communicatiebasisstations, test- en meetinstrumenten zoals spectrumanalysatoren en signaalbronnen, phased-arrayradar, RF-zendontvanger-frontends en satellietcommunicatie, overal waar niveauregeling met een stap van 0.5 dB en een bereik van 31.5 dB nodig is.',
      },
      {
        q: 'Wat controleren kopers voordat zij een HMC472ALP4ETR bestellen?',
        a: 'Kopers controleren het invoegverlies en de verzwakkingsnauwkeurigheid per bit, waar de fouten rond ±0.3 dB liggen; de niveaus van de besturingsinterface voor seriële, parallelle of gelatchte werking; de opzet met één voeding en het ontwerp van de bypass-ontkoppeling; de breedbandige impedantieaanpassing en de RF-spoorlayout op de PCB; of de onderdelen echt Analog Devices-product zijn, omdat nagemaakte microgolfcomponenten veel voorkomen; en de hoge prijs in combinatie met lange levertijden.',
      },
      {
        q: 'Hoe controleert YIXINOU een HMC472ALP4ETR vóór verzending?',
        a: 'Voor elke LFCSP-partij met 24 aansluitingen controleren wij de markering, de datumcode, de reellabels en de hoeveelheid tegen de bestelling vóór verzending. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Vraag ons om een foto van de werkelijke partij voordat u zich vastlegt.',
      },
    ],
  },

  'HMC624ALP4ETR': {
    mpn: 'HMC624ALP4ETR',
    brand: 'Analog Devices',
    title: 'GaAs digitale verzwakker, 0.5 dB LSB, 6 bit, 0.1 GHz tot 6.0 GHz',
    category:
      'Geïntegreerde schakelingen (IC’s) / Geïntegreerde schakelingen (IC’s) / RF-halfgeleiders en -componenten / RF-verzwakkers',
    categoryHref: '/all-products',
    summary:
      'De HMC624ALP4ETR is een 6-bits GaAs digitale verzwakker van Analog Devices met een LSB van 0.5 dB en een verzwakkingsbereik van 31.5 dB, werkend van 0.1 GHz tot 6.0 GHz. Hij werkt op een enkele voeding van +3 V tot +5 V en schakelt in 30 ns, met 6-bits seriële of parallelle besturing die seriële adresselectie ondersteunt. Het onderdeel komt in een LFCSP met 24 aansluitingen van 4 mm x 4 mm en wordt geleverd op tape en reel. Het wordt gebruikt in 5G-communicatie, microgolftestinstrumenten, radar, elektronische oorlogsvoering en automatische gainregeling in RF-zendontvangerketens.',
    img: '/assets/images/hmc624alp4etr-qfn-24.jpg',
    alt: 'Een LFCSP-behuizing (QFN) met 24 aansluitingen van 4 mm x 4 mm, de behuizing van de HMC624ALP4ETR',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'QFN, 24-lead LFCSP (4 mm x 4 mm, LP4)'],
      ['Aantal pins', '24'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Frequentiebereik', '0.1 GHz tot 6.0 GHz'],
      ['Verzwakkingsbereik', '31.5 dB'],
      ['Verzwakkingsstap', '0.5 dB LSB, 6 bit'],
      ['Besturingsinterface', '6-bits serieel of parallel, met seriële adresselectie'],
      ['Voedingsspanning', '3 V tot 5 V enkele voeding'],
      ['Schakeltijd', '30 ns'],
      ['Bedrijfstemperatuur', '-40 °C tot 85 °C'],
    ],
    about:
      'De HMC624ALP4ETR is een 6-bits GaAs digitale verzwakker van Analog Devices voor 0.1 GHz tot 6.0 GHz, met een least significant bit van 0.5 dB en een verzwakkingsbereik van 31.5 dB. Hij werkt op een enkele voeding van +3 V tot +5 V, schakelt binnen 30 ns en accepteert 6-bits seriële of parallelle besturing met seriële adresselectie voor bussen met meerdere componenten. Het onderdeel is ondergebracht in een LFCSP met 24 aansluitingen van 4 mm x 4 mm en wordt geleverd op tape en reel. Het wordt gebruikt in 5G-communicatie, microgolftestinstrumenten, radar, elektronische oorlogsvoering en automatische gainregeling in RF-zendontvangerketens.',
    standards: [
      'Analog Devices datasheet HMC624A Rev. B',
      'RoHS-conform',
      'Voldoet aan JEDEC-behuizings- en ESD-normen, inclusief de thermische normen van JESD51',
      'MSL3-vochtgevoeligheidsniveau (J-STD-020)',
      'MSL1-vochtgevoeligheidsniveau (J-STD-020)',
      'ESD-gevoelig onderdeel — alleen onder ESD-veilige omstandigheden hanteren',
    ],
    features: [
      '6-bits digitale verzwakker met een least significant bit van 0.5 dB',
      'Verzwakkingsbereik van 31.5 dB van 0.1 GHz tot 6.0 GHz',
      'Enkele voeding van +3 V tot +5 V',
      'Schakeltijd van 30 ns',
      '6-bits seriële of parallelle besturing met seriële adresselectie',
      'LFCSP-behuizing met 24 aansluitingen van 4 mm x 4 mm',
      'Geleverd op tape en reel (ETR)',
      'GaAs MMIC-proces voor breedbandige RF-prestaties',
    ],
    applications: [
      '5G-communicatiesystemen',
      'Microgolftestinstrumenten',
      'Radar',
      'Elektronische oorlogsvoering',
      'Automatische gainregeling in RF-zendontvangerketens',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de HMC624ALP4ETR gebruikt?',
        a: 'Het is een 6-bits GaAs digitale verzwakker van 0.1 GHz tot 6.0 GHz die wordt gebruikt in 5G-communicatiesystemen, microgolftestinstrumenten, radar, apparatuur voor elektronische oorlogsvoering en automatische gainregellussen in RF-zendontvangerketens die niveauregeling met een stap van 0.5 dB en een bereik van 31.5 dB nodig hebben.',
      },
      {
        q: 'Wat controleren kopers voordat zij een HMC624ALP4ETR bestellen?',
        a: 'Kopers controleren het invoegverlies en de aanpassing aan de bovenkant van de band bij 6 GHz; of seriële of parallelle besturing wordt gebruikt en hoe de latch-timing zich gedraagt; of aparte GaAs-bias en DC-blokkeercondensatoren nodig zijn; de warmteafvoer en de opzet van de grounding-via’s op de PCB; of de onderdelen echt Analog Devices-product zijn; en levertijd en prijs, die op de microgolflijnen van ADI volatiel zijn.',
      },
      {
        q: 'Hoe controleert YIXINOU een HMC624ALP4ETR vóór verzending?',
        a: 'Elke LFCSP-partij met 24 aansluitingen wordt vóór verzending gecontroleerd op markering, datumcode, reellabels en hoeveelheid tegen de bestelling. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Wij sturen foto’s van de werkelijke partij op verzoek.',
      },
    ],
  },

  'ICM-42688-P': {
    mpn: 'ICM-42688-P',
    brand: 'InvenSense',
    title: '6-assige MEMS-inertiaalmeeteenheid in een LGA-behuizing met 14 pins',
    category: 'Sensor / Sensoren / bewegingssensoren / inertiaal meeteenheden (IMU’s)',
    categoryHref: '/all-products',
    summary:
      'De ICM-42688-P is een 6-assige MEMS-inertiaalmeeteenheid die een 3-assige versnellingsmeter en een 3-assige gyroscoop in één component combineert. Het volle-schaalbereik van de gyroscoop loopt van ±15.625 dps tot ±2000 dps, dat van de versnellingsmeter van ±2 g tot ±16 g, en de uitvoer is 16 bit of 18 bit. Hij communiceert via I2C, SPI of I3C, werkt van 1.71 V tot 3.6 V en komt in een LGA met 14 pins van 2.5 mm x 3.0 mm. Het bedrijfsbereik is -40 °C tot +85 °C en het onderdeel is RoHS-conform.',
    img: '/assets/images/icm-42688-p-package.jpg',
    alt: 'Een LGA-behuizing met 14 pins van 2.5 mm x 3.0 mm, de behuizing van de ICM-42688-P',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'LGA, 14 pin (2.5 mm x 3.0 mm)'],
      ['Aantal pins', '14'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Sensortype', '6-assige MEMS-IMU (3-assige versnellingsmeter en 3-assige gyroscoop)'],
      ['Bereik gyroscoop', '±15.625 dps tot ±2000 dps'],
      ['Bereik versnellingsmeter', '±2 g tot ±16 g'],
      ['Uitgangsresolutie', '16 bit / 18 bit'],
      ['Interface', 'I2C, SPI, I3C'],
      ['Voedingsspanning', '1.71 V tot 3.6 V'],
      ['Bedrijfstemperatuur', '-40 °C tot +85 °C'],
    ],
    about:
      'De ICM-42688-P is een 6-assige MEMS-inertiaalmeeteenheid van InvenSense die een 3-assige versnellingsmeter en een 3-assige gyroscoop in één component integreert. Het volle-schaalbereik van de gyroscoop loopt van ±15.625 dps tot ±2000 dps en dat van de versnellingsmeter van ±2 g tot ±16 g, met 16-bits en 18-bits uitvoer. Gegevens worden uitgelezen via I2C, SPI of I3C, en het onderdeel werkt van 1.71 V tot 3.6 V over -40 °C tot +85 °C. Het is ondergebracht in een LGA met 14 pins van 2.5 mm x 3.0 mm en is RoHS-conform.',
    standards: [
      'RoHS-conform',
      'Niet geraakt door REACH SVHC',
    ],
    features: [
      '6-assige MEMS-IMU die een 3-assige versnellingsmeter en een 3-assige gyroscoop combineert',
      'Volle-schaalbereik van de gyroscoop van ±15.625 dps tot ±2000 dps',
      'Volle-schaalbereik van de versnellingsmeter van ±2 g tot ±16 g',
      '16-bits en 18-bits uitgangsgegevens',
      'Digitale interfaces I2C, SPI en I3C',
      'Compacte LGA-behuizing met 14 pins van 2.5 mm x 3.0 mm',
      'Voedingsbereik van 1.71 V tot 3.6 V',
      'Bedrijfsbereik van -40 °C tot +85 °C',
    ],
    applications: [
      'Bewegingsregistratie in draagbare en wearable apparaten',
      'Besturing van robots en autonome platformen',
      'Beeldstabilisatie voor camera’s en gimbals',
      'Industriële trillings- en bewegingsmonitoring',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de ICM-42688-P gebruikt?',
        a: 'De ICM-42688-P is een 6-assige MEMS-inertiaalmeeteenheid: een 3-assige versnellingsmeter en een 3-assige gyroscoop in één LGA-behuizing met 14 pins, met gyroscoopbereiken van ±15.625 dps tot ±2000 dps, versnellingsmeterbereiken van ±2 g tot ±16 g en 16-bits of 18-bits uitvoer via I2C, SPI of I3C. Het geleverde record vermeldt voor dit onderdeel geen eindapparatuur; bevestig het beoogde gebruik daarom bij YIXINOU voordat u het in een ontwerp opneemt.',
      },
      {
        q: 'Wat controleren kopers voordat zij een ICM-42688-P bestellen?',
        a: 'Kopers controleren of een automotive-versie nodig is, omdat de industriële en automotive-onderdeelnummers verschillen; de biasstabiliteit en temperatuurdrift van de gyroscoop; de SPI-interfacesnelheid en de FIFO-diepte; de eisen van het soldeerproces, omdat een LGA gevoelig is voor spanning op boardniveau; of de onderdelen echt zijn, omdat deze serie wordt nagemaakt; en prijs en levertijd.',
      },
      {
        q: 'Hoe controleert YIXINOU een ICM-42688-P vóór verzending?',
        a: 'Voor elke LGA-partij met 14 pins verifiëren wij de markering, de datumcode, de verpakking en de hoeveelheid tegen de bestelling vóór verzending. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Vraag ons om een foto van de werkelijke partij voordat u zich vastlegt.',
      },
    ],
  },

  'K4A4G085WF-BCTD': {
    mpn: 'K4A4G085WF-BCTD',
    brand: 'Samsung',
    title: 'DDR4 SDRAM 4Gb x8 geheugendie in een FBGA-behuizing met 78 balls',
    category:
      'Geïntegreerde schakelingen (IC’s) / Geïntegreerde schakelingen (IC’s) / Geheugencomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'De K4A4G085WF-BCTD is een DDR4-SDRAM-die van Samsung met een dichtheid van 4Gb en een x8-databus, geleverd in een FBGA-behuizing met 78 balls voor oppervlaktemontage. Hij loopt op een snelheidsklasse van 2666 MHz op een VDD/VDDQ-rail van 1.2 V met een VPP-voeding van 2.5 V, binnen een voedingsvenster van 1.14 V tot 1.26 V. Het record van de vergelijkingspagina geeft een bedrijfsbereik van 0 °C tot 85 °C, en het ontwerp volgt de DDR4-norm JEDEC JESD79-4. Hij wordt gebruikt op industriële besturingsmoederborden, netwerkapparatuur, settopboxen, digital signage en instapplatformen voor embedded systemen.',
    img: '/assets/images/k4a4g085wf-bctd-fbga-78.jpg',
    alt: 'Een FBGA-behuizing met 78 balls, de behuizing van de K4A4G085WF-BCTD',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'FBGA'],
      ['Aantal pins', '78'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Geheugengrootte', '4Gb'],
      ['Geheugentechnologie', 'DDR4 SDRAM'],
      ['Databusbreedte', 'x8'],
      ['Snelheidsklasse', '2666 MHz (2666 Mbps)'],
      ['Voedingsspanning', '1.2 V (VDD/VDDQ), 2.5 V (VPP)'],
      ['Voedingsvenster', '1.14 V tot 1.26 V'],
      ['Bedrijfstemperatuur', '0 °C tot 85 °C'],
    ],
    about:
      'De K4A4G085WF-BCTD is een DDR4-SDRAM-onderdeel van Samsung met een dichtheid van 4Gb en een x8-organisatie, verpakt als FBGA met 78 balls voor oppervlaktemontage. Het is gespecificeerd voor een snelheidsklasse van 2666 MHz, een VDD/VDDQ-voeding van 1.2 V met een VPP-rail van 2.5 V, en een voedingsvenster van 1.14 V tot 1.26 V over een bedrijfsbereik van 0 °C tot 85 °C. Het onderdeel volgt de DDR4-norm JEDEC JESD79-4. Het wordt gebruikt op industriële besturingsmoederborden, netwerkapparatuur, settopboxen, digital signage en instapplatformen voor embedded systemen die een DDR4 x8-die met lage dichtheid nodig hebben.',
    standards: [
      'JEDEC JESD79-4',
    ],
    features: [
      'DDR4 SDRAM met een dichtheid van 4Gb en een x8-databus',
      'Snelheidsklasse van 2666 MHz',
      'VDD/VDDQ-voeding van 1.2 V met een VPP-rail van 2.5 V',
      'Voedingsvenster van 1.14 V tot 1.26 V',
      'FBGA-behuizing met 78 balls voor oppervlaktemontage',
      'Bedrijfsbereik van 0 °C tot 85 °C',
      'Ontworpen volgens de DDR4-norm JEDEC JESD79-4',
    ],
    applications: [
      'Industriële besturingsmoederborden',
      'Netwerkapparatuur',
      'Settopboxen',
      'Digital signage',
      'Instapplatformen voor embedded systemen',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de K4A4G085WF-BCTD gebruikt?',
        a: 'Het is een DDR4-SDRAM-die van 4Gb x8 die wordt gebruikt op industriële besturingsmoederborden, netwerkapparatuur, settopboxen, digital signage en instapplatformen voor embedded systemen, waar een DDR4-die van 2666 MHz met een rail van 1.2 V nodig is.',
      },
      {
        q: 'Wat controleren kopers voordat zij een K4A4G085WF-BCTD bestellen?',
        a: 'Kopers controleren of de dichtheid van 4Gb uit de markt gaat en hoeveel ruimte er nog is voor een last-time-buy; of de snelheidsklasse bij de SPD van het moederbord past; of de die origineel is of gedowngrade; of een alternatief van 8Gb in het ontwerp moet worden opgenomen; prijs en levertijd; en de partij-tot-partijconsistentie.',
      },
      {
        q: 'Hoe controleert YIXINOU een K4A4G085WF-BCTD vóór verzending?',
        a: 'Elke FBGA-partij met 78 balls wordt vóór verzending gecontroleerd op markering, partijcode en hoeveelheid tegen de bestelling. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Foto’s van de werkelijke partij zijn op verzoek beschikbaar.',
      },
    ],
  },

  'K4A4G165WF-BCTD': {
    mpn: 'K4A4G165WF-BCTD',
    brand: 'Samsung',
    title: 'DDR4 SDRAM 4Gb x16 geheugendie in een FBGA-behuizing met 96 balls',
    category:
      'Geïntegreerde schakelingen (IC’s) / Geïntegreerde schakelingen (IC’s) / Geheugencomponenten / RAM / DDR',
    categoryHref: '/all-products',
    summary:
      'De K4A4G165WF-BCTD is een DDR4-SDRAM-die van Samsung met een dichtheid van 4Gb en een x16-databus, geleverd in een FBGA-behuizing met 96 balls voor oppervlaktemontage. Hij loopt op een snelheidsklasse van 2666 Mbps (DDR4-2666, CL19) op een voeding van 1.2 V, binnen een voedingsvenster van 1.14 V tot 1.26 V, en het record van de vergelijkingspagina vermeldt de levenscyclusstatus als productie. Het bedrijfsbereik is 0 °C tot 85 °C en het ontwerp volgt de DDR4-norm JEDEC JESD79-4. Hij wordt gebruikt op industriële besturingsmoederborden, netwerkcommunicatieapparatuur, digital signage, POS-terminals en instapservers en embedded platformen.',
    img: '/assets/images/k4a4g165wf-bctd-fbga-96.jpg',
    alt: 'Een FBGA-behuizing met 96 balls, de behuizing van de K4A4G165WF-BCTD',
    imageNote:
      'Foto van dit onderdeel. Partijmarkering en datumcode verschillen per zending — vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'FBGA'],
      ['Aantal pins', '96'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Geheugengrootte', '4Gb'],
      ['Geheugentechnologie', 'DDR4 SDRAM'],
      ['Databusbreedte', 'x16'],
      ['Snelheidsklasse', '2666 Mbps (DDR4-2666, CL19)'],
      ['Voedingsspanning', '1.2 V'],
      ['Bedrijfstemperatuur', '0 °C tot 85 °C'],
      ['Levenscyclusstatus', 'Productie (fabrikant)'],
    ],
    about:
      'De K4A4G165WF-BCTD is een DDR4-SDRAM-onderdeel van Samsung met een dichtheid van 4Gb en een x16-organisatie, verpakt als FBGA met 96 balls voor oppervlaktemontage. Het loopt op een snelheidsklasse van 2666 Mbps (DDR4-2666, CL19) op een voeding van 1.2 V binnen een venster van 1.14 V tot 1.26 V, met de levenscyclusstatus vermeld als productie. Het bedrijfsbereik is 0 °C tot 85 °C en het onderdeel volgt de DDR4-norm JEDEC JESD79-4. Het wordt gebruikt op industriële besturingsmoederborden, netwerkcommunicatieapparatuur, digital signage, POS-terminals en instapservers en embedded platformen.',
    standards: [
      'JEDEC JESD79-4',
    ],
    features: [
      'DDR4 SDRAM met een dichtheid van 4Gb en een x16-databus',
      'Snelheidsklasse van 2666 Mbps, DDR4-2666 met CL19-latentie',
      'Voeding van 1.2 V met een venster van 1.14 V tot 1.26 V',
      'FBGA-behuizing met 96 balls voor oppervlaktemontage',
      'Bedrijfsbereik van 0 °C tot 85 °C',
      'Levenscyclusstatus van de fabrikant vermeld als productie',
      'Ontworpen volgens de DDR4-norm JEDEC JESD79-4',
    ],
    applications: [
      'Industriële besturingsmoederborden',
      'Netwerkcommunicatieapparatuur',
      'Digital signage',
      'POS-terminals',
      'Instapservers en embedded platformen',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de K4A4G165WF-BCTD gebruikt?',
        a: 'Het is een DDR4-SDRAM-die van 4Gb x16 die wordt gebruikt op industriële besturingsmoederborden, netwerkcommunicatieapparatuur, digital signage, POS-terminals en instapservers en embedded platformen, waar een DDR4 x16-die van 2666 Mbps nodig is.',
      },
      {
        q: 'Wat controleren kopers voordat zij een K4A4G165WF-BCTD bestellen?',
        a: 'Kopers controleren of de dichtheid van 4Gb de markt verlaat en hoeveel risico op het gebied van langetermijnlevering of last-time-buy er nog rest; of de snelheidsklasse bij de SPD van het moederbord past; of de die origineel is of gedowngrade; of het onderdeel aan een industriële temperatuureis voldoet; prijs en levertijd; en of de voorraad gereviseerd is of uit gebruikte apparatuur is gehaald.',
      },
      {
        q: 'Hoe controleert YIXINOU een K4A4G165WF-BCTD vóór verzending?',
        a: 'Voor elke FBGA-partij met 96 balls controleren wij de markering, de partijcode, de verpakking en de hoeveelheid tegen de bestelling vóór verzending. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Vraag ons om een foto van de werkelijke partij voordat u zich vastlegt.',
      },
    ],
  },

  'K4A8G045WD-BCWE': {
    mpn: 'K4A8G045WD-BCWE',
    brand: 'Samsung',
    title: 'DDR4 SDRAM 8Gb x4 geheugendie in een FBGA-behuizing met 78 balls',
    category: 'Geïntegreerde schakelingen (IC’s)',
    categoryHref: '/all-products',
    summary:
      'De K4A8G045WD-BCWE is een DDR4-SDRAM-die van Samsung met een dichtheid van 8Gb en een x4-organisatie, geleverd in een FBGA-behuizing met 78 balls. Hij loopt op een snelheidsklasse van 3200 Mbps op een VDD/VDDQ-rail van 1.2 V met een VPP-voeding van 2.5 V, over een bedrijfsbereik van 0 °C tot 95 °C, en het ontwerp volgt de DDR4-norm JEDEC JESD79-4. De x4-organisatie is bedoeld voor server-ECC-moduleopbouw. Hij wordt gebruikt op RDIMM- en LRDIMM-geheugenmodules voor servers, in datacenters en in enterpriseservers en -opslagapparatuur.',
    img: '/assets/images/k4a8g045wd-bcwe-package.jpg',
    alt: 'Een FBGA-behuizing met 78 balls, de behuizing van de K4A8G045WD-BCWE',
    imageNote:
      'Illustratieve behuizingsafbeelding. Vraag ons om een foto van de werkelijke partij.',
    specs: [
      ['Behuizing / case', 'FBGA-78'],
      ['Aantal pins', '78'],
      ['Montagewijze', 'Oppervlaktemontage'],
      ['Geheugengrootte', '8Gb'],
      ['Geheugentechnologie', 'DDR4 SDRAM'],
      ['Databusbreedte', 'x4'],
      ['Snelheidsklasse', '3200 Mbps'],
      ['Voedingsspanning', '1.2 V (VDD/VDDQ), 2.5 V (VPP)'],
      ['Bedrijfstemperatuur', '0 °C tot 95 °C'],
      ['Productnormen', 'JEDEC JESD79-4'],
    ],
    about:
      'De K4A8G045WD-BCWE is een DDR4-SDRAM-onderdeel van Samsung met een dichtheid van 8Gb en een x4-organisatie, verpakt als FBGA met 78 balls. Het is gespecificeerd voor een snelheidsklasse van 3200 Mbps op een VDD/VDDQ-voeding van 1.2 V met een VPP-rail van 2.5 V, over een bedrijfsbereik van 0 °C tot 95 °C, en het volgt de DDR4-norm JEDEC JESD79-4. De x4-organisatie wordt vooral gebruikt voor server-ECC-modules. Het is bedoeld voor RDIMM- en LRDIMM-geheugenmodules voor servers, datacenters en enterpriseserver- en opslagapparatuur.',
    standards: [
      'JEDEC JESD79-4',
    ],
    features: [
      'DDR4 SDRAM met een dichtheid van 8Gb en een x4-organisatie',
      'Snelheidsklasse van 3200 Mbps voor servermoduleopbouw',
      'VDD/VDDQ-voeding van 1.2 V met een VPP-rail van 2.5 V',
      'FBGA-behuizing met 78 balls',
      'Bedrijfsbereik van 0 °C tot 95 °C',
      'x4-organisatie bedoeld voor server-ECC-modules',
      'Ontworpen volgens de DDR4-norm JEDEC JESD79-4',
    ],
    applications: [
      'RDIMM- en LRDIMM-geheugenmodules voor servers',
      'Datacenters',
      'Enterpriseservers',
      'Enterpriseopslagapparatuur',
    ],
    faq: [
      {
        q: 'Waarvoor wordt de K4A8G045WD-BCWE gebruikt?',
        a: 'Het is een DDR4-SDRAM-die van 8Gb x4 die wordt gebruikt op RDIMM- en LRDIMM-geheugenmodules voor servers, in datacenters en in enterpriseserver- en opslagapparatuur, waar de x4-organisatie nodig is die server-ECC-modules vereisen.',
      },
      {
        q: 'Wat controleren kopers voordat zij een K4A8G045WD-BCWE bestellen?',
        a: 'Kopers controleren dat een x4-organisatie vooral voor server-ECC-modules wordt gebruikt en niet kan worden uitgewisseld met x8- of x16-onderdelen; dat de snelheidsklasse van 3200 hoge eisen stelt aan de PCB en de signaalintegriteit; of de die origineel is of white-label; of het moduleontwerp de QVL-certificering van het serverplatform behaalt; prijs en levertijd; en de partij-tot-partijconsistentie.',
      },
      {
        q: 'Hoe controleert YIXINOU een K4A8G045WD-BCWE vóór verzending?',
        a: 'Voor elke FBGA-partij met 78 balls controleren wij de markering, de datumcode en de hoeveelheid tegen de bestelling vóór verzending. Laboratoriumanalyses — röntgen, XRF, decapsulatie, soldeerbaarheid en elektrische tests — worden uitgevoerd door onze partnerlaboratoria; YIXINOU exploiteert zelf geen testlaboratorium. Foto’s van de werkelijke partij zijn op verzoek beschikbaar.',
      },
    ],
  },
};
