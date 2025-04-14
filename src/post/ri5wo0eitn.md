
# 二叉树的直径：左右子树的最大深度之和


> [543. 二叉树的直径](https://leetcode.cn/problems/diameter-of-binary-tree/)


## 目录
<!-- toc -->
 ## 分析 

二叉树的直径，就是**左右子树的最大深度之和**
- 所以遍历一遍二叉树的时候
	- 在**后序位置**上**随便计算**一下左右子树的最大深度之和

```javascript
var diameterOfBinaryTree = function (root) {
  let res = 0;
  function maxDepth(root) {
    if (!root) return 0;
    let l = maxDepth(root.left);
    let r = maxDepth(root.right);
    res = Math.max(res, l + r);
    return 1 + Math.max(l, r);
  }
  maxDepth(root);
  return res;
};

```

> 关于如何计算每个节点的最大深度，参考 [104. 二叉树的最大深度](/post/eedpt04gye.html)

## 关联

- [104. 二叉树的最大深度](/post/eedpt04gye.html)