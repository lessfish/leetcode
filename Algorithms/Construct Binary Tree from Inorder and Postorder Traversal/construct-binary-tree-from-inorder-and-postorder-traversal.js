// Source : https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
// Author : Han Zichi
// Date   : 2016-08-26

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return dfs(inorder.length - 1, 0, inorder.length - 1);

  function dfs(index, startPos, endPos) {
    if (startPos > endPos)
      return null;

    var node = new TreeNode(postorder[index]);
    var pos = inorder.indexOf(postorder[index], startPos);

    node.left = dfs(index - (endPos - pos) - 1, startPos, pos - 1);
    node.right = dfs(index - 1, pos + 1, endPos);

    return node;
  }
};