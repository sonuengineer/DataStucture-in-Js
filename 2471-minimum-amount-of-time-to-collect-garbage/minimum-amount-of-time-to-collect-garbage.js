/**
 * @param {string[]} garbage
 * @param {number[]} travel
 * @return {number}
 */
let travelCounter = function(truck, travel) {
    let sum = 0;
    for(let i=0; i<truck; i++) {
        sum += travel[i];
    }
    return sum;
};
var garbageCollection = function(garbage, travel) {
    let g=0;
    let m=0;
    let p=0;
    // travel = [0].concat(travel);
    let res=0;
    // let position = new Map(['G', 0], ['M', 0], ['P', 0]);
    
    for(let i=0; i<garbage.length; i++) {
        if(garbage[i].includes("G", 0)) {
            g = i;
            // position.set('G', i);
            // g += (garbage[i].match(/G/g) || []).length;
        }
        if(garbage[i].includes("M", 0)) {
            m = i;
            // position.set('M', i);
            // m += (garbage[i].match(/M/g) || []).length;
        }
        if(garbage[i].includes("P", 0)) {
            p = i;
            // position.set('P', i);
            // p += (garbage[i].match(/P/g) || []).length;
        }
        res = res + garbage[i].length;
    }
    console.log(res);
    res += travelCounter(g, travel);
    res += travelCounter(p, travel);
    res += travelCounter(m, travel);
    return res;
};