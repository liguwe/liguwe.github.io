
# 一个方法秒杀 5 道最近公共祖先问题

`#2024/09/07`  `#leetcode`  `#二叉树`  `#二叉树/公共祖先问题`


## 目录
<!-- toc -->
 ## 从二叉树中寻找一个元素 

### 基本写法：完整搜索

```javascript
/**
 * @description 从二叉树中寻找一个元素
 * @param {TreeNode} root
 * @param {number} val
 */
var find = function (root, val) {
  if (root == null) {
    return null;
  }
  if (root.val == val) {
    return root;
  }
  let left = find(root.left, val);
  let right = find(root.right, val);
  return left || right;
};

```

### 优化： 如果已经在左子树找到了，就不需要再去右子树找了

```javascript
/**
 * 优化： 如果已经在左子树找到了，就不需要再去右子树找了
 * @description 从二叉树中寻找一个元素
 * @param {TreeNode} root
 * @param {number} val
 */
var find1 = function (root, val) {
  if (root == null) {
    return null;
  }
  if (root.val == val) {
    return root;
  }
  let left = find1(root.left, val);
  if (left) {
    return left;
  }
  let right = find1(root.right, val);
  if (right) {
    return right;
  }
};
```

### 二叉树中寻找值为 val1 或 val2 的节点

```javascript
/**
 * @description 定义：在以 root 为根的二叉树中寻找值为 val1 或 val2 的节点
 */
/**
 * @description 定义：在以 root 为根的二叉树中寻找值为 val1 或 val2 的节点
 */
var find2 = function (root, val1, val2) {
  if (root == null) {
    return null;
  }
  if (root.val == val1 || root.val == val2) {
    return root;
  }
  let left = find2(root.left, val1, val2);
  let right = find2(root.right, val1, val2);

  return left || right;
};
```

##  二叉树中两个节点的最近公共祖先

### 题意要点

- 这是一颗 **不含重复值**的二叉树
- 找 **两个节点** 的最近公共祖先
- 给点的节点**一定存在于**二叉树中

### 思路

只要在上文 [#二叉树中寻找值为 val1 或 val2 的节点](/post/efwkW1Gl.html#二叉树中寻找值为-val1-或-val2-的节点) 中修改**后序位置**的部分代码即可实现

> https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/description/

### 两种情况

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907095203.png)

### 代码 

```javascript
var lowestCommonAncestor = function (root, p, q) {
  return find(root, p.val, q.val);
};
var find = function (root, val1, val2) {
  if (root == null) {
    return null;
  }
  if (root.val == val1 || root.val == val2) {
    return root;
  }
  let left = find(root.left, val1, val2);
  let right = find(root.right, val1, val2);
  // 后序位置：
  // 如果左右子树都找到了，说明当前节点就是最近公共祖先
  if (left && right) {
    return root;
  }
  // 如果左子树找到了，右子树没找到，说明最近公共祖先在左子树
  // 如果右子树找到了，左子树没找到，说明最近公共祖先在右子树
  // 如果左右子树都没找到，说明最近公共祖先不存在
  // 因为题设说了 p 和 q 一定存在于二叉树中，所以这里不用考虑两个都没找到的情况
  return left || right;
};
```

## 二叉树中多个节点的最近公共祖先

### 题意要点

- 这是一颗 **不含重复值**的二叉树
- 找 **多个节点** 的最近公共祖先

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907095756.png)

### 代码

```javascript
var lowestCommonAncestor = function (root, nodes) {
  // 将列表转化成哈希集合，便于判断元素是否存在
  let values = new Set();
  for (let node of nodes) {
    values.add(node.val);
  }

  return find(root, values);
};

var find = function (root, values) {
  if (root == null) {
    return null;
  }
  // 使用哈希集合判断当前节点存在于 values 中
  if (values.has(root.val)) {
    return root;
  }
  let left = find(root.left, values);
  let right = find(root.right, values);

  // 后序位置：
  // 如果左右子树都找到了，说明当前节点就是最近公共祖先
  if (left && right) {
    return root;
  }
  // 如果左子树找到了，右子树没找到，说明最近公共祖先在左子树
  // 如果右子树找到了，左子树没找到，说明最近公共祖先在右子树
  // 如果左右子树都没找到，说明最近公共祖先不存在
  // 因为题设说了 p 和 q 一定存在于二叉树中，所以这里不用考虑两个都没找到的情况
  return left || right;
};
```

## 二叉树中两个节点的最近公共祖先

> 同 [#二叉树中两个节点的最近公共祖先](/post/efwkW1Gl.html#二叉树中两个节点的最近公共祖先) ，但两个节点不一定在二叉树中 

### 题意要点

- 这是一颗 **不含重复值**的二叉树
- 找 **两个节点** 的最近公共祖先
- 给点的节点**不一定存在**于二叉树中

### 思路

`p` 和 `q` 不一定存在于树中，所以你不能遇到一个目标值就直接返回，而应该对二叉树进行**完全搜索**（遍历每一个节点），如果发现 `p` 或 `q` 不存在于树中，那么是不存在 `LCA` 的

### 代码

```javascript
function lowestCommonAncestor(root, p, q) {
  return find(root, p.val, q.val);
}

function find(root, val1, val2) {
  if (root == null) {
    return null;
  }

  // 不能找到就返回 root,因为提设中说 p 和 q 不一定存在于二叉树中
  // if (root.val == val1 || root.val == val2) {
  //   return root;
  // }

  let left = find(root.left, val1, val2);
  let right = find(root.right, val1, val2);

  // 后序位置：
  // 如果左右子树都找到了，说明当前节点就是最近公共祖先
  if (left && right) {
    return root;
  }
  // 如果左子树找到了，右子树没找到，说明最近公共祖先在左子树
  if (left && !right) {
    return left;
  }
  // 如果右子树找到了，左子树没找到，说明最近公共祖先在右子树
  if (!left && right) {
    return right;
  }

  return left || right || null;
}

```

## 二叉树搜索树中两个节点的最近公共祖先

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907102039.png)

### 题意要点

- 这是一颗 **不含重复值**的二叉**搜索树**
- 找 **两个节点** 的最近公共祖先
- 给点的节点**一定存在**于二叉树中

### 代码

```javascript
// 二叉树搜索树中两个节点的最近公共祖先
var lowestCommonAncestor = function (root, p, q) {
  // 如果当前节点为空，说明没有最近公共祖先
  if (root == null) {
    return null;
  }

  // 如果 p 和 q 都小于当前节点的值，说明最近公共祖先在左子树
  if (root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  // 如果 p 和 q 都大于当前节点的值，说明最近公共祖先在右子树
  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  // 如果 p 和 q 一个大于当前节点的值，一个小于当前节点的值，说明当前节点就是最近公共祖先
  return root;
};

```

## 二叉树的最大公共祖先变种

输入的二叉树节点比较特殊，包含指向父节点的指针 `parent`

```javascript
var Node = {
    val: 0,
    left: null,
    right: null,
    parent: null
};

// 由于节点中包含父节点的指针，所以二叉树的根节点就没必要输入了
// 函数签名如下
var lowestCommonAncestor = function(p, q) {}

```

**这道题其实不是公共祖先的问题，而是单链表相交的问题**，你把 `parent` 指针想象成单链表的 `next` 指针，题目就变成了：

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907103749.png)

如下图：

![cos-blog-832-34-20241012](https://blog-1310531898.cos.ap-beijing.myqcloud.com/832-34-20241012/Pasted%20image%2020240907104537.png)
### 代码

```javascript
var Node = {
  val: 0,
  left: null,
  right: null,
  parent: null,
};

// 二叉树中两个节点的最近公共祖先
var lowestCommonAncestor = function (p, q) {
  // 分别记录 p 和 q 的父节点，用于移动 p 和 q 到根节点
  let p1 = p;
  let p2 = q;

  while (p1 != p2) {
    // 如果 p1 为空，移动到 q 的父节点
    // 如果 p1 不为空，向根节点方向移动，即指针向指向 p1 的父节点
    if (p1 === null) {
      p1 = q;
    } else {
      p1 = p1.parent;
    }
    // 如果 p2 为空，移动到 p 的父节点
    // 如果 p2 不为空，向根节点方向移动，指针向指向 p2 的父节点
    if (p2 === null) {
      p2 = p;
    } else {
      p2 = p2.parent;
    }
  }
};
```
## 参考

https://labuladong.online/algo/practice-in-action/lowest-common-ancestor-summary/

## 原题

| Leetcode                                                                                                                             | 力扣                                                                                                                  |     |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- | --- |
| [1644. Lowest Common Ancestor of a Binary Tree II](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-ii/)🔒      | [1644. 二叉树的最近公共祖先 II](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-ii/)🔒                   | 🟠  |
| [1650. Lowest Common Ancestor of a Binary Tree III](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/)🔒    | [1650. 二叉树的最近公共祖先 III](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iii/)🔒                 | 🟠  |
| [1676. Lowest Common Ancestor of a Binary Tree IV](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iv/)🔒      | [1676. 二叉树的最近公共祖先 IV](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree-iv/)🔒                   | 🟠  |
| [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/) | [235. 二叉搜索树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/)                   | 🟠  |
| [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)               | [236. 二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)                            | 🟠  |
| -                                                                                                                                    | [剑指 Offer 68 - I. 二叉搜索树的最近公共祖先](https://leetcode.cn/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/) | 🟢  |
| -                                                                                                                                    | [剑指 Offer 68 - II. 二叉树的最近公共祖先](https://leetcode.cn/problems/er-cha-shu-de-zui-jin-gong-gong-zu-xian-lcof/)          |     |
