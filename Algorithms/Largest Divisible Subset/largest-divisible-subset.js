// Source : https://leetcode.com/problems/largest-divisible-subset/
// Author : Han Zichi
// Date   : 2016-06-28

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  if (nums.length === 0)
    return [];

  nums.sort(function(a, b) {
    return a - b;
  });

  var ans = [];

  var pre = [];

  for (var i = 0, len = nums.length; i < len; i++) {
    ans[i] = 1;
    pre[i] = i;

    for (var j = 0; j < i; j++) 
      if (nums[i] % nums[j] === 0 && ans[j] + 1 > ans[i]) {
        ans[i] = ans[j] + 1;
        pre[i] = j;
      }
  }


  var maxn = 0;
  var maxnId;

  for (i = 0; i < len; i++) {
    if (ans[i] > maxn) {
      maxn = ans[i];
      maxnId = i;
    }
  }

  var ret = [];

  while(true) {
    if (maxnId === pre[maxnId]) {
      ret.push(nums[maxnId]);
      break;
    }

    ret.push(nums[maxnId]);
    maxnId = pre[maxnId];
  } 

  return ret;
};