// Source : https://leetcode.com/problems/predict-the-winner/
// Author : Han Zichi
// Date   : 2017-01-23

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
  let len = nums.length
    , isOdd = len & 1
    , dp = [];

  for (let i = 0; i < len; i++)
    dp[i] = [];

  for (let i = 0; i < len; i++) {
    if (isOdd)
      dp[i][i] = nums[i];
    else {
      if (i + 1 < len)
        dp[i][i + 1] = Math.max(nums[i], nums[i + 1]);
    }
  }

  let base = isOdd ? 2 : 3;

  for (let i = base; i < len; i += 2) {
    for (let j = 0; j < len; j++) {
      if (j + i >= len)
        break;
      let left = nums[j] + Math.min(dp[j + 1][j + i - 1], dp[j + 2][j + i]);
      let right = nums[j + i] + Math.min(dp[j][j + i - 2], dp[j + 1][j + i - 1]);
      dp[j][j + i] = Math.max(left, right);
    }
  }

  let sum = 0;
  for (let item of nums)
    sum += item;

  return dp[0][len - 1] >= sum - dp[0][len - 1];
};
