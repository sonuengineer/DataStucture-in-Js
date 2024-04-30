var wonderfulSubstrings = function (word) {
    let asi = (x) => x.charCodeAt();
    let res = 0;
    let y = Array(2 ** 10).fill(0);
    y[0] = 1;
    let cur = res = 0;
    for (let x of word) {
        cur ^= 1 << asi(x) - 97;
        res += y[cur];
        for (let i = 0; i < 10; i++) {
            res += y[cur ^ 1 << i];
        }
        y[cur]++;
    }
    return res;
};