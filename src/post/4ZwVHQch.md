
# 二叉树的层次遍历与 BFS 算法



## 目录
<!-- toc -->
 ## 1. [二叉树的层序遍历](https://leetcode.cn/problems/binary-tree-level-order-traversal/) 

![image.png|584](https://832-1310531898.cos.ap-beijing.myqcloud.com/dd5bac7e1d5221a13ccb0336ce2d97d4.png)

- 注意是`队列`，所以是 `push` 和 `shift`，而不是 `pop` 
	- `while 循环`，管从上到下
	- `for 循环`， 分管和从左到右的遍历

![image.png|696](https://832-1310531898.cos.ap-beijing.myqcloud.com/e80c234bde21ae68b50486fcd25f1061.png)

```javascript

/*
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // 如果根节点为空，则返回空数组
    if (root === null) return [];
    // 返回的结果
    const res = [];
    // 辅助队列,初始化队列，首先加入根节点
    const q = [root];

    while (q.length) {
        const size = q.length;
        // 用于存储当前层的节点值
        const currentLevel = [];
        for (let i = 0; i < size; i++) {
            // :::::出队列
            const node = q.shift();
            currentLevel.push(node.val);
            // :::::左节点先入队列
            if (node.left) {
                q.push(node.left);
            }
            // :::::右节点后入队列
            if (node.right) {
                q.push(node.right);
            }
        }
        res.push(currentLevel);
    }

    return res;

};

```

## 2. [二叉树的层序遍历 II](https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/)

![image.png|528](https://832-1310531898.cos.ap-beijing.myqcloud.com/2f5d6564554331c98fae7653b638f281.png)

 反过来
 -  从下到上
 - 从左到右
 
```javascript hl:30
/*
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    // 如果根节点为空，则返回空数组
    if (root === null) return [];
    // 返回的结果
    const res = [];
    // 辅助队列,初始化队列，首先加入根节点
    const q = [root];

    while (q.length) {
        const size = q.length;
        // 用于存储当前层的节点值
        const currentLevel = [];
        for (let i = 0; i < size; i++) {
            // :::::出队列
            const node = q.shift();
            currentLevel.push(node.val);
            // :::::左节点先入队列
            if (node.left) {
                q.push(node.left);
            }
            // :::::右节点后入队列
            if (node.right) {
                q.push(node.right);
            }
        }
        res.unshift(currentLevel);
    }

    return res;

};

```

- 只需要改一个 `地方` ，如上
- 问：如果遍历，改成 `从上到下`， `从右到左` 呢 ？	
    - 同样，在 `for 循环` 里做文章

## 3. [二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)

这道题，前面使用`二叉树遍历的思路`和`分解问题的思路`都解过，这里使用 `层次遍历的思路（或者说是层次遍历框架）`来解决

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
// ::::层次遍历的思路
var minDepth = function (root) {
    //   ::::如果根节点为空，直接返回0
    if (root === null) return 0;
    // ::::默认深度为1
    let depth = 1;
    /**
     * ::::层次遍历框架
     */
    let q = [root];

    while (q.length) {
        const size = q.length;
        for (let i = 0; i < size; i++) {
            // ::::注意：是 shift() 而不是 pop()
            const node = q.shift();
            // ::::如果到达叶子节点，返回深度
            if (node.left === null && node.right === null) {
                return depth;
            }
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        // ::::深度加一
        depth++;
    }
};
```

- 注意点：一般来讲，`层次遍历`特别适合来求`最小值` ，请问这是为什么呢？
    - 回答：这里省略，想想就就知道了，再结合下图看看就明白了
        - ![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/e80c234bde21ae68b50486fcd25f1061.png)
- 另：一般来讲，层次遍历复杂度低于 DFS？
    - 因为不一定需要遍历完成，中途找到了就返回了

## 4. [最大层内元素和](https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree/)

![image.png|584](https://832-1310531898.cos.ap-beijing.myqcloud.com/6a912bcd4a453071884f3f4c510d2196.png)

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
    // ::::::::如果根节点为空，直接返回0
    if (root === null) {
        return 0;
    }
    // ::::::::层次
    let depth = 1;
    // ::::::::结果
    let res = 0;
    // ::::::::最大值,默认为最小值
    // let maxSum = -100000;
    let maxSum = -Infinity;
    let q = [root];
    while (q.length) {
        let size = q.length;
        let levelSum = 0;
        for (let i = 0; i < size; i++) {
            // ::::::::出队列,注意，这个是在 for 循环中的
            const node = q.shift();
            levelSum += node.val
            if (node.left !== null) {
                q.push(node.left)
            }
            if (node.right !== null) {
                q.push(node.right);
            }
        }
        if (levelSum > maxSum) {
            res = depth;
            maxSum = levelSum;
        }
        depth++;
    }
    return res;
};

```

- 一个技巧：如果忘了 `-Infinity` ，则可以直接写成题设中的`最小值`，是 `10000`
- `const node = q.shift();` 是在` for 循环`里面

## 5. [N 叉树的层序遍历](https://leetcode.cn/problems/n-ary-tree-level-order-traversal/)

![image.png|536](https://832-1310531898.cos.ap-beijing.myqcloud.com/4a4b1ffb2de4d27a1f984f490be949ec.png)

```javascript

 /**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    // ::::::::如果根节点为空，则返回空数组
    if (root === null) {
        return [];
    }
    // ::::::::返回的结果
    let res = [];
    // ::::::::辅助队列,初始化队列，首先加入根节点
    let q = [root];
    /**
     * ::::::::层次遍历框架：队列不为空时，循环
     **/
    while (q.length) {
        // ::::::::用于存储当前层的节点值
        let level = [];
        let size = q.length;
        for (let i = 0; i < size; i++) {
            // ::::::::出队列
            const node = q.shift();
            level.push(node.val);
            // ::::::::遍历子节点，入队列,多叉树的子节点是一个数组
            for (let item of node.children) {
                q.push(item);
            }
        }
        res.push(level);
    }

    return res;
};
```

两个要点：
- 层次遍历的框架，一定无误的默写出来
- 多叉树，比二叉树，只是从 `node.left 和 node.right`  变成了  `node.children`  而已

## 6. `递归`的方式实现`层序遍历`

```javascript
var levelTraverse = function (root) {
    let res = [];
    // ::::关键是把 depth、res 作为参数传入
    traverse(root, 0, res);
    return res;
};

/**
 * @description 递归遍历
 * @param {TreeNode} root
 * @param {number} depth
 * @param {number[][]} res
 * */
function traverse(root, depth, res) {
    if (root == null) {
        return;
    }
    // 前序位置，看看是否已经存储 depth 层的节点了
    if (res.length <= depth) {
        // 第一次进入 depth 层
        res.push([]);
    }

    // 前序位置，在 depth 层添加 root 节点的值
    res[depth].push(root.val);
    traverse(root.left, depth + 1, res);
    traverse(root.right, depth + 1, res);
}
```

- 这种思路从结果上说确实可以得到层序遍历结果，
    - 但其`本质`还是二叉树的前序遍历，或者说 DFS 的思路，而不是层序遍历，或者说 BFS 的思路
    - `因为`这个解法是依赖`前序遍历自顶向下、自左向右`的顺序特点得到了正确的结果。
- 抽象点说，这个解法更像是从左到右的「列序遍历」，而不是自顶向下的「层序遍历」。
	- 所以对于计算最小距离的场景，这个解法完全等同于 DFS 算法，没有 BFS 算法的性能的优势。

## 7. `扩散` 到 `BFS算法`：[岛屿数量](https://leetcode.cn/problems/number-of-islands/)

- 其实，`层次遍历` 扩散后就是 `BFS算法`
	- 二叉树的`层次遍历`是：`for循环` 中`扩散`  `左右子节点`
	- 多叉树的`层次遍历`是：`for循环` 中`扩散`  `children子节点`
	- 岛屿问题的 `层次遍历`是：`for循环` 中`扩散`  `上下左右节点` ，如下图：

![image.png|536](https://832-1310531898.cos.ap-beijing.myqcloud.com/24d04b560b16db3c6049f57b2b37d476.png)

![image.png|488](https://832-1310531898.cos.ap-beijing.myqcloud.com/2b15033aff9a4463aa0c2c7ad1a59f47.png)

```javascript
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let res = 0;
    // ::::::::行数
    const m = grid.length;
    if (m === 0) {
        return res;
    }
    // ::::::::列数
    const n = grid[0].length;
    // ::::::::遍历整个二维数组
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            // ::::::::如果当前位置是岛屿
            if (grid[i][j] === '1') {
                // ::::::::岛屿数量加一
                res++;
                //:::: 然后使用 DFS 将岛屿淹了
                bfs(grid, i, j);
            }
        }
    }
    return res;
};

/**
 * @description ::::从 (i, j) 开始，将与之相邻的陆地都变成海水
 * */
var bfs = function (grid, i, j) {
    // ::::::::行数
    const m = grid.length;
    // ::::::::列数
    const n = grid[0].length;
    // ::::::::辅助队列,初始化队列，首先加入根节点
    const q = [i, j](/post/4ZwVHQch.html#i,-j);

    // :::: 将当前位置的值置标识为 0，即将岛屿淹了
    grid[i][j] = '0';

    while (q.length) {
        let size = q.length;
        for (let k = 0; k < size; k++) {
            const [x, y] = q.shift();
            // ::::上边,如果上边是陆地，则入队列,并且将陆地变成海水
            if (y - 1 >= 0 && grid[x][y - 1] === '1') {
                q.push([x, y - 1]);
                grid[x][y - 1] = '0';
            }
            // 下边,如果下边是陆地，则入队列,并且将陆地变成海水
            if (y + 1 < n && grid[x][y + 1] === '1') {
                q.push([x, y + 1]);
                grid[x][y + 1] = '0';
            }
            // 左边,如果左边是陆地，则入队列,并且将陆地变成海水
            if (x - 1 >= 0 && grid[x - 1][y] === '1') {
                q.push([x - 1, y]);
                grid[x - 1][y] = '0';
            }
            // 右边,如果右边是陆地，则入队列,并且将陆地变成海水
            if (x + 1 < m && grid[x + 1][y] === '1') {
                q.push([x + 1, y]);
                grid[x + 1][y] = '0';
            }
        }
    }
}

```

> 当然，这个题还有 `DFS 解法` ，后文会提到

## 8. 总结

- 很多网格，二维数组类（如岛屿问题）题目可以使用这种 `层次遍历框架`
- 很多最小值问题，智力最小值问题等可以考虑使用 `层次遍历框架`
- 请务必牢记 `层次遍历框架`，记着了框架这些题都能写出来
- `层次遍历框架` 及 `BFS 算法`的关系是什么，请回答？
	1. 层次遍历继承了BFS的核心思想，但更专注于树的特定需求
	2. 层次遍历通常不需要visited集合，因为树没有环
	3. 层次遍历常常需要记录层次信息，而普通BFS不需要
	4. 层次遍历是BFS在树结构上的特化版本
	5. 两者都基于队列实现，保证了从近到远的访问顺序

