
# 二叉树的所有路径

`#leetcode` 

```javascript
var binaryTreePaths = function (root) {
  let res = [];

  function traverse(node, paths) {
    if (!node) {
      return;
    }

    if (!node.left && !node.right) {
      paths.push(node.val);
      res.push([...paths]);
      paths.pop();
      return;
    }

    paths.push(node.val);
    traverse(node.left, paths);
    traverse(node.right, paths);

    paths.pop();
  }

  traverse(root, []);

  return res.map((item) => {
    return item.join("->");
  });
};

```