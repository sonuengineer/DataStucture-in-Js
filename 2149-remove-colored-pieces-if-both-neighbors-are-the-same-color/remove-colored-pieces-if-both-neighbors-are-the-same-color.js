/**
 * @param {string} colors
 * @return {boolean}
 */
/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function(colors) {
 let alice = 0; // Counter for three consecutive "A"s
  let bob = 0;   // Counter for three consecutive "B"s
  
  // Traverse the string and count consecutive occurrences of "A" and "B"
  for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    const prevEl = colors[i - 1];
    const nextEl = colors[i + 1];
    
    if (element === "A" && prevEl === "A" && nextEl === "A") {
      alice++;
    }
    if (element === "B" && prevEl === "B" && nextEl === "B") {
      bob++;
    }
  }
  
  return alice > bob;
};