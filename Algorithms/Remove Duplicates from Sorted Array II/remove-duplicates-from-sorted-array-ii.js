// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// Author : Han Zichi
// Date   : 2015-08-12

/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function(nums) {
  var ans = 0
    , hash = [];

  for (var i = nums.length; i--; ) {
    if (!hash[nums[i]])
      hash[nums[i]] = 1, ans++;
    else if (hash[nums[i]] === 1)
      hash[nums[i]]++, ans++;
    else 
      nums.splice(i, 1);
  }

  return ans;
};