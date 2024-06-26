/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    const count= s.split('').reduce((a,c)=>{
        if(c==letter) a++
        return a
    },0)
    return Math.floor((count/s.length)*100)
};