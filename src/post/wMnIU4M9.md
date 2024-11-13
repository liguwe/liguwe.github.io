
# 回溯算法解题框架


`#2023/05/18`  `#算法/回溯`  `#算法/DFS`


## 目录
<!-- toc -->
 ## 1. 回溯算法框架 

站在**回溯树**的一个节点上，你只需要思考 3 点
- 路径：也就是已经做出的选择。
- 选择列表：也就是你当前可以做的选择。
- 结束条件：也就是到达决策树底层，无法再做选择的条件。

```javascript
const result = [];

function backtrack('路径', '选择列表') {
    if ('满足结束条件') {
        result.add('路径');
        return;
    }
    for (let '选择' of '选择列表') {
        // 做选择;
        backtrack('路径', '选择列表');
        // 撤销选择;
    }
}
```

其核心就是 `for 循环里面的递归`
- 在`递归`调用之`前` `「做选择」`
- 在`递归`调用之`后`  `「撤销选择」`

关于这个框架的原理解释？ 见下面`全排列`的分析，你就明白了

## 2. 全排列

> [https://leetcode.cn/problems/permutations/](https://leetcode.cn/problems/permutations/)

![|600](https://832-1310531898.cos.ap-beijing.myqcloud.com/36a9a199ce4568829f9d53d3803740f6.png)

其实，就是一个排列组合的数学题，我们也知道 `n` 个不重复的数，全排列共有 `n!` 个 ，比方说给三个数 `[1,2,3]` ，我们来画一画这颗`决策树` ，如下：

![|672](https://832-1310531898.cos.ap-beijing.myqcloud.com/963fbd4e9e78cccbc6de0f776253f338.png)

- ① 中的 `[2]` 代表 `路径` ，记录你`已经做过的选择`
- ② 中的 `[1,3]`代表 `选择列表` ， 表示你当前可以做出的选择
- ③ 中的，代表你站在 这个`红色的节点`上，做决策，有两层意思
	- 已经做了：你已经选择 2
	- 准备做：然后再决定选择谁？
- ④ 代表变 `「结束条件」`就是遍历到树的`底层叶子节点`，这里也就是`选择列表为空`的时候。

![|1376](https://832-1310531898.cos.ap-beijing.myqcloud.com/d9fe71a7f197df686b6b165d40bf26d9.png)

### 2.1. 解法一：使用 ` Array.includes` 来判断是否选中过了

```javascript hl:17,14,5
var permute = function (nums) {
    const len = nums.length;
    const res = []; // 结果集
    /**
     * @param {Array} track 已经选择的列表
     * */
    function backtrack(track) {
        // 递归终止条件
        if (track.length === len) {
            return res.push(track)
        }
        for (let i = 0; i < len; i++) {
            // 已经选择过的数字不能再做选择
            if (!track.includes(nums[i])) {
                // 做选择
                track.push(nums[i]);
                backtrack([...track]); // 一定要 [...track] 否则会报错
                // 撤销选择
                track.pop()
            }
        }
    }
    backtrack([])
    return res
};

console.log(permute([1, 2, 3]));
console.log(permute([1, 2, 3, 4]));
```

### 2.2. 解法二：使用 `used` 标识选择过的节点

```javascript hl:4,17,23,15
var permute = function (nums) {
    const len = nums.length;
    const res = []; // 结果集
    const used = new Array(nums.length).fill(false); 
    /**
     * @param {Array} track 已经选择的列表
     * */
    function backtrack(track) {
        // 递归终止条件
        if (track.length === len) {
            return res.push(track)
        }
        for (let i = 0; i < len; i++) {
            // 已经选择过的数字不能再做选择
            if(used[i]) continue;
            
            // 做选择
            track.push(nums[i]);
            used[i] = true;
            
            backtrack([...track]);
            
            // 撤销选择
            track.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return res
};

console.log(permute([1, 2, 3]));
console.log(permute([1, 2, 3, 4]));

```

### 2.3. 变体：输出`元素个数`为 `k` 的所有排列？

只需要，修改下面的 **base case** 即可，代码如下：

```javascript hl:7
var permute = function (nums,k) { // 注意这里传入了参数 k
    const len = nums.length;
    const res = []; // 结果集
    const options = []; // 选择列表
    function backtrack(options) {
        // ::::base case 选择完了
        if (options.length === k) {
            res.push(options)
            return;
        }
        for (let i = 0; i < len; i++) {
            // 已经选择过的数字不能再做选择
            if (!options.includes(nums[i])) {
                // 做选择
                options.push(nums[i]);
                backtrack([...options]);
                // 撤销选择
                options.pop()
            }
        }
    }
    backtrack(options)
    return res
};

console.log(permute([1, 2, 3], 3));
console.log(permute([1, 2, 3], 2));

```

## 3. SKU 排列

```javascript hl:20
let names = ["iPhone X", "iPhone XS"]
let colors = ["黑色", "白色"]
let storages = ["64g", "256g"]
let skus = {names,colors,storages};

// [
//     ["iPhone X", "黑色", "64g"],
//     ["iPhone X", "黑色", "256g"],
//     ["iPhone X", "白色", "64g"],
//     ["iPhone X", "白色", "256g"],
//     ["iPhone XS", "黑色", "64g"],
//     ["iPhone XS", "黑色", "256g"],
//     ["iPhone XS", "白色", "64g"],
//     ["iPhone XS", "白色", "256g"],
// ]

let combine = function (...skus) {
    let res = [];
    const backtrack = (opts, selectedArr, index) => {
        // 取下一个 sku
        let options = opts[index];
        if (selectedArr.length === 3) {
            res.push([...selectedArr]);
            return;
        }

		// 根据当前 sku 的可选项进行遍历
        for (let i = 0; i < options.length; i++) {
            // 选择
            selectedArr.push(options[i]);
            
            // ::::关键，选择下一个产品类型，即下一个数组
            
            backtrack(skus, selectedArr, index + 1);
            
            // 取消选择
            selectedArr.pop();
        }
    }
    backtrack(skus, [], 0)
    return res
}

console.log(combine(names, colors, storages));

```

> **关键点**，递归函数 `backtrack` 的入参上，即 `opts, selectedArr, index` 这三个参数上。

## 4. N 皇后

> [https://leetcode.cn/problems/n-queens/](https://leetcode.cn/problems/n-queens/)

比如， `N = 4`，那么你就要在 `4x4` 的棋盘上放置 `4 个皇后`，返回以下结果（用 `.` 代表空`棋盘`，`Q` 代表`皇后`），如下图：

![|584](https://832-1310531898.cos.ap-beijing.myqcloud.com/e7bebf8d2009d6d55a08ae6b0f3017ba.png)

皇后可以攻击`同一行`、`同一列`、`左上左下` `右上右下`  四个方向的任意单位。

### 4.1. 附：`初始化`一个 `m*n` 的`二维数组`  最简便的方式

![|664](https://832-1310531898.cos.ap-beijing.myqcloud.com/2b7dcf309d5613314eb9e25201c05ef4.png)

```javascript
/**
 * 如何初始化一个二维数组
 * */
function initArr(m, n) {
    // :::: 从可迭代或类数组对象创建一个新的浅拷贝的数组实例
    return Array.from({length: m}, (item,index) => Array(n).fill('.'));
}

console.log(initArr(3, 4));
console.log(initArr(4, 4));
console.log(initArr(4, 3));
```

### 4.2. 代码实现

```javascript
/**
 * https://leetcode.cn/problems/n-queens/
 * */
let solveNQueens = function (n) {
    let res = [];
    let board = Array.from({length: n}, () => Array(n).fill('.'));
    /**
     * @param board 棋盘二维数组
     * @param row 当前第几行
     * */
    let backtrack = function (board, row) {
        // :::: 满足结束条件, 即已经放置了 n 个皇后
        if (row === board.length) {
            // 看题设，需要输出这样的格式
            const item = board.map((row) => row.join(''));
            res.push(item);
            return;
        }
        // :::: 从选择列表中选择,这里的选择列表是【二维数组的第 row 行】
        // 换句话来说，从 第row行  中去选择 某一列
        let currentRow = board[row].length;
        for (let col = 0; col < currentRow; col++) {
            if (!isValid(board, row, col)) {
                continue;
            }
            // :::: 做选择
            board[row][col] = 'Q';
            backtrack(board, row + 1);
            // :::: 撤销选择
            board[row][col] = '.';
        }
    }; 
    let isValid = function (board, row, col) {
        let totalRow = board.length;
        // 检查 【当前列】 是否有皇后互相冲突
        // 所以 列数col不变，行数变化
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        // 检查【右上方】是否有皇后互相冲突
        for (let i = row - 1, j = col + 1; i >= 0 && j < totalRow; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        // 检查【左上方】 是否有皇后互相冲突
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    };
    backtrack(board, 0);
    return res;
};


```

关于，`isValid` 的逻辑，分析可见 `fj` 

[https://www.figma.com/file/hT9k2YbVvV1UIITtUmbJ0C/2023.05.LOG?type=whiteboard&node-id=161-198&t=Cw0r27yobQ8yinDi-4](https://www.figma.com/file/hT9k2YbVvV1UIITtUmbJ0C/2023.05.LOG?type=whiteboard&node-id=161-198&t=Cw0r27yobQ8yinDi-4)

![|984](https://832-1310531898.cos.ap-beijing.myqcloud.com/f6c1b65af55a9c2696bbd59b30dc6ff2.png)

回溯算法中，如果**只需要一个结果即可**，如上题中，只需要一个符合规范的 N 皇后布局，外部变量标识是否找到，找到直接 `return` 即可，如下代码：

```javascript hl:6
// 函数找到一个答案后就返回 true
var found = false;

function backtrack(board, row) {
    // 已经找到一个答案了，不用再找了
    if (found) {
        return;
    }
    // 触发结束条件
    if (row === board.length) {
        res.push(board);
        // 找到了第一个答案
        found = true;
        return;
    }
    ...
}
```

## 5. N 皇后 II

>[https://leetcode.cn/problems/n-queens-ii/](https://leetcode.cn/problems/n-queens-ii/)

把 上题 改成返回 个数 而已，其他都不需要变，把 `res = 0`  即可，因为 `res=[]` 肯定更占内存。代码如下：

```javascript

let totalNQueens = function (n) {
    let res = 0;
    let board = Array.from({length: n}, () => Array(n).fill('.'));
    /**
     * @param board 棋盘二维数组
     * @param row 当前第几行
     * */
    let backtrack = function (board, row) {
        // :::: 满足结束条件, 即已经放置了 n 个皇后
        if (row === board.length) {
            res++;
            return;
        }
        // :::: 从选择列表中选择,这里的选择列表是【二维数组的第 row 行】
        // 换句话来说，从 第row行  中去选择 某一列
        let currentRowLen = board[row].length;
        for (let col = 0; col < currentRowLen; col++) {
            if (!isValid(board, row, col)) {
                continue;
            }
            // :::: 做选择
            board[row][col] = 'Q';
            backtrack(board, row + 1);
            // :::: 撤销选择
            board[row][col] = '.';
        }
    };

    let isValid = function (board, row, col) {
        let totalRow = board.length;
        // 检查 【上方】 是否有皇后互相冲突
        // 所以 列数col不变，行数变化
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') {
                return false;
            }
        }
        // 检查【右上方】是否有皇后互相冲突
        for (let i = row - 1, j = col + 1; i >= 0 && j < totalRow; i--, j++) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        // 检查【左上方】 是否有皇后互相冲突
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') {
                return false;
            }
        }
        return true;
    };
    backtrack(board, 0);
    return res;
};


```

### 5.1. 复杂度分析

当 N = 8 时，就是`八皇后问题`，数学大佬`高斯穷尽一生`都没有数清楚八皇后问题到底有几种可能的放置方法，但是我们的算法只需要一秒就可以算出来所有可能的结果。
==所以，计算机真的很强大==

N 行棋盘中，第一行有 `N` 个位置可能可以放皇后，第二行有 `N - 1` 个位置，第三行有 `N - 2` 个位置，以此类推，再叠加每次放皇后之前 `isValid` 函数所需的 `O(N)` 复杂度，所以总的时间复杂度上界是 `O(N! * N)`  。

