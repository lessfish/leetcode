// Source : https://leetcode.com/problems/combinations/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

// return an array of k numbers with 1 ~ n

var ans = []
  , tmp = [];

function dfs(next, n, num, k) {
  if (num === k) {
    var res = tmp.map(function(item) {
      return item;
    });

    ans.push(res);
    return;
  }

  for (var i = next; i <= n; i++) {
    tmp.push(i);
    dfs(i + 1, n, num + 1, k);
    tmp.pop();
  }
}

var combine = function(n, k) {
  ans = []; 
  // select the 1st number
  for (var i = 1; i <= n; i++) {
    tmp[0] = i;
    dfs(i + 1, n, 1, k);
  }

  return ans;
};