var sumNumbers = function (root) {
  let res = [];
  let sum = 0;

  function traverse(root, paths) {
    if (!root) {
      return;
    }

    // 叶子结点
    if (!root.left && !root.right) {
      paths.push(root.val);
      res.push([...paths]);
      paths.pop();
    }

    paths.push(root.val);
    traverse(root.left, paths);
    traverse(root.right, paths);
    paths.pop();
  }

  traverse(root, []);

  res.forEach((it) => {
    let item = parseInt(it.join(""));
    sum += item;
  });

  return sum;
};
