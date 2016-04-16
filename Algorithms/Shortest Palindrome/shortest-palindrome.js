// Source : https://leetcode.com/problems/shortest-palindrome/
// Author : Han Zichi
// Date   : 2015-08-22

/**
 * @param {string} s
 * @return {string}
 */

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

  var pos;
  for (var i = 1; i < len; i++) {
    if (i === dp[i])
      pos = i;
  }

  var tmp = str[pos] === '#' ? '' : str[pos];
  for (var i = pos + 1; i < len; i++) {
    var res = str[i] === '#' ? '' : str[i];
    tmp = res + tmp + res;
  }

  return tmp;
}

var shortestPalindrome = function(s) {
  var str = Manacher(s);
  return str;
};