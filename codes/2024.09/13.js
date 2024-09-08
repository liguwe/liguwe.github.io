var BST = function (root, target) {
  if (root.val === target) {
    // 找到目标，做点什么
  }
  if (root.val < target) {
    BST(root.right, target);
  }
  if (root.val > target) {
    BST(root.left, target);
  }
};
