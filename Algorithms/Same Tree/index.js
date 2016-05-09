// Source : https://leetcode.com/problems/same-tree/
// Author : Han Zichi
// Date   : 2015-08-17

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
var isSameTree = function(p, q) {
  if (p === null && q === null) return true;
  if (p === null && q !== null) return false;
  if (p !== null && q === null) return false;

  // p & q not null
  if (p.val !== q.val) return false;

  var a = isSameTree(p.left, q.left)
    , b = isSameTree(p.right, q.right);

  return a && b;
};
