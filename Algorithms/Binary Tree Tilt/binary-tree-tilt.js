// Source : https://leetcode.com/problems/binary-tree-tilt/description/
// Author : Fish.Yu
// Date   : 2017-12-26

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
var findTilt = function(root) {
  function sumOfNode(root) {
    if (!root) return 0 

    let left = sumOfNode(root.left)
    let right = sumOfNode(root.right)

    ans += Math.abs(left - right)

    return left + right + root.val
  }

  let ans = 0
  sumOfNode(root)
  return ans
};