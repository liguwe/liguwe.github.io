/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function (root1, root2, target) {
    let arr1 = [];
    let arr2 = [];
    function traverse(root, res) {
        if (!root) return;
        traverse(root.left, res);
        res.push(root.val);
        traverse(root.right, res);
    }
    traverse(root1, arr1);
    traverse(root2, arr2);

    let m = arr1.length;
    let n = arr2.length;
    let i = 0;
    let j = n - 1;

    while (i < m && j >= 0) {
        let sum = arr1[i] + arr2[j];
        if (sum < target) {
            i++;
        } else if (sum > target) {
            j--;
        } else {
            return true;
        }
    }

    return false;
};
