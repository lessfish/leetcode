// Source : https://leetcode.com/problems/fizz-buzz/
// Author : Han Zichi
// Date   : 2016-10-17

"use strict";

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    let str = '';
    if (i % 3 === 0)
      str += 'Fizz';
    if (i % 5 === 0)
      str += 'Buzz';
    if (str === '')
      str += i;

    ans.push(str);
  }

  return ans;
};