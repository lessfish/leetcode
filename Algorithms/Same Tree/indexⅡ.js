// Source : https://leetcode.com/problems/same-tree/
// Author : Han Zichi
// Date   : 2015-08-12

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var f;

// if a is different from b, return true
function check(a, b) {
  if (a === null && b === null) return false;
  if (a === null && b !== null) return true;
  if (a !== null && b === null) return true;
  if (a.val === b.val) 
    return false;
  return true;
}

function dfs(a, b) {
  if (!f)
    return;

  if (check(a, b)) {
    f = false;
    return;
  }

  if (a && b && a.left !== undefined && b.left !== undefined)
    dfs(a.left, b.left);
  if (a && b && a.right !== undefined && b.right !== undefined)
    dfs(a.right, b.right);
}

var isSameTree = function(p, q) {
  f = true;
  dfs(p, q);
  return f;
};