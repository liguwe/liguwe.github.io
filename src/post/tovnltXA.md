
# 全排列：元素不可重复，不可复选


`#算法/回溯` 

> [46. 全排列](https://leetcode.cn/problems/permutations/)


## 目录
<!-- toc -->
 ## 实现一遍 

```javascript
var permute = function (nums) {
  let n = nums.length;
  let res = [];
  // 从 i 开始选择
  function backtrack(track) {
    if (track.length === n) {
      res.push([...track]);
      return;
    }
    for (let item of nums) {
      if (!track.includes(item)) {
        track.push(item);
        backtrack(track);
        track.pop();
      }
    }
  }
  backtrack([]);
  return res;
};
```

## 1. 最简单的实现

- 记得 `[...track]` 解决引用问题
- ==回溯算法框架==
	- 注意参数`：function backtrack('路径', '选择列表') {`
		- 参数 1 是：路径
		- 参数 2 是：选择列表
- 如果是返回元素个数为 `k` 的所有排列
	- 只需要修改 `if (track.length === k) {` 这行即可
- 另外比通用的做法是：使用 `used` 来标识访问过的节点

```javascript
var permute = function (nums) {
  let res = [];
  let len = nums.length;

  function backtrack(track) {
    if (track.length === len) {
      res.push([...track]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (track.includes(nums[i])) {
        continue;
      }
      track.push(nums[i]);
      backtrack(track);
      track.pop();
    }
  }

  backtrack([]);

  return res;
};
```

## 2. 详解

![|800](https://832-1310531898.cos.ap-beijing.myqcloud.com/36a9a199ce4568829f9d53d3803740f6.png)

其实，就是一个排列组合的数学题，我们也知道 `n` 个不重复的数，全排列共有 `n!` 个 ，比方说给三个数 `[1,2,3]` ，我们来画一画这颗`决策树` ，如下：

![|768](https://832-1310531898.cos.ap-beijing.myqcloud.com/963fbd4e9e78cccbc6de0f776253f338.png)

- ① 中的 `[2]` 代表 `路径` ，记录你`已经做过的选择`
- ② 中的 `[1,3]`代表 `选择列表` ， 表示你当前可以做出的选择
- ③ 中的，代表你站在 这个`红色的节点`上，做决策，有两层意思
	- 已经做了：你已经选择 2
	- 准备做：然后再决定选择谁？
- ④ 代表变 `「结束条件」`就是遍历到树的`底层叶子节点`，这里也就是`选择列表为空`的时候。

![|1456](https://832-1310531898.cos.ap-beijing.myqcloud.com/d9fe71a7f197df686b6b165d40bf26d9.png)

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
