/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function (arr, target) {

    const INF = Math.pow(10, 5) * 2;

    let answer = INF;


    let from = 0, to = 0;
    let currentSum = arr[from];

    let targetAppearedFrom = {}
    let targetAppearedTo = {}

    for (; from < arr.length && to < arr.length;) {
        if (from > to) {
            to = from;
            currentSum = arr[from];
        }

        if (currentSum === target) {

            targetAppearedFrom[from] = to;
            targetAppearedTo[to] = from;

            if (to < arr.length - 1) {
                ++to;
                currentSum += arr[to];
            } else {
                break;
            }
        } else if (currentSum > target) {
            currentSum -= arr[from];
            ++from;
        } else if (currentSum < target) {
            if (to < arr.length - 1) {
                ++to;
                currentSum += arr[to];
            } else {
                break;
            }
        }

    }

    let leftMinLengths = {0: targetAppearedTo[0] === 0 ? 1 : INF};
    let rightMinLengths = {[arr.length - 1]: targetAppearedFrom[arr.length - 1] === arr.length - 1 ? 1 : INF};

    // left
    for (let to = 1; to < arr.length; ++to) {
        let untilNowMinLength = leftMinLengths[to - 1] ?? INF;
        let targetAppearedFrom = targetAppearedTo[to] ?? INF;

        if (targetAppearedFrom === INF) {
            leftMinLengths[to] = INF;
        } else {

            leftMinLengths[to] = Math.min(untilNowMinLength, to - targetAppearedFrom + 1);
        }


    }

    // right
    for (let from = arr.length - 2; from >= 0; --from) {
        let untilNowMinLength = rightMinLengths[from + 1] ?? INF;
        let targetAppearedTo = targetAppearedFrom[from] ?? INF;

        rightMinLengths[from] = Math.min(untilNowMinLength, targetAppearedTo - from + 1)

    }


    // get answer
    for (let i = 0; i < arr.length - 1; ++i) {

        let leftML = leftMinLengths[i];
        let rightML = rightMinLengths[i + 1];

        answer = Math.min(answer, leftML + rightML);
    }

    if (answer > Math.pow(10, 5)) {
        answer = -1;
    }

    return answer;
};