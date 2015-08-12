// Source : https://leetcode.com/problems/maximum-subarray/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  var maxn = -Number.MAX_VALUE;
  var sum = 0;
  nums.forEach(function(item, index, array) {
    sum += item;
    if (sum > maxn)
      maxn = sum;
    if (sum < 0)
      sum = 0;
  });

  return maxn;
};