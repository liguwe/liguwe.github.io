
# created 和 mounted 这两个生命周期钩子的区别



## 目录
<!-- toc -->
 ## 1. 执行时机不同 

```javascript hl:18
// Options API 方式
export default {
  created() {
    // 在实例创建完成后被立即调用
    // 此时组件实例已经创建完成，但还没有挂载到 DOM
  },
  mounted() {
    // 在组件被挂载到 DOM 后调用
    // 此时可以访问到真实的 DOM 元素
  }
}

// Composition API 方式
import { onMounted } from 'vue'

export default {
  setup() {
    // 相当于 created
    console.log('setup执行，组件创建完成')
    
    onMounted(() => {
      // 组件挂载到 DOM 后执行
      console.log('组件已挂载到 DOM')
    })
  }
}
```

## 2. 可访问的内容不同

```javascript
export default {
  data() {
    return {
      message: 'Hello'
    }
  },
  created() {
    // ✅ 可以访问响应式数据
    console.log(this.message)
    
    // ❌ 不能访问 DOM
    console.log(this.$el) // undefined
    
    // ✅ 可以进行数据请求
    this.fetchData()
  },
  mounted() {
    // ✅ 可以访问响应式数据
    console.log(this.message)
    
    // ✅ 可以访问 DOM
    console.log(this.$el)
    console.log(document.getElementById('app'))
    
    // ✅ 可以进行 DOM 操作
    this.$el.querySelector('.title').style.color = 'red'
  }
}
```

## 3. 使用场景不同

```javascript
export default {
  created() {
    // 适合做的事情：
    // 1. 初始化数据
    this.initData()
    
    // 2. 进行数据请求
    this.fetchUserInfo()
    
    // 3. 添加事件监听（不涉及 DOM）
    window.addEventListener('resize', this.handleResize)
  },
  mounted() {
    // 适合做的事情：
    // 1. DOM 操作
    this.$refs.myInput.focus()
    
    // 2. 第三方库初始化（需要 DOM）
    new Chart(this.$refs.chart)
    
    // 3. 需要元素尺寸的计算
    this.elementWidth = this.$el.offsetWidth
  }
}
```

## 4. 在异步组件中的表现

```javascript hl:7
// AsyncComponent.vue
export default {
  async setup() {
    const data = await fetchData() // 异步操作
    
    onMounted(() => {
      // 只有在异步操作完成并组件挂载后才会执行
      console.log('组件挂载完成')
    })
    
    return { data }
  }
}
```

## 5. 父子组件的执行顺序

```javascript
// Parent.vue
export default {
  created() {
    console.log('Parent created')
  },
  mounted() {
    console.log('Parent mounted')
  }
}

// Child.vue
export default {
  created() {
    console.log('Child created')
  },
  mounted() {
    console.log('Child mounted')
  }
}

// 执行顺序：
// 1. Parent created
// 2. Child created
// 3. Child mounted
// 4. Parent mounted
```

## 6. 主要区别总结

- 执行时机：
	- created：在组件实例创建完成后立即执行
	- mounted：在组件挂载到 DOM 后执行
- DOM 访问：
	- created：无法访问 DOM，因为组件还未挂载
	- mounted：可以访问 DOM，组件已经挂载完成
- 适用场景：
	- created：
		 - 初始化数据
		 - 数据请求
		 - 设置事件监听（不涉及 DOM）
	- mounted：
		 - DOM 操作
		 - 第三方库初始化（需要 DOM）
		 - 需要访问子组件
		 - 需要元素尺寸计算
- Composition API 中：
	- created 钩子对应 setup 函数本身
	- mounted 钩子对应 onMounted 函数
- 注意事项：
	- 在 created 中进行的数据请求可能导致**页面闪烁**
	- mounted 不保证**所有子组件都已挂载完成**，如需要可以使用 nextTick

## 7. 使用建议

1. 如果不需要访问 DOM，优先在 created 中进行数据初始化和请求
2. 涉及 DOM 操作的逻辑都放在 mounted 中
3. 使用 Composition API 时，优先考虑使用 setup + onMounted 的组合
4. 需要在服务器端渲染时，要注意 mounted 钩子只会在客户端执行

