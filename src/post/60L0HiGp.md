
# 二叉树最大宽度


> [662. 二叉树最大宽度](https://leetcode.cn/problems/maximum-width-of-binary-tree/)


- 同样的使用 [102. 二叉树的层序遍历](/post/ZwC7vxrt.html)
- 存储队列的每个元素存储结构如下
	- `[每个节点, 节点的位置索引]`
- 然后更新左右子节点的位置，分别为
	- 左子节点的位置是`父节点位置 * 2`
	- 右子节点的位置是`父节点位置 * 2 + 1`

代码如下：


```javascript hl:3,4,10,11,18,22
var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  // 使用数组存储每个节点及其位置索引
  let queue = [root, 0n](/post/60L0HiGp.html#root,-0n); // 使用 BigInt 避免大数溢出
  let maxWidth = 1;

  while (queue.length) {
    const size = queue.length;
    // 记录当前层的最左和最右节点的位置
    const leftPos = queue[0][1];
    const rightPos = queue[size - 1][1];
    // 更新最大宽度
    maxWidth = Math.max(maxWidth, Number(rightPos - leftPos + 1n));

    // 处理下一层
    for (let i = 0; i < size; i++) {
      const [node, pos] = queue.shift();
      // 左子节点的位置是父节点位置 * 2
      if (node.left) {
        queue.push([node.left, pos * 2n]);
      }
      // 右子节点的位置是父节点位置 * 2 + 1
      if (node.right) {
        queue.push([node.right, pos * 2n + 1n]);
      }
    }
  }
  return maxWidth;
};
```
