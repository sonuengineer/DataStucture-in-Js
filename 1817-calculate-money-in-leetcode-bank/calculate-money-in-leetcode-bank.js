/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  let  sum = 0;
      let  mon = 1; 
        while(n > 0)
        {
            let  res = mon;
            for(let i = 1 ;i <= Math.min(n,7); i++ )
            {
                sum += res++;
            }
            mon++;
            n = n-7;
        }
        return sum;
};