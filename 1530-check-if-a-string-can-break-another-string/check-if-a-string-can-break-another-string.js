/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
    //o(nlogn) time | o(n) space
    let canBreak1 = true;
    let canBreak2 = true;

    s1 = s1.split("");
    s2 = s2.split("");

    s1.sort();
    s2.sort();

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] < s2[i]) {
            canBreak1 = false;
            break;
        }
    }

    for (let i = 0; i < s2.length; i++) {
        if (s2[i] < s1[i]) {
            canBreak2 = false;
            break;
        }
    }

    return canBreak1 || canBreak2;
};