
# webpack 性能优化的思路

`#webpack` 

> 更多可参考 [14.  前端构建提速的体系化思路](/post/3gP3yrA2.html)


## 目录
<!-- toc -->
 ## 1. 优化打包速度 

### 1.1. 使用 `include/exclude` 缩小文件搜索范围

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: path.resolve(__dirname, 'src'), // 只处理 src 目录
      exclude: /node_modules/  // 排除 node_modules
    }
  ]
}
```

### 1.2. 使用 cache-loader

- 在一些性能开销较大的 loader 之前添加 `cache-loader`，将结果缓存到磁盘里

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      use: ['cache-loader', 'babel-loader']
    }
  ]
}
```

### 1.3. 使用 `hard-source-webpack-plugin` 为模块提供**中间缓存**

### 1.4. 开启多进程打包

- 使用 thread-loader 或 parallel-webpack 实现**多进程打包**

```javascript
module: {
  rules: [
    {
      test: /\.js$/,
      use: ['thread-loader', 'babel-loader']
    }
  ]
}
```

### 1.5. 其他

- 配置 `resolve.alias` 简化引用路径
- 使用 `resolve.modules` 指定模块搜索目录
- 使用 `noParse` 跳过对已知无依赖模块的解析
- 合理使用 `externals` 外部化一些大型库

![图片&文件](./files/20241101-74.png)

## 2. 优化打包体积

### 2.1. 代码分割（Code Splitting）

```javascript hl:2
optimization: {
  splitChunks: {
    chunks: 'all',
    minSize: 30000,
    minChunks: 1,
    cacheGroups: {
      vendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true
      }
    }
  }
}
```

#### 2.1.1. Tree Shaking

- 在 package.json 中设置 `"sideEffects": false`
- 使用 ES6 模块语法（import/export）
- 启用生产模式（production mode）

#### 2.1.2. 压缩代码

```javascript
optimization: {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      parallel: true // 开启多进程压缩
    })
  ]
}
```

## 3. 优化运行时性能

### 3.1. 启用持久化缓存

```javascript
optimization: {
  runtimeChunk: 'single',
  moduleIds: 'deterministic'
}
```

### 3.2. 懒加载

```javascript
// 使用动态 import 实现懒加载
const Home = () => import('./pages/Home');
```

## 4. 分析和监控

### 4.1. 使用分析工具

- webpack-bundle-analyzer：可视化分析打包结果
```javascript
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
}
```

### 4.2. 速度分析

- speed-measure-webpack-plugin：分析各个 loader 和 plugin 的执行时间

## 5. DLL 动态链接库

```javascript
// webpack.dll.config.js
new webpack.DllPlugin({
  path: path.join(__dirname, 'dist', '[name]-manifest.json'),
  name: '[name]_library'
})

// webpack.config.js
new webpack.DllReferencePlugin({
  manifest: require('./dist/vendor-manifest.json')
})
```

## 6. 其他优化措施

### 6.1. 合理使用 sourceMap

- 开发环境使用 `eval-cheap-module-source-map`
- 生产环境可以选择不使用或使用 `nosources-source-map`

### 6.2. 优化解析配置

```javascript
resolve: {
  extensions: ['.js', '.jsx'], // 指定优先级
  alias: {
    '@': path.resolve(__dirname, 'src') // 设置别名
  }
}
```

