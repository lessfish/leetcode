// Source : https://leetcode.com/problems/symmetric-tree/
// Author : Han Zichi
// Date   : 2016-08-05

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
var isSymmetric = function(root) {
  if (!root)
    return true;

  return isMirror(root.left, root.right);
};

function isMirror(a, b) {
  if (!a && !b)
    return true;

  if (!a || !b)
    return false;

  return (a.val === b.val) && isMirror(a.left, b.right) && isMirror(a.right, b.left);
}
