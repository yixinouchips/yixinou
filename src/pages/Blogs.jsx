import { Link } from '../router';
import { ChevronRight } from 'lucide-react';
import { useConfig } from '../config';
import { useI18n } from '../i18n';
import { useReveal, useScrollTop } from '../hooks';

export default function Blogs() {
  const { t } = useI18n();
  const { blogs: BLOG_POSTS } = useConfig();
  useScrollTop();
  const listRef = useReveal('fadeInUp', 0.3);

  return (
    <>
      <div className="page-title-band">
        <div className="container">
          <h1>{t('blogs.h1')}</h1>
          <p>{t('blogs.lead')}</p>
        </div>
      </div>
      {/* These two were never routes, so they fell through to the catch-all and
          behaved as 404s. They now point at the blog index like the matching nav
          entries; give them their own pages before treating them as real filters. */}
      <div className="about-menu">
        <ul>
          <li>
            <Link to="/blogs800">{t('blogs.menuIndustry')}</Link>
          </li>
          <li>
            <Link to="/blogs800">{t('blogs.menuCompany')}</Link>
          </li>
        </ul>
      </div>

      <div className="container main">
        <div className="newslist">
          <ul className="row" ref={listRef}>
            {BLOG_POSTS.map((b) => (
              <li key={b.href}>
                <Link aria-label={b.title} className="pic" to={b.href}>
                  <img src={b.img} alt={b.title} loading="lazy" />
                </Link>
                <div className="t">
                  <em>{t('common.manufacture')}</em>
                  <span>{b.date}</span>
                  <h5>
                    <Link aria-label={b.title} to={b.href}>
                      {b.title}
                    </Link>
                  </h5>
                  <p>{b.snippet}</p>
                  <Link aria-label={t('blogs.readMore')} className="more" to={b.href}>
                    {t('blogs.readMore')} <ChevronRight size={14} />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div id="pagesize">
          <ul>
            <li>
              <a href="#top" className="disabled" onClick={(e) => e.preventDefault()}>
                {t('common.prev')}
              </a>
            </li>
            {[1, 2, 3, 4, 5].map((p) => (
              <li key={p}>
                <a href="#top" className={p === 1 ? 'active' : ''} onClick={(e) => e.preventDefault()}>
                  {p}
                </a>
              </li>
            ))}
            <li>
              <a href="#top" onClick={(e) => e.preventDefault()}>
                {t('common.next')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
