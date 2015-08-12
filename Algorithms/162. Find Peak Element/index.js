// Source : https://leetcode.com/problems/find-peak-element/
// Author : Han Zichi
// Date   : 2015-08-10

/**
 * @param {number[]} nums
 * @return {number}
 */

var findPeakElement = function(nums) {
  var len = nums.length;
  nums[-1] = nums[len] = -Number.MAX_VALUE;
  for(var i = 0; i < len; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1])
      return i;
  }  
};
