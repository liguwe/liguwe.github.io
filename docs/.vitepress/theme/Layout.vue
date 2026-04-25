<script setup>
import { ArrowBigUp, ChevronDown, Command, Menu, Search } from 'lucide-vue-next'
import { Content, useData, useRoute, withBase } from 'vitepress'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ZedLogo from './components/ZedLogo.vue'
import { categories, posts } from './posts'

const { frontmatter, page } = useData()
const route = useRoute()

const activeCategory = ref('all')
const commandOpen = ref(false)
const menuOpen = ref(false)
const query = ref('')
const theme = ref('system')
const activeTocSlug = ref('')
let mediaQuery
let tocObserver

const isHome = computed(() => page.value.relativePath === 'index.md')
const isPost = computed(() => page.value.relativePath.startsWith('blog/') && frontmatter.value.id)

const featuredPosts = computed(() => posts.filter((post) => post.featured).slice(0, 3))
const latestPost = computed(() => [...posts].sort((a, b) => b.date.localeCompare(a.date))[0])

const visiblePosts = computed(() => {
  if (activeCategory.value === 'all')
    return posts
  if (activeCategory.value === 'featured')
    return posts.filter((post) => post.featured)
  return posts.filter((post) => post.category === activeCategory.value)
})

const searchResults = computed(() => {
  const value = query.value.trim().toLowerCase()
  if (!value)
    return posts.slice(0, 6)
  return posts.filter((post) => {
    return [post.title, post.excerpt, post.categoryLabel].join(' ').toLowerCase().includes(value)
  })
})

const currentPost = computed(() => {
  return posts.find((post) => post.id === frontmatter.value.id) || posts[0]
})

function flattenToc(headers) {
  const out = []
  function walk(list) {
    for (const h of list || []) {
      if (h.level >= 2 && h.level <= 3)
        out.push(h)
      if (h.children?.length)
        walk(h.children)
    }
  }
  walk(headers)
  return out
}

const tocHeaders = computed(() => flattenToc(page.value.headers))

const themeLabel = computed(() => {
  if (theme.value === 'light')
    return 'Light'
  if (theme.value === 'dark')
    return 'Dark'
  return 'System'
})

function applyTheme(value) {
  if (typeof document === 'undefined')
    return
  const root = document.documentElement
  const resolved = value === 'system'
    ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    : value

  root.classList.remove('light', 'dark')
  root.classList.add(resolved)
  root.style.colorScheme = resolved
}

function setTheme(value) {
  theme.value = value
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('theme', value)
  }
  applyTheme(value)
}

function cycleTheme() {
  const next = theme.value === 'system' ? 'light' : theme.value === 'light' ? 'dark' : 'system'
  setTheme(next)
}

function openCommand() {
  commandOpen.value = true
  menuOpen.value = false
  requestAnimationFrame(() => document.querySelector('.command-input')?.focus())
}

function closePanels() {
  commandOpen.value = false
  menuOpen.value = false
}

function onKeydown(event) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault()
    openCommand()
  }

  if (event.key === 'Escape') {
    closePanels()
  }
}

function categoryActive(id) {
  return activeCategory.value === id
}

function categoryLinkClass(id) {
  const base = 'fv-style w-full shrink-0 text-nowrap border-b p-2.5 text-center text-offgray-800 lg:border-b-0 lg:border-l lg:px-4 lg:py-1 lg:text-left lg:text-wrap focus-visible:[outline-offset:-4px]! dark:text-offgray-200'
  if (categoryActive(id)) {
    return `${base} scroll-mt-0 scroll-ml-0 border-accent-blue/50 bg-accent-blue/5 text-accent-blue dark:border-blue-300/40 dark:bg-accent-blue/12 dark:text-blue-400`
  }
  return `${base} default-border-color hover:bg-accent-blue/10 lg:!border-transparent`
}

function bindTocObserver() {
  nextTick(() => {
    tocObserver?.disconnect()
    if (!isPost.value || !tocHeaders.value.length)
      return
    tocObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting && e.target.id)
      if (!visible.length)
        return
      visible.sort((a, b) => a.target.getBoundingClientRect().top - b.target.getBoundingClientRect().top)
      activeTocSlug.value = visible[0].target.id
    }, { rootMargin: '-20% 0px -55% 0px', threshold: 0 })

    for (const h of tocHeaders.value) {
      const el = document.getElementById(h.slug)
      if (el)
        tocObserver.observe(el)
    }
  })
}

watch(() => [route.path, page.value.headers], bindTocObserver, { flush: 'post' })

onMounted(() => {
  theme.value = localStorage.getItem('theme') || 'system'
  applyTheme(theme.value)
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', () => {
    if (theme.value === 'system')
      applyTheme('system')
  })
  window.addEventListener('keydown', onKeydown)
  bindTocObserver()
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
  tocObserver?.disconnect()
})
</script>

<template>
  <div class="site-root relative min-h-screen w-screen overflow-x-hidden bg-cream-100/20 text-offgray-800 dark:bg-[hsl(218,13%,7.5%)] dark:text-offgray-300">
    <div class="nav-background absolute top-0 left-0 z-[-1] h-full w-4 sm:w-6 md:w-12" aria-hidden="true" />
    <div class="nav-background absolute top-0 right-0 z-[-1] h-full w-4 sm:w-6 md:w-12" aria-hidden="true" />

    <div class="relative overflow-clip">
      <div
        class="relative z-10 flex min-h-screen w-screen flex-none flex-col justify-between overflow-x-clip transition-[transform,border-radius] duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)] [transform-origin:center_top] will-change-transform"
        :class="menuOpen ? 'scale-[0.98] translate-y-1 overflow-hidden rounded-t-lg' : ''"
      >
        <header
          class="outer-section-node-offset sticky top-0 z-[100] flex h-[57px] min-w-0 shrink-0 items-stretch border-t border-b border-[var(--border)] nav-background default-border-color sm:border-t-0"
        >
          <div
            class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
            aria-hidden="true"
          />
          <div
            class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
            aria-hidden="true"
          />
          <span class="relative z-[1] w-4 shrink-0 border-r border-transparent sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true">
            <span class="default-border-color absolute top-0 bottom-0 hidden border-r lg:block" />
          </span>
          <span class="relative z-[1] hidden flex-1 border-x border-transparent default-border-color lg:block" aria-hidden="true" />

          <nav
            aria-label="Site's main navigation"
            class="container-max-w relative isolate z-[2] flex w-full flex-1 items-center justify-between gap-4 pl-3 pr-3 lg:gap-0 lg:pl-3.5 [--node-horizontal-offset:-3.5px]"
          >
            <div class="flex flex-none items-center gap-2.5">
              <ZedLogo />
              <ul class="hidden list-none items-center gap-0.5 lg:flex" aria-orientation="horizontal">
                <li class="group relative">
                  <button
                    type="button"
                    class="fv-style flex select-none items-center justify-center gap-1.5 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-offgray-1000 hover:bg-offgray-100/60 dark:text-white dark:hover:bg-offgray-500/10 lg:active:translate-y-px lg:active:scale-[.99]"
                  >
                    Product
                    <ChevronDown class="size-3 opacity-70 transition group-hover:rotate-180" stroke-width="2" />
                  </button>
                  <div class="pointer-events-none absolute top-full left-0 z-30 mt-2 grid w-[220px] gap-1 rounded-md border border-[var(--border)] bg-[var(--panel)] p-2 opacity-0 shadow-[var(--shadow-blue-alt)] transition group-hover:pointer-events-auto group-hover:opacity-100">
                    <a :href="withBase('/')" class="rounded px-2.5 py-2 text-sm text-offgray-1000 hover:bg-accent-blue/10 dark:text-white">Blog Home</a>
                    <a v-if="latestPost" :href="withBase(latestPost.href)" class="rounded px-2.5 py-2 text-sm text-offgray-1000 hover:bg-accent-blue/10 dark:text-white">Latest Post</a>
                    <a :href="withBase('/blog/9999-0001/')" class="rounded px-2.5 py-2 text-sm text-offgray-1000 hover:bg-accent-blue/10 dark:text-white">Design Notes</a>
                  </div>
                </li>
                <li class="group relative">
                  <button
                    type="button"
                    class="fv-style flex select-none items-center justify-center gap-1.5 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-offgray-1000 hover:bg-offgray-100/60 dark:text-white dark:hover:bg-offgray-500/10 lg:active:translate-y-px lg:active:scale-[.99]"
                  >
                    Resources
                    <ChevronDown class="size-3 opacity-70 transition group-hover:rotate-180" stroke-width="2" />
                  </button>
                  <div class="pointer-events-none absolute top-full left-0 z-30 mt-2 grid w-[220px] gap-1 rounded-md border border-[var(--border)] bg-[var(--panel)] p-2 opacity-0 shadow-[var(--shadow-blue-alt)] transition group-hover:pointer-events-auto group-hover:opacity-100">
                    <a :href="withBase('/blog/9999-0002/')" class="rounded px-2.5 py-2 text-sm text-offgray-1000 hover:bg-accent-blue/10 dark:text-white">Knowledge Base</a>
                    <a :href="withBase('/blog/9999-0003/')" class="rounded px-2.5 py-2 text-sm text-offgray-1000 hover:bg-accent-blue/10 dark:text-white">Static Site</a>
                    <a :href="withBase('/blog/9999-0004/')" class="rounded px-2.5 py-2 text-sm text-offgray-1000 hover:bg-accent-blue/10 dark:text-white">Review Log</a>
                  </div>
                </li>
                <li>
                  <a
                    :href="withBase('/')"
                    class="fv-style flex select-none items-center justify-center gap-1.5 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-offgray-1000 hover:bg-offgray-100/60 dark:text-white dark:hover:bg-offgray-500/10 lg:active:translate-y-px lg:active:scale-[.99]"
                  >Extensions</a>
                </li>
                <li>
                  <a
                    :href="withBase('/')"
                    class="fv-style flex select-none items-center justify-center gap-1.5 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-offgray-1000 hover:bg-offgray-100/60 dark:text-white dark:hover:bg-offgray-500/10 lg:active:translate-y-px lg:active:scale-[.99]"
                  >Docs</a>
                </li>
                <li>
                  <a
                    :href="withBase('/')"
                    class="fv-style flex select-none items-center justify-center gap-1.5 rounded-sm border border-transparent px-2.5 text-sm tracking-tight text-nowrap text-offgray-1000 hover:bg-offgray-100/60 dark:text-white dark:hover:bg-offgray-500/10 lg:active:translate-y-px lg:active:scale-[.99]"
                  >Pricing</a>
                </li>
              </ul>
            </div>

            <ul class="ml-auto hidden list-none items-center gap-1.5 lg:m-0 lg:flex" aria-orientation="horizontal">
              <li>
                <button
                  type="button"
                  class="fv-style flex h-8 select-none items-center justify-center gap-1.5 rounded-sm border border-[var(--border)] px-2 text-sm tracking-tight text-nowrap text-offgray-1000 hover:bg-offgray-100/60 dark:text-white dark:hover:bg-offgray-500/10 lg:active:translate-y-px lg:active:scale-[.99]"
                  aria-label="Command menu"
                  @click="openCommand"
                >
                  <Search class="size-3.5 shrink-0" stroke-width="2" />
                  <kbd class="flex h-5 max-w-max items-center gap-0.5 rounded-xs border border-gray-500/10 px-1.5 text-[0.6875rem] font-bold text-offgray-600 dark:border-offgray-400/10 dark:text-offgray-200">
                    <Command class="size-2.5" stroke-width="2" />
                    <ArrowBigUp class="size-3.5" stroke-width="1.5" />
                    <span>K</span>
                  </kbd>
                </button>
              </li>
              <li class="h-5 w-px border-l border-[var(--border)]" aria-hidden="true" />
              <li>
                <button
                  type="button"
                  class="fv-style flex h-8 select-none items-center justify-center gap-1.5 rounded-sm border border-[var(--border)] px-2 text-sm tracking-tight text-nowrap text-offgray-600 hover:bg-offgray-100/60 dark:text-offgray-300 dark:hover:bg-offgray-500/10"
                  :aria-label="`Theme: ${themeLabel}`"
                  @click="cycleTheme"
                >
                  <span class="size-2 rounded-full bg-accent-blue shadow-[0_0_0_3px_color-mix(in_oklch,var(--accent-blue),transparent_86%)]" />
                  <span class="text-xs">{{ themeLabel }}</span>
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/liguwe"
                  class="fv-style flex h-8 select-none items-center justify-center gap-1.5 rounded-sm border border-accent-blue/40 bg-accent-blue px-2.5 text-sm font-medium tracking-tight text-nowrap text-white hover:opacity-95 lg:active:translate-y-px lg:active:scale-[.99]"
                >Download</a>
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

          <span class="relative z-[1] hidden flex-1 border-x border-transparent default-border-color lg:block" aria-hidden="true" />
          <span class="relative z-[1] w-4 shrink-0 border-l border-transparent sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true" />
        </header>

        <main v-if="isHome" class="flex flex-1 flex-col">
          <section class="outer-section-node-offset relative flex !min-h-fit min-h-[450px] min-w-0">
            <div
              class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <span class="relative z-[1] w-4 shrink-0 border-r border-transparent sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true">
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
            <span class="relative z-[1] hidden flex-1 border-x border-transparent lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 right-[-0.5px] w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.810797334560564] bg-current" />
                  <div class="w-px flex-[4.996210100127482] bg-current" />
                </div>
              </div>
            </span>
            <div class="relative container-max-w max-md:min-w-0 flex-1 [--node-horizontal-offset:-3.5px]">
              <div class="relative isolate size-full w-full overflow-clip p-4 py-8 lg:pt-12 lg:pb-14">
                <hgroup class="mx-auto flex w-full max-w-lg flex-col items-center gap-1">
                  <h1 class="font-plex-serif h2 mb-2 scroll-mt-24 text-center text-balance text-accent-blue dark:text-blue-300">
                    From The Blog
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
                    <pattern id="zed-hero-line-grid" width="8" height="8" patternUnits="userSpaceOnUse" x="-1" y="-1">
                      <path d="M.5 8V.5H8" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="0" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#zed-hero-line-grid)" stroke-width="0" />
                </svg>
              </div>
              <div class="relative isolate size-full overflow-clip p-0">
                <div class="grid w-full grid-cols-1 gap-4 px-4 py-4 lg:grid-cols-3 lg:px-8 lg:py-8">
                  <a
                    v-for="post in featuredPosts"
                    :key="post.id"
                    :href="withBase(post.href)"
                    class="group fv-style relative flex w-full cursor-pointer flex-col overflow-clip rounded-sm border border-offgray-100/70 [box-shadow:hsl(218,13%,50%,0.05)_0_-2px_0_0_inset] hover:border-blue-300 hover:[box-shadow:var(--sh-alt)] dark:border-gray-600/40 dark:[box-shadow:hsl(218,13%,40%,0.05)_0_-2px_0_0_inset] dark:hover:border-blue-300/50 lg:active:translate-y-px lg:active:scale-[.99]"
                  >
                    <div class="relative flex min-h-[140px] w-full shrink-0 grow items-center justify-center overflow-clip rounded-sm bg-white/60 p-4 dark:bg-offgray-800/5 md:min-h-[200px]">
                      <svg class="pointer-events-none absolute inset-0 -z-10 size-full select-none text-offgray-200/70 dark:text-blue-400/10 dark:opacity-60" aria-hidden="true">
                        <defs>
                          <pattern :id="`feat-${post.id}`" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                            <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" stroke-width="1.5" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" :fill="`url(#feat-${post.id})`" />
                      </svg>
                      <div class="relative flex w-full flex-col gap-3 text-left">
                        <div class="flex flex-wrap items-center gap-2">
                          <span
                            v-if="post.newest"
                            class="rounded-xs flex h-[18px] w-fit items-center gap-1.5 border border-blue-300 bg-blue-200/10 px-1 pt-px font-mono text-[0.625rem] leading-6 text-blue-800 dark:border-blue-400/15 dark:bg-blue-800/5 dark:text-blue-200"
                          >Newest</span>
                          <span class="rounded-xs border border-[var(--border)] px-1 py-px font-mono text-[0.625rem] text-offgray-600 dark:text-offgray-400">{{ post.categoryLabel }}</span>
                        </div>
                        <h2 class="text-base font-medium text-offgray-1000 underline decoration-accent-blue/30 decoration-1 underline-offset-[3px] group-hover:decoration-accent-blue/80 dark:text-white">
                          {{ post.title }}
                        </h2>
                        <p class="text-sm leading-relaxed text-offgray-600 dark:text-offgray-400">
                          {{ post.excerpt }}
                        </p>
                        <time class="mt-auto font-mono text-[0.625rem] text-offgray-600 dark:text-offgray-500">{{ post.displayDate }}</time>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <span class="relative z-[1] hidden flex-1 border-x border-transparent lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[3.8821601881096885] bg-[repeating-linear-gradient(to_bottom,currentColor_0_4px,transparent_4px_8px)]" />
                  <div class="w-px flex-[1.869571805405231] bg-current" />
                  <div class="w-px flex-[1.0783224106199678] bg-current" />
                  <div class="w-px flex-[1.4467267992192538] bg-[repeating-linear-gradient(to_bottom,currentColor_0_4px,transparent_4px_8px)]" />
                  <div class="w-px flex-[4.047455312240615] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] w-4 shrink-0 border-l border-transparent sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true">
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
                  <div class="w-px flex-[3.3796901713962155] bg-[repeating-linear-gradient(to_bottom,currentColor_0_4px,transparent_4px_8px)]" />
                  <div class="w-px flex-[3.982290269333073] bg-current" />
                  <div class="w-px flex-[4.161550523322798] bg-current" />
                  <div class="w-px flex-[2.140127182537749] bg-current" />
                </div>
              </div>
            </span>
          </section>

          <section
            id="divider-slash"
            class="default-border-before-color default-border-after-color relative h-3.5 w-full before:absolute before:top-0 before:right-0 before:-left-[100vw] before:h-px before:w-[200vw] before:[z-index:-1] after:absolute after:bottom-0 after:right-0 after:-left-[100vw] after:h-px after:w-[200vw] after:[z-index:-1]"
            aria-hidden="true"
          >
            <svg class="pointer-events-none absolute inset-0 size-full select-none py-[1px] text-offgray-200/70 [z-index:-1] !opacity-30 dark:text-blue-400/10 dark:!opacity-60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="zed-divider-slash" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" stroke-width="1.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#zed-divider-slash)" />
            </svg>
          </section>

          <section class="outer-section-node-offset relative flex min-w-0 border-t border-[var(--border)]">
            <div
              class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [top:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [left:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <div
              class="pointer-events-none absolute z-[99] size-1.5 rotate-45 border border-offgray-100 bg-[var(--node-bg)] dark:border-offgray-900 dark:bg-[hsl(219,92%,2%)] [bottom:calc(-1*var(--node-vertical-offset))] [right:var(--node-horizontal-offset)]"
              aria-hidden="true"
            />
            <span class="relative z-[1] w-4 shrink-0 border-r border-transparent sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 right-[-0.5px] w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.8083788164930317] bg-current" />
                  <div class="w-px flex-[4.3946094528746835] bg-[repeating-linear-gradient(to_bottom,currentColor_0_4px,transparent_4px_8px)]" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] hidden flex-1 border-x border-transparent lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 right-[-0.5px] w-[10px] translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.81904649819203] bg-[repeating-linear-gradient(to_bottom,currentColor_0_4px,transparent_4px_8px)]" />
                  <div class="w-px flex-[2.6110425002924362] bg-current" />
                  <div class="w-px flex-[4.921013357080991] bg-[repeating-linear-gradient(to_bottom,currentColor_0_4px,transparent_4px_8px)]" />
                </div>
              </div>
            </span>
            <div class="relative container-max-w max-md:min-w-0 flex-1">
              <div class="isolate relative size-full overflow-clip p-0">
                <div class="relative grid w-full grid-cols-5">
                  <div class="col-span-5 max-w-5xl lg:col-span-1">
                    <nav class="sticky top-10 max-md:[mask-image:linear-gradient(to_right,black_85%,transparent)] py-6 md:[mask-image:none] lg:py-10" aria-label="Blog categories">
                      <div class="subheader border-b px-0 pb-2.5 text-center default-border-color lg:border-b-0 lg:pl-[15px] lg:text-left">
                        Categories
                      </div>
                      <ul class="flex list-none gap-0 overflow-x-auto pr-12 text-sm md:pr-0 lg:flex-col lg:pr-0" role="tablist">
                        <li v-for="cat in categories" :key="cat.id" class="flex w-full flex-1">
                          <button
                            type="button"
                            role="tab"
                            :aria-selected="categoryActive(cat.id)"
                            :class="categoryLinkClass(cat.id)"
                            @click="activeCategory = cat.id"
                          >
                            {{ cat.label }}
                          </button>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div class="col-span-5 lg:col-span-4">
                    <div class="border-l default-border-color p-4 lg:p-8">
                <a
                  v-for="post in visiblePosts"
                  :key="post.id"
                  :href="withBase(post.href)"
                  class="group fv-style relative isolate flex flex-col items-start justify-between gap-2 rounded border border-transparent py-2 hover:border-blue-300 hover:bg-blue-50/50 hover:[box-shadow:var(--sh-alt)] lg:min-h-[42px] lg:flex-row lg:items-center lg:px-2 dark:hover:border-blue-300/20 dark:hover:bg-blue-700/5"
                >
                  <svg class="pointer-events-none absolute inset-0 -z-10 size-full select-none text-offgray-200/70 opacity-50 [mask-image:linear-gradient(to_left,#ffffffad,transparent)] invisible group-hover:visible dark:text-blue-400/10 dark:opacity-80" aria-hidden="true">
                    <defs>
                      <pattern :id="`row-${post.id}`" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" stroke-width="1.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" :fill="`url(#row-${post.id})`" />
                  </svg>
                  <div class="flex min-w-0 items-center gap-3">
                    <h2 class="text-base font-medium text-offgray-1000 underline decoration-accent-blue/25 decoration-1 underline-offset-[3px] group-hover:decoration-accent-blue/70 dark:text-white">
                      {{ post.title }}
                    </h2>
                    <span class="inline-grid size-[18px] place-items-center rounded-full border border-accent-blue/40 bg-accent-blue/10 font-mono text-[0.65rem] font-bold text-accent-blue dark:bg-accent-blue/20 dark:text-blue-200">{{ post.initials }}</span>
                  </div>
                  <div class="flex w-full flex-wrap items-center gap-2 lg:w-auto">
                    <span
                      v-if="post.featured"
                      class="rounded-xs flex h-[18px] w-fit shrink-0 items-center gap-1.5 border border-green-300/50 bg-green-200/10 px-1 pt-px font-mono text-[0.625rem] leading-6 text-green-900 dark:border-green-400/15 dark:bg-green-800/5 dark:text-green-200"
                    >Featured</span>
                    <span class="hidden opacity-15 lg:flex dark:opacity-[0.08]" aria-hidden="true">|</span>
                    <p class="ml-auto font-mono text-[0.625rem] text-offgray-600 dark:text-offgray-500">
                      {{ post.displayDate }}
                    </p>
                  </div>
                  <hr class="default-border-color mt-2 w-full opacity-70 group-last:hidden lg:hidden">
                </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span class="relative z-[1] hidden flex-1 border-x border-transparent lg:block" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[2.9101247796370298] bg-[repeating-linear-gradient(to_bottom,currentColor_0_4px,transparent_4px_8px)]" />
                  <div class="w-px flex-[1.6569280627448708] bg-current" />
                </div>
              </div>
            </span>
            <span class="relative z-[1] w-4 shrink-0 border-l border-transparent sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true">
              <div class="default-border-text-color pointer-events-none absolute top-0 bottom-0 left-[-0.5px] w-[10px] -translate-x-1/2">
                <div class="absolute top-0 bottom-0 left-1/2 flex w-px -translate-x-1/2 flex-col">
                  <div class="w-px flex-[4.369975210805412] bg-current" />
                  <div class="w-px flex-[3.3009514819369428] bg-[repeating-linear-gradient(to_bottom,currentColor_0_4px,transparent_4px_8px)]" />
                </div>
              </div>
            </span>
          </section>
        </main>

        <main v-else-if="isPost" class="flex flex-1 flex-col">
          <section class="outer-section-node-offset relative flex !min-h-fit min-h-[450px] min-w-0">
            <span class="relative z-[1] w-4 shrink-0 border-r border-transparent sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true">
              <svg class="pointer-events-none absolute inset-0 text-accent-blue/15 dark:text-blue-300/5" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <pattern id="post-hero-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V-1H-1V0H0ZM0 0V1H24V0V-1H0V0ZM0 24H1V0H0H-1V24H0Z" fill="currentColor" />
                  </svg>
                </pattern>
                <rect width="100%" height="100%" fill="url(#post-hero-grid)" />
              </svg>
            </span>
            <span class="relative z-[1] hidden flex-1 border-x border-transparent lg:block" aria-hidden="true" />
            <div class="relative container-max-w max-md:min-w-0 flex-1 [--node-horizontal-offset:-3.5px]">
              <div class="isolate relative size-full overflow-clip p-4 px-4 py-6 lg:px-12 lg:py-16">
                <header class="relative flex w-full flex-col justify-center gap-6">
                  <a
                    :href="withBase('/')"
                    class="fv-style w-fit text-sm text-accent-blue underline decoration-accent-blue/25 underline-offset-2 hover:decoration-accent-blue/80"
                  >← From The Blog</a>
                  <h1 class="font-plex-serif max-w-[850px] scroll-mt-24 text-balance text-4xl font-normal text-accent-blue sm:text-5xl lg:text-6xl dark:text-blue-300">
                    {{ currentPost.title }}
                  </h1>
                  <div class="flex flex-col gap-2.5">
                    <div class="flex flex-wrap gap-2 md:gap-4">
                      <a
                        v-if="currentPost.authorUrl"
                        :href="currentPost.authorUrl"
                        class="group relative flex items-center underline decoration-accent-blue/25 decoration-1 underline-offset-2 hover:decoration-accent-blue/80 dark:decoration-blue-400/40 dark:hover:decoration-blue-300"
                      >
                        <div class="flex h-6 items-center space-x-2">
                          <span class="inline-grid size-4 shrink-0 place-items-center overflow-hidden rounded-full border border-accent-blue/40 bg-accent-blue/10 font-mono text-[0.6rem] font-bold text-accent-blue">{{ currentPost.initials }}</span>
                          <p class="text-sm text-offgray-1000 dark:text-offgray-200">{{ currentPost.author }}</p>
                        </div>
                      </a>
                      <div v-else class="flex h-6 items-center space-x-2">
                        <span class="inline-grid size-4 shrink-0 place-items-center overflow-hidden rounded-full border border-accent-blue/40 bg-accent-blue/10 font-mono text-[0.6rem] font-bold text-accent-blue">{{ currentPost.initials }}</span>
                        <p class="text-sm text-offgray-1000 dark:text-offgray-200">{{ currentPost.author }}</p>
                      </div>
                    </div>
                    <p class="text-xs text-offgray-600 dark:text-offgray-500">
                      {{ currentPost.displayDate }} · {{ currentPost.categoryLabel }}
                    </p>
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
            <span class="relative z-[1] hidden flex-1 border-x border-transparent lg:block" aria-hidden="true" />
            <span class="relative z-[1] w-4 shrink-0 border-l border-transparent sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true" />
          </section>

          <section class="outer-section-node-offset relative flex min-w-0 border-t border-[var(--border)]">
            <span class="relative z-[1] w-4 shrink-0 border-r border-transparent sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true" />
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true" />
            <div class="relative container-max-w max-md:min-w-0 flex-1 [--node-horizontal-offset:-3.5px]">
              <div class="isolate relative size-full justify-between gap-16 overflow-clip p-4 lg:flex lg:flex-row-reverse lg:items-start lg:gap-16 lg:p-12">
                <aside
                  v-if="tocHeaders.length"
                  class="sticky top-24 hidden w-[256px] flex-none flex-col gap-1 lg:flex"
                  aria-label="Table of contents"
                >
                  <h2 class="subheader mb-2 flex items-center gap-2 text-xs">
                    On this page
                  </h2>
                  <a
                    v-for="h in tocHeaders"
                    :key="h.slug"
                    :href="`#${h.slug}`"
                    class="border-l py-1 pl-3 text-sm transition-colors"
                    :class="activeTocSlug === h.slug ? 'border-accent-blue text-accent-blue' : 'border-[var(--border)] text-offgray-600 hover:border-accent-blue hover:text-accent-blue dark:text-offgray-400'"
                  >{{ h.title }}</a>
                  <div class="mt-4 rounded border border-[var(--border)] bg-[var(--panel)] p-3 shadow-[var(--shadow-blue-alt)]">
                    <strong class="text-sm text-offgray-1000 dark:text-white">What's next?</strong>
                    <a :href="withBase('/')" class="mt-1 block text-sm text-accent-blue">See all posts →</a>
                  </div>
                </aside>
                <div class="zed-article w-full min-w-0 lg:mx-0 lg:max-w-[var(--blog-content-width)]">
                  <Content />
                </div>
              </div>
            </div>
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true" />
            <span class="relative z-[1] w-4 shrink-0 border-l border-transparent sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true" />
          </section>
        </main>

        <main v-else class="flex flex-1 flex-col">
          <section class="outer-section-node-offset relative flex min-w-0 border-t border-[var(--border)] py-10">
            <span class="relative z-[1] w-4 shrink-0 border-r border-transparent sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true" />
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true" />
            <div class="zed-article container-max-w relative flex-1 px-4 lg:px-12">
              <Content />
            </div>
            <span class="relative z-[1] hidden flex-1 border-x border-[var(--border)] lg:block" aria-hidden="true" />
            <span class="relative z-[1] w-4 shrink-0 border-l border-transparent sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true" />
          </section>
        </main>

        <footer class="outer-section-node-offset relative mt-auto flex min-h-fit min-w-0 bg-accent-blue text-offgray-50">
          <span class="relative z-[1] w-4 shrink-0 border-r border-white/10 sm:w-6 md:w-12 lg:border-r-0" aria-hidden="true" />
          <span class="relative z-[1] hidden flex-1 border-x border-white/10 lg:block" aria-hidden="true" />
          <div class="container-max-w flex flex-1 flex-col gap-8 px-4 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-12">
            <div>
              <h3 class="font-plex-serif h6 mb-2 scroll-mt-24 text-balance text-white">
                Zed Industries © 2026
              </h3>
              <hr class="my-2 w-20 border-t border-white/10">
              <p class="flex max-w-md flex-wrap items-center gap-1 text-xs text-white/80">
                Liguwe 的个人博客实验场。
              </p>
            </div>
            <div class="flex flex-wrap gap-4 text-xs">
              <a :href="withBase('/')" class="fv-style-contrast underline decoration-white/25 underline-offset-2 hover:decoration-white">Blog</a>
              <a href="https://github.com/liguwe" class="fv-style-contrast underline decoration-white/25 underline-offset-2 hover:decoration-white">GitHub</a>
              <button type="button" class="fv-style-contrast underline decoration-white/25 underline-offset-2 hover:decoration-white" @click="cycleTheme">
                {{ themeLabel }}
              </button>
            </div>
          </div>
          <span class="relative z-[1] hidden flex-1 border-x border-white/10 lg:block" aria-hidden="true" />
          <span class="relative z-[1] w-4 shrink-0 border-l border-white/10 sm:w-6 md:w-12 lg:border-l-0" aria-hidden="true" />
        </footer>
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
        <a v-if="latestPost" :href="withBase(latestPost.href)" class="rounded-md px-3 py-2 text-offgray-1000 hover:bg-accent-blue/10 dark:text-white" @click="menuOpen = false">Latest Post</a>
        <button type="button" class="rounded-md px-3 py-2 text-left text-offgray-1000 hover:bg-accent-blue/10 dark:text-white" @click="openCommand">
          Search
        </button>
        <button type="button" class="rounded-md px-3 py-2 text-left text-offgray-1000 hover:bg-accent-blue/10 dark:text-white" @click="cycleTheme">
          {{ themeLabel }}
        </button>
      </div>
    </aside>

    <div
      class="pointer-events-none fixed inset-0 z-[200] flex justify-center bg-black/0 opacity-0 transition-[opacity,visibility] duration-200"
      :class="commandOpen ? 'pointer-events-auto visible bg-black/45 opacity-100' : 'invisible'"
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
      @click.self="commandOpen = false"
    >
      <div
        class="fv-style mt-[12vh] w-[min(620px,100%)] translate-y-2 scale-[0.98] overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--panel)] opacity-0 shadow-[0_24px_80px_rgba(0,0,0,0.25),var(--shadow-blue-alt)] transition-transform duration-200"
        :class="commandOpen ? 'translate-y-0 scale-100 opacity-100' : ''"
      >
        <div class="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
          <Search class="size-4 shrink-0 text-offgray-500" stroke-width="2" />
          <input v-model="query" class="command-input w-full border-0 bg-transparent text-base text-offgray-1000 outline-none dark:text-white" placeholder="搜索文章…">
        </div>
        <div class="command-results max-h-[360px] overflow-auto p-2">
          <a
            v-for="post in searchResults"
            :key="post.id"
            :href="withBase(post.href)"
            class="fv-style grid gap-1 rounded-md px-3 py-2 hover:bg-accent-blue/10 dark:hover:bg-accent-blue/15"
            @click="commandOpen = false"
          >
            <span class="text-sm font-medium text-offgray-1000 dark:text-white">{{ post.title }}</span>
            <small class="font-mono text-[0.68rem] text-offgray-600 dark:text-offgray-400">{{ post.categoryLabel }} · {{ post.displayDate }}</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
