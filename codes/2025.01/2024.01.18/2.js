var rightSideView = function (root) {
    let res = [];

    function traverse(root, depth) {
        if (!root) return;
        // 说明这一层还没有记录值
        if (res.length === depth) {
            res.push(root.val);
        }
        traverse(root.right, depth + 1);
        traverse(root.left, depth + 1);
    }

    traverse(root, 0);

    return res;
};
