// Source : https://leetcode.com/problems/island-perimeter/
// Author : Han Zichi
// Date   : 2016-11-20

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  if (grid.length === 0)
    return 0;

  let n = grid.length
    , m = grid[0].length
    , ans = 0;

  const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let i = 0; i < n; i++)
    for (let j = 0; j < m; j++) {
      if (!grid[i][j])
        continue;

      for (let l = 0; l < 4; l++) {
        let neighbourCellX = i + dir[l][0];
        let neighbourCellY = j + dir[l][1];

        if (neighbourCellX < 0 || neighbourCellX >= n
            || neighbourCellY < 0 || neighbourCellY >= m) {
          ans += 1;
          continue;
        }

        ans += !grid[neighbourCellX][neighbourCellY];
      }
    }

  return ans;
};
