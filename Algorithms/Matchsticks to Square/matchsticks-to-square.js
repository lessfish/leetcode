// Source : https://leetcode.com/problems/matchsticks-to-square/
// Author : Han Zichi
// Date   : 2016-12-24

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
  function dfs(index, sum, count) {
    if (isOk)
      return;

    if (count === 3) {
      isOk = true;
      return;
    }

    if (sum === target)
      dfs(0, 0, count + 1);

    for (let i = index; i < len; i++) {
      if (hash[i]) continue;
      if (sum + nums[i] > target) continue;
      hash[i] = true;
      dfs(i + 1, sum + nums[i], count);
      hash[i] = false;
    }
  }

  if (nums.length === 0)
    return false;

  // nums.sort(function(a, b) {return b - a;});

  let total = 0
    , len = nums.length;

  for (let i = 0; i < len; i++)
    total += nums[i];

  if (total % 4)
    return false;

  let target = total / 4;
  let isOk = false;
  let hash = {};

  dfs(0, 0, 0);

  return isOk;
};
