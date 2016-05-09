// Source : https://leetcode.com/problems/next-permutation/
// Author : Han Zichi
// Date   : 2016-02-04

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  var len = nums.length;

  var flag = false;

  var pos, changePos;

  for (var i = len - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      flag = true;
      pos = i;
      break;
    }
  }

  if (!flag) {
    nums.sort(function(a, b) {
      return a - b;
    });
  } else {
    for (var i = len - 1; ; i--) 
      if (nums[i] > nums[pos]) {
        var tmp = nums[i];
        nums[i] = nums[pos];
        nums[pos] = tmp;
        break;
      }

    var tmp = nums.slice(pos + 1).sort(function(a, b) {
      return a - b;
    });

    nums.length = pos + 1;

    Array.prototype.push.apply(nums, tmp);
  }

};