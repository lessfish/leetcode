// Source : https://leetcode.com/problems/count-complete-tree-nodes/
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
 * @return {number}
 */
var countNodes = function(root) {
  if (!root)
    return 0;

  var l = findDepth(root.left)
    , r = findDepth(root.right);

  if (l === r)
    return (1 << l) + countNodes(root.right);
  else
    return (1 << r) + countNodes(root.left);

  function findDepth(node) {
    return node ? 1 + findDepth(node.left) : 0;
  }
};