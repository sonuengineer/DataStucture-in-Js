/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    // Step 1: Build a frequency map using an object
    const frequencyMap = {};
    let count = 0;

    // Step 2: Build the frequency map
    for (const x of nums) {
        frequencyMap[x] = (frequencyMap[x] || 0) + 1;
    }

    // Step 3: Iterate through the frequency map
    for (const freq of Object.values(frequencyMap)) {
        // Check if a single element cannot be used in any operation
        if (freq === 1) {
            return -1;
        }

        // Step 4: Calculate the number of operations for the current element
        count += Math.floor(freq / 3);

        // If there are remaining elements, add one more operation to the count
        if (freq % 3 !== 0) {
            count += 1;
        }
    }

    // Step 5: Return the total count, representing the minimum operations required
    return count;
};