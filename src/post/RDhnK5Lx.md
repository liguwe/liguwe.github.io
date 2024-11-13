
# 二叉树的分解问题思路



## 目录
<!-- toc -->
 ## 1. 总结要点 

- `原问题`能不能分解为 `规模更小，结构相同` 的`子问题`
	- `如果能`，就可以通过子问题的答案`合并出`原问题的答案
- 一定要`明确`递归函数的定义，并且需要`相信` 这个递归函数
	- `base case` 的`两个`主要判断依据，即`递归结束的条件`
		- ① 是不是空节点了，即 `root === null`
		- ② 是否到达了`叶子节点` , 即 `root.left === null && root.right === null`
		- ③ 其他：根据题目情况而定
- 这里有不少题，不是二叉树，但这里旨在说明 `递归`的重要性

## 2. [相同的树](https://leetcode.cn/problems/same-tree/)

![image.png|560](https://832-1310531898.cos.ap-beijing.myqcloud.com/6bf68f208bf310637368597563ebcc3b.png)

### 2.1. ① 明确`递归函数`的定义，并相信它

```javascript
/**
 * @description 判断两个二叉树是否相同
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// :::第一步：定义：输入两棵树p、q，返回一个布尔值，表示两棵树是否相同
var isSameTree = function(p, q) {

};
```

### 2.2. ② `base case`, 递归`结束`的条件

```javascript
// ::::定义：输入两棵树p、q，返回一个布尔值，表示两棵树是否相同
var isSameTree = function(p, q) {

    // ::::第二步：base case, 递归结束的条件
    
    //:::: ① 条件一：两个节点都为空，返回true，说明两个节点相同
    if(p === null && q === null){
        return true;
    }
  
    // :::: ② 条件二：两个节点中有一个为空，一个不为空，返回false，说明两个节点不相同
    if(p === null || q === null){
        return false;
    }
  
    // :::: ③ 条件三：两个节点都不为空，但是值不相等，返回false，说明两个节点不相同
    if(p.val !== q.val){
        return false;
    }

};
```

### 2.3. ③ `递归调用左右子树`

```javascript
/**
 * @description 判断两个二叉树是否相同
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// ::::第一步：定义：输入两棵树p、q，返回一个布尔值，表示两棵树是否相同
var isSameTree = function(p, q) {

    // ::::第二步：base case, 递归结束的条件

    //:::: ① 条件一：两个节点都为空，返回true，说明两个节点相同
    if(p === null && q === null){
        return true;
    }
    // :::: ② 条件二：两个节点中有一个为空，一个不为空，返回false，说明两个节点不相同
    if(p === null || q === null){
        return false;
    }
    // :::: ③ 条件三：两个节点都不为空，但是值不相等，返回false，说明两个节点不相同
    if(p.val !== q.val){
        return false;
    }

    // ::::::第三步：递归调用左右子树
    const isLeftSame = isSameTree(p.left, q.left);
    const isRightSame = isSameTree(p.right, q.right);

    return isLeftSame && isRightSame;

};

```

## 3. [二叉树展开为链表](https://leetcode.cn/problems/flatten-binary-tree-to-linked-list/)

![image.png|560](https://832-1310531898.cos.ap-beijing.myqcloud.com/e55b358cec4b6a48d15733aa36aa8e4b.png)

### 3.1. ① 明确递归函数的定义，并相信它
```javascript
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// ::::第一步：定义：输入一个二叉树，返回一个链表，它会打平
var flatten = function(root) {

};
```

- 如下图 ① 位置
    - `root` 传值给 `flatten 函数`，就会变成 下图`中间位置`那样
      - 至于，怎么变的，我不知道，但我相信这个`flatten 函数`
- 如下图 ② 位置：给子树调用完后  `flatten 函数`，需要处理 `单链表 指向逻辑`

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/9e912e9449c3657000deea5287fce9ab.png)

### 3.2. ② 明确 `base case` , 即 `递归结束条件`

```javascript
// ::::第一步：定义：输入一个二叉树，返回一个链表，它会打平
var flatten = function(root) {
    // ::::第二步：base case, 递归结束的条件
    if(root === null){
        return;
    }
    // ....
};
```

### 3.3. ③ 递归调用左右子树
```javascript
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// ::::第一步：定义：输入一个二叉树，返回一个链表，它会打平
var flatten = function(root) {
    // ::::第二步：base case, 递归结束的条件
    if(root === null){
        return;
    }
    // ::::第三步：递归调用左右子树

    // ::::左子树已经被拉平成一条链表
    flatten(root.left);
    // :::: 让左子树指向变量 left，为了后面操作左右子树的指向，方便操作单链表
    let left = root.left;

    // ::::右子树已经被拉平成一条链表
    flatten(root.right);
    // :::: 让右子树指向变量 right，为了后面操作左右子树的指向，方便操作单链表
    let right = root.right;

};
```

### 3.4. ④ 处理单链表指向问题

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/6644c7acbf1211721e98e3fd8fe88b58.png)

```javascript

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// ::::第一步：定义：输入一个二叉树，返回一个链表，它会打平
var flatten = function (root) {
    
    // ::::第二步：base case, 递归结束的条件
    if (root === null) {
        return;
    }
    // ::::第三步：递归调用左右子树

    // ::::左子树已经被拉平成一条链表
    flatten(root.left);
    // :::: 让左子树指向变量 left，为了后面操作左右子树的指向，方便操作单链表
    let left = root.left;

    // ::::右子树已经被拉平成一条链表
    flatten(root.right);
    // :::: 让右子树指向变量 right，为了后面操作左右子树的指向，方便操作单链表
    let right = root.right;

    /*************************************************
     * ::::处理单链表指向问题
     ************************************************/
    // ::::: ① 让左子树为空，右子树指向左子树
    root.left = null;
    root.right = left;

    // :::: ② 指针指向 p,一直前进，直到
    let p = root;
    while (p.right !== null) {
        p = p.right;
    }

    // :::: ③ 让右子树指向变量 right
    p.right = right;

};

```

**三个重点：**
- ①  相信这个 打平函数
- ②  调用`左右子树`后需要使用变量 `left` 和 `right` 去接受，方便后面处理单链表指向问题
- ③  具体处理单链表指向问题，参考上图

## 4. 附：刷题时的一个 `约定`

> 一个技巧：
> - **所有变量定义尽量都使用 `let` 省得后面还得改成 `const`

## 5. [杨辉三角 II](https://leetcode.cn/problems/pascals-triangle-ii/)

### 5.1. 原题

![image.png|560](https://832-1310531898.cos.ap-beijing.myqcloud.com/1bcf1cf7d1e9231244aacfa62a57cc7b.png)

### 5.2. 动图
![杨辉三.gif|260](https://832-1310531898.cos.ap-beijing.myqcloud.com/3f73439dad01856d8858eb21255f9a73.gif)

### 5.3. 错误记录

- 技巧：可以尝试运行，看看输出结果和实际结果，能够很快的判断错误原因，如下图：

![image.png|504](https://832-1310531898.cos.ap-beijing.myqcloud.com/dc6d0548ca99f255ea2d96e94be092bb.png)

### 5.4. 代码

```javascript
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
// ::::① 定义，返回第rowIndex行的数组，并且相信它
var getRow = function (rowIndex) {
    
    // ::::第一个元素是1
    let row = [1];
    
    // ::::② base case
    if (rowIndex === 0) {
        return row;
    }

    // ::::::③ 递归调用，新得到上一行的数组
    const preRow = getRow(rowIndex - 1);
    for (let i = 0; i < rowIndex - 1; i++) {
        const value = preRow[i] + preRow[i + 1];
        row.push(value)
    }

    // :::: 最后一个元素是1
    row.push(1);

    return row;

};
```

- 这题，不是二叉树问题，但旨在说明：`相信递归函数的重要性`

## 6. [杨辉三角](https://leetcode.cn/problems/pascals-triangle/)

![image.png|552](https://832-1310531898.cos.ap-beijing.myqcloud.com/04e8fb0d64df44af6b62aeb027df12d1.png)

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    // ::::base case
    let res = [];
    if (numRows < 1) {
        return res;
    }

    // ::::base case： 第一行
    let firstRow = [1];
    res.push(firstRow);

    // ::::// 开始一层一层生成，装入 res
    for (let i = 2; i <= numRows; i++) {
        let preRow = res[res.length - 1];
        res.push(generateNext(preRow));
    }

    return res;
};

/**
 * @description 生成下一行的数组
 * @param {Array} row 上一行的数组
 * */
var generateNext = function (row) {
    // ::::注意，是 [1] 不是 【0】，搞了半天
    const res = [1];
    for (let i = 0; i < row.length - 1; i++) {
        res.push(row[i] + row[i + 1]);
    }
    // ::::注意，是 [1] 不是 【0】，搞了半天
    res.push(1);
    return res;
}

```

- ①  这个题不是二叉树题目，刷到就随便刷了
- ②  关键是辅助函数的定义 `generateNext` ，一定要`明确好这个函数的定义`
- ③  注意📢📢📢📢📢： **是` [1] `不是 `[0]`，搞了半天**

## 7. [二叉树的前后中序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/)：`分解问题思路`

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let res = [];

    // ::::base case
    if (root === null) {
        return res;
    }
    
    // ::::::前序位置
    res.push(root.val);
  
    res.push(...preorderTraversal(root.left));
  
    // ::::::::中序位置
  
    res.push(...preorderTraversal(root.right));
  
    // ::::::::后序位置

    return res;
};

```

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/03c32810019d84ba92f3716adff11a24.png)

① 这也解释了上图：为什么前后遍历，root 在第一个？因为对应代码位置！
② 其他`中序遍历`和`后序遍历` 只需要改变一下顺序
③ 简写，使用`...` ,注意格式：`res.push(...preorderTraversal(root.right));`
- 不是 `res.push([...preorderTraversal(root.right)])`

