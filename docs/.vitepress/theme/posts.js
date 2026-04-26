export const categories = [
  { id: 'all', label: '全部' },
  { id: 'featured', label: '精选' },
  { id: 'notes', label: '技术札记' },
  { id: 'engineering', label: '工程实践' },
  { id: 'essay', label: '随笔' },
]

/** 与 docs/blog/{slug}.md 一一对应，href 与 VitePress 默认路由一致（.html） */
export const posts = [
  {
    slug: '0',
    href: '/blog/0.html',
    title: '播客',
    excerpt: '张津剑：投资中的高频与低频——科技革命、创业环境与时间加速下的思考札记。',
    date: '2026-04-25',
    displayDate: 'Apr 25, 2026',
    category: 'notes',
    categoryLabel: '技术札记',
    featured: true,
    newest: true,
  },
  {
    slug: '1',
    href: '/blog/1.html',
    title: '关于长期维护的一点想法',
    excerpt: '长期维护不是靠意志力，而是靠默认路径足够顺手。',
    date: '2026-01-31',
    displayDate: 'Jan 31, 2026',
    category: 'essay',
    categoryLabel: '随笔',
    featured: false,
  },
]
