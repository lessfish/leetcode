// Source : https://leetcode.com/problems/excel-sheet-column-number/
// Author : Han Zichi
// Date   : 2015-08-26

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var a = s.split('').reverse();
  s = a.join('');
  var ans = a.reduce(function(pre, item, index) {
    return pre + Math.pow(26, index) * (s.charCodeAt(index) - 64);
  }, 0);
  return ans;
};