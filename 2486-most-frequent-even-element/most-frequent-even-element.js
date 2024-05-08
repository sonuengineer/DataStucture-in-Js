/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    return Number(
        Object.entries(
            nums.reduce((acc, num) => {
                if (num % 2 === 0) {
                    acc[num] = (acc[num] ?? 0) + 1;
                }

                return acc;
            }, {}),
        ).sort(([num1, fr1], [num2, fr2]) => {
            if (fr1 !== fr2) {
                return fr2 - fr1;
            }

            return num1 - num2;
        })[0]?.[0] ?? -1,
    );
};