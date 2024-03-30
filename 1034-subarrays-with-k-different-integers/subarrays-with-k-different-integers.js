function subarraysWithKDistinct(A, K) {
  function atMostK(k) {
    let l = 0;
    let res = 0;
    const count = {};

    for (let r = 0; r < A.length; r++) {
      if (count[A[r]] == null) count[A[r]] = 0;
      if (count[A[r]] === 0) k--;
      count[A[r]]++;

      while (k < 0) {
        count[A[l]]--;
        if (count[A[l]] === 0) k++;
        l++;
      }
      res += r - l + 1;
    }
    return res;
  }

  return atMostK(K) - atMostK(K - 1);
}