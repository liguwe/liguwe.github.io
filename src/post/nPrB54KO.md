
# 有序链表转换二叉搜索树



> [109. 有序链表转换二叉搜索树](https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree/)


- ① 有序链表转成有序数组
- ② 根据有序数组构建平衡二叉树
	- 同 [108. 将有序数组转换为二叉搜索树](/post/6jjMqmPh.html)

>  注意：能够转换成`平衡二叉树`

```javascript
var sortedListToBST = function (head) {
    // ①  有序链表转成有序数组
    let nums = [];
    let p = head;
    while (p) {
        nums.push(p.val);
        p = p.next;
    }
    // ② 根据有序数组构建平衡二叉树
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