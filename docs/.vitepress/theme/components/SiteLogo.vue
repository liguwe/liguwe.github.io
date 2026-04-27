<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <a
    :href="withBase('/')"
    aria-label="liguwe's site 首页"
    class="fv-style -mx-1.5 -my-1 flex flex-none items-center gap-[9px] rounded px-1.5 py-1 outline-hidden [-webkit-touch-callout:none]"
  >
    <img
      :src="withBase('/favicon.png')"
      alt=""
      class="size-[24px] shrink-0 rounded-full object-cover"
      aria-hidden="true"
    >
    <span
      class="font-plex-serif text-[1.15rem] font-medium tracking-[-0.02em] text-offgray-1000 sm:text-[1.25rem] dark:text-white"
    >
      liguwe's site
    </span>
  </a>
</template>
