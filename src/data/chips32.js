const raw = [
  ['SN65HVD1781DR','Texas Instruments','集成电路(IC)','接口芯片','RS-485/RS-422收发器','RS-485收发器','速率1Mbps、工作电压3.3V至5V、具有±70V总线故障保护','8引脚SOIC封装','工业级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['INA199B2QDCKRQ1','Texas Instruments','集成电路(IC)','模拟芯片','电流变送器与监控器','电流分流监控器','增益100V/V、共模电压-0.3V至26V、模拟电压输出','6引脚SC70/SOT-363封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['ADS1015BQDGSRQ1','Texas Instruments','集成电路(IC)','数据转换器','模数转换器(ADC)','12位数字模数转换器','速率3.3 kSPS、4通道、集成PGA/基准/比较器、I2C接口','10引脚VSSOP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['LM74800QDRRRQ1','Texas Instruments','集成电路(IC)','电源管理芯片','理想二极管控制器','理想二极管控制器','工作电压3V至65V、驱动背对背N沟道MOSFET、反向极性保护','12引脚WSON封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['LMV796QMFX/NOPB','Texas Instruments','集成电路(IC)','模拟芯片','运算放大器','低噪声运算放大器','带宽17MHz、压摆率、超低噪声5.8 nV/√Hz、单通道、供电电压1.8V至5.5V','5引脚SOT-23封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['SN74LVC3G17DCTR','Texas Instruments','集成电路(IC)','模拟芯片','施密特触发器/缓冲器','三通道非反相施密特触发缓冲器','工作电压1.65V至5.5V、高低电平驱动电流±32mA','8引脚SSOP/VSSOP封装','工业级工作温度-40℃至+85℃','JEDEC、RoHS','官方数据手册确认'],
  ['TPS3809K33QDBVRQ1','Texas Instruments','集成电路(IC)','电源管理芯片','电压监控器(复位IC)','电压监控复位芯片','阈值电压2.93V（适用于3.3V系统）、低电平有效推挽复位输出','3引脚SOT-23封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['TXB0104QPWRQ1','Texas Instruments','集成电路(IC)','接口芯片','电压电平转换器','4位双向电压电平转换器','支持自动方向感应、速率、±15kV ESD防护','14引脚TSSOP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['OPT3001DNPRQ1','Texas Instruments','传感器','集成电路(IC)','环境光传感器','数字环境光传感器(ALS)','高精密人眼光谱匹配响应、测量范围0.01 lux至83k lux、I2C接口','6引脚USON封装','汽车级工作温度-40℃至+105℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['ISO7741FDWR','Texas Instruments','集成电路(IC)','隔离器','数字隔离器','四通道数字隔离器','速率100Mbps、3正/1反通道配置、耐受5000 Vrms隔离电压、CMTI 85 kV/µs','16引脚SOIC宽体封装','工业级工作温度-55℃至+125℃','VDE、UL、CSA、RoHS','官方数据手册确认'],
  ['LMV796MFX/NOPB','Texas Instruments','集成电路(IC)','模拟芯片','运算放大器','低噪声运算放大器','带宽17MHz、噪声密度5.8 nV/√Hz、单通道、工作电压1.8V至5.5V','5引脚SOT-23封装','工业级工作温度-40℃至+125℃','RoHS','官方数据手册确认'],
  ['LSF0204YZPR','Texas Instruments','集成电路(IC)','接口芯片','电压电平转换器','4通道双向电压电平转换器','支持无方向控制、速率、漏极开路/推挽转换','12引脚DSBGA封装','工业级工作温度-40℃至+85℃','RoHS','官方数据手册确认'],
  ['BQ79656PAPRQ1','Texas Instruments','集成电路(IC)','电源管理芯片','电池管理芯片','汽车级串联精密电池监测器与平衡器','支持多达16串电池监测、集成电流传感器、ASIL-D功能安全','64引脚HTQFP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、ISO 26262、RoHS','官方数据手册确认'],
  ['DRV8245HQPWPRQ1','Texas Instruments','集成电路(IC)','模拟芯片','有刷直流电机驱动器','40V 10A H桥电机驱动器','工作电压40V、最大输出电流10A、硬件配置模式','28引脚HTSSOP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['TAS6584QPHDRQ1','Texas Instruments','集成电路(IC)','音频与视频芯片','D类音频放大器','45V 10A四通道数字输入D类音频放大器','供电电压高达45V、输出电流10A、集成电流感测与实时负载诊断','64引脚HTQFP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['DRV8245HQPWPRQ1','Texas Instruments','集成电路(IC)','模拟芯片','有刷直流电机驱动器','40V 10A H桥电机驱动器','工作电压40V、最大输出电流10A、硬件配置模式','28引脚HTSSOP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','重复项同上'],
  ['LMR14030SSQDDARQ1','Texas Instruments','集成电路(IC)','电源管理芯片','降压开关稳压器','3.5A 40V降压DC-DC转换器','输入电压4V至40V、输出电流3.5A、开关频率可调/2.5MHz','8引脚SOIC-EP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['TPS7A1601AQDGNRQ1','Texas Instruments','集成电路(IC)','电源管理芯片','线性稳压器(LDO)','超低静态电流LDO稳压器','输入电压最高60V、输出电流100mA、输出可调、超低静态电流IQ','8引脚HVSSOP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['DRV8889AQWRGERQ1','Texas Instruments','集成电路(IC)','模拟芯片','步进电机驱动器','50V 1.5A双极型步进电机驱动器','工作电压50V、最大输出电流1.5A、集成数字微步细分与Smart Tune功能','24引脚VQFN封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['TPS62992QRYTRQ1','Texas Instruments','集成电路(IC)','电源管理芯片','降压开关稳压器','2A高效同步降压转换器','输入电压3V至17V、输出电流2A、可调输出、集成DCS-Control控制拓扑','9引脚TFQFN封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['BQ79656PAPRQ1','Texas Instruments','集成电路(IC)','电源管理芯片','电池管理芯片','汽车级串联精密电池监测器与平衡器','支持多达16串电池监测、集成电流传感器、ASIL-D功能安全','64引脚HTQFP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、ISO 26262、RoHS','重复项同上'],
  ['ICM-42688P','InvenSense','传感器','惯性传感器','MEMS 六轴 IMU','高性能六轴惯性测量单元','集成3轴加速度计与3轴陀螺仪、支持高精度外部时钟输入、低功耗','14引脚LGA封装','工业级工作温度-40℃至+85℃','RoHS','官方数据手册确认'],
  ['TPS92633QPWPRQ1','Texas Instruments','集成电路(IC)','电源管理芯片','LED驱动器','汽车级3通道串行/硬件配置LED驱动器','支持高侧恒流输出、诊断功能、最大输出电流每通道可达100mA以上','20引脚HTSSOP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['TPS62442QWRQRRQ1','Texas Instruments','集成电路(IC)','电源管理芯片','降压开关稳压器','双通道同步降压DC-DC转换器','输入电压2.7V至6V、双路输出（最大可达4A/2A）、高开关频率','18引脚VQFN封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['DRV8243HQRXYRQ1','Texas Instruments','集成电路(IC)','模拟芯片','有刷直流电机驱动器','40V 4.5A H桥电机驱动器','工作电压40V、最大输出电流4.5A、硬件配置接口','14引脚VQFN封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['DRV8718SQRVJRQ1','Texas Instruments','集成电路(IC)','模拟芯片','栅极驱动器/多通道驱动器','汽车级八通道智能高边/低边开关驱动器','支持SPI控制、集成全面保护与诊断功能、驱动继电器/LED/电磁阀','32引脚VQFN封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['TPS2065QDGNRQ1','Texas Instruments','集成电路(IC)','电源管理芯片','电源开关/配电开关','限流功率配电开关','连续输出电流1.5A、集成过流保护、使能控制、低导通阻抗','8引脚MSOP/HVSSOP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['INA240A2QPWRQ1','Texas Instruments','集成电路(IC)','模拟芯片','电流变送器与监控器','高精度双向电流感测放大器','具备增强型PWM抑制、增益50V/V、共模电压-4V至80V','14引脚TSSOP封装','汽车级工作温度-40℃至+125℃','AEC-Q100、RoHS','官方数据手册确认'],
  ['THVD1510DR','Texas Instruments','集成电路(IC)','接口芯片','RS-485/RS-422收发器','RS-485/RS-422收发器','速率30 Mbps、±16kV IEC ESD防护、3.3V至5V宽供电、1/8单位负载','8引脚SOIC封装','工业级工作温度-40℃至+125℃','TIA/EIA-485、RoHS','官方数据手册确认'],
  ['ST25R3916B-AQWT','STMicroelectronics','集成电路(IC)','射频与微波芯片','NFC/RFID读卡器芯片','高性能NFC通用读卡器IC','支持NFC论坛、EMVCo、ISO 14443 A/B、ISO 15693、FeliCa、高输出功率、集成主动波形整形(AWS)','32引脚QFN封装','工业级工作温度-40℃至+125℃','ISO/IEC 14443、NFC Forum、RoHS','官方数据手册确认'],
  ['TPSM82902SISR','Texas Instruments','集成电路(IC)','电源管理芯片','集成电感DC-DC稳压器','2A微型同步降压电源模块','集成电感、输入电压2.7V至6V、输出电流2A、高效率输出','10引脚MicroSiP/QFN封装','工业级工作温度-40℃至+125℃','RoHS','官方数据手册确认'],
  ['AD5432YRMZ-REEL7','Analog Devices','集成电路(IC)','数据转换器','数模转换器(DAC)','10位串行输入乘法型数模转换器','单通道、电压输出、建立时间、低功耗、微型封装','10引脚MSOP封装','工业级工作温度-40℃至+125℃','RoHS','官方数据手册确认'],
];

const safeId = (mpn) => mpn.replaceAll('/', '-');
const mapImageNotes = {
  'LM74800QDRRRQ1': '当前素材为型号文件夹中的本地图片；图片类型和来源请以素材采集记录为准。',
  'ICM-42688P': '当前素材为型号文件夹中的本地封装图；不将其表述为带可读丝印的实拍图。',
};
const imageFor = (mpn) => {
  const map = {
    'LM74800QDRRRQ1': '/assets/images/LM74800QDRRRQ1.jpg',
    'ICM-42688P': '/assets/images/icm-42688-p-package.jpg',
  };
  return map[mpn] || '/assets/images/logo-horizontal.png';
};
const imageNoteFor = (mpn) => mapImageNotes[mpn] || '当前素材为YIXINOU Logo占位图；未找到可靠匹配的本地产品图片，采购前请索取对应批次照片。';

const toPart = (r) => {
  const [mpn, brand, family, category, subcategory, fn, specs, pkg, temp, standards, source] = r;
  const title = `${mpn} | ${brand} ${subcategory} | YIXINOU`;
  const summary = `${mpn} 是 ${brand} 的${subcategory}，归属于${family} / ${category} / ${subcategory}。已提供功能描述：${fn}。本页仅列出当前已提供的型号、品牌、分类、规格、封装、工作温度和认证/标准；库存、价格、MOQ与交期请联系 YIXINOU 询价。`;
  const properties = [['Brand / Manufacturer', brand], ['Product family', family], ['Product category', category], ['Product subcategory', subcategory], ['Function', fn], ['Provided specifications', specs], ['Package', pkg], ['Operating temperature', temp], ['Certification / standard', standards]];
  const faq = [
    { q: `How can I request ${mpn} price and availability?`, a: `请提供型号 ${mpn}、需求数量、目标交期和目的地，YIXINOU 将核实库存、价格、MOQ与交期；当前页面未提供实际库存或报价。` },
    { q: `What information is confirmed for ${mpn}?`, a: `当前已提供并保留：品牌/制造商 ${brand}；产品大类 ${family}；产品分类 ${category}；产品子类 ${subcategory}；功能描述 ${fn}；主要规格 ${specs}；封装 ${pkg}；工作温度 ${temp}；认证/标准 ${standards}。资料来源：${source}。` },
    { q: `Can you provide a replacement for ${mpn}?`, a: `可按 ${family} / ${category} / ${subcategory} 进行替代选型，但必须依据数据手册、功能、已提供规格、封装/引脚、工作温度和认证/标准确认；当前素材未指定替代型号。` },
  ];
  const keywords = `${mpn}, ${brand}, ${family}, ${category}, ${subcategory}, ${fn}, ${specs}, ${pkg}, ${temp}, ${standards}`;
  return { mpn, brand, title, category: `${family} / ${category} / ${subcategory}`, categoryHref: '/all-products', summary, img: imageFor(mpn), alt: `${brand} ${mpn} ${subcategory} product image`, imageNote: imageNoteFor(mpn), specs: properties, about: summary, standards: standards.split('、').filter(Boolean), features: [fn, specs, pkg, temp, standards], applications: [`适用于${category} / ${subcategory}相关采购、BOM核对和选型评估。`, '具体应用场景未在当前素材中提供，请以制造商资料和采购方设计要求核实。'], faq, keywords };
};

export const CHIPS32 = Object.fromEntries(raw.map((r) => [r[0], toPart(r)]));
export const CHIPS32_RAW_COUNT = raw.length;
export const CHIPS32_MODELS = [...new Set(raw.map((r) => r[0]))];
export { safeId };
