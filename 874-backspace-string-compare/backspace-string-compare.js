function backspaceCompare(s, t) {
    const processString = (str) => {
        const stack = [];

        for (const char of str) {
            if (char === '#') {
                stack.pop();
            } else {
                stack.push(char);
            }
        }

        return stack.join('');
    };

    return processString(s) === processString(t);
}

// Example usage:
// Input: s = "ab#c", t = "ad#c"
// Output: true
console.log(backspaceCompare("ab#c", "ad#c"));
