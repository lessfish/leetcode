// Source : https://leetcode.com/problems/max-consecutive-ones/
// Author : Han Zichi
// Date   : 2017-01-15

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let ans = 0
    , sum = 0;

  nums.push(0);

  for (let item of nums) {
    if (item)
      sum += 1;
    else {
      ans = Math.max(ans, sum);
      sum = 0;
    }
  }

  return ans;
};
