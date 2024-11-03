// 简化版 Vue3 Diff 算法实现
class VNode {
  constructor(type, props, children, el) {
    this.type = type; // 节点类型
    this.props = props; // 节点属性
    this.children = children; // 子节点
    this.el = el; // 真实 DOM 元素
    this.key = props?.key; // 节点 key
  }
}

// 核心 Diff 算法实现
// n1 : 旧节点
// n2 : 新节点
function patch(n1, n2, container) {
  if (n1 === n2) return;

  if (n1 && !isSameVNode(n1, n2)) {
    unmount(n1);
    n1 = null;
  }

  const { type } = n2;
  if (typeof type === "string") {
    if (!n1) {
      // 挂载新节点
      mountElement(n2, container);
    } else {
      // 更新节点
      patchElement(n1, n2);
    }
  }
}

// 判断是否是相同节点: type 和 key 相同
function isSameVNode(n1, n2) {
  return n1.type === n2.type && n1.key === n2.key;
}

// 挂载元素
function mountElement(vnode, container) {
  const el = document.createElement(vnode.type);
  vnode.el = el;

  // 处理属性
  if (vnode.props) {
    for (const key in vnode.props) {
      el.setAttribute(key, vnode.props[key]);
    }
  }

  // 处理子节点
  if (typeof vnode.children === "string") {
    el.textContent = vnode.children;
  } else if (Array.isArray(vnode.children)) {
    vnode.children.forEach((child) => patch(null, child, el));
  }

  container.appendChild(el);
}

// 更新元素
function patchElement(n1, n2) {
  const el = (n2.el = n1.el);
  const oldProps = n1.props || {};
  const newProps = n2.props || {};

  // 更新属性
  for (const key in newProps) {
    if (newProps[key] !== oldProps[key]) {
      el.setAttribute(key, newProps[key]);
    }
  }
  for (const key in oldProps) {
    if (!(key in newProps)) {
      el.removeAttribute(key);
    }
  }

  // 更新子节点
  patchChildren(n1, n2, el);
}

// 子节点更新
function patchChildren(n1, n2, container) {
  const oldChildren = n1.children;
  const newChildren = n2.children;

  if (typeof newChildren === "string") {
    // 新子节点是文本
    if (Array.isArray(oldChildren)) {
      oldChildren.forEach((child) => unmount(child));
    }
    container.textContent = newChildren;
  } else if (Array.isArray(newChildren)) {
    // 新子节点是数组
    if (Array.isArray(oldChildren)) {
      // 核心 Diff
      patchKeyedChildren(oldChildren, newChildren, container);
    } else {
      container.textContent = "";
      newChildren.forEach((child) => patch(null, child, container));
    }
  } else {
    // 新子节点不存在
    if (Array.isArray(oldChildren)) {
      oldChildren.forEach((child) => unmount(child));
    } else if (typeof oldChildren === "string") {
      container.textContent = "";
    }
  }
}

// 带 key 的子节点 Diff
function patchKeyedChildren(oldChildren, newChildren, container) {
  let oldStartIdx = 0;
  let oldEndIdx = oldChildren.length - 1;
  let newStartIdx = 0;
  let newEndIdx = newChildren.length - 1;

  let oldStartVNode = oldChildren[oldStartIdx];
  let oldEndVNode = oldChildren[oldEndIdx];
  let newStartVNode = newChildren[newStartIdx];
  let newEndVNode = newChildren[newEndIdx];

  // 双端比较：新头和老头、新尾和老尾、新头和老尾、新尾和老头
  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    // 老头不存在,则移动老头指针
    if (!oldStartVNode) {
      oldStartVNode = oldChildren[++oldStartIdx];
    } else if (!oldEndVNode) {
      oldEndVNode = oldChildren[--oldEndIdx];
    } else if (isSameVNode(oldStartVNode, newStartVNode)) {
      // 头部节点相同
      patch(oldStartVNode, newStartVNode, container);
      oldStartVNode = oldChildren[++oldStartIdx];
      newStartVNode = newChildren[++newStartIdx];
    } else if (isSameVNode(oldEndVNode, newEndVNode)) {
      // 尾部节点相同
      patch(oldEndVNode, newEndVNode, container);
      oldEndVNode = oldChildren[--oldEndIdx];
      newEndVNode = newChildren[--newEndIdx];
    } else if (isSameVNode(oldStartVNode, newEndVNode)) {
      // 老头和新尾相同
      patch(oldStartVNode, newEndVNode, container);
      container.insertBefore(oldStartVNode.el, oldEndVNode.el.nextSibling);
      oldStartVNode = oldChildren[++oldStartIdx];
      newEndVNode = newChildren[--newEndIdx];
    } else if (isSameVNode(oldEndVNode, newStartVNode)) {
      // 老尾和新头相同
      patch(oldEndVNode, newStartVNode, container);
      container.insertBefore(oldEndVNode.el, oldStartVNode.el);
      oldEndVNode = oldChildren[--oldEndIdx];
      newStartVNode = newChildren[++newStartIdx];
    } else {
      // 处理非理想情况
      const idxInOld = oldChildren.findIndex(
        (node) => node && isSameVNode(node, newStartVNode),
      );

      if (idxInOld >= 0) {
        const vnodeToMove = oldChildren[idxInOld];
        patch(vnodeToMove, newStartVNode, container);
        container.insertBefore(vnodeToMove.el, oldStartVNode.el);
        oldChildren[idxInOld] = undefined;
      } else {
        // 挂载新节点
        patch(null, newStartVNode, container);
      }
      newStartVNode = newChildren[++newStartIdx];
    }
  }

  // 处理剩余节点
  if (oldStartIdx > oldEndIdx) {
    // 添加新节点
    const anchor = newChildren[newEndIdx + 1]
      ? newChildren[newEndIdx + 1].el
      : null;
    while (newStartIdx <= newEndIdx) {
      patch(null, newChildren[newStartIdx++], container, anchor);
    }
  } else if (newStartIdx > newEndIdx) {
    // 移除多余节点
    while (oldStartIdx <= oldEndIdx) {
      if (oldChildren[oldStartIdx]) {
        unmount(oldChildren[oldStartIdx]);
      }
      oldStartIdx++;
    }
  }
}

// 移除节点
function unmount(vnode) {
  if (vnode.el) {
    const parent = vnode.el.parentNode;
    if (parent) {
      parent.removeChild(vnode.el);
    }
  }
}

// 创建虚拟节点
function h(type, props, children) {
  return new VNode(type, props, children, null);
}

// 示例使用
const oldVNode = h("div", { id: "old" }, [
  h("p", { key: "A" }, "A"),
  h("p", { key: "B" }, "B"),
  h("p", { key: "C" }, "C"),
]);

const newVNode = h("div", { id: "new" }, [
  h("p", { key: "B" }, "B"),
  h("p", { key: "A" }, "A"),
  h("p", { key: "D" }, "D"),
]);

// 执行更新
patch(oldVNode, newVNode, document.body);
