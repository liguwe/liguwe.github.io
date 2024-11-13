
# 回溯算法解决排列、组合、子集问题


`#回溯算法` 


## 目录
<!-- toc -->
 ## 子集：元素不重复不可复选 

[https://leetcode.cn/problems/subsets/](https://leetcode.cn/problems/subsets/)
![|568](https://832-1310531898.cos.ap-beijing.myqcloud.com/e5977d58a644022f4079de04183590fb.png)

- 元素互不相同
- 子集不可重复：
	- 我们通过保证元素之间的`相对顺序`不变来防止出现重复的子集

![|624](https://832-1310531898.cos.ap-beijing.myqcloud.com/72a8bcd2508fda6eaa0e6a7ee541627f.png)

代码如下：

```javascript hl:18
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    // 用于存储结果
    const res = [];
    // 用于记录回溯路径
    const track = [];
    /**
     * 回溯算法的核心函数，用于遍历子集问题的回溯树
     * @param {number} start - 控制树枝的遍历，避免产生重复子集
     */
    const backtrack = (start) => {
        // 前序遍历位置，每个节点的值都是一个子集
        res.push([...track]); // 这里需要浅拷贝才行
        // ::::其实这里可以不用判断，因为for循环的条件已经限制了i的取值范围
        // ::::这里加上是为了方便理解 【回溯算法的框架】
        if (start === nums.length) return;
        // 回溯算法标准框架
        for (let i = start; i < nums.length; i++) {
            // 做选择
            track.push(nums[i]);
            // 回溯遍历下一层节点
            backtrack(i + 1);
            // 撤销选择
            track.pop();
        }
    };
    backtrack(0);
    return res;
};

console.log(subsets([1, 2, 3]));
console.log(subsets([1, 2, 3, 4]));

```

##  组合：元素不重复不可复选

> [https://leetcode.cn/problems/combinations/](https://leetcode.cn/problems/combinations/)


![|776](https://832-1310531898.cos.ap-beijing.myqcloud.com/71bd4336ce8d521d370e45ea68e5e3ad.png)

给你输入一个数组 `nums = [1,2..,n]` 和一个正整数 `k`，请你生成所有`大小为 k 的子集` ，是不是就是上一题的一种特殊场景而已。所以两种思路：

### 思路 1：

复用子集的代码，最终返回结果 `再过滤长度=k` 的子集不就行了嘛？

### 思路 2：

修改 `base case` ，代码如下：

```javascript
/**
 * @param {number} n 
 * @param {number} k 
 * @return {number[][]} 
 */
var combine = function(n, k) {
    const res = [];
    const track = [];
    // 主函数
    function backtrack(start, n, k) {
        // base case
        if (k === track.length) {
            // 遍历到了第 k 层，收集当前节点的值
            res.push([...track]);
            return;
        }
        // 回溯算法标准框架
        for (let i = start; i <= n; i++) {
            // 选择
            track.push(i);
            // 通过 start 参数控制树枝的遍历，避免产生重复的子集
            backtrack(i + 1, n, k);
            // 撤销选择
            track.pop();
        }
    }
    backtrack(1, n, k);
    return res;
};
```


## 子集 II ：元素重复不可复选

> [https://leetcode.cn/problems/subsets-ii/](https://leetcode.cn/problems/subsets-ii/)

![|680](https://832-1310531898.cos.ap-beijing.myqcloud.com/a730e5dae027ee1623d8d8863d6618d4.png)

相较于`子集`主要区别在于：
- 可能有重复元素
- 但子集中不能含有重复元素

所以，`先排序`，让相同的元素靠在一起，如果发现 `nums[i] == nums[i-1]`，则跳过，所以简单改下 子集 的代码，即可，如下：

```javascript
var subsetsWithDup = function(nums) {
    // 定义结果数组和回溯时的路径数组
    let res = [];
    let track = [];
    // 排序，以便于剪枝算法的实现
    nums.sort((a, b) => a - b);
    // 回溯算法
    const backtrack = (nums, start) => {
        // 前序位置，每个节点的值都是一个子集
        res.push([...track]);
        // 遍历子集树枝
        for (let i = start; i < nums.length; i++) {
            // 剪枝逻辑，值相同的相邻树枝，只遍历第一条
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            // 选择当前元素，加入路径数组
            track.push(nums[i]);
            // 向子节点递归
            backtrack(nums, i + 1);
            // 回溯，撤销选择
            track.pop();
        }
    }
    backtrack(nums, 0);
    return res;
};

```

## 组合总和 II ：元素可重不可复选

![|712](https://832-1310531898.cos.ap-beijing.myqcloud.com/dc788f87448a26142ca7354275ef6bbc.png)

- 即，换种思路理解题解：从一个班中，找到体重和为 `1000kg` 的同学去，划船，因为船最大载重为 `1000 kg`

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let res = [];
    let track = [];
    let trackSum = 0;
    let sortedCandidates = candidates.sort((a, b) => a - b); // 排序
    // 回溯函数
    const backtrack = (nums, start, target) => {
        // 达到目标和，找到符合条件的组合，记录结果
        if (trackSum === target) {
            res.push([...track]);
            return;
        }
        // 先剪枝，超过目标和，直接结束
        if (trackSum > target) {
            return;
        }
        // 回溯算法标准框架
        for (let i = start; i < nums.length; i++) {
            // 剪枝逻辑，值相同的树枝，只遍历第一条
            if (i > start && nums[i] === nums[i - 1]) {
                continue;
            }
            // 做选择
            track.push(nums[i]);
            trackSum += nums[i];
            // 递归遍历下一层回溯树
            backtrack(nums, i + 1, target);
            // 撤销选择
            track.pop();
            trackSum -= nums[i];
        }
    }
    backtrack(sortedCandidates, 0, target);
    return res;
};

```

> [!question]
很早很早以前刷过这题，那时候还不知道这叫 **回溯算法**，搞出来了还沾沾自喜？


## 全排列 II ：元素可重复不可复选

![|640](https://832-1310531898.cos.ap-beijing.myqcloud.com/43085e68d81e39ff3a9327d52b86c16b.png)
改题的可选数组可能`有重复`，我们来看看前面提到的 `没有重复元素的场景` 

先看能否通过  `includes` 代码如下：

```javascript
var permute = function (nums) {
    const len = nums.length;
    const res = []; // 结果集
    const options = []; // 选择列表
    function backtrack(options) {
        // 递归终止条件
        if (options.length === len) {
            return res.push(options)
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
```
能否通过上面的 `includes` 方法来判断，剪枝呢，答案是很麻烦，因为 `includes` 只是标识数组是否包含某个元素，元素重复时就会比较麻烦，所以还是使用 `used 数组`变量来标识是否被选中了，即参考 实现：代码如下

```javascript
var permute = function (nums) {
    const len = nums.length;
    const res = []; // 结果集
    const used = new Array(nums.length).fill(false); // 选择列表

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

这里需要`剪枝` , 代码如下：

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const len = nums.length;
    const res = []; // 结果集
    const track = []; // 选择列表
    const used = new Array(len).fill(false); // 记录元素是否使用过
    // ::::排序，让相同的元素靠在一起,以便于剪枝算法的实现
    nums.sort((a, b) => a - b);
    
    function backtrack(track) {
        // 递归终止条件
        if (track.length === len) {
            return res.push([...track]);
        }
        for (let i = 0; i < len; i++) {
            // :::: 已经选择过的数字不能再做选择
            if (used[i]) {
                continue;
            }
            // :::: 两个元素相邻，并且还未选择前一个元素
            if (i > 0 && nums[i-1] === nums[i] && !used[i-1]) {
                // 如果前面的相邻相等元素没有用过，则跳过
                continue;
            }
            // 做选择
            track.push(nums[i]);
            used[i] = true;
            backtrack([...track]);
            // 撤销选择
            track.pop();
            used[i] = false;
        }
    }
    // 传入空数组，代表选择列表
    backtrack(track)
    return res
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 3, 2]));

```

**分析：**

当出现重复元素时，比如输入  `nums = [1,2,2',2'']`，`2'` 只有在 `2` 已经被使用的情况下才会被选择，同理，`2''` 只有在 `2'` 已经被使用的情况下才会被选择，这就 `保证了相同元素在排列中的相对位置保证固定`。

> [!tip]
另外你会发现，**只要涉及到重复**，就得`对可选列表排序`



