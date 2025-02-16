
# 二叉树最长连续序列：所有路径中，求最长连续序列的长度


> [298. 二叉树最长连续序列](https://leetcode.cn/problems/binary-tree-longest-consecutive-sequence/)


- 一开始，我就想着使用 [257. 二叉树的所有路径：返回二叉树的所有路径，以a→b的方式](/post/Gp1eQZiD.html) ，然后从路径中找到`最长的连续序列长度`
- 但更优的做法时，给递归函数传参数直接比较
	- `function traverse(root, len, parentVal) {`
		- 即 遍历的过程中记录`父节点的值`和连`续序列的长度`，并更新`全局最大值`即可

```javascript
var longestConsecutive = function (root) {
    let res = 0;
    let paths = [];
    function traverse(root, len, parentVal) {
        if (!root) return;
        if (parentVal + 1 === root.val) {
            len++;
        } else {
            len = 1;
        }
        res = Math.max(res, len);
        traverse(root.left, len, root.val);
        traverse(root.right, len, root.val);
    }
    traverse(root, 1, Infinity);
    return res;
};
```