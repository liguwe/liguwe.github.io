
# 相同的树


> [100. 相同的树](https://leetcode.cn/problems/same-tree/)


```javascript
var isSameTree = function (p, q) {
  // 判断一对节点是否相同
  if (p == null && q == null) {
    return true;
  }
  if (p == null || q == null) {
    return false;
  }
  if (p.val != q.val) {
    return false;
  }
  // 判断其他节点是否相同
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
```