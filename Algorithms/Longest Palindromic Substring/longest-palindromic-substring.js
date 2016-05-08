// Source : https://leetcode.com/problems/longest-palindromic-substring/
// Author : Han Zichi
// Date   : 2015-08-21

/**
 * @param {string} s
 * @return {string}
 */

// return the Longest Palindromic Substring of s
function Manacher(s) {
  var str = '*#'
    , dp = []
    , maxn = 0
    , idx = 0;

  for (var i = 0, len = s.length; i < len; i++)
    str += s[i] + '#';

  for (var i = 1, len = str.length; i < len; i++) {
    if (maxn > i) dp[i] = Math.min(dp[2 * idx - i], maxn - i);
    else dp[i] = 1;

    while (str[i - dp[i]] === str[i + dp[i]]) dp[i]++;

    if (dp[i] + i > maxn)
      maxn = dp[i] + i, idx = i;
  }

  var ans = 0
    , pos;

  for (var i = 1; i < len; i++) {
    if (dp[i] > ans)
      ans = dp[i], pos = i;
  }

  var f = str[pos] === '#'
    , tmp = f ? '' : str[pos]
    , startPos = f ? pos + 1 : pos + 2
    , endPos = f ? dp[pos] - 3 + startPos : dp[pos] - 4 + startPos;

  for (var i = startPos; i <= endPos; i += 2) 
    tmp = str[i] + tmp + str[i];

  return tmp;
}

var longestPalindrome = function(s) {
  var str = Manacher(s);
  return str;
};
