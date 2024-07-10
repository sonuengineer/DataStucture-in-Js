/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} maxChanges
 * @return {number}
 */
var minimumMoves = function(nums, k, maxChanges) {
    // Create a prefix sum array of indices where nums[i] > 0
    const A = [0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            A.push(A[A.length - 1] + i);
        }
    }

    const n = A.length - 1;
    const m = Math.max(0, k - maxChanges);
    let res = Number.MAX_SAFE_INTEGER;

    // Iterate through possible numbers of ones to collect directly
    for (let l = m; l <= Math.min(n, Math.min(m + 3, k)); l++) {
        // Try all possible starting positions
        for (let i = 0; i <= n - l; i++) {
            const mid1 = i + Math.floor(l / 2);
            const mid2 = i + l - Math.floor(l / 2);
            // Calculate cost for this configuration
            const cur = A[i + l] - A[mid2] - (A[mid1] - A[i]);
            // Update minimum cost
            res = Math.min(res, cur + (k - l) * 2);
        }
    }

    return res;
};