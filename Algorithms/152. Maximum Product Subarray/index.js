// Source : https://leetcode.com/problems/maximum-product-subarray/
// Author : Han Zichi
// Date   : 2015-08-26

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  var ans = -Infinity
    , res = 1
    , tmp = 1;

  nums.forEach(function(item) {
    var _res = res * item
      , _tmp = tmp * item;

    ans = Math.max(ans, _res, _tmp);

    res = Math.max(_res, _tmp, 1);
    tmp = Math.min(_res, _tmp, 1);
  });

  return ans;
};