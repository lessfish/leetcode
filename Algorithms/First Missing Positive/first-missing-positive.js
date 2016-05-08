// Source : https://leetcode.com/problems/first-missing-positive/
// Author : Han Zichi
// Date   : 2015-08-09

/**
 * @param {number[]} nums
 * @return {number}
 */

var firstMissingPositive = function(nums) {
  var hash = [];
  for(var i = 0, len = nums.length; i < len; i++)
    if (nums[i] <= 0) continue;
    else hash[nums[i]] = true;

  for(var i = 1; ; i++) 
    if (!hash[i])
      return i;
};