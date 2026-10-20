# `/quality` 页面 EEAT · GEO 审核报告

- **审核对象**：`http://127.0.0.1:5174/quality`（YIXINOU 品质流程页）
- **对标页面**：`https://www.fusionww.com/quality/process`
- **审核日期**：2026-10-01
- **约束条件**：第 4、5 步必须保持「委托第三方实验室」表述，不得写成自有实验室

---

## 结论摘要

| 维度 | 结论 |
|---|---|
| 图文一致性 | ❌ 7 处配图中 **7 处全部与文案不符**（已全部更换） |
| Experience 经验 | ⚠️ 缺第一手证据（流程视频、真实检测照片、报告样例） |
| Expertise 专业性 | ⚠️ 无具名专家、无资质编号、无抽样标准说明 |
| Authoritativeness 权威性 | ❌ **证书区仍是 SACOH 的证书**，属反向证据，必须优先处理 |
| Trustworthiness 可信度 | ⚠️ 无更新日期、数据无口径、无主体信息、合作实验室资质未说明 |
| GEO 可抓取性 | ❌ 5 步流程原先只有 1 步进入 DOM，80% 正文对爬虫/LLM 不可见（已修复） |

---

## 一、图文不符（7 处，已全部更换）

| # | 位置 | 原图 | 问题 | 现图 |
|---|---|---|---|---|
| 1 | 页面顶部 Banner | `about-sidebanner.png` | 3840×880 的**通用写字楼外景**，与「质量流程」无关；出现在质量页顶部易被理解为「这是本公司的厂房/办公楼」，构成**误导性视觉暗示** | `quality-banner.jpg` |
| 2 | Quality Control for the Open Market 配图 | `news-ic-testing.jpg` | 实为**设备产品目录拼图**——画面含 `Probe Station / Handler / Laser Repair / Probe Card / DUT Board` 英文清单与产品小图，是供应商产品页截图；与「开放市场质量控制」无关，且与第 3 步**重复用图** | `quality-open-market-inspection.jpg` |
| 3 | 第 1 步 Photography and Review | `factory-warehouse.jpg` | 文案＝清点、逐颗拍照、贴批号；图为**空仓库货架**，无任何拍照/清点元素 | `quality-step-1-photography.jpg` |
| 4 | 第 2 步 Barcode Scanning and Review | `factory-storage.jpg` | 文案＝条码扫描；图为**堆叠纸箱**，无扫描动作；且画面中清晰可见**第三方品牌 Würth Elektronik 红色 Logo** 及中文唛头 → 图文不符 **+ 第三方商标风险** | `quality-step-2-barcode.jpg` |
| 5 | 第 3 步 Visual Inspection | `news-ic-testing.jpg` | 与第 2 处**同图重复**；内容为设备目录 ≠ 目检 | `quality-step-3-visual.jpg` |
| 6 | 第 4 步 Laboratory Inspection and Testing | `factory-smt.jpg` | 文案＝X-ray / XRF / 显微镜 / 开封测试；图为**仓储货架**，完全不符 | `quality-step-4-laboratory.jpg` |
| 7 | 第 5 步 Electrical Testing | `news-pcb.jpg` | 文案＝曲线描迹仪 / 功能测试 / LCR；图为**一块未贴装 PCB**，无测试仪器 | `quality-step-5-electrical.jpg` |

**附带修复**：旧图全部是工厂/新闻区的复用图，造成站内多页重复；现 5 步各用独立配图。

### ⚠️ 关于新配图的重要说明

新配图为 **AI 生成的示意图**，用于替代原先完全不符的图片。这样做解决了「图文不符」，但**不能解决"这是我们的真实流程"这一层可信度**：

- 若作为「我们的流程实拍」呈现，仍属不实陈述，**反而不利于 EEAT**；
- 建议二选一（见第五节待决策事项）：
  1. 用真实拍摄的入货检验照片替换（最佳）；
  2. 保留示意图，但加一行标注「Illustrative image」/「示意图」。

当前图片**无任何文字、Logo、品牌名或可识别商标**，第 4 步刻意做成**无品牌的通用实验室**，不会暗示该实验室属于本公司。

---

## 二、严重 GEO 缺陷：5 步流程仅 1 步可被抓取（已修复）

- **位置**：`Our Quality Process` 区块
- **问题**：原实现只在 DOM 中渲染**当前激活的那一步**，其余 4 步的标题与正文**完全不存在于 HTML 中**。实测：`document.querySelectorAll('.quality-step-panel h3').length === 1`。
  后果：Googlebot 与各类 LLM 抓取时只能读到第 1 步，**80% 的流程正文不可见**——这是本页最严重的 GEO 问题，也解释了为何该区块的「专业性」信号无法被机器识别。
- **修复**：改为 5 个面板**全部常驻 DOM**，仅用 `hidden` 属性控制显隐（并补 `.quality-step-panel[hidden] { display: none; }`）。
- **修复后实测**：面板数 = 5；`h3` 数 = 5；`Barcode Scanning and Review` / `Visual Inspection` / `Laboratory Inspection and Testing` / `Electrical Testing` / `partner laboratories` / `curve tracers` 均可在 `documentElement.innerHTML` 中检索到；任意时刻可见面板恒为 1；5 个 tab 点击切换正常、图片一一对应；无横向溢出、控制台 0 报错。

---

## 三、EEAT 缺口（需你提供信息后补充）

### Experience 经验
| 位置 | 缺口 | 建议 |
|---|---|---|
| 引言区之后 | 全页无第一手证据（无视频、无报告样例、无现场实拍） | 嵌入站内已有的 `company.mp4` 或工厂实拍片段；同行在该页嵌入了流程视频 + Quality Guide |
| 第 1–5 步 | 5 步均为示意图 | 换成真实拍摄照片，或加「示意图」标注 |
| 页面底部 | 无检测报告样例 | 提供一份**脱敏后的 Inspection Report 样例**（PDF/图片），是极强的信任信号 |

### Expertise 专业性
| 位置 | 缺口 | 建议 |
|---|---|---|
| Quality Control Team 卡片 | 无具名专家、无职衔、无从年限 | 增加具名质检负责人 + 职衔 + 从业年限（**需你提供真实信息**） |
| 第 1 步 Sampling | 未说明采用何种抽样标准 | 若确实执行，可写明「AQL 抽样」「参照 AS6081 等标准」——**须你确认属实**；同行明确引用了 AS6081 |
| 第 3 步 | 未说明检验人员资质 | 若人员持有 IPC / IDEA-STD-1010 等培训证明，可写明 |

### Authoritativeness 权威性
| 位置 | 缺口 | 建议 |
|---|---|---|
| Quality Certifications 卡片 | **指向 About 页，而该页证书仍是 SACOH 名下的证书** | **最高优先级**：替换为亿芯欧名下证书后，直接在 Quality 页列出「认证名称 + 编号 + 签发机构」，并链接证书图 |
| 全页 | 无任何第三方可验证背书 | 合作实验室的**认可资质**（如 CNAS / ISO/IEC 17025）如属实，应明确写出 |
| 全页 | 无行业协会/检测机构名称 | 如为 ERAI 等协会成员，写明（同行列出了 ERAI / IHS / Silicon Expert） |

### Trustworthiness 可信度
| 位置 | 缺口 | 建议 |
|---|---|---|
| 全页 | **无发布日期、无「最近更新」日期** | 增加 `Last reviewed: 2026-10` 类字段，并由配置驱动以便持续更新 |
| The YIXINOU Advantage 数据条（8+ / 10 / 20+ / 5） | 四个数字**无来源、无统计口径、无截止时间** | 加一行小字口径说明（例：「截至 2026 年 10 月，按在售品类计」）；并确保每个数字都能对应到业务事实 |
| 第 4、5 步 | 说「委托合作实验室」，但**未说明如何选择与核验**合作实验室 | 补一句筛选与核验机制（是否现场审核、是否要求出具认可证书） |
| 页面底部 | 无公司主体信息 | 在 closing 区补法定名称 `Shenzhen Yixinou Electronic Co., Ltd.` + 地址 + 邮箱，与 Contact 页一致 |

---

## 四、GEO（生成式引擎优化）建议

1. **自引用链接（已修复）**
   - 位置：`Setting the Standard for Quality` 服务卡
   - 问题：6 张卡中有 2 张指向本页自身 `/quality`，对爬虫与 LLM 无信息增益
   - 修复：`Quality Control Process` → `/quality#quality-process`（并已给流程区块加 `id`）；`Incoming Inspection` → `/all-products`

2. **缺少问答结构**（建议）
   - GEO 偏好「问题式小标题 + 直答段落」。建议在 `Our Quality Process` 前增加 3–5 条 FAQ，例如：
     - *Do you test components in-house?* → 明确区分「自有入货检验」与「合作实验室检测」
     - *Who performs your laboratory testing?* → 说明为第三方合作实验室
     - *What is AQL sampling and do you use it?*
     - *Can you provide an inspection report with my order?*
   - 同步输出 `FAQPage` JSON-LD。

3. **缺少结构化数据**（建议）
   - 现状：`/quality` 仅有站点默认 schema
   - 建议：5 步流程加 `HowTo`（含 5 个 `HowToStep`）；服务项加 `Service` / `OfferCatalog`

4. **`alt` 文本（已修复）**
   - 原先 5 张步骤图 `alt` 均为步骤标题本身（如 `alt="Photography and Review"`），属无效 alt
   - 现改为描述画面内容，例：`Rows of numbered component trays on a bench being photographed from a copy stand, with lot code cards alongside`

5. **内部链接**（建议）
   - 建议在 `/about-us` 与 `/all-products` 增加指向 `/quality` 的正文内链（目前主要靠导航）

---

## 五、对照同行（fusionww.com/quality/process）

| EEAT 要素 | 同行做法 | 本页现状 | 差距 |
|---|---|---|---|
| 具名资质 | `IDEA-ICE-3000 certified inspectors` | 无 | 需你提供 |
| 量化专业度 | `35+ Degreed Engineers` | 无 | 需你提供 |
| 自有系统/术语 | `Scout RMS™` | 已改为中性的「in-house quality management system」 | 可考虑为自有流程命名 |
| 第一手设施 | `5 Quality Control Centers`、`Prosemi test house` | 无（且已明确实验室为第三方） | 可用真实仓库/工位替代 |
| 交付物 | Quality Guide 下载（留资） | 已移除（避免承诺不存在的下载物） | 可提供真实文档后恢复 |
| 流程视频 | 有 | 无 | **建议补，站内有现成素材** |
| 子页面 | Team / Certifications / Testing / Centers 等独立页 | 无 | 可后续拆分 |
| 数据可核验 | 数据绑定自有系统与术语 | 数据无口径 | 需补口径说明 |

---

## 六、本次已执行的改动

**图片替换（7 张，全部新生成、无版权风险、无商标）**
`quality-banner.jpg` · `quality-open-market-inspection.jpg` · `quality-step-1-photography.jpg` · `quality-step-2-barcode.jpg` · `quality-step-3-visual.jpg` · `quality-step-4-laboratory.jpg` · `quality-step-5-electrical.jpg`
→ 均压缩为 JPEG（98–200 KB），位于 `public/assets/images/`

**代码改动**
- `src/content.js`：QUALITY 全部图片路径更新；为 openMarket 与 5 个步骤新增 `alt` 字段；服务卡链接去自引用
- `src/pages/Quality.jsx`：步骤面板改为全部常驻 DOM（`hidden` 控制显隐）；`alt` 改用新字段；流程区块加 `id="quality-process"`
- `src/styles.css`：新增 `.quality-step-panel[hidden] { display: none; }`
- `public/site-config.json`：同步 QUALITY 数据

**验证结果**
- 7 张新图全部 HTTP 200、无破图；DOM 中已无任何旧文件名引用（`about-sidebanner.png` / `news-ic-testing.jpg` / `factory-warehouse.jpg` / `factory-storage.jpg` / `factory-smt.jpg` / `news-pcb.jpg` 匹配数均为 0）
- 5 个步骤面板全部进入 DOM，任意时刻可见 1 个，切换正常
- 1440 宽无横向溢出；控制台 0 报错；`npm run build` 通过
- 第三方实验室表述保持不变（`in-house lab` = 0，全部实验室表述指向 partner laboratories）

---

## 七、待你决策 / 提供的事项

| 优先级 | 事项 | 需要的输入 |
|---|---|---|
| 🔴 最高 | 替换 SACOH 证书为亿芯欧名下证书（`/about-us` 与本页 Certifications 卡片共同受影响） | 4 张证书图片 |
| 🔴 高 | 5 张流程示意图是否改为真实拍摄照片 / 是否加「示意图」标注 | 你的决定 |
| 🟠 中 | 补具名质检负责人、抽样标准、人员资质 | 真实信息 |
| 🟠 中 | 补数据条口径说明与截止时间 | 你的确认 |
| 🟡 低 | 增加 FAQ 区块 + `FAQPage` / `HowTo` 结构化数据 | 确认后我实施 |
| 🟡 低 | 在 Quality 页嵌入站内已有的流程/工厂视频 | 确认后我实施 |
| 🟡 低 | 合作实验室的认可资质（CNAS / ISO-IEC 17025 等）是否可写 | 真实信息 |

---

## 八、第二轮：视频素材扫描与实拍替换

### 扫描范围 —— 今天你发来的全部视频（5 个独立源）

| 文件 | 规格 | 时长 | 内容 |
|---|---|---|---|
| `物料/1.mp4` | 3840×2160 · 59.94fps | 28.3s | ANALOG DEVICES 纸箱与防潮袋（**含第三方品牌 Logo**） |
| `物料/2.mp4` | 1440×1920 | 20.0s | 静态堆箱，可见 AD / TI 等品牌 |
| `物料/3.mp4` | 1080×1440 | 51.9s | ST / NXP 等纸箱、载带与托盘 |
| `开箱/453299565241.mp4` | 1280×720 | 45.0s | 成品剪辑片，**含烧录英文字幕**（且有拼写错误 `sufficient suppliesample supply`） |
| `VideoPlus__czomey-h264-hd.mp4` | 1280×720 | 180.0s | 公司宣传片，**全程带 Alibaba.com + SGS 水印** |

扫描方式：每个视频按 1–3 秒间隔抽帧生成带时间码缩略图总览逐张目视筛查，对可疑片段再以 1 秒密度抽帧复核。

### 扫描结论

**找到真实现场质检画面（唯一 1 处）**

- `company.mp4`（由 VideoPlus 剪辑、已去 Alibaba 片段）**t = 50–62s**
- 画面：质检人员坐在工位，双手操作**数码显微检测仪**，把料件放在防静电垫的白色托盘上；旁边显示器**实时显示芯片表面的放大画面**。
- 这是全部视频中唯一的真实现场质检素材。

**未找到素材的画面**

- 无「清点 / 逐颗拍照 / 贴批号」画面 → 第 1 步无法用实拍替换
- 无任何「条码扫描」动作画面 → 第 2 步无法用实拍替换
- 无自有实验室画面（本就应为第三方）→ 第 4、5 步保持通用实验室图

### 已执行的替换（2 处，均为真实拍摄）

| 位置 | 替换前 | 替换后 | 取帧 |
|---|---|---|---|
| Quality Control for the Open Market 配图 | AI 示意图 | **实拍**：质检人员操作数码显微检测仪、屏幕显示放大料件（930×640） | `company.mp4` t=53s |
| 第 3 步 Visual Inspection | AI 示意图 | **实拍**：双手在防静电垫上把料件移入检测镜头，显示器显示放大表面（853×640） | `company.mp4` t=54s |

两图的 `alt` 已同步改写为真实画面描述。

### ⚠️ 三个限制（须告知）

1. **分辨率**：源视频仅 1280×640，裁切后为 930×640 / 853×640。页面显示约 515px 宽——1× 清晰，2× 视网膜屏会略软。若可提供原始高清素材可显著改善。
2. **同一场景**：两图取自同一段约 10 秒素材。已刻意区分构图（一为广角工位、一为近景操作），但确属同一次拍摄。
3. **画面内设备铭牌**：检测仪头部可见 **AOSVI** 铭牌。真实工作场景照中出现设备铭牌属正常使用，不构成商标滥用；如在意可裁除。

### 顺带发现的问题（同一素材链，建议一并处理）

**`company.mp4`（About us 页现用视频）仍残留烧录字幕**：t≈4–8s 有橙底白字 **`PROFESSIONAL …`** 与 **`CONCENTRATION`**。这是上一轮剪切 Alibaba 片段时遗漏的营销字幕，会让 About us 页同样出现「素材不干净」问题。

### AI 配图的最终状态

- **第 1、2 步**仍为 AI 示意图 —— 无对应实拍素材。若能补拍「清点拍照」「条码扫描」各 5–10 秒镜头，可立即替换，这将是 EEAT 上最直接的一次提升。
- **第 4、5 步**仍为 AI 通用实验室图 —— 因文案已明确为**委托第三方实验室**，使用本公司实拍反而与文案冲突，故保持无品牌的通用实验室示意图是正确的做法。
