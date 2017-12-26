// Source : https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  root.level = 0
  let q = [root]
  let ans = []
  let [sum, num, curLevel] = [0, 0, 0]

  while (q.length) {
    let item = q.shift()
    if (item.level === curLevel) {
      sum += item.val 
      num += 1
    } else {
      ans.push(sum / num)
      curLevel += 1
      sum = item.val
      num = 1
    }

    if (item.left) {
      item.left.level = item.level + 1
      q.push(item.left)
    }
    if (item.right) {
      item.right.level = item.level + 1
      q.push(item.right)
    }
  }

  ans.push(sum / num)
  return ans
};