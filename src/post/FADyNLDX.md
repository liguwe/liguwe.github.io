
# 101 → 一百零一

`#编程题`

阿拉伯计数转成中文：

思路：直接数组对应先匹配出来，再处理特殊情况

```javascript hl:1,14
const numberMap = {
  0: "零",
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "七",
  8: "八",
  9: "九",
};

const unitMap = {
  0: "", // 个位
  1: "十", // 十位
  2: "百", // 百位
  3: "千", // 千位
  4: "万", // 万位
  5: "十", // 十万位
  6: "百", // 百万位
  7: "千", // 千万位
  8: "亿", // 亿位
};

function numberToChinese(num) {
  // 转换为字符串
  const numStr = num.toString();
  // 结果数组
  const result = [];
  // 数字长度
  const length = numStr.length;

  // 处理零的特殊情况
  if (num === 0) return numberMap[0];

  for (let i = 0; i < length; i++) {
    const digit = parseInt(numStr[i]);
    const position = length - 1 - i; // 位置（从右往左）
    // 跳过零的处理
    if (digit === 0) {
      // 当前数字是0，且不是最后一位，且后面的数字不是0
      if (i < length - 1 && numStr[i + 1] !== "0") {
        result.push(numberMap[digit]);
      }
      continue;
    }
    // 处理十位数的特殊情况（如：一十 => 十）
    if (position === 1 && digit === 1 && i === 0) {
      result.push(unitMap[position]);
    } else {
      result.push(numberMap[digit]);
      result.push(unitMap[position]);
    }
  }
  return result.join("");
}

// 测试
console.log(numberToChinese(0)); // 零
console.log(numberToChinese(10)); // 十
console.log(numberToChinese(11)); // 十一
console.log(numberToChinese(111)); // 一百一十一
console.log(numberToChinese(1001)); // 一千零一
console.log(numberToChinese(10001)); // 一万零一
console.log(numberToChinese(10101)); // 一万零一百零一
console.log(numberToChinese(100000)); // 十万
console.log(numberToChinese(1000001)); // 一百万零一
```
