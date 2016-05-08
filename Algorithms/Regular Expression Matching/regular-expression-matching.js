// Source : https://leetcode.com/problems/regular-expression-matching/
// Author : Han Zichi
// Date   : 2015-08-10

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
  var p = '^' + p + '$';
  var pattern = new RegExp(p, 'g');
  return pattern.test(s);
};

