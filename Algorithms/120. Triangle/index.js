// Source : https://leetcode.com/problems/triangle/
// Author : Han Zichi
// Date   : 2015-08-10

/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function(triangle) {
  var n = triangle.length;
  var tmp = [];
  for(var i = 0; i <= n; i++)
    tmp[i] = [];
  for(var j = 0; j <= n; j++)
    tmp[n][j] = 0;

  for(var i = n - 1; i >= 0; i--) 
    for(var j = 0; j < triangle[i].length; j++) {
      tmp[i][j] = Math.min(tmp[i + 1][j], tmp[i + 1][j + 1]) + triangle[i][j];
    }

  return tmp[0][0];
};