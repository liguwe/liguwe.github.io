
# Nodejs 篇（篇二）

`#前端面试` 


## 目录
<!-- toc -->
 ## 1. Node.js 中异常捕获和容错的常见处理方式 

### 1.1. try-catch 捕获同步异常

```javascript
// 基本的同步异常捕获
function syncOperation() {
    try {
        const result = JSON.parse('{"invalid": json}');
        return result;
    } catch (error) {
        console.error('同步错误:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        // 可以返回默认值或重新抛出错误
        return { error: true };
    }
}
```

### 1.2. Promise 异常处理

```javascript
// Promise 链式调用异常处理
async function asyncOperation() {
    try {
        const result = await fetch('https://api.example.com/data')
            .then(response => response.json())
            .catch(error => {
                console.error('Fetch 错误:', error);
                return null;
            });

        if (!result) {
            throw new Error('获取数据失败');
        }

        return result;
    } catch (error) {
        console.error('异步操作错误:', error);
        return null;
    }
}

// Promise.all 错误处理
async function multipleAsyncOperations() {
    try {
        const promises = [
            fetch('https://api1.example.com'),
            fetch('https://api2.example.com'),
            fetch('https://api3.example.com')
        ];

        const results = await Promise.all(
            promises.map(p => p.catch(error => {
                console.error('单个请求失败:', error);
                return null;
            }))
        );

        return results.filter(result => result !== null);
    } catch (error) {
        console.error('批量请求错误:', error);
        return [];
    }
}
```

### 1.3. 全局未捕获异常处理

```javascript
// 未捕获的异常处理
process.on('uncaughtException', (error) => {
    console.error('未捕获的异常:', {
        error: error,
        time: new Date().toISOString(),
        pid: process.pid
    });
    
    // 记录错误日志
    logError(error);
    
    // 优雅退出（建议在处理完关键操作后退出）
    process.exit(1);
});

// 未处理的 Promise 拒绝
process.on('unhandledRejection', (reason, promise) => {
    console.error('未处理的 Promise 拒绝:', {
        reason: reason,
        time: new Date().toISOString(),
        pid: process.pid
    });
    
    // 记录错误日志
    logError(reason);
});

// 自定义错误日志记录函数
function logError(error) {
    // 这里可以实现错误日志记录逻辑
    // 比如写入文件或发送到日志服务
}
```

### 1.4. Express 错误处理中间件

```javascript
const express = require('express');
const app = express();

// 自定义错误类
class AppError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
    }
}

// 异步函数错误捕获包装器
const catchAsync = fn => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};

// 路由处理
app.get('/api/data', catchAsync(async (req, res) => {
    const data = await fetchData();
    if (!data) {
        throw new AppError(404, '数据不存在');
    }
    res.json(data);
}));

// 404 错误处理
app.use((req, res, next) => {
    next(new AppError(404, '找不到请求的资源'));
});

// 全局错误处理中间件
app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    // 开发环境错误响应
    if (process.env.NODE_ENV === 'development') {
        res.status(error.statusCode).json({
            status: error.status,
            error: error,
            message: error.message,
            stack: error.stack
        });
    } 
    // 生产环境错误响应
    else {
        // 操作型错误：发送给客户端
        if (error.isOperational) {
            res.status(error.statusCode).json({
                status: error.status,
                message: error.message
            });
        } 
        // 程序型错误：不暴露详细信息
        else {
            console.error('ERROR 💥', error);
            res.status(500).json({
                status: 'error',
                message: '服务器内部错误'
            });
        }
    }
});
```

### 1.5. 数据库操作错误处理

```javascript
const mongoose = require('mongoose');

// MongoDB 连接错误处理
mongoose.connect('mongodb://localhost/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('数据库连接成功'))
.catch(error => {
    console.error('数据库连接失败:', error);
    process.exit(1);
});

// 数据库操作错误处理
async function databaseOperation() {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        // 执行数据库操作
        await Model.create([{ data: 'example' }], { session });

        await session.commitTransaction();
    } catch (error) {
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
}
```

### 1.6. 事件触发器错误处理

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {
    execute() {
        try {
            this.emit('start');
            // 某些操作
            if (error) {
                this.emit('error', new Error('操作失败'));
            }
            this.emit('end');
        } catch (error) {
            this.emit('error', error);
        }
    }
}

const myEmitter = new MyEmitter();

// 错误事件监听
myEmitter.on('error', (error) => {
    console.error('事件错误:', error);
});

// 其他事件监听
myEmitter.on('start', () => console.log('开始执行'));
myEmitter.on('end', () => console.log('执行完成'));
```

### 1.7. 定时器错误处理

```javascript
class SafeInterval {
    constructor(callback, interval) {
        this.callback = callback;
        this.interval = interval;
        this.timer = null;
    }

    start() {
        this.timer = setInterval(() => {
            try {
                this.callback();
            } catch (error) {
                console.error('定时器执行错误:', error);
                this.stop(); // 发生错误时停止定时器
            }
        }, this.interval);
    }

    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
}

// 使用示例
const safeTimer = new SafeInterval(() => {
    // 定时执行的操作
}, 1000);

safeTimer.start();
```

### 1.8. 错误监控和报警

```javascript
class ErrorMonitor {
    constructor() {
        this.errors = new Map();
        this.threshold = 10; // 错误阈值
        this.timeWindow = 60000; // 时间窗口（1分钟）
    }

    recordError(error) {
        const errorKey = error.message;
        const now = Date.now();
        
        if (!this.errors.has(errorKey)) {
            this.errors.set(errorKey, []);
        }
        
        const errorList = this.errors.get(errorKey);
        errorList.push(now);
        
        // 清理超出时间窗口的错误记录
        const validErrors = errorList.filter(time => 
            now - time < this.timeWindow
        );
        this.errors.set(errorKey, validErrors);

        // 检查是否需要报警
        if (validErrors.length >= this.threshold) {
            this.sendAlert(error, validErrors.length);
        }
    }

    sendAlert(error, count) {
        console.error(`警告: 错误 "${error.message}" 在最近1分钟内出现了 ${count} 次`);
        // 这里可以添加发送邮件或其他通知的逻辑
    }
}

// 使用示例
const errorMonitor = new ErrorMonitor();
process.on('uncaughtException', error => {
    errorMonitor.recordError(error);
});
```

### 1.9. 自己写一个koa中间件，用于捕获相关的异常

![图片&文件](./files/20241027-8.png)

### 1.10. 总结

这些错误处理方式可以根据具体需求组合使用，构建一个健壮的错误处理系统。关键点是：
1. 合理区分开发环境和生产环境的错误处理
2. 确保错误被正确记录和监控
3. 实现优雅的错误恢复机制
4. 避免敏感信息泄露
5. 保持应用的稳定性

## 2. 介绍 Node.js 中常见的内存泄漏场景及其解决方案

### 2.1. 全局变量引起的内存泄漏

```javascript hl:1
// 错误示例：全局变量累积
global.dataStore = [];

function addData(data) {
    global.dataStore.push(data);
}

// 正确示例：使用局部变量或及时清理
class DataManager {
    constructor() {
        this.dataStore = new Map();
        this.maxSize = 1000;
    }

    addData(key, data) {
        // 设置容量限制
        if (this.dataStore.size >= this.maxSize) {
            const firstKey = this.dataStore.keys().next().value;
            this.dataStore.delete(firstKey);
        }
        this.dataStore.set(key, data);
    }

    clearOldData() {
        const now = Date.now();
        for (const [key, data] of this.dataStore) {
            if (now - data.timestamp > 3600000) { // 1小时前的数据
                this.dataStore.delete(key);
            }
        }
    }
}
```

### 2.2. 闭包导致的内存泄漏

```javascript hl:6
// 错误示例：闭包持有大对象引用
function createLeak() {
    const largeData = new Array(1000000);
    
    return function() {
        console.log(largeData[0]); // largeData 一直被持有
    }
}

// 正确示例：使用完即释放
function betterImplementation() {
    let result;
    {
        const largeData = new Array(1000000);
        result = largeData[0];
    }
    // largeData 在这里已经可以被垃圾回收
    return function() {
        console.log(result);
    }
}
```

### 2.3. 事件监听器未移除

```javascript hl:25
// 错误示例：事件监听器累积
class LeakyClass {
    constructor() {
        this.data = new Array(10000);
        process.on('data', this.onData.bind(this));
    }

    onData(data) {
        // 处理数据
    }
}

// 正确示例：提供移除监听器的方法
class BetterClass {
    constructor() {
        this.data = new Array(10000);
        this.boundOnData = this.onData.bind(this);
        this.setupListeners();
    }

    setupListeners() {
        process.on('data', this.boundOnData);
    }

    cleanup() {
        process.removeListener('data', this.boundOnData);
    }

    onData(data) {
        // 处理数据
    }
}

// 使用示例
const instance = new BetterClass();
// 使用完后清理
instance.cleanup();
```

### 2.4. 缓存未限制大小

```javascript hl:1
// 错误示例：无限制的缓存
const cache = {};

function addToCache(key, value) {
    cache[key] = value;
}

// 正确示例：使用 LRU 缓存
const LRU = require('lru-cache');
const cache = new LRU({
    max: 500,   // 最大项数
    maxAge: 1000 * 60 * 60 // 项的最大年龄（1小时）
});

// 或者使用 Map 实现简单的 LRU
class SimpleCache {
    constructor(limit = 1000) {
        this.limit = limit;
        this.cache = new Map();
    }

    set(key, value) {
        if (this.cache.size >= this.limit) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
        this.cache.set(key, value);
    }

    get(key) {
        const value = this.cache.get(key);
        if (value) {
            // 刷新访问顺序
            this.cache.delete(key);
            this.cache.set(key, value);
        }
        return value;
    }
}
```

### 2.5. 定时器未清理

```javascript hl:27
// 错误示例：定时器未清理
function startPolling() {
    setInterval(() => {
        // 执行某些操作
    }, 1000);
}

// 正确示例：可清理的定时器
class PollingManager {
    constructor() {
        this.timers = new Set();
    }

    startPolling(fn, interval) {
        const timer = setInterval(fn, interval);
        this.timers.add(timer);
        return timer;
    }

    stopPolling(timer) {
        clearInterval(timer);
        this.timers.delete(timer);
    }

    stopAll() {
        for (const timer of this.timers) {
            clearInterval(timer);
        }
        this.timers.clear();
    }
}
```

### 2.6. Promise 链未处理

```javascript hl:1
// 错误示例：未处理的 Promise
function leakyPromise() {
    return new Promise(resolve => {
        const hugeData = new Array(1000000);
        resolve(hugeData);
    });
}

// 正确示例：确保 Promise 链正确处理和结束
async function betterPromise() {
    try {
        const hugeData = await processData();
        // 使用完数据后置为 null
        hugeData = null;
    } catch (error) {
        console.error('Error:', error);
    }
}
```

### 2.7. Stream 未正确处理

```javascript
// 错误示例：流未正确处理
const fs = require('fs');

const readStream = fs.createReadStream('large-file.txt');
readStream.on('data', (chunk) => {
    // 处理数据
});

// 正确示例：正确处理流
class StreamHandler {
    constructor() {
        this.streams = new Set();
    }

    handleStream(stream) {
        this.streams.add(stream);

        stream.on('end', () => {
            this.streams.delete(stream);
        });

        stream.on('error', (error) => {
            console.error('Stream error:', error);
            this.streams.delete(stream);
        });

        return stream;
    }

    cleanup() {
        for (const stream of this.streams) {
            stream.destroy();
        }
        this.streams.clear();
    }
}

// 使用示例
const streamHandler = new StreamHandler();
const readStream = streamHandler.handleStream(
    fs.createReadStream('large-file.txt')
);
```

### 2.8. 内存使用监控

```javascript hl:9
class MemoryMonitor {
    constructor(threshold = 0.8) { // 80% 阈值
        this.threshold = threshold;
        this.startMonitoring();
    }

    startMonitoring() {
        this.interval = setInterval(() => {
            const usage = process.memoryUsage();
            const heapUsed = usage.heapUsed;
            const heapTotal = usage.heapTotal;
            const usage_ratio = heapUsed / heapTotal;

            console.log('内存使用情况:', {
                heapUsed: `${Math.round(heapUsed / 1024 / 1024)} MB`,
                heapTotal: `${Math.round(heapTotal / 1024 / 1024)} MB`,
                usage: `${Math.round(usage_ratio * 100)}%`
            });

            if (usage_ratio > this.threshold) {
                this.handleHighMemoryUsage(usage);
            }
        }, 30000); // 每30秒检查一次
    }

    handleHighMemoryUsage(usage) {
        console.warn('内存使用过高警告！');
        // 这里可以添加告警逻辑
        // 例如：发送告警邮件、清理缓存等
    }

    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
}

// 使用示例
const monitor = new MemoryMonitor();
```

### 2.9. WeakMap 和 WeakSet 的使用

```javascript
// 使用 WeakMap 存储对象相关的数据
class DomNodeData {
    constructor() {
        // 使用 WeakMap 存储 DOM 节点相关的数据
        this.nodeData = new WeakMap();
    }

    setData(node, data) {
        this.nodeData.set(node, data);
    }

    getData(node) {
        return this.nodeData.get(node);
    }
}

// WeakMap 会在对象被垃圾回收时自动清理相关数据
const nodeData = new DomNodeData();
```

### 2.10. 最后

这些是 Node.js 中常见的内存泄漏场景及其解决方案。要避免内存泄漏，关键是要：

1. 及时清理不再使用的资源
2. 限制缓存大小
3. 正确处理事件监听器
4. 使用适当的数据结构（如 WeakMap）
5. 实施监控机制
6. 定期进行内存使用分析

同时，建议使用工具如 `node-heapdump`、`node --inspect` 等进行内存分析和调试。

## 3. 详细介绍 Node.js 中进程通信（IPC：Inter-Process Communication）的各种方式

### 3.1. child_process 子进程通信

```javascript
// 1.1 spawn 方式
const { spawn } = require('child_process');

// 父进程
const child = spawn('node', ['child.js']);

child.stdout.on('data', (data) => {
    console.log('子进程输出：', data.toString());
});

child.stderr.on('data', (data) => {
    console.error('子进程错误：', data.toString());
});

child.on('close', (code) => {
    console.log(`子进程退出，退出码 ${code}`);
});

// 1.2 fork 方式
const { fork } = require('child_process');

// 父进程 (parent.js)
const child = fork('./child.js');

// 发送消息给子进程
child.send({ hello: 'world' });

// 接收子进程消息
child.on('message', (message) => {
    console.log('收到子进程消息:', message);
});

// 子进程 (child.js)
process.on('message', (message) => {
    console.log('收到父进程消息:', message);
    // 回复父进程
    process.send({ received: true });
});
```

### 3.2. cluster 集群模式通信

```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // 主进程代码
    console.log(`主进程 ${process.pid} 正在运行`);

    // 生成工作进程
    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork();

        // 主进程发送消息给工作进程
        worker.send({ type: 'hello', from: 'master' });

        // 接收工作进程消息
        worker.on('message', (message) => {
            console.log(`主进程收到来自工作进程 ${worker.id} 的消息:`, message);
        });
    }

    // 监听工作进程退出
    cluster.on('exit', (worker, code, signal) => {
        console.log(`工作进程 ${worker.process.pid} 已退出`);
    });
} else {
    // 工作进程代码
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('你好，世界\n');
    }).listen(8000);

    // 工作进程接收消息
    process.on('message', (message) => {
        console.log(`工作进程 ${process.pid} 收到消息:`, message);
    });

    // 工作进程发送消息给主进程
    process.send({ type: 'ready', pid: process.pid });
}
```

### 3.3. Socket 通信

```javascript
// 3.1 TCP Socket
const net = require('net');

// TCP 服务器
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('收到数据:', data.toString());
        socket.write('服务器已收到消息');
    });
});

server.listen(8080, () => {
    console.log('TCP 服务器启动在端口 8080');
});

// TCP 客户端
const client = new net.Socket();
client.connect(8080, 'localhost', () => {
    client.write('你好，服务器');
});

// 3.2 Unix Domain Socket
const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log('收到数据:', data.toString());
    });
});

server.listen('/tmp/node.sock');
```

### 3.4. 消息队列（使用 Redis）

```javascript
const Redis = require('ioredis');
const redis = new Redis();

// 发布者
class Publisher {
    constructor() {
        this.redis = new Redis();
    }

    publish(channel, message) {
        return this.redis.publish(channel, JSON.stringify(message));
    }
}

// 订阅者
class Subscriber {
    constructor() {
        this.redis = new Redis();
    }

    subscribe(channel, callback) {
        this.redis.subscribe(channel, (err, count) => {
            if (err) {
                console.error('订阅错误:', err);
                return;
            }
            console.log(`订阅了 ${count} 个频道`);
        });

        this.redis.on('message', (channel, message) => {
            callback(channel, JSON.parse(message));
        });
    }
}

// 使用示例
const publisher = new Publisher();
const subscriber = new Subscriber();

subscriber.subscribe('news', (channel, message) => {
    console.log(`收到来自 ${channel} 的消息:`, message);
});

publisher.publish('news', { title: '重要通知', content: '系统更新' });
```

### 3.5. 共享内存（使用 Node.js worker_threads）

```javascript
const { Worker, isMainThread, parentPort, workerData, SharedArrayBuffer } = require('worker_threads');

if (isMainThread) {
    // 主线程代码
    const sharedBuffer = new SharedArrayBuffer(1024);
    const sharedArray = new Int32Array(sharedBuffer);

    const worker = new Worker(__filename, {
        workerData: { sharedBuffer }
    });

    worker.on('message', (message) => {
        console.log('主线程收到消息:', message);
        console.log('共享内存数据:', sharedArray[0]);
    });

    // 修改共享内存
    sharedArray[0] = 100;
    worker.postMessage('已更新共享内存');
} else {
    // 工作线程代码
    const sharedArray = new Int32Array(workerData.sharedBuffer);

    parentPort.on('message', (message) => {
        console.log('工作线程收到消息:', message);
        console.log('共享内存数据:', sharedArray[0]);
        
        // 修改共享内存
        sharedArray[0] += 1;
        parentPort.postMessage('工作线程已修改共享内存');
    });
}
```

### 3.6. HTTP/HTTPS 通信

```javascript
const http = require('http');
const axios = require('axios');

// HTTP 服务器
const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            console.log('收到数据:', JSON.parse(body));
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok' }));
        });
    }
});

server.listen(3000, () => {
    console.log('HTTP 服务器运行在端口 3000');
});

// HTTP 客户端
async function sendRequest() {
    try {
        const response = await axios.post('http://localhost:3000', {
            message: '你好，服务器'
        });
        console.log('服务器响应:', response.data);
    } catch (error) {
        console.error('请求错误:', error);
    }
}
```

### 3.7. WebSocket 通信

```javascript
const WebSocket = require('ws');

// WebSocket 服务器
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('新的连接建立');

    ws.on('message', (message) => {
        console.log('收到消息:', message.toString());
        // 广播消息给所有客户端
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });
});

// WebSocket 客户端
const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    ws.send('客户端连接成功');
});

ws.on('message', (data) => {
    console.log('收到服务器消息:', data.toString());
});
```

### 3.8. 进程管理和监控

```javascript
class ProcessManager {
    constructor() {
        this.workers = new Map();
        this.setupMaster();
    }

    setupMaster() {
        cluster.setupMaster({
            exec: 'worker.js',
            args: ['--use', 'http']
        });

        cluster.on('online', (worker) => {
            console.log(`工作进程 ${worker.process.pid} 已启动`);
            this.workers.set(worker.id, worker);
        });

        cluster.on('exit', (worker, code, signal) => {
            console.log(`工作进程 ${worker.process.pid} 退出`);
            this.workers.delete(worker.id);
            
            // 自动重启进程
            if (signal !== 'SIGTERM') {
                this.createWorker();
            }
        });
    }

    createWorker() {
        const worker = cluster.fork();
        return worker;
    }

    broadcastMessage(message) {
        for (const worker of this.workers.values()) {
            worker.send(message);
        }
    }

    shutdown() {
        for (const worker of this.workers.values()) {
            worker.kill('SIGTERM');
        }
    }
}

// 使用示例
const manager = new ProcessManager();
// 创建工作进程
for (let i = 0; i < require('os').cpus().length; i++) {
    manager.createWorker();
}

// 广播消息
manager.broadcastMessage({ type: 'config', data: { port: 8000 } });
```

### 3.9. 总结

这些是 Node.js 中主要的进程通信方式，每种方式都有其适用场景：

--- 

1. child_process：适用于`父子进程`通信
2. cluster：适用于`主从架构的多进程应用`
3. Socket：适用于`跨机器`的进程通信 
4. 消息队列：适用于解耦的异步通信 （redis）
5. 共享内存：适用于高性能数据共享（worker_threads）
6. HTTP/HTTPS：适用于RESTful服务通信
7. WebSocket：适用于实时双向通信
8. 进程管理：适用于复杂的多进程应用

--- 

选择合适的通信方式需要考虑：
- 通信效率
- 可靠性要求
- 实现复杂度
- 跨平台需求
- 维护成本

## 4. nodejs server 端 如何清除  cookie

1. Express: `res.clearCookie(name)`
2. Koa: `ctx.cookies.set(name, null)`
3. 原生: `res.setHeader('Set-Cookie', 'name=; Max-Age=0')`

实际应用，通过 `/logout` 来退出登录，清除 cookie等

安全相关：

```javascript
const cookieOptions = {
    path: '/',
    httpOnly: true,    // 防止 XSS
    secure: true,      // 仅 HTTPS
    sameSite: 'strict' // 防止 CSRF
};
```

## 5. TCP 粘包是怎么回事，如何处理? UDP 有粘包吗?

### 5.1. TCP 粘包问题

TCP 粘包是因为 TCP 是`面向流`的协议，传输数据时会将数据拆分成多个数据包进行传输，`接收方`收到数据后会按序`重组`。这可能导致两种情况：

1. 多个小数据包合并成一个大数据包
2. 一个大数据包被分割成多个小数据包

```ascii
发送数据：
包1: "Hello" | 包2: "World"

可能的接收情况：
情况1（粘包）: "HelloWorld"
情况2（拆包）: "Hel" "loWorld"
```

### 5.2. TCP 粘包解决方案

#### 5.2.1. 固定长度

```javascript
// 固定长度方案
const net = require('net');

const server = net.createServer((socket) => {
    const FIXED_LENGTH = 10;
    let buffer = Buffer.alloc(0);

    socket.on('data', (data) => {
        buffer = Buffer.concat([buffer, data]);
        
        // 当数据足够时，按固定长度解析
        while (buffer.length >= FIXED_LENGTH) {
            const message = buffer.slice(0, FIXED_LENGTH);
            buffer = buffer.slice(FIXED_LENGTH);
            console.log('收到消息:', message.toString());
        }
    });
});
```

#### 5.2.2. 分隔符

```javascript
// 使用分隔符方案
const net = require('net');

const server = net.createServer((socket) => {
    let buffer = '';
    const DELIMITER = '\n';

    socket.on('data', (data) => {
        buffer += data;
        
        let index;
        while ((index = buffer.indexOf(DELIMITER)) !== -1) {
            const message = buffer.slice(0, index);
            buffer = buffer.slice(index + 1);
            console.log('收到消息:', message);
        }
    });
});
```

#### 5.2.3. 消息头标识长度

```javascript
// 消息头标识长度方案
const net = require('net');

class Protocol {
    static pack(message) {
        const body = Buffer.from(message);
        const header = Buffer.alloc(4);
        header.writeUInt32BE(body.length);
        return Buffer.concat([header, body]);
    }

    static unpack(buffer) {
        if (buffer.length < 4) return null;
        
        const length = buffer.readUInt32BE(0);
        if (buffer.length < length + 4) return null;
        
        const body = buffer.slice(4, length + 4);
        const remaining = buffer.slice(length + 4);
        
        return {
            message: body.toString(),
            remaining: remaining
        };
    }
}

// 服务端示例
const server = net.createServer((socket) => {
    let buffer = Buffer.alloc(0);

    socket.on('data', (data) => {
        buffer = Buffer.concat([buffer, data]);
        
        let result;
        while ((result = Protocol.unpack(buffer))) {
            console.log('收到消息:', result.message);
            buffer = result.remaining;
        }
    });
});

// 客户端示例
const client = new net.Socket();
client.connect(3000, '127.0.0.1', () => {
    const message = Protocol.pack('Hello World');
    client.write(message);
});
```

### 5.3. UDP 粘包问题

UDP 不存在粘包问题，因为：

1. UDP 是基于消息的协议，**每个数据包都是独立的**
2. UDP 不保证数据包的顺序和可靠性
3. 每个 UDP 数据包都有明确的界限

```javascript
// UDP 示例
const dgram = require('dgram');

// UDP 服务器
const server = dgram.createSocket('udp4');

server.on('message', (msg, rinfo) => {
    // UDP 每个消息都是完整的，不会粘包
    console.log(`收到消息: ${msg} 来自 ${rinfo.address}:${rinfo.port}`);
});

server.bind(3000);

// UDP 客户端
const client = dgram.createSocket('udp4');

// 发送多个消息
client.send('Hello', 3000, 'localhost');
client.send('World', 3000, 'localhost');
```

### 5.4. 总结比较

1. TCP 粘包原因：
   - TCP 是流式协议
   - TCP 有缓冲区机制
   - 数据包的发送和接收不一定一一对应

2. UDP 无粘包原因：
   - UDP 是消息边界协议
   - 每个数据包都是独立的
   - 一次接收一个完整的数据包

3. TCP 粘包解决方案：
   - 固定长度
   - 分隔符
   - 消息头+消息体
   - 自定义协议

1. 最佳实践：
   - TCP 应用建议使用消息头+消息体方案
   - 对于简单应用可以使用分隔符方案
   - UDP 应用需要考虑数据包大小限制和丢包处理

## 6. TIME_WAIT 过多的原因以及解决方案

### 6.1. TIME_WAIT 过多的原因

#### 6.1.1. 短连接过多

```javascript
// 不良示例：频繁创建短连接
const http = require('http');

setInterval(() => {
    http.get('http://example.com', (res) => {
        // 处理完立即关闭
        res.on('end', () => {
            // 连接关闭，进入 TIME_WAIT
        });
    });
}, 100);
```

#### 6.1.2. 客户端主动关闭连接

```javascript
// 不良示例：客户端频繁主动关闭连接
const net = require('net');
const client = new net.Socket();

client.connect(3000, '127.0.0.1', () => {
    client.end(); // 客户端主动关闭，将产生 TIME_WAIT
});
```

#### 6.1.3. 高并发下的连接复用不足

### 6.2. 解决方案

#### 6.2.1. 启用 TCP keepalive 保持长连接
```javascript
// 服务端启用 keepalive
const server = net.createServer((socket) => {
    socket.setKeepAlive(true, 60000); // 60秒
});

// 或在 HTTP 服务中
const server = http.createServer((req, res) => {
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Keep-Alive', 'timeout=5'); // 5秒超时
});
```

#### 6.2.2. 使用连接池
```javascript
// 使用连接池示例
const generic_pool = require('generic-pool');

const factory = {
    create: async () => {
        const client = new net.Socket();
        await new Promise((resolve) => {
            client.connect(3000, '127.0.0.1', resolve);
        });
        return client;
    },
    destroy: (client) => {
        return new Promise((resolve) => {
            client.end();
            client.on('close', resolve);
        });
    }
};

const pool = generic_pool.createPool(factory, {
    max: 10, // 最大连接数
    min: 2   // 最小连接数
});
```

#### 6.2.3. 系统层面优化

```bash
# 修改 TIME_WAIT 超时时间
sysctl -w net.ipv4.tcp_fin_timeout=30

# 允许 TIME_WAIT 状态的 socket 重用
sysctl -w net.ipv4.tcp_tw_reuse=1

# 快速回收 TIME_WAIT 连接
sysctl -w net.ipv4.tcp_tw_recycle=1  # 注意：在 Linux 4.12+ 已被移除
```

#### 6.2.4. 负载均衡

```javascript
// 使用 Node.js cluster 模块做负载均衡
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // 启动多个工作进程
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    // 工作进程创建服务器
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('hello world\n');
    }).listen(8000);
}
```

### 6.3. 最佳实践建议

#### 6.3.1. 服务端设计

   - 尽量使用长连接
   - 实现连接池机制
   - 合理配置 keepalive 参数

#### 6.3.2. 客户端设计

   - 使用连接池
   - 避免频繁创建短连接
   - 适当使用长连接

#### 6.3.3. 系统配置

   - 适当调整系统参数
   - 配置负载均衡
   - 监控 TIME_WAIT 状态

#### 6.3.4. 架构优化

   - 使用反向代理
   - 实现服务端负载均衡
   - 合理设置超时时间

## 7. ECONNRESET 

ECONNRESET（Connection Reset）错误表示连接被对方强制关闭。简单来说就是：TCP 连接中，一方突然收到了 RST 包，连接被重置

`ECONNRESET`是因为TCP连接的对端(通常是server)突然断开了连接。server一般都设置了`keepalive`，对于不活动的连接会超时断开

### 7.1. 常见原因

#### 7.1.1. 服务端主动关闭连接

```javascript
// 服务端突然关闭
socket.destroy();
```

#### 7.1.2. 防火墙干扰

- 连接空闲被防火墙切断
- 某些包被防火墙拦截

#### 7.1.3. 客户端继续发送数据，但服务端已关闭

```javascript
// 错误示例
socket.on('end', () => {
    // 服务端已关闭，但还在写数据
    socket.write('data');  // 可能触发 ECONNRESET
});
```

### 7.2. 解决方案

#### 7.2.1. 使用 keep-alive 保持连接活跃

```javascript
socket.setKeepAlive(true, 1000);
```

#### 7.2.2. 优雅关闭连接

```javascript
socket.end(() => {
    // 确保数据发送完毕后再关闭
    socket.destroy();
});
```

#### 7.2.3. 添加错误处理

```javascript
socket.on('error', (err) => {
    if (err.code === 'ECONNRESET') {
        // 处理连接重置
        console.log('连接被重置');
    }
});
```

#### 7.2.4. 实现重连机制

```javascript
function connect() {
    const socket = new net.Socket();
    socket.on('error', (err) => {
        if (err.code === 'ECONNRESET') {
            setTimeout(() => connect(), 1000);
        }
    });
}
```

## 8. socket hang up

socket hang up 表示连接意外中断，通常是因为**服务器在客户端还在等待响应时关闭了连接**。

### 8.1. 常见场景

#### 8.1.1. 请求超时

```javascript
// 服务端设置了超时时间，但处理时间过长
const server = http.createServer((req, res) => {
    // 长时间操作，超过了默认超时时间
    setTimeout(() => {
        res.end('done');  // 可能已经超时，触发 socket hang up
    }, 2 * 60 * 1000);
});
```

#### 8.1.2. 服务端提前关闭

```javascript
// 服务端提前结束响应
app.get('/api', (req, res) => {
    res.socket.destroy();  // 强制关闭连接
    // 或
    res.destroy();
});
```

#### 8.1.3. 代理超时

```javascript
// 代理请求超时
const proxy = http.request(options, (res) => {
    // 处理响应
});
// 未设置超时处理
proxy.end();
```

### 8.2. 解决方案

#### 8.2.1. 设置合适的超时时间

```javascript
// 服务端
server.timeout = 120000; // 设置2分钟超时

// 客户端
const req = http.request(options);
req.setTimeout(120000);
```

#### 8.2.2. 正确的错误处理

```javascript
const axios = require('axios');

axios.get('/api')
    .catch(error => {
        if (error.code === 'ECONNRESET') {
            console.log('连接被重置');
        }
    });
```

#### 8.2.3. 实现重试机制

```javascript
async function fetchWithRetry(url, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            return await fetch(url);
        } catch (err) {
            if (i === retries - 1) throw err;
            await new Promise(r => setTimeout(r, 1000 * i));
        }
    }
}
```

#### 8.2.4. 使用 keep-alive

```javascript
const agent = new http.Agent({
    keepAlive: true,
    keepAliveMsecs: 3000
});
```

#### 8.2.5. 总结

- 设置合理的超时时间
- 添加错误处理
- 实现重试机制
- 使用长连接（适当场景）

## 9. 列举几个在 Node.js 中提高网络传输速度的主要方法

### 9.1. 启用 Gzip 压缩

```javascript
const express = require('express');
const compression = require('compression');
const app = express();

// 启用 Gzip 压缩
app.use(compression({
    // 只压缩大于 1kb 的响应
    threshold: 1024,
    // 设置压缩级别
    level: 6,
    // 设置需要压缩的类型
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false;
        }
        return compression.filter(req, res);
    }
}));
```

### 9.2. 使用 HTTP/2

```javascript
const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
});

server.on('stream', (stream, headers) => {
    // HTTP/2 支持多路复用
    stream.respond({
        'content-type': 'text/html',
        ':status': 200
    });
    stream.end('<h1>Hello World</h1>');
});
```

### 9.3. 实现缓存策略

```javascript
const express = require('express');
const app = express();

// 静态文件缓存
app.use(express.static('public', {
    maxAge: '1d',  // 缓存一天
    etag: true,    // 启用 ETag
    lastModified: true
}));

// API 响应缓存
app.get('/api/data', (req, res) => {
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.setHeader('ETag', 'W/"123-123"');
    
    // 检查是否命中缓存
    if (req.fresh) {
        return res.status(304).end();
    }
    
    res.json({ data: 'some data' });
});
```

### 9.4. 使用流式传输

```javascript
const fs = require('fs');

// 文件传输使用流
app.get('/download', (req, res) => {
    const fileStream = fs.createReadStream('large-file.mp4');
    fileStream.pipe(res);
});

// 大数据响应使用流
app.get('/large-data', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    
    const streamData = async function*() {
        for (let i = 0; i < 1000000; i++) {
            yield JSON.stringify({ id: i }) + '\n';
        }
    };
    
    const stream = Readable.from(streamData());
    stream.pipe(res);
});
```

### 9.5. 启用 Keep-Alive

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Keep-Alive', 'timeout=5');
});

// 或使用 agent
const agent = new http.Agent({
    keepAlive: true,
    keepAliveMsecs: 3000,
    maxSockets: 100
});
```

### 9.6. 使用负载均衡

```javascript
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    // 主进程创建工作进程
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    // 工作进程创建服务器
    const express = require('express');
    const app = express();
    app.listen(3000);
}
```

### 9.7. 使用内存缓存

```javascript hl:1
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 100 });

app.get('/api/data', async (req, res) => {
    const key = req.url;
    const cachedData = myCache.get(key);
    
    if (cachedData) {
        return res.json(cachedData);
    }
    
    const data = await fetchData();
    myCache.set(key, data);
    res.json(data);
});
```

### 9.8. 总结

- 启用压缩
- 使用 HTTP/2
- 实现合适的缓存策略
- 使用流式传输
- 保持长连接
- 负载均衡
- 使用内存缓存

根据具体场景选择合适的优化方案，通常需要**多种方案组合使用**才能达到最佳效果。