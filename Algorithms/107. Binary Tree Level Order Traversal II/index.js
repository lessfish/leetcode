// Source : https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
// Author : Han Zichi
// Date   : 2015-09-16

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
var levelOrderBottom = function(root) {
	if (!root) return [];

  var ans = [], tmp = [root];

  while (tmp.length) {
  	var res = [], _tmp = [];

  	tmp.forEach(function(item) {
  		res.push(item.val);
  		if (item.left)
  			_tmp.push(item.left);
  		if (item.right)
  			_tmp.push(item.right);
  	});

  	ans.push(res);
  	tmp = _tmp;
  }

  return ans.reverse();

};