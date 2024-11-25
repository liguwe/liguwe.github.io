
# 二叉搜索树（篇三：BST 的构造）

`#BST` `#leetcode`  `#二叉树/二叉搜索树`   `#2024/09/08` 


## 目录
<!-- toc -->
 ## 1. `n` 个节点能组成多少个 BST ？ 

### 1.1. 题目

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240908135259.png)

比如，`n = 3` 时，有 5 种 BST，如下图：

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240908135507.png)

### 1.2. 解题思路

又比如，`n = 5` 时，也就是说用 `{1,2,3,4,5}` 这些数字去构造 BST。

-  **根节点**总共有有 `5 种`情况，因为每个数字都可以作为**根节点**。
	-  `3` 作为根节点时
		- 左子树节点就是 `{1,2}` 的组合
		- 右子树就是 `{4,5}` 的组合
		- 然后 左子树的组合数和右子树的组合数**乘积**就是 `3` 作为根节点时的 BST 个数。

基本逻辑写好，然后写个递归，交给递归就行

### 1.3. 代码

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  return count(1, n);
};

/**
 * @description [low,high] 范围内构建二叉搜索树的数量
 */
function count(lo, hi) {
  // base case
  // 显然当 lo > hi 闭区间 [lo, hi] 肯定是个空区间，也就对应着空节点 null
  // 虽然是空节点，但是也是一种情况，所以要返回 1 而不能返回 0
  if (lo > hi) {
    return 1;
  }

  let res = 0;

  for (let i = lo; i <= hi; i++) {
    /// 以 root.val = i 时的根节点，左子树的数量
    // 为什么是 i - 1 而不是 i？
    // 因为 i 代表的是根节点的值，所以左子树的范围是 [lo, i - 1]
    let left = count(lo, i - 1);
    /// 以 root.val = i 时的根节点，右子树的数量
    // 为什么 i + 1 而不是 i？
    // 因为 i 代表的是根节点的值，所以右子树的范围是 [i + 1, hi]
    let right = count(i + 1, hi);
    // 以 i 为根节点时，左右子树的组合数量的乘积
    // 就是以 i 为根节点时，BST 的数量
    // 为什么要乘积？
    // 因为对于每个根节点，左右子树的组合数量是独立的
    // 比如说，左子树有 3 种组合，右子树有 5 种组合
    // 那么以当前根节点构建的 BST 就有 3 * 5 = 15 种组合
    res += left * right;
  }

  return res;
}

```

> leetcode上超时了

### 1.4. 优化：使用备忘录

```javascript hl:2,14
var numTrees = function (n) {
  // meme[i][j] 代表 i 到 j 的二叉搜索树的个数
  const memo = [];
  for (let i = 0; i < n + 1; i++) {
    memo[i] = [];
    for (let j = 0; j < n + 1; j++) {
      memo[i][j] = 0;
    }
  }
  function count(lo, hi) {
    if (lo > hi) {
      return 1;
    }
    // 先查找备忘录
    if (memo[lo][hi] !== 0) {
      return memo[lo][hi];
    }
    let res = 0;
    for (let i = lo; i <= hi; i++) {
      let left = count(lo, i - 1);
      let right = count(i + 1, hi);
      res += left * right;
    }
    return res;
  }

  return count(1, n);
};

```

> leetcode上还是超时了

### 1.5. 动态规划解法 

```javascript hl:14
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);
  // dp[i] 代表 i 个节点的 BST 个数
  // dp[0] = 1, dp[1] = 1 代表空树和一个节点的 BST 个数都是 1
  dp[0] = 1;
  dp[1] = 1;
  // 从 2 开始计算
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      // j 代表根节点的值
      // 左子树的节点个数为 j - 1, 右子树的节点个数为 i - j ?
      // why? 看后面有截图解释
      // 左子树的 BST 个数为 dp[j - 1], 右子树的 BST 个数为 dp[i - j]
      // 以 j 为根节点的 BST 个数为 dp[j - 1] * dp[i - j]
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n];
};
```

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240908163823.png)

> 能正常通过 leetcode

## 2. `n` 个节点能组成的所有 BST 

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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) {
    return [];
  }
  return build(1, n);
};

/**
 *@description 生成[lo,hi]区间的所有二叉搜索树
 *@param {*} lo
 *@param {*} hi
 */
function build(lo, hi) {
  let res = [];
  // 递归的出口,空节点
  // lo > hi 代表空节点,即没有节点的二叉树
  // 为什么是 null 而不是 [] ?
  // 因为 null 代表空节点, [] 代表空数组, 代表有一个节点的二叉树
  if (lo > hi) {
    res.push(null);
    return res;
  }
  // 穷举 root 节点的所有可能
  for (let i = lo; i <= hi; i++) {
    // 递归构造出左右子树的所有有效 BST=>递归构造左右子树
    let left = build(lo, i - 1);
    let right = build(i + 1, hi);
    // 给 root 节点穷举所有左右子树的组合
    for (let leftNode of left) {
      for (let rightNode of right) {
        let root = new TreeNode(i);
        root.left = leftNode;
        root.right = rightNode;
        res.push(root);
      }
    }
  }
  return res;
}
```

## 3. 相关题目

| LeetCode                                                                                          | 力扣                                                                             | 难度  |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | --- |
| [95. Unique Binary Search Trees II](https://leetcode.com/problems/unique-binary-search-trees-ii/) | [95. 不同的二叉搜索树 II](https://leetcode.cn/problems/unique-binary-search-trees-ii/) | 🟠  |
| [96. Unique Binary Search Trees](https://leetcode.com/problems/unique-binary-search-trees/)       | [96. 不同的二叉搜索树](https://leetcode.cn/problems/unique-binary-search-trees/)       | 🟠  |

## 4. 参考

https://labuladong.online/algo/data-structure/bst-part3/
