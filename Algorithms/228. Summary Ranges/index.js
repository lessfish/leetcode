// Source : https://leetcode.com/problems/summary-ranges/
// Author : Han Zichi
// Date   : 2015-08-09

/**
 * @param {number[]} nums
 * @return {string[]}
 */

var summaryRanges = function(nums) {
  var ans = [];
  var tmp = [];
  for(var i = 0, len = nums.length; i < len; i++) {
    if (!tmp.length) tmp.push(nums[i]);
    else if (nums[i] === tmp[tmp.length - 1] + 1)
      tmp.push(nums[i]);
    else {
      if (tmp.length === 1) ans.push(tmp[0] + '');
      else ans.push(tmp[0] + '->' + tmp[tmp.length - 1]);
      tmp = [];
      tmp.push(nums[i]);
    }
  }

  if (tmp.length) {
    if (tmp.length === 1) ans.push(tmp[0] + '');
    else ans.push(tmp[0] + '->' + tmp[tmp.length - 1]);
  }

  return ans;
};