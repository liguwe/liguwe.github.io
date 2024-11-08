type VNodeTypes =
  | string
  | VNode
  | Component
  | typeof Text
  | typeof Static
  | typeof Comment
  | typeof Fragment
  | typeof Teleport
  | typeof Suspense;

const vdom = {
  type: "div",
  props: {
    id: "foo",
  },
  children: [
    {
      type: "p",
      children: "p tag",
    },
    {
      type: "h1",
      children: "H1 tag",
    },
    {
      type: "div",
      children: [
        {
          type: "span",
          children: "div > span > tag",
        },
      ],
    },
  ],
};
