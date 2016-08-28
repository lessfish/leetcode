// Source : https://leetcode.com/problems/unique-binary-search-trees/
// Author : Han Zichi
// Date   : 2016-08-28

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  var ans = [];
  ans[0] = 1, ans[1] = 1;

  for (var i = 2; i <= n; i++) {
    ans[i] = 0;

    // j as the root
    for (var j = 1; j <= i; j++)
      ans[i] += ans[j - 1] * ans[i - j];
  }

  return ans[n];
};