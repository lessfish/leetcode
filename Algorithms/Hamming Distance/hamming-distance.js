// Source : https://leetcode.com/problems/hamming-distance/
// Author : Han Zichi
// Date   : 2016-12-23

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let ans = 0;
  while (x || y) {
    ans += (x & 1) ^ (y & 1);
    x >>= 1;
    y >>= 1;
  }
  return ans;
};
