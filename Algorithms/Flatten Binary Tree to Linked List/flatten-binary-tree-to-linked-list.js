// Source : https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
// Author : Han Zichi
// Date   : 2016-05-03

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root)
    return;

  var arr = [];

  dfs(root, arr);

  for (var i = 0, len = arr.length; i < len - 1; i++)
    arr[i].right = arr[i + 1];
};

function dfs(node) {
  var left = node.left;
  var right = node.right;

  node.left = node.right = null;

  window.arr.push(node);

  left && dfs(left);
  right && dfs(right);
}