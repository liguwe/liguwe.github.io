
# 两数相加：逆序存储，且只能存一位数字


> [2. 两数相加](https://leetcode.cn/problems/add-two-numbers/)


```javascript
var addTwoNumbers = function (l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let d = new ListNode(-1);
    let p = d;
    let carry = 0; // 进位
    // 两条链表走完且没有进位时才能结束循环
    while (p1 !== null || p2 !== null || carry > 0) {
        let val = carry; // 先加上上次的进位
        if (p1 !== null) {
            val += p1.val;
            p1 = p1.next;
        }
        if (p2 !== null) {
            val += p2.val;
            p2 = p2.next;
        }
        // 处理进位情况
        carry = Math.floor(val / 10);
        val = val % 10;
        // 构建新节点
        p.next = new ListNode(val);
        p = p.next;
    }
    return d.next;
};
```