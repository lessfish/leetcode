// Source : https://leetcode.com/problems/valid-anagram/
// Author : Han Zichi
// Date   : 2015-08-19

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length)
    return false;

  var a = s.split('').sort()
    , b = t.split('').sort();

  return a.toString() === b.toString();
};