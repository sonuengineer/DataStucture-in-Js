/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
    bitCount = (n) => n.toString(2).replace(/0/g,"").length

    for (let i = 0; i <= 60; i++) {
        k = num1 - i * num2
        if (bitCount(k) <= i && i <= k) return i
    }
    
    return -1
};