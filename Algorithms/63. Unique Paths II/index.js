// Source : https://leetcode.com/problems/unique-paths-ii/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

var uniquePathsWithObstacles = function(obstacleGrid) {
  var ans = []
  , m = obstacleGrid.length
  , n = obstacleGrid[0].length;
  
  for(var i = 0; i < m; i++)
    ans[i] = [];

  for(var i = 0; i < m; i++)
    for(var j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1)
        ans[i][j] = 0;
      else if (i + j === 0) ans[i][j] = 1;
      else if (i === 0) ans[i][j] = ans[i][j - 1];
      else if (j === 0) ans[i][j] = ans[i - 1][j];
      else ans[i][j] = ans[i][j - 1] + ans[i - 1][j];
    }

  return ans[m - 1][n - 1];
};