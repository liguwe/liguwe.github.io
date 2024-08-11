/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {

    // 获取叶子节点的序列
    const getSeq = (root) => {
        const res = [];
        // 前序遍历
        const traverse = (node) => {
            if (!node) {
                return;
            }
            if (!node.left && !node.right) {
                res.push(node.val);
            }
            traverse(node.left);
            traverse(node.right);
        }
        traverse(root);
        return res;
    }

    const seq1 = getSeq(root1);
    const seq2 = getSeq(root2);

    // 比较两个序列是否相同
    // 如果长度不同，直接返回 false
    if (seq1.length !== seq2.length) {
        return false;
    }
    // 逐个比较, 如果有不同的元素，直接返回 false
    for (let i = 0; i < seq1.length; i++) {
        if (seq1[i] !== seq2[i]) {
            return false;
        }
    }

    // 最后，两个序列完全相同，返回 true
    return true;

};
