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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
  let letterStr = "abcdefghijklmnopqrstuvwxyz";

  let str = "";
  let res = [];

  function traverse(root, path) {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      path.push(root.val);
      res.push([...path]);
      path.pop();
    }
    path.push(root.val);
    traverse(root.left, path);
    traverse(root.right, path);
    path.pop();
  }

  traverse(root, []);

  let result = [];

  res.forEach((item) => {
    let copy = item.map((it) => {
      console.log(33, letterStr[it]);
      return letterStr[it];
    });
    result.push([...copy]);
  });
  result = result.map((it) => {
    return it.join("").split("").reverse().join("");
  });

  console.log(result);

  result.sort((a, b) => {
    if (a < b) return -1; // str1 在 str2 前面
    if (a > b) return 1; // str1 在 str2 后面
    return 0; // 两个字符串相等
  });

  str = result[0];

  return str;

  console.log(12222, result[0]);
};
