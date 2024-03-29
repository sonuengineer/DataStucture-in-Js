/**
 * Problem: Sum of Subarray Minimums
 * LeetCode: https://leetcode.com/problems/sum-of-subarray-minimums/
 *
 * Approach:
 * - Use a monotonic stack to find the left and right boundaries for each element in the array.
 * - Calculate the contribution of each element to the final sum using the identified boundaries.
 * - Modulo operation is applied to avoid overflow.
 */

const sumSubarrayMins = function(arr) {
    const length = arr.length;

    // Arrays to store left and right boundaries for each element
    const left = new Array(length).fill(-1);
    const right = new Array(length).fill(length);

    // Monotonic stack to track elements and find boundaries
    const stack = [];

    // Find left boundaries
    for (let i = 0; i < length; ++i) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            left[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    // Clear the stack for re-use
    stack.length = 0;

    // Find right boundaries
    for (let i = length - 1; i >= 0; --i) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            right[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    // Calculate the sum considering the contribution of each element
    let sum = 0;
    const MODULO = 1e9 + 7;

    for (let i = 0; i < length; ++i) {
        const contribution = (i - left[i]) * (right[i] - i) * arr[i] % MODULO;
        sum = (sum + contribution) % MODULO;
    }

    return sum;
};

// Example usage:
const inputArray = [3, 1, 2, 4];
const result = sumSubarrayMins(inputArray);
console.log(result);