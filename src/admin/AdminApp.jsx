import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useConfig, loadDraft, saveDraft, clearDraft } from '../config';
import Dashboard from './Dashboard';
import MediaLibrary from './MediaLibrary';
import ContentEditor from './ContentEditor';
import TdkEditor from './TdkEditor';
import LayoutEditor from './LayoutEditor';
import SeoPublish from './SeoPublish';
import './admin.css';

const AUTH_KEY = 'yixinou-admin-auth';

const TABS = [
  { key: 'dashboard', label: '概览', icon: '◉' },
  { key: 'media', label: '图片素材', icon: '▣' },
  { key: 'content', label: '文字内容', icon: '☰' },
  { key: 'tdk', label: 'TDK / SEO', icon: '◎' },
  { key: 'layout', label: '排版编辑', icon: '▤' },
  { key: 'publish', label: 'SEO 发布', icon: '↗' },
];

const clone = (d) => (typeof structuredClone === 'function' ? structuredClone(d) : JSON.parse(JSON.stringify(d)));

export default function AdminApp() {
  const config = useConfig();
  const [authed, setAuthed] = useState(() => sessionStorage.getItem(AUTH_KEY) === '1');
  const [tab, setTab] = useState('dashboard');
  const [draft, setDraft] = useState(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (authed && !draft) setDraft(loadDraft() || config);
  }, [authed, config, draft]);

  if (!config.site.adminPin) {
    return <div className="admin-login"><p>后台管理未启用。请在受保护的部署环境中配置后台认证后再使用 CMS。</p></div>;
  }

  if (!authed) {
    return (
      <Login
        pin={config.site.adminPin}
        onOk={() => {
          sessionStorage.setItem(AUTH_KEY, '1');
          setAuthed(true);
        }}
      />
    );
  }
  if (!draft) return <div className="admin-loading">Loading config…</div>;

  const update = (fn) => setDraft((d) => fn(clone(d)));

  const doSave = () => {
    saveDraft(draft);
    setStatus('✓ 草稿已保存到本地（尚未发布，前台不生效）');
  };

  const doPublish = async () => {
    setStatus('发布中…');
    try {
      const r = await fetch('/admin-api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(draft),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok) {
        setStatus(`✓ 发布成功：${j.message || 'site-config.json 已更新，sitemap.xml / robots.txt 已生成，前台刷新即可生效'}`);
        clearDraft();
      } else {
        setStatus(`✗ 发布失败：${j.error || r.status}`);
      }
    } catch (e) {
      setStatus(`✗ 发布失败：${e.message}（本地发布服务未启动？运行 node admin-server.mjs）`);
    }
  };

  const doExport = () => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'site-config.json';
    a.click();
  };

  const current = TABS.find((t) => t.key === tab);

  return (
    <div className="admin">
      <aside className="admin-side">
        <div className="admin-brand">
          YIXINOU<span>管理工作台</span>
        </div>
        <nav>
          {TABS.map((t) => (
            <button key={t.key} className={tab === t.key ? 'active' : ''} onClick={() => setTab(t.key)}>
              <i>{t.icon}</i>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="admin-side-foot">
          <Link to="/">← 返回前台</Link>
          <button
            type="button"
            onClick={() => {
              sessionStorage.removeItem(AUTH_KEY);
              setAuthed(false);
            }}
          >
            退出登录
          </button>
        </div>
      </aside>
      <div className="admin-main">
        <header className="admin-topbar">
          <h1>{current.label}</h1>
          <div className="admin-actions">
            <button type="button" onClick={doSave}>
              保存草稿
            </button>
            <button type="button" onClick={doExport}>
              导出配置
            </button>
            <button type="button" className="primary" onClick={doPublish}>
              发布到站点
            </button>
          </div>
        </header>
        {status && <div className="admin-status">{status}</div>}
        <div className="admin-body">
          {tab === 'dashboard' && <Dashboard draft={draft} />}
          {tab === 'media' && <MediaLibrary draft={draft} update={update} />}
          {tab === 'content' && <ContentEditor draft={draft} update={update} />}
          {tab === 'tdk' && <TdkEditor draft={draft} update={update} />}
          {tab === 'layout' && <LayoutEditor draft={draft} update={update} />}
          {tab === 'publish' && <SeoPublish draft={draft} update={update} onPublish={doPublish} />}
        </div>
      </div>
    </div>
  );
}

function Login({ onOk, pin }) {
  const [val, setVal] = useState('');
  const [err, setErr] = useState('');
  return (
    <div className="admin-login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (val === pin) onOk();
          else setErr('密码错误，请重试');
        }}
      >
        <h1>YIXINOU 管理工作台</h1>
        <p>请输入管理密码进入后台</p>
        <input
          type="password"
          value={val}
          onChange={(e) => setVal(e.target.value)}
          placeholder="Admin PIN"
          autoFocus
        />
        {err && <em className="err">{err}</em>}
        <button type="submit">进入工作台</button>
        <Link to="/">← 返回前台</Link>
      </form>
    </div>
  );
}
