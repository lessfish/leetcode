// Source : https://leetcode.com/problems/word-search/
// Author : Han Zichi
// Date   : 2016-08-12

var f;
var hash;
var r;
var c;

// reset hash array
function clear() {
  hash = [];
  for (var i = 0; i < r; i++)
    hash[i] = [];
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  if (word.length === 0)
    return true;

  r = board.length;
  if (!r)
    return false;

  c = board[0].length;

  // 枚举起始点
  for (var i = 0; i < r; i++)
    for (var j = 0; j < c; j++) {
      var item = board[i][j];
      if (item !== word[0])
        continue;
      f = false;
      clear();
      hash[i][j] = true;
      dfs(i, j, item, word, 1, board);
      if (f)
        return true;
    }

  return false;
};

function dfs(x, y, str, word, index, board) {
  if (f)
    return;

  if (str === word) {
    f = true;
    return;
  }

  var dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (var i = 0; i < 4; i++) {
    var _x = x + dir[i][0];
    var _y = y + dir[i][1];
    if (_x < 0 || _x >= r || _y < 0 || _y >=c)
      continue;
    var item = board[_x][_y];
    if (hash[_x][_y] || item !== word[index])
      continue;
    hash[_x][_y] = true;
    dfs(_x, _y, str + item, word, index + 1, board);
    hash[_x][_y] = false;
  }
}