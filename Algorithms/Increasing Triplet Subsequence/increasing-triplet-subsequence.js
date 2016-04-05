// Source : https://leetcode.com/problems/increasing-triplet-subsequence/
// Author : Han Zichi
// Date   : 2016-02-28

// 用 first, second 两个变量维护 increasing 数组的前两个数
// 用 first2, second2 两个变量维护 increasing "备胎" 数组
// 比如 [1, 2, -3, -2, -1]
// 一开始 first = 1, second = 2
// 然后 first2 = -3, second2 = -2
// 之后用 first2, second2 取代 first 和 second


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  var first, second, first2, second2;

  for (var i = 0, len = nums.length; i < len; i++) {
    var item = nums[i];

    if (first === undefined) {
      first = item;
    } else if (second === undefined) {
      if (item > first) 
        second = item;
      else 
        first = item;
    } else {
      if (item > second)
        return true;
      else if (item > first && item < second)
        second = item;
      else {
        if (first2 === undefined)
          first2 = item;
        else if (second2 === undefined) {
          if (item > first2) {
            second2 = item;
            first = first2;
            second = second2;
            first2 = second2 = undefined;
          } else 
            first2 = item;
        }
      }
    }
  }

  return false;
};