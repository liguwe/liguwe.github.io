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
var longestConsecutive = function (root) {
    let res = 0;
    let paths = [];
    function traverse(root, len, parentVal) {
        if (!root) return;

        if (parentVal + 1 === root.val) {
            len++;
        } else {
            len = 1;
        }

        res = Math.max(res, len);
        traverse(root.left, len, root.val);
        traverse(root.right, len, root.val);
    }
    traverse(root, 1, Infinity);
    return res;
};
