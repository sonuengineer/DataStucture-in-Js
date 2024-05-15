var maxValue = function (n, x) {
    let a = Math.floor(n[0] === '-');
    while (n[0] === '-' ? n[a] <= x : n[a] >= x) a++;
    return n.slice(0, a) + x + n.slice(a);
};