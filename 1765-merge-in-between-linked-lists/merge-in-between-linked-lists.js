var mergeInBetween = function(list1, a, b, list2) {
    let ptr = list1;
    for (let i = 0; i < a - 1; ++i)
        ptr = ptr.next;
    
    let qtr = ptr.next;
    for (let i = 0; i < b - a + 1; ++i)
        qtr = qtr.next;
    
    ptr.next = list2;
    while (list2.next)
        list2 = list2.next;
    list2.next = qtr;
    
    return list1;
};