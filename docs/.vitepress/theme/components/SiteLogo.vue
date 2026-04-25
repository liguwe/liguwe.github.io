<script setup>
import { withBase } from "vitepress";
</script>

<template>
    <a
        :href="withBase('/')"
        aria-label="832 首页"
        class="fv-style outline-hidden flex flex-none items-center gap-2.5 rounded [-webkit-touch-callout:none]"
    >
        <svg
            class="h-[26px] w-[26px] shrink-0 text-accent-blue dark:text-[color-mix(in_oklch,var(--accent-blue)_82%,white)]"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <!-- 细密水平排线（字身内填充，类似 Zed 线稿质感） -->
                <pattern
                    id="site-logo-hatch"
                    width="2.25"
                    height="2.25"
                    patternUnits="userSpaceOnUse"
                >
                    <line
                        x1="0"
                        y1="2.12"
                        x2="2.25"
                        y2="2.12"
                        stroke="currentColor"
                        stroke-width="0.5"
                        opacity="0.42"
                    />
                </pattern>
                <!-- 框内极淡工程网格底 -->
                <pattern
                    id="site-logo-microgrid"
                    width="7"
                    height="7"
                    patternUnits="userSpaceOnUse"
                >
                    <path
                        d="M0 7V0H7"
                        stroke="currentColor"
                        stroke-width="0.35"
                        opacity="0.14"
                    />
                </pattern>
                <clipPath id="site-logo-eight-clip">
                    <path
                        fill="black"
                        fill-rule="evenodd"
                        d="M16 7.25c-3.05 0-5.5 2.28-5.5 5.1 0 1.55.72 2.95 1.85 3.85a.42.42 0 0 1 0 .68c-1.13.9-1.85 2.3-1.85 3.85 0 2.82 2.45 5.1 5.5 5.1s5.5-2.28 5.5-5.1c0-1.55-.72-2.95-1.85-3.85a.42.42 0 0 1 0-.68c1.13-.9 1.85-2.3 1.85-3.85 0-2.82-2.45-5.1-5.5-5.1zm0 2.05c1.68 0 3.05 1.32 3.05 2.95s-1.37 2.95-3.05 2.95-3.05-1.32-3.05-2.95 1.37-2.95 3.05-2.95zm0 7.9c1.68 0 3.05 1.32 3.05 2.95s-1.37 2.95-3.05 2.95-3.05-1.32-3.05-2.95 1.37-2.95 3.05-2.95z"
                    />
                </clipPath>
                <clipPath id="site-logo-frame-inner">
                    <rect
                        x="3.35"
                        y="3.35"
                        width="25.3"
                        height="25.3"
                        rx="5.65"
                    />
                </clipPath>
            </defs>

            <!-- 圆角框内微网格 -->
            <g clip-path="url(#site-logo-frame-inner)">
                <rect width="32" height="32" fill="url(#site-logo-microgrid)" />
            </g>

            <!-- 外框 -->
            <rect
                x="2.25"
                y="2.25"
                width="27.5"
                height="27.5"
                rx="6"
                stroke="currentColor"
                stroke-width="1.65"
            />

            <!-- 「8」字身：排线填充 + 外轮廓 -->
            <g clip-path="url(#site-logo-eight-clip)">
                <rect
                    x="6"
                    y="5"
                    width="20"
                    height="22"
                    fill="url(#site-logo-hatch)"
                />
            </g>
            <path
                fill="none"
                stroke="currentColor"
                stroke-width="1.15"
                stroke-linejoin="round"
                d="M16 7.25c-3.05 0-5.5 2.28-5.5 5.1 0 1.55.72 2.95 1.85 3.85a.42.42 0 0 1 0 .68c-1.13.9-1.85 2.3-1.85 3.85 0 2.82 2.45 5.1 5.5 5.1s5.5-2.28 5.5-5.1c0-1.55-.72-2.95-1.85-3.85a.42.42 0 0 1 0-.68c1.13-.9 1.85-2.3 1.85-3.85 0-2.82-2.45-5.1-5.5-5.1zm0 2.05c1.68 0 3.05 1.32 3.05 2.95s-1.37 2.95-3.05 2.95-3.05-1.32-3.05-2.95 1.37-2.95 3.05-2.95zm0 7.9c1.68 0 3.05 1.32 3.05 2.95s-1.37 2.95-3.05 2.95-3.05-1.32-3.05-2.95 1.37-2.95 3.05-2.95z"
            />

            <!-- 腰部折断线（Zed 式断线细节） -->
            <path
                stroke="currentColor"
                stroke-width="0.95"
                stroke-linecap="round"
                opacity="0.9"
                d="M11.2 15.9h3.2M17.6 15.9h3.2"
            />
        </svg>
        <span
            class="font-plex-serif text-[1.35rem] font-medium tracking-[-0.02em] text-offgray-1000 dark:text-white"
        >
            832
        </span>
    </a>
</template>
