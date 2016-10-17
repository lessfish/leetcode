// Source : https://leetcode.com/problems/battleships-in-a-board/
// Author : Han Zichi
// Date   : 2016-10-17

"use strict";

/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
  const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const m = board.length;
  const n = board[0].length;
  const hash = [];
  let ans = 0;

  for (let i = 0; i < m; i++)
    hash[i] = [];

  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) {
      if (board[i][j] === '.' || hash[i][j])
        continue;
      hash[i][j] = true;
      ans++;
      dfs(i, j);
    }

  function dfs(x, y) {
    for (let i = 0; i < 4; i++) {
      let nx = x + dir[i][0];
      let ny = y + dir[i][1];
      if (nx < 0 || nx >= m || ny < 0 || ny >= n || board[nx][ny] === '.' || hash[nx][ny])
        continue;
      hash[nx][ny] = true;
      dfs(nx, ny);
    }
  }

  return ans;
};