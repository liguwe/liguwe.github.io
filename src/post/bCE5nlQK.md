
# 前端数据采集的原理及实现

`#前端埋点` `#R1` 


## 目录
<!-- toc -->
 ## 1. 数据采集的基本方式 

### 1.1. 代码埋点

- **定义**：在代码中**特定位置**插入采集代码
- **特点**：
	- 高度定制化
	- 精准控制
	- 需要开发人员手动添加
- **适用场景**：
	- 核心业务数据采集，重要转化节点跟踪

### 1.2. 可视化埋点

- **原理**：
	- 通过**可视化工具配置采集点**
- **优势**：
	- 降低技术门槛
	- 运营人员可自主操作
	- 灵活配置

### 1.3. 无埋点采集

- **原理**：
	- 自动采集页面所有事件
- **特点**：
	- 全量数据收集
	- 实现成本低
	- 数据量大

## 2. 数据采集的基本原理

### 2.1. 核心采集类型

```typescript
interface CollectData {
  // 基础信息
  baseInfo: {
    url: string;          // 页面URL
    title: string;        // 页面标题
    timestamp: number;    // 时间戳
    userAgent: string;    // 浏览器信息
  };
  // 用户行为
  behavior: {
    type: string;        // 行为类型
    target: string;      // 操作目标
    data: any;           // 相关数据
  };
  // 性能数据
  performance: {
    loadTime: number;    // 加载时间
    fpTime: number;      // 首次绘制时间
    resources: any[];    // 资源加载信息
  };
  // 错误信息
  error: {
    type: string;        // 错误类型
    message: string;     // 错误信息
    stack?: string;      // 错误堆栈
  };
}
```

### 2.2. 基本实现原理

```typescript
// 数据采集器基类
class Collector {
  private static instance: Collector;
  private config: CollectorConfig;
  
  constructor(config: CollectorConfig) {
    this.config = config;
    this.init();
  }

  // 单例模式
  public static getInstance(config: CollectorConfig): Collector {
    if (!Collector.instance) {
      Collector.instance = new Collector(config);
    }
    return Collector.instance;
  }

  private init(): void {
    this.initPV();           // 页面访问
    this.initClick();        // 点击事件
    this.initError();        // 错误监控
    this.initPerformance(); // 性能监控
  }

  // 数据上报方法
  private report(data: any): void {
    // 1. Beacon API
    if (navigator.sendBeacon) {
      navigator.sendBeacon(this.config.reportUrl, JSON.stringify(data));
      return;
    }

    // 2. 图片上报
    new Image().src = `${this.config.reportUrl}?data=${encodeURIComponent(JSON.stringify(data))}`;
  }
}
```

## 3. 具体实现方案

### 3.1. PV/UV 采集

```typescript hl:18,
class PVCollector {
  private initPV(): void {
    // 页面加载完成时触发
    window.addEventListener('load', () => {
      const pvData = {
        url: location.href,
        title: document.title,
        timestamp: Date.now(),
        referrer: document.referrer
      };
      
      this.report({
        type: 'PV',
        data: pvData
      });
    });

    // 路由变化时触发（SPA应用）
    this.listenRouteChange();
  }

  private listenRouteChange(): void {
    // History 模式
    const originalPushState = history.pushState;
    history.pushState = function() {
      originalPushState.apply(this, arguments);
      // 触发 PV 采集
      this.collectPV();
    };

    // Hash 模式
    window.addEventListener('hashchange', () => {
      this.collectPV();
    });
  }
}
```

### 3.2. 用户行为采集

```typescript hl:25,9
class BehaviorCollector {
  private initClick(): void {
    // 点击事件代理
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      const behaviorData = {
        type: 'click',
        target: this.getElementPath(target),
        timestamp: Date.now(),
        data: {
          innerText: target.innerText,
          className: target.className,
          id: target.id
        }
      };

      this.report({
        type: 'BEHAVIOR',
        data: behaviorData
      });
    }, true);
  }

  // 获取元素路径
  private getElementPath(element: HTMLElement): string {
    const path: string[] = [];
    let current = element;
    
    while (current && current !== document.body) {
      const tag = current.tagName.toLowerCase();
      const id = current.id ? `#${current.id}` : '';
      const className = current.className ? 
        `.${current.className.split(' ').join('.')}` : '';
      
      path.unshift(`${tag}${id}${className}`);
      current = current.parentElement as HTMLElement;
    }
    
    return path.join(' > ');
  }
}
```

### 3.3. 性能数据采集

```typescript
class PerformanceCollector {
  private initPerformance(): void {
    window.addEventListener('load', () => {
      // 等待所有资源加载完成
      setTimeout(() => {
        const perfData = this.getPerformanceMetrics();
        this.report({
          type: 'PERFORMANCE',
          data: perfData
        });
      }, 0);
    });
  }

  private getPerformanceMetrics() {
    const timing = performance.timing;
    const paintMetrics = performance.getEntriesByType('paint');

    return {
      // 页面加载时间
      loadTime: timing.loadEventEnd - timing.navigationStart,
      // DOM 解析时间
      domParseTime: timing.domComplete - timing.domLoading,
      // 首次绘制时间
      fpTime: paintMetrics.find(entry => entry.name === 'first-paint')?.startTime,
      // 首次内容绘制时间
      fcpTime: paintMetrics.find(entry => entry.name === 'first-contentful-paint')?.startTime,
      // 资源加载情况
      resources: performance.getEntriesByType('resource').map(entry => ({
        name: entry.name,
        duration: entry.duration,
        size: entry.transferSize,
        type: entry.initiatorType
      }))
    };
  }
}
```

```javascript
// 核心性能指标采集
const observer = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach(entry => {
    if (entry.entryType === 'largest-contentful-paint') {
      // LCP采集
      collectPerformance('LCP', entry.startTime);
    }
    if (entry.entryType === 'layout-shift') {
      // CLS采集
      collectPerformance('CLS', entry.value);
    }
  });
});

observer.observe({ entryTypes: ['largest-contentful-paint', 'layout-shift'] });
```

### 3.4. 错误监控采集

```typescript hl:3,21,37
class ErrorCollector {
  private initError(): void {
    // JS 运行时错误
    window.addEventListener('error', (event) => {
      const errorData = {
        type: 'ERROR',
        subType: 'js',
        message: event.message,
        filename: event.filename,
        position: `${event.lineno}:${event.colno}`,
        stack: event.error?.stack,
        timestamp: Date.now()
      };

      this.report({
        type: 'ERROR',
        data: errorData
      });
    }, true);

    // Promise 未捕获错误
    window.addEventListener('unhandledrejection', (event) => {
      const errorData = {
        type: 'ERROR',
        subType: 'promise',
        message: event.reason?.message || event.reason,
        stack: event.reason?.stack,
        timestamp: Date.now()
      };

      this.report({
        type: 'ERROR',
        data: errorData
      });
    });

    // 资源加载错误
    window.addEventListener('error', (event) => {
      if (event.target && (event.target as HTMLElement).nodeName) {
        const target = event.target as HTMLElement;
        const errorData = {
          type: 'ERROR',
          subType: 'resource',
          url: (target as any).src || (target as any).href,
          tagName: target.nodeName,
          timestamp: Date.now()
        };

        this.report({
          type: 'ERROR',
          data: errorData
        });
      }
    }, true);
  }
}
```

## 4. 数据上报策略

### 4.1. 上报方法实现

```typescript
class Reporter {
  private queue: any[] = [];
  private timer: number | null = null;
  
  constructor(private config: ReporterConfig) {
    this.init();
  }

  private init(): void {
    // 页面卸载前发送
    window.addEventListener('beforeunload', () => {
      this.flush();
    });
  }

  // 添加到队列
  public add(data: any): void {
    this.queue.push({
      ...data,
      timestamp: Date.now()
    });

    // 达到阈值立即发送
    if (this.queue.length >= this.config.maxCache) {
      this.flush();
      return;
    }

    // 定时发送
    if (!this.timer) {
      this.timer = window.setTimeout(() => {
        this.flush();
      }, this.config.delay);
    }
  }

  // 立即发送
  private flush(): void {
    if (this.queue.length === 0) return;

    // 优先使用 Beacon API
    if (navigator.sendBeacon) {
      navigator.sendBeacon(
        this.config.reportUrl,
        JSON.stringify(this.queue)
      );
    } else {
      // 降级方案：图片上报
      const data = encodeURIComponent(JSON.stringify(this.queue));
      new Image().src = `${this.config.reportUrl}?data=${data}`;
    }

    // 清空队列
    this.queue = [];
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
  }
}
```

### 4.2. 使用示例

```typescript
// 配置初始化
const collector = Collector.getInstance({
  reportUrl: 'https://analytics-api.example.com/collect',
  delay: 1000,          // 延迟发送
  maxCache: 10,         // 最大缓存数
  sampling: 100,        // 采样率
  ignoreUrls: [        // 忽略的URL
    /localhost/,
    /127.0.0.1/
  ]
});

// 手动上报
collector.report({
  type: 'CUSTOM',
  data: {
    event: 'button_click',
    buttonId: 'submit-btn'
  }
});
```

## 5. 数据处理与分析

### 5.1. 数据清洗

 - 移除敏感信息
 - 格式化数据
 - 补充必要信息

```typescript
interface CleanedData {
  timestamp: number;
  sessionId: string;
  userId: string;
  eventType: string;
  eventData: any;
}

class DataProcessor {
  static clean(rawData: any[]): CleanedData[] {
    return rawData.map(item => ({
      timestamp: item.timestamp,
      sessionId: this.getSessionId(),
      userId: this.getUserId(),
      eventType: item.type,
      eventData: this.normalizeData(item.data)
    }));
  }

  private static normalizeData(data: any): any {
    // 数据标准化处理
    return {
      ...data,
      // 移除敏感信息
      // 格式化数据
      // 补充必要信息
    };
  }
}
```

通过以上实现，我们可以构建一个完整的前端数据采集系统。需要注意以下几点：

1. **性能影响**：采集代码不应影响主业务性能
2. **数据安全**：注意脱敏处理，不采集敏感信息
3. **采样控制**：根据业务需求设置合理的采样率
4. **容错处理**：保证采集代码的健壮性
5. **合规性**：遵守数据保护相关法规

## 6. 最佳实践建议

### 6.1. 采集策略

- **核心业务**采用**代码埋点**
- 非核心行为使用无埋点
- 灵活运用可视化埋点

### 6.2. 性能优化

- 采用**批量**上报减少请求
- 使用 `requestIdleCallback` 在空闲时处理
- 控制采集频率和数据量

### 6.3. 数据处理

- 建立数据清洗机制
- 实现实时分析能力
- 设置**告警阈值**

### 6.4. 监控维度

- 页面性能指标
- 用户行为数据
- 错误日志
- 业务指标
- 资源加载情况

## 7. 数据安全考虑

### 7.1. 数据脱敏

```javascript
function maskSensitiveData(data) {
  // 手机号脱敏
  if (data.phone) {
    data.phone = data.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
  }
  
  // 邮箱脱敏
  if (data.email) {
    data.email = data.email.replace(/(.{3}).+(@.+)/, '$1***$2');
  }
  
  return data;
}
```

### 7.2. 权限控制

```javascript
class DataCollector {
  constructor() {
    this.allowedDomains = ['example.com', 'sub.example.com'];
  }

  checkPermission() {
    const currentDomain = window.location.hostname;
    return this.allowedDomains.some(domain => 
      currentDomain === domain || currentDomain.endsWith(`.${domain}`)
    );
  }

  collect(data) {
    if (!this.checkPermission()) {
      console.warn('Unauthorized data collection attempt');
      return;
    }
    // 继续数据采集
  }
}
```

