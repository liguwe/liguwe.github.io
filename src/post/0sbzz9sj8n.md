
# LFU 缓存


- LRU 算法的淘汰策略是 Least Recently Used，也就是每次淘汰那些最久没被使用的数据；
- 而 LFU 算法的淘汰策略是 Least Frequently Used，也就是**每次淘汰那些使用次数最少**的数据。


|LeetCode|力扣|难度|
|---|---|---|
|[460. LFU Cache](https://leetcode.com/problems/lfu-cache/)|[460. LFU 缓存](https://leetcode.cn/problems/lfu-cache/)|🔴|


直接上代码了

```javascript
class LFUCache {
    // key 到 val 的映射，我们后文称为 KV 表
    constructor(capacity) {
        this.keyToVal = new Map();
        // key 到 freq 的映射，我们后文称为 KF 表
        this.keyToFreq = new Map();
        // freq 到 key 列表的映射，我们后文称为 FK 表
        this.freqToKeys = new Map();
        // 记录最小的频次
        this.minFreq = 0;
        // 记录 LFU 缓存的最大容量
        this.cap = capacity;
    }

    get(key) {
        if (!this.keyToVal.has(key)) {
            return -1;
        }
        // 增加 key 对应的 freq
        this.increaseFreq(key);
        return this.keyToVal.get(key);
    }

    put(key, val) {
        if (this.cap <= 0) return;

        // 若 key 已存在，修改对应的 val 即可
        if (this.keyToVal.has(key)) {
            this.keyToVal.set(key, val);
            // key 对应的 freq 加一
            this.increaseFreq(key);
            return;
        }

        // key 不存在，需要插入
        // 容量已满的话需要淘汰一个 freq 最小的 key
        if (this.cap <= this.keyToVal.size) {
            this.removeMinFreqKey();
        }

        // 插入 key 和 val，对应的 freq 为 1
        // 插入 KV 表
        this.keyToVal.set(key, val);
        // 插入 KF 表
        this.keyToFreq.set(key, 1);
        // 插入 FK 表
        if (!this.freqToKeys.has(1)) {
            this.freqToKeys.set(1, new Set());
        }
        this.freqToKeys.get(1).add(key);
        // 插入新 key 后最小的 freq 肯定是 1
        this.minFreq = 1;
    }

    removeMinFreqKey() {
        // freq 最小的 key 列表
        const keyList = this.freqToKeys.get(this.minFreq);
        // 其中最先被插入的那个 key 就是该被淘汰的 key
        const deletedKey = keyList.values().next().value;
        // 更新 FK 表
        keyList.delete(deletedKey);
        if (keyList.size === 0) {
            this.freqToKeys.delete(this.minFreq);
            // 问：这里需要更新 minFreq 的值吗？
        }
        // 更新 KV 表
        this.keyToVal.delete(deletedKey);
        // 更新 KF 表
        this.keyToFreq.delete(deletedKey);
    }

    increaseFreq(key) {
        const freq = this.keyToFreq.get(key);
        // 更新 KF 表
        this.keyToFreq.set(key, freq + 1);
        // 更新 FK 表
        // 将 key 从 freq 对应的列表中删除
        this.freqToKeys.get(freq).delete(key);
        // 将 key 加入 freq + 1 对应的列表中
        if (!this.freqToKeys.has(freq + 1)) {
            this.freqToKeys.set(freq + 1, new Set());
        }
        this.freqToKeys.get(freq + 1).add(key);
        // 如果 freq 对应的列表空了，移除这个 freq
        if (this.freqToKeys.get(freq).size === 0) {
            this.freqToKeys.delete(freq);
            // 如果这个 freq 恰好是 minFreq，更新 minFreq
            if (freq === this.minFreq) {
                this.minFreq++;
            }
        }
    }
}
```
