// Source : https://leetcode.com/problems/majority-element-ii/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var majorityElement = function(nums) {
  var hash_num = []
    , len = nums.length
    , ans = []
    , hash_ans = [];

  nums.forEach(function(item, index, array) {
    if (!hash_num[item])
      hash_num[item] = 1;
    else 
      hash_num[item]++;

    if (!hash_ans[item] && hash_num[item] > len / 3) {
      hash_ans[item] = true;
      ans.push(item);
    }
  });

  return ans;
};