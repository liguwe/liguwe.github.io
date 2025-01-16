
# 二叉树的遍历思路习题





## 目录
<!-- toc -->
 ## 2. [二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/) 

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    // ::::返回的结果
    const res = [];
    
    function traverse(root){
        // ::::base case, 递归结束的条件
        if(root === null) {
            return;
        }
        // ::::前序位置
        res.push(root.val);
        traverse(root.left);
        // :::::中序位置
        traverse(root.right);
        // :::::后序位置
    }
    traverse(root);
    return res;
};
```

## 3. 二叉树的中序遍历

> [https://leetcode.cn/problems/binary-tree-inorder-traversal/submissions/509462582/](https://leetcode.cn/problems/binary-tree-inorder-traversal/submissions/509462582/)

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // ::::返回的结果
    const res = [];

    function traverse(root){
        // ::::base case, 递归结束的条件
        if(root === null) {
            return;
        }
        // ::::前序位置

        traverse(root.left);
        // :::::中序位置
        res.push(root.val);
      
        traverse(root.right);
        // :::::后序位置
    }
    traverse(root);
    return res;
};
```

## 4. 二叉树的后续遍历

>  [https://leetcode.cn/problems/binary-tree-postorder-traversal/](https://leetcode.cn/problems/binary-tree-postorder-traversal/)

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    // ::::返回的结果
    const res = [];

    function traverse(root){
        // ::::base case, 递归结束的条件
        if(root === null) {
            return;
        }
        // ::::前序位置
        traverse(root.left);
        // :::::中序位置
      
        traverse(root.right);
        // :::::后序位置

        res.push(root.val);
    }
    traverse(root);
    return res;
};

```

## 5. [N 叉树的前序遍历](https://leetcode.cn/problems/n-ary-tree-preorder-traversal/)

```javascript

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];
    function traverse(root){
        if(root === null){
            return;
        }
        // ::::::前序位置
        res.push(root.val);
        // ::::使用for...of循环遍历数组
        for(let item of root.children){
            traverse(item);
        }
        // ::::::后序位置
    }
    traverse(root);
    return res;
};
```

- 多叉树没有`中序遍历` ，因为没有固定的`中序位置`
- 注意，使用 `for-of` 来遍历 `root.children` ，方便书写

`如果放到 for 循环里面，会怎么样`，看下面代码：

```javascript

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    const res = [];
    function traverse(root){
        if(root === null){
            return;
        }
        // ::::::前序位置
        // ::::使用for...of循环遍历数组
        for(let item of root.children){
            // :::: 如果放到 for 循环里面，其实这就是回溯算法
            // :::: 但这里遍历不会包含根节点
            res.push(root.val);
            traverse(item);
        }
        // ::::::后序位置
    }
    traverse(root);
    return res;
};
```

> 这里遍历不会包含`根节点`

## 6. 根据传入的值 `n`，生成所有 `小于 n` 的二进制

### 6.1. 分析：转化成`多叉树遍历`问题

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/e80454be7e5ee8b8f530f525cf64a6c9.png)

- 二进制，就是`二叉树` 嘛
- 十进制，就是 `十叉树` 嘛
- 这其实是一个`回溯算法` ，所以前后序位置，放到 `for 循环` 里面
    - 然后，在前后序位置，做`选择`或者`撤销选择`

### 6.2. 代码：使用`回溯算法框架`实现

```javascript
/**
 * @description 根据输入的数字 n，返回所有小于这个数 n 的 二进制数
 * */
function generateBinaray(n) {
    // ::::结果集
    const res = [];
    // ::::路径
    const path = [];
    function backtrack(n) {
        // ::::到达叶子结点了
        if (n === 0) {
            console.log(path);
            // ::::::这里需要深拷贝一下，否则会出现引用问题,因为path是引用类型
            res.push(JSON.parse(JSON.stringify(path)));
            return;
        }

        // ::::回溯算法的遍历框架
        // ::::二进制，所以这里是 0 和 1， 即 i<2 即可
        for (let i = 0; i < 2; i++) {

            // ::::选择
            // ::::前序遍历，进入节点
            path.push(i);

            // :::::递归
            backtrack(n - 1);

            // ::::撤销选择
            // ::::后续遍历，离开节点
            path.pop();
        }
    }
    backtrack(n);

    console.log(res);
    return res;
}

generateBinaray(3);

generateBinaray(10);

```

- 满足条件时，**一定要深拷贝，一定要深拷贝，一定要深拷贝**
- 需要生成其他进制的数，更改 `for 循环`的里的数即可，即`多 **叉数` **对应 `多少 **进制`
    - `二进制` 对应 `2 叉树` 
    - `十进制` 对应 `10 叉树` 
    - `八进制` 对应 `8 叉树`
- 输入的别太大，否则很容易`爆了`

## 7. [N 叉树的后序遍历](https://leetcode.cn/problems/n-ary-tree-postorder-traversal/)
```javascript

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    const res = [];
    function traverse(root){
        if(root === null){
            return;
        }
        /*************************************************
         * ::::前序位置
         ************************************************/
        // ::::使用for...of循环遍历数组
        for(let item of root.children){
            traverse(item);
        }
        /*************************************************
         * ::::后序位置
         ************************************************/
        res.push(root.val);
    }
    traverse(root);
    return res;
};
```

## 8. [N 叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-n-ary-tree/)

```javascript
/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    // ::::返回的结果
    let res = 0;
    // ::::递归的深度,初始化为0
    let depth = 0;

    function traverse(root) {
        // ::::::base case
        if (root === null) {
            return;
        }
        /*************************************************
         * ::::::前序位置
         ************************************************/
        depth++;
        res = Math.max(depth, res);
        for (item of root.children) {
            traverse(item);
        }
        /*************************************************
         * ::::::::后序位置
         ************************************************/
        depth--;
    }
    
    traverse(root);
    
    return res;
};
```

- 如果 `Infinity`不不好拼写，就使用 `Math.min()`
    - 注意是 `Math.min()`，反过来的

