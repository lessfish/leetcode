// Source : https://leetcode.com/problems/contains-duplicate/
// Author : Han Zichi
// Date   : 2015-08-09

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
  var hash = {};
  for(var i = 0, len = nums.length; i < len; i++) {
    if (hash[nums[i]]) return true;
    hash[nums[i]] = true;
  }
  return false;
};