
# 从前序与中序遍历序列构造二叉树


> [105. 从前序与中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)


## 目录
<!-- toc -->
 ## 1. 题目 

![image.png|552](https://832-1310531898.cos.ap-beijing.myqcloud.com/1fa7eeb0a874b33215cbb6a4050cd89d.png)

## 2. 分析

![图片&文件](./files/20250107-8.png)

> 关键是要画出这样的图片，脑子自己想大概率是写不出来的

### 2.1. 思路

1. 找出根节点
	- 前序遍历的第一个元素
2. 递归构建左右子树，
	- 这里注意要找出==递归函数的参数==
	- 这些参数可以从两个数组里计算出来，如下图：

![image.png|792](https://832-1310531898.cos.ap-beijing.myqcloud.com/a3d98f67145d72b588ebb76349faf1f0.png)

```javascript
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let valToIndex = new Map();
var buildTree = function(preorder, inorder) {
    for (let i = 0; i < inorder.length; i++) {
        valToIndex.set(inorder[i], i);
    }
    return build(preorder, 0, preorder.length - 1,
                 inorder, 0, inorder.length - 1);
};

function build(preorder,  preStart,  preEnd, 
               inorder,  inStart,  inEnd) {
        
    if (preStart > preEnd) {
        return null;
    }

    // root 节点对应的值就是前序遍历数组的第一个元素
    let rootVal = preorder[preStart];
    // rootVal 在中序遍历数组中的索引
    let index = valToIndex.get(rootVal);

    let leftSize = index - inStart;

    // 先构造出当前根节点
    let root = new TreeNode(rootVal,null,null);
    // 递归构造左右子树
    root.left = build(preorder, preStart + 1, preStart + leftSize,
                      inorder, inStart, index - 1);

    root.right = build(preorder, preStart + leftSize + 1, preEnd,
                       inorder, index + 1, inEnd);
    return root;
}
```


