
# 不同的子序列： s 的子序列中 t 出现的个数


>  [115. 不同的子序列](https://leetcode.cn/problems/distinct-subsequences/)


- `dp[i][j]` 表示 `s[0,i]`  中子序列中等于  `t[0,j]` 的个数


```javascript
var numDistinct = function (s, t) {
    const m = s.length;
    const n = t.length;
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // base case：当 t 为空串时，空串是任何字符串的子序列，且只有一种方案
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // 当前字符相等时，有两种选择：
            // 1. 使用当前字符匹配：  dp[i-1][j-1]
            // 2. 不使用当前字符匹配： dp[i-1][j]
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
            } else {
                // 当前字符不相等，只能不使用当前字符
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[m][n];
};
```