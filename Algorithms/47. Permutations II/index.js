// Source : https://leetcode.com/problems/permutations/
// Author : Han Zichi
// Date   : 2015-08-20

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var ans, res, hash, len;
var hashAns;

function dfs(num, nums) {
  if (num === len) {
    var tmp = res.map(function(item) {
      return item;
    });

    if (hashAns[tmp.toString()]) return;

    hashAns[tmp.toString()] = true;
    ans.push(tmp);
    return;
  }

  for (var i = 0; i < len; i++) {
    if (hash[i]) continue;
    hash[i] = true;
    res.push(nums[i]);
    dfs(num + 1, nums);
    hash[i] = false;
    res.pop();
  }
}

var permuteUnique = function(nums) {
  len = nums.length,
  ans = [],
  res = [],
  hash = [],
  hashAns = [];

  dfs(0, nums);
  return ans;
};