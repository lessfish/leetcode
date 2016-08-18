// Source : https://leetcode.com/problems/basic-calculator-ii/
// Author : Han Zichi
// Date   : 2016-08-18

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.replace(/\s/g, '');
  var num = 0;
  var numStack = [];
  var sym = '+';  // 前一个符号，默认可为 '+'

  for (var i = 0, len = s.length; i < len; i++) {
    var item = s[i];

    if (~'+-*/'.indexOf(item) || i === len - 1) {
      (i === len - 1) && (num = num * 10 + (+item));

      if (sym === '-')
        numStack.push(-num);
      else if (sym === '+')
        numStack.push(+num);
      else if (sym === '*')
        numStack.push(numStack.pop() * num);
      else
        numStack.push(~~(numStack.pop() / num));

      num = 0;
      sym = item;
    } else {
      num = num * 10 + (+item);
    }
  }

  var ans = 0;
  numStack.forEach(function(item) {
    ans += item;
  });

  return ans;
};