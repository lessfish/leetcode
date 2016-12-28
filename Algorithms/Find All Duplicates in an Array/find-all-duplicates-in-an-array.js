// Source : https://leetcode.com/problems/find-all-duplicates-in-an-array/
// Author : Han Zichi
// Date   : 2016-12-28

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
  let len = nums.length;
  let ans = [];

  for (let i = 0; i < len; i++) {
    let item = nums[i];
    let val = Math.abs(item) - 1;

    if (nums[val] < 0)
      ans.push(val + 1);
    else
      nums[val] *= -1;
  }

  return ans;
};
