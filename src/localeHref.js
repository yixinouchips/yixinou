import { withLocale } from './content.js';

/*
 * Rewrites an internal link for the active locale.
 *
 * Every link on the site is authored as the English path, because that is what the route table
 * and the published config use. The live URL of a translated page carries a locale prefix, so a
 * link that keeps the bare path sends a visitor reading German straight back to the English page.
 *
 * Kept in a plain module (no JSX) so the rule can be tested directly rather than only through a
 * rendered page.
 */
export function localeHref(to, code) {
  // Anything that is not a root-relative path is somebody else's URL: absolute URLs, protocol
  // links (mailto:, tel:), protocol-relative //host and in-page #anchors.
  if (typeof to !== 'string' || !to.startsWith('/') || /^\/\//.test(to)) return to;
  if (code === null || code === undefined || code === '') return to;

  const cut = to.search(/[?#]/);
  const path = cut === -1 ? to : to.slice(0, cut);
  const tail = cut === -1 ? '' : to.slice(cut);
  return withLocale(path, code) + tail;
}
