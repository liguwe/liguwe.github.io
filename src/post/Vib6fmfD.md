
# Pinia 状态管理库文档笔记


`#pinia` `#vue`  `#2024/01/07`

>  文档地址： https://pinia.vuejs.org/zh/core-concepts/getters.html


## 目录
<!-- toc -->
 ## 1. 为什么？ 

- Pinia 抛弃了 Mutation，这意味着你可以直接更新状态，**不用再注册 Commit**
- 语法上更加贴近 Composition Api
- 数据持久化使用： `pinia-plugin-persistedstate`
- 允许构建工具自动进行**代码分割**以及 **TypeScript 推断**

## 2. 两种定义方式

约定：所有的 store 定义，都使用 **use 开头**

### 2.1. 方式一：Option Store

 Store 是用 defineStore() 定义的，它的第一个参数要求是一个独一无二的名字

```javascript
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useCounterStore = defineStore('counter', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => ({ count: 0 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

`state` 是 store 的数据 (data)，`getters` 是 store 的计算属性 (computed)，而 `actions` 则是方法 (methods)

### 2.2. 方式二：Setup Store

```javascript
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})
```

- `ref()` 就是 state 属性
- `computed() `就是 getters
- `function() `就是 actions

### 2.3. 使用场景选择

- Setup store 比 Option Store 带来了更多的**灵活性**，因为你可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。
- 不过，请记住，使用组合式函数会让 **SSR** 变得更加复杂

## 3. 使用 TS 定义 state，并使用它

```typescript
interface State {
  userList: UserInfo[]
  user: UserInfo | null
}

const useStore = defineStore('storeId', {
  state: (): State => {
    return {
      userList: [],
      user: null,
    }
  },
})

interface UserInfo {
  name: string
  age: number
}
```

### 3.1. 使用 Store

```typescript
const store = useStore()

store.count++


// 重置，将 state 重置为初始值。
store.$reset()
```

### 3.2. 选项式的重置与管理

直接调用内部返回的 `$reset()` 即可

```typescript
const store = useStore()

store.$reset()
```

选项式中
- 你可以使用 `mapState` 来辅助管理状态，将 state 属性映射为**只读的计算属性**
- 可以使用 `mapWritableState()` 来修改 state 属性

### 3.3. 组合式的重置

需要自定义 `$reset()`

```typescript
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function $reset() {
    count.value = 0
  }

  return { count, $reset }
})
```

### 3.4. 变更 state

```typescript
① 同一时间更改多个属性
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})

② 函数来组合控制更复杂的变更操作
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

### 3.5. 替换 state

```typescript
// 这实际上并没有替换`$state`
store.$state = { count: 24 }
// 在它内部调用 `$patch()`：
store.$patch({ count: 24 })
```

### 3.6. 监听或者订阅 state

使用 `$subscribe`

```typescript
cartStore.$subscribe((mutation, state) => {
  // import { MutationType } from 'pinia'
  mutation.type // 'direct' | 'patch object' | 'patch function'
  // 和 cartStore.$id 一样
  mutation.storeId // 'cart'
  // 只有 mutation.type === 'patch object'的情况下才可用
  mutation.payload // 传递给 cartStore.$patch() 的补丁对象。

  // 每当状态发生变化时，将整个 state 持久化到本地存储。
  localStorage.setItem('cart', JSON.stringify(state))
})
```

卸载后监听仍然保留

```typescript
<script setup>
const someStore = useSomeStore()
// 此订阅器即便在组件卸载之后仍会被保留
someStore.$subscribe(callback, { detached: true })
</script>
```

当然，你可以使用 `watch` 来监听，即在 pinia 实例上使用 watch() 函数侦听整个 state

```typescript
watch(
  pinia.state,
  (state) => {
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    localStorage.setItem('piniaState', JSON.stringify(state))
  },
  { deep: true }
)
```

## 4. Action

### 4.1. 基本使用

- Action 相当于组件中的 `method`
- action 可以是**异步**的，也可以是 **同步**

```typescript
import { mande } from 'mande'

const api = mande('/api/users')

export const useUsers = defineStore('users', {
  state: () => ({
    userData: null,
    // ...
  }),

  actions: {
   
   同步的
   increment() {
      this.count++
    },
    异步的
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
        showTooltip(`Welcome back ${this.userData.name}!`)
      } catch (error) {
        showTooltip(error)
        // 让表单组件显示错误
        return error
      }
    },
  },
})
```

Action 可以像函数或者通常意义上的方法一样被调用，如下：

```html
<script setup>
const store = useCounterStore()
// 将 action 作为 store 的方法进行调用
store.randomizeCounter()
</script>
<template>
  <!-- 即使在模板中也可以 -->
  <button @click="store.randomizeCounter()">Randomize</button>
</template>
```

### 4.2. 访问其他 store 的 action

直接引入调用就好了，这样的好处是，可以**全局管理所有的 store**

```typescript
import { useAuthStore } from './auth-store'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    preferences: null,
    // ...
  }),
  actions: {
    async fetchUserPreferences() {
      const auth = useAuthStore()
      if (auth.isAuthenticated) {
        this.preferences = await fetchPreferences()
      } else {
        throw new Error('User must be authenticated')
      }
    },
  },
})

```

### 4.3. Action 选项式 API 的用法

先看看 组合式的用法，**更易用**

```html
<script>
import { useCounterStore } from '../stores/counter'
export default defineComponent({
  setup() {
    const counterStore = useCounterStore()
    return { counterStore }
  },
  methods: {
    incrementAndPrint() {
      this.counterStore.increment()
      console.log('New Count:', this.counterStore.count)
    },
  },
})
</script>
```

可使用 `mapActions()` 辅助函数将 action 属性**映射为你组件中的方法**

```typescript
import { mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
  methods: {
    // 访问组件内的 this.increment()
    // 与从 store.increment() 调用相同
    ...mapActions(useCounterStore, ['increment'])
     
    ① 与上述相同，但将其注册为this.myOwnName()
    
    ...mapActions(useCounterStore, { myOwnName: 'increment' }),
  },
}
```

### 4.4. 订阅或监听 Action

即 监听 action 方法执行后的结果

```typescript
const unsubscribe = someStore.$onAction(
  ({
    name, // action 名称
    store, // store 实例，类似 `someStore`
    args, // 传递给 action 的参数数组
    after, // 在 action 返回或解决后的钩子
    onError, // action 抛出或拒绝的钩子
  }) => {
    // 为这个特定的 action 调用提供一个共享变量
    const startTime = Date.now()
    // 这将在执行 "store "的 action 之前触发。
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // 这将在 action 成功并完全运行后触发。
    // 它等待着任何返回的 promise
    after((result) => {
      console.log(
        `Finished "${name}" after ${
          Date.now() - startTime
        }ms.\nResult: ${result}.`
      )
    })

    // 如果 action 抛出或返回一个拒绝的 promise，这将触发
    onError((error) => {
      console.warn(
        `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
      )
    })
  }
)

// 手动删除监听器
unsubscribe()
```

第二次参数：`someStore.$onAction(callback, true)`

```typescript
<script setup>
const someStore = useSomeStore()
// 此订阅器即便在组件卸载之后仍会被保留
someStore.$onAction(callback, true)
</script>
```

## 5. Pinia 插件

插件是通过` pinia.use() `添加到` pinia 实例`的 ，使用插件的场景有

- 添加新的状态属性到store
- 定义store时创建新的选项
- 为store增加新的方法
- 包装现有的方法
- 改变或取消action
- 实现副作用，比如本地存储
- 扩展store的属性

### 5.1. 最简单的一个示例

通过返回一个对象**将一个静态属性添加到所有 store**，如：

```typescript
import { createPinia } from 'pinia'

// 创建的每个 store 中都会添加一个名为 `secret` 的属性。
// 在安装此插件后，插件可以保存在不同的文件中
function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }
}

const pinia = createPinia()
// 将该插件交给 Pinia
pinia.use(SecretPiniaPlugin)

// 在另一个文件中
const store = useStore()
store.secret // 'the cake is a lie'
```

这对添加**全局对象**很有用，如**路由器、modal 或 toast 管理器**

### 5.2. 如何定义插件

```typescript
export function myPiniaPlugin(context) {
  context.pinia // 用 `createPinia()` 创建的 pinia。 
  context.app // 用 `createApp()` 创建的当前应用(仅 Vue 3)。
  context.store // 该插件想扩展的 store
  context.options // 定义传给 `defineStore()` 的 store 的可选对象。
  // ...
}
```

### 5.3. 每个 store 都添加上特定属性

```typescript
// 上文示例
pinia.use(({ store }) => {
  store.hello = 'world'
  // 确保你的构建工具能处理这个问题，webpack 和 vite 在默认情况下应该能处理。
  if (process.env.NODE_ENV === 'development') {
    // 添加你在 store 中设置的键值
    store._customProperties.add('hello')
  }
})
```

>  每个 `store` 都被 `reactive` 包装过

### 5.4. 添加新的外部属性

```typescript
import { markRaw } from 'vue'
// 根据你的路由器的位置来调整
import { router } from './router'

pinia.use(({ store }) => {
  store.router = markRaw(router)
})
```

使用 `markRaw` 标记一个对象，使其在响应式系统中变为非响应式的，避免无意义的渲染

### 5.5. 在插件中调用 $subscribe

你也可以在插件中使用 `store.$subscribe 和 store.$onAction `。

```typescript
pinia.use(({ store }) => {
  store.$subscribe(() => {
    // 响应 store 变化
  })
  store.$onAction(() => {
    // 响应 store actions
  })
})
```

### 5.6. 在定义 store 时，可添加新的 options

比如，你可以创建一个 `debounce` 选项，允许你让**任何 action 实现防抖**。

## 6. TS 支持

具体再参考文档

## 7. 组件外部使用 Store

在组件外部使用store时，情况会有所不同。

在单页面应用程序中，只需在创建pinia实例之后调用`useStore()`函数即可正常工作。确保在pinia安装后才调用`useStore()`函数即可。

例如，在Vue Router的导航守卫中使用 `store` 时，应将 useStore() 的调用放在`beforeEach()`函数中

## 8. Pinia 不太需要类似 immer.js 这样的库

### 8.1. **Vue 的响应式系统本身已经很完善**

```js
// Pinia store 示例
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      name: 'John',
      profile: {
        age: 25,
        address: {
          city: 'New York'
        }
      }
    }
  }),
  
  actions: {
    // Vue 的响应式系统可以直接修改嵌套对象
    updateCity(newCity) {
      this.user.profile.address.city = newCity // 直接修改即可
    }
  }
})
```

### 8.2. **Pinia 的状态更新是可变的**

```js
// Pinia 中直接修改状态
const store = useUserStore()

// 直接修改
store.user.name = 'Jane'

// 批量修改
store.$patch({
  user: {
    name: 'Jane',
    profile: {
      age: 26
    }
  }
})

// 使用函数式修改
store.$patch((state) => {
  state.user.name = 'Jane'
  state.user.profile.age += 1
})
```

### 8.3. **对比 React + Redux 的情况**

```js
// React + Redux 需要 immer.js
const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      // 不使用 immer 时需要手动处理不可变更新
      return {
        ...state,
        user: {
          ...state.user,
          profile: {
            ...state.user.profile,
            address: {
              ...state.user.profile.address,
              city: action.payload
            }
          }
        }
      }
  }
}

// 使用 immer 后
import produce from 'immer'

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'UPDATE_USER':
      draft.user.profile.address.city = action.payload
      break
  }
})
```

### 8.4. **Pinia 的内置功能**

```js
// Pinia 提供了多种状态管理方式
const store = useUserStore()

// 1. 直接修改
store.count++

// 2. $patch 方法
store.$patch({
  count: store.count + 1,
  name: 'Jane'
})

// 3. 使用 actions
store.increment()

// 4. 重置状态
store.$reset()

// 5. 批量修改状态
store.$patch((state) => {
  // 可以进行任意修改
  state.items.push({ name: 'new item' })
  state.count++
})
```

### 8.5. **为什么 Pinia 不需要 immer.js**

```js
// Pinia store
const useStore = defineStore('main', {
  state: () => ({
    nested: {
      data: {
        count: 0
      }
    }
  }),
  
  actions: {
    // 1. 直接修改嵌套数据
    updateCount() {
      this.nested.data.count++ // Vue 响应式系统会自动处理
    },
    
    // 2. 批量修改
    batchUpdate() {
      this.$patch((state) => {
        state.nested.data.count++
        state.nested.data.newField = 'value'
      })
    },
    
    // 3. 替换整个对象
    replaceNested() {
      this.nested = {
        data: {
          count: 100
        }
      }
    }
  }
})
```

### 8.6. **性能考虑**

```js
// Pinia 已经优化了性能
const store = useStore()

// 1. 组件中使用 storeToRefs 来保持响应性
import { storeToRefs } from 'pinia'
const { nested } = storeToRefs(store)

// 2. 计算属性自动追踪依赖
const doubleCount = computed(() => store.nested.data.count * 2)

// 3. 监听状态变化
watch(
  () => store.nested.data.count,
  (newValue) => {
    console.log('Count changed:', newValue)
  }
)
```

### 8.7. 总结

- **不必要性**：
	- Vue 的响应式系统已经很好地处理了状态更新
	- Pinia 支持直接修改状态
	- 提供了多种状态管理方式
- **性能影响**：
	- 添加 immer.js 会增加包体积
	- 可能会引入额外的性能开销
	- Vue 的响应式系统已经很高效
- **开发体验**：
	- Pinia 的 API 设计已经很友好
	- 不需要考虑不可变更新
	- 代码更简洁直观
- **特殊情况**：
	- 如果你的项目同时使用 React 和 Vue，并且已经使用了 immer.js
	- 如果你需要特别复杂的状态更新逻辑
	- 这些情况下可以考虑使用 immer.js，但大多数情况下是不必要的

因此，在一般的 Vue + Pinia 项目中，没有必要使用 immer.js，Vue 的响应式系统和 Pinia 的 API 已经足够优秀和便捷。