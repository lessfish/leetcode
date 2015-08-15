// Source : https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
 * @return {number}
 */

var ans;

function dfs(root, sum) {
  if (!root.left && !root.right) {
    ans += sum * 10 + root.val;
    return;
  }

  if (root.left)
    dfs(root.left, sum * 10 + root.val);

  if (root.right)
    dfs(root.right, sum * 10 + root.val);
}

var sumNumbers = function(root) {
  if (root === null)
    return 0;

  ans = 0;
  dfs(root, 0);
  return ans;
};