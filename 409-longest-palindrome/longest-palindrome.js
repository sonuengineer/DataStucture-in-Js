var longestPalindrome = function(s) {
    let arr = new Array(130).fill(0)
    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)]++
    }
    let flag=0
    let count=0
    console.log(arr[99])
    for(let i=65;i<arr.length;i++){
        if(arr[i]>1){
            count+=arr[i]-(arr[i]%2)
            arr[i]-=arr[i]-(arr[i]%2)
        }
    }
    console.log(arr[99])
    for(let i=65;i<arr.length;i++){
        if(arr[i]==1){
            count++
            break
        }
    }
    return count
};