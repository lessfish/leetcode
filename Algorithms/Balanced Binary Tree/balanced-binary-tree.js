// Source : https://leetcode.com/problems/balanced-binary-tree/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var ans;

function dfs(root) {
  if (!root) return;
  
  var a = root.left ? dfs(root.left) : 0
    , b = root.right ? dfs(root.right) : 0;

  if (Math.abs(a - b) > 1) {
    ans = false;
  }

  return Math.max(a, b) + 1;
}

var isBalanced = function(root) {
  ans = true;
  dfs(root);
  return ans;
};