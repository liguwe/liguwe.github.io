<script setup>
import { withBase } from "vitepress";

const logoLight = withBase("/8-mark-light.svg");
const logoDark = withBase("/8-mark-dark.svg");
</script>

<template>
  <a
    :href="withBase('/')"
    aria-label="832 首页"
    class="fv-style outline-hidden flex flex-none items-center gap-2.5 rounded [-webkit-touch-callout:none]"
  >
    <img
      :src="logoLight"
      alt=""
      width="26"
      height="26"
      class="h-[26px] w-[26px] shrink-0 object-contain dark:hidden"
      decoding="async"
    />
    <img
      :src="logoDark"
      alt=""
      width="26"
      height="26"
      class="hidden h-[26px] w-[26px] shrink-0 object-contain dark:block"
      decoding="async"
    />
    <span
      class="font-plex-serif text-[1.35rem] font-medium tracking-[-0.02em] text-offgray-1000 dark:text-white"
    >
      832
    </span>
  </a>
</template>
