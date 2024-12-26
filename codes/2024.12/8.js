function fn(root) {
  let maxLen;
  function traverse(root, len, parentVal) {
    if (!root) {
      return;
    }

    if (parentVal + 1 === root.val) {
      len++;
    } else {
      len = 1;
    }

    maxLen = Math.max(len, maxLen);

    traverse(root.left, len, node.val);
    traverse(root.right, len, node.val);
  }

  traverse(root, 1, Number.MIN_SAFE_INTEGER);

  return maxLen;
}
