---
layout: home
title: index
---



<div class="div-space" style="height: 12px"/>


<!--@include: ./tip.md-->


<script setup>
import pages from '../yuque.json';
</script>
<ul style="width: 800px;
    margin: 0 auto;
    padding: 24px;
    min-height: calc(100vh - 64px);">
    <li style="line-height: 36px;list-style: disc" 
        v-for="(page,index) in pages"
        :key="page.title + index"
        v-show="page?.title?.indexOf('CS.') === 0">
         <a target="_blank"  :href="'/yuque/' + page.slug + '.html'" style="color:#10b981">
            {{page.title}}（{{page.updated_at.split('T')[0]}}）
        </a>
    </li>
</ul>

<style lang="less">
.custom-block {
    width: 800px;
    margin:0 auto;
    position: relative;
}
</style>









