// Source : https://leetcode.com/problems/find-bottom-left-tree-value/
// Author : Han Zichi
// Date   : 2017-02-17

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
var findBottomLeftValue = function(root) {
  let res = [];

  let dfs = (node, step) => {
    if (res[step] === undefined)
      res[step] = node.val;

    node.left && dfs(node.left, step + 1);
    node.right && dfs(node.right, step + 1);
  };

  dfs(root, 0);
  return res.pop();
};
