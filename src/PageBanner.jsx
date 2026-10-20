import { ChevronRight, Home } from 'lucide-react';
import { Link } from './router';
import { useI18n } from './i18n';

/**
 * Page banner.
 *
 * `sub`, `cta` and `micro` are optional marketing layers: pages that only need
 * a title keep the original banner exactly as before, so adding copy here does
 * not change any other page.
 *   sub   — one supporting sentence shown under the <h1>
 *   cta   — { label, href } rendered as the site's pill button
 *   micro — short trust line rendered as a small chip
 */
export default function PageBanner({ img, title, crumb, sub, cta, micro }) {
  const { t } = useI18n();
  // crumb accepts a single { href, label } or an array for deeper pages
  const trail = Array.isArray(crumb) ? crumb : crumb ? [crumb] : [];
  const hasCopy = Boolean(sub || cta || micro);

  return (
    <div className={`page-banner${hasCopy ? ' page-banner-rich' : ''}`} style={{ backgroundImage: `url(${img})` }}>
      <div className="page-banner-mask" />
      <div className="container page-banner-txt">
        <h1>{title}</h1>
        {sub && <p className="page-banner-sub">{sub}</p>}
        {cta && (
          <Link className="page-banner-cta" to={cta.href}>
            {cta.label}
            <span className="page-banner-cta-arrow" aria-hidden="true">
              <ChevronRight size={18} strokeWidth={3} />
            </span>
          </Link>
        )}
        {micro && <p className="page-banner-micro">{micro}</p>}
        {trail.length > 0 && (
          <p className="breadcrumb">
            <Home size={14} /> <Link to="/">{t('nav.home')}</Link>
            {trail.map((c) => (
              <span key={c.href}>
                {' > '}
                <Link to={c.href}>{c.label}</Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
}
