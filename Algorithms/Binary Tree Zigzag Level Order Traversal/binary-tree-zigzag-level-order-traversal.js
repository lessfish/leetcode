// Source : https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
  var maxn = -1;
  var ans = [];

  dfs(root, 0);

  function dfs(node, step) {
    if (!node)
      return;

    maxn = step > maxn ? step : maxn;

    if (!ans[step])
      ans[step] = [];

    ans[step].push(node.val);

    dfs(node.left, step + 1);
    dfs(node.right, step + 1);
  }

  for (var i = 0; i <= maxn; i++)
    (i & 1) && (ans[i].reverse());

  return ans;
};