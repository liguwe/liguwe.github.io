# AI 实践笔记

少一点旁观，多一点动手

在线地址：

- [https://liguwe.site](https://liguwe.site)

这是一个基于 VitePress 的个人站点，内容以 Obsidian 为源，生成后发布到站点中。

## 本地开发

```bash
npm install
npm run dev
```

默认会先执行 `node make.js`，再启动 VitePress 开发服务。

## 内容生成

```bash
npm run make
```

`make.js` 会从 Obsidian 仓库中解析 Markdown，生成：

- `docs/blog/*.md`
- `docs/.vitepress/theme/posts.json`
- `docs/public/assets/os/*`

默认源目录是仓库上一级的 `../os`，也可以通过环境变量 `OBSIDIAN_ROOT` 指定。

`make.js` 会把已发布文章里实际引用的 `os/assets/` 本地资源复制到 `docs/public/assets/os/`，并把 Obsidian 资源嵌入改写成站点可访问路径。未发布稿和未引用资源不会进入公开站点仓库。

## 构建

```bash
npm run build
```

## 致谢

本站的设计风格参考了 [https://zed.dev](https://zed.dev)。
