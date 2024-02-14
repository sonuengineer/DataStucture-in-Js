/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(arr) {
let xor=0;
for(let i=0;i<arr.length;i++){
       xor=xor^arr[i]
}
return xor



    // const countMap = {};
    // arr.forEach((num) => {
    //   countMap[num] = (countMap[num] || 0) + 1;
    // });
    // for (const num in countMap) {
    //   if (countMap[num] === 1) {
    //     return parseInt(num, 10);
    //   }
    // }
    // return -1;
};
// @lc code=end

