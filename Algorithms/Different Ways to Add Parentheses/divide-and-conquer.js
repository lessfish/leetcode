// Source : https://leetcode.com/problems/different-ways-to-add-parentheses/
// Author : Han Zichi
// Date   : 2016-08-18

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  // save the possible values from the string input
  var ans = [];
  for (var i = 0, len = input.length; i < len; i++) {
    var item = input[i];
    if (~'+-*'.indexOf(item)) {
      var left = diffWaysToCompute(input.substring(0, i));
      var right = diffWaysToCompute(input.substring(i + 1));
      left.forEach(function(a) {
        right.forEach(function(b) {
          ans.push(eval('(' + a + ')' + item + '(' + b + ')'));
        });
      });
    }
  }

  !ans.length && ans.push(+input);
  return ans;
};