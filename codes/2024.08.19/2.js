var RandomizedSet = function () {
  // 存储所有的元素,使用数组来模拟集合
  this.nums = [];
  // key 是 val，value 是 val 在 nums 数组中的索引
  this.valToIndex = {};

  this.random = function () {
    return Math.floor(Math.random() * this.nums.length);
  };
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  // 如果 val 已经存在，则返回 false
  if (this.valToIndex.hasOwnProperty(val)) {
    return false;
  }
  // 否则，将 val 放入 nums 数组中
  this.nums.push(val);
  // 并且更新 valToIndex 对象
  this.valToIndex[val] = this.nums.length - 1;
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  // 如果 val 不存在，则返回 false
  if (!this.valToIndex.hasOwnProperty(val)) {
    return false;
  }
  // 否则，将 val 从 nums 数组中删除
  // ① 获取 val 在 nums 数组中的索引
  let index = this.valToIndex[val];
  // ② 将 nums 数组中最后一个元素放到 index 位置
  this.nums[index] = this.nums[this.nums.length - 1];
  // ③ 更新 valToIndex 对象
  this.valToIndex[this.nums[index]] = index;
  // ④ 删除 nums 数组中的最后一个元素
  this.nums.pop();
  // ⑤ 再删除 valToIndex 对象中的 val
  delete this.valToIndex[val];
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  return this.nums[this.random()];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
