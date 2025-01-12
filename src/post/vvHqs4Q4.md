
# 排列、组合、子集问题合集


`#回溯算法` 


## 目录
<!-- toc -->
 ## 1. 全排列 

- [46. 全排列：元素不可重复，不可复选](/post/tovnltXA.html)

## 2. 全排列 II ：元素可重复不可复选

- [47. 全排列 II：元素可重复，不可复选](/post/peLFh7kq.html)

## 3. 子集：元素不重复不可复选

- [78. 子集：元素不重复不可复选](/post/DiFK0hQo.html)

## 4. 子集 II ：元素重复不可复选

- [90. 子集 II：元素重复，不可复选](/post/3no1Un1T.html)

## 5. 组合：元素不重复不可复选

- [77. 组合：元素不重复不可复选](/post/4WXqPtWo.html)

## 6. 组合总和 II ：元素可重不可复选

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


