// Source : https://leetcode.com/problems/third-maximum-number/
// Author : Han Zichi
// Date   : 2016-10-30

"use strict";

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let ans = [];

  nums.forEach(function(item) {
    let len = ans.length;
    if (len === 0)
      ans.push(item);
    else if (len === 1) {
      if (item > ans[0])
        ans.push(item);
      else if (item < ans[0])
        ans.unshift(item);
    } else if (len === 2) {
      if (item < ans[0])
        ans.unshift(item);
      else if (item > ans[0] && item < ans[1])
        ans.splice(1, 0, item);
      else if (item > ans[1])
        ans.push(item);
    } else if (len === 3) {
      if (item > ans[0] && item !== ans[1] && item !== ans[2]) {
        ans.shift();
        if (item < ans[0])
          ans.unshift(item);
        else if (item > ans[0] && item < ans[1])
          ans.splice(1, 0, item);
        else if (item > ans[1])
          ans.push(item);
      }
    }
  });

  return ans.length === 3 ? ans[0] : ans.pop();
};