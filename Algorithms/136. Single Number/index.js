// Source : https://leetcode.com/problems/single-number/
// Author : Han Zichi
// Date   : 2015-08-09

/**
 * @param {number[]} nums
 * @return {number}
 */
 
var singleNumber = function(nums) {
  var ans = 0;
  for(var i = 0, len = nums.length; i < len; i++)
    ans ^= nums[i];

  return ans;    
};