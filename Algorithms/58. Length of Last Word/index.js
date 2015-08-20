// Source : https://leetcode.com/problems/length-of-last-word/
// Author : Han Zichi
// Date   : 2015-08-19

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
  var _str = s.replace(/\s/g, '');
  if (!_str.length) return 0;

  for (var i = s.length; i--; ) {
    if (s[i] === ' ')
      return s.length - i - 1;

    if (i === 0)
      return s.length - i;
  }
}; 