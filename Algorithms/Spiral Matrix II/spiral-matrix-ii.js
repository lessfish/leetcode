// Source : https://leetcode.com/problems/spiral-matrix-ii/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {number} n
 * @return {number[][]}
 */

var dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
var ans;

function dfs(x, y, k, num, n) {
  ans[x][y] = num;

  if (num === n * n)
    return;

  // next imaging position
  var _x = x + dir[k][0]
    , _y = y + dir[k][1];

  var cur_k = k;

  if (_x < 0 || _x >= n || _y < 0 || _y >= n || ans[_x][_y]) 
    // need to make a turn
    cur_k = (k + 1) % 4;
  
  // next real position
  var _x = x + dir[cur_k][0]
    , _y = y + dir[cur_k][1];

  dfs(_x, _y, cur_k, num + 1, n);
}

var generateMatrix = function(n) {
  if (n === 0)
    return [];

  ans = [];
  for (var i = 0; i < n; i++)
    ans[i] = [];

  dfs(0, 0, 0, 1, n);
  return ans;
};