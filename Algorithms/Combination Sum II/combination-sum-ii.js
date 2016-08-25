// Source : https://leetcode.com/problems/combination-sum-ii/
// Author : Han Zichi
// Date   : 2016-08-25


/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  candidates.sort(function(a, b) {
    return a - b;
  });

  var len = candidates.length;
  var res = [];
  var ans = [];

  dfs(0, 0);

  function dfs(index, sum) {
    if (sum > target)
      return;

    if (sum === target) {
      ans.push(res.concat());
      return;
    }

    for (var i = index; i < len; i++) {
      // Point!
      // remove the duplicate combinations
      if (i > index && candidates[i] === candidates[i - 1])
        continue;
      res.push(candidates[i]);
      dfs(i + 1, sum + candidates[i]);
      res.pop();
    }
  }

  return ans;
};