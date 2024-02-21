var removeStars = function(s) {
    // Let's make a stack to put and pop elements
    let stack = [];

    // Now let's add elements one by one 
    for (let ele of s) {
        // Check if ele is a star, if yes, remove the closest non-star character
        if (ele === "*") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(ele); // Corrected: push the character, not the entire string
        }
    }

    return stack.join("");
};