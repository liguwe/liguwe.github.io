
# 二叉搜索树中第 K 小的元素


>  [230. 二叉搜索树中第 K 小的元素](https://leetcode.cn/problems/kth-smallest-element-in-a-bst/)

- 思路：
	- 中序遍历有序的，存到 res ，然后返回 `res[k-1]` 即可

```javascript
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  // 因为  0 <= Node.val <= 104
  let res = [];
  function traverse(root) {
    if (!root) return;
    traverse(root.left);
    res.push(root.val);
    traverse(root.right);
  }
  traverse(root);
  return res[k - 1];
};
```

> 当然也可以匹配到就 return 了，不用全部遍历一遍