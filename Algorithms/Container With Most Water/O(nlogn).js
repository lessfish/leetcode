// Source : https://leetcode.com/problems/container-with-most-water/
// Author : Han Zichi
// Date   : 2016-08-07

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  return Math.max(fn(height), fn(height.concat().reverse()));
};

function fn(height) {
  var len = height.length;
  var ans = [];
  var index = [];
  var maxn = 0;

  for (var i = 0; i < len; i++) {
    if (!i) {
      ans.push(height[i]);
      index.push(i);
    } else {
      // 找到 ans 数组中刚好 >= height[i] 的元素位置
      // 返回其下标
      var pos = binarySearch(ans, height[i]);

      if (pos !== ans.length)
        maxn = Math.max(maxn, height[i] * (i - index[pos]));

      if (height[i] > ans[ans.length - 1]) {
        ans.push(height[i]);
        index.push(i);
      }
    }
  }

  return maxn;
}

function binarySearch(a, target) {
  target += 1;
  var start = 0
    , end = a.length - 1;

  while(start <= end) {
    var mid = ~~((start + end) >> 1);
    if (a[mid] >= target)
      end = mid - 1;
    else
      start = mid + 1;
  }

  if (a[start - 1] === target - 1)
    start -= 1;
  return start;
}