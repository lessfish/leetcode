// Source : https://leetcode.com/problems/number-of-1-bits/
// Author : Han Zichi
// Date   : 2015-08-21

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
  var ans = 0;
  while(n) {
    if (n & 1) ans ++;
    n /= 2;
  }
  
  return ans;
};