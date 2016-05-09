// Source : https://leetcode.com/problems/number-of-digit-one/
// Author : Han Zichi
// Date   : 2015-08-21

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
  var len = n.toString().length, ans = 0;
  n++;

  var tmp = 1;
  for (var i = 0; i < len; i++) {
    ans += ~~(n / tmp / 10) * tmp;
    ans += (n % (tmp * 10) - tmp) > tmp ? tmp : Math.max(0, n % (tmp * 10) - tmp);
    tmp *= 10;
  }

  return ans;
};