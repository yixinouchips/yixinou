import { Link } from './router';
import { useConfig } from './config';
import { useMediaQuery, useReveal } from './hooks';

// "Industries We Serve" — layout follows the reference section,
// colours use this site's own brand palette.
export default function Industries() {
  const { industries } = useConfig();
  const isLg = useMediaQuery('(min-width: 992px)');
  const isSm = useMediaQuery('(min-width: 576px)');
  const perView = isLg ? 4 : isSm ? 2 : 1;
  const headRef = useReveal('fadeInUp', 0);
  const gridRef = useReveal('fadeInUp', 0.2);

  const items = industries || [];
  const rows = [];
  for (let i = 0; i < items.length; i += perView) {
    rows.push(items.slice(i, i + perView));
  }

  return (
    <section className="industries-serve">
      <div className="container">
        <div className="is-head text-center" ref={headRef}>
          <h2>Industries We Serve</h2>
          <h3>Industries</h3>
          <span className="is-underline" />
        </div>
        <div ref={gridRef}>
          {rows.map((row, r) => (
            <ul className="row is-row" key={row[0]?.key || r}>
              {row.map((it) => (
                <li className="col-sm-6 col-lg-3" key={it.key}>
                  <div className="box">
                    <Link className="pic" to={it.href} aria-label={it.title}>
                      <img src={it.img} alt={it.title} loading="lazy" />
                    </Link>
                    <h3 className="is-name">
                      <Link to={it.href}>{it.title}</Link>
                    </h3>
                    <p className="is-brief">{it.desc}</p>
                    <Link className="is-explore" to={it.href}>
                      Explore {it.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
