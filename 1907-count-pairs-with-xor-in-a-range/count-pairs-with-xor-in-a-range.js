function getBit(x, b) {
  return (x >> b) & 1;
}

/**
 * @param {number[]} nums
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countPairs = function (nums, low, high) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let res = 0;

  let m = 0;
  let p = 0;
  let ll = 0;
  let rr = 0;
  let bsl = 0;
  let bsr = 0;
  let b = 0;

  for (let r = 1; r < n; r++) {
    b = Math.ceil(Math.log2(Math.max(low, nums[r]) + 1));

    ll = 0;
    rr = r - 1;

    while (true) {
      if (getBit(nums[rr], b) != getBit(nums[ll], b)) {
        p = ll;
        bsl = ll;
        bsr = rr;
        while (bsl <= bsr) {
          m = (bsl + bsr) >> 1;
          if (getBit(nums[m], b)) bsr = m - 1;
          else {
            bsl = m + 1;
            p = m;
          }
        }

        if (getBit(low, b)) {
          if (getBit(nums[r], b)) {
            res += rr - p;
            rr = p;
          } else {
            res += p - ll + 1;
            ll = p + 1;
          }
        } else {
          if (getBit(nums[r], b)) {
            ll = p + 1;
          } else {
            rr = p;
          }
        }
      } else {
        let bit = getBit(nums[rr], b) ^ getBit(nums[r], b);
        if (getBit(low, b) != bit) {
          if (!bit) res += rr - ll + 1;
          break;
        }
      }

      if (!b) break;
      b--;
    }

    b = Math.ceil(Math.log2(Math.max(high, nums[r]) + 1));
    ll = 0;
    rr = r - 1;

    while (true) {
      if (getBit(nums[rr], b) != getBit(nums[ll], b)) {
        p = ll;
        bsl = ll;
        bsr = rr;
        while (bsl <= bsr) {
          m = (bsl + bsr) >> 1;
          if (getBit(nums[m], b)) bsr = m - 1;
          else {
            bsl = m + 1;
            p = m;
          }
        }

        if (getBit(high, b)) {
          if (getBit(nums[r], b)) {
            rr = p;
          } else {
            ll = p + 1;
          }
        } else {
          if (getBit(nums[r], b)) {
            res += p - ll + 1;
            ll = p + 1;
          } else {
            res += rr - p;
            rr = p;
          }
        }
      } else {
        let bit = getBit(nums[rr], b) ^ getBit(nums[r], b);
        if (getBit(high, b) != bit) {
          if (bit) res += rr - ll + 1;
          break;
        }
      }

      if (!b) break;
      b--;
    }
  }

  res = (n * (n - 1)) / 2 - res;
  return res;
};