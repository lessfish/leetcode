// Source : https://leetcode.com/problems/contains-duplicate-iii/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
  var len = nums.length;
  for (var i = 0; i < len; i++)
    for (var j = i + 1; j <= Math.min(i + k, len - 1); j++)
      if (Math.abs(nums[i] - nums[j]) <= t) return true;
  return false;
};