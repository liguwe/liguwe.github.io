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
var tree2str = function (root) {
    if (!root) return "";
    if (root.left === null && root.right === null) {
        return root.val + "";
    }

    let left = tree2str(root.left);
    let right = tree2str(root.right);
    // 右子树为空
    if (root.left !== null && root.right === null) {
        // 省略空的右子树
        return root.val + "(" + left + ")";
    }
    // 左子树为空
    if (root.left === null && root.right !== null) {
        // 空的左子树不能省略
        return root.val + "()" + "(" + right + ")";
    }

    // 左右子树都不空的情况
    return root.val + "(" + left + ")" + "(" + right + ")";
};
