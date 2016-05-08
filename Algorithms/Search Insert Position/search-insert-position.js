// Source : https://leetcode.com/problems/search-insert-position/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
  var hash = [];
  for (var i = 0, len = nums.length; i < len; i++)
    hash[nums[i]] = i;
  if (hash[target] !== undefined)
    return hash[target];

  nums[-1] = -Number.MAX_VALUE;
  nums[len] = Number.MAX_VALUE;

  for (var i = 0; i <= len; i++)
    if (nums[i - 1] < target && target < nums[i])
      return i;
};