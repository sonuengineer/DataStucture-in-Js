/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(n, k) {
     if (n === 1) {
        return 0;
    }

    // Calculate the length of the current row
    const rowLength = Math.pow(2, n - 1);

    // Check if k is in the first half or second half of the row
    if (k <= rowLength / 2) {
        // If k is in the first half, it corresponds to the same symbol in the previous row
        return kthGrammar(n - 1, k);
    } else {
        // If k is in the second half, it corresponds to the opposite symbol in the previous row
        return 1 - kthGrammar(n - 1, k - rowLength / 2);
    }
};