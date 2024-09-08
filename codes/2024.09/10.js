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
var maxLevelSum = function (root) {
  // 表示返回的结果
  let res = 0;
  // 表示最大的层和,初始化为最小安全整数
  let maxSum = Number.MIN_SAFE_INTEGER;
  // 广度优先搜索
  let queue = [];
  queue.push(root);
  let level = 0;
  while (queue.length) {
    let size = queue.length;
    let sum = 0;
    // 遍历当前层的节点，即 level 层的节点
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    // 比较当前层的和与最大层和
    // 如果当前层的和大于最大层和，则更新最大层和和结果
    if (sum > maxSum) {
      maxSum = sum;
      res = level;
    }
    // 层数加一
    level++;
  }
  // 返回结果
  return res + 1;
};
