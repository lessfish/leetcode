// Source : https://leetcode.com/problems/string-to-integer-atoi/
// Author : Han Zichi
// Date   : 2016-08-05

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim();

  var pattern = /^(\-|\+)?[0-9]+/;
  var tmp = pattern.exec(str);

  if (tmp) {
    var num = Number(tmp[0]);
    if (num < -2147483648)
      return -2147483648;
    if (num > 2147483647)
      return 2147483647;
    return num;
  }

  return 0;
};