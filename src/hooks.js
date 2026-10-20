import { useEffect, useRef, useState, useCallback } from 'react';

// WOW-style scroll reveal via IntersectionObserver.
// usage: const ref = useReveal('fadeInUp', 0.2); -> <div ref={ref} className="wow fadeInUp" style={{animationDelay:...}}>
export function useReveal(animation = 'fadeInUp', delay = 0) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    el.style.animationDelay = `${delay}s`;
    el.classList.add('wow');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('in');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animation, delay]);
  return ref;
}

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  );
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e) => setMatches(e.matches);
    mql.addEventListener('change', onChange);
    setMatches(mql.matches);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

// Generic paginated carousel. perView: slides visible per page.
// Returns page state, navigation, and derived pageCount / dots.
export function useCarousel(items, perView, { autoplay = 0, loop = true } = {}) {
  const pages = Math.max(1, Math.ceil(items.length / perView));
  const [page, setPage] = useState(0);
  const timer = useRef(null);

  const safe = useCallback(
    (p) => ((p % pages) + pages) % pages,
    [pages],
  );

  const next = useCallback(() => {
    setPage((p) => (loop ? safe(p + 1) : Math.min(pages - 1, p + 1)));
  }, [loop, pages, safe]);

  const prev = useCallback(() => {
    setPage((p) => (loop ? safe(p - 1) : Math.max(0, p - 1)));
  }, [loop, safe]);

  useEffect(() => {
    if (!autoplay) return undefined;
    timer.current = setInterval(next, autoplay);
    return () => clearInterval(timer.current);
  }, [autoplay, next, page]);

  // keep page in range when perView changes
  useEffect(() => {
    setPage((p) => Math.min(p, pages - 1));
  }, [pages]);

  return { page, pages, next, prev, setPage: (p) => setPage(safe(p)) };
}

// set document title (+ optional meta description / keywords) per route
export function usePageMeta(title, description, keywords) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let el = document.querySelector('meta[name="description"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', 'description');
        document.head.appendChild(el);
      }
      el.setAttribute('content', description);
    }
    if (keywords) {
      let el = document.querySelector('meta[name="keywords"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', 'keywords');
        document.head.appendChild(el);
      }
      el.setAttribute('content', keywords);
    }
  }, [title, description, keywords]);
}

// Point the route at its canonical URL. Pages that render parameterised states
// (e.g. /all-products?q=ddr5) use this to claim the clean path, so search engines
// consolidate the variants instead of indexing one page per query string.
// Kept separate from usePageMeta on purpose: that hook writes document.title
// unconditionally, so it must never be called with an empty title.
export function useCanonical(href) {
  useEffect(() => {
    if (!href) return;
    let el = document.getElementById('route-canonical');
    if (!el) {
      el = document.createElement('link');
      el.id = 'route-canonical';
      el.setAttribute('rel', 'canonical');
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
  }, [href]);
}

// reset scroll to top when the route changes
export function useScrollTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

// track SPA route changes as analytics pageviews (respects cookie consent)
export function usePageTracking(pathname) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('./analytics').then(({ trackPageview }) => trackPageview(pathname));
    }
  }, [pathname]);
}
