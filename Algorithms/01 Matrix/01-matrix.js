// Source : https://leetcode.com/problems/01-matrix/#/description
// Author : Han Zichi
// Date   : 2016-03-27

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  // BFS
  let q = [];
  let hash = [];
  let [m, n] = [matrix.length, matrix[0].length];
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let i = 0; i < m; i++) {
    hash[i] = [];
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        q.push({x: i, y: j, step: 0});
        hash[i][j] = 0;
      }
    }
  }

  while (q.length) {
    let item = q.shift();
    let {x, y, step} = item;

    for (let i = 0; i < 4; i++) {
      let _x = x + dir[i][0];
      let _y = y + dir[i][1];
      if (_x < 0 || _x >= m || _y < 0 || _y >= n) continue;
      if (hash[_x][_y] !== undefined) continue;
      hash[_x][_y] = step + 1;
      q.push({x: _x, y: _y, step: step + 1});
    }
  }

  return hash;
};