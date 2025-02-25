
# Vue3 中 is 属性的使用方法和应用场景

`#vue3` `#R1` 

> 它为**动态组件渲染**提供了强大而灵活的支持
>  一定需要配合 `component` 使用
>  注意 📢 `import` 关键词的一些用法，特别是动态的场景


## 目录
<!-- toc -->
 ## 1. 基本用法 

### 1.1. 动态组件

```vue
<template>
  <!-- 使用 is 动态切换组件 -->
  <component :is="currentComponent" />
</template>

<script>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data() {
    return {
      currentComponent: 'ComponentA'
    }
  }
}
</script>
```

### 1.2. 在 `setup` 语法糖中使用

```vue hl:10
<template>
  <component :is="activeComponent" />
</template>

<script setup>
import { ref, markRaw } from 'vue'
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

// 使用 markRaw 避免不必要的响应式包装
const activeComponent = ref(markRaw(ComponentA))

// 切换组件
const switchComponent = () => {
  activeComponent.value = markRaw(ComponentB)
}
</script>
```

#### 1.2.1. 附：markRaw

`markRaw` 是 Vue 3 中的一个工具函数，**用于标记一个对象，使其永远不会被转换为响应式对象**。使用好处是：
1. 提高应用性能
2. 减少不必要的响应式转换
3. 更好地处理第三方库集成
4. 优化内存使用

```javascript hl:9
import { markRaw, reactive } from 'vue'

// 普通对象会被转换为响应式
const foo = reactive({ count: 1 })

// 使用 markRaw 标记的对象将保持原始状态
const bar = markRaw({ count: 1 })
const reactiveBar = reactive(bar)
// reactiveBar 仍然是非响应式的
```

>  再次 reactive 包装也是无响应式的

## 2. DOM 内置元素

### 2.1. 动态渲染不同的 HTML 元素

```vue hl:14,18
<template>
  <!-- 动态切换元素类型 -->
  <component 
    :is="tag" 
    :class="elementClass"
  >
    内容
  </component>
</template>

<script setup>
import { ref } from 'vue'

const tag = ref('div')

// 可以动态切换为其他 HTML 元素
const changeToButton = () => {
  tag.value = 'button'
}
</script>
```

### 2.2. 处理受限制的元素

- 保证 `tr/td` 一定包裹在 `tbody` 里面

```vue hl:3
<template>
  <table>
    <component :is="'tbody'">
      <tr>
        <td>表格内容</td>
      </tr>
    </component>
  </table>
</template>
```

## 3. 内置组件渲染

### 3.1. 渲染内置组件

```vue hl:2
<template>
  <component :is="'transition'">
    <div v-if="show">过渡内容</div>
  </component>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
</script>
```

### 3.2. 结合 keep-alive 使用

```vue hl:2
<template>
  <keep-alive>
    <component :is="currentTab" />
  </keep-alive>
</template>

<script setup>
import { ref } from 'vue'
import TabA from './TabA.vue'
import TabB from './TabB.vue'

const currentTab = ref('TabA')
</script>
```

## 4. 高级用法

### 4.1. 异步组件

```vue hl:2,8
<template>
  <component :is="asyncComponent" />
</template>

<script setup>
import { defineAsyncComponent, ref } from 'vue'

const asyncComponent = ref(defineAsyncComponent(() => 
  import('./HeavyComponent.vue')
))
</script>
```

### 4.2. 配合 v-bind 使用

```vue hl:4
<template>
  <component 
    :is="componentName"
    v-bind="componentProps"
  />
</template>

<script setup>
import { ref } from 'vue'

const componentName = ref('CustomButton')
const componentProps = ref({
  type: 'primary',
  size: 'large',
  onClick: () => console.log('clicked')
})
</script>
```

## 5. 实际应用场景

### 5.1. 表单控件渲染器

```vue
<template>
  <form>
    <div v-for="field in formFields" :key="field.id">
      <component
        :is="getFieldComponent(field.type)"
        v-model="formData[field.name]"
        v-bind="field.props"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import InputText from './fields/InputText.vue'
import InputNumber from './fields/InputNumber.vue'
import SelectField from './fields/Select.vue'

const formData = ref({})
const formFields = ref([
  { id: 1, type: 'text', name: 'username', props: { label: '用户名' } },
  { id: 2, type: 'number', name: 'age', props: { label: '年龄' } },
  { id: 3, type: 'select', name: 'role', props: { label: '角色', options: [] } }
])

const componentMap = {
  text: InputText,
  number: InputNumber,
  select: SelectField
}

const getFieldComponent = (type) => componentMap[type]
</script>
```

### 5.2. 标签页系统

```vue
<template>
  <div class="tabs">
    <div class="tab-headers">
      <button 
        v-for="tab in tabs" 
        :key="tab.name"
        @click="activeTab = tab.name"
        :class="{ active: activeTab === tab.name }"
      >
        {{ tab.label }}
      </button>
    </div>
    
    <keep-alive>
      <component :is="currentTabComponent" />
    </keep-alive>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import TabHome from './tabs/Home.vue'
import TabProfile from './tabs/Profile.vue'
import TabSettings from './tabs/Settings.vue'

const tabs = [
  { name: 'TabHome', label: '首页', component: TabHome },
  { name: 'TabProfile', label: '个人', component: TabProfile },
  { name: 'TabSettings', label: '设置', component: TabSettings }
]

const activeTab = ref('TabHome')

const currentTabComponent = computed(() => {
  const tab = tabs.find(t => t.name === activeTab.value)
  return tab ? tab.component : null
})
</script>
```

## 6. 注意事项

### 6.1. **命名规范**：

- 字符串 `‘div’`
- 或者 变量 `MyComponent`

```vue hl:3,6
<template>
  <!-- DOM 标签使用字符串 -->
  <component :is="'div'" />
  
  <!-- 组件使用 PascalCase 命名 -->
  <component :is="MyComponent" />
</template>
```

### 6.2. **性能优化**：

```vue hl:4
<script setup>
import { markRaw } from 'vue'

// 使用 markRaw 避免不必要的响应式转换
const components = {
  foo: markRaw(FooComponent),
  bar: markRaw(BarComponent)
}
</script>
```

### 6.3. **动态组件的生命周期**：忽略，不支持了

```vue hl:3
<template>
  <keep-alive>
    <component :is="currentComponent" @hook:mounted="onComponentMounted" />
  </keep-alive>
</template>
```

>  疑问❓：没这么用过，确定可以？

> 这种写法在 Vue 3 中已经不再支持了。

### 6.4. **Props 传递**：

```vue hl:
<template>
  <component 
    :is="componentName"
    v-bind="$attrs"
    @custom-event="handleEvent"
  />
</template>
```

## 7. 在 Vue 2 和 Vue 3 中监听动态组件生命周期

### 7.1. Vue 2 中的写法（已废弃）

```vue
<!-- Vue 2 中的 @hook 写法 -->
<component 
  :is="currentComponent" 
  @hook:mounted="onComponentMounted"
  @hook:updated="onComponentUpdated"
/>
```

### 7.2. Vue 3 中的正确写法

#### 7.2.1. 使用 onMounted 在父组件中监听

```vue hl:12,19
<template>
  <component :is="currentComponent" ref="dynamicComponent" />
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const currentComponent = ref('ComponentA')
const dynamicComponent = ref(null)

// 监听组件变化
watch(() => currentComponent.value, () => {
  // 组件变化后的处理
  nextTick(() => {
    console.log('组件已更新')
  })
})

// 在父组件中监听挂载
onMounted(() => {
  console.log('动态组件已挂载')
})
</script>
```

#### 7.2.2. 通过事件通信：自定义事件通讯

父组件 

```vue
<!-- 父组件 -->
<template>
  <component 
    :is="currentComponent"
    @component-mounted="handleChildMounted"
    @component-updated="handleChildUpdated"
  />
</template>

<script setup>
import { ref } from 'vue'

const currentComponent = ref('ComponentA')

const handleChildMounted = () => {
  console.log('子组件已挂载')
}

const handleChildUpdated = () => {
  console.log('子组件已更新')
}
</script>
```

子组件

```javascript
<!-- 子组件 -->
<script setup>
import { onMounted, onUpdated } from 'vue'

const emit = defineEmits(['component-mounted', 'component-updated'])

onMounted(() => {
  emit('component-mounted')
})

onUpdated(() => {
  emit('component-updated')
})
</script>
```

#### 7.2.3. 使用 provide/inject

父组件

```vue hl:12
<!-- 父组件 -->
<template>
  <component :is="currentComponent" />
</template>

<script setup>
import { ref, provide } from 'vue'

const currentComponent = ref('ComponentA')

// 提供生命周期回调
provide('lifecycleHooks', {
  onMounted: () => {
    console.log('子组件已挂载')
  },
  onUpdated: () => {
    console.log('子组件已更新')
  }
})
</script>

```

子组件

```html

<!-- 子组件 -->
<script setup>
import { onMounted, onUpdated, inject } from 'vue'

const { onMounted: parentOnMounted, onUpdated: parentOnUpdated } = 
  inject('lifecycleHooks', {})

onMounted(() => {
  parentOnMounted?.()
})

onUpdated(() => {
  parentOnUpdated?.()
})
</script>
```

#### 7.2.4. 使用组合式函数（Composables）

```js hl:1,4
<!-- useComponentLifecycle.js -->
import { ref } from 'vue'

export function useComponentLifecycle() {
  const isComponentMounted = ref(false)
  const isComponentUpdated = ref(false)

  const setMounted = () => {
    isComponentMounted.value = true
  }

  const setUpdated = () => {
    isComponentUpdated.value = true
  }

  return {
    isComponentMounted,
    isComponentUpdated,
    setMounted,
    setUpdated
  }
}

<!-- 父组件 -->
<template>
  <component :is="currentComponent" />
</template>

<script setup>
import { ref, watch } from 'vue'
import { useComponentLifecycle } from './useComponentLifecycle'

const currentComponent = ref('ComponentA')
const { isComponentMounted, isComponentUpdated } = useComponentLifecycle()

watch(isComponentMounted, (newValue) => {
  if (newValue) {
    console.log('组件已挂载')
  }
})

watch(isComponentUpdated, (newValue) => {
  if (newValue) {
    console.log('组件已更新')
  }
})
</script>
```

#### 7.2.5. 在动态组件中使用异步组件

```vue
<template>
  <Suspense>
    <template `#default>`
      <component :is="currentComponent" />
    </template>
    <template `#fallback>`
      <div>加载中...</div>
    </template>
  </Suspense>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const ComponentA = defineAsyncComponent(() => import('./ComponentA.vue'))
const currentComponent = ref(ComponentA)


</script>
```

## 8. 需要配合 import 关键词

>  更多详见 [32. vite 之 import 关键词](/post/XQzifW7d.html)