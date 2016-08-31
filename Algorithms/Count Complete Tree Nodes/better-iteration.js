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

  var ans = 0;

  while (root) {
    var l = findDepth(root.left)
      , r = findDepth(root.right);

    if (l === r) {
      ans += (1 << l);
      root = root.right;
    }
    else {
      ans += (1 << r);
      root = root.left;
    }
  }

  return ans;

  function findDepth(node) {
    var num = 0;
    while (node) {
      num++;
      node = node.left;
    }
    return num;
  }
};