import { useEffect, useState } from 'react';

export default function Dashboard({ draft }) {
  const [server, setServer] = useState(null);
  const [serverErr, setServerErr] = useState('');

  useEffect(() => {
    fetch('/admin-api/status')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status))))
      .then((j) => setServer(j))
      .catch((e) => setServerErr(e.message));
  }, []);

  const pages = Object.keys(draft.tdk || {});
  const mediaRefs = new Set(
    JSON.stringify(draft)
      .match(/\/assets\/[^"\\]+/g)
      ?.map((u) => u.split('?')[0]) || [],
  );

  const stats = [
    { label: '网站页面', value: pages.length, sub: pages.join(' · ') },
    { label: '素材引用', value: mediaRefs.size, sub: '图片/视频/图标资产' },
    { label: '首页区块', value: (draft.layout.homeSections || []).length, sub: `${(draft.layout.homeSections || []).filter((s) => s.enabled).length} 个已启用` },
    { label: '产品条目', value: draft.products?.items?.length || 0, sub: 'All products 列表' },
    { label: '博客文章', value: draft.blogs?.length || 0, sub: 'Blogs 列表' },
    { label: '合作伙伴', value: draft.partners?.length || 0, sub: '首页 logo 轮播' },
  ];

  return (
    <div className="admin-dashboard">
      <div className="dash-hero">
        <h2>{draft.site.name} 站点管理</h2>
        <p>
          站点地址：<code>{draft.site.url}</code> · 当前发布版本 v{draft.version}
        </p>
        <div className="dash-tip">
          <b>工作流程：</b>在各模块中编辑内容 → <b>保存草稿</b>（本地暂存，可随时恢复）→{' '}
          <b>发布到站点</b>（写入 site-config.json，前台立即生效，并同步生成 sitemap.xml / robots.txt）。
        </div>
      </div>

      <div className="dash-grid">
        {stats.map((s) => (
          <div className="dash-card" key={s.label}>
            <span className="dash-num">{s.value}</span>
            <span className="dash-label">{s.label}</span>
            <span className="dash-sub">{s.sub}</span>
          </div>
        ))}
      </div>

      <div className="dash-row">
        <div className="dash-panel">
          <h3>发布服务状态</h3>
          {server ? (
            <ul className="dash-list">
              <li>
                配置版本 <b>v{server.version}</b> · 最近发布 <b>{server.lastPublish || '未发布'}</b>
              </li>
              <li>
                素材文件 <b>{server.fileCount}</b> 个（{server.dir}）
              </li>
              <li>
                sitemap：<code>public/sitemap.xml</code>（{server.sitemapUrls} 个 URL）· robots：
                <code>public/robots.txt</code>
              </li>
            </ul>
          ) : (
            <p className="dash-warn">
              {serverErr
                ? `本地发布服务未连接（${serverErr}）。运行 node admin-server.mjs 后，发布功能才会写入文件。`
                : '正在检测发布服务…'}
            </p>
          )}
        </div>
        <div className="dash-panel">
          <h3>快捷入口</h3>
          <div className="dash-links">
            <button type="button" onClick={() => (window.location.hash = '')} disabled>
              ↦ 图片素材 → 管理素材与视频
            </button>
            <span className="dash-note">使用顶部标签页切换功能模块；编辑内容后务必点击「发布到站点」。</span>
          </div>
        </div>
      </div>
    </div>
  );
}
