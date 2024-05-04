function maxScore(str) {
  let result = 0;
  for (let i = 0; i < str.length - 1; i++) {
    let currentScore = 0;
    for (let j = 0; j <= i; j++) {
      if (str[j] === '0') {
        currentScore++;
      }
    }

    for (let j = i + 1; j < str.length; j++) {
      if (str[j] === '1') {
        currentScore++;
      }
    }

    result = Math.max(result, currentScore);
  }

  return result;
}