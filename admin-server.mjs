// YIXINOU local publish server (zero-dependency).
// Serves the admin workbench APIs:
//   GET  /admin-api/status   -> config version / last publish / media stats
//   GET  /admin-api/media    -> list public/assets/images files
//   POST /admin-api/upload   -> save a file (raw body + X-Filename header)
//   POST /admin-api/config   -> write site-config.json + generate sitemap.xml & robots.txt
// Run:  node admin-server.mjs   (port 8787)
import { createServer } from 'node:http';
import { readFileSync, writeFileSync, readdirSync, statSync, mkdirSync, existsSync } from 'node:fs';
import { join, extname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('./', import.meta.url));
const PUBLIC = join(ROOT, 'public');
const CONFIG_PATH = join(PUBLIC, 'site-config.json');
const MEDIA_DIR = join(PUBLIC, 'assets', 'images');
const SITEMAP_PATH = join(PUBLIC, 'sitemap.xml');
const ROBOTS_PATH = join(PUBLIC, 'robots.txt');
const PORT = Number(process.env.ADMIN_PORT || 8787);

const IMG_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.ico', '.avif']);
const MIME = { '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.gif': 'image/gif', '.svg': 'image/svg+xml' };

function json(res, code, data) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, X-Filename' });
  res.end(JSON.stringify(data));
}

function readConfig() {
  try {
    return JSON.parse(readFileSync(CONFIG_PATH, 'utf-8'));
  } catch {
    return null;
  }
}

function buildSitemap(cfg) {
  const siteUrl = (cfg.site.url || 'https://www.yixinou.com').replace(/\/$/, '');
  const urls = Object.keys(cfg.tdk || {}).map((p) => siteUrl + p);
  (cfg.products?.items || []).forEach((p) => urls.push(siteUrl + p.href));
  (cfg.blogs || []).forEach((b) => urls.push(siteUrl + b.href));
  const items = [...new Set(urls)].map((u) => `  <url>\n    <loc>${u}</loc>\n  </url>`).join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</urlset>\n`;
}

function buildRobots(cfg) {
  const siteUrl = (cfg.site.url || 'https://www.yixinou.com').replace(/\/$/, '');
  return `User-agent: *\nAllow: /\nDisallow: /admin\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
}

function listMedia() {
  if (!existsSync(MEDIA_DIR)) return [];
  return readdirSync(MEDIA_DIR)
    .filter((f) => !f.startsWith('.'))
    .map((f) => {
      const p = join(MEDIA_DIR, f);
      const st = statSync(p);
      const ext = extname(f).toLowerCase();
      return {
        name: f,
        url: `/assets/images/${f}`,
        sizeKB: Math.max(1, Math.round(st.size / 1024)),
        isImage: IMG_EXT.has(ext),
        mime: MIME[ext] || 'application/octet-stream',
      };
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

const server = createServer(async (req, res) => {
  const url = (req.url || '').split('?')[0];
  if (req.method === 'OPTIONS') {
    res.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, X-Filename' });
    return res.end();
  }

  try {
    if (url === '/admin-api/status' && req.method === 'GET') {
      const cfg = readConfig();
      const files = listMedia();
      const sitemap = existsSync(SITEMAP_PATH) ? readFileSync(SITEMAP_PATH, 'utf-8') : '';
      return json(res, 200, {
        ok: true,
        version: cfg?.version ?? null,
        lastPublish: cfg?.meta?.lastPublish || null,
        fileCount: files.length,
        dir: 'public/assets/images',
        sitemapUrls: (sitemap.match(/<loc>/g) || []).length,
      });
    }

    if (url === '/admin-api/media' && req.method === 'GET') {
      return json(res, 200, { ok: true, files: listMedia() });
    }

    if (url === '/admin-api/upload' && req.method === 'POST') {
      const filename = decodeURIComponent(req.headers['x-filename'] || '');
      if (!filename || /[\\/]/.test(filename)) return json(res, 400, { error: 'invalid filename' });
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      const buf = Buffer.concat(chunks);
      if (buf.length === 0) return json(res, 400, { error: 'empty body' });
      mkdirSync(MEDIA_DIR, { recursive: true });
      writeFileSync(join(MEDIA_DIR, basename(filename)), buf);
      return json(res, 200, { ok: true, url: `/assets/images/${basename(filename)}`, sizeKB: Math.round(buf.length / 1024) });
    }

    if (url === '/admin-api/config' && req.method === 'POST') {
      const chunks = [];
      for await (const chunk of req) chunks.push(chunk);
      let cfg;
      try {
        cfg = JSON.parse(Buffer.concat(chunks).toString('utf-8'));
      } catch {
        return json(res, 400, { error: 'invalid JSON body' });
      }
      if (!cfg || !cfg.site || !cfg.company) return json(res, 400, { error: 'missing required fields (site / company)' });
      cfg.meta = { ...(cfg.meta || {}), lastPublish: new Date().toISOString().slice(0, 19).replace('T', ' ') };
      writeFileSync(CONFIG_PATH, JSON.stringify(cfg, null, 2), 'utf-8');
      writeFileSync(SITEMAP_PATH, buildSitemap(cfg), 'utf-8');
      writeFileSync(ROBOTS_PATH, buildRobots(cfg), 'utf-8');
      return json(res, 200, { ok: true, message: 'site-config.json 已更新，sitemap.xml / robots.txt 已生成', lastPublish: cfg.meta.lastPublish });
    }

    return json(res, 404, { error: 'not found' });
  } catch (e) {
    return json(res, 500, { error: e.message });
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[admin-server] http://127.0.0.1:${PORT} (config: ${CONFIG_PATH})`);
});
