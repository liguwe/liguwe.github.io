var constructFromPrePost = function (preorder, postorder) {
    let n = preorder.length;
    let mapping = {};
    postorder.forEach((item, index) => {
        mapping[item] = index;
    });

    function build(preStart, preEnd, postStart, postEnd) {
        // 基础情况
        if (preStart > preEnd) return null;
        // 处理只有一个节点的情况
        if (preStart === preEnd) {
            return new TreeNode(preorder[preStart]);
        }

        // 构造根节点
        let rootVal = preorder[preStart];
        // 左子树的根节点值
        let leftRootVal = preorder[preStart + 1];
        // 在后序中找到左子树根节点的位置
        let leftRootIndex = mapping[leftRootVal];
        // 计算左子树的大小
        let leftSize = leftRootIndex - postStart + 1;

        // 构造根节点
        let root = new TreeNode(rootVal);
        // 递归构造左子树
        root.left = build(
            preStart + 1, // 左子树在前序中的起始位置
            preStart + leftSize, // 左子树在前序中的结束位置
            postStart, // 左子树在后序中的起始位置
            leftRootIndex, // 左子树在后序中的结束位置
        );

        // 递归构造右子树
        root.right = build(
            preStart + leftSize + 1, // 右子树在前序中的起始位置
            preEnd, // 右子树在前序中的结束位置
            leftRootIndex + 1, // 右子树在后序中的起始位置
            postEnd - 1, // 右子树在后序中的结束位置
        );

        return root;
    }

    // 初始调用
    return build(0, n - 1, 0, n - 1);
};
