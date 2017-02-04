// Source : https://leetcode.com/problems/find-mode-in-binary-search-tree/
// Author : Han Zichi
// Date   : 2017-02-04

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  let hash = {};

  let helper = (node) => {
    let val = node.val;
    hash[val] = (~~hash[val]) + 1;

    if (node.left)
      helper(node.left);
    if (node.right)
      helper(node.right);
  };

  root && helper(root);

  let ans = [];
  let maxn = -1;

  for (let key in hash) {
    let val = hash[key];

    if (val > maxn) {
      maxn = val;
      ans = [+key];
    } else if (val === maxn) {
      ans.push(+key);
    }
  }

  return ans;
};
