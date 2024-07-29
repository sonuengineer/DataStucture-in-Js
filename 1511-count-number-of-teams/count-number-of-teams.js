/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    // TIP: set a i pont and  itirate from [l ... i] and [i ... r]
    let count = 0

    for(let i = 1; i < rating.length-1; i++){
        let less = 0
        let more = 0
        for(let l = 0; l < i; l++){
            if(rating[l] < rating[i]) less++
        }
        for(let r = i+1; r < rating.length; r++){
            if(rating[i] < rating[r]) more++
        }
        
        // l < i < r
        let increasing = less * more
        // l > i > r
        let decreasing = (i - less) * (rating.length-1 - i - more)

        count += increasing + decreasing
    }


    return count
};