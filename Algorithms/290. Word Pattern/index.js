// Source : https://leetcode.com/problems/word-pattern/
// Author : Han Zichi
// Date   : 2016-01-09

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  var arr = str.split(' ');

  if (pattern.length !== arr.length)
    return false;

  var a2b = {}
    , b2a = {};

  for (var i = 0, len = pattern.length; i < len; i++) {
    var a = pattern[i]
      , b = arr[i];

    if (!a2b[a]) {
      a2b[a] = b;
    } else {
      if (a2b[a] !== b)
        return false;
    }

    if (!b2a[b]) {
      b2a[b] = a;
    } else {
      if (baa[b] !== a)
        return false;
    }
  }

  return true;
};