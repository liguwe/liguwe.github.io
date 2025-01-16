
# N 叉树的最大深度


> [559. N 叉树的最大深度](https://leetcode.cn/problems/maximum-depth-of-n-ary-tree/)


## 目录
<!-- toc -->
 ## 遍历一遍的思路 


- 两个变量： `depth` 和 `res`
- `depth` 在 ==for-of 循环外面== `++` 或 `--`


```javascript
var maxDepth = function (root) {
  let depth = 0;
  let res = 0;
  function traverse(root) {
    if (!root) return;
    depth++;
    res = Math.max(res, depth);
    for (let node of root.children) {
      traverse(node);
    }
    depth--;
  }
  traverse(root);
  return res;
};
```



## 层序遍历

- 注意：
	- base case 别忘了
	- `if (cur && cur.children) {` 条件判断需要加上

```javascript
var maxDepth = function (root) {
  if (!root) return 0;
  let depth = 0;
  let q = [root];
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let cur = q.shift();
      if (cur && cur.children) {
        for (let node of cur.children) {
          q.push(node);
        }
      }
    }
    depth++; // 到这里，说明需要遍历下一层了
  }
  return depth;
};
```

