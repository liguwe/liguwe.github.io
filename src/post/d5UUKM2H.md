
# 常用的 package.json 字段说明


如下 JSON 结构

```json hl:5,9
{
  // 基础信息：忽略

  // 入口文件配置
  "main": "./dist/index.js",  // CommonJS 入口
  "module": "./dist/index.mjs",// ES Module 入口
  "types": "./dist/index.d.ts",// TypeScript 类型声明文件
  "exports": {                // 现代化的导出配置
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },

  // 脚本命令：忽略
  "scripts": {},

  // 依赖配置
  "dependencies": {           // 生产环境依赖
    "react": "^18.0.0"
  },
  "devDependencies": {        // 开发环境依赖
    "typescript": "^5.0.0",
    "vite": "^4.0.0"
  },
  // `peerDependencies` 
  // 表示宿主项目中需要安装的依赖，这些依赖不会被自动安装，而是期望由使用该包的项目提供
  // 1. 避免依赖重复安装
  // 2. 确保版本兼容性 等
  "peerDependencies": {      // 同版本对等依赖
    "react": "^18.0.0"
  },

  // 项目配置
  "private": true,           // 是否私有包
  "type": "module",          // 指定模块类型(commonjs/module)
  "engines": {               // 指定 node/npm 版本要求
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  },

  // 发布配置，npm 发布包含的文件
  "files": [                
    "dist",
    "README.md"
  ]
}
```

常见场景：

1. 开发库/框架时，重点关注：`main`、`module`、`types`、`exports`、`peerDependencies`
2. 开发应用时，重点关注：`scripts`、`dependencies`、`devDependencies`
3. 发布 npm 包时，重点关注：`name`、`version`、`files`、`keywords`