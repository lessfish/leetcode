// Source : https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// Author : Han Zichi
// Date   : 2016-09-01

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  var a = findTrace(root, p);
  var b = findTrace(root, q);

  var index = 0;
  while (a[index] && b[index] && a[index].a === b[index].a)
    index++;

  return a[index - 1].a;

  // find the trace
  function findTrace(root, node) {
    var ans = [{a: root}];

    while (true) {
      var item = ans[ans.length - 1];

      if (item.a === node)
        return ans;
      if (!item.left && item.a.left) {
        item.left = true;
        ans.push({a: item.a.left});
      } else if (!item.right && item.a.right) {
        item.right = true;
        ans.push({a: item.a.right});
      } else
        ans.pop();
    }
  }
};