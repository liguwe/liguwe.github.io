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
 * @return {number}
 */
var longestZigZag = function(root) {
    let res = 0;
    /*************************************************
     * :::: 递归函数定义：输入二叉树的根节点 root ，返回两个值
     * ① 第一个是从 root 开始向左走的最长交错路径长度
     * ② 第二个是从 root 开始向右走的最长交错路径长度
     ************************************************/
    var getPathLen = function(root) {
        if (root == null) {
            return [-1, -1];
        }
        // 代表从左子树开始的交错路径长度
        let left = getPathLen(root.left);
        // 代表从右子树开始的交错路径长度
        let right = getPathLen(root.right);
        /*************************************************
         * ::::后序位置，根据左右子树的交错路径长度推算根节点的交错路径长度
         ************************************************/
        let rootPathLen1 = left[1] + 1;
        let rootPathLen2 = right[0] + 1;

        // 更新全局最大值
        res = Math.max(res, Math.max(rootPathLen1, rootPathLen2));

        return [rootPathLen1, rootPathLen2];
    }

    getPathLen(root);
    return res;
};
