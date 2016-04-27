// Source : https://leetcode.com/problems/two-sum/
// Author : Han Zichi
// Date   : 2015-08-09

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
  var a = [];
  for (var i = 0, len = nums.length; i < len; i++) {
    var tmp = target - nums[i];
    if (a[tmp] !== undefined) return [a[tmp], i];
    a[nums[i]] = i;
  }
};