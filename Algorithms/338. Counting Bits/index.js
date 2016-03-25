// Source : https://leetcode.com/problems/counting-bits/
// Author : Han Zichi
// Date   : 2016-03-25

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  var ans = Array(num + 1);
  for (var i = 0; i <= num; i++)
  	ans[i] = hammingWeight(i);

  return ans;
};

var hammingWeight = function(n) {
  n = ((n & 0xAAAAAAAA) >>> 1) + (n & 0x55555555);
  n = ((n & 0xCCCCCCCC) >>> 2) + (n & 0x33333333);
  n = ((n & 0xF0F0F0F0) >>> 4) + (n & 0x0F0F0F0F);
  n = ((n & 0xFF00FF00) >>> 8) + (n & 0x00FF00FF);
  n = ((n & 0xFFFF0000) >>> 16) + (n & 0x0000FFFF);
  return n;
};