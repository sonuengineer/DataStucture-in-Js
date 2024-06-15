var maxPoints = function (ps) {
    if (ps.length <= 2) return ps.length; // 1 length

    const key = (x1, y1) => x1 + "," + y1;

    ps.sort(([x1, y1], [x2, y2]) => x1 - x2 || y1 - y2); // we could void? for [[0,0],[5,0]] like

    let n = ps.length;
    let o = {};
    for (let i = 0; i < n; i++) {
        let [x1, y1] = ps[i];

        for (let j = i + 1; j < n; j++) {
            let [x2, y2] = ps[j];
            let sl = (y2 - y1) / (x2 - x1); // slope1

            for (let k = j + 1; k < n; k++) {
                let [x3, y3] = ps[k];
                let sl2 = (y3 - y1) / (x3 - x1); // slope2

                if (sl === sl2) {
                    if (sl === 0) {
                        // some padding to make key1 in o[key1] distinct
                        sl += "slopeIsZero"; // on x & y axis
                        if (y1 === y2 && y1 === y3) sl += y1;
                        if (x1 === x2 && x1 === x3) sl += x1;
                    }
                    sl += x1 + "," + y1;

                    o[sl] = o[sl] || new Set();
                    o[sl]
                        .add(key(x1, y1)) //
                        .add(key(x2, y2))
                        .add(key(x3, y3));
                }
            }
        }
    }

    let max = -Infinity;
    for (let k in o) {
        max = Math.max(max, o[k].size);
    }
    return max === -Infinity ? 2 : max; // 2 length & more
};