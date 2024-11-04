<script>
import {
    defineAsyncComponent,
    hydrateOnIdle,
    hydrateOnVisible,
    hydrateOnInteraction,
    hydrateOnMediaQuery,
} from "vue";

const AsyncComp = defineAsyncComponent({
    loader: () => import("./Comp.vue"),
    hydrate: hydrateOnIdle(/* 传递可选的最大超时 */),
    hydrate: hydrateOnVisible(), // 仅在元素可见时开始加载
    // 仅在元素可见时开始加载，且在元素进入视口100px之前开始加载
    hydrate: hydrateOnVisible({ rootMargin: "100px" }),
    //当指定的媒体查询匹配时进行激活。
    hydrate: hydrateOnMediaQuery("(max-width:500px)"),
    // 交互时激活
    hydrate: hydrateOnInteraction("click"),
});
</script>
