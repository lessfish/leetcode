// Source : https://leetcode.com/problems/pascals-triangle-ii/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  var ans = [];

  for (var i = 0; i < rowIndex + 1; i++) {
    if (i === 0) {
      ans[i] = [1];
      continue;
    }

    ans[i] = [];
    for (var j = 0; j <= i; j++)
      if (j === 0)
        ans[i][j] = ans[i - 1][j];
      else if (j === i)
        ans[i][j] = ans[i - 1][j - 1];
      else 
        ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j];
  }
    
  return ans[rowIndex];
};