var maxSumBST = function () {
  // 全局变量，记录 BST 最大节点之和
  var maxSum = 0;

  // 遍历二叉树
  var traverse = function (root) {
    if (root === null) {
      return;
    }
    // ******* 前序遍历位置 *******
    // ① 判断左右子树是不是 BST 二叉搜索树
    if (isBST(root.left) && isBST(root.right)) {
      // ② 计算左子树的最大值和右子树的最小值
      var leftMax = findMax(root.left);
      var rightMin = findMin(root.right);
      // ③ 判断以 root 节点为根的树是不是 BST
      if (root.val > leftMax && root.val < rightMin) {
        // 如果条件都符合，计算当前 BST 的节点之和
        var leftSum = findSum(root.left);
        var rightSum = findSum(root.right);
        var rootSum = leftSum + rightSum + root.val;
        // 计算 BST 节点的最大和
        maxSum = Math.max(maxSum, rootSum);
      }
    }
    // **************************

    // 二叉树遍历框架，遍历子树节点
    traverse(root.left);
    traverse(root.right);
  };

  traverse(root);
  return maxSum;
};

// 计算以 root 为根的二叉树的最大值
var findMax = function (root) {};

// 计算以 root 为根的二叉树的最小值
var findMin = function (root) {};

// 计算以 root 为根的二叉树的节点和
var findSum = function (root) {};

// 判断以 root 为根的二叉树是否是 BST
var isBST = function (root) {};
