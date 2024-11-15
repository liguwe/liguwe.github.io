
# vue3 watch 如何取消监听、恢复监听及清理副作用

`#vue3` 


## 目录
<!-- toc -->
 ## 1. 基本语法定义 

```typescript hl:18
// 侦听单个来源
function watch<T>(
  source: WatchSource<T>,
  callback: WatchCallback<T>,
  options?: WatchOptions
): WatchHandle

// 侦听多个来源
function watch<T>(
  sources: WatchSource<T>[],
  callback: WatchCallback<T[]>,
  options?: WatchOptions
): WatchHandle

type WatchCallback<T> = (
  value: T,
  oldValue: T,
  onCleanup: (cleanupFn: () => void) => void
) => void

type WatchSource<T> =
  | Ref<T> // ref
  | (() => T) // getter
  | T extends object
  ? T
  : never // 响应式对象

interface WatchOptions extends WatchEffectOptions {
  immediate?: boolean // 默认：false
  deep?: boolean | number // 默认：false
  flush?: 'pre' | 'post' | 'sync' // 默认：'pre'
  onTrack?: (event: DebuggerEvent) => void
  onTrigger?: (event: DebuggerEvent) => void
  once?: boolean // 默认：false (3.4+)
}

interface WatchHandle {
  (): void // 可调用，与 `stop` 相同
  pause: () => void
  resume: () => void
  stop: () => void
}
```

## 2. 基本使用示例：取消监听
```javascript hl:23
import { ref, watch } from 'vue'

// 监听单个响应式引用
const count = ref(0)
const stop = watch(count, (newValue, oldValue) => {
  console.log('count changed:', newValue, oldValue)
})

// 监听多个数据源
const name = ref('John')
const age = ref(25)
watch(
  [name, age],
  ([newName, newAge], [oldName, oldAge]) => {
    console.log('Person changed:', {
      name: [oldName, newName],
      age: [oldAge, newAge]
    })
  }
)

// 取消监听
stop() // 调用返回的函数即可取消监听
```

## 3. 监听选项的使用

```javascript hl:9,12,29
const count = ref(0)

// immediate: 立即执行
watch(
  count,
  (newVal, oldVal) => {
    console.log('Count:', newVal, oldVal)
  },
  { immediate: true }
)

// deep: 深度监听
const user = reactive({
  profile: {
    name: 'John',
    settings: {
      theme: 'dark'
    }
  }
})


// flush: 控制回调的触发时机
watch(
  count,
  () => {
    console.log('DOM updated')
  },
  { flush: 'post' } // 在 DOM 更新后触发
)
```

## 4. 清理副作用

1. 在侦听器**下一次执行前**清理上一次的副作用
2. 在**组件卸载时**清理副作用

- 如果取消监听，那么需要取消请求

```javascript hl:21
<script setup>
import { ref, watchEffect } from 'vue'

const searchQuery = ref('')
const results = ref([])

watchEffect((onCleanup) => {
  // 创建一个 abort controller
  const controller = new AbortController()
  const { signal } = controller

  // 发起搜索请求
  fetch(`/api/search?q=${searchQuery.value}`, { signal })
    .then(res => res.json())
    .then(data => {
      results.value = data
    })

  // 在下一次执行前或组件卸载时中止上一次的请求
  onCleanup(() => {
    controller.abort()
  })
})
</script>

```

### 4.1. **基本示例 - 防止重复请求**

```vue
<template>
  <div>
    <input v-model="searchQuery" placeholder="搜索...">
    <div>结果: {{ searchResult }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const searchQuery = ref('')
const searchResult = ref('')

watch(searchQuery, async (newQuery, oldQuery, onCleanup) => {
  // 用于存储当前请求是否应该被取消
  let cancelled = false
  
  // 注册清理函数
  onCleanup(() => {
    cancelled = true
  })

  try {
    // 模拟 API 请求
    const result = await mockSearch(newQuery)
    
    // 如果在等待期间触发了新的搜索，就不更新结果
    if (!cancelled) {
      searchResult.value = result
    }
  } catch (error) {
    if (!cancelled) {
      console.error('搜索失败:', error)
    }
  }
})

// 模拟搜索 API
function mockSearch(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`搜索 "${query}" 的结果`)
    }, 1000)
  })
}
</script>
```

### 4.2. **定时器清理示例**
```vue hl:24
<template>
  <div>
    <div>当前计数: {{ count }}</div>
    <button @click="isRunning = !isRunning">
      {{ isRunning ? '停止' : '开始' }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const count = ref(0)
const isRunning = ref(false)

watch(isRunning, (newValue, oldValue, onCleanup) => {
  if (newValue) {
    // 启动定时器
    const timer = setInterval(() => {
      count.value++
    }, 1000)

    // 注册清理函数
    onCleanup(() => {
      clearInterval(timer)
    })
  }
})
</script>
```

### 4.3. **处理多个异步请求示例**

```vue hl:25
<template>
  <div>
    <select v-model="selectedId">
      <option value="1">用户 1</option>
      <option value="2">用户 2</option>
      <option value="3">用户 3</option>
    </select>
    <div>用户信息: {{ userInfo }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const selectedId = ref('1')
const userInfo = ref(null)

watch(selectedId, async (newId, oldId, onCleanup) => {
  let cancelled = false
  
  // 显示加载状态
  userInfo.value = '加载中...'
  
  onCleanup(() => {
    cancelled = true
  })

  try {
    // 模拟获取用户信息
    const info = await fetchUserInfo(newId)
    
    if (!cancelled) {
      userInfo.value = info
    }
  } catch (error) {
    if (!cancelled) {
      userInfo.value = '加载失败'
    }
  }
})

function fetchUserInfo(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`用户 ${id} 的详细信息`)
    }, 1000)
  })
}
</script>
```

### 4.4. **处理WebSocket连接示例**
```vue
<template>
  <div>
    <div>连接状态: {{ isConnected ? '已连接' : '未连接' }}</div>
    <button @click="isConnected = !isConnected">
      {{ isConnected ? '断开连接' : '建立连接' }}
    </button>
    <div>消息: {{ messages }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const isConnected = ref(false)
const messages = ref([])

watch(isConnected, (shouldConnect, oldValue, onCleanup) => {
  if (shouldConnect) {
    // 模拟 WebSocket 连接
    const ws = new MockWebSocket()
    
    ws.onmessage = (message) => {
      messages.value.push(message)
    }

    // 清理函数
    onCleanup(() => {
      ws.close()
      messages.value = []
    })
  }
})

// 模拟 WebSocket 类
class MockWebSocket {
  constructor() {
    this.timer = setInterval(() => {
      if (this.onmessage) {
        this.onmessage(`消息 ${Date.now()}`)
      }
    }, 1000)
  }

  close() {
    clearInterval(this.timer)
  }
}
</script>
```

### 4.5. **防抖搜索示例**
```vue
<template>
  <div>
    <input v-model="searchQuery" placeholder="输入搜索内容">
    <div>搜索建议: {{ suggestions }}</div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const searchQuery = ref('')
const suggestions = ref([])

watch(searchQuery, (newQuery, oldQuery, onCleanup) => {
  // 设置延时标识
  const timeoutId = setTimeout(async () => {
    try {
      const result = await fetchSuggestions(newQuery)
      suggestions.value = result
    } catch (error) {
      console.error('获取建议失败:', error)
    }
  }, 300)

  // 清理未执行的延时操作
  onCleanup(() => {
    clearTimeout(timeoutId)
  })
})

function fetchSuggestions(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        `建议 1 for ${query}`,
        `建议 2 for ${query}`,
        `建议 3 for ${query}`
      ])
    }, 500)
  })
}
</script>
```

### 4.6. `onCleanup` 的主要作用是

1. **防止竞态条件**：当多个异步操作同时进行时，确保只有最新的操作结果会被使用。
2. **资源清理**：
   - 清理定时器
   - 关闭网络连接
   - 取消未完成的请求
   - 重置状态
3. **性能优化**：防止不必要的操作和内存泄漏。

### 4.7. 使用建议

1. 在处理异步操作时，始终考虑使用 `onCleanup`
2. 在清理函数中要清理所有相关的副作用
3. 确保清理函数是同步的
4. 使用标志变量来控制异步操作的结果是否应该被使用

这样可以确保你的应用程序更加稳定和可靠，避免常见的竞态条件和内存泄漏问题。

## 5. 暂停/恢复侦听器： `v3.5`

```js
const { stop, pause, resume } = watchEffect(() => {})

// 暂停侦听器
pause()

// 稍后恢复
resume()

// 停止
stop()
```
## 6. 最佳实践和注意事项

```javascript hl:1,8,15,27
// 1. 避免在监听回调中直接修改被监听的值
const count = ref(0)
// ❌ 错误示例
watch(count, (newVal) => {
  count.value++ // 可能导致无限循环
})

// 2. 使用 watchEffect 替代简单的 watch
import { watchEffect } from 'vue'
// ✅ 更简洁的写法
watchEffect(() => {
  console.log('Count is:', count.value)
})

// 3. 合理使用 deep 选项
const user = reactive({
  profile: { /* 深层对象 */ }
})
// 只监听需要的属性
watch(
  () => user.profile.name,
  (newVal) => {
    console.log('Name changed:', newVal)
  }
)

// 4. 及时清理不需要的监听器
const stop = watch(/* ... */)
onUnmounted(() => {
  stop()
})
```

