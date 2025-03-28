
# 一行代码就能解决的算法题

| LeetCode                                                           | 力扣                                                       | 难度  |
| ------------------------------------------------------------------ | -------------------------------------------------------- | --- |
| [319. Bulb Switcher](https://leetcode.com/problems/bulb-switcher/) | [319. 灯泡开关](https://leetcode.cn/problems/bulb-switcher/) | 🟠  |
| [877. Stone Game](https://leetcode.com/problems/stone-game/)       | [877. 石子游戏](https://leetcode.cn/problems/stone-game/)    | 🟠  |
| [292. Nim Game](https://leetcode.com/problems/nim-game/)           | [292. Nim 游戏](https://leetcode.cn/problems/nim-game/)    | 🟢  |


## 目录
<!-- toc -->
 ## 第 292 题「[Nim 游戏](https://leetcode.cn/problems/nim-game)」 

### 题目

你和你的朋友面前有一堆石子，你们轮流拿，一次至少拿一颗，最多拿三颗，谁拿走最后一颗石子谁获胜

假设你们都很聪明，**由你第一个开始拿**，请你写一个算法，输入一个正整数 `n`，返回你是否能赢（true 或 false）。

### 反着思考

- 如果我能赢，那么最后轮到我取石子的时候**必须要剩下 1~3 颗石子**，这样我才能一把拿完
	- 显然，如果对手拿的时候**只剩 4 颗石子**，那么无论他怎么拿，总会剩下 1~3 颗石子，我就能赢。
		- 如何逼迫对手面对 4 颗石子呢？
			- 让我选择的时候还有 5~7 颗石子，这样的话我就有把握让对方不得不面对 4 颗石子。
				- 如何营造 5~7 颗石子的局面呢？让对手面对 8 颗石子，无论他怎么拿，都会给我剩下 5~7 颗，我就能赢。
					- 这样一直循环下去，我们发现**只要踩到 4 的倍数，就落入了圈套**，永远逃不出 4 的倍数，而且一定会输

### 代码

```javascript
var canWinNim = function(n) {
    // 如果上来就踩到 4 的倍数，那就认输吧
    // 否则，可以把对方控制在 4 的倍数，必胜
    return n % 4 !== 0;
}
```

## 第 877 题「[石子游戏](https://leetcode.cn/problems/stone-game)」

### 题目

你和你的朋友面前有**一排石头堆**
- 用一个数组 `piles` 表示，`piles[i]` 表示第 `i` 堆石子有多少个
- 你们轮流拿石头，一次拿一堆，但是只能拿走最左边或者最右边的石头堆。
- 所有石头被拿完后，谁拥有的石头多，谁获胜。
- 一是石头总共有**偶数堆**，石子的 **总数** 是 **奇数** ，所以没有平局

**假设你们都很聪明**，由**你第一个开始拿**，请你写一个算法，输入一个数组 `piles`，返回你是否能赢（true 或 false）。

举个例子，`piles=[2, 1, 9, 5]`
- 你先拿，可以拿 2 或者 5，你选择 2。
- `piles=[1, 9, 5]`，轮到对手，可以拿 1 或 5，他选择 5。
- `piles=[1, 9]` 轮到你拿，你拿 9。
- 最后，你的对手只能拿 1 了。
- 这样下来，你总共拥有 `2 + 9 = 11` 颗石头，对手有 `5 + 1 = 6` 颗石头，你是可以赢的，所以算法应该返回 true。

>  结论：**只要你足够聪明，你是必胜无疑的，因为你是先手。**

```javascript
var stoneGame = function(piles) {
    return true;
}
```

## 第 319 题「[灯泡开关](https://leetcode.cn/problems/bulb-switcher)」

有 `n` 盏电灯，最开始时都是关着的。现在要进行 `n` 轮操作：
- 第 1 轮操作是把**每一盏**电灯的开关按一下（全部打开）。
- 第 2 轮操作是把**每两盏**灯的开关按一下（就是按第 2，4，6... 盏灯的开关，它们被关闭）。
- 第 3 轮操作是把**每三盏**灯的开关按一下（就是按第 3，6，9... 盏灯的开关，有的被关闭，比如 3，有的被打开，比如 6）
- ...
- 如此往复，直到第 `n` 轮，即只按一下第 `n` 盏灯的开关。

现在给你输入一个正整数 `n` 代表电灯的个数，问你经过 `n` 轮操作后，这些电灯有多少盏是亮的？

### 思考

首先，因为电灯一开始都是关闭的，所以某一盏灯最后如果是点亮的，必然要**被按奇数次**开关。
- 我们假设只有 6 盏灯，而且我们**只看第 6 盏灯**。
	- 需要进行 **6 轮操作**对吧，请问对于第 6 盏灯，会被按下几次开关呢？
		- 这不难得出，第 1 轮会被按，第 2 轮，第 3 轮，第 6 轮都会被按。
			- 为什么第 1、2、3、6 轮会被按呢？因为 `6=1*6=2*3`。
				- 一般情况下，因子都是成对出现的，也就是说开关被按的次数一般是偶数次。
				- 但是有特殊情况，比如说总共有 16 盏灯，那么第 16 盏灯会被按几次?
					- `16 = 1*16 = 2*8 = 4*4`其中因子 4 重复出现，所以第 16 盏灯会被按 5 次，奇数次。
						- 就假设现在总共有 16 盏灯，我们求 16 的平方根，等于 4，这就说明最后会有 4 盏灯亮着，它们分别是第 `1*1=1` 盏、第 `2*2=4` 盏、第 `3*3=9` 盏和第 `4*4=16` 盏。

### 代码

```javascript
var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};
```