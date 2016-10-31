// Source : https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/
// Author : Han Zichi
// Date   : 2016-10-31

"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let maxn = 0
    , mask = 0;

  for (let i = 31; i >= 0; i--) {
    mask |= (1 << i);

    let set = new Set();

    nums.forEach(function(item) {
      set.add(item & mask);
    });

    // 如果该位可取
    let tmp = maxn | (1 << i);

    for (let item of set) {
      // A ^ B = C
      // => (A ^ C = B) & (B ^ C = A)
      if (set.has(tmp ^ item))
        maxn = tmp;
    }
  }

  return maxn;
};