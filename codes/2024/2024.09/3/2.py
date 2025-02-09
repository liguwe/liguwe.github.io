# 单链表节点
class ListNode:
    def __init__(self,val:int) -> None:
        # 节点值
        self.val = val
        # 下一个节点
        self.next:ListNode|None = None

n0 = ListNode(0)
n1 = ListNode(1)
n2 = ListNode(2)
n3 = ListNode(3)
n4 = ListNode(4)

n0.next = n1
n1.next = n2
n2.next = n3
n3.next = n4
# 最后一个节点的 next 指向 None
n4.next = None


############################################
# 单链表的遍历：查或改
############################################
p = n0
val = 2
while p is not None:
    print(p.val)
    if p.val == val:
        ## 修改为 20
        p.val = 20
    p = p.next

############################################
# 单链表的插入
############################################

####### 头部插入
p = n0
n5 = ListNode(5)
n5.next = p
# 变成了 n5 -> n0 -> n1 -> n2 -> n3 -> n4
# 即 5 -> 0 -> 1 -> 2 -> 3 -> 4

###### 尾部插入
p = n0
n5 = ListNode(5)
while p.next is not None:
    p = p.next
p.next = n5
# 变成了 n0 -> n1 -> n2 -> n3 -> n4 -> n5
# 即 0 -> 1 -> 2 -> 3 -> 4 -> 5

###### 中间插入

# 需要插入的节点
n5 = ListNode(5)
# 需要插入的位置
pos = 2
# 头结点
p = n0
while pos > 0 and p.next is not None:
    p = p.next
    pos -= 1

# 将 n5 的 next 指向 p 的 next
n5.next = p.next
# 将 n5 插入到 p 的后面
p.next = n5

############################################
# 单链表的删除:删
############################################

# 需要删除的节点的值
val = 2
# 头结点
p = n0


# 删的第一步是查
# 查找到需要删除的节点的前一个节点
while p.next is not None:
    # 如果下一个节点的值等于 val，将下一个节点删除
    if p.next.val == val:
        p.next = p.next.next
    else:
        p = p.next

























# 双链表节点
class Node:
    def __init__(self, prev, val:int, next) -> None:
        # 节点值
        self.val = val
        # 前一个节点
        self.prev = prev
        # 后一个节点
        self.next = next
