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

  // left[n] 代表二叉树左子树从左到右的 value 数组
  var left = [];

  // right[n] 代表二叉树右子树从左到右的 value 数组
  var right = [];

  dfs(root.left, 1, left);
  dfs(root.right, 1, right);

  if (left.length !== right.length)
    return false;

  for (var i = 1, len = left.length; i < len; i++) {
    var a = left[i];
    var b = right[i];
    b.reverse();

    if (a.length !== b.length)
      return false;

    if (a.join('|') !== b.join('|'))
      return false;
  }

  return true;
};


function dfs(node, step, arr) {
  if (!arr[step])
    arr[step] = [];

  if (!node) {
    arr[step].push(null);
    return;
  }

  arr[step].push(node.val);

  dfs(node.left, step + 1, arr);
  dfs(node.right, step + 1, arr);
}