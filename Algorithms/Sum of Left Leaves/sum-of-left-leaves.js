// Source : https://leetcode.com/problems/sum-of-left-leaves/
// Author : Han Zichi
// Date   : 2016-09-26

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  let ans = 0;

  root && root.left && dfs(root.left, 1);
  root && root.right && dfs(root.right, 0);

  function dfs(node, pos) {
    pos && node && !node.left && !node.right && (ans += node.val);

    node && node.left && dfs(node.left, 1);
    node && node.right && dfs(node.right, 0);
  }

  return ans;
};