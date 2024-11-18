
# 两数之和


`#算法/哈希` `#leetcode`  `#2024/07/28` 


## 目录
<!-- toc -->
 ## 题目 

![image.png600|512](https://832-1310531898.cos.ap-beijing.myqcloud.com/202407281617385.png?imageSlim)

### 题目重点

- 返回下标
- 复杂度小于 `O(n^2)` 
- 可能会重复，比如`[3,3]` 

## 思路

- 思路一：排序思路，数组排序后双指针会更好，但会破坏原数组索引，题设中需要返回下标
	- 故不可取
- 思路二：**哈希存储**

## 代码实现

### 错题一
![image.png600|568](https://832-1310531898.cos.ap-beijing.myqcloud.com/202407281617386.png?imageSlim)

> 想着两个 `for` 逻辑更清晰，但有`两个问题`，如下图：
> ![image.png600|552](https://832-1310531898.cos.ap-beijing.myqcloud.com/202407281617387.png?imageSlim)

### 错误二

![image.png600|512](https://832-1310531898.cos.ap-beijing.myqcloud.com/202407281617388.png?imageSlim)

### 标准答案

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

    // 维护 val-index 的 map
    let valToIndexMap = new Map();

    // 遍历每个元素是否存在，这样的组合
    for (let i = 0; i < nums.length; i++) {
        let need = target - nums[i];
        if (valToIndexMap.has(need)) {
            // 存在，直接返回
            return [valToIndexMap.get(need), i];
        }
        // 之前的记录到 map 里， 供后续元素检查
        valToIndexMap.set(nums[i], i);
    }

    // 不存在，返回 null
    return null;

};
```

## 参考

- [一个方法团灭 nSum 问题](https://labuladong.online/algo/practice-in-action/nsum/#%E4%B8%80%E3%80%81twosum-%E9%97%AE%E9%A2%98)
- [https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked](https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked)

