# AI-Native 实践笔记

面向 AI-Native，用 Agent 解决真实问题，全栈构建产品，以 832OS 持续交付。

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

`make.js` 会把已发布文章里实际引用的 `os/assets/` 本地资源发布到 `docs/public/assets/os/`，并把 Obsidian 资源嵌入改写成站点可访问路径。PNG/JPEG 图片会在发布副本层转换为 WebP，源图仍保留在 `os/assets/`；公开资源输出是扁平路径 `/assets/os/<文件名>`，不保留 `os` 内部的 `cos/YYYY/MM` 或 `files/` 目录层级。未发布稿和未引用资源不会进入公开站点仓库。

本仓库是公开发布边界，`docs/public/assets/` 里的文件默认视为公开静态资源；资源隐私不再依赖图床或 COS 配置，而依赖进入本仓库前的发布筛选和仓库本身的公开状态。

## 构建

```bash
npm run build
```

## 致谢

本站的设计风格参考了 [https://zed.dev](https://zed.dev)。
