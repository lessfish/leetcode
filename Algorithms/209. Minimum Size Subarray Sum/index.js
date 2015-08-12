// Source : https://leetcode.com/problems/minimum-size-subarray-sum/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(s, nums) {
  var ans = Number.MAX_VALUE;
  var n = nums.length;
  // start pos
  for (var i = 0; i < n; i++) {
  	var sum = 0;
  	for (var j = i; j < n; j++) {
  		sum += nums[j];
  		if (sum < s) continue;
  		if (j - i + 1 >= ans) break;
  		ans = j - i + 1;
  		break;
  	}
  }

  return ans === Number.MAX_VALUE ? 0 : ans;
};