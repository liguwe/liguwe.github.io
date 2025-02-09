############################################
# 双链表的插入:插
# ############################################

# 需要插入的节点
n4 = Node(None, 4, None)
# 需要插入的位置
pos = 2
# 头结点
p = n0

# 查找到需要插入的位置
while pos > 0 and p.next is not None:
    pos -= 1
    p = p.next

# 将 n5 的 prev 指向 p
n4.prev = p
# 将 n5 的 next 指向 p 的 next
n4.next = p.next


############################################
# 双链表的删除
# ############################################

# 需要删除的节点
del_node = n2
# 将 n2 的前一个节点的 next 指向 n2 的下一个节点
del_node.prev.next = del_node.next
# 将 n2 的下一个节点的 prev 指向 n2 的前一个节点
del_node.next.prev = del_node.prev
