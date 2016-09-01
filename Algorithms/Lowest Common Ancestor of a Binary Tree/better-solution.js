// Source : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// Author : Han Zichi
// Date   : 2016-09-01

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  if (!root)
    return null;

  if (root === p || root === q)
    return root;

  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);

  if (left && right)
    return root;
  else if (left)
    return left;
  else
    return right;
};