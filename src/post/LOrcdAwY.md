
# 煎饼排序


| LeetCode                                                               | 力扣                                                         | 难度  |
| ---------------------------------------------------------------------- | ---------------------------------------------------------- | --- |
| [969. Pancake Sorting](https://leetcode.com/problems/pancake-sorting/) | [969. 煎饼排序](https://leetcode.cn/problems/pancake-sorting/) | 🟠  |

![图片&文件](./files/20241119-3.png)


## 目录
<!-- toc -->
 ## 思路：递归遍历 

假设有数组 `[3, 2, 4, 1]`，我们要将其排序为 `[1, 2, 3, 4]`：

1. 第一轮（i = 4）：
    - 找到最大值4，位置在索引2
    - 翻转前3个元素：`[4, 2, 3, 1]`
    - 翻转前4个元素：`[1, 3, 2, 4]`
    - 4已经到达正确位置
2. 第二轮（i = 3）：
    - 找到最大值3，位置在索引1
    - 翻转前2个元素：`[3, 1, 2, 4]`
    - 翻转前3个元素：`[2, 1, 3, 4]`
    - 3 已经到达正确位置
3. 第三轮（i = 2）：
    - 找到最大值2，位置在索引0
    - 翻转前2个元素：`[1, 2, 3, 4]`
    - 2已经到达正确位置
最终数组已经排序完成：`[1, 2, 3, 4]`


## 代码

```javascript hl:26,20,23
var pancakeSort = function (cakes) {
  // 记录反转操作序列
  const res = [];
  /**
   * @param 需要排序的cakes 烧饼列表
   * @param n 反转第几个？
   */
  const sort = function (cakes, n) {
    // base case
    if (n == 1) return;
    // 寻找最大饼的索引
    let maxCake = 0;
    let maxCakeIndex = 0;
    for (let i = 0; i < n; i++) {
      if (cakes[i] > maxCake) {
        maxCakeIndex = i;
        maxCake = cakes[i];
      }
    }
    // 第一次翻转，将最大饼翻到最上面
    reverse(cakes, 0, maxCakeIndex);
    res.push(maxCakeIndex + 1);
    // 第二次翻转，将最大饼翻到最下面
    reverse(cakes, 0, n - 1);
    res.push(n);
    // 递归调用
    sort(cakes, n - 1);
  };

  const reverse = function (arr, i, j) {
    while (i < j) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  };

  sort(cakes, cakes.length);
  return res;
};

```