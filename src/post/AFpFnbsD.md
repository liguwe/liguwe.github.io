
# Webpack 5 的主要更新和新特性




## 目录
<!-- toc -->
 ## 1. 持久化缓存（Persistent Caching） 

Webpack 5 引入了更好的**持久化缓存机制**，可以显著提升构建性能：

```javascript hl:4
// webpack.config.js
module.exports = {
  cache: {
    type: 'filesystem', // 使用文件系统缓存
    buildDependencies: {
      config: [__filename] // 构建依赖
    },
    name: 'my-cache' // 缓存名称
  }
}
```

## 2. 资源模块（Asset Modules）

取代了 file-loader、url-loader 和 raw-loader，直接内置支持资源文件：

```javascript hl:7
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset', // 可选 'asset/resource'、'asset/inline'、'asset/source'
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024 // 8kb
          }
        }
      }
    ]
  }
}
```

## 3. 模块联邦（Module Federation） 

允许多个独立的构建可以组成一个应用程序：

```javascript
// host/webpack.config.js
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js'
      }
    })
  ]
}

// remote/webpack.config.js
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button'
      }
    })
  ]
}
```

### 3.1. Tree Shaking 优化

改进了 Tree Shaking 机制，支持更多场景：

```javascript
// package.json
{
  "sideEffects": [
    "*.css",
    "*.scss"
  ]
}

// webpack.config.js
module.exports = {
  optimization: {
    usedExports: true,
    minimize: true
  }
}
```

## 4. 更好的代码生成

支持 ECMAScript 模块的输出：

```javascript hl:6,7
module.exports = {
  experiments: {
    outputModule: true
  },
  output: {
    library: {
      type: 'module'
    }
  }
}
```

## 5. Node.js Polyfills 自动加载被移除

不再自动引入 Node.js polyfills：

```javascript
// webpack.config.js
module.exports = {
  resolve: {
    fallback: {
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "stream": require.resolve("stream-browserify")
    }
  }
}
```

## 6. 顶层 await 支持

支持在异步模块中使用顶层 await：

```javascript
// 支持直接在模块顶层使用 await
const data = await fetch('https://api.example.com/data');
export { data };
```

## 7. 改进的开发体验

更好的错误提示和开发工具支持：

```javascript
module.exports = {
  stats: {
    errorDetails: true
  }
}
```

## 8. 新的 WebAssembly 支持

改进了对 WebAssembly 的支持：

```javascript
module.exports = {
  experiments: {
    asyncWebAssembly: true,
    syncWebAssembly: true
  }
}
```

## 9. 改进的长期缓存

通过确定性的模块 ID 和 chunk ID 生成算法：

```javascript
module.exports = {
  optimization: {
    moduleIds: 'deterministic',
    chunkIds: 'deterministic'
  }
}
```

## 10. 更新的配置验证

更严格的配置验证：

```javascript
module.exports = {
  mode: 'production', // 必须指定 mode
  entry: './src/index.js',
  output: {
    clean: true // 构建前清理输出目录的新选项
  }
}
```

## 11. 改进的打包体积

优化了打包体积，移除了一些内部结构：

```javascript
module.exports = {
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      minSize: 20000
    }
  }
}
```

## 12. 主要优势总结

1. 性能提升：
   - 持久化缓存提升构建速度
   - 改进的 Tree Shaking
   - 更优的长期缓存策略
2. 开发体验：
   - 内置资源模块处理
   - 更好的错误提示
   - 更严格的配置验证
3. 新功能：
   - 模块联邦支持微前端架构
   - 原生支持 `WebAssembly`
   - 支持`顶层 await`
4. 包体积优化：
   - 移除自动的 Node.js polyfills
   - 优化内部结构
   - 更好的代码生成

