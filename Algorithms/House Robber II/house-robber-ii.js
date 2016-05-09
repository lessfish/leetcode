// Source : https://leetcode.com/problems/house-robber-ii/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var len = nums.length;
  if (!len) return 0;

  if (len === 1) 
    return nums[0];
  
  var dp = [];
  dp[0] = [];
  dp[0][0] = 0, // not steal 1st room & not steal this room
  dp[0][1] = 0, // not steal 1st & steal this room
  dp[0][2] = 0, // steal 1st & not steal this room
  dp[0][3] = nums[0]; // steal 1st & steal this room

  for (var i = 1; i < len; i++) {
    dp[i] = [];
    
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]);
    dp[i][1] = nums[i] + dp[i - 1][0];

    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][3]);
    dp[i][3] = nums[i] + dp[i - 1][2];
  }

  return Math.max(dp[len - 1][0], dp[len - 1][1], dp[len - 1][2]);
};