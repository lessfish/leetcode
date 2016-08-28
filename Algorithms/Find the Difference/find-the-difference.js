// Source : https://leetcode.com/problems/find-the-difference/
// Author : Han Zichi
// Date   : 2016-08-28

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  s = s.split('').sort();
  t = t.split('').sort();

  for (var i = 0, len = t.length; i < len; i++) {
    if (s[i] !== t[i])
      return t[i];
  }
};