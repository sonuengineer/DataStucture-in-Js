/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  let result = ""
  for (i = num.length - 1; i >= 0; i--) {
    if (num[i] !== "0" || result.length > 0) {
      result = num[i] + result
    }
  }
  return result
}