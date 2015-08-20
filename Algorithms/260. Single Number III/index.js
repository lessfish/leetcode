// Source : https://leetcode.com/problems/single-number-iii/
// Author : Han Zichi
// Date   : 2015-08-18

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  var ans = []
    , hash = [];

  nums.forEach(function(item) {
    if (!hash[item])
      hash[item] = 1;
    else 
      hash[item]++;
  });

  nums.forEach(function(item) {
    if (hash[item] === 1)
      ans.push(item);
  });

  return ans;
};