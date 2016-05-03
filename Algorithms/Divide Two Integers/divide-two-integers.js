// Source : https://leetcode.com/problems/divide-two-integers/
// Author : Han Zichi
// Date   : 2016-05-03

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  var MAX_POSITIVE_INT = ~(1 << 31);
  var MAX_NEGATIVE_INT = (1 << 31);

  var ans = Math.floor(dividend / divisor);

  if (ans < MAX_NEGATIVE_INT)
    ans = MAX_NEGATIVE_INT;

  if (ans > MAX_POSITIVE_INT)
    ans = MAX_POSITIVE_INT;

  return ans;
};