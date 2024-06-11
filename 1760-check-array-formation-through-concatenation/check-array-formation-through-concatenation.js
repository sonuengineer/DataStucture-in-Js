var canFormArray = function (arr, pieces) {
    let arr2 = [], x = new Map();
    for (let p of pieces) {
        x.set(p[0], p);
    }
    for (let p of arr) {
        if (x.has(p)) {
            arr2 = arr2.concat(x.get(p));
        }
    }
    return JSON.stringify(arr2) === JSON.stringify(arr);
};