// Source : https://leetcode.com/problems/basic-calculator/
// Author : Han Zichi
// Date   : 2016-08-22

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  var ans = 0;
  var num = 0;  // single number
  var sign = 1;
  var numStack = [];
  var symStack = [];

  for (var i = 0, len = s.length; i < len; i++) {
    var item = s[i];

    if ('0123456789'.indexOf(item) !== -1) {
      num = num * 10 + (+item);
    } else {
      ans += sign * num;
      num = 0;
      if (item === '+')
        sign = 1;
      else if (item === '-')
        sign = -1;
      else if (item === '(') {
        numStack.push(ans);
        symStack.push(sign);
        ans = 0;
        sign = 1;
      } else if (item === ')') {
        ans = symStack.pop() * ans + numStack.pop();
      }
    }
  }

  ans += sign * num;
  return ans;
};