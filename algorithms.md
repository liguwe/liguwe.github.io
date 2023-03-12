---
layout: home
title: index
---



<div class="div-space" style="height: 12px"/>

<!--@include: ./include-tip.md-->
<!--@include: ./include-script.md-->

<ul style="width: 800px;
    margin: 0 auto;
    padding: 24px;
    min-height: calc(100vh - 64px);">
    <li style="line-height: 36px;list-style: disc" 
        v-for="(page,index) in pages.filter(page => page?.title?.indexOf('算法.') === 0)"
        :key="page.title + index">
        <a target="_blank"  :href="'/yuque/' + page.slug + '.html'" style="color:#10b981">
            {{page.title}}（{{page.created_at.split('T')[0]}}）
        </a>
    </li>
</ul>

<!--@include: ./include-style.md-->









