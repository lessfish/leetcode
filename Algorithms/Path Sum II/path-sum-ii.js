// Source : https://leetcode.com/problems/path-sum-ii/
// Author : Han Zichi
// Date   : 2015-08-14

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
 * @return {number[][]}
 */

var tmp = [];
var ans = [];

function dfs(root, sum) {
  if (!root)
    return;

  tmp.push(root.val);

  if (!root.left && !root.right) {
    if (root.val === sum) {
      var res = tmp.map(function(item) {
        return item;
      });

      ans.push(res);
    }
    return;
  }

  if (root.left) {
    dfs(root.left, sum - root.val);
    // recall
    tmp.pop();
  }

  if (root.right) {
    dfs(root.right, sum - root.val);
    // recall
    tmp.pop();
  }
}

var pathSum = function(root, sum) {
  tmp = [];
  ans = [];
  dfs(root, sum);
  return ans;
};