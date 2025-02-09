var searchBST = function (root, target) {
  if (root === null) {
    return null;
  }

  // base case: root 为 null 时，返回 null
  if (root.val === target) {
    return root;
  }

  // 如果目标值小于当前节点值，搜索左子树
  if (target < root.val) {
    return searchBST(root.left, target);
  }
  // 如果目标值大于当前节点值，搜索右子树
  if (target > root.val) {
    return searchBST(root.right, target);
  }

  return null;
};
