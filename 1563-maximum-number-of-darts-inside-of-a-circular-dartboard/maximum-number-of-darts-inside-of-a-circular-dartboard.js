function numPoints(points, r, n = points.length, ans = 0) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let count = 0, center
            const a = points[i], b = points[j]
            
            if (i === j) {
                center = a
            }
            else {
                const [x1, x2, y1, y2] = [...a, ...b]
                
                if (getDistance(x1, x2, y1, y2) / 2 > r) {
                    continue
                }

                center = getCenter(a, b, r)
            }
            
            for (let k = 0; k < n; k++) {
                const [x1, x2, y1, y2] = [...center, ...points[k]]
                
                if (getDistance(x1, x2, y1, y2) <= r) {
                    count++
                }
            }

            ans = Math.max(ans, count)
        }
    }

    return ans
}


function getDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}

function getCenter(a, b, r) {
    // constructor a and b
    const [a1, a2, b1, b2] = [...a, ...b]
    
    // get midpoint of ab
    const [m1, m2] = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]
    // get distance from a to midpoint
    const d = getDistance(a1, a2, m1, m2)
    // get distance of vertical
    const h = Math.sqrt(r ** 2 - d ** 2)
    // get vector ab
    const [v1, v2] = [b1 - a1, b2 - a2]
    // get vertical of vector ab
    const [d1, d2] = [-v2, v1]
    // get the length of the vertical of the vector ab
    const l = Math.sqrt(d1 ** 2 + d2 ** 2)
    // get x, y as center
    const [x, y] = [(d1 / l) * h, (d2 / l) * h]

    // export real center
    return [x + m1, y + m2]
}