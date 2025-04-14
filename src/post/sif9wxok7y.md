
# 二叉树的坡度：返回整个树的坡度


>  [563. 二叉树的坡度](https://leetcode.cn/problems/binary-tree-tilt/)


- 关键点：
	- 计算每个节点的子元素之和，而不是每个节点的坡度，别搞混了

```javascript
var findTilt = function (root) {
    let res = 0;
    // 返回：节点的子元素之和
    function sum(root) {
        if (!root) return 0;
        let left = sum(root.left); // 左子树的节点之和
        let right = sum(root.right); // 右子树的节点之和
        res += Math.abs(left - right);
        // 左子树的节点之和 + 右子树的节点之和 + root 的节点值
        return left + right + root.val;
    }
    sum(root);
    return res;
};

```


## 目录
<!-- toc -->
 ## 1. 题目 

- 一个树的 **节点的坡度** 
	- 该节点`左子树的节点之和`和`右子树节点之和`的 **差的绝对值** 
	- 如果没有左子树的话，左子树的节点之和为 0 ；
	- 没有右子树的话也是一样
	- 空结点的坡度是 `0`

![图片](https://832-1310531898.cos.ap-beijing.myqcloud.com/999.%20Obsidian@832/files/20250120-6.png)