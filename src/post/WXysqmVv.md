
# 二叉树的最大深度

 
> [104. 二叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-binary-tree/)


## 目录
<!-- toc -->
 ## 1. 遍历一遍的思路 

重点：
- 前序位置代表进入一个节点，这个时候需要 `depth++`
- 后序位置代表进入一个节点，这个时候需要 `depth--`

```javascript
var maxDepth = function (root) {
  let res = 0;
  let depth = 0;

  function traverse(root) {
    if (!root) {
      return;
    }
    // 每进入一个节点时，更新下 res
    depth++;
    res = Math.max(res, depth);
    traverse(root.left);
    traverse(root.right);
    // 离开节点时，更新下 res
    depth--;
  }

  traverse(root);

  return res;
};

```

## 2. 分解问题的思路

重点：
-  `l` 和 `r` 直接简写吧，真正写题的时候，时间有限
- ==原二叉树的最大深度 = 左右子树的最大深度的最大值 + 1==

```javascript
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  let l = maxDepth(root.left);
  let r = maxDepth(root.right);
  return 1 + Math.max(l, r);
};

```