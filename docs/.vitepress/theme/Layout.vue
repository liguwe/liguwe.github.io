<script setup>
import { BookOpen, FolderGit2, Github, Menu, Moon, MoreHorizontal, Search, Sun } from 'lucide-vue-next'
import { Content, inBrowser, useData, useRoute, withBase } from 'vitepress'
import { VPNavBarSearch } from 'vitepress/theme'
import VPDocAsideOutline from 'vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import SiteLogo from './components/SiteLogo.vue'
import { posts, tagColor, years } from './posts'

const { page, isDark, theme } = useData()
const route = useRoute()

const activeYear = ref('all')
const menuOpen = ref(false)

const isHome = computed(() => page.value.relativePath === 'index.md')
/** docs/blog 下仅数字 slug：0.md、1.md … 无子目录 */
const isPost = computed(() => /^blog\/\d+\.md$/.test(page.value.relativePath))

const yearFilters = computed(() => [
  { id: 'all', label: '全部' },
  ...years.map((y) => ({ id: y, label: y })),
])

const latestPost = computed(() => [...posts].sort((a, b) => b.date.localeCompare(a.date))[0])

const appearanceLabel = computed(() => (isDark.value ? '切换到浅色模式' : '切换到深色模式'))

const visiblePosts = computed(() => {
  if (activeYear.value === 'all')
    return posts
  return posts.filter((post) => post.year === activeYear.value)
})

const postSlugFromPath = computed(() => {
  const m = page.value.relativePath.match(/^blog\/(\d+)\.md$/)
  return m?.[1] ?? ''
})

const currentPost = computed(() => {
  const slug = postSlugFromPath.value
  if (!slug)
    return undefined
  return posts.find(post => post.slug === slug)
})

const postHeroTitle = computed(() => currentPost.value?.title ?? page.value.title ?? '')
const postHeroDate = computed(() => currentPost.value?.date ?? '')
const postHeroTags = computed(() => currentPost.value?.tags ?? [])

const pageName = computed(() =>
  route.path.replace(/[./]+/g, '_').replace(/_html$/, ''),
)

function toggleAppearance() {
  if (!inBrowser)
    return
  isDark.value = !isDark.value
}

function closePanels() {
  menuOpen.value = false
}

/** 移动端抽屉内触发：与顶栏共用 VPNavBarSearch 的 #local-search 按钮 */
function openLocalSearch() {
  menuOpen.value = false
  nextTick(() => {
    document.querySelector('#local-search .DocSearch-Button')?.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true, view: window }),
    )
  })
}

function onKeydown(event) {
  if (event.key === 'Escape') {
    closePanels()
  }
}

function yearActive(id) {
  return activeYear.value === id
}

function setActiveYear(id) {
  activeYear.value = id
}

function yearLinkClass(id) {
  const base = 'p-2.5 lg:px-4 lg:py-1 fv-style w-full shrink-0 text-nowrap lg:text-wrap border-b lg:border-b-0 lg:border-l text-center lg:text-left focus-visible:[outline-offset:-4px]!'
  if (yearActive(id)) {
    return `${base} !text-accent-blue bg-accent-blue/5 dark:bg-accent-blue/12 border-accent-blue/50 scroll-mt-0 scroll-ml-0 dark:border-blue-300/40 dark:!text-blue-400`
  }
  return `${base} hover:bg-accent-blue/10 default-border-color lg:!border-transparent`
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="site-root relative min-h-screen w-screen overflow-x-clip bg-cream-100/20 text-offgray-800 dark:bg-[hsl(218,13%,7.5%)] dark:text-offgray-300">
    <div class="nav-background absolute top-0 left-0 z-[-1] h-full w-4 sm:w-6 md:w-12" aria-hidden="true" />
    <div class="nav-background absolute top-0 right-0 z-[-1] h-full w-4 sm:w-6 md:w-12" aria-hidden="true" />

    <div class="relative flex flex-1 flex-col overflow-x-clip">
      <div
        class="site-page-shell relative z-10 flex flex-1 w-screen flex-col overflow-x-clip transition-[transform,border-radius] duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] [transform-origin:center_top] will-change-transform"
        :class="menuOpen ? 'scale-[0.98] translate-y-1 overflow-hidden rounded-t-lg' : ''"
      >
        <header
          class="outer-section-node-offset sticky top-0 z-[100] flex h-[57px] min-w-0 shrink-0 items-stretch border-b border-t default-border-color nav-background sm:border-t-0"
        >
          <div
            class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
            aria-hidden="true"
          />
          <div
            class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
            aria-hidden="true"
          />
          <span class="relative z-[1] w-4 shrink-0 border-r border-[var(--border)] sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true">
          </span>
          <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)]  lg:block" aria-hidden="true" />

          <nav
            aria-label="Site's main navigation"
            class="container-max-w relative isolate z-[2] flex w-full flex-1 items-center justify-between gap-4 pl-3 pr-3 lg:gap-0 lg:pl-3.5 [--node-horizontal-offset:-3.5px]"
          >
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] hidden lg:block"
              aria-hidden="true"
            />
            <div class="flex flex-none items-center">
              <SiteLogo />
            </div>

            <ul class="ml-auto hidden list-none items-center gap-1.5 lg:m-0 lg:flex" aria-orientation="horizontal">
              <li class="vp-nav-local-search flex items-center relative">
                <button
                  type="button"
                  class="fv-style inline-flex size-8 select-none items-center justify-center rounded-sm border border-[var(--border)] text-offgray-1000 hover:bg-offgray-100/60 dark:text-white dark:hover:bg-offgray-500/10 lg:active:translate-y-px lg:active:scale-[.99]"
                  aria-label="搜索"
                  @click="openLocalSearch"
                >
                  <Search class="size-[18px] shrink-0" stroke-width="2" />
                </button>
                <div class="hidden">
                  <VPNavBarSearch />
                </div>
              </li>
              <li class="h-5 w-px border-l border-[var(--border)]" aria-hidden="true" />
              <li>
                <button
                  type="button"
                  class="fv-style inline-flex size-8 select-none items-center justify-center rounded-sm border border-[var(--border)] text-offgray-600 hover:bg-offgray-100/60 dark:text-offgray-300 dark:hover:bg-offgray-500/10"
                  :aria-label="appearanceLabel"
                  :aria-pressed="isDark"
                  @click="toggleAppearance"
                >
                  <Sun v-if="isDark" class="size-[18px] shrink-0 text-offgray-600 dark:text-offgray-200" stroke-width="2" />
                  <Moon v-else class="size-[18px] shrink-0 text-offgray-600 dark:text-offgray-200" stroke-width="2" />
                </button>
              </li>
              <li class="group/more relative">
                <button
                  type="button"
                  class="fv-style inline-flex size-8 select-none items-center justify-center rounded-sm border border-[var(--border)] text-offgray-1000 hover:bg-offgray-100/60 dark:text-white dark:hover:bg-offgray-500/10 lg:active:translate-y-px lg:active:scale-[.99] group-hover/more:bg-offgray-100/50 dark:group-hover/more:bg-offgray-500/10"
                  aria-label="更多外链"
                  aria-haspopup="menu"
                >
                  <MoreHorizontal class="size-[18px] shrink-0" stroke-width="2" />
                </button>
                <div
                  class="pointer-events-none invisible absolute right-0 top-full z-[110] translate-y-1 pt-1 opacity-0 transition-[opacity,visibility,transform] duration-150 ease-out group-hover/more:pointer-events-auto group-hover/more:visible group-hover/more:translate-y-0 group-hover/more:opacity-100 group-focus-within/more:pointer-events-auto group-focus-within/more:visible group-focus-within/more:translate-y-0 group-focus-within/more:opacity-100"
                  role="menu"
                >
                  <div
                    class="min-w-[11rem] rounded-md border border-[var(--border)] bg-[var(--nav-bg-color)] py-1 shadow-[0_12px_40px_rgba(0,0,0,0.12),var(--shadow-blue-alt)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
                  >
                    <a
                      href="https://github.com/liguwe/pre-34.5"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center gap-2.5 px-3 py-2 text-sm text-offgray-1000 hover:bg-accent-blue/10 dark:text-white dark:hover:bg-accent-blue/15"
                      role="menuitem"
                    >
                      <FolderGit2 class="size-4 shrink-0 text-offgray-500 dark:text-offgray-400" stroke-width="2" aria-hidden="true" />
                      <span class="min-w-0 flex-1">pre-34.5</span>
                      <span class="shrink-0 text-offgray-400 dark:text-offgray-500">↗</span>
                    </a>
                    <a
                      href="https://www.yuque.com/liguwe"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center gap-2.5 px-3 py-2 text-sm text-offgray-1000 hover:bg-accent-blue/10 dark:text-white dark:hover:bg-accent-blue/15"
                      role="menuitem"
                    >
                      <BookOpen class="size-4 shrink-0 text-offgray-500 dark:text-offgray-400" stroke-width="2" aria-hidden="true" />
                      <span class="min-w-0 flex-1">语雀</span>
                      <span class="shrink-0 text-offgray-400 dark:text-offgray-500">↗</span>
                    </a>
                    <a
                      href="https://github.com/liguwe"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="flex items-center gap-2.5 px-3 py-2 text-sm text-offgray-1000 hover:bg-accent-blue/10 dark:text-white dark:hover:bg-accent-blue/15"
                      role="menuitem"
                    >
                      <Github class="size-4 shrink-0 text-offgray-500 dark:text-offgray-400" stroke-width="2" aria-hidden="true" />
                      <span class="min-w-0 flex-1">GitHub</span>
                      <span class="shrink-0 text-offgray-400 dark:text-offgray-500">↗</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            <button
              type="button"
              class="inline-flex size-8 items-center justify-center rounded-sm border default-border-color lg:hidden"
              aria-label="Open navigation menu"
              aria-haspopup="dialog"
              :aria-expanded="menuOpen"
              @click="menuOpen = true"
            >
              <Menu class="size-[18px]" stroke-width="2" />
            </button>
          </nav>

          <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)]  lg:block" aria-hidden="true" />
          <span class="relative z-[1] w-4 shrink-0 border-l border-[var(--border)] sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true" />
        </header>

        <main v-if="isHome" class="flex min-h-0 flex-1 flex-col">
          <section class="outer-section-node-offset relative z-[1] flex shrink-0 !min-h-fit min-w-0">
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <span class="relative z-[1] w-4 shrink-0 border-r border-[var(--border)] sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true">
              <svg class="pointer-events-none absolute inset-0 text-accent-blue/15 dark:text-blue-300/5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V-1H-1V0H0ZM0 0V1H24V0V-1H0V0ZM0 24H1V0H0H-1V24H0Z" fill="currentColor" />
                  </svg>
                </pattern>
                <rect width="100%" height="100%" fill="url(#hero-grid)" />
              </svg>
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 right-[-0.5px] w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[1.067747235329704] bg-current" />
                  <div class="w-px flex-[4.561247827280894] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 right-[-0.5px] w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.810797334560564] bg-current" />
                  <div class="w-px flex-[4.996210100127482] bg-current" />
                </div>
              </div>
            </span>
            <div class="relative z-[2] container-max-w max-md:min-w-0 flex-1 [--node-horizontal-offset:-3.5px]">
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div class="relative isolate size-full w-full overflow-clip p-4 py-8 lg:pt-12 lg:pb-14">
                <hgroup class="mx-auto flex w-full max-w-lg flex-col items-center gap-1">
                  <h1 class="zed-blog-hero-title font-plex-serif text-balance scroll-mt-24 mb-2 text-center text-accent-blue dark:text-blue-300">
                    博客
                  </h1>
                  <p class="text-center text-balance tracking-tight text-offgray-600 dark:text-offgray-500">
                    记录工程实践、设计细节和长期写作中的判断。
                  </p>
                </hgroup>
                <svg
                  aria-hidden="true"
                  class="pointer-events-none absolute inset-0 -z-10 size-full max-h-[190px] fill-blue-500/50 stroke-blue-500/50 opacity-20 [mask-image:linear-gradient(to_bottom,#ffffffad,transparent)] dark:opacity-16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <!-- 与 zed-blog.html 一致：8×8 平铺的 L 形描边，横竖线交错成格 -->
                    <pattern id="zed-hero-line-grid" width="8" height="8" patternUnits="userSpaceOnUse" x="-1" y="-1">
                      <path d="M.5 8V.5H8" fill="none" stroke="currentColor" stroke-width="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#zed-hero-line-grid)" stroke-width="0" />
                </svg>
              </div>
            </div>
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[3.8821601881096885] bg-current" />
                  <div class="w-px flex-[1.869571805405231] bg-current" />
                  <div class="w-px flex-[1.0783224106199678] bg-current" />
                  <div class="w-px flex-[1.4467267992192538] bg-current" />
                  <div class="w-px flex-[4.047455312240615] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] w-4 shrink-0 border-l border-[var(--border)] sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true">
              <svg class="pointer-events-none absolute inset-0 text-accent-blue/15 dark:text-blue-300/5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="hero-grid-right" width="10" height="10" patternUnits="userSpaceOnUse">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V-1H-1V0H0ZM0 0V1H24V0V-1H0V0ZM0 24H1V0H0H-1V24H0Z" fill="currentColor" />
                  </svg>
                </pattern>
                <rect width="100%" height="100%" fill="url(#hero-grid-right)" />
              </svg>
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[3.3796901713962155] bg-current" />
                  <div class="w-px flex-[3.982290269333073] bg-current" />
                  <div class="w-px flex-[4.161550523322798] bg-current" />
                  <div class="w-px flex-[2.140127182537749] bg-current" />
                </div>
              </div>
            </span>
          </section>

          <section
            id="divider-slash"
            class="relative z-[2] isolate h-3.5 w-full shrink-0 before:pointer-events-none before:absolute before:top-0 before:right-0 before:-left-[100vw] before:z-0 before:h-px before:w-[200vw] before:bg-[color-mix(in_oklch,var(--border),transparent_58%)] after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:-left-[100vw] after:z-0 after:h-px after:w-[200vw] after:bg-[color-mix(in_oklch,var(--border),transparent_50%)] dark:before:bg-[color-mix(in_oklch,var(--border),transparent_42%)] dark:after:bg-[color-mix(in_oklch,var(--border),transparent_38%)]"
            aria-hidden="true"
          >
            <svg class="pointer-events-none absolute inset-0 z-0 size-full select-none py-[1px] text-offgray-200/70 !opacity-30 dark:text-blue-400/10 dark:!opacity-60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="zed-divider-slash" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" stroke-width="1.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#zed-divider-slash)" />
            </svg>
          </section>

          <section class="outer-section-node-offset relative z-[1] flex min-h-[calc(100vh-240px)] min-w-0 flex-1 items-stretch">
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <span class="relative z-[1] w-4 shrink-0 self-stretch border-r border-[var(--border)] sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 right-[-0.5px] w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.8083788164930317] bg-current" />
                  <div class="w-px flex-[4.3946094528746835] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] hidden flex-1 self-stretch border-x border-[var(--border)] lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 right-[-0.5px] w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.81904649819203] bg-current" />
                  <div class="w-px flex-[2.6110425002924362] bg-current" />
                  <div class="w-px flex-[4.921013357080991] bg-current" />
                </div>
              </div>
            </span>
            <div class="relative z-[2] container-max-w flex max-md:min-w-0 min-h-[60vh] flex-1 flex-col [--node-horizontal-offset:-3.5px]">
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div class="isolate relative flex min-h-0 flex-1 flex-col p-0">
                <div class="relative grid min-h-0 w-full flex-1 grid-cols-5">
                  <div class="col-span-5 max-w-5xl lg:col-span-1">
                    <nav class="max-md:[mask-image:linear-gradient(to_right,black_85%,transparent)] md:[mask-image:none] sticky top-14 py-6 lg:py-10" aria-label="Blog years">
                        <div class="subheader text-center lg:text-left px-0 pb-2.5 lg:pl-[15px] border-b lg:border-b-0 default-border-color">
                          年份
                        </div>
                        <ul class="flex list-none gap-0 overflow-x-auto pr-12 text-sm md:pr-0 lg:flex-col lg:pr-0" role="tablist">
                          <li v-for="yf in yearFilters" :key="yf.id" class="flex w-full flex-1">
                            <a
                              role="tab"
                              :href="withBase('/')"
                              :aria-selected="yearActive(yf.id)"
                              :class="yearLinkClass(yf.id)"
                              @click.prevent="setActiveYear(yf.id)"
                            >
                              {{ yf.label }}
                            </a>
                          </li>
                        </ul>
                    </nav>
                  </div>
                  <div class="col-span-5 flex min-h-0 flex-col lg:col-span-4">
                    <div class="border-l border-dashed default-border-color relative flex min-h-0 flex-1 flex-col p-4 lg:p-8">
                      <div
                        class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                        aria-hidden="true"
                      />
                      <div
                        class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                        aria-hidden="true"
                      />
                <a
                  v-for="post in visiblePosts"
                  :key="post.slug"
                  :href="withBase(post.href)"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group fv-style relative isolate flex flex-col items-start justify-between gap-2 rounded border border-transparent py-2 hover:border-blue-300 hover:bg-blue-50/50 hover:[box-shadow:var(--sh-alt)] lg:min-h-[42px] lg:flex-row lg:items-center lg:px-2 dark:hover:border-blue-300/20 dark:hover:bg-blue-700/5"
                >
                  <svg class="pointer-events-none absolute inset-0 -z-10 size-full select-none text-offgray-200/70 opacity-50 [mask-image:linear-gradient(to_left,#ffffffad,transparent)] invisible group-hover:visible dark:text-blue-400/10 dark:opacity-80" aria-hidden="true">
                    <defs>
                      <pattern :id="`row-${post.slug}`" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" stroke-width="1.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" :fill="`url(#row-${post.slug})`" />
                  </svg>
                  <div class="flex min-w-0 items-center gap-3">
                    <h2 class="text-[0.9375rem] text-offgray-900 underline decoration-accent-blue/20 decoration-1 underline-offset-[3px] hover:decoration-accent-blue/80 group-hover:decoration-accent-blue/80 dark:text-offgray-100 dark:decoration-blue-300/20 dark:hover:decoration-blue-400/80 dark:group-hover:decoration-blue-400/80">
                      {{ post.title }}
                    </h2>
                  </div>
                  <div class="flex w-full flex-wrap items-center gap-1.5 lg:w-auto">
                    <span
                      v-for="tag in post.tags"
                      :key="tag"
                      class="rounded-xs flex h-[18px] w-fit shrink-0 items-center px-1.5 pt-px font-mono text-[0.5625rem] leading-6 border"
                      :class="[tagColor(tag).bg, tagColor(tag).text, tagColor(tag).border]"
                    >{{ tag }}</span>
                    <span v-if="post.tags.length" class="hidden opacity-15 lg:flex dark:opacity-[0.08]" aria-hidden="true">|</span>
                    <p class="ml-auto font-mono text-[0.625rem] text-offgray-600 dark:text-offgray-500 tabular-nums">
                      {{ post.date }}
                    </p>
                  </div>
                  <hr class="default-border-color mt-2 w-full opacity-70 group-last:hidden lg:hidden">
                </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="relative z-[1] hidden flex-1 self-stretch border-x border-[var(--border)] lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.9101247796370298] bg-current" />
                  <div class="w-px flex-[1.6569280627448708] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] w-4 shrink-0 self-stretch border-l border-[var(--border)] sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[4.369975210805412] bg-current" />
                  <div class="w-px flex-[3.3009514819369428] bg-current" />
                </div>
              </div>
            </span>
          </section>
        </main>

        <main v-else-if="isPost" class="flex min-h-0 flex-1 flex-col">
          <section class="outer-section-node-offset relative z-[1] flex shrink-0 !min-h-fit min-h-[450px] min-w-0">
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <span class="relative z-[1] w-4 shrink-0 border-r border-[var(--border)] sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true">
              <svg class="pointer-events-none absolute inset-0 text-accent-blue/15 dark:text-blue-300/5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="post-hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V-1H-1V0H0ZM0 0V1H24V0V-1H0V0ZM0 24H1V0H0H-1V24H0Z" fill="currentColor" />
                  </svg>
                </pattern>
                <rect width="100%" height="100%" fill="url(#post-hero-grid)" />
              </svg>
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 right-[-0.5px] w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[1.06775] bg-current" />
                  <div class="w-px flex-[4.56125] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 right-[-0.5px] w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.8108] bg-current" />
                  <div class="w-px flex-[4.99621] bg-current" />
                </div>
              </div>
            </span>
            <div class="relative z-[2] container-max-w max-md:min-w-0 flex-1 [--node-horizontal-offset:-3.5px]">
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div class="isolate relative size-full overflow-clip p-4 px-4 py-6 lg:px-12 lg:py-16">
                <header class="flex w-full flex-col justify-center gap-6">
                  <h1 class="zed-detail-hero-title font-plex-serif scroll-mt-24 text-accent-blue dark:text-blue-300">
                    {{ postHeroTitle }}
                  </h1>
                  <div v-if="postHeroDate || postHeroTags.length" class="flex flex-col gap-2.5">
                    <div class="flex flex-wrap items-center gap-2">
                      <p v-if="postHeroDate" class="text-xs text-offgray-600 dark:text-offgray-500 tabular-nums">
                        {{ postHeroDate }}
                      </p>
                      <span v-if="postHeroDate && postHeroTags.length" class="text-xs text-offgray-400">·</span>
                      <span
                        v-for="tag in postHeroTags"
                        :key="tag"
                        class="rounded-xs flex h-[18px] w-fit shrink-0 items-center px-1.5 pt-px font-mono text-[0.5625rem] leading-6 border"
                        :class="[tagColor(tag).bg, tagColor(tag).text, tagColor(tag).border]"
                      >{{ tag }}</span>
                    </div>
                  </div>
                </header>
                <svg
                  class="pointer-events-none absolute inset-0 -z-10 size-full select-none text-offgray-200/70 opacity-40 [mask-image:linear-gradient(to_left,transparent_10%,#fff_90%)] dark:text-blue-400/10 dark:opacity-80"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern id="post-hero-diag" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" stroke-width="1.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#post-hero-diag)" />
                </svg>
              </div>
            </div>
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[3.88216] bg-current" />
                  <div class="w-px flex-[1.86957] bg-current" />
                  <div class="w-px flex-[1.07832] bg-current" />
                  <div class="w-px flex-[1.44673] bg-current" />
                  <div class="w-px flex-[4.04746] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] w-4 shrink-0 border-l border-[var(--border)] sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true">
              <svg class="pointer-events-none absolute inset-0 text-accent-blue/15 dark:text-blue-300/5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="post-hero-grid-right" width="10" height="10" patternUnits="userSpaceOnUse">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V-1H-1V0H0ZM0 0V1H24V0V-1H0V0ZM0 24H1V0H0H-1V24H0Z" fill="currentColor" />
                  </svg>
                </pattern>
                <rect width="100%" height="100%" fill="url(#post-hero-grid-right)" />
              </svg>
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[3.37969] bg-current" />
                  <div class="w-px flex-[3.98229] bg-current" />
                  <div class="w-px flex-[4.16155] bg-current" />
                  <div class="w-px flex-[2.14013] bg-current" />
                </div>
              </div>
            </span>
          </section>

          <section class="outer-section-node-offset relative z-[1] flex min-h-[calc(100vh-250px)] min-w-0 flex-1 items-stretch border-t default-border-color">
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <span class="relative z-[1] w-4 shrink-0 self-stretch border-r border-[var(--border)] sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 right-[-0.5px] bottom-0 w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[4.03169] bg-current" />
                  <div class="w-px flex-[4.55797] bg-current" />
                  <div class="w-px flex-[3.70754] bg-current" />
                  <div class="w-px flex-[1.7575] bg-current" />
                  <div class="w-px flex-[3.88886] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] hidden flex-1 self-stretch border-x border-[var(--border)] lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 right-[-0.5px] bottom-0 w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.80838] bg-current" />
                  <div class="w-px flex-[4.39461] bg-current" />
                </div>
              </div>
            </span>
            <div class="relative z-[2] container-max-w flex max-md:min-w-0 min-h-0 flex-1 flex-col [--node-horizontal-offset:-3.5px]">
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div
                class="pointer-events-none absolute z-[110] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)] hidden lg:block"
                aria-hidden="true"
              />
              <div class="isolate relative flex min-h-0 min-w-0 flex-1 flex-col justify-between gap-10 p-4 lg:flex lg:flex-row-reverse lg:items-start lg:gap-12 lg:gap-x-10 lg:p-12 xl:gap-x-14">
                <aside
                  class="post-doc-aside sticky top-24 hidden w-[min(272px,32vw)] shrink-0 flex-col gap-4 lg:flex"
                  aria-label="本页目录"
                >
                  <div class="post-doc-aside-outline min-w-0">
                    <VPDocAsideOutline />
                  </div>
                </aside>
                <div class="zed-article min-w-0 flex-1 lg:max-w-[min(var(--blog-content-width),100%)] VPDoc">
                  <Content
                    class="vp-doc"
                    :class="[pageName, theme.externalLinkIcon && 'external-link-icon-enabled']"
                  />
                </div>
              </div>
            </div>
            <span class="relative z-[1] hidden flex-1 self-stretch border-x border-[var(--border)] lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.45501] bg-current" />
                  <div class="w-px flex-[3.12177] bg-current" />
                  <div class="w-px flex-[4.95768] bg-current" />
                  <div class="w-px flex-[4.67424] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] w-4 shrink-0 self-stretch border-l border-[var(--border)] sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[3.24898] bg-current" />
                  <div class="w-px flex-[3.4364] bg-current" />
                  <div class="w-px flex-[4.80649] bg-current" />
                </div>
              </div>
            </span>
          </section>
        </main>

        <main v-else class="flex flex-1 flex-col">
          <section class="outer-section-node-offset relative z-[1] flex min-h-[calc(100vh-57px)] min-w-0 border-t default-border-color py-10">
            <span class="relative z-[1] w-4 shrink-0 border-r border-[var(--border)] sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true" />
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true" />
            <div class="zed-article container-max-w relative flex-1 px-4 lg:px-12 VPDoc">
              <Content
                class="vp-doc"
                :class="[pageName, theme.externalLinkIcon && 'external-link-icon-enabled']"
              />
            </div>
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true" />
            <span class="relative z-[1] w-4 shrink-0 border-l border-[var(--border)] sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true" />
          </section>
        </main>

      </div>

      <div
        class="pointer-events-none absolute inset-0 z-[55] transition-colors duration-200"
        :class="menuOpen ? 'pointer-events-auto bg-black/25' : ''"
        aria-hidden="true"
        @click="menuOpen = false"
      />
    </div>

    <aside
      v-show="menuOpen"
      class="fixed inset-0 z-[130] flex justify-end lg:hidden"
      aria-label="Mobile navigation"
    >
      <div class="h-full flex-1 bg-black/35" @click="menuOpen = false" />
      <div
        class="flex h-full w-[min(320px,calc(100vw-2rem))] flex-col gap-1 border-l border-[var(--border)] bg-[var(--nav-bg-color)] p-4 shadow-[-12px_0_32px_rgba(0,0,0,0.15)]"
      >
        <div class="font-plex-serif mb-3 text-2xl text-offgray-1000 dark:text-white">
          Menu
        </div>
        <a :href="withBase('/')" class="rounded-md px-3 py-2 text-offgray-1000 hover:bg-accent-blue/10 dark:text-white" @click="menuOpen = false">Blog</a>
        <a
          v-if="latestPost"
          :href="withBase(latestPost.href)"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-md px-3 py-2 text-offgray-1000 hover:bg-accent-blue/10 dark:text-white"
          @click="menuOpen = false"
        >Latest Post</a>
        <a
          href="https://github.com/liguwe/pre-34.5"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2.5 rounded-md px-3 py-2 text-offgray-1000 hover:bg-accent-blue/10 dark:text-white"
          @click="menuOpen = false"
        >
          <FolderGit2 class="size-[18px] shrink-0 text-offgray-500 dark:text-offgray-400" stroke-width="2" aria-hidden="true" />
          <span class="flex-1">pre-34.5</span>
          <span class="text-offgray-400">↗</span>
        </a>
        <a
          href="https://www.yuque.com/liguwe"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2.5 rounded-md px-3 py-2 text-offgray-1000 hover:bg-accent-blue/10 dark:text-white"
          @click="menuOpen = false"
        >
          <BookOpen class="size-[18px] shrink-0 text-offgray-500 dark:text-offgray-400" stroke-width="2" aria-hidden="true" />
          <span class="flex-1">语雀</span>
          <span class="text-offgray-400">↗</span>
        </a>
        <a
          href="https://github.com/liguwe"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2.5 rounded-md px-3 py-2 text-offgray-1000 hover:bg-accent-blue/10 dark:text-white"
          @click="menuOpen = false"
        >
          <Github class="size-[18px] shrink-0 text-offgray-500 dark:text-offgray-400" stroke-width="2" aria-hidden="true" />
          <span class="flex-1">GitHub</span>
          <span class="text-offgray-400">↗</span>
        </a>
        <button type="button" class="rounded-md px-3 py-2 text-left text-offgray-1000 hover:bg-accent-blue/10 dark:text-white" @click="openLocalSearch">
          搜索
        </button>
        <button
          type="button"
          class="rounded-md px-3 py-2 text-left text-offgray-1000 hover:bg-accent-blue/10 dark:text-white"
          :aria-label="appearanceLabel"
          :aria-pressed="isDark"
          @click="toggleAppearance"
        >
          {{ isDark ? '浅色' : '深色' }}
        </button>
      </div>
    </aside>

  </div>
</template>
