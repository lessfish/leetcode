// Source : https://leetcode.com/problems/subsets/
// Author : Han Zichi
// Date   : 2015-08-20

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var ans, res, len;

function dfs(index, nums) {
  var tmp = res.map(function(item) {
    return item;
  });

  ans.push(tmp);

  for (var i = index; i < len; i++) {
    res.push(nums[i]);
    dfs(i + 1, nums);
    res.pop();
  }
}

var subsets = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });

  ans = [],
  res = [],
  len = nums.length;

  dfs(0, nums);

  return ans;
};