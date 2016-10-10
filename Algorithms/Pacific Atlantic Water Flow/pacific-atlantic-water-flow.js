// Source : https://leetcode.com/problems/pacific-atlantic-water-flow/
// Author : Han Zichi
// Date   : 2016-10-10

"use strict";

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let m = matrix.length;

  if (m === 0)
    return [];

  let n = matrix[0].length;


  // top-left reach
  let hashA = [];
  for (let i = 0; i < m; i++)
    hashA[i] = [];

  let qA = [];
  for (let i = 0; i < n; i++) {
    qA.push([0, i, matrix[0][i]]);
    hashA[0][i] = true;
  }

  for (let i = 1; i < m; i++) {
    qA.push([i, 0, matrix[i][0]]);
    hashA[i][0] = true;
  }

  help(qA, hashA);

  // right-bottom reach
  let hashB = [];
  for (let i = 0; i < m; i++)
    hashB[i] = [];

  let qB = [];
  for (let i = 0; i < n; i++) {
    qB.push([m - 1, i, matrix[m - 1][i]]);
    hashB[m - 1][i] = true;
  }

  for (let i = 0; i < m - 1; i++) {
    qB.push([i, n - 1, matrix[i][n - 1]]);
    hashB[i][n - 1] = true;
  }

  help(qB, hashB);

  // BFS
  function help(q, hash) {
    while (q.length) {
      let item = q.shift();
      let [x, y, height] = [item[0], item[1], item[2]];
      for (let i = 0; i < 4; i++) {
        let nx = x + dir[i][0];
        let ny = y + dir[i][1];

        if (nx < 0 || nx >= m || ny < 0 || ny >= n || hash[nx][ny] || matrix[nx][ny] < matrix[x][y])
          continue;

        q.push([nx, ny, matrix[nx][ny]]);
        hash[nx][ny] = true;
      }
    }
  }

  // get answer
  let ans = [];
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (hashA[i][j] && hashB[i][j])
        ans.push([i, j]);
    }

  return ans;
};