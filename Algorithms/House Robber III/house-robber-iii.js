// Source : https://leetcode.com/problems/house-robber-iii/
// Author : Han Zichi
// Date   : 2016-03-17

// 记忆化搜索，从下往上递归

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
var rob = function(root) {

  if (!root)
    return 0;

  dfs(root);

  return Math.max(root.dp[0], root.dp[1]);
};


function dfs(node) {
  node.dp = [];
  // node.dp[0] 表示取了该节点的最值
  // node.dp[1] 表示不取该节点的最值
  
  if (node.left === null && node.right === null) {
    node.dp[0] = node.val;
    node.dp[1] = 0;
    return;
  }

  node.left && dfs(node.left);
  node.right && dfs(node.right);

  node.dp[0] = node.val + (node.left ? node.left.dp[1] : 0) + (node.right ? node.right.dp[1] : 0);
  node.dp[1] = (node.left ? Math.max(node.left.dp[0], node.left.dp[1]) : 0) + (node.right ? Math.max(node.right.dp[0], node.right.dp[1]) : 0);
}