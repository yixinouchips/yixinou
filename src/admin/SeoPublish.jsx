import { Field } from './ListEditor';

function buildJsonLd(draft) {
  const siteUrl = draft.site.url || 'https://yixinouchips.com';
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `${draft.company.name} Electronic Co., Ltd.`,
    alternateName: draft.company.name,
    legalName: draft.company.legalName,
    url: siteUrl,
    logo: `${siteUrl}/assets/images/logo-official.png`,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: (draft.company.tel || '').replace(/[^+\d]/g, ''),
        email: (draft.company.email || '').replace('mailto:', ''),
        contactType: 'sales',
        areaServed: 'Worldwide',
      },
    ],
  };
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${draft.site.name} - Electronic Components Supplier`,
    url: siteUrl,
    inLanguage: 'en',
  };
  return { org, website };
}

function buildSitemap(draft) {
  const siteUrl = (draft.site.url || 'https://yixinouchips.com').replace(/\/$/, '');
  const urls = Object.keys(draft.tdk || {}).map((p) => siteUrl + p);
  draft.products?.items?.forEach((p) => urls.push(siteUrl + p.href));
  draft.blogs?.forEach((b) => urls.push(siteUrl + b.href));
  const items = [...new Set(urls)]
    .map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>`;
}

function buildRobots(draft) {
  const siteUrl = draft.site.url || 'https://yixinouchips.com';
  return `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${siteUrl.replace(/\/$/, '')}/sitemap.xml\n`;
}

export default function SeoPublish({ draft, update, onPublish }) {
  const setSite = (k, v) => update((d) => ({ ...d, site: { ...d.site, [k]: v } }));
  const setSiteSocial = (k, v) =>
    update((d) => ({ ...d, site: { ...d.site, socials: { ...d.site.socials, [k]: v } } }));

  const jsonld = buildJsonLd(draft);
  const sitemap = buildSitemap(draft);
  const robots = buildRobots(draft);
  const urlCount = (sitemap.match(/<loc>/g) || []).length;

  return (
    <div className="admin-seo">
      <div className="seo-site-settings">
        <h3>站点设置</h3>
        <div className="le-fields">
          <Field label="站点名称" value={draft.site.name} onChange={(v) => setSite('name', v)} />
          <Field label="正式域名（https://…）" value={draft.site.url} onChange={(v) => setSite('url', v)} />
          <Field label="Facebook" value={draft.site.socials.facebook} onChange={(v) => setSiteSocial('facebook', v)} />
          <Field label="LinkedIn" value={draft.site.socials.linkedin} onChange={(v) => setSiteSocial('linkedin', v)} />
          <Field label="YouTube" value={draft.site.socials.youtube} onChange={(v) => setSiteSocial('youtube', v)} />
        </div>
      </div>

      <div className="seo-block">
        <h3>结构化数据 JSON-LD（自动注入全站）</h3>
        <pre className="seo-pre">{JSON.stringify(jsonld, null, 2)}</pre>
      </div>

      <div className="seo-block">
        <h3>sitemap.xml（发布时生成 · {urlCount} 个 URL）</h3>
        <pre className="seo-pre">{sitemap}</pre>
      </div>

      <div className="seo-block">
        <h3>robots.txt（发布时生成）</h3>
        <pre className="seo-pre">{robots}</pre>
      </div>

      <div className="seo-publish-bar">
        <p>确认以上内容无误后点击发布：将写入 site-config.json 并生成 sitemap.xml / robots.txt，前台刷新立即生效。</p>
        <button type="button" className="primary big" onClick={onPublish}>
          发布到站点
        </button>
      </div>
    </div>
  );
}
