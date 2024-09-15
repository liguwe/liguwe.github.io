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

  // 使用 BFS 层序遍历，每层最后一个节点就是右视图的节点
  // 1. 定义一个队列，用于存储每一层的节点
  const queue = [];
  // 2. 将根节点放入队列中
  queue.push(root);

  // 3. 开始 BFS 遍历
  while (queue.length) {
    // 3.1. 获取当前层的节点个数
    const levelSize = queue.length;
    // 3.2. 遍历当前层的节点
    for (let i = 0; i < levelSize; i++) {
      // 3.2.1. 取出队头元素
      const node = queue.shift();
      // 3.2.2. 如果当前节点为空，直接跳过
      if (node == null) {
        continue;
      }
      // 3.2.3. 如果当前节点是当前层的最后一个节点，将当前节点的值放入结果数组中
      if (i == levelSize - 1) {
        res.push(node.val);
      }
      // 最后 将当前节点的左右子节点放入队列中
      if (node?.left) {
        queue.push(node.left);
      }
      if (node?.right) {
        queue.push(node.right);
      }
    }
  }

  return res;
};
