// 最终生成的 jsAST
const jsAST = {
  type: "FunctionDecl",
  id: {
    type: "Identifier",
    name: "render",
  },
  params: [],
  body: [
    {
      type: "ReturnStatement",
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

console.log(generate(jsAST));

// function render () {
//   return h('div', [h('p', 'Vue'), h('p', 'Template')])
// }

function generate(node) {
  const context = {
    code: "",
    push(code) {
      context.code += code;
    },
    currentIndent: 0,
    newline() {
      context.code += "\n" + `  `.repeat(context.currentIndent);
    },
    indent() {
      context.currentIndent++;
      context.newline();
    },
    deIndent() {
      context.currentIndent--;
      context.newline();
    },
  };

  genNode(node, context);

  return context.code;
}

function genNode(node, context) {
  switch (node.type) {
    case "FunctionDecl":
      genFunctionDecl(node, context);
      break;
    case "ReturnStatement":
      genReturnStatement(node, context);
      break;
    case "CallExpression":
      genCallExpression(node, context);
      break;
    case "StringLiteral":
      genStringLiteral(node, context);
      break;
    case "ArrayExpression":
      genArrayExpression(node, context);
      break;
  }
}

function genFunctionDecl(node, context) {
  const { push, indent, deIndent } = context;

  push(`function ${node.id.name} `);
  push(`(`);
  genNodeList(node.params, context);
  push(`) `);
  push(`{`);
  indent();

  node.body.forEach((n) => genNode(n, context));

  deIndent();
  push(`}`);
}

function genNodeList(nodes, context) {
  const { push } = context;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    genNode(node, context);
    if (i < nodes.length - 1) {
      push(", ");
    }
  }
}

function genReturnStatement(node, context) {
  const { push } = context;

  push(`return `);
  genNode(node.return, context);
}

function genCallExpression(node, context) {
  const { push } = context;
  const { callee, arguments: args } = node;
  push(`${callee.name}(`);
  genNodeList(args, context);
  push(`)`);
}

function genStringLiteral(node, context) {
  const { push } = context;

  push(`'${node.value}'`);
}

function genArrayExpression(node, context) {
  const { push } = context;
  push("[");
  genNodeList(node.elements, context);
  push("]");
}
