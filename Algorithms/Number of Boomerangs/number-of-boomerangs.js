// Source : https://leetcode.com/problems/number-of-boomerangs/
// Author : Han Zichi
// Date   : 2016-11-15

"use strict";

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
  let len = points.length;
  let ans = 0;

  for (let i = 0; i < len; i++) { // as the middle one
    let p = new Map();
    for (let j = 0; j < len; j++) {
      if (i === j) continue;
      let dis = getDis(i, j);
      let count = ~~p.get(dis);
      ans += count;
      p.set(dis, count + 1);
    }
  }

  return ans * 2;

  function getDis(i, j) {
    return (points[i][0] - points[j][0]) * (points[i][0] - points[j][0])
        + (points[i][1] - points[j][1]) * (points[i][1] - points[j][1]);
  }
};
