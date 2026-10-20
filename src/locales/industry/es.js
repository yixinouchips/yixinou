/**
 * Spanish (es) locale pack — industry detail pages for YIXINOU, Shenzhen.
 *
 * Structure mirrors the English source (src/industryDetails.js) exactly: same keys,
 * same array lengths, same order, same nesting, same types.
 * All route and asset values (href / img / ctaHref / icon) are byte-identical to English.
 *
 * Exports: groups, inspect, industries.
 */

export const groups = {
  eyebrow: 'Grupos de producto',
  title: 'Productos que suministramos',
  lead: 'Los mismos grupos de componentes que suministramos en todos los sectores a los que servimos.',
  items: [
    { title: 'Circuitos integrados', href: '/all-products' },
    { title: 'Transistores', href: '/all-products' },
    { title: 'Conectores', href: '/all-products' },
    { title: 'Condensadores', href: '/all-products' },
    { title: 'Resistencias', href: '/all-products' },
    { title: 'Sensores e interruptores', href: '/all-products' },
    { title: 'LED y módulos', href: '/all-products' },
  ],
};

export const inspect = {
  eyebrow: 'Cómo verificamos',
  title: 'Qué ocurre antes de que se envíen sus piezas',
  text: 'La inspección de entrada y las comprobaciones visuales externas se realizan en nuestras propias instalaciones de Shenzhen. El análisis interno —rayos X, XRF, decapsulado, soldabilidad y ensayos eléctricos— lo llevan a cabo nuestros laboratorios asociados. No disponemos de laboratorio de ensayos propio y lo decimos con claridad para que sepa exactamente quién analiza sus piezas.',
  img: '/assets/images/quality-step-3-visual.jpg',
  alt: 'Un inspector colocando un componente bajo un microscopio de inspección digital sobre una alfombrilla antiestática',
  ctaLabel: 'Conozca nuestro proceso de calidad',
  ctaHref: '/quality',
};

export const industries = {
  aerospace: {
    hero: {
      heading: 'Componentes electrónicos para aeronáutica y abastecimiento de piezas obsoletas',
      lead: 'Abastecemos componentes electrónicos para programas aeronáuticos y espaciales —incluidas referencias obsoletas y difíciles de localizar— y protegemos el calendario de su producción mientras lo hacemos.',
      img: '/assets/images/industry-aerospace-hero.jpg',
      alt: 'Paneles de control de aviónica y pantallas de instrumentos en el interior de la cabina de un avión',
    },
    intro: {
      title: 'Los mismos estándares. Acceso más rápido.',
      paragraphs: [
        'Una cadena de montaje aeronáutica no puede asumir una pieza no verificada. Cuando una línea está esperando un componente, la presión empuja a aceptar lo que haya disponible, y es justo entonces cuando entran en la cadena de suministro piezas remarcadas, no coincidentes o sin trazabilidad.',
        'Abastecemos según su lista de materiales a partir de proveedores que hemos homologado, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio. Cada pedido se inspecciona a su llegada a nuestras instalaciones de Shenzhen, y todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cajas etiquetadas de componentes electrónicos almacenadas en estanterías en el almacén de YIXINOU',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Sabemos cómo ayudarle a mitigar el riesgo',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'quality',
          title: 'Garantía de calidad',
          text: 'Cada pedido se verifica a su llegada a nuestras instalaciones de Shenzhen, y todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
        },
        {
          icon: 'inventory',
          title: 'Gestión de inventario',
          text: 'Una compra puntual o un programa continuo: podemos mantener existencias acordadas conforme a su calendario de producción para que las piezas estén listas cuando su línea las necesite.',
        },
        {
          icon: 'obsolete',
          title: 'Gestión de la obsolescencia',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para aeronáutica y aviación',
      lead: 'Las categorías que suministramos con más frecuencia para programas aeroespaciales, de defensa y de apoyo en tierra.',
      items: [
        'Componentes para placas de control de vuelo y aviónica',
        'Piezas para sistemas de navegación y comunicación',
        'Componentes para radar y equipos de apoyo en tierra',
        'Conectores, relés e interruptores de alta fiabilidad',
        'Semiconductores de potencia, memoria e interfaz',
        'Referencias descatalogadas, de última compra y obsoletas',
      ],
    },
    cta: {
      title: 'Envíenos su lista de materiales aeronáutica',
      text: 'Indíquenos los números de referencia, las cantidades y sus criterios de aceptación. Confirmaremos la disponibilidad, el plazo de entrega y exactamente cómo inspeccionaremos las piezas antes del envío.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  automotive: {
    hero: {
      heading: 'Componentes electrónicos para automoción y abastecimiento de ADAS',
      lead: 'Abastecemos componentes para sistemas de automoción —ADAS, infoentretenimiento, iluminación y potencia de vehículos eléctricos— y trabajamos alrededor de los desequilibrios entre oferta y demanda que retrasan la producción del automóvil.',
      img: '/assets/images/industry-automotive-hero.jpg',
      alt: 'Salpicadero de un vehículo con el embellecedor retirado, dejando a la vista una placa de circuito impreso y mazos de cables',
    },
    intro: {
      title: 'Sabemos cómo asegurar lo que necesita',
      paragraphs: [
        'Los programas de automoción se rigen por ciclos de homologación largos y calendarios de producción inflexibles. Cuando falta un componente, recalificar una alternativa puede costar más tiempo del que vale la pieza, así que la prioridad es encontrar rápido la referencia correcta y demostrar que es auténtica.',
        'Trabajamos a partir de su lista de materiales, compramos a proveedores que hemos homologado e inspeccionamos cada pedido a su llegada a nuestras instalaciones de Shenzhen. Las piezas que requieren análisis interno pasan a nuestros laboratorios asociados.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Un inspector de YIXINOU manejando un microscopio de inspección digital en un puesto de trabajo',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Sabemos cómo asegurar lo que necesita',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'quality',
          title: 'Garantía de calidad',
          text: 'Cada pedido se verifica a su llegada a nuestras instalaciones de Shenzhen, y todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
        },
        {
          icon: 'inventory',
          title: 'Velocidad al mercado',
          text: 'La disponibilidad se decide antes de que llegue la escasez. Cotizamos con antelación, confirmamos existencias con rapidez y señalamos las piezas que van a retrasar su producción.',
        },
        {
          icon: 'obsolete',
          title: 'Soporte de ciclo de vida',
          text: 'Las plataformas de automoción siguen en producción mucho después de que sus semiconductores se hayan descatalogado. Seguimos los avisos de última compra (LTB) y mantenemos el abastecimiento de las referencias que su plataforma sigue utilizando.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para sistemas de automoción',
      lead: 'Las categorías que suministramos con más frecuencia para programas de automoción y de vehículo eléctrico.',
      items: [
        'Componentes para ADAS, sensores y cámaras',
        'Piezas para infoentretenimiento, pantallas y audio',
        'Componentes de iluminación LED y control de carrocería',
        'Componentes de gestión de batería y potencia para vehículos eléctricos',
        'Conectores, relés y componentes pasivos',
        'Referencias descatalogadas y de última compra',
      ],
    },
    cta: {
      title: 'Envíenos su lista de materiales de automoción',
      text: 'Indíquenos los números de referencia, las cantidades y sus criterios de aceptación. Confirmaremos la disponibilidad, el plazo de entrega y exactamente cómo inspeccionaremos las piezas antes del envío.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  'consumer-electronics': {
    hero: {
      heading: 'Componentes electrónicos para electrónica de consumo',
      lead: 'Suministramos los componentes que hay detrás de teléfonos, wearables, audio y dispositivos de hogar conectado, donde el coste por unidad y el plazo de entrega deciden quién gana el pedido.',
      img: '/assets/images/industry-consumer-electronics-hero.jpg',
      alt: 'Un smartphone desmontado junto a unos auriculares inalámbricos abiertos que dejan ver sus placas de circuito',
    },
    intro: {
      title: 'Le ayudamos a ir por delante',
      paragraphs: [
        'La electrónica de consumo se mueve muy rápido. Un diseño puede quedar superado en una sola temporada y la lista de materiales cambia con él, así que el abastecimiento debe ir al ritmo de la hoja de ruta y no por detrás.',
        'Cotizamos sobre su BOM completa, abastecemos a través de proveedores que hemos homologado e inspeccionamos cada pedido antes del envío. Cuando una referencia se va a descatalogar, se lo comunicamos con la antelación suficiente para que pueda decidir una compra de última hora.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Bandejas y bobinas de componentes dispuestas en filas sobre mesas de trabajo para su recuento y codificación por lote',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Le ayudamos a ir por delante',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'inventory',
          title: 'Ahorro de costes',
          text: 'La economía unitaria decide los programas de consumo. Cotizamos la BOM completa, ofrecemos alternativas cuando son realmente equivalentes y le decimos dónde está de verdad el coste.',
        },
        {
          icon: 'quality',
          title: 'Gestión de inventario',
          text: 'Cada pedido se verifica a su llegada a nuestras instalaciones de Shenzhen, y todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
        },
        {
          icon: 'obsolete',
          title: 'Mitigación de excedentes',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para dispositivos de consumo',
      lead: 'Las categorías que suministramos con más frecuencia para programas de electrónica de consumo.',
      items: [
        'Componentes de pantalla, táctil y cámara',
        'CI de gestión de potencia y carga',
        'Componentes inalámbricos, de audio y de RF',
        'Sensores, interruptores y LED',
        'Componentes pasivos y conectores',
        'Módulos y referencias antiguas',
      ],
    },
    cta: {
      title: 'Envíenos su lista de materiales de electrónica de consumo',
      text: 'Indíquenos los números de referencia, las cantidades y su coste objetivo. Le responderemos con la disponibilidad, el plazo de entrega y las alternativas disponibles.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  'contract-manufacturing': {
    hero: {
      heading: 'Abastecimiento de componentes para fabricantes por contrato y EMS',
      lead: 'Soporte para paradas de línea y volúmenes de producción a proveedores EMS, cotizado sobre su lista de materiales y no pieza a pieza.',
      img: '/assets/images/industry-contract-manufacturing-hero.jpg',
      alt: 'Un panel de placas de circuito impreso desnudas avanzando por una línea SMT junto a bobinas de componentes de montaje superficial',
    },
    intro: {
      title: 'Estamos comprometidos a cumplir con usted',
      paragraphs: [
        'A un fabricante por contrato se le juzga por fechas de entrega que no controla del todo. Las piezas son la variable: una sola referencia que falta puede retener un conjunto terminado, y una sola pieza no verificada puede costarle un cliente.',
        'Cotizamos la lista de materiales completa, abastecemos a través de proveedores que hemos homologado e inspeccionamos cada pedido a su llegada a nuestras instalaciones de Shenzhen. Cuando una línea ya está parada, tratamos la escasez como urgente y decimos con rapidez si podemos ayudar.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cajas etiquetadas de componentes electrónicos almacenadas en estanterías en el almacén de YIXINOU',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Estamos comprometidos a cumplir con usted',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'inventory',
          title: 'Ahorro de costes',
          text: 'El margen de un conjunto es estrecho, así que el coste de los componentes importa. Cotizamos la BOM completa, destacamos las piezas en las que una alternativa equivalente es realmente más barata y evitamos inflar el precio con piezas que usted ya tiene.',
        },
        {
          icon: 'quality',
          title: 'Gestión de inventario',
          text: 'Cada pedido se verifica a su llegada a nuestras instalaciones de Shenzhen, y todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
        },
        {
          icon: 'obsolete',
          title: 'Mitigación de excedentes',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para programas de ensamblaje y producción',
      lead: 'Las categorías que suministramos con más frecuencia para EMS y fabricación por contrato.',
      items: [
        'Cotización de BOM y pedidos integrales',
        'Abastecimiento por parada de línea y escasez',
        'Verificación de segundas fuentes',
        'Equilibrio de excedentes e inventario',
        'Conectores, componentes pasivos y semiconductores',
        'Piezas programadas y en kits',
      ],
    },
    cta: {
      title: 'Envíenos una lista de materiales para cotizar',
      text: 'Suba o pegue su BOM y cotizaremos la línea completa, incluidas las piezas que ya tiene cubiertas, para que pueda comparar en igualdad de condiciones.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  energy: {
    hero: {
      heading: 'Componentes electrónicos para energía y conversión de potencia',
      lead: 'Suministramos componentes para equipos solares, de almacenamiento, de red y de conversión de potencia, donde las piezas tienen que resistir calor, carga y tiempo.',
      img: '/assets/images/industry-energy-hero.jpg',
      alt: 'El armario de conversión de potencia de un inversor abierto, con barras colectoras, disipadores y módulos de potencia a la vista',
    },
    intro: {
      title: 'Apoyamos su cadena de suministro',
      paragraphs: [
        'La electrónica de potencia trabaja en condiciones exigentes. Se espera que un inversor o un armario de almacenamiento funcione durante años a temperatura, así que una pieza justa no es un riesgo menor: es un fallo en campo esperando a ocurrir.',
        'Abastecemos según su lista de materiales a partir de proveedores que hemos homologado, y cada pedido se inspecciona a su llegada a nuestras instalaciones de Shenzhen. Todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Un inspector de YIXINOU manejando un microscopio de inspección digital en un puesto de trabajo',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Apoyamos su cadena de suministro',
      items: [
        {
          icon: 'sourcing',
          title: 'Rapidez y precisión',
          text: 'Los calendarios de proyecto rara vez se mueven, así que una cotización debe ser rápida y correcta a la vez. Confirmamos la disponibilidad contra existencias reales y señalamos las piezas que no llegarán a la fecha.',
        },
        {
          icon: 'quality',
          title: 'Gestión de inventario',
          text: 'Cada pedido se verifica a su llegada a nuestras instalaciones de Shenzhen, y todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
        },
        {
          icon: 'inventory',
          title: 'Ahorro de costes',
          text: 'Los componentes de potencia representan una gran parte del coste de la BOM. Cotizamos la línea en su conjunto e indicamos dónde una referencia equivalente es realmente más barata.',
        },
        {
          icon: 'obsolete',
          title: 'Flexibilidad',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para sistemas de energía y potencia',
      lead: 'Las categorías que suministramos con más frecuencia para programas de energía y conversión de potencia.',
      items: [
        'IGBT, drivers de puerta y módulos de potencia',
        'Piezas para inversores y conversión de potencia',
        'Electrónica de control y monitorización',
        'Componentes magnéticos y condensadores',
        'Conectores, relés y bornas',
        'Referencias descatalogadas para equipos instalados',
      ],
    },
    cta: {
      title: 'Envíenos la lista de materiales de su proyecto',
      text: 'Indíquenos los números de referencia, las cantidades y la fecha de entrega con la que trabaja. Confirmaremos qué se puede cumplir y qué no.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  'enterprise-computing': {
    hero: {
      heading: 'Abastecimiento de componentes para servidores y centros de datos',
      lead: 'Componentes para servidores, almacenamiento, equipos de red y hardware de centro de datos, incluidas las referencias antiguas que mantienen en funcionamiento los parques instalados.',
      img: '/assets/images/industry-enterprise-computing-hero.jpg',
      alt: 'Servidores blade extraídos de un rack con sus placas de circuito y módulos de memoria a la vista',
    },
    intro: {
      title: 'Mantenemos sus líneas en marcha',
      paragraphs: [
        'El hardware empresarial se mantiene en servicio mucho más tiempo que las plataformas sobre las que se construyó. Cuando una generación de servidores sale de soporte, las piezas resultan más difíciles de encontrar justo cuando la tasa de fallos empieza a subir.',
        'Abastecemos según su lista de materiales, incluidas las referencias de fin de vida, e inspeccionamos cada pedido a su llegada a nuestras instalaciones de Shenzhen. Todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cajas etiquetadas de componentes electrónicos almacenadas en estanterías en el almacén de YIXINOU',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Mantenemos sus líneas en marcha',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'obsolete',
          title: 'Mitigación de excedentes',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
        {
          icon: 'inventory',
          title: 'Ahorro de costes',
          text: 'Los ciclos de renovación son caros. Mantener un parque existente en servicio durante más tiempo suele ser la decisión más económica, así que abastecemos las piezas que lo hacen posible.',
        },
        {
          icon: 'quality',
          title: 'Gestión del ciclo de vida del producto',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y le avisamos cuando una referencia de su parque está a punto de volverse difícil de conseguir, mientras aún hay tiempo de actuar.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para plataformas de servidor y almacenamiento',
      lead: 'Las categorías que suministramos con más frecuencia para informática empresarial y hardware de centro de datos.',
      items: [
        'Controladores de servidor, almacenamiento e interfaz',
        'Piezas de soporte de memoria y chipset',
        'Fuentes de alimentación y reguladores de tensión',
        'Refrigeración, conectores y cableado',
        'Componentes de red e interfaz',
        'Referencias antiguas para parques instalados',
      ],
    },
    cta: {
      title: 'Envíenos la lista de materiales de su plataforma de servidor',
      text: 'Indíquenos la plataforma, los números de referencia y las cantidades, incluidas las referencias de fin de vida. Confirmaremos qué está realmente disponible.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  gaming: {
    hero: {
      heading: 'Componentes electrónicos para máquinas de juego y recreativas',
      lead: 'Componentes para hardware de juego y máquinas recreativas, de lotería y puntos de venta, incluidas las piezas que mantienen en marcha equipos de larga vida útil.',
      img: '/assets/images/industry-gaming-hero.jpg',
      alt: 'Un panel de control recreativo con botones iluminados y un joystick, con su placa de circuito y el cableado visibles detrás',
    },
    intro: {
      title: 'Nos comprometemos a entregar piezas de calidad, siempre',
      paragraphs: [
        'El hardware de juego y recreativo permanece en servicio durante años, a menudo en locales donde una máquina averiada supone una pérdida directa de recaudación. Los componentes que lleva dentro suelen estar descatalogados desde hace tiempo.',
        'Abastecemos piezas actuales y referencias descatalogadas a través de proveedores que hemos homologado, y cada pedido se inspecciona a su llegada a nuestras instalaciones de Shenzhen antes del envío.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Bandejas y bobinas de componentes dispuestas en filas sobre mesas de trabajo para su recuento y codificación por lote',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Nos comprometemos a entregar piezas de calidad, siempre',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'inventory',
          title: 'Ahorro de costes',
          text: 'Los operadores trabajan con una economía unitaria ajustada. Cotizamos las piezas que necesita sin inflar el pedido y decimos con claridad cuándo una alternativa más barata no es realmente equivalente.',
        },
        {
          icon: 'obsolete',
          title: 'Mitigación de excedentes',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
        {
          icon: 'quality',
          title: 'Gestión de inventario',
          text: 'Cada pedido se verifica a su llegada a nuestras instalaciones de Shenzhen, y todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para hardware de juego y recreativo',
      lead: 'Las categorías que suministramos con más frecuencia para máquinas de juego, recreativas y puntos de venta.',
      items: [
        'Componentes de pantalla y controlador',
        'Botones, joysticks y codificadores',
        'Componentes de potencia, interfaz e iluminación',
        'Placas principales y módulos',
        'Conectores, mazos y componentes pasivos',
        'Repuestos de larga vida para máquinas antiguas',
      ],
    },
    cta: {
      title: 'Envíenos la lista de materiales de su máquina',
      text: 'Indíquenos la máquina, los números de referencia y las cantidades. Confirmaremos la disponibilidad y el plazo de entrega tanto de referencias actuales como descatalogadas.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  healthcare: {
    hero: {
      heading: 'Componentes electrónicos para equipos médicos y sanitarios',
      lead: 'Componentes para monitorización de pacientes, imagen diagnóstica y equipos de laboratorio, donde la trazabilidad importa tanto como la disponibilidad.',
      img: '/assets/images/industry-healthcare-hero.jpg',
      alt: 'La parte trasera de un dispositivo de monitorización de pacientes, con su placa principal, conectores de sensores y un cable plano a la vista',
    },
    intro: {
      title: 'Priorizamos su cadena de suministro',
      paragraphs: [
        'El equipamiento médico se homologa con una lista de materiales fija y permanece en servicio mucho después de que sus componentes se descataloguen. Sustituir una pieza no es una decisión de compra, sino regulatoria.',
        'Por eso la trazabilidad es lo esencial. Abastecemos según sus referencias aprobadas, conservamos los códigos de lote y de fecha de cada envío e inspeccionamos cada pedido a su llegada a nuestras instalaciones de Shenzhen. El análisis interno pasa a nuestros laboratorios asociados.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cajas etiquetadas de componentes electrónicos almacenadas en estanterías en el almacén de YIXINOU',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Priorizamos su cadena de suministro',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'quality',
          title: 'Gestión del ciclo de vida del producto',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) de las referencias que utiliza, para que una descatalogación le llegue con antelación y no en el momento del fallo.',
        },
        {
          icon: 'inventory',
          title: 'Gestión de inventario',
          text: 'Una compra puntual o un programa continuo: podemos mantener existencias acordadas conforme a su calendario de producción para que las piezas estén listas cuando su línea las necesite.',
        },
        {
          icon: 'obsolete',
          title: 'Mitigación de excedentes',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para equipos médicos y de laboratorio',
      lead: 'Las categorías que suministramos con más frecuencia para dispositivos médicos y equipos de diagnóstico.',
      items: [
        'Componentes para placas de monitorización y diagnóstico',
        'Sensores y piezas de acondicionamiento de señal',
        'Componentes de alimentación y aislamiento',
        'Pantallas, conectores y cableado',
        'Semiconductores de interfaz y memoria',
        'Referencias descatalogadas para equipos instalados',
      ],
    },
    cta: {
      title: 'Envíenos la lista de materiales de su dispositivo',
      text: 'Indíquenos las referencias aprobadas, las cantidades y cualquier requisito de trazabilidad. Confirmaremos qué podemos suministrar y cómo se documentará.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  'industrial-automation': {
    hero: {
      heading: 'Componentes electrónicos para automatización industrial',
      lead: 'Componentes para robótica, accionamientos, PLC, sensores y electrónica de potencia, abastecidos para que su línea de producción no se detenga por una pieza.',
      img: '/assets/images/industry-industrial-automation-hero.jpg',
      alt: 'Un armario de control con módulos PLC y canaletas de cables junto a un brazo robótico en una célula de producción',
    },
    intro: {
      title: 'Mantenemos sus líneas en marcha',
      paragraphs: [
        'La automatización se juzga por el tiempo de actividad. Una línea parada cuesta más por hora que casi cualquier componente que lleve encima, así que lo prioritario suele ser tener la pieza correcta hoy y no la más barata el mes que viene.',
        'Abastecemos según su lista de materiales a partir de proveedores que hemos homologado e inspeccionamos cada pedido a su llegada a nuestras instalaciones de Shenzhen. Cuando una máquina instalada utiliza una referencia descatalogada, le diremos si todavía se puede conseguir.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Bandejas y bobinas de componentes dispuestas en filas sobre mesas de trabajo para su recuento y codificación por lote',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Mantenemos sus líneas en marcha',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'inventory',
          title: 'Ahorro de costes',
          text: 'Las BOM de automatización incluyen muchas piezas de catálogo. Cotizamos la línea en su conjunto y mostramos dónde está realmente el coste, en lugar de aplicar el mismo margen a todas las líneas.',
        },
        {
          icon: 'quality',
          title: 'Gestión de inventario',
          text: 'Cada pedido se verifica a su llegada a nuestras instalaciones de Shenzhen, y todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
        },
        {
          icon: 'obsolete',
          title: 'Mitigación de excedentes',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para automatización y control',
      lead: 'Las categorías que suministramos con más frecuencia para sistemas de automatización y control industrial.',
      items: [
        'Piezas para PLC, accionamientos y control de movimiento',
        'Sensores y CI de interfaz',
        'Electrónica de potencia y drivers de puerta',
        'Relés, contactores y bornas',
        'Conectores, cables y componentes pasivos',
        'Repuestos antiguos para máquinas instaladas',
      ],
    },
    cta: {
      title: 'Envíenos su lista de materiales de automatización',
      text: 'Indíquenos la máquina o la plataforma, los números de referencia y las cantidades. Si una línea ya está parada, díganoslo y lo trataremos como urgente.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  'personal-computing': {
    hero: {
      heading: 'Componentes electrónicos para informática personal',
      lead: 'Componentes para portátiles, equipos de sobremesa, periféricos y su cadena de accesorios, desde las plataformas actuales hasta las referencias antiguas que los equipos de servicio siguen necesitando.',
      img: '/assets/images/industry-personal-computing-hero.jpg',
      alt: 'El chasis abierto de un portátil que deja ver su placa base, módulos de memoria, ventilador y batería',
    },
    intro: {
      title: 'Cubrimos sus necesidades de oferta y demanda',
      paragraphs: [
        'La informática personal combina ciclos de plataforma cortos con colas de servicio largas. Los diseños nuevos necesitan silicio actual con rapidez; las máquinas ya instaladas necesitan referencias que el fabricante dejó de producir hace años.',
        'Cubrimos ambos casos: abastecemos según su lista de materiales a partir de proveedores que hemos homologado e inspeccionamos cada pedido a su llegada a nuestras instalaciones de Shenzhen antes del envío.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cajas etiquetadas de componentes electrónicos almacenadas en estanterías en el almacén de YIXINOU',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Cubrimos sus necesidades de oferta y demanda',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'inventory',
          title: 'Ahorro de costes',
          text: 'Los márgenes de una plataforma se deciden por el coste unitario. Cotizamos la BOM completa y señalamos las líneas en las que un equivalente auténtico cambia la cifra.',
        },
        {
          icon: 'quality',
          title: 'Gestión del ciclo de vida del producto',
          text: 'Seguimos los avisos de fin de vida (EOL) de las referencias con las que fabrica, para que una descatalogación le llegue antes de convertirse en una escasez.',
        },
        {
          icon: 'obsolete',
          title: 'Mitigación de excedentes',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para plataformas informáticas',
      lead: 'Las categorías que suministramos con más frecuencia para informática personal y periféricos.',
      items: [
        'CI de gestión de potencia y carga',
        'Controladores de interfaz, USB y pantalla',
        'Componentes de memoria y almacenamiento',
        'Conectores, cables y componentes pasivos',
        'Piezas de refrigeración y mecánicas',
        'Referencias antiguas para reparación y servicio',
      ],
    },
    cta: {
      title: 'Envíenos la lista de materiales de su plataforma',
      text: 'Indíquenos la plataforma, los números de referencia y las cantidades, actuales o antiguas. Confirmaremos qué está disponible y con qué plazo de entrega.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  'semiconductor-manufacturing': {
    hero: {
      heading: 'Componentes y repuestos para la fabricación de semiconductores',
      lead: 'Componentes de soporte, piezas de interfaz y repuestos para operaciones de fabricación, test y encapsulado, donde el tiempo de parada se mide en obleas.',
      img: '/assets/images/industry-semiconductor-hero.jpg',
      alt: 'Una oblea de silicio sostenida sobre una mesa por una herramienta de manipulación, con una segunda oblea depositada en un casete abierto',
    },
    intro: {
      title: 'Sabemos cómo mantener la eficiencia',
      paragraphs: [
        'Una fábrica o una sala de test no puede esperar por una pieza de soporte. Las interfaces de las herramientas, los consumibles de los manipuladores y la electrónica de control suelen ser elementos antiguos con plazos largos y pocas fuentes disponibles.',
        'Abastecemos según su lista de piezas a partir de proveedores que hemos homologado e inspeccionamos cada pedido a su llegada a nuestras instalaciones de Shenzhen. Todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Un inspector de YIXINOU manejando un microscopio de inspección digital en un puesto de trabajo',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Sabemos cómo mantener la eficiencia',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'inventory',
          title: 'Ahorro de costes',
          text: 'Las piezas de soporte se compran en pequeñas cantidades a precios unitarios elevados. Cotizamos la lista en su conjunto y le indicamos dónde una referencia equivalente reduce realmente el coste.',
        },
        {
          icon: 'obsolete',
          title: 'Mitigación de excedentes',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
        {
          icon: 'quality',
          title: 'Gestión de inventario',
          text: 'Cada pedido se verifica a su llegada a nuestras instalaciones de Shenzhen, y todo lo que requiere análisis interno pasa a nuestros laboratorios asociados.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes y repuestos para fabricación y test',
      lead: 'Las categorías que suministramos con más frecuencia para operaciones de fabricación y test de semiconductores.',
      items: [
        'Piezas de interfaz para test y manipuladores',
        'Consumibles de sondas y zócalos',
        'Fuentes de alimentación y electrónica de control',
        'Sensores, válvulas y componentes de movimiento',
        'Conectores, cables y componentes pasivos',
        'Repuestos antiguos para herramientas instaladas',
      ],
    },
    cta: {
      title: 'Envíenos la lista de piezas de su equipo',
      text: 'Indíquenos la herramienta, los números de referencia y las cantidades. Confirmaremos la disponibilidad y el plazo de entrega tanto de referencias actuales como antiguas.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },

  'telecom-networking': {
    hero: {
      heading: 'Abastecimiento de componentes para telecomunicaciones y redes',
      lead: 'Componentes para estaciones base, routers, switches, transporte óptico y equipos de acceso, incluido el soporte de tarjetas de línea para redes ya en servicio.',
      img: '/assets/images/industry-telecom-networking-hero.jpg',
      alt: 'Un switch de red montado en rack con los LED de los puertos encendidos y latiguillos de fibra canalizados hacia el panel superior',
    },
    intro: {
      title: 'Trabajamos para su cadena de suministro',
      paragraphs: [
        'La infraestructura de telecomunicaciones está diseñada para funcionar una década y se mantiene más tiempo. Los operadores no pueden retirar una tarjeta de servicio porque un componente haya dejado de fabricarse, así que abastecer referencias antiguas importa tanto como abastecer las nuevas.',
        'Trabajamos a partir de su lista de materiales, abastecemos a través de proveedores que hemos homologado e inspeccionamos cada pedido a su llegada a nuestras instalaciones de Shenzhen antes de enviarlo.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cajas etiquetadas de componentes electrónicos almacenadas en estanterías en el almacén de YIXINOU',
    },
    risk: {
      eyebrow: 'Gestión del riesgo',
      title: 'Trabajamos para su cadena de suministro',
      items: [
        {
          icon: 'sourcing',
          title: 'Abastecimiento estratégico',
          text: 'Trabajamos a partir de su lista de materiales y de sus referencias aprobadas, y le avisamos cuando una referencia no se puede conseguir en lugar de sustituirla en silencio.',
        },
        {
          icon: 'obsolete',
          title: 'Mitigación de excedentes',
          text: 'Seguimos los avisos de última compra (LTB) y de fin de vida (EOL) y rastreamos referencias descatalogadas, para que una pieza EOL no detenga su programa.',
        },
        {
          icon: 'inventory',
          title: 'Ahorro de costes',
          text: 'Las tarjetas de línea concentran una parte desproporcionada de la BOM. Cotizamos la tarjeta en su conjunto e identificamos las líneas en las que el coste puede moverse de verdad.',
        },
        {
          icon: 'quality',
          title: 'Gestión del ciclo de vida del producto',
          text: 'Seguimos los avisos de última compra (LTB) de las referencias de su red, para que una descatalogación sea un punto de planificación y no una caída del servicio.',
        },
      ],
    },
    parts: {
      eyebrow: 'Qué abastecemos',
      title: 'Componentes para equipos de telecomunicaciones y red',
      lead: 'Las categorías que suministramos con más frecuencia para telecomunicaciones, redes y transporte óptico.',
      items: [
        'Componentes de RF, ópticos y de interfaz',
        'Piezas de alimentación y protección de circuitos',
        'Filtros, conectores y componentes pasivos',
        'CI de memoria, lógica y controladores',
        'Módulos y conjuntos de tarjetas de línea',
        'Referencias antiguas para redes instaladas',
      ],
    },
    cta: {
      title: 'Envíenos la lista de materiales de su plataforma de red',
      text: 'Indíquenos la plataforma, los números de referencia y las cantidades, incluidas las referencias antiguas de tarjetas de línea. Confirmaremos qué está realmente disponible.',
      primary: { label: 'Contacto', href: '/Contact' },
      secondary: { label: 'Todos los productos', href: '/all-products' },
    },
  },
};

export default { groups, inspect, industries };
