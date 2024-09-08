var kthSmallest = function (root, k) {
  let res = 0;
  function traverse(node) {
    if (!node) return;

    traverse(node.left);
    /*********************************
     ********** 中序位置 **************
     **********************************/
    k--;
    // k === 0 时，表示已经找到第 k 小的元素
    if (k === 0) {
      res = node.val;
      return;
    }
    traverse(node.right);
  }

  traverse(root);

  return res;
};
