// propsKey 属性是否应该作为DOM Property被设置。
// true 表示可以使用DOM Property设置，el[propsKey] = xx, false表示只可以用setAttribute设置
function shouldSetAsProps(el, propsKey, value) {
  // 所有表单元素都具有form属性表示
  if (propsKey === "form" && el.tagName.toLowerCase() === "input") return false;
  return propsKey in el;
}

// 渲染器
function createRenderer(options = {}) {
  const { createElement, setElementText, insert, patchProps } = options;

  // 挂载函数
  function mountElement(vnode, container) {
    // 通过vnode的el属性获得真实DOM
    const el = (vnode.el = createElement(vnode.type));
    // children处理
    if (typeof vnode.children === "string") {
      // 如果节点值是string，设置文本
      setElementText(el, vnode.children);
    } else if (Array.isArray(vnode.children)) {
      // children是一个数组，遍历这个数组，数组每个元素都是一个vnode
      // 调用patch将他们挂载上去. oldVNode=null, container = el
      vnode.children.forEach((child) => {
        patch(null, child, el);
      });
    }
    // 设置vnode属性
    if (vnode.props) {
      for (const propsKey in vnode.props) {
        const value = vnode.props[propsKey];
        patchProps(el, propsKey, null, value);
      }
    }
    // 将el挂载在container上
    insert(el, container);
  }

  // 更新函数
  function patchElement(oldVNode, newVNode) {
    const el = (newVNode.el = oldVNode.el),
      oldProps = oldVNode.props,
      newProps = newVNode.props;
    // 更新Props
    for (const key in newProps) {
      if (newProps[key] !== oldProps[key]) {
        patchProps(el, key, oldProps[key], newProps[key]);
      }
    }
    for (const key in oldProps) {
      if (!(key in newProps)) {
        patchProps(el, key, oldProps[key], null);
      }
    }
    // 更新子节点
    patchChildren(oldVNode, newVNode, el);
  }

  function patchChildren(oldVNode, newVNode, container) {
    // 判断新子节点的类型是否是文本类型
    if (typeof newVNode.children === "string") {
      // 旧子节点的类型只有三种： 无子节点， 文本子节点， 组合子节点
      if (Array.isArray(oldVNode.children)) {
        oldVNode.children.forEach((child) => unmounted(child));
      }
      setElementText(container, newVNode.children);
    } else if (Array.isArray(newVNode.children)) {
      // 新子节点的类型是一组子节点
      if (Array.isArray(oldVNode.children)) {
        // 旧子节点的类型是一组节点
        // 简单Diff
        const oldChildren = oldVNode.children, // 旧子节点
          newChildren = newVNode.children, // 新子节点
          oldLen = oldChildren.length, // 旧子节点的长度
          newLen = newChildren.length, // 新子节点的长度
          commonLen = Math.min(oldLen, newLen); // 取最小值
        // 尽量少的使用patch
        for (let i = 0; i < commonLen; i++) {
          patch(oldChildren[i], newChildren[i], container);
        }
        // 如果newLen > oldLen 说明还有要挂载的, 否则就是oldChildren要卸载
        if (newLen > oldLen) {
          for (let i = commonLen; i < newLen; i++) {
            patch(null, newChildren[i], container);
          }
        } else {
          for (let i = commonLen; i < oldLen; i++) {
            unmounted(oldChildren[i]);
          }
        }
      } else {
        // 此时，旧子节点的类型要么是文本类型，要么是无
        // 但无论那种情况，都需要将容器清空，然后将新的一组子节点逐个挂载
        setElementText(container, "");
        newVNode.children.forEach((child) => {
          patch(null, child, container);
        });
      }
    } else {
      // newVNode.children === null或者'' 没有新子节点，
      if (Array.isArray(oldVNode.children)) {
        // 旧子节点是一组节点 就逐个卸载
        oldVNode.children.forEach((child) => unmounted(child));
      } else if (typeof oldVNode.children === "string") {
        // 旧子节点是文本节点，就清空内容
        setElementText(container, "");
      }
    }
  }

  // 补丁函数
  function patch(oldVNode, newVNode, container) {
    // oldVNode存在，新旧vnode的type不同
    if (oldVNode && oldVNode.type !== newVNode.type) {
      unmounted(oldVNode);
      oldVNode = null;
    }
    // 代码运行到这说明oldVNode和newVNode的type是相同的
    const { type } = newVNode;

    // 开始判断vnode的type
    if (typeof type === "string") {
      // 普通标签类型的VNode.
      if (!oldVNode)
        mountElement(newVNode, container); // 挂载
      else patchElement(oldVNode, newVNode); // 更新
    } else if (typeof type === "object") {
      // 组件类型的VNode 省略代码
    } else if (type === Text) {
      // 文本类型的VNode 省略代码
    } else if (type === Comment) {
      // 注释类型的VNode 省略代码
    } else if (type === Fragment) {
      // 片断类型的VNode 省略代码
    }
  }

  // 卸载函数
  function unmounted(vnode) {
    // 卸载如果是fragment,则卸载其children
    if (vnode.type === Fragment) {
      vnode.children.forEach((c) => unmounted(c));
      return;
    }
    const parent = vnode.el.parentNode;
    if (parent) parent.removeChild(vnode.el);
  }

  // 渲染函数
  function render(vnode, container) {
    if (vnode) {
      // 新vnode存在，将其与旧vnode一起传递给patch函数打补丁
      patch(container._vnode, vnode, container);
    } else {
      if (container._vnode) {
        unmounted(container._vnode);
      }
    }
    container._vnode = vnode; // vnode改成旧的
  }

  return { render };
}

const oldVNode = {
  type: "div",
  children: [
    { type: "p", children: "1" },
    { type: "p", children: "2" },
    { type: "p", children: "3" },
  ],
};
const newVNode = {
  type: "div",
  children: [
    { type: "p", children: "4" },
    { type: "p", children: "5" },
    { type: "p", children: "6" },
  ],
};
const renderer = createRenderer({
  createElement(tag) {
    return document.createElement(tag);
  },
  setElementText(el, text) {
    el.textContent = text;
  },
  insert(el, parent, anchor = null) {
    parent.insertBefore(el, anchor);
  },
  patchProps(el, propsKey, previousValue, nextValue) {
    if (/^on/.test(propsKey)) {
      // on开头的属性是事件
      const invokers = el._vei || (el._vei = {});
      // 根据事件名获取invoker
      let invoker = invokers[propsKey];
      const eventName = propsKey.slice(2).toLowerCase();
      if (nextValue) {
        if (!invoker) {
          // invoker不存在
          invoker = el._vei[propsKey] = (event) => {
            // 伪造的事件处理函数放到el._vei[propsKey]中
            if (event.timestamp < invoker.attached) return; // 事件发生的时间 早于 事件处理函数绑定的时间，则不执行事件处理函数
            if (Array.isArray(invoker.value)) {
              // invoker.value 是一个数组
              invoker.value.forEach((fn) => fn(event));
            } else {
              invoker.value(event); // 当伪造事件处理函数invoker执行的时候，会执行内部真正的事件处理函数invoker.value,传递event进去
            }
          };
          invoker.value = nextValue; // 真正的事件处理函数赋值给invoker.value
          invokers.attached = performance.now(); // 事件绑定时间
          el.addEventListener(eventName, invoker);
        } else {
          // invoker存在，nextValue存在，那就是更新。把伪造事件处理函数invoker的value更新
          invoker.value = nextValue;
        }
      } else if (invoker) {
        // nextValue不存在，而invoker存在，说明要把原来的事件移除绑定
        el.removeEventListener(eventName, invoker);
      }
    }
    if (propsKey === " class") {
      el.className = nextValue;
    } else if (shouldSetAsProps(el, propsKey, nextValue)) {
      // HTML Attribute 跟 DOM Property有对应
      const type = typeof el[propsKey];

      // 如果type 是布尔类型的值而且value是空字符串，说明应该设置为true，而不是false
      if (type === "boolean" && nextValue === "")
        el[propsKey] = true; // 矫正设置DOM Property
      else el[propsKey] = nextValue; // 设置DOM Property
    } else {
      // HTML Attribute 和 DOM Property 没对应，比如class 和 className
      el.setAttribute(propsKey, vnode.props[propsKey]);
    }
  },
});
renderer.render(oldVNode, document.getElementById("app"));
