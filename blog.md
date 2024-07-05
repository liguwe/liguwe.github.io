---
title: home
layout: home
---
<script setup>
import items from './sidebar.json';
import { ref } from 'vue';
const menus = ref(items);

</script>
<div class="liguwe-block">
    <template v-for="(posts,index) in menus" :key="posts.text">
        <div class="liguwe-block-items" v-if="posts.items.length > 0">
               <div class="liguwe-block-title" :class="{'open':posts.collapsed}" @click="posts.collapsed = !posts.collapsed;">
                    <svg viewBox="0 0 24 24"><path d="M9,19c-0.3,0-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l5.3-5.3L8.3,6.7c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l6,6c0.4,0.4,0.4,1,0,1.4l-6,6C9.5,18.9,9.3,19,9,19z"></path></svg>
                    <p class="liguwe-block-title-text">
                        <span class="liguwe-a-left" :title="posts.text">{{posts.text}}</span>
                    </p>
               </div>
                <div class="liguwe-block-content" v-show="posts.collapsed">
                   <div class="liguwe-block-item" v-for="(post,index) in posts.items"  :key="post.index">
                       <a class="liguwe-a" :href="post.link">
                         <span class="liguwe-a-left" :title="post.text">{{post.text}}</span>
                         <span class="liguwe-a-middle"/>
                         <span class="liguwe-a-right">{{post.createdAt.split(' ')[0]}}</span>
                        </a> 
                   </div>
                </div>
            </div>
    </template>
</div>
