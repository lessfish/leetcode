// Source : https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
// Author : Han Zichi
// Date   : 2016-08-01

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  var arr = [];
  for (var i = 0, len = matrix.length; i < len; i++)
    for (var j = 0, _len = matrix[i].length; j < _len; j++)
      arr.push(matrix[i][j]);

  arr.sort(function(a, b) {
    return a - b;
  });

  return arr[k - 1];
};