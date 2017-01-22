// Source : https://leetcode.com/problems/target-sum/
// Author : Han Zichi
// Date   : 2017-01-22
// Runtime: 122 ms

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let total = 0
    , len = nums.length;

  for (let item of nums)
    total += item;

  let target = total - S;

  if (target & 1)
    return 0;
  if (target < 0)
    return 0;

  target >>= 1;

  let dp = [];
  for (let i = 0; i <= target; i++)
    dp[i] = 0;
  dp[0] = 1;

  for (let item of nums) {
    for (let i = target; i >= 0; i--) {
      if (i - item < 0)
        break;
      dp[i] += dp[i - item];
    }
  }

  return dp[target];
};
