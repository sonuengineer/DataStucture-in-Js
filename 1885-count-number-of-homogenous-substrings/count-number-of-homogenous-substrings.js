function countHomogenous(s) {
    const mod = 1e9 + 7;
    let count = 0;
    let currentLength = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            currentLength++;
        } else {
            count = (count + (currentLength * (currentLength + 1) / 2) % mod) % mod;
            currentLength = 1;
        }
    }

    // Calculate count for the last homogenous substring
    count = (count + (currentLength * (currentLength + 1) / 2) % mod) % mod;

    return count;
}


