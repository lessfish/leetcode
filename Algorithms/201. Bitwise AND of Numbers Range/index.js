// Source : https://leetcode.com/problems/bitwise-and-of-numbers-range/
// Author : Han Zichi
// Date   : 2015-08-27

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

function getBitNum(a, pos) {
  a++;
  var res = Math.pow(2, pos)
    , loop = ~~(a / res)
    , num = loop * (res / 2) + Math.max(a % res - res / 2, 0);
  return num;
}

var rangeBitwiseAnd = function(m, n) {
  var ans = 0
    , tmp = n
    , digits = 0;

  while (tmp) {
    digits++;
    tmp >>= 1;
  }

  for (var i = 0; i < digits; i++) {
    var num = getBitNum(n, i + 1) - getBitNum(m - 1, i + 1);
    if (num === n - m + 1)
      ans += Math.pow(2, i);
  }

  return ans;
};