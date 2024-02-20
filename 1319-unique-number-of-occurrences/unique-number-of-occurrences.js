/*
 * @lc app=leetcode id=1207 lang=javascript
 *
 * [1207] Unique Number of Occurrences
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hashmap = new Map();
    
    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
        hashmap.set(arr[i], (hashmap.get(arr[i]) || 0) + 1);
    }

    // Check if all counts are unique
    let countSet = new Set();
    for (let count of hashmap.values()) {
        if (countSet.has(count)) {
            return false; // Not all counts are unique
        }
        countSet.add(count);
    }

    return true; // All counts are unique
};

console.log(uniqueOccurrences([1, 1, 1, 2, 2, 3])); // Output: true

// @lc code=end

