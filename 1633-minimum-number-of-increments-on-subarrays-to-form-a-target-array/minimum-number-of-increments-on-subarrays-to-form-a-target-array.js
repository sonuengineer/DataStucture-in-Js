/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function(target) {
    return target.reduce((operations, current, index) => {
        return operations + Math.max(0, current - (target[index - 1] || 0));
    }, 0);
};