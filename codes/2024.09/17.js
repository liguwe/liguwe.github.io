function insertIntoBST(root, val) {
  //如果根节点为空，直接返回一个新节点，值为 val
  if (!root) {
    return new TreeNode(val);
  }
  //如果 val 大于当前节点的值，递归插入到右子树
  if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }
  //如果 val 小于当前节点的值，递归插入到左子树
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  }
  // 最后，返回根节点
  return root;
}
