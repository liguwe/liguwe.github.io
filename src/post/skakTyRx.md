
# Vue3 中 Transition 组件的实现原理

`#vue` 


## 目录
<!-- toc -->
 ## 核心原理 

Transition 组件的实现比想象中简单得多，它的**核心原理**是：

- 当 DOM 元素被`挂载时`，将**动效**附加到该 DOM 元素上； 
- 当 DOM 元素被`卸载时`，不要立即卸载 DOM 元素，而是等到附加到该 DOM 元素上的**动效执行完成后**再卸载它。

## 原生 DOM 的过渡实现原理

简单说就是，如果使用 JS 为 DOM 元素添加进场和离场的动效。

![|720](https://832-1310531898.cos.ap-beijing.myqcloud.com/545fb51c3790dac61166a5a7ae72d606.png)

但上面的代码，我们执行会发现不符合预期，这是因为都是`当前帧`绘制了，下面的代码就符合预期

![|672](https://832-1310531898.cos.ap-beijing.myqcloud.com/b34413de3d3674ef0ce3ec8b64afda80.png)

 
 为什么 `requestAnimationFrame` 要嵌套两次？

```javascript
// 一帧的处理流程
JavaScript → Style → Layout → Paint → Composite

// 第一帧
rAF(() => {
  // 在这里修改 DOM
  element.style.width = '100px'
  // 这些修改会在当前帧末尾应用
})

// 第二帧
rAF(() => {
  // 这时 DOM 已经更新完成
  // 可以安全地读取新的 DOM 状态
})

总结：
1. 双重 rAF 确保 DOM 更新完成后再读取
2. 第一帧用于应用改变
3. 第二帧用于安全地读取更新后的值
4. 主要用于需要精确测量 DOM 变化的场景
5. 在简单的动画或不需要测量的场景下，单次 rAF 就足够了
```


最后 通过监听元素的 `transitionend 事件`来完成收尾工作，如下：

![|720](https://832-1310531898.cos.ap-beijing.myqcloud.com/c533b909a9f09e46fb8c4e81251ae13c.png)

所以总结下就是三个阶段：

- beforeEnter 阶段：添加 enter-from 和 enter-active 类。 
- enter 阶段：在下一帧中移除 enter-from 类，添加 enter-to。 
- 进场动效结束：移除 enter-to 和 enter-active 类

![](https://832-1310531898.cos.ap-beijing.myqcloud.com/6411de1206e237b995eb09b237262567.png)

### 最终代码，再封装

```html
<head>
<style>
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}

.enter-active, .leave-active {
  transition: transform 1s ease-in-out;
}
.enter-from, .leave-to {
  transform: translateX(200px);
}
.enter-to, .leave-from {
  transform: translateX(0);
}
</style>

</head>

<body>

<div id="app"></div>

<script>

const container = document.querySelector('#app')

const el = document.createElement('div')
el.classList.add('box')

// before enter
el.classList.add('enter-from')
el.classList.add('enter-active')

container.appendChild(el)
// enter
nextFrame(() => {
  el.classList.remove('enter-from')
  el.classList.add('enter-to')

  el.addEventListener('transitionend', () => {
    el.classList.remove('enter-to')
    el.classList.remove('enter-active')
  })
})


function nextFrame(cb) {
  requestAnimationFrame(() => {
    requestAnimationFrame(cb)
  })
}

el.addEventListener('click', () => {
  const performRemove = () => el.parentNode.removeChild(el)
  el.classList.add('leave-from')
  el.classList.add('leave-active')

  // document.body.offsetHeight

  nextFrame(() => {
    el.classList.remove('leave-from')
    el.classList.add('leave-to')

    el.addEventListener('transitionend', () => {
      el.classList.remove('leave-to')
      el.classList.remove('leave-active')

      performRemove()
    })
  })
})

</script>

</body>

```

>  注：`nextFrame` 的实现有两个 `requestAnimationFrame` 嵌套

## Transition 组件的实现原理

更多参考流程图：

[https://www.figma.com/file/yadsH3JL06697MH3uWxPXd/2023.06.LOG?type=whiteboard&node-id=20-77&t=h8yXeRi9xblhKVhW-4](https://www.figma.com/file/yadsH3JL06697MH3uWxPXd/2023.06.LOG?type=whiteboard&node-id=20-77&t=h8yXeRi9xblhKVhW-4)

### 总结

Transition 组件的实现原理：我们将过渡相关的钩子函数定义到虚拟节点的 `vnode.transition对象`中。渲染器在执行`挂载和卸载`操作时，会优先检查该虚拟节点是否需要进行过渡，如果需要， 则会在`合适的时机`执行 `vnode.transition 对象`中定义的过渡相关钩子函数。

> 更形象的参考流程图

