var lowestCommonAncestor = function (root, p, q) {
  return find(root, p.val, q.val);
};

var find = function (root, val1, val2) {
  if (root == null) {
    return null;
  }
  if (root.val == val1 || root.val == val2) {
    return root;
  }
  let left = find(root.left, val1, val2);
  let right = find(root.right, val1, val2);
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
