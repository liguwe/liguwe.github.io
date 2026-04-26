<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <a
    :href="withBase('/')"
    aria-label="liguwe's site 首页"
    class="fv-style outline-hidden flex flex-none items-center gap-2.5 rounded [-webkit-touch-callout:none]"
  >
    <span class="select-none text-[1.35rem] leading-none" aria-hidden="true">📚</span>
    <span
      class="font-plex-serif text-[1.15rem] font-medium tracking-[-0.02em] text-offgray-1000 sm:text-[1.25rem] dark:text-white"
    >
      liguwe's site
    </span>
  </a>
</template>
