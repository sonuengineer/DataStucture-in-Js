function findDuplicates(nums) {
    let map = new Map();
    let duplicates = [];

    for (let num of nums) {
        if (map.has(num)) {
            if (!duplicates.includes(num)) {
                duplicates.push(num);
            }
        } else {
            map.set(num, true);
        }
    }

    return duplicates;
}