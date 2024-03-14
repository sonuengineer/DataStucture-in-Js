var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid; // Return index of the target element
        } else if (nums[mid] < target) {
            left = mid + 1; // Adjust left pointer
        } else {
            right = mid - 1; // Adjust right pointer
        }
    }

    return -1; // Target not found
};

console.log(search([2, 4, 7, 7, 8], 8)); // Output: 4
