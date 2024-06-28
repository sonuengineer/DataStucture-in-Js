var maxConsecutive = function (bottom, top, special) {
    // Lets sort the special array in ascending order
    special = special.sort((a, b) => a - b);
    // Add bottom - 1 at the beginning of the special array
    special.unshift(bottom - 1);
    // Add top + 1 at the end of the special array
    special.push(top + 1);
    let res = 0; // Initialize result variable
    // Now lets iterate through the sorted special array
    for (let i = 1; i < special.length; i++) {
        // Calculate the consecutive differennce between adjacent elements
        res = Math.max(res, special[i] - special[i - 1] - 1);
    }
    // Finally return the max consecutive difference
    return res;
};