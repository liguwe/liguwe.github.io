
# 二叉树的后序遍历


`#leetcode` `#二叉树` 

>  [145. 二叉树的后序遍历](https://leetcode.cn/problems/binary-tree-postorder-traversal/)

```javascript hl:7
var postorderTraversal = function (root) {
    let res = [];
    function traverse(root) {
        if (!root) return;
        traverse(root.left);
        traverse(root.right);
        res.push(root.val);
    }
    traverse(root);

    return res;
};
```