import { Component } from 'react';

// Prevents a runtime error from producing a silent blank page.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('[YIXINOU] render error:', error, info);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;
    return (
      <div className="app-error">
        <h1>页面加载出现问题</h1>
        <p>抱歉，页面渲染时发生错误。请刷新页面重试；如果问题持续，请联系网站管理员。</p>
        <p className="app-error-detail">{String(error && error.message ? error.message : error)}</p>
        <button type="button" onClick={() => window.location.reload()}>
          刷新页面
        </button>
      </div>
    );
  }
}
