var deleteNode = function (root, key) {
  // base case
  if (!root) {
    return null;
  }
  if (root.val === key) {
    // 情况 1：没有子节点, 直接删除
    //  删除的方式是：直接返回 null
    if (!root.left && !root.right) {
      return null;
    }

    // 情况 2：只有一个子节点
    // 删除的方式是：返回非空的子节点
    // 如果右子节点存在，返回右子节点
    // 删除的方式是：返回右子节点
    if (!root.left && root.right) {
      return root.right;
    }
    // 如果左子节点存在，返回左子节点
    // 删除的方式是：返回左子节点
    if (!root.right && root.left) {
      return root.left;
    }

    // 情况 3：有两个子节点
    // 删除的方式是：① 找到右子树中的最小节点，替换当前节点 或者 ② 找到左子树中的最大节点，替换当前节点
    // 我们这里选择 ①
    // 找到右子树中的最小节点, 替换当前节点, 然后删除右子树中的最小节点
    let minNode = getMin(root.right);
    root.val = minNode.val;
    root.right = deleteNode(root.right, minNode.val);
  } else if (root.val > key) {
    // 去左子树找
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    // 去右子树找
    root.right = deleteNode(root.right, key);
  }
  return root;
};

// 获得 BST 中最小的节点。
var getMin = function (node) {
  // BST 最左边的就是最小的
  while (node.left != null) {
    node = node.left;
  }
  return node;
};
