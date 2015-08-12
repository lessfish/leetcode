// Source : https://leetcode.com/problems/reverse-bits/
// Author : Han Zichi
// Date   : 2015-08-10

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

var sum = [];
sum[0] = 1;
for(var i = 1; i <= 32; i++)
  sum[i] = 2 * sum[i - 1];

var reverseBits = function(n) {
  var tmp = n.toString(2);
  for(var i = tmp.length; i <= 31; i++) 
    tmp = '0' + tmp;
  var ans = 0;
  for(var i = 0, len = tmp.length; i < len; i++) {
    if (tmp[i] === '1')
      ans += sum[i];
  }
  return ans;
};