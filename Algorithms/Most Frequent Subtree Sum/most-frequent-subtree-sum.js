// Source : https://leetcode.com/problems/most-frequent-subtree-sum/
// Author : Han Zichi
// Date   : 2017-02-07

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
var findFrequentTreeSum = function(root) {
  if (!root)
    return [];

  let hash = [];

  let dfs = (node) => {
    let left = node.left ? dfs(node.left) : 0;
    let right = node.right ? dfs(node.right) : 0;
    let sum = node.val + left + right;

    hash[sum] = (~~hash[sum]) + 1;
    return sum;
  };

  dfs(root);

  let res = [];

  for (let key in hash) {
    res.push({
      key: +key,
      count: hash[key]
    });
  }

  res.sort((a, b) => (b.count - a.count));
  let ans = [];
  ans.push(res[0].key);

  for (let i = 1, len = res.length; i < len; i++) {
    if (res[i].count === res[0].count)
      ans.push(res[i].key);
  }

  return ans;
};
