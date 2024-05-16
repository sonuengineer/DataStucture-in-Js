/**
 * @param {string} s
 * @return {number}
 */
const minimizedStringLength = (s) => {
    const uniqueChars = new Set([...s]);
    return uniqueChars.size;
};