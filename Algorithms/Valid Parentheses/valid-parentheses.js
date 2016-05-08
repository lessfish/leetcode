// Source : https://leetcode.com/problems/valid-parentheses/
// Author : Han Zichi
// Date   : 2015-08-09

/**
 * @param {string} s
 * @return {boolean}
 */

// stack use
var isValid = function(s) {
  var sta = [], target = {};
  target['('] = ')';
  target['['] = ']';
  target['{'] = '}';
  for(var i = 0, len = s.length; i < len; i++) {
    if (!sta.length) sta.push(s[i]);
    else {
      if (s[i] === target[sta[sta.length - 1]])
        sta.pop();
      else 
        sta.push(s[i]);
    }
  }

  return !sta.length;
};