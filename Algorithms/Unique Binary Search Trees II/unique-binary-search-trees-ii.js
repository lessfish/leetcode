// Source : https://leetcode.com/problems/unique-binary-search-trees-ii/
// Author : Han Zichi
// Date   : 2016-08-29

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (!n)
    return [];

  return dfs(1, n);

  function dfs(start, end) {
    if (start > end)
      return [null];

    var ret = [];

    // i as the root's value
    for (var i = start; i <= end; i++) {
      var left = dfs(start, i - 1);
      var right = dfs(i + 1, end);

      left.forEach(function(a) {
        right.forEach(function(b) {
          var node = new TreeNode(i);
          node.left = a;
          node.right = b;
          ret.push(node);
        });
      });
    }

    return ret;
  }
};