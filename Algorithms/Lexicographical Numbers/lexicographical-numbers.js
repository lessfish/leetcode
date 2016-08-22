// Source : https://leetcode.com/problems/lexicographical-numbers/
// Author : Han Zichi
// Date   : 2016-08-22

var ans;
var index;

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  ans = [];
  index = -1;

  for (var i = 1; i <= 9; i++)
    dfs(i, n);

  return ans;
};

function dfs(num, n) {
  if (num > n)
    return;

  ans.push(num);

  for (var i = 0; i <= 9; i++)
    dfs(num * 10 + i, n);
}