/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {
  // ① 定义两个队列，分别存储 R 和 D 的索引
  const radiant = [];
  const dire = [];

  // ② 遍历字符串，将 R 和 D 的索引分别入队
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      radiant.push(i);
    } else {
      dire.push(i);
    }
  }

  // ③ 模拟投票过程
  while (radiant.length > 0 && dire.length > 0) {
    // 分别取出 R 和 D 的索引
    let rIndex = radiant.shift();
    let dIndex = dire.shift();

    // 比较索引决定谁先投票，如果radiant先投票则dire被禁言，反之亦然
    if (rIndex < dIndex) {
      //  这个 R 其实可以继续参加，所以把他放到最后，才能循环参与投票。
      //  每个参议员在投票后并不是退出游戏，而是要回到队列末尾，等待下一轮投票机会
      //  `rIndex` 是当前参议员在原始字符串中的索引位置。
      //  `rIndex + senate.length` 是为了确保这个参议员在下一轮投票时,仍然保持正确的相对顺序。
      radiant.push(rIndex + senate.length); // 重新排队，以确保顺序循环进行
    } else {
      dire.push(dIndex + senate.length); // 重新排队，以确保顺序循环进行
    }
  }

  // ④ 返回结果: 如果 R 的队列长度大于 0，则返回 Radiant，否则返回 Dire
  return radiant.length > 0 ? "Radiant" : "Dire";
};
