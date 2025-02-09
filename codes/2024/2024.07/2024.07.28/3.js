/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  // ① 使用两个栈，分别存储倍数和字符串
  let countStack = [];
  let strStack = [];
  // 代表当前的字符串
  let currentStr = "";
  //代表出现的次数
  let k = 0;

  // 遍历字符串
  for (let i = 0; i < s.length; i++) {
    // ①
    // 如果是数字，可能是多位数，比如 "12[abc]"，所有处理两次遍历到的数字，计算出真正的数字
    // 例如：第一次遍历到的是1，第二次遍历到的是2，那么真正的数字就是 1 * 10 + 2 = 12
    if (!isNaN(s[i])) {
      k = k * 10 + parseInt(s[i]);
    }
    // ② 如果是左括号
    else if (s[i] === "[") {
      // 将出现的次数入栈
      countStack.push(k);
      // 字符串入栈
      strStack.push(currentStr);
      // 重置出现次数和字符串
      k = 0;
      currentStr = "";
    }
    // ③ 如果是右括号
    else if (s[i] === "]") {
      // 出栈
      let count = countStack.pop();
      // 出栈
      let str = strStack.pop();
      // 拼接字符串
      currentStr = str + currentStr.repeat(count);
    }
    // ④ 如果是字母，即普通字符，更新当前字符串，用于后面拼接逻辑
    else {
      // 拼接字符串, 例如 "abc"，"abc" 就是一个字符串
      // 例如 "12[abc]"，"abc" 就是一个字符串
      currentStr += s[i];
    }
  }

  return currentStr;
};
