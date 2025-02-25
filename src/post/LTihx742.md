
# 将有序数组转换为二叉搜索树


> [108. 将有序数组转换为二叉搜索树](https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree/)


- 构造二叉树的思路
	- 先构造根节点
	- 然后构建左右子树
- 一个有序数组对于 BST 来说就是中序遍历结果
	- 根节点在数组中心
	- 数组左侧是左子树元素
	- 右侧是右子树元素

注意点：
- 分解问题的思路，所以每次都需要 `return` 一个节点

```javascript
var sortedArrayToBST = function (nums) {
    let n = nums.length;
    return build(0, n - 1);

    function build(left, right) {
        if (left > right) return null;

        let mid = Math.floor((left + right) / 2);
        let root = new TreeNode(nums[mid]);
        // 递归构建左子树
        root.left = build(left, mid - 1);
        // 递归构造右子树
        root.right = build(mid + 1, right);

        return root;
    }
};
```

思路总结：
1. 因为输入的数组是有序的，我们可以每次取中间的数作为根节点
2. 中间数左边的部分递归构建左子树
3. 中间数右边的部分递归构建右子树
4. 这样构建出来的树会是一个**高度平衡的 BST**