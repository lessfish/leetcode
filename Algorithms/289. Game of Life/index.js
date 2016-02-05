// Source : https://leetcode.com/problems/game-of-life/
// Author : Han Zichi
// Date   : 2016-02-05

// 简单模拟题

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  var iLen = board.length
    , jLen = board[0].length;

  var tmp = [];
  for (var i = 0; i < iLen; i++)
    tmp[i] = [];

  var dir = [[1, 0], [0, 1], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [-1, -1]];

  for (var i = 0; i < iLen; i++)
    for (var j = 0; j < jLen; j++) {
      var item = board[i][j];
      var liveNeighbours = 0;
      for (var k = 0; k < 8; k++) {
        var x = i + dir[k][0];
        var y = j + dir[k][1];
        if (x < 0 || x >= iLen || y < 0 || y >= jLen) 
          continue;
        liveNeighbours += board[x][y];
      }

      if (item) {
        if (liveNeighbours === 2 || liveNeighbours === 3)
          tmp[i][j] = 1;
        else 
          tmp[i][j] = 0;
      } else {
        if (liveNeighbours === 3)
          tmp[i][j] = 1;
        else 
          tmp[i][j] = 0;
      }
    }

  for (var i = 0; i < iLen; i++)
    for (var j = 0; j < jLen; j++)
      board[i][j] = tmp[i][j];
};