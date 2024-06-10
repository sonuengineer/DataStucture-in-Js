var getMaxLen = function (nums) {
    let count = 0, odd = -1, even = 0, max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (!nums[i]) {
            odd = -1, even = i + 1, count = 0;
            continue;
        }
        if (nums[i] < 0) count++;
        if (count % 2) {
            if (odd < 0) odd = i;
            max = Math.max(max, i - odd);
        } else max = Math.max(max, i - even + 1);
    }
    return max;
};