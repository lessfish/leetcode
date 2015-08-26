// Source : https://leetcode.com/problems/excel-sheet-column-title/
// Author : Han Zichi
// Date   : 2015-08-26

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  var ans = '';
  while (n) {
    if (n % 26 === 0) {
      ans += String.fromCharCode(26 + 64);
      n = (n / 26) - 1;
    }
    else {
      ans += String.fromCharCode(n % 26 + 64);
      n = ~~(n / 26);
    }
  }

  return ans.split('').reverse().join('');
};