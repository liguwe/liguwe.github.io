var lowestCommonAncestor = function (root, nodes) {
  // 将列表转化成哈希集合，便于判断元素是否存在
  let values = new Set();
  for (let node of nodes) {
    values.add(node.val);
  }

  return find(root, values);
};

var find = function (root, values) {
  if (root == null) {
    return null;
  }
  // 使用哈希集合判断当前节点存在于 values 中
  if (values.has(root.val)) {
    return root;
  }
  let left = find(root.left, values);
  let right = find(root.right, values);

  // 后序位置：
  // 如果左右子树都找到了，说明当前节点就是最近公共祖先
  if (left && right) {
    return root;
  }
  // 如果左子树找到了，右子树没找到，说明最近公共祖先在左子树
  // 如果右子树找到了，左子树没找到，说明最近公共祖先在右子树
  // 如果左右子树都没找到，说明最近公共祖先不存在
  // 因为题设说了 p 和 q 一定存在于二叉树中，所以这里不用考虑两个都没找到的情况
  return left || right;
};
