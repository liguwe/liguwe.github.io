var Node = {
  val: 0,
  left: null,
  right: null,
  parent: null,
};

// 二叉树中两个节点的最近公共祖先
var lowestCommonAncestor = function (p, q) {
  // 分别记录 p 和 q 的父节点，用于移动 p 和 q 到根节点
  let p1 = p;
  let p2 = q;

  while (p1 != p2) {
    // 如果 p1 为空，移动到 q 的父节点
    // 如果 p1 不为空，向根节点方向移动，即指针向指向 p1 的父节点
    if (p1 === null) {
      p1 = q;
    } else {
      p1 = p1.parent;
    }

    // 如果 p2 为空，移动到 p 的父节点
    // 如果 p2 不为空，向根节点方向移动，指针向指向 p2 的父节点
    if (p2 === null) {
      p2 = p;
    } else {
      p2 = p2.parent;
    }
  }
};
