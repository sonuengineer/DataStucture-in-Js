var mergeNodes = function(head) {
    let dummy = new ListNode();
    let cur = dummy;
    head = head.next;
    let sum = 0;
    while (head !== null) {
        if (head.val === 0) {
            cur.next = new ListNode(sum);
            cur = cur.next;
            sum = 0;
        }
        sum += head.val;
        head = head.next;
    }
    return dummy.next;    
};