var buildArray = function(target, n) {
    let operations = [];
    let currNum = 1;
    let index = 0;

    while (currNum <= n && index < target.length) {
        let num = target[index];
        if (num === currNum) {
            operations.push("Push");
            currNum++;
            index++;
        } else {
            operations.push("Push");
            operations.push("Pop");
            currNum++;
        }
    }

    return operations;
};