// Source : https://leetcode.com/problems/n-queens/
// Author : Han Zichi
// Date   : 2015-09-11

/**
 * @param {number} n
 * @return {string[][]}
 */

var pos, ans;

function check(r, c) {
  for (var i = 1; i < r; i++) {
    if (Math.abs(i - r) === Math.abs(pos[i] - c))
      return true;

    if (c === pos[i])
      return true;
  }

  return false;
}

function dfs(r, n) {
  if (r === n + 1) {
    var tmp = [];
    for (var i = 1; i <= n; i++) {
      var str = '';
      for (var j = 1; j <= n; j++) 
        if (pos[i] === j)
          str += 'Q';
        else
          str += '.';
      tmp.push(str);
    }

    ans.push(tmp);
    return;
  }

  for (var i = 1; i <= n; i++) {
    if (check(r, i)) continue;
    pos[r] = i;
    dfs(r + 1, n);
  }
}

var solveNQueens = function(n) {
  pos = [], ans = [];
  dfs(1, n);
  return ans;
};