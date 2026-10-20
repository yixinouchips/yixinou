# 三个副 Banner：营销文案与视觉方案

对应页面：`/about-us`、`/industries`、`/all-products`
预览图：[sub-banner-proposal.jpg](sub-banner-proposal.jpg)

---

## 0. 总原则

1. **一个 banner 只讲一件事，只指向一个动作。** 文案分三层：主张（H1）→ 证据（副标）→ 动作（CTA）。
2. **所有 CTA 统一指向 `/Contact`**（站内已有「Get a Free Quote」表单），把三个高流量入口都变成询盘入口。
3. **背景一律换成你自己的实拍**，不用现在的图库楼宇照 —— About 与 Industries 现在用的是同一张通用写字楼外景，它既不是亿芯欧的楼，也没有传递任何信息。
4. **文案必须是 HTML 文本，不要烧进图片。** 烧进图片的关键词搜索引擎读不到、无法机翻、屏幕阅读器也读不出；这也是下面「实施范围」里要改 `PageBanner` 的原因。

---

## 1. `/about-us` —— 建立可信度

**访客此刻的心理**：这家公司是真的吗？值得托付吗？

**现状问题**：背景是通用写字楼外景（非本公司），标题只有 `About us` 两个词，整块 banner 零信息量。

| 层级 | 文案 |
|---|---|
| **H1**（主张，兼核心关键词） | Eight years sourcing electronic components from Shenzhen |
| **副标**（证据） | Shenzhen Yixinou Electronic Co., Ltd. supplies ICs, transistors, connectors, capacitors and modules to customers on five continents — every order inspected before it ships. |
| **CTA** | Talk to our team → `/Contact` |
| **信任条** | Incoming inspection on every order · Laboratory testing through our partner laboratories |

**为什么这样写**

- 把 H1 从 `About us` 换成一整句实义句，一次装进 `electronic components` 与 `Shenzhen` 两个核心词 —— banner 是全页权重最高的文本位，不该浪费在无信息量的页名上。
- 副标一句话交代**法定主体 + 品类 + 市场范围 + 质检承诺**四件事，30 词内给完信任证据。
- 信任条主动写明「委托第三方实验室」。同行回避这一点，我们写明反而是差异化优势 —— 买家最怕的就是不知道谁在检测自己的料。
- CTA 用 `Talk to our team`（而非 `Contact us`）—— 语气更像对话邀约，降低首次接触的心理门槛。

**视觉**

- 背景：`yixinou-shenzhen-office-entrance.jpg`（你的办公室入口「亿芯欧」六边形品牌墙实拍）
- 处理：按 3.43:1 横裁，冷色藏青调（左侧明度 40% → 右侧 84%），叠加现有的 `.page-banner-mask`
- 布局：文案左对齐占左侧约 46%，CTA 用全站同款胶囊（白底藏青字 + 红色圆箭头）

---

## 2. `/industries` —— 让买家对号入座

**访客此刻的心理**：你们懂我这个行业吗？

| 层级 | 文案 |
|---|---|
| **H1** | One components supplier for twelve industries |
| **副标** | Aerospace to automotive, healthcare to telecom — we source the parts your sector runs on, verify them on arrival, and quote against your bill of materials. |
| **CTA** | Ask about your industry → `/Contact` |
| **信任条** | 12 industries · 10 product categories · Customers on five continents |

**为什么这样写**

- `twelve` 是**具体数字**，比 `many industries` / `a wide range of industries` 可信得多，也与页面下方正好 12 个行业一一对应。
- 副标点名航空、汽车、医疗、电信四个行业 —— 这四个是页面上转化价值最高的板块，点出来让对应买家立刻觉得「说的就是我」。
- CTA 用 `Ask about your industry` 而不是 `Learn more`：**提问就是询盘的第一步**，措辞本身就在引导动作。
- 信任条用三个数字替代形容词，与前两页形成统一的「数字说话」语言。

**视觉**：背景 `gallery-05.jpg`（SMT 产线实拍），冷调与 About 一致，保持三张一套的观感。

---

## 3. `/all-products` —— 推动整单询盘

**访客此刻的心理**：我要的料你能不能一次配齐？报价快不快？

| 层级 | 文案 |
|---|---|
| **H1** | ICs, transistors, connectors, capacitors and more |
| **副标** | Send us your bill of materials and we quote the whole line — not one part at a time. Incoming inspection is included on every order. |
| **CTA** | Get a Free Quote → `/Contact` |
| **信任条** | BOM and one-stop orders · Line-down sourcing · Export to five continents |

**为什么这样写**

- H1 直接铺品类词，与页面正文的分类标题一一对应 —— 图片搜索与长尾词双收。
- 副标把**最强卖点（BOM 整单报价）放在第一句**：这一页的访客多半手上有 BOM，这句话直接命中。「not one part at a time」是明确的差异化。
- 第二句补质检，把「便宜快」升级为「便宜快且验过」，避免只打价格战。
- CTA 沿用站内既有的 `Get a Free Quote` 措辞，与 Contact 页表单标题完全一致 → 点击后不会产生「是不是同一个东西」的迟疑。

**视觉**：背景 `gallery-01.jpg`（载带与托盘铺开实拍），明度与另外两张对齐。

---

## 4. 通用规格

| 项 | 建议值 |
|---|---|
| 尺寸 | 1920 × 560（3.43:1），`background-size: cover`，视觉主体靠右 |
| 遮罩 | 沿用现有 `.page-banner-mask`：`linear-gradient(90deg, rgba(0,20,55,.72) 0%, rgba(0,20,55,.3) 60%, rgba(0,20,55,.08) 100%)` |
| H1 | Montserrat Bold。现有 44px / `letter-spacing: 2px` 对长句偏宽，建议 **40px / `letter-spacing: 0.5px`** |
| 副标 | 22px / 行高 1.45 / `#d6e2f4` |
| CTA | 白底藏青字胶囊 + 红色圆箭头（复用全站 `.ind-btn` 样式） |
| 信任条 | 16px，深色半透明胶囊底（`rgba(0,18,48,.72)` + 1px `rgba(90,120,170)` 描边） |
| 移动端 | 副标与信任条隐藏，CTA 变通栏按钮，H1 降至 26px |

---

## 5. 实施范围（3 个文件）

1. `public/assets/images/` — 新增 3 张 banner 底图（已生成，见 `_banners/bg-*.jpg`）
2. `src/PageBanner.jsx` — 增加**可选**的 `sub` / `cta` / `micro` props。不带这些 props 时行为与现在完全一致，因此 `/quality`、`/blogs800`、`/Contact`、`/privacy` 及 12 个行业页不受影响。
3. `src/content.js` — 为这 3 个页面补上对应文案。

---

## 6. SEO / GEO 收益

- 三个 banner 的 H1 从 `About us` / `Industries We Serve` / `ALL PRODUCTS` 这类无信息量词组，换成含核心关键词的实义句。
- 每个 banner 多出约 30 个可索引的正文词。
- 三个页面各新增一个指向 `/Contact` 的入口，缩短询盘路径。
- 背景图全部换成自有实拍 + 描述性文件名（利于图片搜索），同时消除「用图库楼宇冒充自家办公楼」的信任风险。

---

## 7. 素材来源

| Banner | 底图来源 |
|---|---|
| About us | `yixinou-shenzhen-office-entrance.jpg`（办公室入口品牌墙，实拍） |
| Industries | `gallery-05.jpg`（SMT 产线，实拍） |
| All products | `gallery-01.jpg`（载带与托盘铺开，实拍） |

三张全部来自你提供的素材库，无图库素材、无第三方品牌露出。
