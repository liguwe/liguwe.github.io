# 二叉树的节点定义
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left:TreeNode | None = None
        self.right:TreeNode | None = None


# 初始化二叉树
# 初始化节点
n1 = TreeNode(val=1)
n2 = TreeNode(val=2)
n3 = TreeNode(val=3)
n4 = TreeNode(val=4)
n5 = TreeNode(val=5)
n6 = TreeNode(val=6)
n7 = TreeNode(val=7)
n8 = TreeNode(val=8)
n9 = TreeNode(val=9)
n10 = TreeNode(val=10)
n11 = TreeNode(val=11)
n12 = TreeNode(val=12)

# 构建二叉树
n1.left = n2
n1.right = n3
n3.left = n4
n3.right = n5
# 等等
