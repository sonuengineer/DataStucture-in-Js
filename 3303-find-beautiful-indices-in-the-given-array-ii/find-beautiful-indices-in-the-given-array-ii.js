function beautifulIndices(s, a, b, k) {
    if (a.length > s.length || b.length > s.length) {
        return [];
    }
    const aIdx = kmpSearch(s, a);
    const bIdx = kmpSearch(s, b);

    console.log(aIdx, bIdx);

    return aIdx.filter((idx) => {
        let min = Math.max(0, idx - k);
        let max = Math.min(s.length - 1, idx + k);
        if (bIdx.length === 0 || bIdx[bIdx.length - 1] < min || bIdx[0] > max) {
            return false;
        }
        let lessEq = bSearchLessEq(bIdx, max);
        let gtEq = bSearchGtEq(bIdx, min);
        return lessEq >= gtEq;
    });
}

function isIndex(s, start, s1) {
    let j = 0;
    for (let i = start; i < s.length && j < s1.length; i++, j++) {
        if (s[i] != s1[j]) {
            return false;
        }
    }
    return j === s1.length;
}

function bSearchLessEq(arr, q) {
    let start = 0;
    let end = arr.length - 1;
    let ans = 0;
    while (start <= end) {
        let mid = (start + end) >> 1;
        if (arr[mid] <= q) {
            ans = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return ans;
}

function bSearchGtEq(arr, q) {
    let start = 0;
    let end = arr.length - 1;
    let ans = end;
    while (start <= end) {
        let mid = (start + end) >> 1;
        if (arr[mid] >= q) {
            ans = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return ans;
}

function buildKMPTable(pattern) {
    const table = [0];
    let prefixLength = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (prefixLength > 0 && pattern[i] !== pattern[prefixLength]) {
            prefixLength = table[prefixLength - 1];
        }

        if (pattern[i] === pattern[prefixLength]) {
            prefixLength++;
        }

        table[i] = prefixLength;
    }

    return table;
}

function kmpSearch(text, pattern) {
    const table = buildKMPTable(pattern);
    const indices = [];

    let textIndex = 0;
    let patternIndex = 0;

    while (textIndex < text.length) {
        if (pattern[patternIndex] === text[textIndex]) {
            patternIndex++;
            textIndex++;
        }

        if (patternIndex === pattern.length) {
            indices.push(textIndex - patternIndex);
            patternIndex = table[patternIndex - 1];
        } else if (
            textIndex < text.length &&
            pattern[patternIndex] !== text[textIndex]
        ) {
            if (patternIndex !== 0) {
                patternIndex = table[patternIndex - 1];
            } else {
                textIndex++;
            }
        }
    }

    return indices;
}