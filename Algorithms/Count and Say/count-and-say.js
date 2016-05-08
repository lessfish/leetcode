// Source : https://leetcode.com/problems/count-and-say/
// Author : Han Zichi
// Date   : 2015-08-10

/**
 * @param {number} n
 * @return {string}
 */

// hash answer
var hash = {};
hash[1] = '1';

var countAndSay = function(n) {
  var hashPos;
  for(var i = n; i >= 1; i--) {
    if (hash[i]) hashPos = i;
  }

  var str = hash[hashPos];
  for(var i = hashPos + 1; i <= n; i++) {
    var _str = '';
    var target = '';
    var num = 0;
    for(var j = 0, len = str.length; j < len; j++) {
      if (target === '') 
        target = str[j], num = 1;
      else if (str[j] === target)
        num++;
      else {
        _str += num + target;
        target = str[j];
        num = 1;
      }
    }

    if (num)
      _str += num + target;
    str = _str;

    hash[i] = str;
  }

  return str;
};