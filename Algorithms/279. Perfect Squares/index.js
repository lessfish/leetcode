// Source : https://leetcode.com/problems/perfect-squares/
// Author : Han Zichi
// Date   : 2015-09-21

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  var dp = [];
  
  for (var i = 1; i <= n; i++)
    dp[i] = Infinity;

  dp[0] = 0;

  for (var i = 0; i <= n; i++) 
    for (var j = 1; ; j++) {
      if (i + j * j > n) break;
      dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
    }
  
  return dp[n];
};