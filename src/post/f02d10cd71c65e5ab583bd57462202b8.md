
# 数组的双指针技巧

`#算法/双指针`  `#算法/数组` 

## 目录
<!-- toc -->
 ## 1. 概述 

- 在处理 数组和链表相关问题时，双指针技巧`是经常用到的，分以下两种
	- 所谓**左右指针**，就是两个指针相向而行**或者**相背而行；
	- 而所谓**快慢指针**，就是两个指针同向而行，一快一慢。
- 在数组中，把`索引`当做指针即可

## 2. 快慢指针技巧

### 2.1. [删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)

![image.png|552](https://832-1310531898.cos.ap-beijing.myqcloud.com/ce4b56d8a98411acaaae8cf1e7ae1c52.png)

我们让慢指针 `slow` 走在后面，快指针 `fast` 走在前面探路，找到一个不重复的元素就赋值给 `slow` 并让 `slow` 前进一步。

这样，就保证了 `nums[0..slow] `都是无重复的元素，当 `fast` 指针遍历完整个数组 nums 后，`nums[0..slow] `就是整个数组去重之后的结果。

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let slow = 0,
        fast = 0;
    for (let i = 0; i < nums.length; i++) {
        fast = i;
        if (nums[fast] !== nums[slow]) {
           slow++;
           nums[slow] = nums[fast];
        }
    }
    return slow + 1;
};
```

### 2.2. [删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)

快慢指针，没命中重复的时候，慢指针直接指向快指针

![image.png|512](https://832-1310531898.cos.ap-beijing.myqcloud.com/f8abbdbe40e8a8b9eb2d364f4359de35.png)

**仔细看这个动图：**

![2.gif|504](https://832-1310531898.cos.ap-beijing.myqcloud.com/8768fd31d20e0d8a00d38911f7c69667.gif)

```javascript
/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    // 边界条件
    if (head == null) return null;
    let slow = head;
    let fast = head;
    while (fast !== null) {
        if (fast.val !== slow.val) {
            //// :::: 类比于 26题
            // nums[slow] = nums[fast];
            slow.next = fast;
            //// :::: 类比 26题 slow++;
            slow = slow.next;
        }
        // fast++
        fast = fast.next;
    }
    // ::::这一步也很关键 断开与后面重复元素的连接
    slow.next = null;
    // notice：这里返回得是head
    return head;
};

```

- 这题使用虚拟头结点后，更复杂了，导致都没写出来，其实使用`slow` 指针就好了
- **别以为懂了，自己再写一遍试试！！！**
- **关键的是，最终返回**

### 2.3. [移除元素](https://leetcode.cn/problems/remove-element/) 

![image.png|544](https://832-1310531898.cos.ap-beijing.myqcloud.com/3dd2122258009b2764e5a56bf6ad006b.png)

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let fast = 0;
    let slow = 0;
    while (fast < nums.length){
        if(nums[fast] !== val){
            // ::::关键，快指针的值给slow的值即可
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};
```

### 2.4. [移动零](https://leetcode.cn/problems/move-zeroes/)

![image.png|560](https://832-1310531898.cos.ap-beijing.myqcloud.com/27b55f5bb5563215ebf470626989d92b.png)

使用上面的移动元素方法即可：

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var removeElement = function(nums, val) {
    let fast = 0, slow = 0;
    while (fast < nums.length) {
        if (nums[fast] != val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};

var moveZeroes = function(nums) {
    let p = removeElement(nums,0);
    // 将 nums[p..] 的元素赋值为 0
    for (; p < nums.length; p++) {
        nums[p] = 0;
    }
};
```

## 3. 左右指针技巧

### 3.1. 概述

- `left` 指针在后，`right` 指针在前
	- 两个指针中间的部分就是「窗口」，算法通过扩大和缩小「窗口」来解决某些问题。
- 要数组有序，就应该想到双指针技巧
- 大部分左右指针都是从两端向中间相向而行
	- 而回文子串问题则是让左右指针从`中心向两端扩展`。不过这种情况也就回文串这类问题会遇到，所以我也把它归为左右指针了。

### 3.2. 二分查找之双指针特性，左右指针

![image.png|568](https://832-1310531898.cos.ap-beijing.myqcloud.com/b9e550f8ac3d70f74ad328bcc9cb4f58.png)

### 3.3. [两数之和 II](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)

有序，使用左右指针

![image.png|568](https://832-1310531898.cos.ap-beijing.myqcloud.com/143922fffeef921a2a295510f0214715.png)

注意，是**有序的数组**。**使用左右指针**

```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    // 一左一右两个指针相向而行
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        // ::::下面都会用的sum这个变量，提出来
        let sum = numbers[left] + numbers[right]
        if (sum === target) {
            // 题目要求的索引是从 1 开始的
            return [left + 1, right + 1];
            // :::: sum小于目标值，则移动 left
        } else if (sum < target) {
            // ::::疑问 ？ 为什么不能是 right 左边移动
            // ::::如果right再左移动，这不只会让sum 更小嘛
            // ::::疑问 ？ 为什么不能是 right 再右边移动，这不也会让sum变得更大吗
            left++; // 让 sum 大一点
        } else if (sum > target) {
            // :::: 疑问 ？ 为什么不能是 left 继续 再左边移动，这不也能让sum变得小一些吗
            right--; // 让 sum 小一点
        }
    }
    return [-1, -1]
};
```

> 代码的疑问：可以想象
> - 初步的理解是，再往回走的路其实已经在遍历里走过了

### 3.4. 原地 [反转字符串](https://leetcode.cn/problems/reverse-string/)

```javascript
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // 一左一右两个指针相向而行
    left = 0, right = s.length - 1;
    while (left < right) {
        // 交换 s[left] 和 s[right]
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};
```

### 3.5. 回文串判断

使用左右指针

![image.png|536](https://832-1310531898.cos.ap-beijing.myqcloud.com/2ca25d3a52bc21b986911ff282668e97.png)

### 3.6. [最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)

![image.png|528](https://832-1310531898.cos.ap-beijing.myqcloud.com/d249938e90b0bcd8292ea46411f54bda.png)

- 先定义一个函数`palindrome(String s, int l, int r)`，去找回文串；解决该问题的核心是从** **中心向两端扩散的双指针技巧
   - `l = r` 时， 相当于寻找长度为`奇数`的回文串，以 `s[i]` 为中心的回文子串
   - `l + 1 = r` 时， 相当于寻找长度为`偶数`的回文串，以`s[r]` 为中心的回文子串
- 那么回到最长回文串的问题，解法的大致思路就是

![image.png|512](https://832-1310531898.cos.ap-beijing.myqcloud.com/f555df58ebdf6c6738a9a497271e21ac.png)

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        // 以 s[i] 为中心的最长回文子串
        let s1 = palindrome(s, i, i);
        // 以 s[i] 和 s[i+1] 为中心的最长回文子串
        let s2 = palindrome(s, i, i + 1);

        // 再比较下s1 / res / s2 那个更长
        if (s1.length > s2.length) {
            res = res.length > s1.length ? res : s1;
        } else {
            res = res.length > s2.length ? res : s2;
        }
    }
    return res;
};


/**
 * @desc 找下标以l,r 为中心的回文字符串，在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
 * @param s 字符串
 * @param l 左下标
 * @param r 右下标
 * @return {string} 回文字符串
 *
 * 注意：
 *  l = r   寻找长度为奇数的回文串
 *  l = r-1 寻找长度为偶数数的回文串
 * */
function palindrome(s, l, r) {
    while (
        l >= 0 && r < s.length //  防止索引越界
        && s[l] === s[r]) {
        // 向两边展开
        l--;
        r++;
    }
    // 返回以 s[l] 和 s[r] 为中心的最长回文串
    return s.substring(l + 1, r);
}
```

