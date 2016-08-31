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

  var depth = 0;

  // find the depth of the tree
  var node = root;
  while (node) {
    depth++;
    node = node.left;
  }

  var minn = 1 << (depth - 1);
  var maxn = (1 << depth) - 1;
  var start = minn;
  var end = maxn;

  // binary search
  while (start <= end) {
    var mid = (start + end) >> 1;
    if (isExisting(mid, minn, maxn, root))
      start = mid + 1;
    else
      end = mid - 1;
  }

  return end;

  function isExisting(num, left, right, node) {
    if (left === right)
      return !!node;
    var tmp = (left + right) >> 1;
    if (num <= tmp)
      return isExisting(num, left, tmp, node.left);
    else
      return isExisting(num, tmp + 1, right, node.right);
  }
};