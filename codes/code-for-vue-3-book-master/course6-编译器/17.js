function createVNode(tag, props, children, flags) {
  const key = props && props.key;

  // 为什么要删除 key 属性呢？
  // 因为 key 属性是用来做虚拟节点的唯一标识的，不应该被挂载到 props 上
  props && delete props.key;

  const vnode = {
    tag,
    props,
    children,
    key,
    flags,
  };

  if (typeof flags !== "undefined" && currentDynamicChildren) {
    // 动态节点
    currentDynamicChildren.push(vnode);
  }

  return vnode;
}

// 动态节点栈
const dynamicChildrenStack = [];
// 当前动态节点集合
let currentDynamicChildren = null;
// openBlock 用来创建一个新的动态节点集合，并将该集合压入栈中
function openBlock() {
  dynamicChildrenStack.push((currentDynamicChildren = []));
}
// closeBlock 用来将通过 openBlock 创建的动弹节点集合从栈中弹出
function closeBlock() {
  currentDynamicChildren = dynamicChildrenStack.pop();
}

function createBlock(tag, props, children) {
  const block = createVNode(tag, props, children);
  block.dynamicChildren = currentDynamicChildren;

  closeBlock();

  return block;
}

const block =
  (openBlock(),
  createBlock("div", null, [
    createVNode("p", { class: "foo" }, null, 1),
    createVNode("p", { class: "bar" }, null),
  ]));

console.log(block);

// 生成的 block 结构如下
const logBlock = {
  tag: "div",
  props: null,
  children: [
    {
      tag: "p",
      props: {
        class: "foo",
      },
      children: null,
      flags: 1,
    },
    {
      tag: "p",
      props: {
        class: "bar",
      },
      children: null,
    },
  ],
  key: null,
  dynamicChildren: [
    {
      tag: "p",
      props: {
        class: "foo",
      },
      children: null,
      flags: 1,
    },
  ],
};

// render() {
//   return createVNode('div', {}, [
//     createVNode('div', {}, [
//       createVNode('div', {}, [
//         createVNode('div', {}, [
//           createVNode('div', {}, [
//             // ...
//           ])
//         ])
//       ])
//     ])
//   ])
// }
