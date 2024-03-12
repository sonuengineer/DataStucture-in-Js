class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

var removeZeroSumSublists = function(head) {
    // Initialize a dummy node to handle edge cases
    const dummy = new ListNode(0);
    dummy.next = head;
    
    // Initialize a hashmap to store prefix sums and their corresponding nodes
    const prefixSums = { 0: dummy };
    let prefixSum = 0;
    let current = head;

    while (current) {
        // Update the prefix sum
        prefixSum += current.val;
        
        // If the current prefix sum exists in the hashmap
        if (prefixSum in prefixSums) {
            let toDelete = prefixSums[prefixSum].next;
            let tempSum = prefixSum + toDelete.val;
            
            // Remove nodes with zero sum
            while (toDelete !== current) {
                delete prefixSums[tempSum];
                toDelete = toDelete.next;
                tempSum += toDelete.val;
            }
            
            // Adjust the pointers to remove the zero sum nodes
            prefixSums[prefixSum].next = current.next;
        } else {
            // Add the prefix sum and corresponding node to the hashmap
            prefixSums[prefixSum] = current;
        }
        
        // Move to the next node
        current = current.next;
    }

    return dummy.next;
};