
# 二叉搜索树的增删改查（BST 的增删改查）


`#BST` `#leetcode`  `#二叉树/二叉搜索树`   `#2024/09/08` 


## 目录
<!-- toc -->
 ## 1. 代码模板 

```javascript
var BST = function (root, target) {
  if (root.val === target) {
    // 找到目标，做点什么
  }
  if (root.val < target) {
    BST(root.right, target);
  }
  if (root.val > target) {
    BST(root.left, target);
  }
};
```


