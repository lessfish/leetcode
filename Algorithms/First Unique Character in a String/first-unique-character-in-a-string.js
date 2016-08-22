// Source : https://leetcode.com/problems/first-unique-character-in-a-string/
// Author : Han Zichi
// Date   : 2016-08-22

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (var i = 0, len = s.length; i < len; i++) {
    var item = s[i];
    if (s.lastIndexOf(item) === s.indexOf(item))
      return i;
  }

  return -1;
};