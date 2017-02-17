// Source : https://leetcode.com/problems/find-largest-value-in-each-tree-row/
// Author : Han Zichi
// Date   : 2016-02-17

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
  let maxn = [];

  let dfs = (node, step) => {
    if (!node) return;
    if (maxn[step] === void 0)
      maxn[step] = node.val;
    else
      maxn[step] = Math.max(node.val, maxn[step]);
    dfs(node.left, step + 1);
    dfs(node.right, step + 1);
  };

  dfs(root, 0);
  return maxn;
};
