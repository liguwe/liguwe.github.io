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
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = [];
  if (root == null) {
    return [];
  }
  traverse(root, 0, res);
  return res;
};

/**
 * @description 定义：从二叉树的根节点开始，按照「根节点、右子树、左子树」的顺序遍历二叉树
 * @param {TreeNode} root
 * @param {number} depth
 * @param {number[]} res
 */
var traverse = function (root, depth, res) {
  // 递归的终止条件，root 为空
  if (root == null) {
    return;
  }
  // 前序遍历位置
  //要点①： 先访问当前节点，再递归地访问右子树和左子树
  if (res.length == depth) {
    res.push(root.val);
  }
  // 要点②：一定要先递归访问右子树，再递归访问左子树
  traverse(root.right, depth + 1, res);
  traverse(root.left, depth + 1, res);
};
