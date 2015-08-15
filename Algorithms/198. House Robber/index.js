// Source : https://leetcode.com/problems/house-robber/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var len = nums.length;
  if (!len) return 0;

  var dp = [];
  dp[0] = [];
  dp[0][0] = 0, // not steal 1st room
  dp[0][1] = nums[0]; // steal 1st room

  for (var i = 1; i < len; i++) {
    dp[i] = [];

    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = dp[i - 1][0] + nums[i];
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1]);
};