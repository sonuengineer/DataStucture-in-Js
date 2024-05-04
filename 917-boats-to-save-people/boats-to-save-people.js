var numRescueBoats = function(people, limit) {
    people.sort((a, b) => a - b);
    let boats = 0;
    let l = 0, r = people.length - 1;

    while (l <= r) {
        if (people[l] + people[r] <= limit) {
            l++;
            r--;
        } else {
            r--;
        }
        boats++;
    }

    return boats;
};