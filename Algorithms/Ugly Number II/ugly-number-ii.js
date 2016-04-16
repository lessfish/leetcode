// Source : https://leetcode.com/problems/ugly-number-ii/
// Author : Han Zichi
// Date   : 2015-08-19

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  var dp = [], a, b, c;
  dp[0] = 1, a = b = c = 0;

  for (var i = 1; i < n; i++) {
    dp[i] = Math.min(dp[a] * 2, dp[b] * 3, dp[c] * 5);
    if (dp[i] === dp[a] * 2) a++;
    if (dp[i] === dp[b] * 3) b++;
    if (dp[i] === dp[c] * 5) c++;
  }  

  return dp[n - 1];
};