---
title:  "content module"
date:   2016-08-17 20:59:26 +0800
layout: post
desc: "微信搜索『FEX』微信搜索『FEX』关注我们的公众号，及时获得最新资讯。，及时获得最新资讯。"
---

#第 4 章　动画工作流

@(JavaScript网页动画设计)

>http://www.ituring.com.cn/tupubarticle/8291

***


[toc]


## 4.1　CSS动画工作流
### 4.1.1　CSS的问题

`@keyframes`其实很难控制，并且冗余和耦合


### 4.1.2　什么时候用CSS比较明智

当用户鼠标悬停在元素上时触发的简单样式变化。CSS中的`transition`可以极好地实现这种类型的微互动


## 4.2　代码技巧：将样式与逻辑分离

### 4.2.1　一般做法

两种做法比较：


```css
.fadeInAndMove {
  opacity: 1;
  top: 50px;
}
```

做法一：推荐
```js
// 设置.fadeInAndMove类的属性的动画，持续时间为1000毫秒
$element.addClass("fadeInAndMove", 1000);
```

做法二：不推荐

```js
$element.animate({ opacity: 1, top: 50 }, 1000);
```


### 4.2.2　优化做法

处理动画样式的逻辑全部写到一个专门的JavaScript文件中（如`style.js`）

```js
var fadeIn = {
     p: {
        opacity: 1,
        top: "50px"
     },
     // 选项对象变体一： 持续时间较快
     oFast: {
       duration: 1000,
       easing: "linear"
     },
     // 变体二：持续时间较慢
     oSlow: {
       duration: 3000,
       easing: "linear"
     }
  };
```

