var searchBST = function (root, target) {
  if (root === null) {
    return null;
  }

  // base case: root 为 null 时，返回 null
  if (root.val === target) {
    return root;
  }

  // 左子树中搜索
  let left = searchBST(root.left, target);
  if (left) {
    return left;
  }

  // 右子树中搜索
  let right = searchBST(root.right, target);
  if (right) {
    return right;
  }

  // 没有找到目标值
  return null;
};
