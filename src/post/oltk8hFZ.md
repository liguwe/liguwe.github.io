
# LCR.子结构判断：A 是否包含 B


> [LCR 143. 子结构判断](https://leetcode.cn/problems/shu-de-zi-jie-gou-lcof/)


遍历树 `A` 的所有节点，对 `A` 的所有节点做什么事呢？
- 就是以 `A` 上的每个节点作为根节点，试图匹配树 `B`，也就是 `compareTree` 函数。


```javascript
function isSubStructure(A, B) {
    // 如果 A 为空或 B 为空，返回 false
    if (!A || !B) return false;
    return (
        isSame(A, B) || // 判断以 A 为根的树是否包含 B
        isSubStructure(A.left, B) || // 判断 A 的左子树是否包含 B
        isSubStructure(A.right, B) // 判断 A 的右子树是否包含 B
    ); 
}
/**
 * 判断以 A 为根的树是否包含以 B 为根的树
 */
function isSame(A, B) {
    // 如果 B 为空，说明 B 已经遍历完了，返回 true
    if (!B) return true;
    // 如果 A 为空，而 B 不为空，返回 false
    if (!A) return false;
    // 如果当前节点的值不相等，返回 false
    if (A.val !== B.val) return false;
    // 递归判断左右子树是否相同
    return isSame(A.left, B.left) && isSame(A.right, B.right);
}
```