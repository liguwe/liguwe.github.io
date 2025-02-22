
# 最长回文子串

`#算法/双指针` `#算法/数组` 

>  [5. 最长回文子串](https://leetcode.cn/problems/longest-palindromic-substring/)



## 目录
<!-- toc -->
 ## 1. 总结 

- 关键点：
	- 定义函数 `fn(s, i, j)`  
		- 返回
			- `以 s[i] 和 s[j] 为中心`的最长回文子串
				- `while(l >= 0 && r < s.length && s[l] === s[r]) {`
				- `return s.substring(l + 1, r);`
					- 或者 `slice`
					- 注意是 `l+1`
	- 遍历字符串
		- 再比较下`s1 / res / s2` 那个更长，然后看**哪个最长**


```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    // 处理奇数长度的回文串
    // 以 s[i] 为中心的最长回文子串
    let s1 = fn(s, i, i);
    // 处理偶数长度的回文串
    // 以 s[i] 和 s[i+1] 为中心的最长回文子串
    let s2 = fn(s, i, i + 1);
    // 比较当前找到的回文串和已保存的最长回文串
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
};

// 在 s 中寻找以 s[l] 和 s[r] 为中心的最长回文串
function fn(s, l, r) {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.slice(l + 1, r);
}

```