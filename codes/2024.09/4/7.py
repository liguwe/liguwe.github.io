from collections import deque

# 二叉树的节点
class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left:TreeNode | None = None
        self.right:TreeNode | None = None

# 多叉树的节点
class Node:
    def __init__(self, val):
        self.val = val
        # 孩子节点
        self.children = []


# 多叉树的前序和后续遍历

# 前序遍历
def preorder(root:Node):
    if root is None:
        return
    print(root.val)
    for child in root.children:
        preorder(child)

# 后序遍历
def postorder(root:Node):
    if root is None:
        return
    ###### 前序位置  #####
    for child in root.children:
        postorder(child)
    ##### 后序位置  #####
    print(root.val)
