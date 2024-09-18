function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

class MinHeap {
  constructor() {
    // 使用数组来存储
    this.heap = [];
  }

  // 获取左孩子的索引
  getLeftIndex(index) {
    return 2 * index + 1;
  }

  // 获取右孩子的索引
  getRightIndex(index) {
    return 2 * index + 2;
  }

  // 父节点的索引
  getParentIndex(index) {
    if (index === 0) {
      return 0;
    }
    return Math.floor((index - 1) / 2);
  }

  // 返回个数
  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.size() <= 0;
  }

  clear() {
    this.heap = [];
  }

  // ::::小顶堆，最小的肯定在最上面
  findMinimum() {
    return this.isEmpty() ? null : this.heap[0];
  }

  // 插入一个值，插入的元素添加到堆底的最后，然后让其上浮到正确位置（如果大顶的话）
  insert(value) {
    if (value != null) {
      const index = this.heap.length;
      // 先放在最后一位
      this.heap.push(value);
      // 向上移动，直到父节点小于插入的值
      this.shiftUp(index);
      return true;
    }
    return false;
  }

  /**
   * @description 下沉，堆化，递归
   * @param {number} index, 插入的元素的位置, 这个位置是指 数组的索引
   */
  shiftDown(index) {
    // 插入的元素的位置
    let pos = index;
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size();

    if (
      left < size && // 如果左子节点小于数组的长度，说明有左子节点
      this.heap[pos] > this.heap[left] // 如果该元素大于它的左子节点，则下沉，即 pos = left
    ) {
      pos = left;
    }

    if (
      right < size && // 如果右子节点小于数组的长度，说明有右子节点
      this.heap[pos] > this.heap[right] // 如果该元素大于它的右子节点，则下沉
    ) {
      pos = right;
    }

    // 如果 pos 最后 和传入的index不一样了，说明需要交换数据，然后继续下沉递归
    if (index !== pos) {
      swap(this.heap, index, pos);
      this.shiftDown(pos);
    }
  }

  /**
   * @description 上浮，堆化，递归:向上移动，直到父节点的值小于插入的值
   * @param {number} index, 插入的元素的位置, 这个位置是指 数组的索引
   */
  shiftUp(index) {
    let parentIndex = this.getParentIndex(index);
    while (
      index > 0 && // index必须大于0，因为根节点的父节点是自己
      this.heap[parentIndex] > this.heap[index] // 父节点的元素大于子元素的时候，才需要移动
    ) {
      swap(this.heap, parentIndex, index);

      // 交换后，继续向上移动
      index = parentIndex;
      parentIndex = this.getParentIndex(index);

      // 以下是错误的写法 需要注意，因为这是在 while 循环中，所以不需要递归,被递归影响了
      // 这是 while 循环，不是递归
      // 这是 while 循环，不是递归
      // // 交换后，继续向上移动，传入的index变成了父节点的索引
      // this.getParentIndex(parentIndex);
    }
  }

  // delete min 堆顶元素（最小值）和 堆底元素 对调
  // 1、删除删除堆顶元素
  // 2、让堆底元素替换到堆顶
  // 3、然后从堆顶开始下沉
  deleteMin() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    const removedValue = this.heap[0]; // 堆顶元素
    const lastElement = this.heap.pop(); // 移除堆底元素
    this.heap[0] = lastElement; // 将 堆顶元素 赋值为 堆底元素
    // 从堆顶开始下沉
    this.shiftDown(0);
    return removedValue;
  }

  getAsArray() {
    return this.heap;
  }
}

let arr = [5, 3, 7, 9, 0, 0, -1, -2, 7, -8];

let heapObj = new MinHeap();
arr.forEach((item) => {
  heapObj.insert(item);
});
console.log(heapObj);
console.log("************************");

console.log(heapObj.findMinimum());

// MinHeap { heap: [
//     -8, -2, 0, 3, -1,
//      7,  0, 9, 7,  5
//   ] }
// ************************
// -8

var SmallestInfiniteSet = function () {
  this.minHeap = new MinHeap();
  this.set = new Set();
  this.min = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {};
