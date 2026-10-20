# Database and data status

## Current state

This version of YIXINOU is a static React/Vite website and does not require a database to render the public site.

- No SQL migrations are present.
- No SQLite/database file is present.
- No database dump or backup is included.
- No Supabase client call is used by the public frontend.
- Product records, multilingual page copy, SEO metadata, sitemap inputs, contact details, and runtime configuration are shipped in the source tree and `public/site-config.json`.

## What is included as site data

- 105 published product records in `src/content.js` and `public/site-config.json`.
- Localized product records and TDK for all 105 product pages under the locale directories in `src/locales/parts/`; the exact per-locale coverage is documented in `DEPLOYMENT.md`.
- Site-page copy and TDK for all currently enabled locale trees under `src/locales/` and `src/i18n.jsx`.
- Static images, videos, fonts, QR assets, `robots.txt`, `sitemap.xml`, and `llms.txt` under `public/`.

## Inquiry and admin behavior

The inquiry form currently opens the visitor's email client with a `mailto:` link. It does not write to a database.

The included `admin-server.mjs` is a local file/config/media helper. It writes `public/site-config.json`, `public/sitemap.xml`, and `public/robots.txt` on the local server. It is not a database server and must not be exposed publicly without replacing its client-side PIN check with server-side authentication.

## If a database is added later

Create a separate server-side API and migration set. Keep private database credentials and service-role keys on the server only. Do not put them in `src/`, `public/`, `VITE_*` browser variables, or the generated static bundle.
