/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
    if (n === 0) return [];
    return build(1, n);
    function build(start, end) {
        let res = [];
        if (start > end) {
            res.push(null);
            return res;
        }
        for (let i = start; i <= end; i++) {
            // 这两个都是数组
            let leftTreeArr = build(start, i - 1);
            let rightTreeArr = build(i + 1, end);
            // 给 root 节点穷举所有左右子树的组合
            for (let left of leftTreeArr) {
                for (let right of rightTreeArr) {
                    let root = new TreeNode(i);
                    root.left = left;
                    root.right = right;
                    res.push(root);
                }
            }
        }
        return res;
    }
};
