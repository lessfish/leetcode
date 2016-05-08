// Source : https://leetcode.com/problems/path-sum/
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
 * @param {number} sum
 * @return {boolean}
 */


var hasPathSum = function(root, sum) {
  if (!root)
    return false;

  if (!root.left && !root.right) {
    if (root.val === sum)
      return true;
    return false;
  }

  if (root.left)
    var a = hasPathSum(root.left, sum - root.val);

  if (root.right)
    var b = hasPathSum(root.right, sum - root.val);

  return Boolean(a || b);
};