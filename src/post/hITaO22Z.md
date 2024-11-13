
# vue3 watch 的取消监听与清理副作用

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

```javascript
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

```javascript hl:4,8
const userId = ref(1)

watch(userId, (newId, oldId,
				onCleanup) => {
  const controller = new AbortController()
  
  // 注册清理函数
  onCleanup(() => {
    controller.abort()
  })
  
  // 发起请求
  fetch(`/api/users/${newId}`, {
    signal: controller.signal
  })
})
```

## 5. 最佳实践和注意事项

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

