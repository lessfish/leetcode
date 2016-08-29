// Source : https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Author : Han Zichi
// Date   : 2016-08-29

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  var inorderTraversal = function(root) {
    if (!root) return [];

    var stack = [], ans = [];

    stack.push(root);

    while (stack.length) {
      var elem = stack[stack.length - 1];

      if (elem.left === 1) {
        elem.left = 0;
        ans.push(elem.val);
      } else if (elem.left) {
        stack.push(elem.left);
        elem.left = 1;
      } else if (elem.left === null) {
        elem.left = 1;
      } else if (elem.right) {
        stack.push(elem.right);
        elem.right = null;
      } else {
        stack.pop();
      }
    }

    return ans;
  };

  var ans = inorderTraversal(root);
  return ans[k - 1];
};