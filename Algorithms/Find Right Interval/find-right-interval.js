// Source : https://leetcode.com/problems/find-right-interval/
// Author : Han Zichi
// Date   : 2016-10-31

"use strict";

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number[]}
 */
var findRightInterval = function(intervals) {
  intervals.forEach(function(item, index) {
    item.index = index;
  });

  intervals.sort(function(a, b) {
    // different starting positions
    return a.start - b.start;
  });

  let len = intervals.length;
  for (let i = 0; i < len; i++) {
    let f = true;
    for (let j = i + 1; j < len; j++) {
      if (intervals[j].start >= intervals[i].end) {
        intervals[i].right = intervals[j].index;
        f = false;
        break;
      }
    }
    f && (intervals[i].right = -1);
  }

  intervals.sort(function(a, b) {
    // different starting positions
    return a.index - b.index;
  });

  let ans = [];
  intervals.forEach(function(item) {
    ans.push(item.right);
  });

  return ans;
};