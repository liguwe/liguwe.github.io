
# 判断子序列


`#2024/07/28` `#算法/双指针`  `#leetcode` 


## 目录
<!-- toc -->
 ## 题目及理解 

![image.png](https://832-1310531898.cos.ap-beijing.myqcloud.com/100200a42cdfb5c4b386f9fa25baf3b1.png)

## 解题思路

![640.gif](https://832-1310531898.cos.ap-beijing.myqcloud.com/fd27ca36abe5b0ffbc24048d5e39f11e.gif)

- 使用`快慢指针`遍历
- 遍历完后看`慢指针是否等于子序列的长度`

## 代码实现

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let slow = 0; // 慢指针
  let fast = 0; // 快指针

  // 使用快慢指针，遍历字符串 t
  while (fast < t.length) {
    // 当 s[slow] 与 t[fast] 相等时，慢指针向后移动一位
    if (s[slow] === t[fast]) {
      slow++;
    }
    // 快指针向后移动一位，正常速度移动
    fast++;
  }
  // 如果慢指针的值等于 s 的长度，说明 s 是 t 的子序列
  return slow === s.length;
};

```

### 复杂度分析

## 进阶

比较困难，详细题解：[二分查找高效判定子序列](https://labuladong.online/algo/frequency-interview/binary-search-subsequence/)

## 错误记录

