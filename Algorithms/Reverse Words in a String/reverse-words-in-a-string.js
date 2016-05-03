// Source : https://leetcode.com/problems/minimum-size-subarray-sum/
// Author : Han Zichi
// Date   : 2016-05-03

/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
  str = str.trim();
  str = str.replace(/\s+/g, ' ');
  var arr = str.split(' ').reverse();
  return arr.join(' ');
};