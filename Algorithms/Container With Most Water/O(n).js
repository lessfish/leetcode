// Source : https://leetcode.com/problems/container-with-most-water/
// Author : Han Zichi
// Date   : 2016-08-07

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var start = 0
    , end = height.length - 1
    , maxn = 0;

  while (start <= end) {
    maxn = Math.max(maxn, Math.min(height[end], height[start]) * (end - start));

    if (height[end] < height[start])
      end --;
    else
      start ++;
  }

  return maxn;
};