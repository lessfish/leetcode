// Source : https://leetcode.com/problems/guess-number-higher-or-lower-ii/
// Author : Han Zichi
// Date   : 2016-07-21

/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
  // ans[i][j] 表示从 [i, j] 中任取一个数字
  // 猜中这个数字至少需要花费的 money
  var ans = [];
  for (var i = 0; i <= n; i++)
    ans[i] = [];

  return DP(ans, 1, n);
};

function DP(ans, from, to) {
  // 如果 from >= to
  if (from >= to)
    return 0;

  // 如果 ans[from][to] 已经求得
  // 直接 return
  if (ans[from][to])
    return ans[from][to];

  // 先赋值 Infinity，便于之后的比较
  ans[from][to] = Infinity;

  // 现在要从 [from, to] 中猜数字
  // 假设先猜 i，i 可以是 [from, to] 中的任何数字，遍历之
  for (var i = from; i <= to; i++) {
    // left 为从 [from, i - 1] 猜对数字至少需要花费的 money
    var left = DP(ans, from, i - 1);
    // right 为从 [i + 1, to] 猜对数字至少需要花费的 money
    var right = DP(ans, i + 1, to);

    // tmp 为先猜 i，从 [from, to] 猜对数字至少需要花费的 money
    var tmp = i + Math.max(left, right);

    // 跟别的方案比较（即跟不是先猜 i 的方法比较）
    // 取最小值
    ans[from][to] = Math.min(ans[from][to], tmp);
  }

  return ans[from][to];
}