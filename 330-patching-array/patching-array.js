/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let ans = 0;
    let sum = 0;
    let i = 0;
    while (sum < n) {
        if (i < nums.length && nums[i] <= sum + 1) {
            sum += nums[i];
            i++;
        } else {
            ans++;
            sum = sum * 2 + 1;
        }
    }
    return ans;
};