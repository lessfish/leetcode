// Source : https://leetcode.com/problems/set-matrix-zeroes/
// Author : Han Zichi
// Date   : 2015-08-10

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
  var n = matrix.length;
  var m = matrix[0].length;
  var a = [], b = [];

  for(var i = 0; i < n; i++)
    for(var j = 0; j < m; j++) 
      if (matrix[i][j] === 0)
        a[i] = b[j] = true;

  for(var i = 0; i < n; i++)
    for(var j = 0; j < m; j++) 
      if (a[i] || b[j])
        matrix[i][j] = 0;
};