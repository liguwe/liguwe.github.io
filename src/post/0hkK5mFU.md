
# 存在重复元素 II ：两个重复元素的距离小于等于 k


> [219. 存在重复元素 II](https://leetcode.cn/problems/contains-duplicate-ii/)



1、当窗口大小小于 `k` 时，扩大窗口。
2、当窗口大小大于 `k` 时，缩小窗口。
3、当窗口大小等于 `k` 且发现窗口中存在重复元素时，返回 true。