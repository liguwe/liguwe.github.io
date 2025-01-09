function State(node, depth) {
  this.node = node;
  this.depth = depth;
}

var levelOrderTraverse = function (root) {
  if (root === null) {
    return;
  }
  var q = [];
  // 根节点的路径权重和是 1
  q.push(new State(root, 1));

  while (q.length !== 0) {
    var cur = q.shift();
    // 访问 cur 节点，同时知道它的路径权重和
    console.log("depth = " + cur.depth + ", val = " + cur.node.val);

    // 把 cur 的左右子节点加入队列
    if (cur.node.left !== null) {
      q.push(new State(cur.node.left, cur.depth + 1));
    }
    if (cur.node.right !== null) {
      q.push(new State(cur.node.right, cur.depth + 1));
    }
  }
};
