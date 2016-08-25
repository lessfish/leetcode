// Source : https://leetcode.com/problems/trapping-rain-water/
// Author : Han Zichi
// Date   : 2016-08-25

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var len = height.length;
  var leftMaxn = [];
  var rightMaxn = [];

  var maxn = 0;
  for (var i = 0; i < len; i++) {
    leftMaxn[i] = maxn;
    maxn = Math.max(maxn, height[i]);
  }

  maxn = 0;
  for (var i = height.length; i--; ) {
    rightMaxn[i] = maxn;
    maxn = Math.max(maxn, height[i]);
  }

  var sum = 0;
  for (var i = 0; i < len; i++) {
    var left = leftMaxn[i];
    var right = rightMaxn[i];
    var minn = Math.min(left, right);

    if (minn > height[i]) {
      sum += minn - height[i];
    }
  }

  return sum;
};