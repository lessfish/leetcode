// Source : https://leetcode.com/problems/longest-increasing-subsequence/
// Author : Han Zichi
// Date   : 2016-01-13

/**
 * @param {number[]} nums
 * @return {number}
 */

// Runtime: 152 ms
// Your runtime beats 100.00% of javascript submissions.

function binarySearch(a, target) {
  var start = 0
    , end = a.length - 1;

  while(start <= end) {
    var mid = ~~((start + end) >> 1);
    if (a[mid] >= target)
      end = mid - 1;
    else 
      start = mid + 1;
  }

  return end;
}

var lengthOfLIS = function(nums) {
  var a = [];

  nums.forEach(function(item) {
    var index = binarySearch(a, item) + 1;
    if (a[index] === undefined)
      a[index] = item;
    else 
      a[index] = Math.min(a[index], item);
  });

  return a.length;
};