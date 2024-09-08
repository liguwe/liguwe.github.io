/**
 * @description 二叉搜索树转累加树
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
  var sum = 0;

  var traverse = function (root) {
    if (root == null) {
      return;
    }
    // 需要反序中序遍历
    // 先进入右子树，再访问根节点，最后左子树
    // 所以中序遍历的逆序是：右 -> 根 -> 左
    // 计算累加和时，需要先遍历右子树，再累加根节点的值，最后遍历左子树
    traverse(root.right);
    /*****************
     * 中序遍历位置
     ****************/
    // 维护累加和
    sum += root.val;
    // 将 BST 转化成累加树
    root.val = sum;
    traverse(root.left);
  };

  traverse(root);

  // 返回根节点
  return root;
};
