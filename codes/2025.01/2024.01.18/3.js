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
var smallestFromLeaf = function (root) {
    let res = [];
    function traverse(root, path) {
        if (!root) {
            return;
        }
        if (!root.left && !root.right) {
            path.push(root.val);
            res.push([...path]);
            path.pop();
        }
        path.push(root.val);
        traverse(root.left, path);
        traverse(root.right, path);
        path.pop();
    }

    traverse(root, []);

    let chars = "abcdefghijklmnopqrstuvwxyz";
    res = res.map((item) => {
        return item.map((it) => {
            return chars[it];
        });
    });
    res = res.map((item) => {
        return item.reverse().join("");
    });
    res.sort();

    return res[0];
};
