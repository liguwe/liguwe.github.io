<script setup>
import { withBase } from 'vitepress'
</script>

<template>
  <a
    :href="withBase('/')"
    aria-label="liguwe's site 首页"
    class="fv-style outline-hidden flex flex-none items-center gap-2.5 rounded [-webkit-touch-callout:none]"
  >
    <span
      class="flex size-[1.85rem] shrink-0 items-center justify-center rounded-sm border border-[color-mix(in_oklch,var(--border),transparent_12%)] bg-[color-mix(in_oklch,var(--nav-bg-color),#fff_12%)] text-offgray-1000 shadow-[var(--shadow-blue-alt)] dark:text-white"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        class="size-[18px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="site-logo-grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M0 4V0H4" stroke="currentColor" stroke-width="0.55" opacity="0.22" />
          </pattern>
          <pattern id="site-logo-stripe" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="4" stroke="var(--accent-blue)" stroke-width="1" opacity="0.45" />
          </pattern>
        </defs>
        <path
          d="M5 5.25H19V18.75H5z"
          fill="color-mix(in oklch, currentColor, transparent 94%)"
          opacity="0.9"
        />
        <path
          d="M5 5.25H19V18.75H5z"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linejoin="round"
        />
        <path
          d="M5 5.25H19V18.75H5z"
          fill="url(#site-logo-grid)"
          opacity="0.9"
        />
        <path
          d="M5 5.25H19V18.75H5z"
          fill="url(#site-logo-stripe)"
          opacity="0.4"
        />
        <path
          d="M5 9.25H19"
          stroke="var(--accent-blue)"
          stroke-width="1.15"
          opacity="0.5"
        />
        <path
          d="M8.1 15.9L11.4 8.1L14.7 15.9"
          stroke="var(--accent-blue)"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.45 13.2H13.35"
          stroke="var(--accent-blue)"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M16.7 8.25V15.75"
          stroke="currentColor"
          stroke-width="1.75"
        />
        <path
          d="M15.2 8.25H18.2"
          stroke="currentColor"
          stroke-width="1.35"
          stroke-linecap="round"
          opacity="0.9"
        />
        <path
          d="M15.2 15.75H18.2"
          stroke="currentColor"
          stroke-width="1.35"
          stroke-linecap="round"
          opacity="0.9"
        />
        <circle
          cx="6.9"
          cy="6.9"
          r="0.9"
          fill="var(--accent-blue)"
        />
        <circle
          cx="17.1"
          cy="17.1"
          r="0.9"
          fill="currentColor"
          opacity="0.45"
        />
      </svg>
    </span>
    <span
      class="font-plex-serif text-[1.15rem] font-medium tracking-[-0.02em] text-offgray-1000 sm:text-[1.25rem] dark:text-white"
    >
      liguwe's site
    </span>
  </a>
</template>
