
# Vue3 中 `is` 属性的使用方法和应用场景


它为**动态组件渲染**提供了强大而灵活的支持。


## 目录
<!-- toc -->
 ## 1. 基本用法 

### 1.1 动态组件

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

### 1.2 在 setup 语法糖中使用

```vue
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

## 2. DOM 内置元素

### 2.1 动态渲染不同的 HTML 元素

```vue
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

### 2.2 处理受限制的元素

保证 `tr/td` 一定包裹在 `tbody`  里面

```vue
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

### 3.1 渲染内置组件

```vue
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

### 3.2 结合 keep-alive 使用

```vue
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

### 4.1 异步组件

```vue
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

### 4.2 配合 v-bind 使用

```vue
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

### 5.1 表单控件渲染器

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

### 5.2 标签页系统

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

### 1. **命名规范**：

```vue
<template>
  <!-- DOM 标签使用字符串 -->
  <component :is="'div'" />
  
  <!-- 组件使用 PascalCase 命名 -->
  <component :is="MyComponent" />
</template>
```

### 2. **性能优化**：

```vue
<script setup>
import { markRaw } from 'vue'

// 使用 markRaw 避免不必要的响应式转换
const components = {
  foo: markRaw(FooComponent),
  bar: markRaw(BarComponent)
}
</script>
```

### 3. **动态组件的生命周期**：

```vue
<template>
  <keep-alive>
    <component :is="currentComponent" @hook:mounted="onComponentMounted" />
  </keep-alive>
</template>
```

### 4. **Props 传递**：

```vue
<template>
  <component 
    :is="componentName"
    v-bind="$attrs"
    @custom-event="handleEvent"
  />
</template>
```
