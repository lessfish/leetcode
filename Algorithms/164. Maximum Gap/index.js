// Source : https://leetcode.com/problems/maximum-gap/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2)
    return 0;

  nums.sort(function(a, b) {
    return a - b;
  });

  var ans = -1;
  nums.reduce(function(pre, cur, index, array) {
    ans = Math.max(ans, cur - pre);
    return cur;
  });

  return ans;
};