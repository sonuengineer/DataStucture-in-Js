var numWaterBottles = function(numBottles, numExchange) {
    let res = numBottles;
    let cur_empty = numBottles;

    while (Math.floor(cur_empty / numExchange) !== 0) {
        let full_drinked = Math.floor(cur_empty / numExchange);
        let left_empty = cur_empty - full_drinked * numExchange;
        res += full_drinked;
        cur_empty = left_empty + full_drinked;
    }

    return res;
};