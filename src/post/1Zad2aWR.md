
# 翻转二叉树以匹配先序遍历：翻转节点后的树的先序遍历顺序是否能够匹配给定的数组顺序


>  [971. 翻转二叉树以匹配先序遍历](https://leetcode.cn/problems/flip-binary-tree-to-match-preorder-traversal/)

- `翻转节点后的树`的`先序遍历顺序`是否能够匹配`给定的数组顺序`
	- 注意：`index` 作为全局参数，别传参了

```javascript
var flipMatchVoyage = function (root, voyage) {
    let res = []; // 需要反转的节点值
    let index = 0; // 当前访问的 voyage 索引

    function traverse(root) {
        // 空节点返回 true
        if (!root) return true;
        // 当前节点值不匹配，返回 false
        if (root.val !== voyage[index]) return false;
        index++; // 移动到下一个位置
        // 判断翻转 root 节点能够匹配：只需要判断左节点就可以
        // 如果左子节点存在，且其值与 voyage 中的下一个值不匹配
        // 但右子节点的值匹配，则需要翻转
        if (
            root.left &&
            root.left.val !== voyage[index] &&
            root.right &&
            root.right.val === voyage[index]
        ) {
            // 添加当前节点值到结果数组
            res.push(root.val);
            // 交换左右节点
            let temp = root.left;
            root.left = root.right;
            root.right = temp;
        }
        // 递归处理左右子树，如果有一个返回 false，整体就返回 false
        return traverse(root.left) && traverse(root.right);
    }
    // 如果遍历成功返回结果数组，否则返回 [-1]
    return traverse(root) ? res : [-1];
};
```