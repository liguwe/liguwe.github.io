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
  if (!root) {
    return [];
  }

  let res = [];
  let q = [root];

  while (q.length) {
    let len = q.length;
    let last = q[0];
    for (let i = 0; i < len; i++) {
      let cur = q.shift();
      // 倒着遍历
      if (cur.right) q.push(cur.right);
      if (cur.left) q.push(cur.left);
    }
    res.push(last.val);
  }

  return res;
};
