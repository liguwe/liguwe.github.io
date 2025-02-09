/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    return [];
  }
  return build(1, n);
};

/**
 *@description 生成[lo,hi]区间的所有二叉搜索树
 *@param {*} lo
 *@param {*} hi
 */
function build(lo, hi) {
  let res = [];
  // 递归的出口,空节点
  // lo > hi 代表空节点,即没有节点的二叉树
  // 为什么是 null 而不是 [] ?
  // 因为 null 代表空节点, [] 代表空数组, 代表有一个节点的二叉树
  if (lo > hi) {
    res.push(null);
    return res;
  }
  // 穷举 root 节点的所有可能
  for (let i = lo; i <= hi; i++) {
    // 递归构造出左右子树的所有有效 BST=>递归构造左右子树
    let left = build(lo, i - 1);
    let right = build(i + 1, hi);
    // 给 root 节点穷举所有左右子树的组合
    for (let leftNode of left) {
      for (let rightNode of right) {
        let root = new TreeNode(i);
        root.left = leftNode;
        root.right = rightNode;
        res.push(root);
      }
    }
  }

  return res;
}
