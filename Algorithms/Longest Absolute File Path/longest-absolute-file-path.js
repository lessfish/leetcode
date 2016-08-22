// Source : https://leetcode.com/problems/longest-absolute-file-path/
// Author : Han Zichi
// Date   : 2016-08-22

var ans;

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  ans = 0;

  if (/\n(?!\t)/.test(input)) {
    var arr = input.split(/\n(?!\t)/);
    arr.forEach(function(item) {
      dfs(item, 0, 0);
    });
  } else {
    dfs(input, 0, 0);
  }

  return ans === 0 ? ans : ans - 1;
};

function dfs(str, depth, len) {
  var pattern = "\n";
  for (var i = 0; i <= depth; i++)
    pattern += "\t";

  pattern += "(?!\t)";

  var arr = str.split(new RegExp(pattern));
  var length = arr.length;

  if (length === 1) {
    if (str.indexOf('.') !== -1)
      ans = Math.max(ans, len + 1 + str.length);
  } else {
    var dir = arr[0];

    for (var i = 1; i < length; i++)
      dfs(arr[i], depth + 1, len + 1 + dir.length);
  }
}