// Source : https://leetcode.com/problems/subsets-ii/
// Author : Han Zichi
// Date   : 2015-08-20

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var ans, res, len;
var hashAns;

function dfs(index, nums) {
  var tmp = res.map(function(item) {
    return item;
  });

  if (!hashAns[tmp.toString()]) {
    hashAns[tmp.toString()] = true;
    ans.push(tmp);
  }
  
  for (var i = index; i < len; i++) {
    res.push(nums[i]);
    dfs(i + 1, nums);
    res.pop();
  }
}

var subsetsWithDup = function(nums) {
  nums.sort(function(a, b) {
    return a - b;
  });

  ans = [],
  res = [],
  len = nums.length,
  hashAns = [];

  dfs(0, nums);

  return ans;
};