/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

function gcd(a, b){
    if(b == 0){
        return a;
    }

    return gcd(b, a%b);
}
function partition(arr, left, right){
    if(left >= right){
        return left;
    }
    let randomPivotIdx = left + Math.floor(Math.random() * (right - left + 1));
    [arr[right], arr[randomPivotIdx]] = [arr[randomPivotIdx], arr[right]];


    let i = left - 1;
    for(let j = left; j < right; j++){
        if(arr[j] >= arr[right]){
            continue;
        }

        [arr[j], arr[i+1]] = [arr[i+1], arr[j]];
        i++;
    }
    [arr[right], arr[i+1]] = [arr[i+1], arr[right]];

    
    return i + 1;
}

function findMedian(arr){
    if(arr.length <= 2){
        return arr[0];
    }
    let left = 0;
    let right = arr.length - 1;
    let medianIdx = Math.floor(arr.length / 2);
    let mid;
    while((mid = partition(arr, left, right)) != medianIdx){
        if(mid < medianIdx){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return arr[mid];
}

var makeSubKSumEqual = function(arr, k) {
    let n = arr.length;
    let numbOfSets = gcd(n, k);
    let setSize = n / numbOfSets;
    let minOps = 0;

    // 
    for(let i = 0; i < numbOfSets; i++){
        let set = [];
        for(let j = 0; j < setSize; j++){
            set.push(arr[(i + j*k) % n]);
        }

        // let medianSet = set.sort((a,b) => a-b)[Math.floor(set.length/2)];
        let medianSet = findMedian(set);
        set.forEach(element => minOps += Math.abs(element -medianSet));
    }

    return minOps;
};