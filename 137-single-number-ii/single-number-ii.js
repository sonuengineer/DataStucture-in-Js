/*
 * @lc app=leetcode id=137 lang=javascript
 *
 * [137] Single Number II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
         let xor1=0
         let xor2=0
         for(let i=0;i<nums.length;i++){
             xor1=(xor1^nums[i]) & ~xor2
             xor2=(xor2^nums[i])&  ~xor1
         }
         return xor1
};
// @lc code=end

