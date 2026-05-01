import '@fontsource-variable/inter/index.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-serif/latin-400.css'
import '@fontsource/ibm-plex-serif/latin-500.css'

/* VitePress 默认文档样式：Markdown / 代码块 / 自定义块 / 目录变量（不含整页 Layout） */
import 'vitepress/dist/client/theme-default/styles/vars.css'
import 'vitepress/dist/client/theme-default/styles/base.css'
import 'vitepress/dist/client/theme-default/styles/icons.css'
import 'vitepress/dist/client/theme-default/styles/utils.css'
import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-code-group.css'
import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'

import Layout from './Layout.vue'
import './styles.css'
import '../tailwind.css'

function getZoomableImages() {
  return Array.from(document.querySelectorAll('.vp-doc img:not(.no-zoom)'))
    .filter((image) => !image.closest('a'))
}

export default {
  Layout,
  async enhanceApp({ router }) {
    if (import.meta.env.SSR) return

    const { default: mediumZoom } = await import('medium-zoom')
    const zoom = mediumZoom({
      margin: 0,
      background: 'rgba(8, 12, 18, 0.86)',
      scrollOffset: 40,
    })

    const refreshZoom = () => {
      window.requestAnimationFrame(() => {
        zoom.detach()
        zoom.attach(getZoomableImages())
      })
    }

    const previousAfterRouteChange =
      router.onAfterRouteChange ?? router.onAfterRouteChanged

    router.onAfterRouteChange = async (to) => {
      await previousAfterRouteChange?.(to)
      refreshZoom()
    }

    refreshZoom()
  },
}
