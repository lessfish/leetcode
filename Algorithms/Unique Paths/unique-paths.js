// Source : https://leetcode.com/problems/unique-paths/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var ans = [];
  for(var i = 0; i < m; i++)
    ans[i] = [];

  for(var i = 0; i < m; i++)
    for(var j = 0; j < n; j++) {
      if (i + j === 0) ans[i][j] = 1;
      else if (i === 0) ans[i][j] = ans[i][j - 1];
      else if (j === 0) ans[i][j] = ans[i - 1][j];
      else ans[i][j] = ans[i][j - 1] + ans[i - 1][j];
    }

  return ans[m - 1][n - 1];
};