---
title: 0011.FE.Vue.js 3 的整体设计思路
urlname: ycbhape6c66qc536
date: '2023-03-25 07:47:30 +0800'
tags: []
categories: []
---

# Vue.js 3 的整体设计思路

## 如何描述 UI

三种方式：

1.  `声明式描述 UI`，比如 `<div class='btn' id='test' @click="handle"> button </div>`， 包含信息 tag 名，属性，事件，层级关系
2.  使用 `JavaScript对象` 来描述 UI，如下代码

```javascript
const title = {
	tag: 'h1', // tag 名称
	props:{ // 属性与事件
		onClick:handler
	}
	children:[ // 子节点
		{tag: 'span'}
	]
}
```

3. `虚拟 DOM` 描述 UI，比如 vue 中的 `渲染函数 - h` ，如下代码：

```javascript
import {h} from "vue";
export default{
	render(){
		// 虚拟 DOM
		return h('h1',{ onClick: fn });

		// 或者直接返回 js 对的
		return {
			tag: 'h1', // tag 名称
			props:{ // 属性与事件
				onClick:handler
			}
			children:[ // 子节点
				{tag: 'span'}
			]
		}
	}
}
```

> `h` 返回的其实就是 `js 对象`， `h函数`就是辅助创建虚拟 DOM 的工具函数而已，所**以他俩其实是一个东西**

- 哪种方式更灵活呢？
  - 答案是：`JavaScript 对象`（或`虚拟 DOM` ） 的方式，
    - 比如表现 `H1-H6` ，使用 `tag:H${index}` 即可
    - 又比如说，`jsx`的方式实现 `递归树`，更方便
- 那种方式更直观呢？当然是 `模板`

## 渲染函数，即上面的 `render 方法`

如 vue 会根据 返回的`虚拟 DOM` ， 把组件渲染出来。

## 渲染函数 → 渲染器

`渲染器`的作用，就是把 `虚拟 DOM`，如  `h('div','hello')`   转成 `真实的 DOM`

> 这里再强调一下，`h('div','hello')` 返回的其实就一个 `用于表示 UI 的 js 对象`

如何实现一个`渲染器`?

```javascript
const vnode = {}; // 用于描述 UI 的 js 对象。
function renderer(vnode,container){
	1. 根据 vnode.tag 创建元素
	2. 添加 props 和 事件
	3. 处理 children，递归调用 renderer
}
```

所以，`渲染器`的本质是，递归遍历 `vdom` , 调用`原生 DOM API` 完成真实的 `DOM 创建`，但精髓在于，**如何 diff 更新**

## 组件的本质？

组件是`一组虚拟DOM元素`的封装，他可以是一个返回虚拟 DOM 的`函数`，也可以是一个`对象`，然后再用 `渲染器` 进行渲染。

所以，渲染时需要判断 `vnode.tag = function | object | string ?` ,分别处理。

## 模板编译器：声明式描述 UI →   虚拟 DOM 方式描述 UI

编译器其实就是把 `模板` 编译成 `渲染函数` ，比如：一个标准`vue模板`

```html
<template>
  <div @click="fn"></div>
</template>
<script>
  export default{
  	data(){},
  	methond(){
  		fn(){}
  	},
  	render(){
  		return h('div',{onclick:fn})
  	}
  }
</script>
```

最终编译成的样子如下：

```javascript
export default{
	data(){},
	methond(){
		fn(){}
	},
	render(){
		return h('div',{onclick:fn})
	}
}
```

## 最后

- 组件的实现依赖于 `渲染器`
- 模板的编译 依赖于 `编译器`
- `渲染器` 和  `编译器` 是存在`信息交流`的，比如虚拟 DOM 对象中 的 `patchFlages` 属性，用于标识是 `动态属性` 和 `静态属性`？ 互相配合使得性能得到提升

## 参考

- 《vue.js 设计与实现》
