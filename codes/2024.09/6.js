// 二叉树搜索树中两个节点的最近公共祖先
var lowestCommonAncestor = function (root, p, q) {
  // 如果当前节点为空，说明没有最近公共祖先
  if (root == null) {
    return null;
  }

  // 如果 p 和 q 都小于当前节点的值，说明最近公共祖先在左子树
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  // 如果 p 和 q 都大于当前节点的值，说明最近公共祖先在右子树
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  // 如果 p 和 q 一个大于当前节点的值，一个小于当前节点的值，说明当前节点就是最近公共祖先
  return root;
};
