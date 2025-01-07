var invertTree = function (root) {
  function traverse(root) {
    if (!root) return;
    // 进入每个节点时，应该干什么？
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    traverse(root.left);
    traverse(root.right);
  }

  traverse(root);
  // 以 root 为根的这棵二叉树已经被翻转，返回 root
  return root;
};
