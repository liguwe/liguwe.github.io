
# 媒体查询

`#2024/07/30`   `#前端/CSS`  

常见的媒体查询语句如下

- min-width,
- max-width
- orientation
- @container


## 目录
<!-- toc -->
 ## 1. `Container` Queries  

- **描述**：允许根据容器的尺寸而不是视口尺寸来应用样式。
- **特点**：**更灵活的响应式设计，更灵活的媒体查询**
- **示例**：
```css
@container (min-width: 500px) {
  .element {
    background-color: blue;
  }
}
```

