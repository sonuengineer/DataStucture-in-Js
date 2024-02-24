/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
     const result = [];

    nums.forEach((num) => {
        // Check if the number already exists in any row
        const foundRow = result.find(row => !row.includes(num));

        if (foundRow) {
            // If found, add the number to that row
            foundRow.push(num);
        } else {
            // If not found, create a new row with the current number
            result.push([num]);
        }
    });

    return result
};