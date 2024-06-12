/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l = 0, r = nums.length - 1;
    for(let i = 0; i < nums.length; i++) {
        while (i >= l && i <= r && (nums[i] === 0 || nums[i] === 2)) {
            if (nums[i] === 0) {
                [nums[i], nums[l]] = [nums[l], nums[i]];
                l++;
            } else if (nums[i] === 2) {
                [nums[i], nums[r]] = [nums[r], nums[i]];
                r--;
            }
        }
    }
};