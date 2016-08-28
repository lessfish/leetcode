// Source : https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
// Author : Han Zichi
// Date   : 2016-08-28

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return dfs(0, nums.length - 1);

  function dfs(start, end) {
    if (start > end)
      return null;

    var mid = (start + end) >> 1;
    var node = new TreeNode(nums[mid]);
    node.left = dfs(start, mid - 1);
    node.right = dfs(mid + 1, end);

    return node;
  }
};