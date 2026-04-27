import postsData from './posts.json'

export const posts = postsData.posts

/** 动态提取去重的年份列表，降序排列 */
export const years = [...new Set(posts.map((p) => p.year))].sort((a, b) => b.localeCompare(a))

/**
 * 为 tag 分配一个稳定的颜色类名。
 * 使用 hash 从预设颜色池中选取，同一 tag 始终同色。
 */
const TAG_COLORS = [
  { bg: 'bg-blue-100/60 dark:bg-blue-900/20', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-300/50 dark:border-blue-500/30' },
  { bg: 'bg-emerald-100/60 dark:bg-emerald-900/20', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-300/50 dark:border-emerald-500/30' },
  { bg: 'bg-amber-100/60 dark:bg-amber-900/20', text: 'text-amber-700 dark:text-amber-300', border: 'border-amber-300/50 dark:border-amber-500/30' },
  { bg: 'bg-rose-100/60 dark:bg-rose-900/20', text: 'text-rose-700 dark:text-rose-300', border: 'border-rose-300/50 dark:border-rose-500/30' },
  { bg: 'bg-violet-100/60 dark:bg-violet-900/20', text: 'text-violet-700 dark:text-violet-300', border: 'border-violet-300/50 dark:border-violet-500/30' },
  { bg: 'bg-cyan-100/60 dark:bg-cyan-900/20', text: 'text-cyan-700 dark:text-cyan-300', border: 'border-cyan-300/50 dark:border-cyan-500/30' },
  { bg: 'bg-orange-100/60 dark:bg-orange-900/20', text: 'text-orange-700 dark:text-orange-300', border: 'border-orange-300/50 dark:border-orange-500/30' },
  { bg: 'bg-pink-100/60 dark:bg-pink-900/20', text: 'text-pink-700 dark:text-pink-300', border: 'border-pink-300/50 dark:border-pink-500/30' },
  { bg: 'bg-teal-100/60 dark:bg-teal-900/20', text: 'text-teal-700 dark:text-teal-300', border: 'border-teal-300/50 dark:border-teal-500/30' },
  { bg: 'bg-indigo-100/60 dark:bg-indigo-900/20', text: 'text-indigo-700 dark:text-indigo-300', border: 'border-indigo-300/50 dark:border-indigo-500/30' },
]

function hashCode(str) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash + str.charCodeAt(i)) | 0
  }
  return Math.abs(hash)
}

export function tagColor(tag) {
  return TAG_COLORS[hashCode(tag) % TAG_COLORS.length]
}
