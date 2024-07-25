/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {

      let c =1

    function divisor(n,i){
     
        if(n==i || c>3) return
        
        if(n%i==0){
            c++
            divisor(n,i+=1)
        }else{
            divisor(n,i+=1)
        }
    }

    divisor(n,1)
    return c==3 ? true:false;
};