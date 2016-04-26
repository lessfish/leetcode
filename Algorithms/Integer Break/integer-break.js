// Source : https://leetcode.com/problems/integer-break/
// Author : Han Zichi
// Date   : 2016-04-26

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  // n === 2 and n === 3 are special cases
  if (n === 2)
    return 1;

  if (n === 3)
    return 2;

  var dp = [];

  dp[0] = 1;
  dp[1] = 1;

  for (var i = 2; i <= n; i++)
    dp[i] = -1;

  for (var i = 2; i <= n; i++)
    // j + (i - j) = i;
    for (var j = 0; j < i; j++) {
      dp[i] = Math.max(dp[i], dp[j] * (i - j));
    }

  return dp[n];
};