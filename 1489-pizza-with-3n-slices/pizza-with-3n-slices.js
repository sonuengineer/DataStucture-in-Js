/**
 * @param {number[]} slices
 * @return {number}
 */
var maxSizeSlices = function(slices) {
    const dp = new Map();

    const memoizedDP = (i, j, k) => {
        if (k === 1) {
            return Math.max(...slices.slice(i, j));
        }

        if (j - i < 2 * k - 1) {
            return -Infinity;
        }

        const key = `${i}-${j}-${k}`;
        if (dp.has(key)) {
            return dp.get(key);
        }

        const result = Math.max(
            slices[i] + memoizedDP(i + 2, j, k - 1),
            memoizedDP(i + 1, j, k)
        );

        dp.set(key, result);
        return result;
    };

    const k = slices.length / 3;
    return Math.max(
        memoizedDP(0, slices.length - 1, k),
        memoizedDP(1, slices.length, k)
    );
};