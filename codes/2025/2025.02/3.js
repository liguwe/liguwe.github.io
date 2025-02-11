var partition = function (head, x) {
    let d1 = new ListNode(-1);
    let d2 = new ListNode(-1);
    let p1 = d1;
    let p2 = d2;
    let p = head;
    while (p) {
        if (p.val < x) {
            p1.next = p;
            p1 = p1.next;
        } else {
            p2.next = p;
            p2 = p2.next;
        }
        let temp = p.next;
        p.next = null;
        p = temp;
    }
    p1.next = d2.next;
    return d1.next;
};
