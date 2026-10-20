import { Field } from './ListEditor';

const ROUTE_LABELS = {
  '/': '首页 Home',
  '/about-us': 'About us 关于我们',
  '/all-products': 'All products 全部产品',
  '/industries': 'Industries 应用行业',
  '/product/H5CGD8MGBDX021N': 'Product / H5CGD8MGBDX021N 料号详情',
  '/industries/aerospace': 'Industries / Aerospace 航空',
  '/industries/automotive': 'Industries / Automotive 汽车',
  '/quality': 'Quality 品质保证',
  '/blogs800': 'Blogs 博客',
  '/Contact': 'Contact us 联系我们',
  '/privacy': 'Privacy Policy 隐私政策',
};

export default function TdkEditor({ draft, update }) {
  const routes = Object.keys(draft.tdk || {});
  const setTdk = (route, k, v) =>
    update((d) => ({ ...d, tdk: { ...d.tdk, [route]: { ...d.tdk[route], [k]: v } } }));

  return (
    <div className="admin-tdk">
      <p className="ce-desc">
        Title（≤60 字符）、Description（≤160 字符）、Keywords 为每个页面的搜索引擎元信息。下方为 Google 搜索结果预览。
      </p>
      {routes.map((route) => {
        const t = draft.tdk[route];
        return (
          <div className="tdk-card" key={route}>
            <h3>{ROUTE_LABELS[route] || route}</h3>
            <div className="le-fields">
              <Field label="Title" value={t.title} onChange={(v) => setTdk(route, 'title', v)} />
              <Field label="Description" type="textarea" rows={3} value={t.description} onChange={(v) => setTdk(route, 'description', v)} />
              <Field label="Keywords（逗号分隔）" type="textarea" rows={2} value={t.keywords} onChange={(v) => setTdk(route, 'keywords', v)} />
            </div>
            <div className="serp-preview">
              <div className="serp-title">{t.title || '（未填写 Title）'}</div>
              <div className="serp-url">
                {draft.site.url}
                {route}
              </div>
              <div className="serp-desc">{t.description || '（未填写 Description）'}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
