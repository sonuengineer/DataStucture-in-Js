var longestEqualSubarray = function (nums, k) {
    let totalElementsInThePicture = 0;
    let mostFrequentElement = 0;
    let elementMapping = {};
    let backPointer = 0;
    for (let index = 0; index < nums.length; index++) {
        if (!elementMapping[nums[index]]) {
            elementMapping[nums[index]] = 0
        }
        elementMapping[nums[index]] += 1
        mostFrequentElement = Math.max(elementMapping[nums[index]], mostFrequentElement)
        totalElementsInThePicture++
        while (totalElementsInThePicture - mostFrequentElement > k) {
            elementMapping[nums[backPointer++]] -= 1;
            totalElementsInThePicture--
        }
    }
    return mostFrequentElement
};