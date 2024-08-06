/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const n = word.length;
    let count = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        count[word.charCodeAt(i) - 'a'.charCodeAt(0)]++
    }

    count = count.sort((a,b) => b - a).filter(c => c > 0);

    let result = 0;

    for (let i = 0; i < count.length; i++) {
        const extraPush = Math.floor(i/8);
        result += count[i] * (1 + extraPush);
    }

    return result;

};