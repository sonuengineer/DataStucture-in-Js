/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 * we know that only 1 & 1 = 1, 
 * so if we have a range of numbers from left to right, and 
 * we and them all together,
 *  the result will be the common number of 1 bits 
 * that exist in all numbers in the range. And the the 
 * common of 1 bit will be the leftmost common bit of the range since we increase the number from left to right so the rightmost bit will keep changing and 
 * the leftmost bit will stay the same.
 * Approach

So, we can keep shifting the left and right number 
until they are equal the equal number will be the leftmost 
common bit of the range and also the result after we and 
them all together, we just need to shift the left/right number
 in amount of the shift count operation we did.

5 = 101
6 = 110
7 = 111
=> 5 & 6 & 7 = 100 = 4 The only common bit of 5, 6, 7 is the 
leftmost bit 100

13 = 1101
14 = 1110
15 = 1111
=> 13 & 14 & 15 = 1100 = 12 The only common bit of 13, 14, 15 is the leftmost bit 1100
 */
var rangeBitwiseAnd = function(left, right) {
      let shift=0
      while(left<right){
        // left=left>>1
        left>>=1
        // right=right>>1
        right>>=1
        shift++
      }
      return left<<shift
};