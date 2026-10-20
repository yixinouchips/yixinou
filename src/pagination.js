/*
 * Pagination maths for the product listing, kept in its own module so the awkward parts
 * (a URL page number that is missing, non-numeric or out of range, and the gap layout for
 * a long series) can be tested without rendering the page.
 */

export const PER_PAGE = 12;

/** Clamp a requested page into 1..count. Anything unusable becomes page 1. */
export function clampPage(requested, count) {
  const total = Math.max(1, count);
  const n = typeof requested === 'number' ? requested : parseInt(requested || '1', 10);
  if (!Number.isFinite(n)) return 1;
  return Math.min(Math.max(1, Math.trunc(n)), total);
}

export function pageCountFor(totalItems, perPage = PER_PAGE) {
  return Math.max(1, Math.ceil(Math.max(0, totalItems) / perPage));
}

/** Slice one page out of the full result set. */
export function pageSlice(items, page, perPage = PER_PAGE) {
  const start = (clampPage(page, pageCountFor(items.length, perPage)) - 1) * perPage;
  return items.slice(start, start + perPage);
}

/**
 * Page buttons for the pager, with "gap" markers instead of every number, so a
 * 105-part catalogue prints 1 ... 4 5 6 ... 9 rather than nine buttons.
 * Gaps are returned as the strings 'gap-a' / 'gap-b' to be rendered as an ellipsis.
 */
export function pageNumbers(page, count) {
  const total = Math.max(1, count);
  const current = clampPage(page, total);
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  let from;
  let to;
  if (current <= 2) {
    // at the start, show a run from the beginning so the next few pages are one
    // click away instead of forcing the reader through Next
    from = 1;
    to = 3;
  } else if (current >= total - 1) {
    from = total - 2;
    to = total;
  } else {
    from = current - 1;
    to = current + 1;
  }

  const out = [];
  if (from > 1) out.push(1);
  if (from > 2) out.push('gap-a');
  for (let i = from; i <= to; i++) out.push(i);
  if (to < total - 1) out.push('gap-b');
  if (to < total) out.push(total);
  return out;
}

/** Human range for the current page, e.g. { first: 13, last: 24 } for page 2 of 105. */
export function pageRange(totalItems, page, perPage = PER_PAGE) {
  if (totalItems <= 0) return { first: 0, last: 0 };
  const pages = pageCountFor(totalItems, perPage);
  const current = clampPage(page, pages);
  const first = (current - 1) * perPage + 1;
  return { first, last: Math.min(current * perPage, totalItems) };
}
