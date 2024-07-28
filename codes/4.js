var RecentCounter = function () {
  // 使用队列来存储ping的时间
  this.q = [];
};

/**
 * @description:在时间t 时 ping了一下
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  // 把当前的 t 入队
  this.q.push(t);
  // 如果队头小于 t - 3000，就删除队头，即只保留 3000 毫秒内的请求
  while (this.q[0] < t - 3000) {
    // t 是递增的，所以可以从队头删除 3000 毫秒之前的请求
    this.q.shift();
  }

  // 返回队列的长度
  return this.q.length;
};
