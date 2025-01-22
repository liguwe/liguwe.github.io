/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
    return build(preorder, 0, preorder.length - 1);

    function build(preorder, start, end) {
        if (start > end) return null;
        let rootVal = preorder[start];
        let root = new TreeNode(rootVal);

        // 根据 BST 的特点，左子树都比根节点的值小，右子树都比根节点的值大
        // p 就是左右子树的分界点
        let p = start + 1;
        while (p <= end && preorder[p] < rootVal) {
            p++;
        }

        // [start+1, p-1] 区间内是左子树元素
        root.left = build(preorder, start + 1, p - 1);
        // [p, end] 区间内是右子树元素
        root.right = build(preorder, p, end);

        return root;
    }
};
