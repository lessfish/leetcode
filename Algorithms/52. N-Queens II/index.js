// Source : https://leetcode.com/problems/n-queens-ii/
// Author : Han Zichi
// Date   : 2015-09-11

function dfs(l, r, c, index, n) {
  if (index === n) 
    return 1;

  var ans = 0;

  for (var i = 0; i < n; i++) {
    var tmp = 1 << i;
    if ((tmp & l) || (tmp & r) || (tmp & c)) continue;
    ans += dfs((tmp | l) << 1, (tmp | r) >> 1, tmp | c, index + 1, n);
  }

  return ans;
}

var totalNQueens = function(n) {
  return dfs(0, 0, 0, 0, n);
};