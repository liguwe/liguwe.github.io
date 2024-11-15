
# 原始值的响应方案

`#vue3` 

本文讲原始值的响应方案，比如 `Boolean String BigInt Symbol undefined null Number`


## 目录
<!-- toc -->
 ## 1. 总结 

- ref 的原理
	- 本质上 `ref` 是一个“包裹 对象”。
		- `因为` JavaScript 的 Proxy 无法提供对原始值的代理，`所以`我们需要使用一层对象作为包裹，`间接`实现原始值的响应式方案。
	- 如何判断是 ref 对象
		- 由于“包 裹对象”本质上与普通对象没有任何区别，因此为了区分 ref 与普通响应式对象，我们还为“包裹对象”定义了一个值为 true 的属性，即 __v_isRef，用它作为 ref 的标识。
- 响应式丢失问题
	- ref 除了能够用于原始值的响应式方案之外，还能用来解决`响应丢失问题`。
	- 为了解决该问题，我们实现了 `toRef` 以及 `toRefs` 这两个函数。它们本质上是对响应式数据做了一层包装，或者叫作“访问代理”。
- 自动脱 ref 的能力
	- 模板中的响应式数据进行脱 ref 处理
	- 表现为 vue 模板中不需要输入 `.value`

## 2. Ref 的原理

原始值`按值传递`，所以需要`包裹` , 我们使用 `ref()` 来包裹。代码如下：

```javascript hl:9
function ref(val) {
    const wrapper = {
        value: val
    }
    // 定义一个不可枚举不可写的属性，用于标识他是一个 ref
    Object.defineProperty(wrapper, '__v_isRef', {
        value: true
    })
    return reactive(wrapper)
}

```

> `ref` 依赖 `reactive`

## 3. 响应式丢失问题

`ref` 还能解决`响应式丢失`的问题，关于`响应式丢失`，我们来看一个例子

```javascript hl:4,11

const obj = reactive({foo: 1, bar: 2});

// :::: 使用 ... 运算符
const newObj = {...obj}; 

effect(() => {
    console.log(newObj.foo); // newObj 没有任何响应能力，所以这里不会触发 effect
})

// :::: 很显然，这里不会触发 effect 
obj.foo = 2; 
```

有没有什么办法，即使使用 `newObj` 普通对象访问属性值，也会被收集响应呢？答案如下：

```javascript hl:4,5
const obj = reactive({foo: 1, bar: 2});
const newObj = {
    foo: {
        get value() {
            return obj.foo
        }
    },
    bar: {
        get value() {
            return bar.foo
        }
    }
}

effect(() => {
    // 这里会触发 get value() ，从而访问了 obj.foo ，从而触发收集依赖
    console.log(newObj.foo); 
})

obj.foo = 2;
```

所以封装两个函数 `toRef`  和 `toRefs` 

## 4. toRef 与 toRefs

```javascript hl:12
function toRefs(obj) {
  const ret = {}
  for (const key in obj) {
    ret[key] = toRef(obj, key)
  }
  return ret
}

function toRef(obj, key) {
  const wrapper = {
    get value() {
      return obj[key]
    },
    set value(val) {
      obj[key] = val
    }
  }

  Object.defineProperty(wrapper, '__v_isRef', {
    value: true
  })

  return wrapper
}
```

这样，就能正确的触发收集了。

>  这下知道这个两个函数是干什么的了吧？以前都有一点懵逼

## 5. 自动脱落 `ref` 的能力

最后，我们说说 自动脱落 `ref` 的能力，啥意思呢？

比如模板代码，每次都需要加一个 `.value` ？

```html
<div>{{foo.value}}</div>

```

有啥办法解决吗？ 其实很简单，如下代码：

![|672](https://832-1310531898.cos.ap-beijing.myqcloud.com/4a689b99b8f3b3e902890b4f5a93765a.png)

