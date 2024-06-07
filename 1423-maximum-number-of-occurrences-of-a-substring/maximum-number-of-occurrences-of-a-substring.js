var maxFreq = function (s, maxUniqLettersCount, minSize, maxSize) {
    let n = s.length;
    const freqMap = new Map();
    let subsMaxFreq = 0;
    for (let i = 0; i < n; i++) {
        for (let size = minSize; size <= maxSize; size++) {
            if (i + size <= n) {
                const str = s.slice(i, i + size);
                if (new Set(str).size <= maxUniqLettersCount) {
                    freqMap.set(str, !freqMap.has(str) ? 1 : freqMap.get(str) + 1);
                    subsMaxFreq = Math.max(subsMaxFreq, freqMap.get(str));
                    break
                }
            }
        }
    }
    return subsMaxFreq;
};