var findDiagonalOrder = function(nums) {
    const res = [];
    const q = [[0, 0]];

    while (q.length > 0) {
        const [row, col] = q.shift();
        res.push(nums[row][col]);

        if (col === 0 && row + 1 < nums.length) {
            q.push([row + 1, 0]);
        }

        if (col + 1 < nums[row].length) {
            q.push([row, col + 1]);
        }
    }

    return res;     
};