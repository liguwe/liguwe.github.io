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
var pseudoPalindromicPaths = function (root) {
    let res = 0;
    function traverse(root, path) {
        if (!root) return;
        path.push(root.val);
        if (root.left === null && root.right === null) {
            if (isOk(path)) res++;
        } else {
            traverse(root.left, path);
            traverse(root.right, path);
        }
        path.pop();
    }

    traverse(root, []);
    function isOk(item) {
        let map = {};
        for (it of item) {
            map[it] = (map[it] || 0) + 1;
        }
        let count = Object.values(map);
        let oddNum = 0;
        for (let c of count) {
            if (c % 2 === 1) {
                oddNum++;
            }
        }
        return oddNum <= 1;
    }
    return res;
};
