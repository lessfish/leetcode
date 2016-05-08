// Source : https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

var search = function(nums, target) {
  return nums.some(function(item, index, array) {
    return item === target;
  });
};