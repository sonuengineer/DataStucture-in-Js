/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function(n) {
  // Function to check if a number is prime
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const result = [];
  for (let x = 2; x <= n / 2; x++) {
    const y = n - x;
    if (isPrime(x) && isPrime(y)) {
      result.push([x, y]);
    }
  }

  return result;
}