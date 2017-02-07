// Source : https://leetcode.com/problems/next-greater-element-i/
// Author : Han Zichi
// Date   : 2017-02-07

/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
  let ans = [];
  let len = nums.length;

  findNums.forEach((item) => {
    let pos = nums.indexOf(item);
    let hasNextGreaterElement = false;

    for (let i = pos + 1; i < len; i++) {
      if (nums[i] > item) {
        ans.push(nums[i]);
        hasNextGreaterElement = true;
        break;
      }
    }

    if (!hasNextGreaterElement)
      ans.push(-1);
  });

  return ans;
};
