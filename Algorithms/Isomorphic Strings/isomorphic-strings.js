// Source : https://leetcode.com/problems/isomorphic-strings/
// Author : Han Zichi
// Date   : 2015-08-13

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length)
    return false;

  var len = s.length
    , hash = {}
    , _hash = {};

  for (var i = 0; i < len; i++) {
    var a = s[i]
      , b = t[i];

    if (!hash[a] && !_hash[b])
      hash[a] = b, _hash[b] = a;
    else if (hash[a] !== b || _hash[b] !== a)
      return false;
  }

  return true;
};