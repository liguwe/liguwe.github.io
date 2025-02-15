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
 * @return {TreeNode}
 */
var balanceBST = function (root) {
    let nums = [];
    function traverse(root) {
        if (!root) return;
        traverse(root.left);
        nums.push(root.val);
        traverse(root.right);
    }
    traverse(root);
    function build(nums, left, right) {
        if (left > right) return null;
        let mid = left + Math.floor((right - left) / 2);
        let root = new TreeNode(nums[mid]);
        root.left = build(nums, left, mid - 1);
        root.right = build(nums, mid + 1, right);
        return root;
    }
    return build(nums, 0, nums.length - 1);
};
