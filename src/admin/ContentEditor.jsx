import ListEditor, { Field } from './ListEditor';

function Group({ title, desc, children }) {
  return (
    <section className="ce-group">
      <h3>{title}</h3>
      {desc && <p className="ce-desc">{desc}</p>}
      {children}
    </section>
  );
}

export default function ContentEditor({ draft, update }) {
  // string-array helpers (About paragraphs, certificates)
  const stringsToItems = (arr) => arr.map((s) => ({ text: s }));
  const itemsToStrings = (items) => items.map((it) => it.text);

  return (
    <div className="admin-content">
      <Group title="Banner 轮播" desc="首页顶部轮播图：图片 + 标题 + 副文案 + 按钮">
        <ListEditor
          items={draft.banners}
          fields={[
            { key: 'img', label: '背景图', type: 'image' },
            { key: 'title', label: '主标题' },
            { key: 'accent', label: '强调词（可留空）' },
            { key: 'text', label: '副文案', type: 'textarea', rows: 2 },
            { key: 'cta', label: '按钮文字' },
            { key: 'href', label: '链接地址' },
            { key: 'alt', label: 'Alt（SEO）' },
          ]}
          newItem={() => ({ img: '/assets/images/banner-r1-deepnavy.jpg', alt: '', title: '', accent: '', text: '', cta: 'EXPLORE ALL PRODUCTS', href: '/all-products' })}
          addLabel="添加 Banner"
          onChange={(v) => update((d) => ({ ...d, banners: v }))}
        />
      </Group>

      <Group title="优势图标" desc="首页 8 个优势点：图标 + 标题">
        <ListEditor
          items={draft.advantages}
          fields={[
            { key: 'img', label: '图标', type: 'image' },
            { key: 'title', label: '标题' },
            { key: 'alt', label: 'Alt' },
          ]}
          newItem={() => ({ img: '', alt: '', title: '' })}
          addLabel="添加优势"
          onChange={(v) => update((d) => ({ ...d, advantages: v }))}
        />
      </Group>

      <Group title="产品分类" desc="首页产品分类卡片（4 个）">
        <ListEditor
          items={draft.categories}
          fields={[
            { key: 'img', label: '图片', type: 'image' },
            { key: 'label', label: '名称' },
            { key: 'href', label: '链接' },
          ]}
          newItem={() => ({ img: '', label: '', href: '/' })}
          addLabel="添加分类"
          onChange={(v) => update((d) => ({ ...d, categories: v }))}
        />
      </Group>

      <Group title="热门产品" desc="首页 Hot product 列表">
        <ListEditor
          items={draft.hotProducts}
          fields={[
            { key: 'title', label: '产品名', type: 'textarea', rows: 2 },
            { key: 'href', label: '链接' },
            { key: 'img', label: '图片', type: 'image' },
          ]}
          newItem={() => ({ title: '', href: '/', img: '/assets/images/prod-1.jpg' })}
          addLabel="添加产品"
          onChange={(v) => update((d) => ({ ...d, hotProducts: v }))}
        />
      </Group>

      <Group title="应用行业" desc="首页 Industries We Serve 板块">
        <ListEditor
          items={draft.industries || []}
          fields={[
            { key: 'img', label: '配图', type: 'image' },
            { key: 'title', label: '标题' },
            { key: 'desc', label: '描述（列表只显示一行）', type: 'textarea', rows: 3 },
            { key: 'href', label: '链接' },
          ]}
          newItem={() => ({ key: `industry-${Date.now()}`, img: '/assets/images/industry-industrial.jpg', title: '', desc: '', href: '/all-products' })}
          addLabel="添加行业"
          onChange={(v) => update((d) => ({ ...d, industries: v }))}
        />
      </Group>

      <Group title="工厂环境" desc="首页工厂图轮播（4 张）">
        <ListEditor
          items={draft.factory}
          fields={[
            { key: 'img', label: '图片', type: 'image' },
            { key: 'alt', label: 'Alt' },
          ]}
          newItem={() => ({ img: '', alt: '' })}
          addLabel="添加图片"
          onChange={(v) => update((d) => ({ ...d, factory: v }))}
        />
      </Group>

      <Group title="团队成员" desc="首页团队照片（5 人）">
        <ListEditor
          items={draft.team}
          fields={[
            { key: 'img', label: '照片', type: 'image' },
            { key: 'name', label: '姓名' },
          ]}
          newItem={() => ({ img: '', name: '' })}
          addLabel="添加成员"
          onChange={(v) => update((d) => ({ ...d, team: v }))}
        />
      </Group>

      <Group title="新闻资讯" desc="首页新闻区块（1 大 + 3 小）">
        <ListEditor
          items={draft.news}
          fields={[
            { key: 'img', label: '配图', type: 'image' },
            { key: 'title', label: '标题' },
            { key: 'href', label: '链接' },
            { key: 'date', label: '日期' },
            { key: 'snippet', label: '摘要', type: 'textarea', rows: 3 },
          ]}
          newItem={() => ({ img: '', title: '', href: '/', date: '', snippet: '' })}
          addLabel="添加新闻"
          onChange={(v) => update((d) => ({ ...d, news: v }))}
        />
      </Group>

      <Group title="合作伙伴" desc="首页 logo 轮播">
        <ListEditor
          items={draft.partners}
          fields={[
            { key: 'img', label: 'Logo', type: 'image' },
            { key: 'name', label: '品牌名' },
          ]}
          newItem={() => ({ img: '', name: '' })}
          addLabel="添加伙伴"
          onChange={(v) => update((d) => ({ ...d, partners: v }))}
        />
      </Group>

      <Group title="相关搜索关键词" desc="页脚上方 Related Search 链接">
        <ListEditor
          items={draft.relatedKeywords}
          fields={[
            { key: 'label', label: '关键词' },
            { key: 'href', label: '链接' },
          ]}
          newItem={() => ({ label: '', href: '/sadipic/' })}
          addLabel="添加关键词"
          onChange={(v) => update((d) => ({ ...d, relatedKeywords: v }))}
        />
      </Group>

      <Group title="About 页 - 公司介绍" desc="About us 页面介绍段落（每段一条）">
        <ListEditor
          items={stringsToItems(draft.about.text)}
          fields={[{ key: 'text', label: '段落', type: 'textarea', rows: 4 }]}
          newItem={() => ({ text: '' })}
          addLabel="添加段落"
          onChange={(v) => update((d) => ({ ...d, about: { ...d.about, text: itemsToStrings(v) } }))}
        />
      </Group>

      <Group title="About 页 - 公司风采图" desc="About 页 9 图画廊">
        <ListEditor
          items={draft.about.factory}
          fields={[
            { key: 'img', label: '图片', type: 'image' },
            { key: 'alt', label: 'Alt' },
          ]}
          newItem={() => ({ img: '', alt: '' })}
          addLabel="添加图片"
          onChange={(v) => update((d) => ({ ...d, about: { ...d.about, factory: v } }))}
        />
      </Group>

      <Group title="About 页 - 证书" desc="证书轮播（每项一个图片 URL）">
        <ListEditor
          items={stringsToItems(draft.about.certificates)}
          fields={[{ key: 'text', label: '证书图片', type: 'image' }]}
          newItem={() => ({ text: '' })}
          addLabel="添加证书"
          onChange={(v) => update((d) => ({ ...d, about: { ...d.about, certificates: itemsToStrings(v) } }))}
        />
      </Group>

      <Group title="产品页 - 侧边分类" desc="All products 左侧菜单">
        <ListEditor
          items={draft.products.categories}
          fields={[
            { key: 'label', label: '名称' },
            { key: 'href', label: '链接' },
          ]}
          newItem={() => ({ label: '', href: '/' })}
          addLabel="添加分类"
          onChange={(v) => update((d) => ({ ...d, products: { ...d.products, categories: v } }))}
        />
      </Group>

      <Group title="产品页 - 产品列表" desc="All products 产品卡片（12 个示例）">
        <ListEditor
          items={draft.products.items}
          fields={[
            { key: 'name', label: '产品名', type: 'textarea', rows: 2 },
            { key: 'href', label: '链接' },
            { key: 'img', label: '图片', type: 'image' },
          ]}
          newItem={() => ({ name: '', href: '/', img: '/assets/images/prod-1.jpg' })}
          addLabel="添加产品"
          onChange={(v) => update((d) => ({ ...d, products: { ...d.products, items: v } }))}
        />
      </Group>

      <Group title="Blogs 文章列表" desc="博客页 12 篇文章">
        <ListEditor
          items={draft.blogs}
          fields={[
            { key: 'title', label: '标题', type: 'textarea', rows: 2 },
            { key: 'href', label: '链接' },
            { key: 'img', label: '配图', type: 'image' },
            { key: 'date', label: '日期' },
            { key: 'snippet', label: '摘要', type: 'textarea', rows: 3 },
          ]}
          newItem={() => ({ title: '', href: '/', img: '', date: '', snippet: '' })}
          addLabel="添加文章"
          onChange={(v) => update((d) => ({ ...d, blogs: v }))}
        />
      </Group>

      <Group title="联系信息" desc="Contact / About 页显示的联系方式">
        <ListEditor
          items={draft.contact.info}
          fields={[
            { key: 'icon', label: '图标', type: 'select', options: ['building', 'pin', 'phone', 'whatsapp', 'mail', 'wechat'] },
            { key: 'label', label: '标题' },
            { key: 'value', label: '内容' },
            { key: 'href', label: '链接（可留空）' },
          ]}
          newItem={() => ({ icon: 'phone', label: '', value: '', href: '' })}
          addLabel="添加上式条目"
          onChange={(v) => update((d) => ({ ...d, contact: { ...d.contact, info: v } }))}
        />
      </Group>

      <Group title="地图嵌入" desc="Contact 页 Google 地图 iframe 地址">
        <div className="le-fields">
          <Field label="Map Embed URL" value={draft.contact.mapEmbed} onChange={(v) => update((d) => ({ ...d, contact: { ...d.contact, mapEmbed: v } }))} />
        </div>
      </Group>

      <Group title="公司信息与视频" desc="电话、邮箱、WhatsApp、微信、视频与封面">
        <div className="le-fields">
          <Field label="公司法定名称" value={draft.company.legalName} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, legalName: v } }))} />
          <Field label="电话（显示）" value={draft.company.tel} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, tel: v } }))} />
          <Field label="电话（链接 tel:）" value={draft.company.telHref} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, telHref: v } }))} />
          <Field label="WhatsApp 链接" value={draft.company.whatsapp} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, whatsapp: v } }))} />
          <Field label="邮箱（mailto:）" value={draft.company.email} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, email: v } }))} />
           <Field label="首页宣传短片 URL（30 秒 mp4）" value={draft.company.homeVideo} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, homeVideo: v } }))} />
           <Field label="首页短片封面图" value={draft.company.homeVideoPoster} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, homeVideoPoster: v } }))} />
           <Field label="About 页完整视频 URL（mp4）" value={draft.company.video} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, video: v } }))} />
           <Field label="About 页视频封面图" value={draft.company.videoPoster} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, videoPoster: v } }))} />
           <Field label="订阅区背景图" value={draft.company.subscribeBg} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, subscribeBg: v } }))} />
           <Field label="微信二维码图" value={draft.company.qr} onChange={(v) => update((d) => ({ ...d, company: { ...d.company, qr: v } }))} />
           <p className="ce-note">
             首页播放 30 秒宣传短片，About us 页播放完整公司视频，两者可分别替换。
           </p>
        </div>
      </Group>

      <Group title="导航菜单" desc="顶部导航（含子菜单结构的项请保留 href 一致）">
        <ListEditor
          items={draft.nav}
          fields={[
            { key: 'label', label: '名称' },
            { key: 'href', label: '链接' },
          ]}
          newItem={() => ({ label: '', href: '/' })}
          addLabel="添加导航项"
          onChange={(v) => update((d) => ({ ...d, nav: v }))}
        />
      </Group>
    </div>
  );
}
