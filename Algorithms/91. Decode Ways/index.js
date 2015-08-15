// Source : https://leetcode.com/problems/decode-ways/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (!s.length) return 0;
  if (s[0] === '0') return 0;

  var len = s.length
    , dp = [];

  for (var i = 0; i < len; i++) {
    dp[i] = [];
    if (i === 0) {
      dp[i][0] = 1;
      dp[i][1] = 1;
    } else {
      dp[i][0] = dp[i - 1][1],
      dp[i][1] = 0;

      if (s[i] !== '0')
        dp[i][1] += dp[i - 1][1];

      if (s[i - 1] !== '0') {
        var num = Number(s[i - 1] + s[i]);
        if (num >= 1 && num <= 26)
          dp[i][1] += dp[i - 1][0];
      }
    }
  }

  return dp[len - 1][1];
};