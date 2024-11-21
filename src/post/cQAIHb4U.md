
# LRU 算法


LRU 缓存淘汰算法就是一种常用策略。LRU 的全称是 Least Recently Used

| LeetCode                                                   | 力扣                                                     | 难度  |
| ---------------------------------------------------------- | ------------------------------------------------------ | --- |
| [146. LRU Cache](https://leetcode.com/problems/lru-cache/) | [146. LRU 缓存](https://leetcode.cn/problems/lru-cache/) | 🟠  |

```javascript hl:45,46
/**
 * LRU (最近最少使用) 缓存实现
 * @param {number} capacity 缓存容量
 */
var LRUCache = function (capacity) {
  // 缓存容量
  this.cap = capacity;
  // 使用 Map 来存储缓存数据,保持插入顺序
  this.cache = new Map();
};

/**
 * 获取缓存中的值
 * @param {number} key
 * @return {number} 存在返回值,不存在返回 -1
 */
LRUCache.prototype.get = function (key) {
  // 如果 key 不存在,返回 -1
  if (!this.cache.has(key)) {
    return -1;
  }
  // 将访问的 key 设为最近使用
  this.makeRecently(key);
  return this.cache.get(key);
};

/**
 * 向缓存中添加或更新值
 * @param {number} key
 * @param {number} val
 */
LRUCache.prototype.put = function (key, val) {
  // 如果 key 已存在
  if (this.cache.has(key)) {
    // 更新值
    this.cache.set(key, val);
    // 将 key 设为最近使用
    this.makeRecently(key);
    return;
  }

  // 如果缓存已满
  if (this.cache.size >= this.cap) {
    // 删除最久未使用的元素(Map 中的第一个元素)
    // const oldestKey = [...this.cache.keys()][0]; // 超出限制
    const oldestKey = this.cache.keys().next().value;
    this.cache.delete(oldestKey);
  }
  // 添加新元素到 Map 末尾
  this.cache.set(key, val);
};

/**
 * 将某个 key 标记为最近使用
 * @param {number} key
 */
LRUCache.prototype.makeRecently = function (key) {
  // 获取当前值
  const val = this.cache.get(key);
  // 删除当前 key
  this.cache.delete(key);
  // 重新插入到 Map 末尾,这样就变成最近使用的了
  this.cache.set(key, val);
};

```


## 目录
<!-- toc -->
 ## 为不用双链表？使用 Map 即可 


>  Map 是有序的集合，会按照插入顺序保持键值对的顺序

```javascript
const map = new Map();
map.set('c', 3);
map.set('a', 1);
map.set('b', 2);

console.log(map.values().next().value); // 3
console.log(map.keys().next().value); // a
console.log(map.entries().next().value[0]); // a
```



