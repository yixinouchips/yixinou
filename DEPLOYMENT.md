# YIXINOU deployment guide

This delivery contains the current YIXINOU React/Vite website, all published static assets, the 105 product records, the enabled locale page-copy packs, SEO metadata, sitemap, robots file, and the source configuration needed to rebuild the site.

## Current content coverage

- 105 source product records.
- 14 enabled locale trees in the language selector: English, Traditional Chinese, Arabic, Bulgarian, Croatian, Czech, Danish, Dutch, French, German, Japanese, Korean, Russian, and Spanish.
- 105 localized product records are present for 12 locales: Traditional Chinese, Arabic, Bulgarian, Croatian, Czech, Danish, Dutch, French, German, Japanese, Korean, and Russian.
- Spanish page-level copy is present, but its independent 105-record product translation set is not present in this source snapshot.
- 30 additional locale entries remain disabled in the selector.

## Delivery files

- `yixinou-source-2026-10-08.zip` — source project, dependency lockfile, source content, static assets, admin helper, and this guide. Dependencies are intentionally excluded; install them from `package-lock.json`.
- `yixinou-static-2026-10-08.zip` — production build. Upload the contents of this archive to the public web root of any static host, CDN, Nginx server, Apache server, or object-storage website endpoint.

## Option A: static deployment (recommended)

1. Extract `yixinou-static-2026-10-07.zip`.
2. Upload the extracted files, including `index.html`, `assets/`, `site-config.json`, `sitemap.xml`, `robots.txt`, and all other files, to the web server's document root.
3. Configure SPA fallback so an unknown file-free route serves `index.html` while real files continue to be served normally.
4. Enable HTTPS before exposing the site publicly.

### Nginx fallback example

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Apache fallback example

If Apache is used, enable `mod_rewrite` and place this in the document root `.htaccess`:

```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

Do not rewrite existing files such as `/assets/...`, `/site-config.json`, `/sitemap.xml`, or `/robots.txt` to another path.

## Option B: rebuild from source

Requirements: Node.js and npm. From the extracted source directory:

```bash
npm ci
npm run build
```

The production files are generated in `dist/`. Upload the contents of `dist/` using the static deployment instructions above.

For local development:

```bash
npm run dev
```

## First-level domain binding

The website code does not bind a domain by itself. After the static files are deployed:

1. Add an `A` record for the root domain to the server's public IPv4 address.
2. Add an `AAAA` record only if the server has a working public IPv6 address.
3. Add a `www` record according to the chosen canonical host, normally a `CNAME` to the root domain or an `A` record to the same server.
4. Configure the web server's virtual host for both the root domain and `www` if both should work.
5. Issue an HTTPS certificate and redirect HTTP to HTTPS.
6. Confirm that `/`, `/de/`, `/fr/`, `/es/`, `/ar/`, `/ru/`, `/ja/`, `/ko/`, and `/zh/` all load after DNS propagation.

Use the actual server address supplied by the hosting provider; this package does not contain or assume an IP address.

## Database and server-side services

No database is required by the delivered public website. The project contains no SQL migrations, database dump, SQLite file, or Supabase client call. Product content, multilingual copy, SEO metadata, and site configuration are shipped as source/runtime JSON and JavaScript data.

The inquiry form currently opens the visitor's mail client through `mailto:`. To use a form provider or a server endpoint, set the endpoint in `src/InquiryForm.jsx`, rebuild, and configure the provider separately. Never put a private API key, service-role key, database password, or connection string in `VITE_*` variables or browser code.

`admin-server.mjs` is a zero-dependency local helper for the included admin workbench. It provides local config/media APIs on `127.0.0.1:8787`; it is not a production authentication service and should not be exposed directly to the public Internet. A production admin system should use server-side authentication and authorization before enabling write APIs.

## Admin PIN safety

The delivery copy intentionally replaces the original front-end admin PIN with `CHANGE_ME_BEFORE_DEPLOY`. This is deliberate: a PIN embedded in a browser bundle or public `site-config.json` is visible to every visitor and is not a secure production credential.

If the local admin workbench is used for a private/local deployment, replace the placeholder in both:

- `src/config.jsx`
- `public/site-config.json`

Then rebuild. For a public production deployment, do not treat this client-side PIN as access control; put the admin API behind real server-side authentication or keep the admin route private.

## Included and excluded

Included:

- React/Vite source and all route/page components
- `package.json` and `package-lock.json`
- `public/` runtime configuration, sitemap, robots file, fonts, images, videos, product assets, and QR assets
- All enabled locale UI/page-copy packs and the localized product records present in `src/locales/parts/`; the coverage matrix is listed above
- SEO, JSON-LD, `llms.txt`, and related content files
- Admin helper source and configuration editor source

Excluded intentionally:

- `node_modules/`, build caches, and `dist/` from the source archive
- Accio internal metadata, deployment IDs, connector records, and `.accio/`
- Git metadata
- Temporary scratch scripts, replaced assets, previews, logs, and local workbench artifacts
- Sensitive credentials and the original client-side admin PIN

## Post-deployment checklist

- [ ] `index.html` loads with HTTP 200.
- [ ] `/site-config.json`, `/sitemap.xml`, and `/robots.txt` are reachable.
- [ ] `/`, `/de/`, `/fr/`, `/es/`, `/ar/`, `/ru/`, `/ja/`, `/ko/`, and `/zh/` render without a blank screen.
- [ ] A direct refresh of `/de/about-us` and `/ja/quality` still renders the correct page.
- [ ] Product routes such as `/product/ESP8266EX` and `/de/product/H5CGD8MGBDX021N` render correctly.
- [ ] HTTPS is active and HTTP redirects to HTTPS.
- [ ] The canonical domain and `www` behavior are consistent.
- [ ] The client-side admin PIN is not being used as production security.
