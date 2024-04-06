function minPairSum(nums) {
    // Sorting the input array in non-decreasing order
    nums.sort((a, b) => a - b);
    
    // Getting the length of the input array
    const n = nums.length;
    
    // Initializing pointers i and j for traversing from both ends of the sorted array
    let i = 0;
    let j = n - 1;
    
    // Variable to store the maximum sum found so far
    let maxi = Number.MIN_SAFE_INTEGER;

    // Loop to find the minimum pair sum by traversing the sorted array
    while (i < j) {
        // Calculating the sum of the pair of elements pointed by i and j
        const sum = nums[i] + nums[j];
        
        // Updating the maximum sum found so far
        maxi = Math.max(sum, maxi);
        
        // Moving pointers to the next pair of elements
        i++;
        j--;
    }
    
    // Returning the maximum pair sum found
    return maxi;
}

