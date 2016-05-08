// Source : https://leetcode.com/problems/spiral-matrix/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var ans, m, n, hash;
var dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];

function dfs(x, y, k, m, n, matrix, num) { 
  ans.push(matrix[x][y]);
  hash[x][y] = true;

  if (num + 1 === m * n)
    return;

  // next direction
  var cur_k;

  // next imaging position
  var _x = x + dir[k][0]
    , _y = y + dir[k][1];

  if (_x < 0 || _x >= m || _y < 0 || _y >= n || hash[_x][_y]) 
    // need to turn
    cur_k = (k + 1) % 4;
  else 
    cur_k = k;

  // next real position
  var _x = x + dir[cur_k][0]
    , _y = y + dir[cur_k][1];
  dfs(_x, _y, cur_k, m, n, matrix, num + 1);
}

var spiralOrder = function(matrix) {
  if (matrix.length === 0)
    return [];
  ans = [],
  hash = [],
  m = matrix.length,
  n = matrix[0].length;

  for (var i = 0; i < m; i++)
    hash[i] = [];

  dfs(0, 0, 0, m, n, matrix, 0);
  return ans;
};