/**
 * @param {number[]} items
 * @return {number[]}
 */
var itemCollision = function (items) {
  const stack = [];
  // 遍历数组
  for (let item of items) {
    // ① 定义一个变量`destroyed` ，标识当前元素是否被摧毁
    let destroyed = false;

    // 如果栈不为空，且当前元素为负数，且栈顶元素为正数
    while (stack.length > 0 && item < 0 && stack[stack.length - 1] > 0) {
      let top = stack[stack.length - 1];
      // 如果栈顶元素的绝对值小于当前元素的绝对值，则栈顶元素被销毁
      if (top < -item) {
        stack.pop();
        continue;
      }
      // 如果栈顶元素的绝对值大于当前元素的绝对值，则当前元素被销毁
      else if (top > -item) {
        destroyed = true;
        break;
      }
      // 如果栈顶元素的绝对值等于当前元素的绝对值，则栈顶元素和当前元素都被销毁
      else if (top === -item) {
        stack.pop();
        destroyed = true;
        break;
      }
    }
    // 如果当前元素没有被销毁，则入栈
    if (!destroyed) {
      stack.push(item);
    }
  }
  return stack;
};
