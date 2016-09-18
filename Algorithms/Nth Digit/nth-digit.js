// Source : https://leetcode.com/problems/nth-digit/
// Author : Han Zichi
// Date   : 2016-09-18

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  return dfs(1, n);

  function dfs(digits, left) {
    let start = Math.pow(10, digits - 1);
    let last = Math.pow(10, digits) - 1;
    let len = last - start + 1;
    let num = len * digits;

    if (num < left)
      return dfs(digits + 1, left - num);
    else {
      let remainder = left % digits ? left % digits : digits;
      let rightNumber = Math.ceil(left / digits) - 1 + start;

      return +String(rightNumber)[remainder - 1];
    }
  }
};