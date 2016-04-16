// Source : https://leetcode.com/problems/number-of-islands/
// Author : Han Zichi
// Date   : 2015-08-18

/**
 * @param {character[][]} grid
 * @return {number}
 */
 
// you cannot modify a string, so you should use hash array

var dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
var n, m;

function bfs(q, grid, hash) {

  while (q.length) {
    var a = q.shift()
      , x = a[0]
      , y = a[1];

    for (var i = 0; i < 4; i++) {
      var _x = x + dir[i][0]
        , _y = y + dir[i][1];

      if (_x < 0 || _x >= n || _y < 0 || _y >= m) continue;
      if (grid[_x][_y] === '0' || hash[_x][_y]) continue;

      hash[_x][_y] = true;
      q.push([_x, _y]);
    }
  }
}

var numIslands = function(grid) {
  if (grid.length === 0) 
    return 0;

  var ans = 0
    , hash = [];

  n = grid.length, m = grid[0].length;

  for (var i = 0; i < n; i++)
    hash[i] = [];

  for (var i = 0; i < n; i++)
    for (var j = 0; j < m; j++) {
      if (grid[i][j] === '0' || hash[i][j]) continue;
      ans++,
      hash[i][j] = true;
      bfs([[i, j]], grid, hash);
    }

  return ans;
};