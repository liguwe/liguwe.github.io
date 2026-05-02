<script setup>
import Giscus from "@giscus/vue";
import { computed } from "vue";
import { useData } from "vitepress";

const { isDark } = useData();

const giscusTheme = computed(() => (isDark.value ? "dark" : "light"));

const repo = "liguwe/liguwe.github.io";
const repoId = "R_kgDOSLD0oA";
const category = "General";
const categoryId = "DIC_kwDOSLD0oM4C8KPe";
</script>

<template>
    <section class="giscus-comments" aria-labelledby="giscus-comments-title">
        <header class="giscus-comments__header">
            <h2 id="giscus-comments-title">评论</h2>
        </header>
        <div class="giscus-comments__body">
            <Giscus
                :repo="repo"
                :repo-id="repoId"
                :category="category"
                :category-id="categoryId"
                mapping="pathname"
                strict="0"
                reactions-enabled="1"
                emit-metadata="0"
                input-position="bottom"
                :theme="giscusTheme"
                lang="zh-CN"
                loading="lazy"
            />
        </div>
    </section>
</template>

<style scoped>
.giscus-comments {
    margin-top: 3rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
    color: var(--text);
}

.giscus-comments__header {
    margin-bottom: 1rem;
}

.giscus-comments__header h2 {
    margin: 0;
    font-family: var(--font-serif), ui-serif, Georgia, serif;
    font-size: 1.35rem;
    font-weight: 500;
    line-height: 1.2;
    color: var(--text-strong);
}

.giscus-comments__header h2::before {
    content: "#";
    margin-right: 0.45rem;
    color: color-mix(in oklch, var(--accent-blue), transparent 20%);
    font-family: var(--font-mono), monospace;
    font-size: 0.75em;
}

.giscus-comments__body {
    min-width: 0;
}

.giscus-comments__body :deep(giscus-widget) {
    display: block;
    color-scheme: light;
}

:global(html.dark) .giscus-comments__body :deep(giscus-widget) {
    color-scheme: dark;
}
</style>
