// Source : https://leetcode.com/problems/guess-number-higher-or-lower-ii/
// Author : Han Zichi
// Date   : 2016-07-21

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  // dp[i][j] 表示猜中 i ~ j 之间的数字的 max value
  var ans = [];
  for (var i = 0; i <= n; i++)
    ans[i] = [];

  return DP(ans, 1, n);
};

function DP(ans, from, to) {
  if (from >= to)
    return 0;

  if (ans[from][to])
    return ans[from][to];

  ans[from][to] = Infinity;

  // 以 i 分割
  for (var i = from; i <= to; i++) {
    var left = DP(ans, from, i - 1);
    var right = DP(ans, i + 1, to);

    var tmp = i + Math.max(left, right);
    ans[from][to] = Math.min(ans[from][to], tmp);
  }

  return ans[from][to];
}