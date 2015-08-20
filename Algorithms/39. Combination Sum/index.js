// Source : https://leetcode.com/problems/combination-sum/
// Author : Han Zichi
// Date   : 2015-08-18

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var ans, res;

function dfs(index, sum, candidates, target) {
  if (sum === target) {
    var tmp = res.map(function(item) {
      return item;
    });

    ans.push(tmp);
    return;
  }

  for (var i = index, len = candidates.length; i < len; i++) {
    if (sum + candidates[i] > target) continue;
    res.push(candidates[i]);
    dfs(i, sum + candidates[i], candidates, target);
    res.pop();
  }
}

var combinationSum = function(candidates, target) {
  ans = [];
  candidates.sort(function(a, b) {
    return a - b;
  });
  
  // choose the first number
  for (var i = 0, len = candidates.length; i < len; i++) {
    res = [candidates[i]];
    dfs(i, candidates[i], candidates, target);
  }

  return ans;
};