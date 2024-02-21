/**
 * @param {number} n
 * @return {number[]}
 */
 ////Assume we have a binary: n = 1101, then n - 1 = 1100, the result of n & ( n - 1 ) = 1100.
//So we can conclude that: count in n & ( n - 1 ) 
//is one less then n, that's why we should plus 1 in the formula.
var countBits = function (n) {
  let result = [0]
  for (let i = 1; i <= n; i++) {
    result[i] = result[i & (i - 1)] + 1
  }
  
  return result
};