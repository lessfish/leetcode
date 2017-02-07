// Source : https://leetcode.com/problems/diagonal-traverse/
// Author : Han Zichi
// Date   : 2017-02-07

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
  let M = matrix.length;
  if (!M) return [];
  let N = matrix[0].length;

  let res = [];

  // first row
  for (let i = 0; i < N; i++) {
    let x = 0
      , y = i
      , tmp = [];

    while (true) {
      tmp.push(matrix[x][y]);
      x++;
      y--;

      if (x < 0 || x >= M || y < 0 || y >= N)
        break;
    }

    res.push(tmp);
  }

  // last column
  for (let i = 1; i < M; i++) {
    let x = i
      , y = N - 1
      , tmp = [];

    while (true) {
      tmp.push(matrix[x][y]);
      x++;
      y--;

      if (x < 0 || x >= M || y < 0 || y >= N)
        break;
    }

    res.push(tmp);
  }

  let ans = [];
  res.forEach(function(item, index) {
    if (!(index & 1)) {
      ans.push(...item.reverse());
    } else {
      ans.push(...item);
    }
  });

  return ans;
};
