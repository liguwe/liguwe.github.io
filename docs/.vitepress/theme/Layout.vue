<script setup>
import { Content, useData, useRoute } from 'vitepress'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { categories, posts } from './posts'

const { frontmatter, page } = useData()
const route = useRoute()

const activeCategory = ref('all')
const commandOpen = ref(false)
const menuOpen = ref(false)
const query = ref('')
const theme = ref('system')
let mediaQuery

const isHome = computed(() => page.value.relativePath === 'index.md')
const isPost = computed(() => page.value.relativePath.startsWith('blog/') && frontmatter.value.id)

const featuredPosts = computed(() => posts.filter((post) => post.featured).slice(0, 3))
const visiblePosts = computed(() => {
  if (activeCategory.value === 'all') return posts
  if (activeCategory.value === 'featured') return posts.filter((post) => post.featured)
  return posts.filter((post) => post.category === activeCategory.value)
})
const searchResults = computed(() => {
  const value = query.value.trim().toLowerCase()
  if (!value) return posts.slice(0, 6)
  return posts.filter((post) => {
    return [post.title, post.excerpt, post.categoryLabel].join(' ').toLowerCase().includes(value)
  })
})
const currentPost = computed(() => {
  return posts.find((post) => post.id === frontmatter.value.id) || posts[0]
})
const themeLabel = computed(() => {
  if (theme.value === 'light') return 'Light'
  if (theme.value === 'dark') return 'Dark'
  return 'System'
})

function applyTheme(value) {
  if (typeof document === 'undefined') return
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

onMounted(() => {
  theme.value = localStorage.getItem('theme') || 'system'
  applyTheme(theme.value)
  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', () => {
    if (theme.value === 'system') applyTheme('system')
  })
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <div class="site-root">
    <div class="noise" aria-hidden="true" />
    <div class="nav-fill nav-fill-left" aria-hidden="true" />
    <div class="nav-fill nav-fill-right" aria-hidden="true" />

    <div class="mobile-backdrop" :class="{ active: menuOpen }" @click="menuOpen = false" />
    <aside class="mobile-drawer" :class="{ active: menuOpen }" :aria-hidden="!menuOpen" :inert="!menuOpen" aria-label="Mobile navigation">
      <div class="drawer-logo">Zed</div>
      <a href="/" @click="menuOpen = false">Blog</a>
      <a href="/blog/9999-0000/" @click="menuOpen = false">Latest Post</a>
      <button type="button" @click="openCommand">Search</button>
      <button type="button" @click="cycleTheme">{{ themeLabel }}</button>
    </aside>

    <div class="site-frame" :class="{ drawerActive: menuOpen }">
      <header class="topbar node-section">
        <span class="side-rail border-right" aria-hidden="true" />
        <span class="outer-rail border-x" aria-hidden="true" />
        <nav class="nav-inner panel-with-nodes" aria-label="Site navigation">
          <a class="brand" href="/" aria-label="Go back to homepage">
            <span class="brand-mark">Z</span>
            <span class="brand-word">Zed</span>
          </a>

          <div class="desktop-nav">
            <div class="nav-popover">
              <button type="button" class="nav-button">
                Product
                <span class="chevron">⌄</span>
              </button>
              <div class="popover-panel">
                <a href="/">Blog Home</a>
                <a href="/blog/9999-0000/">Latest Post</a>
                <a href="/blog/9999-0001/">Design Notes</a>
              </div>
            </div>
            <div class="nav-popover">
              <button type="button" class="nav-button">
                Resources
                <span class="chevron">⌄</span>
              </button>
              <div class="popover-panel">
                <a href="/blog/9999-0002/">Knowledge Base</a>
                <a href="/blog/9999-0003/">Static Site</a>
                <a href="/blog/9999-0004/">Review Log</a>
              </div>
            </div>
            <a class="nav-link" href="/">Extensions</a>
            <a class="nav-link" href="/">Docs</a>
            <a class="nav-link" href="/">Pricing</a>
          </div>

          <div class="nav-actions">
            <button type="button" class="icon-button search-button" aria-label="Command menu" @click="openCommand">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4.2-4.2" />
              </svg>
              <kbd>⌘ K</kbd>
            </button>
            <button type="button" class="theme-button" :aria-label="`Theme: ${themeLabel}`" @click="cycleTheme">
              <span class="theme-dot" />
              <span>{{ themeLabel }}</span>
            </button>
            <a class="download-button" href="https://github.com/liguwe">GitHub</a>
            <button type="button" class="menu-button" aria-label="Open menu" @click="menuOpen = true">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
        <span class="outer-rail border-x" aria-hidden="true" />
        <span class="side-rail border-left" aria-hidden="true" />
      </header>

      <main v-if="isHome">
        <section class="page-section hero-section">
          <span class="side-rail rail-texture" aria-hidden="true" />
          <span class="outer-rail rail-line" aria-hidden="true" />
          <div class="content-panel panel-with-nodes">
            <div class="hero-copy">
              <h1>From The Blog</h1>
              <p>记录工程实践、设计细节和长期写作中的判断。</p>
            </div>
            <div class="featured-grid">
              <a v-for="post in featuredPosts" :key="post.id" class="featured-card" :href="post.href">
                <span v-if="post.newest" class="newest-badge">Newest</span>
                <span class="card-category">{{ post.categoryLabel }}</span>
                <h2>{{ post.title }}</h2>
                <p>{{ post.excerpt }}</p>
                <span class="card-date">{{ post.displayDate }}</span>
              </a>
            </div>
          </div>
          <span class="outer-rail rail-line" aria-hidden="true" />
          <span class="side-rail rail-texture" aria-hidden="true" />
        </section>

        <section class="page-section list-section">
          <span class="side-rail rail-line" aria-hidden="true" />
          <span class="outer-rail rail-line" aria-hidden="true" />
          <div class="content-panel panel-with-nodes">
            <div class="category-bar">
              <p>Categories</p>
              <div class="category-tabs" role="tablist" aria-label="Blog categories">
                <button
                  v-for="category in categories"
                  :key="category.id"
                  type="button"
                  :class="{ active: activeCategory === category.id }"
                  @click="activeCategory = category.id"
                >
                  {{ category.label }}
                </button>
              </div>
            </div>

            <div class="post-list">
              <a v-for="post in visiblePosts" :key="post.id" class="post-row" :href="post.href">
                <svg class="row-pattern" aria-hidden="true">
                  <defs>
                    <pattern :id="`pattern-${post.id}`" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="4" stroke="currentColor" stroke-width="1.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" :fill="`url(#pattern-${post.id})`" />
                </svg>
                <div class="post-title-group">
                  <h2>{{ post.title }}</h2>
                  <div class="avatar-stack" aria-label="Author">
                    <span class="avatar">{{ post.initials }}</span>
                  </div>
                </div>
                <span v-if="post.featured" class="tag">Featured</span>
                <span class="row-divider" />
                <time>{{ post.displayDate }}</time>
              </a>
            </div>
          </div>
          <span class="outer-rail rail-line" aria-hidden="true" />
          <span class="side-rail rail-line" aria-hidden="true" />
        </section>
      </main>

      <main v-else-if="isPost">
        <section class="page-section post-hero">
          <span class="side-rail rail-texture" aria-hidden="true" />
          <span class="outer-rail rail-line" aria-hidden="true" />
          <div class="content-panel panel-with-nodes">
            <div class="post-hero-copy">
              <a class="back-link" href="/">← From The Blog</a>
              <h1>{{ currentPost.title }}</h1>
              <div class="post-meta">
                <span class="avatar">{{ currentPost.initials }}</span>
                <span>{{ currentPost.author }}</span>
                <span class="meta-separator">|</span>
                <time>{{ currentPost.displayDate }}</time>
                <span class="tag">{{ currentPost.categoryLabel }}</span>
              </div>
            </div>
          </div>
          <span class="outer-rail rail-line" aria-hidden="true" />
          <span class="side-rail rail-texture" aria-hidden="true" />
        </section>

        <section class="page-section article-section">
          <span class="side-rail rail-line" aria-hidden="true" />
          <span class="outer-rail rail-line" aria-hidden="true" />
          <article class="content-panel panel-with-nodes article-shell">
            <aside class="toc" aria-label="Table of contents">
              <p>On this page</p>
              <a v-for="heading in currentPost.headings" :key="heading.id" :href="`#${heading.id}`">{{ heading.title }}</a>
              <div class="callout-card">
                <strong>What's next?</strong>
                <a href="/">See all posts →</a>
              </div>
            </aside>
            <div class="article-content">
              <Content />
            </div>
          </article>
          <span class="outer-rail rail-line" aria-hidden="true" />
          <span class="side-rail rail-line" aria-hidden="true" />
        </section>
      </main>

      <main v-else>
        <section class="page-section article-section">
          <span class="side-rail rail-line" aria-hidden="true" />
          <span class="outer-rail rail-line" aria-hidden="true" />
          <article class="content-panel panel-with-nodes article-shell">
            <div class="article-content">
              <Content />
            </div>
          </article>
          <span class="outer-rail rail-line" aria-hidden="true" />
          <span class="side-rail rail-line" aria-hidden="true" />
        </section>
      </main>

      <footer class="footer-section page-section">
        <span class="side-rail rail-texture" aria-hidden="true" />
        <span class="outer-rail rail-line" aria-hidden="true" />
        <div class="content-panel panel-with-nodes footer-content">
          <div>
            <h2>Zed Industries © 2026</h2>
            <p>Liguwe 的个人博客实验场。</p>
          </div>
          <div class="footer-links">
            <a href="/">Blog</a>
            <a href="https://github.com/liguwe">GitHub</a>
            <button type="button" @click="cycleTheme">{{ themeLabel }}</button>
          </div>
        </div>
        <span class="outer-rail rail-line" aria-hidden="true" />
        <span class="side-rail rail-texture" aria-hidden="true" />
      </footer>
    </div>

    <div
      class="command-overlay"
      :class="{ active: commandOpen }"
      :aria-hidden="!commandOpen"
      :inert="!commandOpen"
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
      @click.self="commandOpen = false"
    >
      <div class="command-panel">
        <div class="command-input-wrap">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4.2-4.2" />
          </svg>
          <input v-model="query" class="command-input" placeholder="搜索文章..." />
        </div>
        <div class="command-results">
          <a v-for="post in searchResults" :key="post.id" :href="post.href" @click="commandOpen = false">
            <span>{{ post.title }}</span>
            <small>{{ post.categoryLabel }} · {{ post.displayDate }}</small>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
