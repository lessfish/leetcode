// Source : https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
// Author : Han Zichi
// Date   : 2016-11-20

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort(function(a, b) {return a - b;});

  let len = nums.length;
  let midValue = nums[len >> 1];
  let ans = 0;

  for (let i = 0; i < len; i++)
    ans += Math.abs(nums[i] - midValue);

  return ans;
};
