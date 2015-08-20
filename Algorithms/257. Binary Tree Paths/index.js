// Source : https://leetcode.com/problems/binary-tree-paths/
// Author : Han Zichi
// Date   : 2015-08-17

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

var ans, res;

function dfs(root) {
  if (!root) return;

  res.push(root.val);

  if (!root.left && !root.right) {
    var str = res.reduce(function(pre, item) {
      return pre + '->' + item;
    });

    str = str.toString();

    ans.push(str);
    res.pop();
    return;
  }

  if (root.left) 
    dfs(root.left);
  
  if (root.right)
    dfs(root.right);

  res.pop();
}

var binaryTreePaths = function(root) {
  ans = [], res = [];
  dfs(root);
  return ans;
};