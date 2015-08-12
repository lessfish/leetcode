// Source : https://leetcode.com/problems/climbing-stairs/
// Author : Han Zichi
// Date   : 2015-08-09

/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  var a = [];
  a[0] = 1, a[1] = 1;
  for(var i = 2; i <= n; i++)
    a[i] = a[i - 1] + a[i - 2];
  return a[n];
};