/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(nums) {
    let n = nums.length;
    let carry = 1;
    let resultArray = [];

    for (let i = n - 1; i >= 0; i--) {
        let sum = nums[i] + carry;
        resultArray.unshift(sum % 10);
        carry = Math.floor(sum / 10);
    }

    // If there's a remaining carry, add it to the result
    while (carry > 0) {
        resultArray.unshift(carry % 10);
        carry = Math.floor(carry / 10);
    }

    return resultArray;
    // let n = digits.length;
    // let carry = 1;
    
    // for (let i = n - 1; i >= 0 && carry > 0; i--) {
    //     let sum = digits[i] + carry;
    //     digits[i] = sum % 10;
    //     carry = Math.floor(sum / 10);
    // }

    // // If there's still a remaining carry, add it as a new digit
    // if (carry > 0) {
    //     digits.unshift(carry);
    // }

    // return digits;
}
