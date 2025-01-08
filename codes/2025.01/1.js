/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}  比如： "1,2,#,4,#,#,3,#,#";
 */
var serialize = function (root) {
  let res = [];
  let q = [root];
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      if (!node) {
        res.push("#");
        continue;
      }
      res.push(node.val);
      q.push(node.left);
      q.push(node.right);
    }
  }
  return res.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  console.log("data:", data);
  // 1. 处理空树情况
  if (data === "#") return null;
  let arr = data.split(",");

  let root = new TreeNode(parseInt(arr[0]));
  let q = [root];
  let index = 1;
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let node = q.shift();
      // 构造左树
      let left = arr[index++];
      console.log("left***", left);
      if (left !== "#") {
        node.left = new TreeNode(parseInt(left));
        q.push(node.left);
      }
      // 构造右树
      let right = arr[index++];
      if (right !== "#") {
        node.right = new TreeNode(parseInt(right));
        q.push(node.right);
      }
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
