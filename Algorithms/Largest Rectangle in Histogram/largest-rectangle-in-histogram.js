// Source : https://leetcode.com/problems/largest-rectangle-in-histogram/
// Author : Han Zichi
// Date   : 2016-02-18

// 112 ms
// Your runtime beats 100.00% of javascriptsubmissions

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  heights.push(0);

  var maxn = 0;

  var stack = [];

  for (var i = 0, len = heights.length; i < len; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      var top = stack.pop();

      var nextTop = stack.length === 0 ? -1 : stack[stack.length - 1];

      maxn = Math.max((i - nextTop - 1) * heights[top], maxn);
    }
    
    stack.push(i);
  }

  return maxn;
};