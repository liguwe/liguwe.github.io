// `<div><p>Vue</p><p>Template</p></div>`
function render() {
  return h("div", [h("p", "Vue"), h("p", "Template")]);
}

// 最终生成的 jsAST
const jsAST = {
  // 代表该节点是一个函数声明
  type: "FunctionDecl",
  // 标识符，本身也是一个节点，所以有自己的type和name属性
  id: {
    type: "Identifier",
    name: "render", // 函数名
  },
  params: [], // 参数列表
  body: [
    // 函数体
    {
      type: "ReturnStatement", // 代表该节点是一个返回语句
      return: {
        type: "CallExpression",
        callee: {
          type: "Identifier",
          name: "h",
        },
        arguments: [
          {
            type: "StringLiteral",
            value: "div",
          },
          {
            type: "ArrayExpression",
            elements: [
              {
                type: "CallExpression",
                callee: {
                  type: "Identifier",
                  name: "h",
                },
                arguments: [
                  {
                    type: "StringLiteral",
                    value: "p",
                  },
                  {
                    type: "StringLiteral",
                    value: "Vue",
                  },
                ],
              },
              {
                type: "CallExpression",
                callee: {
                  type: "Identifier",
                  name: "h",
                },
                arguments: [
                  {
                    type: "StringLiteral",
                    value: "p",
                  },
                  {
                    type: "StringLiteral",
                    value: "Template",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ],
};
