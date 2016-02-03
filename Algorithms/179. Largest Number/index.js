// Source : https://leetcode.com/problems/largest-number/
// Author : Han Zichi
// Date   : 2016-02-02

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort(function(a, b) {
    return (b + '' + a) - (a + '' + b);
  });

  var ans = nums.join('');

  for (var i = 0; i < ans.length - 1; i++) {
    if (ans[i] !== '0')
      break;
  }
  
  return ans.substring(i);
};