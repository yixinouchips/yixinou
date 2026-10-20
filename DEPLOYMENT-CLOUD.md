# YIXINOU 云服务器部署包说明

本包是 YIXINOU 的可重建源码部署包，包含 React/Vite 前端、静态资源、内容配置、CMS 前端工作台、CMS 本地发布服务、依赖锁定文件和环境变量示例。

## 1. 包含内容

- `src/`：React 页面、路由、组件、CMS 工作台和多语言内容。
- `public/`：图片、视频、字体、运行时配置、`sitemap.xml`、`robots.txt`、`llms.txt`。
- `admin-server.mjs`：CMS 的本地配置/素材发布辅助服务。
- `package.json`、`package-lock.json`：固定依赖和 npm 安装锁定文件。
- `vite.config.js`、`index.html`：前端构建配置。
- `.env.example`：环境变量名称示例，不包含任何真实值。
- `DATABASE.md`、`ASSETS.md`、`SETUP.md`：数据、资源和项目设置说明。

以下内容已排除：`node_modules/`、`dist/`、`.git/`、`.accio/`、`cdn-assets/`、`_replaced/`、缓存、日志、临时预览文件、环境私密文件和敏感凭据。

## 2. 当前架构和数据库状态

- 前端是 React 18 + Vite 5 静态 SPA。
- 当前公开站点不依赖数据库、Supabase 或 SQL 迁移。
- 产品记录、多语言内容、SEO 配置和站点配置存放在源码及 `public/site-config.json` 中。
- 询盘表单默认通过访客的 `mailto:` 客户端发信，不写入服务器数据库。
- `admin-server.mjs` 是零依赖的本地 CMS 配置和素材服务，不是生产级认证系统。
- CMS 服务必须只监听 `127.0.0.1`，不要直接暴露到公网；公网后台需要额外的反向代理认证、VPN 或堡垒机保护。
- 当前 `adminPin` 为空时，后台工作台会明确显示“未启用”，不会因为空密码而放行。

如果未来需要询盘入库、用户登录、订单、库存或权限管理，应单独设计服务端 API、数据库迁移、认证和访问控制，不能把数据库密码、服务角色密钥或私钥放入 `src/`、`public/` 或 `VITE_*` 环境变量。

## 3. 运行环境要求

推荐 Ubuntu 22.04/24.04 LTS 或同等 Linux 云服务器：

- Node.js 20 LTS 或更高的受支持 LTS 版本
- npm 10 或更高版本
- Nginx 1.22 或更高版本
- 1 GB 以上可用内存；构建时建议 2 GB 以上
- HTTPS 证书（推荐使用 Let's Encrypt / Certbot）
- 域名 DNS 已指向服务器公网 IP

生产静态站点只需要 Nginx；Node.js 仅在服务器需要重新构建前端或运行受保护的 CMS 辅助服务时使用。

## 4. 上传和安装

以下命令在服务器上的解压目录执行：

```bash
cd /var/www/yixinou
cp .env.example .env.local
npm ci
```

不要把本地 `.env`、`.env.local`、访问令牌、数据库密码或云厂商私钥上传到服务器包中。当前版本没有必填的运行时密钥；如果接入第三方询盘服务，应在服务器或云平台的环境变量管理中配置，不要提交到 Git。

## 5. 生产构建

```bash
cd /var/www/yixinou
npm run build
```

成功后生成 `dist/`。将 `dist/` 的全部内容部署到 Nginx 的站点根目录；不要只上传 `index.html`，必须同时上传 `assets/`、`site-config.json`、`sitemap.xml`、`robots.txt`、`llms.txt`、字体、图片和视频资源。

检查构建产物：

```bash
test -f dist/index.html
test -f dist/site-config.json
test -f dist/sitemap.xml
test -f dist/robots.txt
test -f dist/llms.txt
find dist/assets -type f | wc -l
```

## 6. Nginx 静态部署

示例站点配置（将域名和证书路径替换为实际值）：

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yixinouchips.com www.yixinouchips.com;

    root /var/www/yixinou/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location = /sitemap.xml {
        try_files $uri =404;
        add_header Content-Type application/xml;
    }

    location = /robots.txt {
        try_files $uri =404;
    }

    location = /llms.txt {
        try_files $uri =404;
        default_type text/plain;
    }

    location ~* \.(?:css|js|jpg|jpeg|png|gif|webp|svg|ico|woff2?|ttf|mp4)$ {
        try_files $uri =404;
        expires 7d;
        add_header Cache-Control "public, max-age=604800";
    }
}
```

启用配置并检查：

```bash
sudo nginx -t
sudo systemctl reload nginx
```

为 SPA 配置 `try_files` 很重要，否则直接刷新 `/about-us`、`/de/quality` 或产品详情页可能返回 404。真实静态文件不能被回退规则覆盖。

## 7. HTTPS 和域名

1. 将 `yixinouchips.com` 和需要使用的 `www` DNS 记录指向服务器。
2. 先确认 HTTP 站点可访问。
3. 使用 Certbot 或云厂商证书服务签发证书。
4. 将 HTTP 重定向到 HTTPS。
5. 确认规范域名、`sitemap.xml`、`robots.txt` 和 `llms.txt` 使用同一个生产域名。

## 8. CMS 本地服务

CMS 服务只应在服务器本机运行：

```bash
cd /var/www/yixinou
ADMIN_PORT=8787 node admin-server.mjs
```

它提供本地配置和素材接口：

- `GET /admin-api/status`
- `GET /admin-api/media`
- `POST /admin-api/upload`
- `POST /admin-api/config`

不要直接执行以下形式把 CMS 暴露到公网：

```bash
node admin-server.mjs --host 0.0.0.0
```

当前 CMS 服务没有生产级账号系统、CSRF 防护、审计日志和细粒度权限。若必须远程使用 CMS，应至少通过 SSH 隧道、VPN 或带强认证的 Nginx 内网入口访问，并在正式使用前补充服务端认证和授权。

SSH 隧道示例：

```bash
ssh -N -L 8787:127.0.0.1:8787 user@your-server
```

Vite 开发代理只适用于本地开发，不应作为生产反向代理。生产前端由 Nginx 提供静态文件，CMS 辅助服务与前端静态站点分开运行。

## 9. systemd 管理 CMS（可选）

如确实需要让 CMS 辅助服务常驻，可创建 `/etc/systemd/system/yixinou-cms.service`：

```ini
[Unit]
Description=YIXINOU local CMS helper
After=network.target

[Service]
Type=simple
User=www-data
Group=www-data
WorkingDirectory=/var/www/yixinou
Environment=NODE_ENV=production
Environment=ADMIN_PORT=8787
ExecStart=/usr/bin/node /var/www/yixinou/admin-server.mjs
Restart=on-failure
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true

[Install]
WantedBy=multi-user.target
```

启用前确认 `/var/www/yixinou/public/` 对运行用户可写，否则 CMS 无法保存配置和素材：

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now yixinou-cms
sudo systemctl status yixinou-cms
curl --fail http://127.0.0.1:8787/admin-api/status
```

如果只部署公开网站，不需要 CMS 常驻服务，也不需要运行 Node.js 进程。

## 10. 部署验证

```bash
curl -I https://yixinouchips.com/
curl -I https://yixinouchips.com/site-config.json
curl -I https://yixinouchips.com/sitemap.xml
curl -I https://yixinouchips.com/robots.txt
curl -I https://yixinouchips.com/llms.txt
curl -I https://yixinouchips.com/de/
curl -I https://yixinouchips.com/de/about-us
curl -I https://yixinouchips.com/product/H5CGD8MGBDX021N
curl -I https://yixinouchips.com/de/product/H5CGD8MGBDX021N
```

浏览器验收：

- 首页、About、Quality、Industries、Contact、Blogs 可打开。
- 直接刷新语言页和产品详情页不会返回 404。
- 页面图片、字体、视频和 `site-config.json` 正常加载。
- 移动端无横向溢出。
- `/admin` 不作为公开 CMS 入口使用；后台认证未配置时应显示“未启用”。
- `sitemap.xml` 是有效 XML，`llms.txt` 可直接读取，robots 指向正确的 Sitemap。
- HTTP 已重定向到 HTTPS，证书有效且域名一致。

## 11. 备份和回滚

每次更新前备份当前 `dist/` 和 `public/site-config.json`。更新采用新目录原子切换更安全：

```bash
sudo rsync -a --delete dist/ /var/www/yixinou-release-new/
sudo nginx -t
sudo systemctl reload nginx
```

保留上一份发布目录，出现资源或路由问题时把 Nginx root 切回上一份目录并 reload。不要把 `.env.local`、访问令牌、SSH 私钥或数据库凭据放入备份包。
