var rightSideView = function (root) {
  let res = [];
  let depth = 0;
  function traverse(root) {
    if (!root) {
      return;
    }
    depth++;
    if (depth > res.length) {
      res.push(root.val);
    }
    traverse(root.right);
    traverse(root.left);
    depth--;
  }
  traverse(root);
  return res;
};
