
# 二叉树最近的叶节点：返回树中与目标值 k  最近的叶子节点


>  [742. 二叉树最近的叶节点](https://leetcode.cn/problems/closest-leaf-in-a-binary-tree/)


## 目录
<!-- toc -->
 ## 1. 思路 

- 先用 DFS 递归遍历找到值为 `k` 的节点 target，并且构建子节点到父节点的映射
	- 这样就==把二叉树变成了一幅图==； 
		- → `相邻节点包括：左子节点、右子节点、父节点`
- 然后==从 target 节点开始进行 BFS 算法==，第一次遇到的叶子节点就是距离最近的叶子结点。
	- 这个 BFS 相对与标准的 BFS，少了一个 for 循环，知道为什么吗


```javascript hl:4,24
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var findClosestLeaf = function (root, k) {
    let mapping = new Map(); // 存储每个节点的父节点
    let target = null; // 目标节点
    function traverse(root, parent) {
        if (!root) return;
        if (root.val === k) target = root;
        mapping.set(root, parent);
        traverse(root.left, root);
        traverse(root.right, root);
    }
    traverse(root, null);
    let q = [target];
    let visited = new Set([target]);
    function bfs() {
        while (q.length) {
            const cur = q.shift();
            // 找到叶子节点就返回
            if (cur.left === null && cur.right === null) {
                return cur.val;
            }
            // 将未访问的相邻节点加入队列
            // 相邻节点包括：左子节点、右子节点、父节点
            const neighbors = [cur.left, cur.right, mapping.get(cur)];
            for (const item of neighbors) {
                if (item !== null && !visited.has(item)) {
                    visited.add(item);
                    q.push(item);
                }
            }
        }
    }
    return bfs();
};
```

## 2. 题目理解

给定一个二叉树和一个起始节点，找到从起始节点到最近叶子节点的距离。这里的关键点是：
1. 叶子节点定义：没有子节点的节点
2. 距离定义：两个节点之间的边的数量
3. 可以向上走也可以向下走

### 2.1. 示例 1：

```
        1
       / \
      2   3
     /     \
    4       5

起始节点：2
```

分析：
- 从节点 2 出发，可以到达的叶子节点有：
	1. 向下走到节点 4（距离 1）
	2. 向上走到根节点，再向下走到节点 5（距离 3）
- 最近的叶子节点是 4，距离为 1

### 2.2. 示例 2：

```
        1
       / \
      2   3
         /
        4
       /
      5

起始节点：3
```

分析：
- 从节点 3 出发，可以到达的叶子节点有：
  1. 向下经过 4 到达 5（距离 2）
  2. 向上到 1，再向左到 2（距离 2）
- 最近的叶子节点是 5 或 2，距离都是 2
