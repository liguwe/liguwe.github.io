
# 最大偏移量(CLS - Cumulative Layout Shift)的统计方法和优化建议


## 目录
<!-- toc -->
 ## 一、CLS 的定义和重要性 

累积布局偏移(CLS)是衡量页面视觉稳定性的重要指标，用于测量页面内容的意外移动程度。
良好的CLS分数应该`小于0.1`，`大于0.25`则被认为是较差的性能表现

## 二、CLS 的计算方法

### 1. 基本计算公式

```javascript
CLS = 影响分数 × 距离分数
```

其中：
- 影响分数：不稳定元素影响的可视区域部分
- 距离分数：不稳定元素相对于视口的移动距离

### 2. 统计代码实现

```javascript
// 使用 Performance API 统计
let observer = new PerformanceObserver((list) => {
  let entries = list.getEntries();
  
  entries.forEach(entry => {
    if (!entry.hadRecentInput) {
      // 计算布局偏移值
      const impact = entry.value;
      const maxValue = entry.sources.reduce((max, source) => {
        return Math.max(max, source.currentRect.width * source.currentRect.height);
      }, 0);
      
      // 累积偏移分数
      cls += impact;
    }
  });
});

observer.observe({entryTypes: ['layout-shift']});
```

## 三、主要统计场景

1. **图片加载引起的偏移**
   - 未设置图片尺寸
   - 图片延迟加载导致的布局变化
2. **动态内容插入**
   - 广告位插入
   - 动态加载的内容
   - 弹窗提示
3. **字体加载**
   - 自定义字体导致的文本重排
   - FOIT (Flash of Invisible Text)
   - FOUT (Flash of Unstyled Text)

## 四、优化建议

1. **预留空间**
```html
<!-- 图片预留空间示例 -->
<div style="aspect-ratio: 16/9;">
  <img src="image.jpg" loading="lazy" />
</div>
```

2. **固定尺寸**
```css
/* 广告位固定尺寸 */
.ad-container {
  min-height: 250px;
  width: 300px;
}
```

3. **内容占位**
```javascript
// 使用骨架屏
function SkeletonLoader() {
  return (
    <div className="skeleton-container">
      <div className="skeleton-line"></div>
      <div className="skeleton-image"></div>
    </div>
  );
}
```

## 五、监控方法

### 1. **使用 Web Vitals 库**

```javascript
import {getCLS} from 'web-vitals';

getCLS(console.log); // 输出 CLS 值
```

### 2. **Performance API**

```javascript
// 监听布局偏移
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    if (!entry.hadRecentInput) {
      console.log('Layout shift:', entry);
    }
  }
}).observe({entryTypes: ['layout-shift']});
```

### 3. **Chrome DevTools**

- Performance 面板
- Core Web Vitals 报告

## 六、注意事项

1. **异步加载优化**
- 使用 `content-visibility: auto` 优化长列表
- 使用虚拟滚动处理大量数据

2. **响应式设计考虑**
```css
/* 响应式图片处理 */
img {
  max-width: 100%;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}
```

3. **字体加载优化**
```html
<!-- 字体预加载 -->
<link 
  rel="preload" 
  href="font.woff2" 
  as="font" 
  type="font/woff2" 
  crossorigin
>
```

4. **动画和过渡处理**
```css
/* 使用 transform 而不是改变位置属性 */
.animate {
  transform: translate(0, 20px);
  transition: transform 0.3s;
}
```

## 七、测量工具

1. Chrome DevTools
2. Lighthouse
3. PageSpeed Insights
4. Search Console Core Web Vitals 报告

CLS 优化的核心是**保持页面视觉稳定性**，避免意外的布局偏移。