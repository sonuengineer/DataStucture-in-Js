var halvesAreAlike = function(s) {
  let n = Math.floor(s.length / 2);
  let half1 = vowel(s.substring(0, n));
  let half2 = vowel(s.substring(n));

  if (half1 === half2) {
    return true;
  } else {
    return false;
  }

  function vowel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if ("aeiouAEIOU".includes(str[i])) {
        count++;
      }
    }
    return count;
  }
};