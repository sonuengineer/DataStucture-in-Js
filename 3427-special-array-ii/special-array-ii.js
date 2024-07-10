///////////////////////// Template ///////////////////////////////
function Bisect() {
    return { insort_right, insort_left, bisect_left, bisect_right }
    function insort_right(a, x, lo = 0, hi = null) {
        lo = bisect_right(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] > x ? hi = mid : lo = mid + 1;
        }
        return lo;
    }
    function insort_left(a, x, lo = 0, hi = null) {
        lo = bisect_left(a, x, lo, hi);
        a.splice(lo, 0, x);
    }
    function bisect_left(a, x, lo = 0, hi = null) { // >= lower_bound
        if (lo < 0) throw new Error('lo must be non-negative');
        if (hi == null) hi = a.length;
        while (lo < hi) {
            let mid = parseInt((lo + hi) / 2);
            a[mid] < x ? lo = mid + 1 : hi = mid;
        }
        return lo;
    }
}
////////////////////////////////////////////////////////

const isArraySpecial = (a, queries) => {
    let n = a.length, L = [], R = [], res = [], bi = new Bisect();
    for (let i = 1; i < n; i++) {
        if (a[i - 1] % 2 == a[i] % 2) {
            L.push(i - 1);
            R.push(i);
        }
    }
    for (const [l, r] of queries) { // [L[idx], R[idx]] is subset of [l, r], not special
        let idx = bi.bisect_left(L, l);
        if (l < r && l <= L[idx] && r >= L[idx] + 1) { // R[idx] == L[idx] + 1
            res.push(false);
        } else {
            res.push(true);
        }
    }
    return res;
};