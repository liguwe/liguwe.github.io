
# 使用 requestAnimationFrame 批量处理操作的原理

`#bom` 


## 目录
<!-- toc -->
 ## 1. requestAnimationFrame 的基本原理 

- requestAnimationFrame 是浏览器提供的一个用于优化动画渲染的 API，它的**核心原理**是：
	- **同步屏幕刷新率**
		- rAF 会在浏览器**下一次重绘之前**执行回调函数
		- 通常与显示器的**刷新率**同步（一般是 60Hz，即每秒 60 次）
		- 在视觉上能提供更流畅的动画效果
- **批量处理机制**
   - **多个 rAF 回调会在同一个渲染帧中执行**
      - 他会做合并操作
      - 可以避免在一帧内多次触发重排重绘
      - 自动节流，防止过度渲染

## 2. 批量处理的实现示例

```javascript hl:23
// 存储待处理的任务
const updates = new Set();

// 标记是否已经请求执行批处理
let isPending = false;

// 批量处理函数
function batchProcess() {
    // 执行所有更新任务
    updates.forEach(update => update());
    // 清空任务队列
    updates.clear();
    // 重置请求标记
    isPending = false;
}

// 添加更新任务
function scheduleUpdate(update) {
    updates.add(update);
    
    if (!isPending) {
        isPending = true;
        requestAnimationFrame(batchProcess);
    }
}

// 使用示例
function updateElement(element, value) {
    scheduleUpdate(() => {
        element.style.transform = `translateX(${value}px)`;
    });
}
```

## 3. 实际应用场景

### 3.1. DOM 批量更新：使用上面👆🏻定义的 `scheduleUpdate`

```javascript hl:5
// 批量更新多个元素
function batchUpdateElements() {
    const elements = document.querySelectorAll('.animated');
    elements.forEach((el, index) => {
        scheduleUpdate(() => {
            el.style.opacity = Math.random();
            el.style.transform = `translateX(${index * 10}px)`;
        });
    });
}
```

### 3.2. 数据可视化更新

```javascript hl:7
function updateChart(data) {
    let isScheduled = false;
    
    data.forEach(item => {
        if (!isScheduled) {
            isScheduled = true;
            requestAnimationFrame(() => {
                // 批量更新图表数据
                renderChart(data);
                isScheduled = false;
            });
        }
    });
}
```

## 4. 优势和注意事项

### 4.1. 优势

- 性能优化：
	- 减少**重排重绘**的次数
	- 更好的**内存**使用
	- 更流畅的**动画**效果
- 自动调节：
	- 在`标签页不可见时自动暂停`，所以有更好的电池寿命
	- 根据设备性能自动调整执行频率

## 5. 注意事项

### 5.1. 时序性

- rAF 的执行是异步的
- 如果操作有严格的时序要求，需要特别处理

### 5.2. 兼容性处理

```javascript hl:6
// 兼容性封装
const raf = window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           function(callback) {
               return window.setTimeout(callback, 1000 / 60);
           };
```

### 5.3. 取消操作

```javascript hl:3
const rafId = requestAnimationFrame(callback);
// 需要时可以取消
cancelAnimationFrame(rafId);
```

