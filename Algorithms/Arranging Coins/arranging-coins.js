// Source : https://leetcode.com/problems/arranging-coins/
// Author : Han Zichi
// Date   : 2016-10-31

"use strict";

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let ans = Math.sqrt(1 + 8 * n) - 1;
  ans /= 2;

  return ~~ans;
};