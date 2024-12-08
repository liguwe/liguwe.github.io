
# Vue3 事件与原生事件的关系和冒泡机制差异

`#vue3` `#R2` 

>  Vue3 的事件系统是建立在原生 DOM 事件系统之上的，它保持了原生事件的冒泡机制，同时提供了更便捷的事件处理方式和**自定义事件系统**


- `@click` 等保持原生事件的特性
- 自定义事件，比如 `@custom-event` 不会冒泡，和原生事件不太一样


## 目录
<!-- toc -->
 ## 1. 事件覆盖关系 

Vue3 不会覆盖原生事件，而是在**原生事件的基础上进行封装**。

### 1.1. 基本事件处理

```vue
<template>
  <!-- Vue 事件处理器会被转换为原生事件监听器 -->
  <button @click="handleClick">点击</button>
</template>

<script setup>
const handleClick = (event) => {
  // event 是原生的 Event 对象
  console.log('是否是原生事件对象：', event instanceof Event) // true
}
</script>
```

### 1.2. 同时使用 Vue 事件和原生事件



#### `@click` 和 `:onClick`

```vue hl:18
<template>
  <button 
    @click="vueClickHandler"
    :onClick="nativeClickHandler"
  >
    点击
  </button>
</template>

<script setup>
const vueClickHandler = (e) => {
  console.log('Vue 事件处理器')
}

const nativeClickHandler = (e) => {
  console.log('原生事件处理器')
}
// 两个处理器都会执行，Vue 事件处理器先执行
</script>
```

#### 同时使用 `Vue 事件`和 `.native 修饰符`

```vue
<template>
  <!-- 方式1：同时使用 Vue 事件和 .native 修饰符 -->
  <button 
    @click="handleVueClick"
    @click.native="handleNativeClick"
  >
    按钮
  </button>
```

>  vue3 中移除了  `native` 修饰符！

#### 使用 Vue 事件和原生 DOM 方式

```html
  <!-- 方式2：使用 Vue 事件和原生 DOM 方式 -->
  <button 
    ref="btn"
    @click="handleVueClick"
  >
    按钮
  </button>
</template>

<script>
export default {
  mounted() {
    // 添加原生事件监听
    this.$refs.btn.addEventListener('click', this.handleNativeClick)
  },
  beforeDestroy() {
    // 记得移除原生事件监听
    this.$refs.btn.removeEventListener('click', this.handleNativeClick)
  },
  methods: {
    handleVueClick(e) {
      console.log('Vue 事件触发', e)
    },
    handleNativeClick(e) {
      console.log('原生事件触发', e)
    }
  }
}
</script>
```

#### 结论与原因分析

结论：
1. Vue 事件和原生事件**不会相互覆盖**，而是会按照事件冒泡的顺序依次触发
2. 原生事件优先于 Vue 事件触发
3. 使用事件修饰符可以控制事件的传播
4. 在组件销毁时要注意清理原生事件监听
5. 根据具体需求选择合适的事件处理方式

原因：
- 原生事件直接绑定在 DOM 上
- Vue 事件是通过事件委托（event delegation）实现
- Vue 的事件处理系统在原生事件系统之上构建

## 2. 冒泡机制

Vue3 的事件冒泡机制与原生 DOM 事件完全一致，遵循先捕获后冒泡的原则。

> 因为 vue3 事件就是对原生事件的封装而已

### 2.1. 事件流程展示

```vue hl:6
<template>
  <div @click.capture="captureOuter" @click="bubbleOuter">
    外层
    <div @click.capture="captureMiddle" @click="bubbleMiddle">
      中层
      <div @click.capture="captureInner" @click="bubbleInner">
        内层
      </div>
    </div>
  </div>
</template>

<script setup>
// 事件触发顺序：
// 1. captureOuter
// 2. captureMiddle
// 3. captureInner
// 4. bubbleInner
// 5. bubbleMiddle
// 6. bubbleOuter

const captureOuter = () => console.log('外层捕获')
const captureMiddle = () => console.log('中层捕获')
const captureInner = () => console.log('内层捕获')
const bubbleOuter = () => console.log('外层冒泡')
const bubbleMiddle = () => console.log('中层冒泡')
const bubbleInner = () => console.log('内层冒泡')
</script>
```

### 2.2. 阻止冒泡的方式

```vue
<template>
  <div @click="outerClick">
    外层
    <!-- 方式1：使用 .stop 修饰符 -->
    <div @click.stop="middleClick">
      中层
      <!-- 方式2：在事件处理函数中调用 stopPropagation -->
      <div @click="innerClick">
        内层
      </div>
    </div>
  </div>
</template>

<script setup>
const outerClick = () => console.log('外层点击')
const middleClick = () => console.log('中层点击')
const innerClick = (event) => {
  event.stopPropagation()
  console.log('内层点击')
}
</script>
```

## 3. 自定义组件事件

**自定义组件的事件不参与 DOM 事件的冒泡机制，它们有自己的触发和传播规则**。

即自定义事件不会冒泡到父元素的 DOM 事件，和原生 DOM 事件不一样

```vue hl:20
<!-- 子组件 Child.vue -->
<template>
  <div @click="handleClick">
    <button>点击</button>
  </div>
</template>

<script setup>
const emit = defineEmits(['custom-click'])

const handleClick = () => {
  // 触发自定义事件
  emit('custom-click')
}
</script>

<!-- 父组件 Parent.vue -->
<template>
  <div @click="parentClick">
    <!-- 自定义事件不会冒泡到父元素的 DOM 事件 -->
    <Child @custom-click="childClick" />
  </div>
</template>

<script setup>
const parentClick = () => console.log('父元素点击')
const childClick = () => console.log('子组件自定义事件')
</script>
```

## 4. 混合使用场景

### 4.1. 原生事件和自定义事件混用

```vue hl:5
<template>
  <div @click="handleDivClick">
    <CustomButton 
      @click="handleCustomClick"
      @custom-event="handleCustomEvent"
      v-on:click.native="handleNativeClick"
    />
  </div>
</template>

<script setup>
const handleDivClick = () => console.log('div clicked')
const handleCustomClick = () => console.log('custom click')
const handleCustomEvent = () => console.log('custom event')
const handleNativeClick = () => console.log('native click')
</script>
```

### 4.2. 事件修饰符的影响

```vue hl:4
<template>
  <div @click="parentClick">
    父元素
    <!-- .stop 只会阻止 DOM 事件冒泡 -->
    <CustomButton 
      @click.stop="buttonClick"
      @custom-event="customEvent"
    />
  </div>
</template>
```

## 5. 实际应用示例

### 5.1. 表单验证

```vue
<template>
  <form @submit.prevent="handleSubmit">
    <div @click="containerClick">
      <input
        @focus="handleFocus"
        @blur="handleBlur"
        @input="handleInput"
        v-model="value"
      />
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')

const containerClick = (e) => {
  // 容器点击事件
  console.log('container clicked')
}

const handleFocus = (e) => {
  // 不会冒泡到容器
  e.stopPropagation()
  console.log('input focused')
}

const handleBlur = (e) => {
  console.log('input blurred')
}

const handleInput = (e) => {
  console.log('input value changed')
}

const handleSubmit = (e) => {
  console.log('form submitted')
}
</script>
```

### 5.2. 嵌套菜单

```vue
<template>
  <div class="menu" @click.capture="handleCapture">
    <div 
      v-for="item in menuItems" 
      :key="item.id"
      @click.stop="handleItemClick(item)"
    >
      {{ item.label }}
      <div v-if="item.children" class="submenu">
        <div 
          v-for="child in item.children"
          :key="child.id"
          @click.stop="handleSubItemClick(child)"
        >
          {{ child.label }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleCapture = (e) => {
  console.log('捕获阶段:', e.target)
}

const handleItemClick = (item) => {
  console.log('菜单项点击:', item)
}

const handleSubItemClick = (item) => {
  console.log('子菜单项点击:', item)
}
</script>
```

## 6. 注意事项

### 6.1. **事件委托的正确使用**：

```vue hl:2,9
<template>
  <!-- 推荐：使用事件委托 -->
  <ul @click="handleClick">
    <li v-for="item in items" :key="item.id" :data-id="item.id">
      {{ item.name }}
    </li>
  </ul>

  <!-- 不推荐：为每个项添加事件监听器 -->
  <ul>
    <li 
      v-for="item in items" 
      :key="item.id"
      @click="handleClick"
    >
      {{ item.name }}
    </li>
  </ul>
</template>
```

### 6.2. **避免事件重复绑定**：

```vue
<template>
  <!-- 错误示例 -->
  <div v-for="item in items" :key="item.id">
    <button 
      @click="handleClick"
      :onClick="nativeClick"
    >
      {{ item.name }}
    </button>
  </div>

  <!-- 正确示例 -->
  <div @click="handleContainerClick">
    <button 
      v-for="item in items" 
      :key="item.id"
      :data-id="item.id"
    >
      {{ item.name }}
    </button>
  </div>
</template>
```

