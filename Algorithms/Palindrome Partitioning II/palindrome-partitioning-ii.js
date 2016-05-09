// Source : https://leetcode.com/problems/palindrome-partitioning-ii/
// Author : Han Zichi
// Date   : 2015-08-24

/**
 * @param {string} s
 * @return {number}
 */

var dp, len, str;

// get the dp[]
function Manacher(s) {
  var maxn = 0
    , idx = 0;
  dp = [], 
  str = '*#';

  var i;
  for (i = 0, len = s.length; i < len; i++)
    str += s[i] + '#';

  for (i = 1, len = str.length; i < len; i++) {
    if (maxn > i) dp[i] = Math.min(dp[2 * idx - i], maxn - i);
    else dp[i] = 1;

    while (str[i - dp[i]] === str[i + dp[i]]) dp[i]++;

    if (dp[i] + i > maxn)
      maxn = dp[i] + i, idx = i;
  }
}

var minCut = function(s) {
  Manacher(s);
  var ans = [];  // ans[i] represent the minCutNum of the starting i elements
  ans[0] = 0;
  for (var i = 1; i < len; i++)
    ans[i] = Infinity;
  for (var i = 1; i < len; i++) {
    var radius = dp[i];
    for (var j = 1; j <= radius; j++) 
      ans[i + j - 1] = Math.min(ans[i + j - 1], ans[i - j] + 1);
  }

  return Math.min(ans[len - 1], ans[len -2]) - 1;
};