// Per-industry detail content for /industries/<slug>.
// Section order follows the reference industry pages. The reference site's
// certifications (ISO/IEC 17025/AS6171, AS9120B, AS6081, ISO 9001, ISO 14001),
// its engineer and supplier counts, its quality-control centres and its
// Scout RMS(TM) platform are deliberately NOT reproduced: YIXINOU's own status
// on each of those is unconfirmed.
//
// Each industry gets its own copy so the twelve pages are not near-duplicates.

export const GROUPS = {
  eyebrow: 'Product Groups',
  title: 'Products we supply',
  lead: 'The same component groups we supply across every industry we serve.',
  items: [
    { title: 'Integrated Circuits', href: '/all-products' },
    { title: 'Transistors', href: '/all-products' },
    { title: 'Connectors', href: '/all-products' },
    { title: 'Capacitors', href: '/all-products' },
    { title: 'Resistors', href: '/all-products' },
    { title: 'Sensors and Switches', href: '/all-products' },
    { title: 'LEDs and Modules', href: '/all-products' },
  ],
};

export const INSPECT = {
  eyebrow: 'How We Check',
  title: 'What happens before your parts ship',
  text:
    'Incoming inspection and external visual checks are carried out at our own facility in Shenzhen. Internal analysis \u2014 X-ray, XRF, decapsulation, solderability and electrical testing \u2014 is carried out by our partner laboratories. We do not operate our own testing laboratory, and we say so plainly so you know exactly who tests your parts.',
  img: '/assets/images/quality-step-3-visual.jpg',
  alt: 'An inspector positioning a component under a digital inspection microscope on an anti-static mat',
  ctaLabel: 'See our quality process',
  ctaHref: '/quality',
};

const WAREHOUSE = {
  img: '/assets/images/gallery-06.jpg',
  alt: 'Labelled cartons of electronic components stored on shelving in the YIXINOU warehouse',
};
const BENCH = {
  img: '/assets/images/quality-step-1-photography.jpg',
  alt: 'Component trays and reels laid out in rows on benches for counting and lot coding',
};
const INSPECTION = {
  img: '/assets/images/quality-open-market-inspection.jpg',
  alt: 'A YIXINOU inspector operating a digital inspection microscope at a work station',
};

const RISK_TEXT = {
  sourcing:
    'We work from your bill of materials and your approved references, and we say so when a reference cannot be sourced rather than substituting it silently.',
  quality:
    'Every order is checked on arrival at our Shenzhen facility, and anything that needs internal analysis goes to our partner laboratories.',
  inventory:
    'A one-time purchase or an ongoing programme \u2014 we can hold agreed stock against your build schedule so parts are ready when your line needs them.',
  obsolete:
    'We track last-time-buy and end-of-life notices and hunt discontinued references, so an EOL part does not stop your programme.',
};

const risk = (title, items) => ({
  eyebrow: 'Managing Risk',
  title,
  items: items.map(([icon, name, text]) => ({ icon, title: name, text: text || RISK_TEXT[icon] })),
});

export const INDUSTRY_DETAILS = {
  aerospace: {
    hero: {
      heading: 'Aerospace electronic components and obsolete parts sourcing',
      lead:
        'We source electronic components for aerospace and aviation programmes \u2014 including obsolete and hard-to-find references \u2014 and we protect your production timeline while we do it.',
      img: '/assets/images/industry-aerospace-hero.jpg',
      alt: 'Avionics control panels and instrument displays inside an aircraft cockpit',
    },
    intro: {
      title: 'Same standards. Faster access.',
      paragraphs: [
        'An aerospace build cannot absorb an unverified part. When a line is waiting on a component, the pressure is to take whatever is available \u2014 and that is exactly when re-marked, mismatched or untraceable parts enter a supply chain.',
        'We source against your bill of materials from suppliers we have qualified, and we tell you when a reference cannot be sourced rather than substituting it silently. Every order is inspected on arrival at our Shenzhen facility, and anything that needs internal analysis goes to our partner laboratories.',
      ],
      img: WAREHOUSE.img,
      alt: WAREHOUSE.alt,
    },
    risk: risk('We Know How to Help You Mitigate Risk', [
      ['sourcing', 'Strategic Sourcing'],
      ['quality', 'Quality Assurance'],
      ['inventory', 'Inventory Management'],
      ['obsolete', 'Obsolescence Management'],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for aerospace and aviation',
      lead: 'The categories we supply most often for aerospace, defence and ground-support programmes.',
      items: [
        'Flight-control and avionics board components',
        'Navigation and communication system parts',
        'Radar and ground-support equipment components',
        'High-reliability connectors, relays and switches',
        'Power, memory and interface semiconductors',
        'Discontinued, last-time-buy and obsolete references',
      ],
    },
    cta: {
      title: 'Send us your aerospace bill of materials',
      text: 'Tell us the part numbers, the quantities and your acceptance criteria. We will confirm availability, lead time and exactly how we will inspect the parts before they ship.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  automotive: {
    hero: {
      heading: 'Automotive electronic components and ADAS sourcing',
      lead:
        'We source components for automotive systems \u2014 ADAS, infotainment, lighting and EV power \u2014 and we work around the supply-demand imbalances that make automotive builds late.',
      img: '/assets/images/industry-automotive-hero.jpg',
      alt: 'A vehicle dashboard with its trim removed, exposing a printed circuit board and wiring harnesses',
    },
    intro: {
      title: 'We Know How to Secure What You Need',
      paragraphs: [
        'Automotive programmes run on long qualification cycles and unforgiving build schedules. When a component is short, requalifying an alternative can cost more time than the part is worth, so the priority is finding the right reference fast and proving it is genuine.',
        'We work from your bill of materials, buy from suppliers we have qualified, and inspect every order on arrival at our Shenzhen facility. Parts that need internal analysis go to our partner laboratories.',
      ],
      img: INSPECTION.img,
      alt: INSPECTION.alt,
    },
    risk: risk('We Know How to Secure What You Need', [
      ['sourcing', 'Strategic Sourcing'],
      ['quality', 'Quality Assurance'],
      [
        'inventory',
        'Speed to Market',
        'Availability is decided before the shortage hits. We quote early, confirm stock quickly, and flag the parts that will hold your build up.',
      ],
      [
        'obsolete',
        'Lifecycle Support',
        'Automotive platforms stay in production long after their silicon has been discontinued. We track last-time-buy notices and keep sourcing the references your platform still uses.',
      ],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for automotive systems',
      lead: 'The categories we supply most often for automotive and EV programmes.',
      items: [
        'ADAS, sensor and camera components',
        'Infotainment, display and audio parts',
        'LED lighting and body-control components',
        'EV battery-management and power components',
        'Connectors, relays and passive components',
        'Discontinued and last-time-buy references',
      ],
    },
    cta: {
      title: 'Send us your automotive bill of materials',
      text: 'Tell us the part numbers, the quantities and your acceptance criteria. We will confirm availability, lead time and exactly how we will inspect the parts before they ship.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  'consumer-electronics': {
    hero: {
      heading: 'Electronic components for consumer electronics',
      lead:
        'We supply the components behind phones, wearables, audio and smart-home devices, where cost per unit and lead time decide who wins the order.',
      img: '/assets/images/industry-consumer-electronics-hero.jpg',
      alt: 'A disassembled smartphone beside opened wireless earbuds showing their circuit boards',
    },
    intro: {
      title: 'We Help You Get Out in Front',
      paragraphs: [
        'Consumer electronics move fast. A design can be superseded within a season and the bill of materials changes with it, so sourcing has to keep pace with the roadmap rather than lag behind it.',
        'We quote against your full BOM, source from suppliers we have qualified, and inspect every order before it ships. Where a reference is being discontinued, we tell you early enough to make a last-time-buy decision.',
      ],
      img: BENCH.img,
      alt: BENCH.alt,
    },
    risk: risk('We Help You Get Out in Front', [
      ['sourcing', 'Strategic Sourcing'],
      [
        'inventory',
        'Cost Savings',
        'Unit economics decide consumer programmes. We quote the whole BOM, offer alternatives where they are genuinely equivalent, and tell you where the cost actually sits.',
      ],
      ['quality', 'Inventory Management'],
      ['obsolete', 'Excess Mitigation'],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for consumer devices',
      lead: 'The categories we supply most often for consumer electronics programmes.',
      items: [
        'Display, touch and camera components',
        'Power management and charging ICs',
        'Wireless, audio and RF components',
        'Sensors, switches and LEDs',
        'Passive components and connectors',
        'Modules and legacy references',
      ],
    },
    cta: {
      title: 'Send us your consumer electronics bill of materials',
      text: 'Tell us the part numbers, the quantities and your target cost. We will come back with availability, lead time and where the alternatives are.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  'contract-manufacturing': {
    hero: {
      heading: 'Component sourcing for contract manufacturers and EMS',
      lead:
        'Line-down and volume support for EMS providers, quoted against your bill of materials rather than one part at a time.',
      img: '/assets/images/industry-contract-manufacturing-hero.jpg',
      alt: 'A panel of bare printed circuit boards moving along an SMT line beside reels of surface-mount components',
    },
    intro: {
      title: 'We Are Committed to Delivering for You',
      paragraphs: [
        'A contract manufacturer is judged on delivery dates it does not fully control. The parts are the variable: one short reference can hold a finished assembly, and one unverified part can cost a customer.',
        'We quote the whole bill of materials, source from suppliers we have qualified, and inspect every order on arrival at our Shenzhen facility. Where a line is already down, we treat the shortage as urgent and say quickly whether we can help.',
      ],
      img: WAREHOUSE.img,
      alt: WAREHOUSE.alt,
    },
    risk: risk('We Are Committed to Delivering for You', [
      ['sourcing', 'Strategic Sourcing'],
      [
        'inventory',
        'Cost Savings',
        'Margin on an assembly is thin, so component cost matters. We quote the full BOM, surface the parts where an equivalent alternative is genuinely cheaper, and avoid padding the price with parts you already hold.',
      ],
      ['quality', 'Inventory Management'],
      ['obsolete', 'Excess Mitigation'],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for assembly and build programmes',
      lead: 'The categories we supply most often for EMS and contract manufacturing.',
      items: [
        'BOM quotation and one-stop orders',
        'Line-down and shortage sourcing',
        'Second-source verification',
        'Excess and inventory balancing',
        'Connectors, passives and semiconductors',
        'Programmed and kitted parts',
      ],
    },
    cta: {
      title: 'Send us a bill of materials to quote',
      text: 'Upload or paste your BOM and we will quote the whole line, including the parts you are already covered on, so you can compare like for like.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  energy: {
    hero: {
      heading: 'Electronic components for energy and power conversion',
      lead:
        'We supply components for solar, storage, grid and power-conversion equipment, where the parts have to survive heat, load and time.',
      img: '/assets/images/industry-energy-hero.jpg',
      alt: 'The open power-conversion cabinet of an inverter, showing busbars, heatsinks and power modules',
    },
    intro: {
      title: 'We Support Your Supply Chain',
      paragraphs: [
        'Power electronics live in harsh conditions. An inverter or a storage cabinet is expected to run for years at temperature, so a marginal part is not a small risk \u2014 it is a field failure waiting to happen.',
        'We source against your bill of materials from suppliers we have qualified, and every order is inspected on arrival at our Shenzhen facility. Anything that needs internal analysis goes to our partner laboratories.',
      ],
      img: INSPECTION.img,
      alt: INSPECTION.alt,
    },
    risk: risk('We Support Your Supply Chain', [
      [
        'sourcing',
        'Speed and Accuracy',
        'Project schedules rarely move, so a quotation has to be both fast and correct. We confirm availability against real stock and flag the parts that will not make the date.',
      ],
      ['quality', 'Inventory Management'],
      [
        'inventory',
        'Cost Savings',
        'Power components carry a large share of the BOM cost. We quote the line as a whole and point out where an equivalent reference is genuinely cheaper.',
      ],
      ['obsolete', 'Flexibility'],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for energy and power systems',
      lead: 'The categories we supply most often for energy and power-conversion programmes.',
      items: [
        'IGBTs, gate drivers and power modules',
        'Inverter and power-conversion parts',
        'Control and monitoring electronics',
        'Magnetic components and capacitors',
        'Connectors, relays and terminals',
        'Discontinued references for installed equipment',
      ],
    },
    cta: {
      title: 'Send us your project bill of materials',
      text: 'Tell us the part numbers, the quantities and the delivery date you are working to. We will confirm what can be met and what cannot.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  'enterprise-computing': {
    hero: {
      heading: 'Server and data-centre component sourcing',
      lead:
        'Components for servers, storage, networking appliances and data-centre hardware \u2014 including the legacy references that keep installed estates running.',
      img: '/assets/images/industry-enterprise-computing-hero.jpg',
      alt: 'Blade servers pulled out of a rack with their circuit boards and memory modules exposed',
    },
    intro: {
      title: 'We Keep Your Lines Running',
      paragraphs: [
        'Enterprise hardware is kept in service far longer than the platforms it was built on. Once a server generation is out of support, the parts become harder to find exactly when the failure rate starts to climb.',
        'We source against your bill of materials, including end-of-life references, and inspect every order on arrival at our Shenzhen facility. Anything that needs internal analysis goes to our partner laboratories.',
      ],
      img: WAREHOUSE.img,
      alt: WAREHOUSE.alt,
    },
    risk: risk('We Keep Your Lines Running', [
      ['sourcing', 'Strategic Sourcing'],
      ['obsolete', 'Excess Mitigation'],
      [
        'inventory',
        'Cost Savings',
        'Refresh cycles are expensive. Keeping an existing estate serviceable for longer is often the cheaper decision, so we source the parts that make that possible.',
      ],
      [
        'quality',
        'Product Lifecycle Management',
        'We track last-time-buy and end-of-life notices and tell you when a reference in your estate is about to become hard to source, while there is still time to act.',
      ],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for server and storage platforms',
      lead: 'The categories we supply most often for enterprise computing and data-centre hardware.',
      items: [
        'Server, storage and interface controllers',
        'Memory and chipset support parts',
        'Power supplies and voltage regulators',
        'Cooling, connectors and cabling',
        'Networking and interface components',
        'Legacy references for installed estates',
      ],
    },
    cta: {
      title: 'Send us your server platform bill of materials',
      text: 'Tell us the platform, the part numbers and the quantities, including end-of-life references. We will confirm what is genuinely available.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  gaming: {
    hero: {
      heading: 'Electronic components for gaming and amusement machines',
      lead:
        'Components for gaming hardware, amusement, lottery and point-of-sale machines \u2014 including the parts that keep long-service machines running.',
      img: '/assets/images/industry-gaming-hero.jpg',
      alt: 'An arcade control deck with illuminated buttons and a joystick, with its circuit board and wiring visible behind',
    },
    intro: {
      title: "We're Committed to Delivering Quality Parts, Every Time",
      paragraphs: [
        'Gaming and amusement hardware stays in service for years, often in venues where a failed machine is a direct loss of takings. The components inside were frequently discontinued long ago.',
        'We source current parts and discontinued references from suppliers we have qualified, and every order is inspected on arrival at our Shenzhen facility before it ships.',
      ],
      img: BENCH.img,
      alt: BENCH.alt,
    },
    risk: risk("We're Committed to Delivering Quality Parts, Every Time", [
      ['sourcing', 'Strategic Sourcing'],
      [
        'inventory',
        'Cost Savings',
        'Operators run on tight unit economics. We quote the parts you need without padding the order, and say plainly when a cheaper equivalent is not actually equivalent.',
      ],
      ['obsolete', 'Excess Mitigation'],
      ['quality', 'Inventory Management'],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for gaming and amusement hardware',
      lead: 'The categories we supply most often for gaming, amusement and point-of-sale machines.',
      items: [
        'Display and controller components',
        'Buttons, joysticks and encoders',
        'Power, interface and lighting components',
        'Main boards and modules',
        'Connectors, harnesses and passives',
        'Long-life replacements for legacy machines',
      ],
    },
    cta: {
      title: 'Send us your machine bill of materials',
      text: 'Tell us the machine, the part numbers and the quantities. We will confirm availability and lead time for current and discontinued references.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  healthcare: {
    hero: {
      heading: 'Electronic components for medical and healthcare equipment',
      lead:
        'Components for patient monitoring, diagnostic imaging and laboratory equipment, where traceability matters as much as availability.',
      img: '/assets/images/industry-healthcare-hero.jpg',
      alt: 'The rear of a patient monitoring device with its main board, sensor connectors and a ribbon cable exposed',
    },
    intro: {
      title: 'We Prioritize Your Supply Chain',
      paragraphs: [
        'Medical equipment is qualified against a fixed bill of materials and stays in service long after its components are discontinued. Substituting a part is not a purchasing decision \u2014 it is a regulatory one.',
        'That makes traceability the point. We source against your approved references, keep the lot and date codes for every shipment, and inspect each order on arrival at our Shenzhen facility. Internal analysis goes to our partner laboratories.',
      ],
      img: WAREHOUSE.img,
      alt: WAREHOUSE.alt,
    },
    risk: risk('We Prioritize Your Supply Chain', [
      ['sourcing', 'Strategic Sourcing'],
      [
        'quality',
        'Product Lifecycle Management',
        'We track last-time-buy and end-of-life notices for the references you use, so a discontinuation is something you hear about in advance rather than at the point of failure.',
      ],
      ['inventory', 'Inventory Management'],
      ['obsolete', 'Excess Mitigation'],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for medical and laboratory equipment',
      lead: 'The categories we supply most often for medical devices and diagnostic equipment.',
      items: [
        'Monitoring and diagnostic board components',
        'Sensors and signal-conditioning parts',
        'Power and isolation components',
        'Displays, connectors and cabling',
        'Interface and memory semiconductors',
        'Discontinued references for installed equipment',
      ],
    },
    cta: {
      title: 'Send us your device bill of materials',
      text: 'Tell us the approved references, the quantities and any traceability requirements. We will confirm what we can supply and how it will be documented.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  'industrial-automation': {
    hero: {
      heading: 'Electronic components for industrial automation',
      lead:
        'Components for robotics, drives, PLCs, sensors and power electronics \u2014 sourced so your production line does not stop for a part.',
      img: '/assets/images/industry-industrial-automation-hero.jpg',
      alt: 'A control cabinet with PLC modules and cable ducts beside a robotic arm on a production cell',
    },
    intro: {
      title: 'We Keep Your Lines Running',
      paragraphs: [
        'Automation is judged in uptime. A stopped line costs more per hour than almost any component on it, so the priority is usually getting the right part today rather than the cheapest part next month.',
        'We source against your bill of materials from suppliers we have qualified, and inspect every order on arrival at our Shenzhen facility. Where an installed machine uses a discontinued reference, we will say whether it can still be sourced.',
      ],
      img: BENCH.img,
      alt: BENCH.alt,
    },
    risk: risk('We Keep Your Lines Running', [
      ['sourcing', 'Strategic Sourcing'],
      [
        'inventory',
        'Cost Savings',
        'Automation BOMs carry a lot of commodity parts. We quote the line as a whole and show where the cost actually sits, rather than marking up every line equally.',
      ],
      ['quality', 'Inventory Management'],
      ['obsolete', 'Excess Mitigation'],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for automation and control',
      lead: 'The categories we supply most often for industrial automation and control systems.',
      items: [
        'PLC, drive and motion-control parts',
        'Sensors and interface ICs',
        'Power electronics and gate drivers',
        'Relays, contactors and terminals',
        'Connectors, cables and passives',
        'Legacy spares for installed machines',
      ],
    },
    cta: {
      title: 'Send us your automation bill of materials',
      text: 'Tell us the machine or platform, the part numbers and the quantities. If a line is already down, say so and we will treat it as urgent.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  'personal-computing': {
    hero: {
      heading: 'Electronic components for personal computing',
      lead:
        'Components for laptops, desktops, peripherals and their accessory supply chain \u2014 from current platforms to the legacy references service teams still need.',
      img: '/assets/images/industry-personal-computing-hero.jpg',
      alt: 'An opened laptop chassis showing its motherboard, memory modules, cooling fan and battery',
    },
    intro: {
      title: 'We Meet Your Supply and Demand Needs',
      paragraphs: [
        'Personal computing runs on short platform cycles and long service tails. New designs need current silicon quickly; machines already in the field need references that the manufacturer stopped making years ago.',
        'We cover both, sourcing against your bill of materials from suppliers we have qualified and inspecting every order on arrival at our Shenzhen facility before it ships.',
      ],
      img: WAREHOUSE.img,
      alt: WAREHOUSE.alt,
    },
    risk: risk('We Meet Your Supply and Demand Needs', [
      ['sourcing', 'Strategic Sourcing'],
      [
        'inventory',
        'Cost Savings',
        'Platform margins are decided by unit cost. We quote the full BOM and flag the lines where a genuine equivalent changes the number.',
      ],
      [
        'quality',
        'Product Lifecycle Management',
        'We track end-of-life notices for the references you build with, so a discontinuation reaches you before it becomes a shortage.',
      ],
      ['obsolete', 'Excess Mitigation'],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for computing platforms',
      lead: 'The categories we supply most often for personal computing and peripherals.',
      items: [
        'Power management and charging ICs',
        'Interface, USB and display controllers',
        'Memory and storage components',
        'Connectors, cables and passives',
        'Cooling and mechanical parts',
        'Legacy references for repair and service',
      ],
    },
    cta: {
      title: 'Send us your platform bill of materials',
      text: 'Tell us the platform, the part numbers and the quantities, current or legacy. We will confirm what is available and at what lead time.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  'semiconductor-manufacturing': {
    hero: {
      heading: 'Components and spares for semiconductor manufacturing',
      lead:
        'Support components, interface parts and spares for fabrication, test and packaging operations, where downtime is measured in wafers.',
      img: '/assets/images/industry-semiconductor-hero.jpg',
      alt: 'A silicon wafer held above a bench by a handling tool, with a second wafer resting in an open cassette',
    },
    intro: {
      title: 'We Know How To Maintain Efficiency',
      paragraphs: [
        'A fab or a test floor cannot wait for a support part. Tool interfaces, handler consumables and control electronics are often legacy items with long lead times and few remaining sources.',
        'We source against your parts list from suppliers we have qualified, and inspect every order on arrival at our Shenzhen facility. Anything that needs internal analysis goes to our partner laboratories.',
      ],
      img: INSPECTION.img,
      alt: INSPECTION.alt,
    },
    risk: risk('We Know How To Maintain Efficiency', [
      ['sourcing', 'Strategic Sourcing'],
      [
        'inventory',
        'Cost Savings',
        'Support parts are bought in small quantities at high unit prices. We quote the list as a whole and tell you where an equivalent reference genuinely reduces the cost.',
      ],
      ['obsolete', 'Excess Mitigation'],
      ['quality', 'Inventory Management'],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components and spares for fab and test',
      lead: 'The categories we supply most often for semiconductor manufacturing and test operations.',
      items: [
        'Test and handler interface parts',
        'Probe and socket consumables',
        'Power supplies and control electronics',
        'Sensors, valves and motion components',
        'Connectors, cables and passives',
        'Legacy spares for installed tools',
      ],
    },
    cta: {
      title: 'Send us your equipment parts list',
      text: 'Tell us the tool, the part numbers and the quantities. We will confirm availability and lead time for current and legacy references.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },

  'telecom-networking': {
    hero: {
      heading: 'Telecom and networking component sourcing',
      lead:
        'Components for base stations, routers, switches, optical transport and access equipment \u2014 including line-card support for networks already in service.',
      img: '/assets/images/industry-telecom-networking-hero.jpg',
      alt: 'A rack-mounted network switch with glowing port LEDs and fibre patch cords routed into the panel above',
    },
    intro: {
      title: 'We Work For Your Supply Chain',
      paragraphs: [
        'Telecom infrastructure is built to run for a decade and supported for longer. Operators cannot take a card out of service because a component is no longer made, so sourcing legacy references matters as much as sourcing new ones.',
        'We work from your bill of materials, source from suppliers we have qualified, and inspect every order on arrival at our Shenzhen facility before it ships to you.',
      ],
      img: WAREHOUSE.img,
      alt: WAREHOUSE.alt,
    },
    risk: risk('We Work For Your Supply Chain', [
      ['sourcing', 'Strategic Sourcing'],
      ['obsolete', 'Excess Mitigation'],
      [
        'inventory',
        'Cost Savings',
        'Line cards carry a disproportionate share of the BOM. We quote the card as a whole and identify the lines where the cost can actually move.',
      ],
      [
        'quality',
        'Product Lifecycle Management',
        'We track last-time-buy notices for the references in your network, so a discontinuation is a planning item rather than an outage.',
      ],
    ]),
    parts: {
      eyebrow: 'What We Source',
      title: 'Components for telecom and network equipment',
      lead: 'The categories we supply most often for telecom, networking and optical transport.',
      items: [
        'RF, optical and interface components',
        'Power and circuit-protection parts',
        'Filters, connectors and passives',
        'Memory, logic and controller ICs',
        'Modules and line-card assemblies',
        'Legacy references for installed networks',
      ],
    },
    cta: {
      title: 'Send us your network platform bill of materials',
      text: 'Tell us the platform, the part numbers and the quantities, including legacy line-card references. We will confirm what is genuinely available.',
      primary: { label: 'Contact Us', href: '/Contact' },
      secondary: { label: 'All products', href: '/all-products' },
    },
  },
};
