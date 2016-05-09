// Source : https://leetcode.com/problems/maximal-square/
// Author : Han Zichi
// Date   : 2016-02-07

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix.length)
    return 0;

  var n = matrix.length
    , m = matrix[0].length;

  var ans = 0;

  var dp = [];

  for (var i = 0; i < n; i++) 
    dp[i] = [];

  for (var i = 0; i < n; i++)
    for (var j = 0; j < m; j++) {
      if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(i && j ? dp[i - 1][j - 1] : 0, j ? dp[i][j - 1] : 0, i ? dp[i - 1][j] : 0) + 1;
        
        ans = dp[i][j] > ans ? dp[i][j] : ans;
      } else {
        dp[i][j] = 0;
      }
    }

  return ans * ans;
};