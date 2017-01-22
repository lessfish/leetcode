// Source : https://leetcode.com/problems/target-sum/
// Author : Han Zichi
// Date   : 2017-01-22

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let total = 0
    , len = nums.length;

  for (let item of nums)
    total += item;

  let target = total - S;

  if (target & 1)
    return 0;

  if (target < 0)
    return 0;

  target >>= 1;

  // select items from nums whose sum is `target`
  nums.sort((a, b) => b - a);  // 1000ms
  // nums.sort((a, b) => a - b);  // 1400ms

  let ans = 0;

  let dfs = (index, sum) => {
    if (sum === target) {
      ans++;
      // consider that nums contains 0
      // return;
    }

    if (index === len || sum > target)
      return;

    for (let i = index; i < len; i++)
      dfs(i + 1, sum + nums[i]);
  };

  dfs(0, 0);

  return ans;
};
