
# 二叉树的最小深度


>  [111. 二叉树的最小深度](https://leetcode.cn/problems/minimum-depth-of-binary-tree/)


## 目录
<!-- toc -->
 ## 层序遍历的思路 

![image.png|568](https://832-1310531898.cos.ap-beijing.myqcloud.com/e80c234bde21ae68b50486fcd25f1061.png)



- **到达叶子结点**，直接返回 depth
- 一般来讲，`层次遍历`特别适合来求`最小值` ，并且层次遍历复杂度低于 DFS
	- 因为不一定需要遍历完成，中途找到了就返回了

```javascript
var minDepth = function (root) {
  if (!root) return 0;
  let q = [root];
  let depth = 1;
  while (q.length) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let cur = q.shift();
      // 到达叶子结点，直接返回 depth
      if (cur.left === null && cur.right === null) {
        return depth;
      }
      if (cur.left) q.push(cur.left);
      if (cur.right) q.push(cur.right);
    }
    depth++;
  }
  return depth;
};
```

## 遍历一遍的思路

- 如果到达叶子节点，更新 `res`
- 如果 `Infinity`不不好拼写，就使用 `Math.min()`
    - 注意是 `Math.min()`，反过来的
    - 当然，还有一种思路是，**看题设的最大值是多少，那就用多少


```javascript
var minDepth = function(root) {
  let res = Infinity;
  let depth = 0;
  if (root === null) return 0;
  function traverse(root) {
    if(root === null) return;
    depth++;
    // 如果到达叶子节点，更新res
    if(root.left === null && root.right === null) {
      res = Math.min(res, depth);
    }
    traverse(root.left);
    traverse(root.right);
    depth--;
  }
  traverse(root);
  return res === Infinity ? 1 : res;
};
```
