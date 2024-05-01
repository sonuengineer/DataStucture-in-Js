
var reversePrefix = function(word, ch) {
 
    let chIndex = word.indexOf(ch)
    if(chIndex < 0) return word
    
    let result = ''
    
    for(let i = chIndex; i >= 0; i--){
        result += word[i]
    }
    
    for(let j = chIndex+1; j < word.length; j++){
        result += word[j]
    }
    
    return result
}