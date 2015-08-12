// Source : https://leetcode.com/problems/minimum-path-sum/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[][]} grid
 * @return {number}
 */

var minPathSum = function(grid) {
  var n = grid.length
    , m = grid[0].length
    , ans = [];

  for (var i = 0; i < n; i++)
    ans[i] = [];

  for (var i = 0; i < n; i++)
    for (var j = 0; j < m; j++) {
      if (i + j === 0)
        ans[i][j] = grid[i][j];
      else if (i === 0)
        ans[i][j] = ans[i][j - 1] + grid[i][j];
      else if (j === 0)
        ans[i][j] = ans[i - 1][j] + grid[i][j];
      else
        ans[i][j] = grid[i][j] + Math.min(ans[i][j - 1], ans[i - 1][j]);
    }

  return ans[n - 1][m - 1];
};