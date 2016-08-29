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

  // use BFS
  var q = [{node: root, step: 0}];

  while (q.length) {
    var item = q.shift();
    var node = item.node;
    var step = item.step;

    node.left && q.push({node: node.left, step: step + 1});
    node.right && q.push({node: node.right, step: step + 1});

    q.length && (step === q[0].step) && (node.next = q[0].node);
  }
};