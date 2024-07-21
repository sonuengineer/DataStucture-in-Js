/**
 * @param {number[][]} nums
 * @return {number}
 */

const isPrimeNumber = (num) =>{
    if(num < 2){
        return false
    }
    
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    
    return num
}

var diagonalPrime = function(nums) {
    let primeArr = []
    let pointer = 0
    const length = nums.length - 1
    
    while(pointer <= length){
        const isPrime1 = isPrimeNumber(nums[pointer][pointer])
        const isPrime2 = isPrimeNumber(nums[pointer][length - pointer])
        
        if(isPrime1){
            primeArr.push(isPrime1)
        }
        
        if(isPrime2){
            primeArr.push(isPrime2)
        }
        
        pointer++
    }
    
    const maximum = primeArr.length > 0 ? Math.max(...primeArr) : 0
    
    return maximum
};