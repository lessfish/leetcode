// Source : https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
// Author : Han Zichi
// Date   : 2016-08-29
// Note   : You may only use constant extra space

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
  if (!root)
    return;

  if (root.left) {
    root.left.next = root.right;

    if (root.next)
      root.right.next = root.next.left;
  }

  connect(root.left);
  connect(root.right);
};