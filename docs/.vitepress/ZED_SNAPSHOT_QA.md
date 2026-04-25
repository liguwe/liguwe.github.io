# Zed 快照对齐验收说明

对照仓库根目录 `zed-blog.html`、`zed-detail.html`（SingleFile）与 `npm run dev` 本地页面时的差异记录。

## 已对齐

- 顶栏：粘性、`h-[57px]`、`outer-section-node-offset`、双侧轨、Zed SVG Logo、Product/Resources 悬停下拉、搜索（Lucide + ⌘K 热键）、主题循环、Download 主按钮、移动端缩放主框 + 侧滑菜单。
- 首页：居中 `hgroup` + `font-plex-serif` 标题色、精选卡片边框/阴影/hover pattern、分类侧栏式列表（移动端横向滚动）、文章行 hover 对角线 pattern 与 Featured 标签样式。
- 详情：蓝色衬线大标题、作者区链接、首屏对角线遮罩、正文 `zed-article` + VitePress 默认代码高亮主题。
- 页脚：`bg-accent-blue` 与浅色文字、分隔线与链接样式。
- 字体：Inter Variable、IBM Plex Serif / Mono（开源替代快照内嵌 Writer / zedMono）。
- TOC：`page.headers` 扁平化（h2–h3）+ `IntersectionObserver` 当前节高亮。

## 已知差异 / 非目标

- 精选卡片无官网级配图与 `next/image` 占位，仅用 pattern 底纹。
- 未接入 Zed 真实外链（Extensions/Docs/Pricing 等仍为占位 `href`）。
- 商标：Logo 路径来自快照，公开部署前请替换为自有品牌（见计划合规说明）。
- 局部轨线「分段竖线」高度比例为简化实现，未逐像素对齐 SingleFile 内联 `flex:` 小数。

## 建议自测

- 断点：`sm` / `lg` 下顶栏、分类列表、双栏正文与 TOC 显隐。
- 主题：`system` → `light` → `dark` 循环与 `localStorage.theme`。
- 文章页：含多级 `##` / `###` 时 TOC 与滚动高亮。
