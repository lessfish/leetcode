// Source : https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
// Author : Han Zichi
// Date   : 2016-08-25

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return dfs(0, 0, preorder.length - 1);

  // the subTree values whose node value is preorder[index]
  // inorder[startPos] - inorder[endPos]
  function dfs(index, startPos, endPos) {
    if (startPos > endPos)
      return null;

    var node = new TreeNode(preorder[index]);
    var pos = inorder.indexOf(preorder[index], startPos);

    // node's left subNode's value is preorder[index + 1]
    // node's right subNode's value is preorder[index + pos - startPos + 1]
    node.left = dfs(index + 1, startPos, pos - 1);
    node.right = dfs(index + pos - startPos + 1, pos + 1, endPos);

    return node;
  }
};