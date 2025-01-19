
# 不同的二叉搜索树 II：列举 1-n 能构造出的所有BST


>  [95. 不同的二叉搜索树 II](https://leetcode.cn/problems/unique-binary-search-trees-ii/)


思路类似于 [96. 不同的二叉搜索树](/post/bBMWfndu.html)


分解问题的思路：
- 1、穷举 `root` 节点的所有可能。
- 2、递归构造出左右子树的所有有效 BST → 是数组
- 3、给 `root` 节点穷举所有左右子树的组合。

```javascript hl:12,13,15,16
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

```