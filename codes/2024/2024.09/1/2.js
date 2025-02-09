/**
 * @description 完整搜索：从二叉树中寻找一个元素
 * @param {TreeNode} root
 * @param {number} val
 */
var find = function (root, val) {
  if (root == null) {
    return null;
  }
  if (root.val == val) {
    return root;
  }
  let left = find(root.left, val);
  let right = find(root.right, val);
  return left || right;
};

/**
 * 优化： 如果已经在左子树找到了，就不需要再去右子树找了
 * @description 从二叉树中寻找一个元素
 * @param {TreeNode} root
 * @param {number} val
 */
var find1 = function (root, val) {
  if (root == null) {
    return null;
  }
  if (root.val == val) {
    return root;
  }
  let left = find1(root.left, val);
  if (left) {
    return left;
  }
  let right = find1(root.right, val);
  if (right) {
    return right;
  }
};

/**
 * @description 定义：在以 root 为根的二叉树中寻找值为 val1 或 val2 的节点
 */
var find2 = function (root, val1, val2) {
  if (root == null) {
    return null;
  }
  if (root.val == val1 || root.val == val2) {
    return root;
  }
  let left = find2(root.left, val1, val2);
  let right = find2(root.right, val1, val2);

  return left || right;
};
