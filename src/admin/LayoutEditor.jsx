export default function LayoutEditor({ draft, update }) {
  const sections = draft.layout?.homeSections || [];

  const set = (i, patch) =>
    update((d) => ({
      ...d,
      layout: { ...d.layout, homeSections: d.layout.homeSections.map((s, k) => (k === i ? { ...s, ...patch } : s)) },
    }));

  const move = (i, dir) => {
    const arr = [...sections];
    const j = i + dir;
    if (j < 0 || j >= arr.length) return;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    update((d) => ({ ...d, layout: { ...d.layout, homeSections: arr } }));
  };

  return (
    <div className="admin-layout">
      <p className="ce-desc">
        控制首页各区块的<b>显示 / 隐藏</b>与<b>排列顺序</b>。关闭的区块不渲染；顺序即前台展示顺序。保存后需「发布到站点」生效。
      </p>
      <div className="layout-list">
        {sections.map((s, i) => (
          <div className={`layout-row ${s.enabled ? '' : 'off'}`} key={s.key}>
            <div className="layout-toggle">
              <input
                type="checkbox"
                id={`sec-${s.key}`}
                checked={!!s.enabled}
                onChange={(e) => set(i, { enabled: e.target.checked })}
              />
              <label htmlFor={`sec-${s.key}`}>{s.enabled ? '显示' : '隐藏'}</label>
            </div>
            <div className="layout-name">
              <b>{s.label}</b>
              <code>{s.key}</code>
            </div>
            <div className="layout-actions">
              <button type="button" onClick={() => move(i, -1)} disabled={i === 0}>
                ↑ 上移
              </button>
              <button type="button" onClick={() => move(i, 1)} disabled={i === sections.length - 1}>
                ↓ 下移
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
