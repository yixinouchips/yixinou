/*
 * Locale-aware router surface.
 *
 * The translated pages exist at /<locale>/<path>, but the site's internal links are authored as
 * the English path. Left as-is, the header nav, the footer, the product cards and every CTA send
 * a visitor reading German back to the English page — so the translated pages are present but
 * unreachable by browsing, which is the same as not having them.
 *
 * Fixing that at ~40 individual call sites would work once and then rot the next time someone
 * adds a link. Instead this module re-exports react-router-dom with `Link` swapped for one that
 * adds the active locale's prefix; an explicit export shadows the `export *` version, so simply
 * importing `Link` from here is enough.
 *
 * Anything that must NOT be localized (the admin panel, which lives outside the locale prefix)
 * should keep importing from 'react-router-dom'.
 */
import { forwardRef } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { localeOfPath } from './content.js';
import { localeHref } from './localeHref.js';

const LocaleLink = forwardRef(function LocaleLink({ to, ...rest }, ref) {
  const { pathname } = useLocation();
  return <RouterLink ref={ref} to={localeHref(to, localeOfPath(pathname))} {...rest} />;
});

export default LocaleLink;
export { LocaleLink as Link };
export * from 'react-router-dom';
