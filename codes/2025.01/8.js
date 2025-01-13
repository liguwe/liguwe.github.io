let pq = new MinPriorityQueue({
  compare: (a, b) => {
    // 按照数对的元素和升序排序
    return a[0] + a[1] - (b[0] + b[1]);
  },
});
