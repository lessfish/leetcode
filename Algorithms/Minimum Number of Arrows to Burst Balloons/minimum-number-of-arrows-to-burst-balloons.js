// Source : https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/
// Author : Han Zichi
// Date   : 2016-11-17

// sort + greedy

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  points.sort(function(a, b) {return a[0] - b[0];});

  let ans = 0;
  let preInterval = null;

  for (let i = 0, len = points.length; i < len; i++) {
    let item = points[i];

    if (preInterval === null) {
      preInterval = item;
    } else {
      if (item[0] > preInterval[1]) {
        ans++;
        preInterval = item;
      } else {
        preInterval[0] = item[0];
        preInterval[1] = Math.min(preInterval[1], item[1]);
      }
    }
  }

  preInterval !== null && (ans += 1);

  return ans;
};
