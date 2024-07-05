
## updateAt: 2023.04.11
category: 算法
#算法/动态规划 


## 先回顾下动态规划的解题要点

- 明确 `dp 函数或数组`的定义，从`已知的「状态」`中`推导`出`未知的「状态」`
- 就算 `dp 函数/数组`的定义相同，如果你使用`不同的「视角」`进行穷举，效率也不见得是相同的，如下  [[#两种穷举的思路（排列组合的两个视角）]]


## 两种穷举的思路（排列组合的两个视角）
![](images/1b0252f2059f869dc667fb00931a7571.png)

### 球盒模型
如下图：
![](images/7936c202a574509aca13dd0c848ab576.png)

### 视角 1： 盒子的视觉
![](images/45fc7d6729e977ba87c2128b01fd9543.png)
一直推导，最终结论，如上面的公式

### 视角 2：球的视角
![](images/0e5325aa3c46b849764ed679c9f13d00.png)

## 该题分析
![](images/a8bac35da79575b04fc5d3cad04ef71f.png)
> 注意是 `子序列` 

一个思路是： `s` 的`子序列`中有多少个 `t` , 所以找出所有的`子序列`即可，这是一个暴力解法
所以，考虑是否能够拆解成 `规模更小的子问题` ，所以，**更小的子问题是**？
`s[i..]` 的`子序列`中 `t[j..]` 出现的次数为 `dp(s, i, t, j)`
所以，`原题`想要的结果是 `dp(s, 0, t, 0)` ，可写如下代码：
![](images/7af5e2cc42c33fc1c5b453c3c3ed63c3.png)

> 子序列是需要保证顺序的，所以是 `s[i...]` 或者 `t[j...]`

参考上面  [[#球盒模型]] 

- `t` 代表`盒子`
- `s` 代表 `小球` 
所以，要做的事情就是把`所有盒子都装上一个小球`

## 盒子的视角 ， 即 `t 的视角`
`dp(s, 0, t, 0)` 如何`转移`呢？ 以 `s = "babgbag", t = "bag"` 为例：

- `t[0]` 在 `s` 中的什么位置 ？
   - `s[0]` 和 `s[2]` 及 `s[4]`
- `转化为：`  `s[0...] , s[2...] , s[4...]`  中出现 `t[1...]` 的个数

上面的描述`翻译`成代码如下：
![](images/43ae65d42c0ca29aaf7d83a08fdb7a15.png)

#### 最终可执行代码
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    // ::::dp(s, i, t, j) 表示 s[i..] 中 t[j..] 出现的个数
    return dp(s, 0, t, 0);
};
function dp(s,i,t,j) {
    //// :::: base case 1
    if (j === t.length) {
        // t 已经全部匹配完成
        return 1;
    }
    // :::: base case 2
    if (s.length - i < t.length - j) {
        // s[i..] 比 t[j..] 还短，必然没有匹配的子序列
        return 0;
    }
    // ::::代表出现的次数
    let res = 0;
    // :::: 在 s[i..] 中寻找 k，使得 s[k] == t[j]
    for (let k = i; k < s.length; k++) {
        if (s[k] === t[j]) {
            // 累加结果
            res += dp(s, k + 1, t, j + 1);
        }
    }
    return res;
}

console.log(numDistinct('rabbbit', 'rabbit')); // 3
console.log(numDistinct('babgbag', 'bag'));    // 5


```

#### 备忘录优化
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    // ::::add memo
    const memo = new Array(s.length).fill([]);
    for (let i = 0; i < s.length; i++) {
        // :::: 为什么是 -1 ？？？因为储存的值是 出现次数
        memo[i] = new Array(t.length).fill(-1);
    }
    return dp(s, 0, t, 0,memo);
};
function dp(s,i,t,j,memo) {
    if (j === t.length) {
        return 1;
    }
    if (s.length - i < t.length - j) {
        return 0;
    }
    // :::: 查备忘录防止冗余计算
    if (memo[i][j] !== -1) {
        return memo[i][j];
    }
    let res = 0;
    for (let k = i; k < s.length; k++) {
        if (s[k] === t[j]) {
            // 累加结果
            res += dp(s, k + 1, t, j + 1,memo);
        }
    }
    memo[i][j] = res;
    return res;
}

console.log(numDistinct('rabbbit', 'rabbit'));// 3
console.log(numDistinct('babgbag', 'bag')); // 5

```

### 算法复杂度分析：

- 带备忘录的动态规划算法的时间复杂度 
   - = `子问题的个数`  *  `函数本身的时间复杂度` 
   - = `「状态」的个数`  * `函数本身的时间复杂度` 
   - = `O(MN) * O(M)`
   - = `O(N * M^2)`
> `M, N` 分别代表 `s, t` 的长度，算法的`「状态」`就是 `dp 函数`参数 `i, j 的组合`


## 小球的视角 即 `s 的视角`
原问题是计算 `s[0..]` 的所有子序列中 `t[0..]` 出现的次数

- `s[0] = t[0]，即能够匹配`， 又有`两种情况`
   - 情况 1：去匹配：`=>`    `s[1..]` 的所有子序列中计算 `t[1..]` 出现的次数
   - 情况 2：不匹配：`=>`   `s[1..]` 的所有子序列中计算 `t[0..]` 出现的次数
- `s[0] != t[0]` 在 `s[1..]` 的子序列中计算 `t[0...]` 的出现次数

翻译成代码，即：
```javascript
/**
 *   // ::::转态转移方程定义：
 *    s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j)
 */
var dp = function(s, i, t, j){
    if(s[i] === t[j]){
        // 匹配，两种情况，累加关系
        // 1、去匹配 j+1  
        // 2、不去匹配 j
        return dp(s, i + 1, t, j + 1) + dp(s, i + 1, t, j);
    } else {
        // 不匹配，在 s[i+1..] 的子序列中计算 t[j..] 的出现次数
        return dp(s, i + 1, t, j);
    }
}
```

> 为啥明明 `s[0]` 可以匹配 `t[0]`，还不让它俩匹配呢？主要是为了给 `s[0]` 之后的元素匹配的机会


#### 带备忘录的解法
```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const memo = new Array(s.length).fill([]);
    for (let i = 0; i < s.length; i++) {
        memo[i] = new Array(t.length).fill(-1);
    }
    return dp(s, 0, t, 0, memo);
};

// 定义：s[i..] 的子序列中 t[j..] 出现的次数为 dp(s, i, t, j, memo)
var dp = function(s, i, t, j, memo) {
    // base case 1
    if (j === t.length) {
        return 1;
    }
    // base case 2
    if (s.length - i < t.length - j) {
        return 0;
    }
    // 查备忘录防止冗余计算
    if (memo[i][j] !== -1) {
        return memo[i][j];
    }
    let res = 0;
    // 执行状态转移方程
    if (s[i] === t[j]) {
        // 匹配，两种情况，累加关系
        res += dp(s, i + 1, t, j + 1, memo) + dp(s, i + 1, t, j, memo);
    } else {
        // 不匹配，在 s[i+1..] 的子序列中计算 t[j..] 的出现次数
        res += dp(s, i + 1, t, j, memo);
    }
    // 结果存入备忘录
    memo[i][j] = res;
    return res;
};

console.log(numDistinct('rabbbit', 'rabbit'));// 3
console.log(numDistinct('babgbag', 'bag')); // 5

```

#### 复杂度分析

- 带备忘录的动态规划算法的时间复杂度 
   - = `子问题的个数`  *  `函数本身的时间复杂度` 
   - = `「状态」的个数`  * `函数本身的时间复杂度` 
   - = `O(MN) * O(1)`
   - = `O(N * M)`
> `M, N` 分别代表 `s, t` 的长度，算法的`「状态」`就是 `dp 函数`参数 `i, j 的组合`

明显比 [[#盒子的视角 ， 即 `t 的视角`| 盒子的视角]] 更优秀

## 总结
就算 `dp 函数/数组`的定义相同，如果你使用不同的`「视角」`进行穷举，效率也不见得是相同的

## 思考
那么不妨进一步思考一下，什么样的动态规划题目可能产生「穷举视角」上的差异？换句话说，什么样的动态规划问题能够抽象成经典的「球盒模型」呢？

## 参考

- [https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/dong-tai-g-2526f/](https://labuladong.github.io/algo/di-er-zhan-a01c6/dong-tai-g-a223e/dong-tai-g-2526f/)
- [https://leetcode.cn/problems/distinct-subsequences/](https://leetcode.cn/problems/distinct-subsequences/)

<div class="liguwe-doc-footer" id="liguwe.site.blog-doc-footer">
            <div class="liguwe-doc-footer-edit-link">
                <p class="liguwe-doc-footer-p">
                    <svg t="1687912573060" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1498">
                        <path d="M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 0.1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-0.2 35.9-0.3 46.3-0.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6z m-204.1 334c-10.6 0-26.2 0.1-46.8 0.3l-23.6 0.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5 0.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z"
                              p-id="1499" ></path>
                    </svg>
                    <a href="https://www.yuque.com/liguwe/post/tz3mi5gqs5l59ncv" target="_blank" class="liguwe-doc-footer-edit-link-a">
                        View this page on Yuque（语雀）
                    </a>
                </p>
                <p class="liguwe-doc-footer-p">
                    <svg t="1687913054251" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5173"><path d="M853.333333 501.333333c-17.066667 0-32 14.933333-32 32v320c0 6.4-4.266667 10.666667-10.666666 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V213.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h320c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v640c0 40.533333 34.133333 74.666667 74.666667 74.666667h640c40.533333 0 74.666667-34.133333 74.666666-74.666667V533.333333c0-17.066667-14.933333-32-32-32z"  p-id="5174"></path><path d="M405.333333 484.266667l-32 125.866666c-2.133333 10.666667 0 23.466667 8.533334 29.866667 6.4 6.4 14.933333 8.533333 23.466666 8.533333h8.533334l125.866666-32c6.4-2.133333 10.666667-4.266667 14.933334-8.533333l300.8-300.8c38.4-38.4 38.4-102.4 0-140.8-38.4-38.4-102.4-38.4-140.8 0L413.866667 469.333333c-4.266667 4.266667-6.4 8.533333-8.533334 14.933334z m59.733334 23.466666L761.6 213.333333c12.8-12.8 36.266667-12.8 49.066667 0 12.8 12.8 12.8 36.266667 0 49.066667L516.266667 558.933333l-66.133334 17.066667 14.933334-68.266667z"  p-id="5175"></path></svg>
                    <a href="https://github.com/liguwe/liguwe.github.io/blob/master/post/tz3mi5gqs5l59ncv.md" target="_blank" class="liguwe-doc-footer-edit-link-a">Edit this page on Github</a>
                </p>
            </div>
            <div id="liguwe-comment"></div></div>