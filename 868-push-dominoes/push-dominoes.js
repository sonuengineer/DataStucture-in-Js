var pushDominoes = function(dominoes) {
    let start=0; 
    let end=1;
    const arr = ("L"+ dominoes +"R").split("");
    while(start < arr.length-1){
        while(arr[end]=='.') 
            end++;
        if(arr[start] == arr[end]) 
            for(let i= start+1; i<end; i++) {
                arr[i]=arr[start];   
            }
        if(arr[start]>arr[end]) 
            for(let i=1; i<=(end-start-1)/2; i++){
                arr[start+i] = 'R';
                arr[end-i] = 'L';
            }   
        start=end++;
    }
    return arr.slice(1,arr.length-1).join("");
};