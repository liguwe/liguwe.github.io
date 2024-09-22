# TreeNode 类型的定义
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left:TreeNode | None = None
        self.right:TreeNode | None = None

# BST的删除
def deleteNode(root:TreeNode, key:int) -> TreeNode | None:

    # 如果根节点为空，直接返回
    if root is None:
        return None

    # 如果根节点的值等于 key
    if root.val == key:

        """第一种情况：叶子结点直接删除"""
        # 如果左右孩子都为空，直接删除
        if root.left is None and root.right is None:
            return None

        """第二种情况：左孩子或者右孩子为空"""
        # 如果左孩子为空，返回右孩子
        if root.left is None:
            return root.right
        # 如果右孩子为空，返回左孩子
        if root.right is None:
            return root.left

        """走到这里说明是第三种情况：左右孩子都不为空"""
        # 如果左右孩子都不为空
        # 找到右子树的最小值
        minNode = getMin(root.right)
        # 将 root 的值替换为 minNode 的值
        root.val = minNode.val
        # 删除 minNode
        root.right = deleteNode(root.right, minNode.val)

    # 如果根节点的值小于 key
    elif root.val < key:
        if root.right is None:
            return root
        # 递归删除右子树
        root.right = deleteNode(root.right, key)
    # 如果根节点的值大于 key
    else:
        if root.left is None:
            return root
        # 递归删除左子树
        root.left = deleteNode(root.left, key)

    # 返回根节点
    return root


# 找到最小值
def getMin(node:TreeNode) -> TreeNode:
    # 找到最左边的节点，因为最左边的节点是最小的
    while node.left is not None:
        node = node.left
    return node
