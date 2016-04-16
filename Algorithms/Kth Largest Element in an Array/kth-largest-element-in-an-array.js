// Source : https://leetcode.com/problems/kth-largest-element-in-an-array/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function(nums, k) {
  nums.sort(function(a, b) {
    return b - a;
  });
  
  return nums[k - 1];
};