const State = {
  initial: 1,
  tagOpen: 2,
  tagName: 3,
  text: 4,
  tagEnd: 5,
  tagEndName: 6,
};

function isAlpha(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z");
}

function tokenize(str) {
  let currentState = State.initial;
  const chars = [];
  const tokens = [];
  while (str) {
    const char = str[0];
    switch (currentState) {
      case State.initial:
        if (char === "<") {
          currentState = State.tagOpen;
          str = str.slice(1);
        } else if (isAlpha(char)) {
          currentState = State.text;
          chars.push(char);
          str = str.slice(1);
        }
        break;
      case State.tagOpen:
        if (isAlpha(char)) {
          currentState = State.tagName;
          chars.push(char);
          str = str.slice(1);
        } else if (char === "/") {
          currentState = State.tagEnd;
          str = str.slice(1);
        }
        break;
      case State.tagName:
        if (isAlpha(char)) {
          chars.push(char);
          str = str.slice(1);
        } else if (char === ">") {
          currentState = State.initial;
          tokens.push({
            type: "tag",
            name: chars.join(""),
          });
          chars.length = 0;
          str = str.slice(1);
        }
        break;
      case State.text:
        if (isAlpha(char)) {
          chars.push(char);
          str = str.slice(1);
        } else if (char === "<") {
          currentState = State.tagOpen;
          tokens.push({
            type: "text",
            content: chars.join(""),
          });
          chars.length = 0;
          str = str.slice(1);
        }
        break;
      case State.tagEnd:
        if (isAlpha(char)) {
          currentState = State.tagEndName;
          chars.push(char);
          str = str.slice(1);
        }
        break;
      case State.tagEndName:
        if (isAlpha(char)) {
          chars.push(char);
          str = str.slice(1);
        } else if (char === ">") {
          currentState = State.initial;
          tokens.push({
            type: "tagEnd",
            name: chars.join(""),
          });
          chars.length = 0;
          str = str.slice(1);
        }
        break;
    }
  }

  return tokens;
}

function parse(str) {
  const tokens = tokenize(str);

  const root = {
    type: "Root",
    children: [],
  };
  const elementStack = [root];

  while (tokens.length) {
    const parent = elementStack[elementStack.length - 1];
    const t = tokens[0];
    switch (t.type) {
      case "tag":
        const elementNode = {
          type: "Element",
          tag: t.name,
          children: [],
        };
        parent.children.push(elementNode);
        elementStack.push(elementNode);
        break;
      case "text":
        const textNode = {
          type: "Text",
          content: t.content,
        };
        parent.children.push(textNode);
        break;
      case "tagEnd":
        elementStack.pop();
        break;
    }
    tokens.shift();
  }

  return root;
}

function traverseNode(ast, context) {
  context.currentNode = ast;

  const exitFns = [];
  const transforms = context.nodeTransforms;
  for (let i = 0; i < transforms.length; i++) {
    const onExit = transforms[i](context.currentNode, context);
    if (onExit) {
      exitFns.push(onExit);
    }
    if (!context.currentNode) return;
  }

  const children = context.currentNode.children;
  if (children) {
    for (let i = 0; i < children.length; i++) {
      context.parent = context.currentNode;
      context.childIndex = i;
      traverseNode(children[i], context);
    }
  }

  let i = exitFns.length;
  while (i--) {
    exitFns[i]();
  }
}

function transform(ast) {
  const context = {
    currentNode: null,
    parent: null,
    replaceNode(node) {
      context.currentNode = node;
      context.parent.children[context.childIndex] = node;
    },
    removeNode() {
      if (context.parent) {
        context.parent.children.splice(context.childIndex, 1);
        context.currentNode = null;
      }
    },
    nodeTransforms: [transformRoot, transformElement, transformText],
  };
  // 调用 traverseNode 完成转换
  traverseNode(ast, context);
}

// =============================== AST 工具函数 ===============================

// 创建 AST 节点: StringLiteral 节点
function createStringLiteral(value) {
  return {
    type: "StringLiteral",
    value,
  };
}
// 创建 AST 节点: Identifier  节点
function createIdentifier(name) {
  return {
    type: "Identifier",
    name,
  };
}
// 创建 AST 节点: ArrayExpression  节点
function createArrayExpression(elements) {
  return {
    type: "ArrayExpression",
    elements,
  };
}
// 创建 AST 节点: CallExpression 节点
function createCallExpression(callee, arguments) {
  return {
    type: "CallExpression",
    callee: createIdentifier(callee),
    arguments,
  };
}

// =============================== AST 工具函数 ===============================

// 模板 AST 文本 转换 JS  StringLiteral 节点
function transformText(node) {
  if (node.type !== "Text") {
    return;
  }

  node.jsNode = createStringLiteral(node.content);
}

// 模板 AST 元素 转换 JS  CallExpression 节点,因为要调用 h 函数
function transformElement(node) {
  return () => {
    if (node.type !== "Element") {
      return;
    }

    const callExp = createCallExpression("h", [createStringLiteral(node.tag)]);
    node.children.length === 1
      ? callExp.arguments.push(node.children[0].jsNode)
      : callExp.arguments.push(
          createArrayExpression(node.children.map((c) => c.jsNode)),
        );

    node.jsNode = callExp;
  };
}

// 模板 AST 根节点 转换 JS  FunctionDecl 节点
// 根节点只有一个子节点，所以直接返回子节点的 jsNode
function transformRoot(node) {
  return () => {
    if (node.type !== "Root") {
      return;
    }

    const vnodeJSAST = node.children[0].jsNode;

    node.jsNode = {
      type: "FunctionDecl",
      id: { type: "Identifier", name: "render" },
      params: [],
      body: [
        {
          type: "ReturnStatement",
          return: vnodeJSAST,
        },
      ],
    };
  };
}

const ast = parse(`<div><p>Vue</p><p>Template</p></div>`);
transform(ast);

console.log(ast);
