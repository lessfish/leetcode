// Source : https://leetcode.com/problems/binary-tree-level-order-traversal/
// Author : Han Zichi
// Date   : 2015-09-02

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  var ans = []
    , tmp = [root];

  while (tmp.length) {
    var res = []
      , a = [];

    for (var i = 0, len = tmp.length; i < len; i++) {
      if (!tmp[i]) continue;
      res.push(tmp[i].val);
      a.push(tmp[i].left);
      a.push(tmp[i].right);
    }

    tmp = a.concat();
    if (res.length)
      ans.push(res);
  }

  return ans;
};
