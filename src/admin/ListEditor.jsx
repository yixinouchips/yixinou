import { useEffect, useState } from 'react';

// ---- basic form field ----
export function Field({ label, value, onChange, type = 'text', rows = 4, placeholder }) {
  return (
    <label className="le-field">
      <span>{label}</span>
      {type === 'textarea' ? (
        <textarea rows={rows} value={value || ''} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <input type={type} value={value || ''} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
      )}
    </label>
  );
}

export function SelectField({ label, value, onChange, options }) {
  return (
    <label className="le-field">
      <span>{label}</span>
      <select value={value || ''} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

// ---- image picker modal (media library from the local publish server) ----
export function ImagePicker({ value, onChange, onClose }) {
  const [files, setFiles] = useState(null);
  const [custom, setCustom] = useState(value || '');

  useEffect(() => {
    fetch('/admin-api/media')
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => setFiles(j?.files || []))
      .catch(() => setFiles([]));
  }, []);

  const useUrl = (url) => {
    onChange(url);
    onClose();
  };

  return (
    <div className="ip-modal" onClick={onClose}>
      <div className="ip-panel" onClick={(e) => e.stopPropagation()}>
        <div className="ip-head">
          <b>选择图片素材</b>
          <button type="button" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="ip-custom">
          <input
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="粘贴图片 URL（/assets/images/… 或 https://…）"
          />
          <button type="button" onClick={() => useUrl(custom)}>
            使用
          </button>
        </div>
        <div className="ip-grid">
          {(files || []).map((f) => (
            <button type="button" className="ip-item" key={f.name} onClick={() => useUrl(f.url)}>
              {f.isImage ? <img src={f.url} alt={f.name} loading="lazy" /> : <span>▶</span>}
              <em>{f.name}</em>
            </button>
          ))}
          {!files && <p className="ip-empty">素材加载中…（需启动本地发布服务）</p>}
        </div>
      </div>
    </div>
  );
}

export function ImageField({ label, value, onChange }) {
  const [open, setOpen] = useState(false);
  return (
    <label className="le-field le-image">
      <span>{label}</span>
      <div className="le-image-row">
        {value ? <img src={value} alt="" /> : <span className="le-img-empty">无图</span>}
        <input value={value || ''} onChange={(e) => onChange(e.target.value)} placeholder="/assets/images/…" />
        <button type="button" onClick={() => setOpen(true)}>
          选择
        </button>
      </div>
      {open && <ImagePicker value={value} onChange={onChange} onClose={() => setOpen(false)} />}
    </label>
  );
}

// ---- generic list editor ----
export default function ListEditor({ items, fields, onChange, addLabel = '添加一项', newItem = () => ({}) }) {
  const move = (i, dir) => {
    const arr = [...items];
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    onChange(arr);
  };
  const remove = (i) => onChange(items.filter((_, k) => k !== i));
  const setField = (i, k, v) => onChange(items.map((it, k2) => (k2 === i ? { ...it, [k]: v } : it)));

  return (
    <div className="le-list">
      {items.map((it, i) => (
        <div className="le-row" key={i}>
          <div className="le-row-head">
            <span>#{i + 1}</span>
            <div>
              <button type="button" onClick={() => move(i, -1)} title="上移">
                ↑
              </button>
              <button type="button" onClick={() => move(i, 1)} title="下移">
                ↓
              </button>
              <button type="button" className="danger" onClick={() => remove(i)}>
                删除
              </button>
            </div>
          </div>
          <div className="le-fields">
            {fields.map((f) =>
              f.type === 'image' ? (
                <ImageField key={f.key} label={f.label} value={it[f.key]} onChange={(v) => setField(i, f.key, v)} />
              ) : f.type === 'select' ? (
                <SelectField key={f.key} label={f.label} value={it[f.key]} options={f.options} onChange={(v) => setField(i, f.key, v)} />
              ) : (
                <Field
                  key={f.key}
                  label={f.label}
                  type={f.type}
                  rows={f.rows}
                  value={it[f.key]}
                  onChange={(v) => setField(i, f.key, v)}
                />
              ),
            )}
          </div>
        </div>
      ))}
      <button type="button" className="le-add" onClick={() => onChange([...items, newItem()])}>
        + {addLabel}
      </button>
    </div>
  );
}
