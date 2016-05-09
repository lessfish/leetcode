// Source : https://leetcode.com/problems/combination-sum-iii/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

function dfs(arr, last, num, k, sum, n) {
  if (num === k && sum === n) {
    var tmp = arr.map(function(item) {
      return item;
    });

    ans.push(tmp);
    return;
  }

  if (num > k || sum > n ) 
    return;

  for(var i = last + 1; i <= 9; i++) {
    arr[arr.length] = i;
    dfs(arr, i, num + 1, k, sum + i, n);
    arr.pop();
  }
}

var combinationSum3 = function(k, n) {
  ans = [];
  for(var i = 1; i <= 9; i++)
    dfs([i], i, 1, k, i, n);
  return ans;
};