// Source : https://leetcode.com/problems/move-zeroes/
// Author : Han Zichi
// Date   : 2015-09-20

var moveZeroes = function(nums) {
  for (var i = nums.length; i--; ) {
    if (!nums[i]) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};