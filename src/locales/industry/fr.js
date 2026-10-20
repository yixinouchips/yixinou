// French (fr-FR) locale pack for YIXINOU — industry detail pages.
// Mirrors the English industry source key-for-key (groups, inspect, industries).
// Slugs, route values, asset paths and icon names are never translated.
export const groups = {
  eyebrow: 'Familles de produits',
  title: 'Les produits que nous fournissons',
  lead: 'Les mêmes familles de composants que nous fournissons dans chacun des secteurs que nous servons.',
  items: [
    {
      title: 'Circuits intégrés',
      href: '/all-products',
    },
    {
      title: 'Transistors',
      href: '/all-products',
    },
    {
      title: 'Connecteurs',
      href: '/all-products',
    },
    {
      title: 'Condensateurs',
      href: '/all-products',
    },
    {
      title: 'Résistances',
      href: '/all-products',
    },
    {
      title: 'Capteurs et interrupteurs',
      href: '/all-products',
    },
    {
      title: 'LED et modules',
      href: '/all-products',
    },
  ],
};

export const inspect = {
  eyebrow: 'Comment nous contrôlons',
  title: 'Ce qui se passe avant l’expédition de vos composants',
  text: 'Le contrôle à réception et les contrôles visuels externes sont réalisés dans notre propre site à Shenzhen. Les analyses internes — radiographie X, XRF, décapsulation, brasabilité et tests électriques — sont réalisées par nos laboratoires partenaires. Nous n’exploitons pas notre propre laboratoire d’essais, et nous le disons clairement afin que vous sachiez exactement qui teste vos composants.',
  img: '/assets/images/quality-step-3-visual.jpg',
  alt: 'Un contrôleur positionnant un composant sous un microscope d’inspection numérique sur un tapis antistatique',
  ctaLabel: 'Découvrir notre processus qualité',
  ctaHref: '/quality',
};

export const industries = {
  aerospace: {
    hero: {
      heading: 'Composants électroniques aéronautiques et approvisionnement de pièces obsolètes',
      lead: 'Nous approvisionnons des composants électroniques pour les programmes aéronautiques et spatiaux — y compris des références obsolètes et difficiles à trouver — tout en protégeant votre calendrier de production.',
      img: '/assets/images/industry-aerospace-hero.jpg',
      alt: 'Panneaux de commande avioniques et écrans d’instruments dans un cockpit d’aéronef',
    },
    intro: {
      title: 'Les mêmes exigences. Un accès plus rapide.',
      paragraphs: [
        'Une production aéronautique ne peut pas se permettre un composant non vérifié. Lorsqu’une ligne attend un composant, la pression pousse à prendre tout ce qui est disponible — et c’est précisément à ce moment que des composants re-marqués, non conformes ou non traçables s’introduisent dans une chaîne d’approvisionnement.',
        'Nous approvisionnons selon votre nomenclature auprès de fournisseurs que nous avons qualifiés, et nous vous informons lorsqu’une référence ne peut pas être obtenue plutôt que de la substituer sans vous le dire. Chaque commande est contrôlée à réception dans notre site de Shenzhen, et tout ce qui nécessite une analyse interne est confié à nos laboratoires partenaires.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cartons étiquetés de composants électroniques stockés sur des rayonnages dans l’entrepôt YIXINOU',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous savons vous aider à maîtriser les risques',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'quality',
          title: 'Assurance qualité',
          text: 'Chaque commande est contrôlée à réception dans notre site de Shenzhen, et tout ce qui nécessite une analyse interne est envoyé à nos laboratoires partenaires.',
        },
        {
          icon: 'inventory',
          title: 'Gestion des stocks',
          text: 'Achat ponctuel ou programme continu — nous pouvons constituer un stock convenu en fonction de votre calendrier de production, afin que les composants soient prêts lorsque votre ligne en a besoin.',
        },
        {
          icon: 'obsolete',
          title: 'Gestion de l’obsolescence',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour l’aéronautique et l’aviation',
      lead: 'Les catégories que nous fournissons le plus souvent pour les programmes aéronautiques, de défense et de soutien au sol.',
      items: [
        'Composants pour cartes de commande de vol et d’avionique',
        'Composants pour systèmes de navigation et de communication',
        'Composants pour équipements radar et de soutien au sol',
        'Connecteurs, relais et interrupteurs haute fiabilité',
        'Semi-conducteurs d’alimentation, de mémoire et d’interface',
        'Références abandonnées, en dernier achat et obsolètes',
      ],
    },
    cta: {
      title: 'Envoyez-nous votre nomenclature aéronautique',
      text: 'Indiquez-nous les références, les quantités et vos critères d’acceptation. Nous confirmerons la disponibilité, le délai et la manière exacte dont nous contrôlerons les composants avant leur expédition.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  automotive: {
    hero: {
      heading: 'Composants électroniques automobiles et approvisionnement ADAS',
      lead: 'Nous approvisionnons des composants pour les systèmes automobiles — ADAS, infodivertissement, éclairage et alimentation des véhicules électriques — et nous composons avec les déséquilibres entre l’offre et la demande qui retardent les productions automobiles.',
      img: '/assets/images/industry-automotive-hero.jpg',
      alt: 'Un tableau de bord de véhicule déposé, laissant apparaître une carte de circuit imprimé et des faisceaux de câblage',
    },
    intro: {
      title: 'Nous savons sécuriser ce dont vous avez besoin',
      paragraphs: [
        'Les programmes automobiles reposent sur de longs cycles de qualification et des calendriers de production sans marge. Lorsqu’un composant manque, requalifier une alternative peut coûter plus de temps que la pièce n’en vaut : la priorité est donc de trouver rapidement la bonne référence et de prouver qu’elle est authentique.',
        'Nous travaillons à partir de votre nomenclature, achetons auprès de fournisseurs que nous avons qualifiés et contrôlons chaque commande à réception dans notre site de Shenzhen. Les composants qui nécessitent une analyse interne sont confiés à nos laboratoires partenaires.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Un contrôleur YIXINOU utilisant un microscope d’inspection numérique à un poste de travail',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous savons sécuriser ce dont vous avez besoin',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'quality',
          title: 'Assurance qualité',
          text: 'Chaque commande est contrôlée à réception dans notre site de Shenzhen, et tout ce qui nécessite une analyse interne est envoyé à nos laboratoires partenaires.',
        },
        {
          icon: 'inventory',
          title: 'Rapidité de mise sur le marché',
          text: 'La disponibilité se décide avant la pénurie. Nous chiffrons tôt, confirmons rapidement les stocks et signalons les composants qui retarderont votre production.',
        },
        {
          icon: 'obsolete',
          title: 'Accompagnement du cycle de vie',
          text: 'Les plateformes automobiles restent en production longtemps après l’arrêt de fabrication de leurs semi-conducteurs. Nous suivons les avis de dernier achat et continuons d’approvisionner les références que votre plateforme utilise encore.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour systèmes automobiles',
      lead: 'Les catégories que nous fournissons le plus souvent pour les programmes automobiles et de véhicules électriques.',
      items: [
        'Composants ADAS, capteurs et caméras',
        'Composants d’infodivertissement, d’affichage et audio',
        'Composants d’éclairage LED et de contrôle de carrosserie',
        'Composants de gestion de batterie et d’alimentation pour véhicules électriques',
        'Connecteurs, relais et composants passifs',
        'Références abandonnées et en dernier achat',
      ],
    },
    cta: {
      title: 'Envoyez-nous votre nomenclature automobile',
      text: 'Indiquez-nous les références, les quantités et vos critères d’acceptation. Nous confirmerons la disponibilité, le délai et la manière exacte dont nous contrôlerons les composants avant leur expédition.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  'consumer-electronics': {
    hero: {
      heading: 'Composants électroniques pour l’électronique grand public',
      lead: 'Nous fournissons les composants qui équipent téléphones, objets connectés portables, produits audio et appareils domotiques, où le coût unitaire et le délai décident qui remporte la commande.',
      img: '/assets/images/industry-consumer-electronics-hero.jpg',
      alt: 'Un smartphone démonté à côté d’écouteurs sans fil ouverts laissant voir leurs cartes de circuits imprimés',
    },
    intro: {
      title: 'Nous vous aidons à garder une longueur d’avance',
      paragraphs: [
        'L’électronique grand public évolue vite. Un design peut être remplacé en une saison et la nomenclature change avec lui : l’approvisionnement doit donc suivre la feuille de route plutôt que la subir.',
        'Nous chiffrons à partir de votre nomenclature complète, approvisionnons auprès de fournisseurs que nous avons qualifiés et contrôlons chaque commande avant son expédition. Lorsqu’une référence est en cours d’abandon, nous vous prévenons assez tôt pour décider d’un dernier achat.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Plateaux et bobines de composants alignés en rangées sur des établis pour le comptage et le codage des lots',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous vous aidons à garder une longueur d’avance',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'inventory',
          title: 'Réduction des coûts',
          text: 'L’économie unitaire décide des programmes grand public. Nous chiffrons la nomenclature complète, proposons des alternatives lorsqu’elles sont réellement équivalentes et vous indiquons où se situe réellement le coût.',
        },
        {
          icon: 'quality',
          title: 'Gestion des stocks',
          text: 'Chaque commande est contrôlée à réception dans notre site de Shenzhen, et tout ce qui nécessite une analyse interne est envoyé à nos laboratoires partenaires.',
        },
        {
          icon: 'obsolete',
          title: 'Maîtrise des excédents',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour appareils grand public',
      lead: 'Les catégories que nous fournissons le plus souvent pour les programmes d’électronique grand public.',
      items: [
        'Composants d’affichage, tactiles et caméras',
        'Circuits intégrés de gestion d’alimentation et de charge',
        'Composants sans fil, audio et RF',
        'Capteurs, interrupteurs et LED',
        'Composants passifs et connecteurs',
        'Modules et références anciennes',
      ],
    },
    cta: {
      title: 'Envoyez-nous votre nomenclature d’électronique grand public',
      text: 'Indiquez-nous les références, les quantités et votre coût cible. Nous reviendrons vers vous avec la disponibilité, le délai et les alternatives possibles.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  'contract-manufacturing': {
    hero: {
      heading: 'Approvisionnement de composants pour les façonniers et les EMS',
      lead: 'Un accompagnement de volume et de ligne à l’arrêt pour les prestataires EMS, chiffré sur votre nomenclature plutôt que composant par composant.',
      img: '/assets/images/industry-contract-manufacturing-hero.jpg',
      alt: 'Un panneau de cartes de circuits imprimés nus avançant sur une ligne de montage SMT, à côté de bobines de composants à montage en surface',
    },
    intro: {
      title: 'Nous nous engageons à livrer pour vous',
      paragraphs: [
        'Un façonnier est jugé sur des dates de livraison qu’il ne maîtrise pas entièrement. Les composants sont la variable : une seule référence manquante peut bloquer un ensemble terminé, et un seul composant non vérifié peut coûter cher à un client.',
        'Nous chiffrons la nomenclature complète, approvisionnons auprès de fournisseurs que nous avons qualifiés et contrôlons chaque commande à réception dans notre site de Shenzhen. Lorsqu’une ligne est déjà à l’arrêt, nous traitons la pénurie comme urgente et vous disons rapidement si nous pouvons vous aider.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cartons étiquetés de composants électroniques stockés sur des rayonnages dans l’entrepôt YIXINOU',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous nous engageons à livrer pour vous',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'inventory',
          title: 'Réduction des coûts',
          text: 'La marge sur un ensemble est faible, le coût des composants compte donc. Nous chiffrons la nomenclature complète, mettons en avant les composants pour lesquels une alternative équivalente est réellement moins chère et évitons de gonfler le prix avec des composants que vous détenez déjà.',
        },
        {
          icon: 'quality',
          title: 'Gestion des stocks',
          text: 'Chaque commande est contrôlée à réception dans notre site de Shenzhen, et tout ce qui nécessite une analyse interne est envoyé à nos laboratoires partenaires.',
        },
        {
          icon: 'obsolete',
          title: 'Maîtrise des excédents',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour les programmes d’assemblage et de production',
      lead: 'Les catégories que nous fournissons le plus souvent pour les prestataires EMS et les façonniers.',
      items: [
        'Chiffrage de nomenclature et commandes à guichet unique',
        'Approvisionnement en cas de ligne à l’arrêt et de pénurie',
        'Vérification de seconde source',
        'Rééquilibrage des excédents et des stocks',
        'Connecteurs, composants passifs et semi-conducteurs',
        'Composants programmés et en kits',
      ],
    },
    cta: {
      title: 'Envoyez-nous une nomenclature à chiffrer',
      text: 'Téléchargez ou collez votre nomenclature et nous chiffrerons la ligne complète, y compris les composants déjà couverts, afin que vous puissiez comparer à périmètre égal.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  energy: {
    hero: {
      heading: 'Composants électroniques pour l’énergie et la conversion de puissance',
      lead: 'Nous fournissons des composants pour le solaire, le stockage, le réseau et les équipements de conversion de puissance, où les pièces doivent résister à la chaleur, à la charge et au temps.',
      img: '/assets/images/industry-energy-hero.jpg',
      alt: 'L’armoire ouverte de conversion de puissance d’un onduleur, montrant les jeux de barres, les dissipateurs et les modules de puissance',
    },
    intro: {
      title: 'Nous soutenons votre chaîne d’approvisionnement',
      paragraphs: [
        'L’électronique de puissance vit dans des conditions sévères. Un onduleur ou une armoire de stockage est censé fonctionner pendant des années à température : un composant limite n’est donc pas un risque mineur, c’est une défaillance sur le terrain qui attend son heure.',
        'Nous approvisionnons selon votre nomenclature auprès de fournisseurs que nous avons qualifiés, et chaque commande est contrôlée à réception dans notre site de Shenzhen. Tout ce qui nécessite une analyse interne est confié à nos laboratoires partenaires.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Un contrôleur YIXINOU utilisant un microscope d’inspection numérique à un poste de travail',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous soutenons votre chaîne d’approvisionnement',
      items: [
        {
          icon: 'sourcing',
          title: 'Rapidité et précision',
          text: 'Les calendriers de projet bougent rarement : un chiffrage doit donc être à la fois rapide et exact. Nous confirmons la disponibilité sur des stocks réels et signalons les composants qui ne tiendront pas la date.',
        },
        {
          icon: 'quality',
          title: 'Gestion des stocks',
          text: 'Chaque commande est contrôlée à réception dans notre site de Shenzhen, et tout ce qui nécessite une analyse interne est envoyé à nos laboratoires partenaires.',
        },
        {
          icon: 'inventory',
          title: 'Réduction des coûts',
          text: 'Les composants de puissance représentent une part importante du coût de la nomenclature. Nous chiffrons la ligne dans son ensemble et signalons les cas où une référence équivalente est réellement moins chère.',
        },
        {
          icon: 'obsolete',
          title: 'Flexibilité',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour les systèmes d’énergie et de puissance',
      lead: 'Les catégories que nous fournissons le plus souvent pour les programmes d’énergie et de conversion de puissance.',
      items: [
        'IGBT, pilotes de grille et modules de puissance',
        'Composants d’onduleurs et de conversion de puissance',
        'Électronique de commande et de surveillance',
        'Composants magnétiques et condensateurs',
        'Connecteurs, relais et borniers',
        'Références abandonnées pour équipements installés',
      ],
    },
    cta: {
      title: 'Envoyez-nous la nomenclature de votre projet',
      text: 'Indiquez-nous les références, les quantités et la date de livraison que vous visez. Nous confirmerons ce qui peut être tenu et ce qui ne peut pas l’être.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  'enterprise-computing': {
    hero: {
      heading: 'Approvisionnement de composants pour serveurs et centres de données',
      lead: 'Des composants pour serveurs, stockage, équipements réseau et matériel de centre de données — y compris les références anciennes qui maintiennent les parcs installés en service.',
      img: '/assets/images/industry-enterprise-computing-hero.jpg',
      alt: 'Serveurs lames extraits d’une baie, leurs cartes de circuits imprimés et leurs modules mémoire à découvert',
    },
    intro: {
      title: 'Nous maintenons vos lignes en production',
      paragraphs: [
        'Le matériel d’entreprise reste en service bien plus longtemps que les plateformes sur lesquelles il a été conçu. Dès qu’une génération de serveurs n’est plus prise en charge, les composants deviennent plus difficiles à trouver au moment même où le taux de panne commence à augmenter.',
        'Nous approvisionnons selon votre nomenclature, y compris les références en fin de vie, et contrôlons chaque commande à réception dans notre site de Shenzhen. Tout ce qui nécessite une analyse interne est confié à nos laboratoires partenaires.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cartons étiquetés de composants électroniques stockés sur des rayonnages dans l’entrepôt YIXINOU',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous maintenons vos lignes en production',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'obsolete',
          title: 'Maîtrise des excédents',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
        {
          icon: 'inventory',
          title: 'Réduction des coûts',
          text: 'Les cycles de renouvellement coûtent cher. Maintenir plus longtemps en service un parc existant est souvent la décision la plus économique : nous approvisionnons donc les composants qui le permettent.',
        },
        {
          icon: 'quality',
          title: 'Gestion du cycle de vie produit',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et vous prévenons lorsqu’une référence de votre parc devient difficile à approvisionner, pendant qu’il est encore temps d’agir.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour les plateformes serveurs et de stockage',
      lead: 'Les catégories que nous fournissons le plus souvent pour l’informatique d’entreprise et le matériel de centre de données.',
      items: [
        'Contrôleurs de serveur, de stockage et d’interface',
        'Mémoire et composants de support de chipset',
        'Alimentations et régulateurs de tension',
        'Refroidissement, connecteurs et câblage',
        'Composants de réseau et d’interface',
        'Références anciennes pour parcs installés',
      ],
    },
    cta: {
      title: 'Envoyez-nous la nomenclature de votre plateforme serveur',
      text: 'Indiquez-nous la plateforme, les références et les quantités, y compris les références en fin de vie. Nous confirmerons ce qui est réellement disponible.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  gaming: {
    hero: {
      heading: 'Composants électroniques pour machines de jeu et de divertissement',
      lead: 'Des composants pour le matériel de jeu, les machines de divertissement, de loterie et de point de vente — y compris les pièces qui maintiennent en service des machines exploitées depuis des années.',
      img: '/assets/images/industry-gaming-hero.jpg',
      alt: 'Une console d’arcade avec boutons lumineux et joystick, sa carte de circuit imprimé et son câblage visibles à l’arrière',
    },
    intro: {
      title: 'Nous nous engageons à livrer des composants de qualité, à chaque fois',
      paragraphs: [
        'Le matériel de jeu et de divertissement reste en service pendant des années, souvent dans des lieux où une machine en panne représente une perte directe de recettes. Les composants qu’il contient ont bien souvent été abandonnés depuis longtemps.',
        'Nous approvisionnons à la fois des composants actuels et des références abandonnées auprès de fournisseurs que nous avons qualifiés, et chaque commande est contrôlée à réception dans notre site de Shenzhen avant son expédition.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Plateaux et bobines de composants alignés en rangées sur des établis pour le comptage et le codage des lots',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous nous engageons à livrer des composants de qualité, à chaque fois',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'inventory',
          title: 'Réduction des coûts',
          text: 'Les exploitants travaillent avec une économie unitaire serrée. Nous chiffrons les composants dont vous avez besoin sans gonfler la commande et disons clairement quand une alternative moins chère n’est pas réellement équivalente.',
        },
        {
          icon: 'obsolete',
          title: 'Maîtrise des excédents',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
        {
          icon: 'quality',
          title: 'Gestion des stocks',
          text: 'Chaque commande est contrôlée à réception dans notre site de Shenzhen, et tout ce qui nécessite une analyse interne est envoyé à nos laboratoires partenaires.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour le matériel de jeu et de divertissement',
      lead: 'Les catégories que nous fournissons le plus souvent pour les machines de jeu, de divertissement et de point de vente.',
      items: [
        'Composants d’affichage et de contrôleur',
        'Boutons, joysticks et encodeurs',
        'Composants d’alimentation, d’interface et d’éclairage',
        'Cartes principales et modules',
        'Connecteurs, faisceaux et composants passifs',
        'Remplacements longue durée pour machines anciennes',
      ],
    },
    cta: {
      title: 'Envoyez-nous la nomenclature de votre machine',
      text: 'Indiquez-nous la machine, les références et les quantités. Nous confirmerons la disponibilité et le délai pour les références actuelles et abandonnées.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  healthcare: {
    hero: {
      heading: 'Composants électroniques pour équipements médicaux et de santé',
      lead: 'Des composants pour la surveillance des patients, l’imagerie diagnostique et les équipements de laboratoire, où la traçabilité compte autant que la disponibilité.',
      img: '/assets/images/industry-healthcare-hero.jpg',
      alt: 'L’arrière d’un appareil de surveillance de patient, avec sa carte principale, ses connecteurs de capteurs et une nappe apparents',
    },
    intro: {
      title: 'Votre chaîne d’approvisionnement, notre priorité',
      paragraphs: [
        'Un équipement médical est qualifié sur une nomenclature figée et reste en service longtemps après l’abandon de ses composants. Substituer une pièce n’est pas une décision d’achat : c’est une décision réglementaire.',
        'C’est ce qui fait de la traçabilité l’essentiel. Nous approvisionnons selon vos références approuvées, conservons les codes de lot et de date de chaque expédition et contrôlons chaque commande à réception dans notre site de Shenzhen. Les analyses internes sont confiées à nos laboratoires partenaires.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cartons étiquetés de composants électroniques stockés sur des rayonnages dans l’entrepôt YIXINOU',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Votre chaîne d’approvisionnement, notre priorité',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'quality',
          title: 'Gestion du cycle de vie produit',
          text: 'Nous suivons les avis de dernier achat et de fin de vie pour les références que vous utilisez, afin qu’un abandon vous parvienne à l’avance plutôt qu’au moment de la panne.',
        },
        {
          icon: 'inventory',
          title: 'Gestion des stocks',
          text: 'Achat ponctuel ou programme continu — nous pouvons constituer un stock convenu en fonction de votre calendrier de production, afin que les composants soient prêts lorsque votre ligne en a besoin.',
        },
        {
          icon: 'obsolete',
          title: 'Maîtrise des excédents',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour équipements médicaux et de laboratoire',
      lead: 'Les catégories que nous fournissons le plus souvent pour les dispositifs médicaux et les équipements de diagnostic.',
      items: [
        'Composants pour cartes de surveillance et de diagnostic',
        'Capteurs et composants de conditionnement de signal',
        'Composants d’alimentation et d’isolation',
        'Écrans, connecteurs et câblage',
        'Semi-conducteurs d’interface et de mémoire',
        'Références abandonnées pour équipements installés',
      ],
    },
    cta: {
      title: 'Envoyez-nous la nomenclature de votre appareil',
      text: 'Indiquez-nous les références approuvées, les quantités et vos exigences de traçabilité. Nous confirmerons ce que nous pouvons fournir et comment cela sera documenté.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  'industrial-automation': {
    hero: {
      heading: 'Composants électroniques pour l’automatisation industrielle',
      lead: 'Des composants pour la robotique, les variateurs, les automates programmables, les capteurs et l’électronique de puissance — approvisionnés pour que votre ligne ne s’arrête pas faute d’une pièce.',
      img: '/assets/images/industry-industrial-automation-hero.jpg',
      alt: 'Une armoire de commande avec modules automates programmables et goulottes de câblage, à côté d’un bras robotisé sur une cellule de production',
    },
    intro: {
      title: 'Nous maintenons vos lignes en production',
      paragraphs: [
        'L’automatisation se juge à la disponibilité. Une ligne arrêtée coûte plus cher par heure que la quasi-totalité des composants qui la composent : la priorité est donc généralement d’obtenir la bonne pièce aujourd’hui plutôt que la pièce la moins chère le mois prochain.',
        'Nous approvisionnons selon votre nomenclature auprès de fournisseurs que nous avons qualifiés et contrôlons chaque commande à réception dans notre site de Shenzhen. Lorsqu’une machine installée utilise une référence abandonnée, nous vous disons si elle peut encore être approvisionnée.',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: 'Plateaux et bobines de composants alignés en rangées sur des établis pour le comptage et le codage des lots',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous maintenons vos lignes en production',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'inventory',
          title: 'Réduction des coûts',
          text: 'Les nomenclatures d’automatisation comportent beaucoup de composants standard. Nous chiffrons la ligne dans son ensemble et montrons où se situe réellement le coût, plutôt que d’appliquer la même marge à chaque ligne.',
        },
        {
          icon: 'quality',
          title: 'Gestion des stocks',
          text: 'Chaque commande est contrôlée à réception dans notre site de Shenzhen, et tout ce qui nécessite une analyse interne est envoyé à nos laboratoires partenaires.',
        },
        {
          icon: 'obsolete',
          title: 'Maîtrise des excédents',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour l’automatisation et la commande',
      lead: 'Les catégories que nous fournissons le plus souvent pour l’automatisation industrielle et les systèmes de commande.',
      items: [
        'Automates programmables, variateurs et composants de contrôle de mouvement',
        'Capteurs et circuits intégrés d’interface',
        'Électronique de puissance et pilotes de grille',
        'Relais, contacteurs et borniers',
        'Connecteurs, câbles et composants passifs',
        'Pièces de rechange anciennes pour machines installées',
      ],
    },
    cta: {
      title: 'Envoyez-nous votre nomenclature d’automatisation',
      text: 'Indiquez-nous la machine ou la plateforme, les références et les quantités. Si une ligne est déjà à l’arrêt, signalez-le : nous le traiterons comme urgent.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  'personal-computing': {
    hero: {
      heading: 'Composants électroniques pour l’informatique personnelle',
      lead: 'Des composants pour ordinateurs portables, ordinateurs de bureau, périphériques et leur chaîne d’accessoires — des plateformes actuelles aux références anciennes dont les équipes de maintenance ont encore besoin.',
      img: '/assets/images/industry-personal-computing-hero.jpg',
      alt: 'Un châssis d’ordinateur portable ouvert montrant sa carte mère, ses modules mémoire, son ventilateur et sa batterie',
    },
    intro: {
      title: 'Nous répondons à vos besoins d’offre et de demande',
      paragraphs: [
        'L’informatique personnelle fonctionne par cycles de plateforme courts et longues traînes de service. Les nouveaux designs ont besoin rapidement de silicium actuel ; les machines déjà sur le terrain ont besoin de références que le fabricant a cessé de produire il y a des années.',
        'Nous couvrons les deux, en approvisionnant selon votre nomenclature auprès de fournisseurs que nous avons qualifiés et en contrôlant chaque commande à réception dans notre site de Shenzhen avant son expédition.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cartons étiquetés de composants électroniques stockés sur des rayonnages dans l’entrepôt YIXINOU',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous répondons à vos besoins d’offre et de demande',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'inventory',
          title: 'Réduction des coûts',
          text: 'Les marges d’une plateforme se décident au coût unitaire. Nous chiffrons la nomenclature complète et signalons les lignes où une équivalence réelle change le montant.',
        },
        {
          icon: 'quality',
          title: 'Gestion du cycle de vie produit',
          text: 'Nous suivons les avis de fin de vie pour les références avec lesquelles vous produisez, afin qu’un abandon vous parvienne avant de devenir une pénurie.',
        },
        {
          icon: 'obsolete',
          title: 'Maîtrise des excédents',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour les plateformes informatiques',
      lead: 'Les catégories que nous fournissons le plus souvent pour l’informatique personnelle et les périphériques.',
      items: [
        'Circuits intégrés de gestion d’alimentation et de charge',
        'Contrôleurs d’interface, USB et d’affichage',
        'Composants de mémoire et de stockage',
        'Connecteurs, câbles et composants passifs',
        'Composants de refroidissement et pièces mécaniques',
        'Références anciennes pour la réparation et la maintenance',
      ],
    },
    cta: {
      title: 'Envoyez-nous la nomenclature de votre plateforme',
      text: 'Indiquez-nous la plateforme, les références et les quantités, actuelles ou anciennes. Nous confirmerons ce qui est disponible et sous quel délai.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  'semiconductor-manufacturing': {
    hero: {
      heading: 'Composants et pièces de rechange pour la fabrication de semi-conducteurs',
      lead: 'Composants de support, pièces d’interface et rechanges pour les opérations de fabrication, de test et de conditionnement, où l’arrêt se mesure en plaquettes.',
      img: '/assets/images/industry-semiconductor-hero.jpg',
      alt: 'Une plaquette de silicium tenue au-dessus d’un établi par un outil de manipulation, une seconde plaquette reposant dans une cassette ouverte',
    },
    intro: {
      title: 'Nous savons maintenir l’efficacité',
      paragraphs: [
        'Une usine de fabrication ou une salle de test ne peut pas attendre une pièce de support. Les interfaces d’équipement, les consommables de manipulateur et l’électronique de commande sont souvent des articles anciens, avec de longs délais et peu de sources restantes.',
        'Nous approvisionnons selon votre liste de pièces auprès de fournisseurs que nous avons qualifiés et contrôlons chaque commande à réception dans notre site de Shenzhen. Tout ce qui nécessite une analyse interne est confié à nos laboratoires partenaires.',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: 'Un contrôleur YIXINOU utilisant un microscope d’inspection numérique à un poste de travail',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous savons maintenir l’efficacité',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'inventory',
          title: 'Réduction des coûts',
          text: 'Les pièces de support s’achètent en petites quantités à des prix unitaires élevés. Nous chiffrons la liste dans son ensemble et vous indiquons où une référence équivalente réduit réellement le coût.',
        },
        {
          icon: 'obsolete',
          title: 'Maîtrise des excédents',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
        {
          icon: 'quality',
          title: 'Gestion des stocks',
          text: 'Chaque commande est contrôlée à réception dans notre site de Shenzhen, et tout ce qui nécessite une analyse interne est envoyé à nos laboratoires partenaires.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants et rechanges pour la fabrication et le test',
      lead: 'Les catégories que nous fournissons le plus souvent pour la fabrication et le test de semi-conducteurs.',
      items: [
        'Pièces d’interface de test et de manipulateur',
        'Consommables de sondes et de supports',
        'Alimentations et électronique de commande',
        'Capteurs, vannes et composants de mouvement',
        'Connecteurs, câbles et composants passifs',
        'Rechanges anciens pour équipements installés',
      ],
    },
    cta: {
      title: 'Envoyez-nous la liste de pièces de votre équipement',
      text: 'Indiquez-nous l’équipement, les références et les quantités. Nous confirmerons la disponibilité et le délai pour les références actuelles et anciennes.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
  'telecom-networking': {
    hero: {
      heading: 'Approvisionnement de composants télécoms et réseau',
      lead: 'Des composants pour stations de base, routeurs, commutateurs, transport optique et équipements d’accès — y compris le support des cartes de ligne pour les réseaux déjà en service.',
      img: '/assets/images/industry-telecom-networking-hero.jpg',
      alt: 'Un commutateur réseau monté en baie, avec ses LED de port allumées et des cordons optiques acheminés vers le panneau situé au-dessus',
    },
    intro: {
      title: 'Nous travaillons pour votre chaîne d’approvisionnement',
      paragraphs: [
        'Les infrastructures télécoms sont conçues pour fonctionner une décennie et sont maintenues plus longtemps encore. Un opérateur ne peut pas retirer une carte du service parce qu’un composant n’est plus fabriqué : approvisionner des références anciennes compte donc autant que d’approvisionner des références récentes.',
        'Nous travaillons à partir de votre nomenclature, approvisionnons auprès de fournisseurs que nous avons qualifiés et contrôlons chaque commande à réception dans notre site de Shenzhen avant de vous l’expédier.',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'Cartons étiquetés de composants électroniques stockés sur des rayonnages dans l’entrepôt YIXINOU',
    },
    risk: {
      eyebrow: 'Gestion des risques',
      title: 'Nous travaillons pour votre chaîne d’approvisionnement',
      items: [
        {
          icon: 'sourcing',
          title: 'Approvisionnement stratégique',
          text: 'Nous travaillons à partir de votre nomenclature et de vos références approuvées, et nous vous le disons lorsqu’une référence ne peut pas être approvisionnée plutôt que de la substituer sans vous en informer.',
        },
        {
          icon: 'obsolete',
          title: 'Maîtrise des excédents',
          text: 'Nous suivons les avis de dernier achat et de fin de vie et nous recherchons les références abandonnées, afin qu’un composant en fin de vie n’arrête pas votre programme.',
        },
        {
          icon: 'inventory',
          title: 'Réduction des coûts',
          text: 'Les cartes de ligne représentent une part disproportionnée de la nomenclature. Nous chiffrons la carte dans son ensemble et identifions les lignes sur lesquelles le coût peut réellement évoluer.',
        },
        {
          icon: 'quality',
          title: 'Gestion du cycle de vie produit',
          text: 'Nous suivons les avis de dernier achat pour les références présentes dans votre réseau, afin qu’un abandon soit un élément de planification et non une panne.',
        },
      ],
    },
    parts: {
      eyebrow: 'Ce que nous approvisionnons',
      title: 'Composants pour équipements télécoms et réseau',
      lead: 'Les catégories que nous fournissons le plus souvent pour les télécoms, les réseaux et le transport optique.',
      items: [
        'Composants RF, optiques et d’interface',
        'Composants d’alimentation et de protection des circuits',
        'Filtres, connecteurs et composants passifs',
        'Circuits intégrés de mémoire, de logique et de contrôleur',
        'Modules et ensembles de cartes de ligne',
        'Références anciennes pour réseaux installés',
      ],
    },
    cta: {
      title: 'Envoyez-nous la nomenclature de votre plateforme réseau',
      text: 'Indiquez-nous la plateforme, les références et les quantités, y compris les références de cartes de ligne anciennes. Nous confirmerons ce qui est réellement disponible.',
      primary: {
        label: 'Nous contacter',
        href: '/Contact',
      },
      secondary: {
        label: 'Tous les produits',
        href: '/all-products',
      },
    },
  },
};

export default { groups, inspect, industries };
