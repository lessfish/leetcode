// Source : https://leetcode.com/problems/path-sum-iii/
// Author : Han Zichi
// Date   : 2016-10-24
// Runtime: 169 ms

"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  if (!root)
    return 0;

  let ans = 0;

  dfs(root, root.val);

  function dfs(node, tmp) {
    if (tmp === sum)
      ans++;

    node.left && dfs(node.left, tmp + node.left.val);
    node.right && dfs(node.right, tmp + node.right.val);
  }

  root.left && (ans += pathSum(root.left, sum));
  root.right && (ans += pathSum(root.right, sum));

  return ans;
};