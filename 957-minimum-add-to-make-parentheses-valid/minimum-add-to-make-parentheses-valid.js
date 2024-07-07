var minAddToMakeValid = function(S) {
  const stack = []
  for(let s of S){
    if(s === ')' && stack[stack.length-1] === '(')
      stack.pop()
    else
      stack.push(s)
  }
  return stack.length
};