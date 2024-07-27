/**
 * @param {number[]} items
 * @return {number[]}
 */
var itemCollision = function (items) {
  const stack = [];

  // 遍历数组
  for (let item of items) {
    let destroyed = false;

    // 如果栈不为空，且当前元素为负数，且栈顶元素为正数
    while (stack.length > 0 && item < 0 && stack[stack.length - 1] > 0) {
      let top = stack[stack.length - 1];
      if (top < -item) {
        stack.pop();
        continue;
      } else if (top === -item) {
        stack.pop();
        destroyed = true;
        break;
      } else {
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
