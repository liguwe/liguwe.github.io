
# 二叉树的构造



## 目录
<!-- toc -->
 ## 1. 构造思路 

- 二叉树的构造问题一般都是使用`「分解问题」`的思路：
	- `构造整棵树 = 根节点 + 构造左子树 + 构造右子树`

## 2. [构造最大二叉树](https://labuladong.github.io/algo/2/19/35/#构造最大二叉树)

![image.png|520](https://832-1310531898.cos.ap-beijing.myqcloud.com/0c9189f5fbd177020598c0b65abf50fb.png)

如下：

![image.png|488](https://832-1310531898.cos.ap-beijing.myqcloud.com/24a3ed04818e28555e085be17baace2b.png)
![image.png|504](https://832-1310531898.cos.ap-beijing.myqcloud.com/32f1529ba665028a96248cb465db540e.png)

下面是JavaScript部分

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    return build(nums, 0, nums.length - 1);
};
// 定义：将 nums[lo..hi] 构造成符合条件的树，返回根节点
function build(nums,  lo,  hi) {
    // base case
    if (lo > hi) {
        return null;
    }
    // 找到数组中的最大值和对应的索引
    let index = -1, maxVal = -1;
    for (let i = lo; i <= hi; i++) {
        if (maxVal < nums[i]) {
            index = i;
            maxVal = nums[i];
        }
    }
    // 先构造出根节点
    let root = new TreeNode(maxVal,null,null);
    // 递归调用构造左右子树
    root.left = build(nums, lo, index - 1);
    root.right = build(nums, index + 1, hi);
    return root;
}
```

## 3. 通过前序和中序遍历结果构造二叉树

> [从前序和中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)」

![image.png|552](https://832-1310531898.cos.ap-beijing.myqcloud.com/1fa7eeb0a874b33215cbb6a4050cd89d.png)

### 3.1. 再看前序和中序遍历

![image.png|560](https://832-1310531898.cos.ap-beijing.myqcloud.com/d8590339f1a92198730c38a1f8a77a22.png)

类似上一题，我们肯定要想办法确定根节点的值，把根节点做出来，然后递归构造左右子树即可。
1. 找出根节点
2. 递归左右子树，这里注意要找出递归函数的参数

**这些参数可以从两个数组里计算出来，如下图：**

![image.png|552](https://832-1310531898.cos.ap-beijing.myqcloud.com/a3d98f67145d72b588ebb76349faf1f0.png)

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

> **最后，其实也不要一定要理解，就套这个模板就好了

## 4. [通过后序和中序遍历结果构造二叉树](https://labuladong.github.io/algo/2/19/35/#通过后序和中序遍历结果构造二叉树)

> 这是力扣第 106 题「 [从后序和中序遍历序列构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)」

![image.png|520](https://832-1310531898.cos.ap-beijing.myqcloud.com/e90feded23e99040c022e339bacb2e84.png)

### 4.1. 再看后序与中序

![image.png|608](https://832-1310531898.cos.ap-beijing.myqcloud.com/0e301f446fdc477cd7a9d800ce97f6d4.png)

![image.png|576](https://832-1310531898.cos.ap-beijing.myqcloud.com/79128e38e5447cea3778234d8890113b.png)

有了前一题的铺垫，这道题很快就解决了，无非就是 `rootVal` 变成了**最后一个元素**，再改改递归函数的参数而已，只要明白二叉树的特性，也不难写出来。如下

```javascript
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
let valToIndex = new Map();
var buildTree = function(inorder, postorder) {
    for (let i = 0; i < inorder.length; i++) {
        valToIndex.set(inorder[i], i);
    }
    return build(inorder, 0, inorder.length - 1,
                 postorder, 0, postorder.length - 1);
};

function build(inorder,  inStart,  inEnd, 
               postorder, postStart, postEnd) {
        
    if (inStart > inEnd) {
        return null;
    }
    // root 节点对应的值就是后序遍历数组的最后一个元素
    let rootVal = postorder[postEnd];
    // rootVal 在中序遍历数组中的索引
    let index = valToIndex.get(rootVal);
    // 左子树的节点个数
    let leftSize = index - inStart;
    let root = new TreeNode(rootVal,null,null);
    // 递归构造左右子树
    root.left = build(inorder, inStart, index - 1,
                        postorder, postStart, postStart + leftSize - 1);
    
    root.right = build(inorder, index + 1, inEnd,
                        postorder, postStart + leftSize, postEnd - 1);
    return root;
}
```

## 5. 通过后序和前序遍历结果构造二叉树

这是力扣第 889 题「 [根据前序和后序遍历构造二叉树](https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)」，给你输入二叉树的前序和后序遍历结果，让你还原二叉树的结构。

同样的思路：
- 找根节点：
	- 首先把前序遍历结果的第一个元素或者后序遍历结果的最后一个元素确定为根节点的值
- 构造左、右子树
	- 然后把 前序遍历结果的第二个元素 作为 左子树 的根节点的值
	- 在后序遍历结果中寻找 左子树 根节点的值，从而确定了 左子树 的索引边界，进而确定右子树的索引边界，递归构造左右子树即可。

如下图

![image.png|600](https://832-1310531898.cos.ap-beijing.myqcloud.com/01e1fa67cf594a1cd4df1550dbce3929.png)

代码如下：

```javascript
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

let valToIndex = new Map();
var constructFromPrePost = function(preorder, postorder) {
    for (let i = 0; i < postorder.length; i++) {
        valToIndex.set(postorder[i], i);
    }
    return build(preorder, 0, preorder.length - 1,
                 postorder, 0, postorder.length - 1);
};
function build( preorder,preStart,preEnd,
                postorder,postStart,postEnd){
        if (preStart > preEnd) {
            return null;
        }
        if (preStart === preEnd) {
            return new TreeNode(preorder[preStart]);
        }
        // root 节点对应的值就是前序遍历数组的第一个元素
        let rootVal = preorder[preStart];
        // root.left 的值是前序遍历第二个元素
        // 通过前序和后序遍历构造二叉树的关键在于通过左子树的根节点
        // 确定 preorder 和 postorder 中左右子树的元素区间
        let leftRootVal = preorder[preStart + 1];
        // leftRootVal 在后序遍历数组中的索引
        let index = valToIndex.get(leftRootVal);
        // 左子树的元素个数
        let leftSize = index - postStart + 1;
        // 先构造出当前根节点
        let root = new TreeNode(rootVal,null,null);
        // 递归构造左右子树
        // 根据左子树的根节点索引和元素个数推导左右子树的索引边界
        root.left = build(preorder, preStart + 1, preStart + leftSize,
                postorder, postStart, index);
        root.right = build(preorder, preStart + leftSize + 1, preEnd,
                postorder, index + 1, postEnd - 1);

        return root;
}
```

**为什么不唯一呢？**
- 关键这句，`int leftRootVal = preorder[preStart + 1];` 我们假设**前序遍历的第二个元素是左子树的根节点**，但实际上**左子树有可能是空指针**，那么这个元素就应该是右子树的根节点。由于这里无法确切进行判断，所以导致了最终答案的不唯一

## 6. 最后

二叉树的构造问题一般都是使用「分解问题」的思路：`构造整棵树 = 根节点 + 构造左子树 + 构造右子树` 

