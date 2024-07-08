var longestMountain = function(arr) {
    let longest = 0

    for(let i = 1; i < arr.length - 1; i++) {
        if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
            let distanceL = 1;
            let distanceR = 1;
            while(arr[i - distanceL] > arr[i - distanceL - 1] && i - distanceL - 1 >= 0) {
                distanceL++;
            }

            while(arr[i + distanceR] > arr[i + distanceR + 1] && i + distanceR + 1 < arr.length) {
                distanceR++;
            }

            if(distanceL + distanceR + 1 > longest) {
                longest = distanceL + distanceR + 1;
            }

            if(distanceR > 1) {
                i = i + distanceR;
            }

        }   
    }

    return longest;
}