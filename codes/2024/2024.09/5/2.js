// 优先级队列实现：直接使用 sort 方法

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // 入优
  enqueue(element) {
    this.queue.push(element);
    // 最简单的实现方式，每次插入元素后，都对队列进行排序
    this.queue.sort((a, b) => {
      return a.priority - b.priority;
    });
  }

  // 出队
  dequeue() {
    return this.queue.shift();
  }

  // 返回队首元素
  front() {
    return this.queue[0];
  }

  // 是否为空
  isEmpty() {
    return this.queue.length === 0;
  }

  // 队列大小
  size() {
    return this.queue.length;
  }
}
