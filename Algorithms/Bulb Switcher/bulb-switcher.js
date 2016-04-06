// Source : https://leetcode.com/problems/bulb-switcher/
// Author : Han Zichi
// Date   : 2016-01-20

/**
 * @param {number} n
 * @return {number}
 */

// 打表
var bulbSwitch = function(n) {
  var ans = -1 + Math.sqrt(1 + n);
  return Math.ceil(ans);
};