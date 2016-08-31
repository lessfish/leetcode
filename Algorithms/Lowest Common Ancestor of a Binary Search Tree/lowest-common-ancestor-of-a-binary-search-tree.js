// Source : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Author : Han Zichi
// Date   : 2016-08-31


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
  var valueA = p.val;
  var valueB = q.val;
  var value  = root.val;

  if (valueA < value && valueB < value)
    return lowestCommonAncestor(root.left, p, q);
  else if (valueA > value && valueB > value)
    return lowestCommonAncestor(root.right, p, q);
  else
    return root;
};