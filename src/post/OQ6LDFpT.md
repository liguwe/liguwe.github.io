
# 无重复字符的最长子串


`#leetcode`   `#2024/08/05`  `#算法/滑动窗口`  


## 目录
<!-- toc -->
 ## 题目及理解 

![image.png600|536](https://832-1310531898.cos.ap-beijing.myqcloud.com/202408050719710.png?imageSlim)

> [!danger]
>  返回的是最长子串的**长度**，而不是最长无重复子串本身

## 解题思路

**滑动窗口框架**

```javascript hl:25
// 滑动窗口算法伪码框架
var slidingWindow = function(s) {
    // 用合适的数据结构记录窗口中的数据，根据具体场景变通
    // 比如说，我想记录窗口中元素出现的次数，就用 map
    // 如果我想记录窗口中的元素和，就可以只用一个 int
    var window = ...;

    // 左右指针，用于移动窗口
    var left = 0
    let right = 0;
    while (right < s.length) {
        // c 是将移入窗口的字符
        var c = s[right];
        window.add(c);
        // 增大窗口
        right++;
        // 进行窗口内数据的一系列更新
        // ...
        // *** debug 输出的位置 ***
        // 注意在最终的解法代码中不要 print
        // 因为 IO 操作很耗时，可能导致超时
        console.log(left, right);
        // *********************

        // 判断左侧窗口是否要收缩
        while (window needs shrink) {
            // d 是将移出窗口的字符
            var d = s[left];
            window.remove(d);
            // 缩小窗口
            left++;
            // 进行窗口内数据的一系列更新
            ...
        }
    }
};

```

## 代码实现

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  // 最长子串的长度
  let res = 0;

  // 滑动窗口, 用来记录窗口中的字符出现的次数，key为字符，value为字符出现的次数
  // 当字符出现的次数大于1时，说明重复了，需要收缩窗口，即 left++
  // 当字符出现的次数等于1时，说明没有重复，可以扩大窗口，即 right++
  let win = new Map();

  while (right < s.length) {
    let c = s[right];
    right++;
    // 进行窗口内数据的一系列更新, 例如增加字符的次数
    win.set(c, (win.get(c) || 0) + 1);

    // 判断左侧窗口是否需要收缩
    // 当字符的数量大于1时, 说明重复了, 需要收缩
    while (win.get(c) > 1) {
      let d = s[left];
      left++;
      // 进行窗口内数据的一系列更新, 例如减少字符的次数
      win.set(d, win.get(d) - 1);
    }
    // 在这里更新答案
    res = Math.max(res, right - left);
  }

  return res;
};

```

### 复杂度分析

- 时间复杂度：`O(n)`
	- 其中 `n` 是字符串的长度
	- 在最坏的情况下，左右指针各遍历整个字符串一次。
-  空间复杂度：`O(min(m, n))`
	- 其中 `m` 是**字符集的大小**
	- `n` 是字符串的长度

