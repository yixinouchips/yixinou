/*
 * Traditional Chinese copy for the industry detail pages (/industries/<slug>).
 *
 * Written as native Taiwanese/Hong Kong B2B technical copy, not a character-level conversion:
 * vocabulary follows the conventions already in use in src/i18n.jsx and src/locales/zh.js
 * (積體電路、電晶體、連接器、料號、BOM、交期、品質、庫存、批號與日期碼).
 *
 * EEAT: nothing beyond the English source is claimed. Incoming inspection and external visual
 * checks happen at our own facility in Shenzhen; internal analysis — X-ray, XRF, decapsulation,
 * solderability and electrical testing — is carried out by our partner laboratories
 * (第三方合作實驗室). YIXINOU operates no testing laboratory of its own, and the copy says so in
 * exactly the places the English says so.
 *
 * Slugs, href/img paths and icon names are identical to the English source.
 */

const groups = {
  eyebrow: '產品類別',
  title: '我們供應的產品',
  lead: '我們在各個服務的行業中，供應的都是同一組產品類別。',
  items: [
    { title: '積體電路', href: '/all-products' },
    { title: '電晶體', href: '/all-products' },
    { title: '連接器', href: '/all-products' },
    { title: '電容器', href: '/all-products' },
    { title: '電阻器', href: '/all-products' },
    { title: '感測器與開關', href: '/all-products' },
    { title: 'LED 與模組', href: '/all-products' },
  ],
};

const inspect = {
  eyebrow: '我們如何檢驗',
  title: '您的料件出貨前，我們做了什麼',
  text:
    '進料檢驗與外觀檢驗在我們位於深圳的自有作業場地進行；內部結構分析 —— X 光、X 射線螢光分析（XRF）、開蓋、可焊性與電氣測試 —— 則交由第三方合作實驗室執行。我們本身並不設置測試實驗室，這一點我們據實說明，讓您清楚知道是誰在檢測您的料件。',
  img: '/assets/images/quality-step-3-visual.jpg',
  alt: '一位檢驗員在防靜電墊上，將元件置於數位檢驗顯微鏡下',
  ctaLabel: '了解我們的品質流程',
  ctaHref: '/quality',
};

const industries = {
  aerospace: {
    hero: {
      heading: '航太電子元件與停產料件採購',
      lead: '我們為航太與航空專案供應電子元件，包括已停產與不易尋獲的料號，並在供貨過程中守住您的生產時程。',
      img: '/assets/images/industry-aerospace-hero.jpg',
      alt: '飛機駕駛艙內的航電控制面板與儀表顯示器',
    },
    intro: {
      title: '相同標準，更快到手。',
      paragraphs: [
        '航太產線承受不起一顆未經驗證的料件。當產線正在等一顆元件，壓力往往逼人「有什麼就拿什麼」——而這正是重新印字、料件不符或來源無法追溯的零件流入供應鏈的時刻。',
        '我們依您的 BOM 向已通過我們資格審查的供應商採購；若某個料號確實找不到貨源，我們會如實告知，而不是默默以其他料號替代。每一筆訂單送達我們位於深圳的作業場地後都會檢驗，任何需要內部結構分析的料件，則交由第三方合作實驗室處理。',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'YIXINOU 倉庫貨架上存放著貼有標籤的電子元件紙箱',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們知道如何協助您降低風險',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'quality',
          title: '品質保證',
          text: '每一筆訂單送達我們位於深圳的作業場地後都會查驗，任何需要內部結構分析的料件，一律交由第三方合作實驗室處理。',
        },
        {
          icon: 'inventory',
          title: '庫存管理',
          text: '無論是一次性採購或長期供貨專案，我們都能依您的生產排程備妥雙方議定的庫存，讓產線需要時料件隨手可得。',
        },
        {
          icon: 'obsolete',
          title: '停產管理',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '航太與航空用元件',
      lead: '我們最常為航太、國防與地面支援專案供應的類別。',
      items: [
        '飛控與航電板用元件',
        '導航與通訊系統料件',
        '雷達與地面支援設備元件',
        '高可靠度連接器、繼電器與開關',
        '電源、記憶體與介面半導體',
        '已停產、最後採購（LTB）與停用料號',
      ],
    },
    cta: {
      title: '把您的航太 BOM 交給我們',
      text: '告訴我們料號、數量與您的允收標準。我們會回覆可供應狀況、交期，以及出貨前確切的檢驗方式。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  automotive: {
    hero: {
      heading: '汽車電子元件與 ADAS 料件採購',
      lead: '我們為車用系統供應元件 —— ADAS、車用資訊娛樂、照明與電動車電力系統 —— 並協助您因應讓車用專案一再延遲的供需失衡。',
      img: '/assets/images/industry-automotive-hero.jpg',
      alt: '一輛汽車的儀表板飾板已拆下，露出印刷電路板與線束',
    },
    intro: {
      title: '我們知道如何為您確保所需料件',
      paragraphs: [
        '車用專案靠的是漫長的驗證週期與毫不寬容的生產排程。當某顆元件缺料時，重新驗證替代料所耗費的時間往往超過這顆料本身的價值；因此首要之務，是快速找到正確料號並證明它是原廠真品。',
        '我們依您的 BOM 採購，向已通過我們資格審查的供應商取貨，並在每一筆訂單送達我們位於深圳的作業場地後檢驗。需要內部結構分析的料件，則交由第三方合作實驗室處理。',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: '一位 YIXINOU 檢驗員在工作站操作數位檢驗顯微鏡',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們知道如何為您確保所需料件',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'quality',
          title: '品質保證',
          text: '每一筆訂單送達我們位於深圳的作業場地後都會查驗，任何需要內部結構分析的料件，一律交由第三方合作實驗室處理。',
        },
        {
          icon: 'inventory',
          title: '上市時程',
          text: '供應狀況要在缺料發生前就先確定。我們提早報價、快速確認庫存，並事先標出會拖慢您生產的料件。',
        },
        {
          icon: 'obsolete',
          title: '產品生命週期支援',
          text: '車用平台的生產年限，往往遠超過其晶片停產的時間。我們持續追蹤最後採購（LTB）通知，並為您的平台仍在使用中的料號持續供料。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '車用系統元件',
      lead: '我們最常為汽車與電動車專案供應的類別。',
      items: [
        'ADAS、感測器與攝影機元件',
        '資訊娛樂、顯示與音訊料件',
        'LED 照明與車身控制元件',
        '電動車電池管理與電力元件',
        '連接器、繼電器與被動元件',
        '已停產與最後採購（LTB）料號',
      ],
    },
    cta: {
      title: '把您的汽車 BOM 交給我們',
      text: '告訴我們料號、數量與您的允收標準。我們會回覆可供應狀況、交期，以及出貨前確切的檢驗方式。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  'consumer-electronics': {
    hero: {
      heading: '消費性電子用電子元件',
      lead: '我們供應手機、穿戴裝置、音訊與智慧家庭裝置背後的元件 —— 在這些產品上，單位成本與交期決定了訂單由誰拿下。',
      img: '/assets/images/industry-consumer-electronics-hero.jpg',
      alt: '一支拆解開的智慧型手機，旁邊是打開的無線耳機，露出內部電路板',
    },
    intro: {
      title: '我們協助您搶先一步',
      paragraphs: [
        '消費性電子變化極快。一款設計可能在一季之內就被取代，BOM 也隨之更動，因此採購必須跟上產品藍圖的腳步，而不是落後於它。',
        '我們依您完整的 BOM 報價，向已通過我們資格審查的供應商採購，並在每筆訂單出貨前檢驗。若有料號即將停產，我們會提早通知，讓您還來得及做最後採購（LTB）決定。',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: '工作檯上成排陳列的元件托盤與捲帶，用於清點與編列批號',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們協助您搶先一步',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'inventory',
          title: '成本節省',
          text: '單位經濟效益決定了消費性專案的成敗。我們整份 BOM 一起報價，在確實等效的情況下提供替代方案，並告訴您成本實際落在哪裡。',
        },
        {
          icon: 'quality',
          title: '庫存管理',
          text: '每一筆訂單送達我們位於深圳的作業場地後都會查驗，任何需要內部結構分析的料件，一律交由第三方合作實驗室處理。',
        },
        {
          icon: 'obsolete',
          title: '超額庫存控管',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '消費性裝置元件',
      lead: '我們最常為消費性電子專案供應的類別。',
      items: [
        '顯示、觸控與攝影機元件',
        '電源管理與充電 IC',
        '無線、音訊與射頻元件',
        '感測器、開關與 LED',
        '被動元件與連接器',
        '模組與舊款料號',
      ],
    },
    cta: {
      title: '把您的消費性電子 BOM 交給我們',
      text: '告訴我們料號、數量與您的目標成本。我們會回覆可供應狀況、交期，以及替代方案在哪裡。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  'contract-manufacturing': {
    hero: {
      heading: '委外代工廠與 EMS 的元件採購',
      lead: '為 EMS 廠商提供停線急件與量產支援，依您的 BOM 整單報價，而不是一次一顆料。',
      img: '/assets/images/industry-contract-manufacturing-hero.jpg',
      alt: '一片裸板印刷電路板正沿著 SMT 產線移動，旁邊是表面黏著元件的捲帶',
    },
    intro: {
      title: '我們承諾為您準時交付',
      paragraphs: [
        '代工廠的評價，取決於它無法完全掌控的交期。變數往往出在料件：一個缺料料號就能卡住整台成品組裝，一顆未經驗證的料件就可能讓客戶付出代價。',
        '我們整份 BOM 一起報價，向已通過我們資格審查的供應商採購，並在每一筆訂單送達我們位於深圳的作業場地後檢驗。若產線已經停擺，我們會把這筆缺料當成急件處理，並迅速回覆是否能幫上忙。',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'YIXINOU 倉庫貨架上存放著貼有標籤的電子元件紙箱',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們承諾為您準時交付',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'inventory',
          title: '成本節省',
          text: '組裝的毛利本來就薄，元件成本因此格外關鍵。我們整份 BOM 一起報價，點出真正有等效替代料、而且更便宜的那些料件，也避免把您手上已備的料件灌進報價裡。',
        },
        {
          icon: 'quality',
          title: '庫存管理',
          text: '每一筆訂單送達我們位於深圳的作業場地後都會查驗，任何需要內部結構分析的料件，一律交由第三方合作實驗室處理。',
        },
        {
          icon: 'obsolete',
          title: '超額庫存控管',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '組裝與生產專案用元件',
      lead: '我們最常為 EMS 與委外代工供應的類別。',
      items: [
        'BOM 報價與一站式採購',
        '停線急料與缺料調度',
        '第二料源驗證',
        '超額庫存與庫存調節',
        '連接器、被動元件與半導體',
        '燒錄與成套（kitting）料件',
      ],
    },
    cta: {
      title: '把 BOM 交給我們報價',
      text: '上傳或貼上您的 BOM，我們會為整張單據報價，包括您已經有貨的那些料件，讓您可以同基準比較。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  energy: {
    hero: {
      heading: '能源與電力轉換用電子元件',
      lead: '我們為太陽能、儲能、電網與電力轉換設備供應元件 —— 在這些設備上，零件必須經得起高溫、負載與時間的考驗。',
      img: '/assets/images/industry-energy-hero.jpg',
      alt: '逆變器敞開的電力轉換機櫃，可見匯流排、散熱片與電源模組',
    },
    intro: {
      title: '我們支援您的供應鏈',
      paragraphs: [
        '電力電子長期處於嚴苛環境。逆變器或儲能櫃必須在高溫下連續運轉多年，因此一顆臨界規格的料件不是小風險，而是一場遲早發生的現場故障。',
        '我們依您的 BOM 向已通過我們資格審查的供應商採購，每一筆訂單送達我們位於深圳的作業場地後都會檢驗，任何需要內部結構分析的料件則交由第三方合作實驗室處理。',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: '一位 YIXINOU 檢驗員在工作站操作數位檢驗顯微鏡',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們支援您的供應鏈',
      items: [
        {
          icon: 'sourcing',
          title: '速度與準確度',
          text: '專案時程很少讓步，報價因此必須又快又準。我們依實際庫存確認可供應狀況，並標出趕不上交期的料件。',
        },
        {
          icon: 'quality',
          title: '庫存管理',
          text: '每一筆訂單送達我們位於深圳的作業場地後都會查驗，任何需要內部結構分析的料件，一律交由第三方合作實驗室處理。',
        },
        {
          icon: 'inventory',
          title: '成本節省',
          text: '電力元件占 BOM 成本的比例很高。我們整張單據一起報價，並指出哪些料號有真正更便宜的等效品。',
        },
        {
          icon: 'obsolete',
          title: '彈性',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '能源與電力系統元件',
      lead: '我們最常為能源與電力轉換專案供應的類別。',
      items: [
        'IGBT、閘極驅動器與電源模組',
        '逆變器與電力轉換料件',
        '控制與監測電子',
        '磁性元件與電容器',
        '連接器、繼電器與端子',
        '已裝機設備的停產料號',
      ],
    },
    cta: {
      title: '把您的專案 BOM 交給我們',
      text: '告訴我們料號、數量與您要對上的交期，我們會回覆哪些做得到、哪些做不到。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  'enterprise-computing': {
    hero: {
      heading: '伺服器與資料中心元件採購',
      lead: '伺服器、儲存、網通設備與資料中心硬體所需的元件 —— 包括讓既有裝機持續運轉的舊款料號。',
      img: '/assets/images/industry-enterprise-computing-hero.jpg',
      alt: '從機櫃中抽出的刀鋒伺服器，露出電路板與記憶體模組',
    },
    intro: {
      title: '我們讓您的產線持續運轉',
      paragraphs: [
        '企業級硬體的服役年限，遠比它所搭建的平台更長。當某個伺服器世代退出支援，零件的取得正好在故障率開始攀升時變得更加困難。',
        '我們依您的 BOM 採購，包括已停產（EOL）料號，並在每一筆訂單送達我們位於深圳的作業場地後檢驗。任何需要內部結構分析的料件，則交由第三方合作實驗室處理。',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'YIXINOU 倉庫貨架上存放著貼有標籤的電子元件紙箱',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們讓您的產線持續運轉',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'obsolete',
          title: '超額庫存控管',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
        {
          icon: 'inventory',
          title: '成本節省',
          text: '汰換週期所費不貲。讓既有裝機多服役一段時間，往往是更划算的決定，我們供應讓這件事成為可能的料件。',
        },
        {
          icon: 'quality',
          title: '產品生命週期管理',
          text: '我們追蹤最後採購（LTB）與停產（EOL）通知，在您裝機中的料號即將變得難以取得、卻還來得及採取行動時就通知您。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '伺服器與儲存平台元件',
      lead: '我們最常為企業運算與資料中心硬體供應的類別。',
      items: [
        '伺服器、儲存與介面控制器',
        '記憶體與晶片組支援料件',
        '電源供應器與穩壓器',
        '散熱、連接器與線材',
        '網通與介面元件',
        '既有裝機的舊款料號',
      ],
    },
    cta: {
      title: '把您的伺服器平台 BOM 交給我們',
      text: '告訴我們平台、料號與數量，包含已停產料號。我們會確認真正可供應的部分。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  gaming: {
    hero: {
      heading: '遊戲與娛樂機台用電子元件',
      lead: '遊戲硬體、娛樂、彩票與 POS 機台所需的元件 —— 包括讓長年服役機台持續運轉的料件。',
      img: '/assets/images/industry-gaming-hero.jpg',
      alt: '大型電玩的控制面板，配有發光按鍵與搖桿，後方可見電路板與配線',
    },
    intro: {
      title: '我們承諾每一次都交付品質可靠的料件',
      paragraphs: [
        '遊戲與娛樂機台往往要服役多年，而且常放在停機就等於直接損失營業額的場所。機台裡的元件，很多早在多年前就已停產。',
        '我們向已通過我們資格審查的供應商採購現行料件與已停產料號，每一筆訂單在送達我們位於深圳的作業場地後、出貨前都會檢驗。',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: '工作檯上成排陳列的元件托盤與捲帶，用於清點與編列批號',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們承諾每一次都交付品質可靠的料件',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'inventory',
          title: '成本節省',
          text: '機台營運者的單位經濟效益很緊。我們只為您需要的料件報價，不灌單，並在較便宜的等效品其實並不等效時直接說清楚。',
        },
        {
          icon: 'obsolete',
          title: '超額庫存控管',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
        {
          icon: 'quality',
          title: '庫存管理',
          text: '每一筆訂單送達我們位於深圳的作業場地後都會查驗，任何需要內部結構分析的料件，一律交由第三方合作實驗室處理。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '遊戲與娛樂硬體元件',
      lead: '我們最常為遊戲、娛樂與 POS 機台供應的類別。',
      items: [
        '顯示與控制器元件',
        '按鍵、搖桿與編碼器',
        '電源、介面與照明元件',
        '主機板與模組',
        '連接器、線束與被動元件',
        '舊型機台的長效替代料',
      ],
    },
    cta: {
      title: '把您的機台 BOM 交給我們',
      text: '告訴我們機台型號、料號與數量，我們會確認現行與已停產料號的可供應狀況與交期。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  healthcare: {
    hero: {
      heading: '醫療與照護設備用電子元件',
      lead: '病患監測、診斷影像與實驗室設備所需的元件 —— 在這些設備上，可追溯性和供貨能力一樣重要。',
      img: '/assets/images/industry-healthcare-hero.jpg',
      alt: '病患監測裝置的背面，露出主機板、感測器接頭與一條排線',
    },
    intro: {
      title: '我們把您的供應鏈放在第一位',
      paragraphs: [
        '醫療設備是依固定的 BOM 取得認證的，而它們的服役年限往往遠超過元件停產的時間。更換一顆料件不是採購決定，而是法規決定。',
        '這正是可追溯性之所以關鍵的原因。我們依您核可的料號採購，為每一批出貨保留批號與日期碼，並在每一筆訂單送達我們位於深圳的作業場地後檢驗。內部結構分析則交由第三方合作實驗室處理。',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'YIXINOU 倉庫貨架上存放著貼有標籤的電子元件紙箱',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們把您的供應鏈放在第一位',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'quality',
          title: '產品生命週期管理',
          text: '我們為您使用的料號追蹤最後採購（LTB）與停產（EOL）通知，讓停產這件事在故障發生之前就讓您知道，而不是等到停機才發現。',
        },
        {
          icon: 'inventory',
          title: '庫存管理',
          text: '無論是一次性採購或長期供貨專案，我們都能依您的生產排程備妥雙方議定的庫存，讓產線需要時料件隨手可得。',
        },
        {
          icon: 'obsolete',
          title: '超額庫存控管',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '醫療與實驗室設備元件',
      lead: '我們最常為醫療器材與診斷設備供應的類別。',
      items: [
        '監測與診斷電路板元件',
        '感測器與訊號調理料件',
        '電源與隔離元件',
        '顯示器、連接器與線材',
        '介面與記憶體半導體',
        '已裝機設備的停產料號',
      ],
    },
    cta: {
      title: '把您的設備 BOM 交給我們',
      text: '告訴我們核可的料號、數量與任何可追溯性要求，我們會確認能供應的範圍以及文件將如何提供。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  'industrial-automation': {
    hero: {
      heading: '工業自動化用電子元件',
      lead: '機器人、驅動器、PLC、感測器與電力電子所需的元件 —— 供料方式以不讓您的產線因為一顆料件停下來為原則。',
      img: '/assets/images/industry-industrial-automation-hero.jpg',
      alt: '一座配電控制櫃內含 PLC 模組與線槽，旁邊是生產單元上的機械手臂',
    },
    intro: {
      title: '我們讓您的產線持續運轉',
      paragraphs: [
        '自動化看的是稼動率。產線停一小時的代價，幾乎高於線上任何一顆元件，因此優先要務通常是今天就拿到對的料件，而不是下個月才拿到最便宜的料件。',
        '我們依您的 BOM 向已通過我們資格審查的供應商採購，並在每一筆訂單送達我們位於深圳的作業場地後檢驗。若已裝機的設備使用已停產料號，我們會明確告訴您是否還找得到貨源。',
      ],
      img: '/assets/images/quality-step-1-photography.jpg',
      alt: '工作檯上成排陳列的元件托盤與捲帶，用於清點與編列批號',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們讓您的產線持續運轉',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'inventory',
          title: '成本節省',
          text: '自動化 BOM 裡有很多通用料件。我們整張單據一起報價，讓您看清成本實際落在哪裡，而不是每一行都加同樣的成數。',
        },
        {
          icon: 'quality',
          title: '庫存管理',
          text: '每一筆訂單送達我們位於深圳的作業場地後都會查驗，任何需要內部結構分析的料件，一律交由第三方合作實驗室處理。',
        },
        {
          icon: 'obsolete',
          title: '超額庫存控管',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '自動化與控制用元件',
      lead: '我們最常為工業自動化與控制系統供應的類別。',
      items: [
        'PLC、驅動與運動控制料件',
        '感測器與介面 IC',
        '電力電子與閘極驅動器',
        '繼電器、接觸器與端子',
        '連接器、線材與被動元件',
        '已裝機設備的舊款備品',
      ],
    },
    cta: {
      title: '把您的自動化 BOM 交給我們',
      text: '告訴我們機台或平台、料號與數量。如果產線已經停擺，請直接說明，我們會以急件處理。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  'personal-computing': {
    hero: {
      heading: '個人電腦用電子元件',
      lead: '筆記型電腦、桌上型電腦、周邊設備及其零配件供應鏈所需的元件 —— 從現行平台到維修團隊仍需要的舊款料號。',
      img: '/assets/images/industry-personal-computing-hero.jpg',
      alt: '打開的筆電機殼，露出主機板、記憶體模組、散熱風扇與電池',
    },
    intro: {
      title: '我們滿足您的供需需求',
      paragraphs: [
        '個人電腦的產品週期短，售後服務的尾巴卻很長。新設計需要快速取得現行晶片；而已經在客戶手上的機器，需要的卻是原廠多年前就停產的料號。',
        '兩種我們都支援：依您的 BOM 向已通過我們資格審查的供應商採購，並在每一筆訂單送達我們位於深圳的作業場地後、出貨前檢驗。',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'YIXINOU 倉庫貨架上存放著貼有標籤的電子元件紙箱',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們滿足您的供需需求',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'inventory',
          title: '成本節省',
          text: '平台的毛利取決於單位成本。我們整份 BOM 一起報價，並標出真正有等效料可以改變數字的那些料件。',
        },
        {
          icon: 'quality',
          title: '產品生命週期管理',
          text: '我們為您投產使用的料號追蹤停產（EOL）通知，讓停產的消息在變成缺料之前就先送到您手上。',
        },
        {
          icon: 'obsolete',
          title: '超額庫存控管',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '運算平台元件',
      lead: '我們最常為個人電腦與周邊設備供應的類別。',
      items: [
        '電源管理與充電 IC',
        '介面、USB 與顯示控制器',
        '記憶體與儲存元件',
        '連接器、線材與被動元件',
        '散熱與機構件',
        '維修與售後服務用的舊款料號',
      ],
    },
    cta: {
      title: '把您的平台 BOM 交給我們',
      text: '告訴我們平台、料號與數量，無論是現行或舊款。我們會確認可供應的料件及其交期。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  'semiconductor-manufacturing': {
    hero: {
      heading: '半導體製造用元件與備品',
      lead: '晶圓製造、測試與封裝作業所需的支援元件、介面料件與備品 —— 在這裡，停機時間是以晶圓片數來計算的。',
      img: '/assets/images/industry-semiconductor-hero.jpg',
      alt: '一支取放工具在工作檯上方舉著一片矽晶圓，旁邊開啟的晶圓盒中還放著另一片',
    },
    intro: {
      title: '我們知道如何維持效率',
      paragraphs: [
        '晶圓廠或測試線無法為了一顆支援料件而等待。機台介面、Handler 耗材與控制電子往往是舊款項目，交期長、可取得的貨源又少。',
        '我們依您的零件清單向已通過我們資格審查的供應商採購，並在每一筆訂單送達我們位於深圳的作業場地後檢驗。任何需要內部結構分析的料件，則交由第三方合作實驗室處理。',
      ],
      img: '/assets/images/quality-open-market-inspection.jpg',
      alt: '一位 YIXINOU 檢驗員在工作站操作數位檢驗顯微鏡',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們知道如何維持效率',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'inventory',
          title: '成本節省',
          text: '支援料件採購數量少、單價高。我們整張清單一起報價，並告訴您哪些料號有等效品能真正降低成本。',
        },
        {
          icon: 'obsolete',
          title: '超額庫存控管',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
        {
          icon: 'quality',
          title: '庫存管理',
          text: '每一筆訂單送達我們位於深圳的作業場地後都會查驗，任何需要內部結構分析的料件，一律交由第三方合作實驗室處理。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '晶圓製造與測試用元件及備品',
      lead: '我們最常為半導體製造與測試作業供應的類別。',
      items: [
        '測試機與 Handler 介面料件',
        '探針與測試座耗材',
        '電源供應器與控制電子',
        '感測器、閥件與運動元件',
        '連接器、線材與被動元件',
        '已裝機機台的舊款備品',
      ],
    },
    cta: {
      title: '把您的設備零件清單交給我們',
      text: '告訴我們機台、料號與數量，我們會確認現行與舊款料號的可供應狀況與交期。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
  'telecom-networking': {
    hero: {
      heading: '電信與網路設備元件採購',
      lead: '基地台、路由器、交換器、光傳輸與接取設備所需的元件 —— 包括為仍在服役的網路提供線卡支援。',
      img: '/assets/images/industry-telecom-networking-hero.jpg',
      alt: '機架式網路交換器，連接埠指示燈亮著，光纖跳線接入上方面板',
    },
    intro: {
      title: '我們為您的供應鏈效力',
      paragraphs: [
        '電信基礎設施的設計壽命以十年計，支援年限還要更長。營運商不可能因為一顆元件停產就把線卡退役，因此舊款料號的採購與新料件同樣重要。',
        '我們依您的 BOM 採購，向已通過我們資格審查的供應商取貨，並在每一筆訂單送達我們位於深圳的作業場地後、出貨給您之前檢驗。',
      ],
      img: '/assets/images/gallery-06.jpg',
      alt: 'YIXINOU 倉庫貨架上存放著貼有標籤的電子元件紙箱',
    },
    risk: {
      eyebrow: '風險管理',
      title: '我們為您的供應鏈效力',
      items: [
        {
          icon: 'sourcing',
          title: '策略採購',
          text: '我們依您的 BOM 與核可料號採購；若某個料號確實找不到貨源，我們會如實告知，絕不會未經確認就擅自替代。',
        },
        {
          icon: 'obsolete',
          title: '超額庫存控管',
          text: '我們持續追蹤最後採購（LTB）與停產（EOL）通知，並主動尋找已停產料號，讓停產料件不至於耽誤您的專案。',
        },
        {
          icon: 'inventory',
          title: '成本節省',
          text: '線卡在 BOM 中占了偏高的比重。我們把整張線卡一起報價，並找出成本真正有機會下降的那些料件。',
        },
        {
          icon: 'quality',
          title: '產品生命週期管理',
          text: '我們為您網路中的料號追蹤最後採購（LTB）通知，讓停產成為一項規劃事項，而不是一次斷線事故。',
        },
      ],
    },
    parts: {
      eyebrow: '我們供應什麼',
      title: '電信與網路設備元件',
      lead: '我們最常為電信、網通與光傳輸供應的類別。',
      items: [
        '射頻、光通訊與介面元件',
        '電源與電路保護料件',
        '濾波器、連接器與被動元件',
        '記憶體、邏輯與控制器 IC',
        '模組與線卡組件',
        '既有網路的舊款料號',
      ],
    },
    cta: {
      title: '把您的網路平台 BOM 交給我們',
      text: '告訴我們平台、料號與數量，包括舊款線卡料號。我們會確認真正可供應的部分。',
      primary: {
        label: '聯繫我們',
        href: '/Contact',
      },
      secondary: {
        label: '全部產品',
        href: '/all-products',
      },
    },
  },
};

export { groups, inspect, industries };
export default { groups, inspect, industries };
