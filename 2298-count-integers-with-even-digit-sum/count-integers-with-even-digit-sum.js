/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;
    for(i=1; i<=num; i++){
        if(i < 10 && i % 2 === 0){
            count++;
        }else if( i > 9){
            let str = i.toString();
            let arr = str.split('');
            let sum = 0;
            for(j=0; j<arr.length; j++){
                sum = sum + parseInt(arr[j]);
            }
            if(sum % 2 === 0){
                count++;
            }
        }
    }
    return count;
};