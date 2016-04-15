// Source : https://leetcode.com/problems/find-the-duplicate-number/
// Author : Han Zichi
// Date   : 2016-01-20

/**
 * @param {number[]} nums
 * @return {number}
 */

// 时间复杂度O(n) & 空间复杂度O(n)
// 如果要求时间复杂度O(nlogn) & 空间复杂度O(1) 的解法
// 提供一种思路。用一个 string 存储数字，用一个特殊字符隔开
// 比如 "1,2,2,3,3,4,5,6"
// 然后二分查找，插入，因为插入只是 string 的简单拼接，所以速度应该不慢

var findDuplicate = function(nums) {
  var hash = {};
  for (var i = 0, len = nums.length; i < len; i++) {
    var item = nums[i];
    if (!hash[item])
      hash[item] = true;
    else 
      return item;
  }
};