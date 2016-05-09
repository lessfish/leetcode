// Source : https://leetcode.com/problems/product-of-array-except-self/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number[]} nums
 * @return {number[]}
 */

function fn(array, idx) {
  var ans = 1;
  array.forEach(function(item, index, array) {
    if (idx !== index)
      ans *= item;
  });

  return ans;
}

var productExceptSelf = function(nums) {
  var tmp = nums.reduce(function(pre, cur, index, array) {
    return pre * cur;
  });

  var ans = nums.map(function(item, index, array) {
    if (item === 0)
      return fn(array, index);
    return tmp / item;
  });

  return ans;
};