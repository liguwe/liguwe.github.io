var nthUglyNumber = function (n) {
  // 可以理解为三个指向有序链表头结点的指针
  let p2 = 1,
    p3 = 1,
    p5 = 1;
  // 可以理解为三个有序链表的头节点的值
  let product2 = 1,
    product3 = 1,
    product5 = 1;
  // 可以理解为最终合并的有序链表（结果链表）
  let ugly = new Array(n + 1);
  // 可以理解为结果链表上的指针
  let p = 1;

  // 开始合并三个有序链表
  while (p <= n) {
    // 取三个链表的最小结点
    let min = Math.min(Math.min(product2, product3), product5);
    // 接到结果链表上
    ugly[p] = min;
    p++;
    // 前进对应有序链表上的指针
    if (min == product2) {
      product2 = 2 * ugly[p2];
      p2++;
    }
    if (min == product3) {
      product3 = 3 * ugly[p3];
      p3++;
    }
    if (min == product5) {
      product5 = 5 * ugly[p5];
      p5++;
    }
  }
  // 返回第 n 个丑数
  return ugly[n];
};
