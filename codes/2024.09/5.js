function lowestCommonAncestor(root, p, q) {
  return find(root, p.val, q.val);
}

function find(root, val1, val2) {
  if (root == null) {
    return null;
  }

  // 不能找到就返回 root,因为提设中说 p 和 q 不一定存在于二叉树中
  // if (root.val == val1 || root.val == val2) {
  //   return root;
  // }

  let left = find(root.left, val1, val2);
  let right = find(root.right, val1, val2);

  // 后序位置：
  // 如果左右子树都找到了，说明当前节点就是最近公共祖先
  if (left && right) {
    return root;
  }
  // 如果左子树找到了，右子树没找到，说明最近公共祖先在左子树
  if (left && !right) {
    return left;
  }
  // 如果右子树找到了，左子树没找到，说明最近公共祖先在右子树
  if (!left && right) {
    return right;
  }

  return left || right || null;
}
