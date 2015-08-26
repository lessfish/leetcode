// Source : https://leetcode.com/problems/palindrome-partitioning/
// Author : Han Zichi
// Date   : 2015-08-24

/**
 * @param {string} s
 * @return {string[][]}
 */

var dp, len, str;
var ans;

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

function getSubstring(from, to) {
  var s = str.slice(from, to);
  return s.replace(/#/g, '');
}

function dfs(index) {
  if (index === len || index === len - 1) {
    var tmp = res.concat();
    ans.push(tmp);
    return;
  }

  for (var i = index; i < len; i++) {
    if (i - dp[i] + 1 <= index) {
      if (dp[i] === 1 && str[i] === '#') continue;
      var tmp = getSubstring(index, 2 * i - index + 1);
      if (tmp === '') continue;
      res.push(tmp);
      dfs(2 * i - index + 1);
      // backtracking
      res.pop();
    }
  }
}

var partition = function(s) {
  Manacher(s); 
  ans = [], res = []; // store substrings
  dfs(1);
  return ans;
};