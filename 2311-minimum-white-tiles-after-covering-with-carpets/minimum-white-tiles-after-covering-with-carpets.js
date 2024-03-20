let dp = Array.from({ length: 1001 }, () => new Uint32Array(1001));

/**
 * @param {string} floor
 * @param {number} numCarpets
 * @param {number} carpetLen
 * @return {number}
 */
var minimumWhiteTiles = function (floor, numCarpets, carpetLen) {
  let n = floor.length;
  let all = 0;
  let sum = 0;
  for (let i = 0; i < n; ++i) {
    all += floor.charCodeAt(i) & 1;
    sum += floor.charCodeAt(i) & 1;
    if (i >= carpetLen) sum -= floor.charCodeAt(i - carpetLen) & 1;

    for (let j = 0; j <= numCarpets; ++j) {
      if (!j) {
        dp[i][j] = 0;
        continue;
      }
      if (i < carpetLen) {
        dp[i][j] = sum;
        continue;
      }
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - carpetLen][j - 1] + sum);
    }
  }

  return all - dp[n - 1][numCarpets];
};