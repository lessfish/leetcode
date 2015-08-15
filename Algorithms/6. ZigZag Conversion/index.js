// Source : https://leetcode.com/problems/zigzag-conversion/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var ans, max_column;

function dfs(x, y, s, n, numRows) {
  ans[x][y] = s[n];

  if (s.length === n) {
    max_column = y;
    return;
  }

  if (y % (numRows - 1) === 0 && x !== numRows - 1) 
    dfs(x + 1, y, s, n + 1, numRows);
  else 
    dfs(x - 1, y + 1, s, n + 1, numRows);
}

var convert = function(s, numRows) {
  if (numRows === 1) 
    return s;

  ans = [];

  for (var i = 0; i < numRows; i++)
    ans[i] = [];

  dfs(0, 0, s, 0, numRows);

  var tmp = '';
  for (var i = 0; i < numRows; i++)
    for (var j = 0; j <= max_column; j++)
      if (ans[i][j] !== undefined)
        tmp += ans[i][j];

  return tmp;
};