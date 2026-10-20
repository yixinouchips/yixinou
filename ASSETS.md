# Static assets (canonical location)

This file documents the `public/assets/` directory convention for this project.

All local images, videos, and fonts referenced by runtime code MUST live under
`public/assets/`. Vite copies everything in `public/` verbatim into the
production bundle root, so these files survive `build` + publish.

## Layout

```
public/assets/
├── images/          # all site images (hero, logo, products, avatars, ...)
│   └── placeholder.svg
├── videos/          # local video files (optional)
└── fonts/           # self-hosted fonts (optional)
```

## Reference rule (single canonical form)

Always reference assets with a **root-absolute URL path** — leading slash, no
`public/` prefix:

```jsx
<img src="/assets/images/brand-logo.png" alt="Logo" />
```

```css
.hero { background-image: url('/assets/images/hero-banner.jpg'); }
```

## Never do

- `src="assets/images/x.png"` — relative path; breaks on nested routes and CDN sub-paths
- `src="public/assets/images/x.png"` — `public/` is not part of the served URL
- `src="../assets/x.png"` / `./assets/x.png` — same relative-path breakage
- placing images in `<project>/assets/` or `src/assets/` — not copied into `dist/`
  (unless explicitly `import`-ed, which this project convention does not use)

## Replacing an image? Rename it

Files under `public/` are served without content hashes, so CDN edges and
browsers cache them by URL. Overwriting a file with new content under the
**same name** can keep serving the stale image until caches expire.

When replacing an existing image, save it under a **new filename** (e.g.
`brand-logo-v2.png` or a short content hash suffix) and update the single
code reference. Never overwrite an existing file in place with different
content.

## Image manifest — Industries we serve (home page)

Generated for the `Industries We Serve / 应用行业` section, consumed by
`INDUSTRIES` in `src/content.js` and the `industries` key in
`public/site-config.json`.

| File | Subject | Reference |
| --- | --- | --- |
| `/assets/images/industry-industrial.jpg` | Industrial Electronics — robotic arm + control cabinet | `industries[0].img` |
| `/assets/images/industry-medical.jpg` | Medical Devices — patient monitor | `industries[1].img` |
| `/assets/images/industry-marine.jpg` | Marine — vessel bridge electronics | `industries[2].img` |
| `/assets/images/industry-battery.jpg` | Battery/Charge — battery pack + charger PCB | `industries[3].img` |
| `/assets/images/industry-aerospace.jpg` | Aerospace/Aviation — aircraft + avionics bay | `industries[4].img` |
| `/assets/images/industry-renewable.jpg` | Renewable Energy — solar farm + wind turbines | `industries[5].img` |
| `/assets/images/industry-automotive.jpg` | Automotive — dashboard + ECUs | `industries[6].img` |
| `/assets/images/industry-consumer.jpg` | Consumer Electronics — device flat lay | `industries[7].img` |

All eight are original AI-generated images (no third-party brand marks); the
industrial scene was regenerated to remove visible equipment branding.

## Image manifest — client photo pack (独立站.zip)

Supplied by the client and re-encoded for the web (aspect-matched to the
sections they replace, JPEG q86–90). Consumed through `public/site-config.json`
and mirrored in `src/content.js` defaults.

| File | Source in pack | Used by |
| --- | --- | --- |
| `/assets/images/banner-r1.jpg` … `banner-r3.jpg` | `4.png`, `轮播2.png`, `轮播4.png` | home banner carousel (1920×860) |
| `/assets/images/logo-horizontal.png` | `亿芯欧水印/亿芯欧-03.png` mark + wordmark composed | header logo, og:image, JSON-LD (657×220) |
| `/assets/images/logo-horizontal-white.png` | `亿芯欧水印/亿芯欧-04.png` mark + wordmark composed | footer logo (dark background) |
| `/assets/images/favicon.png` | `亿芯欧水印/亿芯欧-03.png` mark only | browser favicon (square, 128×128) |

Logo colours follow the site palette: the mark and wordmark are recoloured to
`--color-primary` #002A6C (header) and white (footer), with the tagline in a
muted grey — instead of the pack's original light blue.
| `/assets/images/team-linda.jpg` … `team-lisa.jpg` | `业务头像/LINDA.jpg`, `Lucy.jpg`, `jeiise.jpg`, `joon.jpg`, `lisa.jpg` | home "Our team members" (names updated to match) |
| `/assets/images/factory-office.jpg` … `factory-storage.jpg` | `办公/`, `仓库/`, `贴片仓/` | home "Factory environment" |
| `/assets/images/gallery-01.jpg` … `gallery-09.jpg` | `物料/3–11` (HEIC → JPEG) | About us "Company Gallery" |

Superseded files (previous banners, headshots, factory shots, AI placeholder
logo) were moved out of `public/` to `superseded-assets/` in the workspace —
they are no longer shipped.

## Video

| File | Source | Notes |
| --- | --- | --- |
| `/assets/videos/materials.mp4` | `物料/1.mp4` | home video section. Re-encoded 4K60 HEVC 226 MB → 720×1280 H.264, CRF 28, 30 fps, faststart — **4.65 MB (-98%)**. Portrait footage, so the player caps height at 620 px and centres it. |
| `/assets/images/materials-poster.jpg` | frame @2 s of the same clip | video `poster` + section background |
| `/assets/videos/about-video.mp4` | original About-page clip | unchanged |

`物料/2.mp4` (1440×1920, 23 MB) and `物料/3.mp4` (1080×1440, 64 MB) remain in
the client pack, uncompressed and unused. `开箱/453299565241.mp4` is byte-for-byte
the same clip as the retired `factory.mp4` (1280×720, 45 s) — it is kept in
`superseded-assets/`.

## Image manifest — certificate SEO replacement (2026-10-19)

The four supplied certificate originals were downloaded, orientation-normalized, converted to WebP quality 92, and stored locally. Certificate content was not edited or redrawn. All locale packs and the published site configuration reference this same local set.

| File | Certificate content | Dimensions | Delivery notes |
| --- | --- | ---: | --- |
| `/assets/images/verpackg-registration-certificate.webp` | German Packaging Act (VerpackG) registration | 1658 x 2339 | WebP, lazy-loaded, descriptive `alt` and `title` |
| `/assets/images/epr-leko-membership-certificate.webp` | EPR household packaging membership from Leko | 638 x 860 | WebP, lazy-loaded, descriptive `alt` and `title` |
| `/assets/images/sgs-verified-supplier-assessment.webp` | Alibaba.com SGS verified supplier assessment | 3173 x 4490 | WebP, lazy-loaded, descriptive `alt` and `title` |
| `/assets/images/yixinou-class-9-trademark-registration.webp` | YIXINOU Class 9 trademark registration | 3173 x 4512 | WebP, lazy-loaded, descriptive `alt` and `title` |

The certificate carousel is rendered on the About Us page for every locale. The same metadata also feeds certificate `ImageObject` JSON-LD. Retired `cert-*` assets are not runtime references.
