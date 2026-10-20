import { useEffect, useState } from 'react';
import { Field } from './ListEditor';

export default function MediaLibrary({ draft, update }) {
  const [files, setFiles] = useState(null);
  const [msg, setMsg] = useState('');
  const [copied, setCopied] = useState('');

  const refresh = () =>
    fetch('/admin-api/media')
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => setFiles(j?.files || []))
      .catch(() => setFiles([]));

  useEffect(() => {
    refresh();
  }, []);

  const upload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMsg(`上传 ${file.name}…`);
    try {
      const buf = await file.arrayBuffer();
      const r = await fetch('/admin-api/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/octet-stream', 'X-Filename': encodeURIComponent(file.name) },
        body: buf,
      });
      const j = await r.json().catch(() => ({}));
      setMsg(r.ok ? `✓ 已上传：${j.url}` : `✗ 上传失败：${j.error || r.status}`);
      refresh();
    } catch (err) {
      setMsg(`✗ 上传失败：${err.message}（本地发布服务未启动？）`);
    }
    e.target.value = '';
  };

  const copy = (url) => {
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(url);
    setCopied(url);
    setTimeout(() => setCopied(''), 1200);
  };

  return (
    <div className="admin-media">
      <div className="media-bar">
        <h3>
          素材库
          <small>{files ? `${files.length} 个文件（public/assets/images）` : '加载中…'}</small>
        </h3>
        <label className="upload-btn">
          上传图片 / 视频
          <input type="file" accept="image/*,video/*" onChange={upload} />
        </label>
      </div>
      {msg && <div className="admin-status">{msg}</div>}

      <div className="media-grid">
        {(files || []).map((f) => (
          <div className="media-item" key={f.name} onClick={() => copy(f.url)} title="点击复制 URL">
            {f.isImage ? <img src={f.url} alt={f.name} loading="lazy" /> : <div className="media-video">▶</div>}
            <span>{f.name}</span>
            <em>{f.sizeKB} KB</em>
            {copied === f.url && <b className="copied">✓ 已复制</b>}
          </div>
        ))}
        {files && files.length === 0 && <p className="media-empty">暂无文件（发布服务未启动或目录为空）</p>}
      </div>

      <div className="media-video-block">
        <h3>视频管理</h3>
        <div className="le-fields">
          <Field
            label="首页宣传短片（30 秒 mp4 URL）"
            value={draft.company.homeVideo}
            onChange={(v) => update((d) => ({ ...d, company: { ...d.company, homeVideo: v } }))}
          />
          <Field
            label="首页短片封面图"
            value={draft.company.homeVideoPoster}
            onChange={(v) => update((d) => ({ ...d, company: { ...d.company, homeVideoPoster: v } }))}
          />
          <Field
            label="About 页完整视频（mp4 URL）"
            value={draft.company.video}
            onChange={(v) => update((d) => ({ ...d, company: { ...d.company, video: v } }))}
          />
          <Field
            label="About 页视频封面图"
            value={draft.company.videoPoster}
            onChange={(v) => update((d) => ({ ...d, company: { ...d.company, videoPoster: v } }))}
          />
        </div>
        <p className="ce-note">
          首页播放 30 秒宣传短片，About us 页播放完整公司视频，两者可分别设置。
        </p>
      </div>
    </div>
  );
}
