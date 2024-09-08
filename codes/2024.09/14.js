var isValidBST = function (root) {
  return _isValidBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

/**
 * @description 判断一棵树是否是二叉搜索树
 * @param {TreeNode} root 二叉树根节点
 * @param {number} min 代表 root.val 的下界
 * @param {number} max 代表 root.val 的上界
 * @return {boolean} 是否是二叉搜索树
 */
var _isValidBST = function (root, min, max) {
  // base case: root 为 null 时，是二叉搜索树
  if (root === null) {
    return true;
  }
  // 若 root.val 不符合 min < root.val < max，说明不是二叉搜索树
  if (root.val <= min || root.val >= max) {
    return false;
  }

  // 递归判断左右子树是否是二叉搜索树
  // 左子树的最大值为 root.val, 最小值为 min
  let left = _isValidBST(root.left, min, root.val);
  // 右子树的最小值为 root.val, 最大值为 max
  let right = _isValidBST(root.right, root.val, max);

  return left && right;
};
