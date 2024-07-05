var nodesBetweenCriticalPoints = function(head) {
    let pre = head;
    let cur = head.next;
    let ans = [-1, -1];
    let prePosition = -1;
    let curPosition = -1;
    let firstPosition = -1;
    let position = 0;
    
    while (cur.next !== null) {
        if ((cur.val < pre.val && cur.val < cur.next.val) || (cur.val > pre.val && cur.val > cur.next.val)) {
            // local
            prePosition = curPosition;
            curPosition = position;
            
            if (firstPosition === -1) {
                firstPosition = position;
            }
            if (prePosition !== -1) {
                if (ans[0] === -1) {
                    ans[0] = curPosition - prePosition;
                } else {
                    ans[0] = Math.min(ans[0], curPosition - prePosition);
                }
                ans[1] = position - firstPosition;
            }
        }
        
        position++;
        pre = cur;
        cur = cur.next;
    }
    return ans;    
};