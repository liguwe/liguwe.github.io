var maxSumBST = function (root) {
  // 记录 BST 最大节点之和
  var maxSum = 0;

  // 计算以 root 为根的二叉树的最大值、最小值、节点和
  /**
   * @description 计算以 root 为根的二叉树的 [最大值、最小值、节点和]
   * @param {TreeNode} root
   * @return {Array} [是否 BST（0 不是，1 是）, 所有节点中的最小值, 所有节点中的最大值, 所有节点值之和]
   */
  var findMaxMinSum = function (root) {
    // base case
    if (root === null) {
      return [1, Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0];
    }

    // 递归计算左右子树
    var left = findMaxMinSum(root.left);
    var right = findMaxMinSum(root.right);

    // ******* 后序遍历位置 *******
    // 通过 left 和 right 推导返回值
    // 并且正确更新 maxSum 变量
    var res = [0, 0, 0, 0];
    // 若左右子树都是 BST，且 root 大于左子树的最大值，小于右子树的最小值
    // 则以 root 为根的二叉树是 BST, 更新 res
    if (
      left[0] === 1 &&
      right[0] === 1 &&
      root.val > left[2] &&
      root.val < right[1]
    ) {
      // 以 root 为根的二叉树是 BST
      res[0] = 1;
      // 计算以 root 为根的这棵 BST 的最小值
      res[1] = Math.min(left[1], root.val);
      // 计算以 root 为根的这棵 BST 的最大值
      res[2] = Math.max(right[2], root.val);
      // 计算以 root 为根的这棵 BST 所有节点之和
      res[3] = left[3] + right[3] + root.val;
      // 更新全局变量
      maxSum = Math.max(maxSum, res[3]);
      // 否则，以 root 为根的二叉树不是 BST
    } else {
      // 以 root 为根的二叉树不是 BST
      res[0] = 0;
      // 其他的值都没必要计算了，因为用不到
    }
    // ************************
    // ************************

    return res;
  };

  findMaxMinSum(root);
  return maxSum;
};
