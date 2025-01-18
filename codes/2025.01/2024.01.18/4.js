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
var sumRootToLeaf = function (root) {
    let sum = 0;
    let res = [];

    function traverse(root, path) {
        if (!root) return;
        path.push(root.val);
        if (!root.left && !root.right) {
            res.push([...path]);
        } else {
            traverse(root.left, path);
            traverse(root.right, path);
        }
        path.pop();
    }

    traverse(root, []);

    res.forEach((item) => {
        sum += parseInt(item.join(""), 2);
    });

    return sum;
};
