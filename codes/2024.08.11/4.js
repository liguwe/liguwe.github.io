/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function (root) {
  // 好节点的数量
  let res = 0;
  // 递归函数
  /**
   * @param {TreeNode} node 当前节点
   * @param {number} max 当前路径上的最大值, 初始值为根节点的值,后面会不断更新，需要传递给子节点
   * */
  function traverse(node, max) {
    if (!node) {
      return;
    }
    // 前序位置
    // 先判断当前节点是否是好节点
    // 如果是，好节点数量加 1，同时更新 max
    if (node.val >= max) {
      res++;
      max = node.val;
    }

    // 继续递归左右子树
    traverse(node.left, max);
    traverse(node.right, max);
  }
  traverse(root, root.val);
  return res;
};
