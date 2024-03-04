/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function(nums) {
    const n = nums.length;
    let totalCount = 0;
    // initialize an array to store the count of subsequences ending at each element
    const dp = new Array(n); 

    for (let i = 0; i < n; i++) {
        dp[i] = new Map(); // a Map for storing differences and their counts

        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j];

            // get the count of subsequences with the same difference ending at nums[j]
            const prevCount = dp[j].get(diff) || 0;

            // increment dp[i] by the previous count
            dp[i].set(diff, (dp[i].get(diff) || 0) + prevCount + 1);

            // add the previous count to the total count
            totalCount += prevCount;
        }
    }

    return totalCount;
};