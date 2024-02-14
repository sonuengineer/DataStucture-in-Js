/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 * The expression n & (n - 1) is a bitwise operation that efficiently checks whether a given number n is a power of 2. The intuition behind this is based on the binary representation of numbers.

When a number is a power of 2, it has only one '1' bit in its binary representation. For example:

2^0 = 1 (binary: 0001)
2^1 = 2 (binary: 0010)
2^2 = 4 (binary: 0100)
2^3 = 8 (binary: 1000)
If you subtract 1 from a power of 2, all the bits to the right of the rightmost '1' bit become '1'. For example:

(2^1 - 1) = 1 (binary: 0001 - 1 = 0000)
(2^2 - 1) = 3 (binary: 0010 - 1 = 0001)
(2^3 - 1) = 7 (binary: 0100 - 1 = 0011)
Now, when you perform a bitwise AND (&) between n and (n - 1), it will be 0 only if n has only one '1' bit. If n is not a power of 2, it will have more than one '1' bit, and the result of the AND operation will not be 0.

So, the condition n > 0 && (n & (n - 1)) === 0 checks if the number is positive (n > 0) and has only one '1' bit, making it a power of 2. This is an efficient and clever way to perform this check without using loops or recursion.
 */
var isPowerOfTwo = function(n) {
    return n > 0 && !(n & (n - 1))
};
// @lc code=end

