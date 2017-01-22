// Source : https://leetcode.com/problems/non-overlapping-intervals/
// Author : Han Zichi
// Date   : 2017-01-22

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  if (!intervals.length)
    return 0;

  // remove => find longest
  intervals.sort((a, b) => {
    if (a.start !== b.start)
      return a.start - b.start;
    else
      return a.end - b.end;
  });

  let dp = []
    , len = intervals.length;

  for (let i = 0; i < len; i++) {
    dp[i] = 1;
    for (let j = i; j--; ) {
      if (intervals[i].start < intervals[j].end)
        continue;
      dp[i] = Math.max(dp[i], dp[j] + 1);
      break;  // key break, greedy
    }
  }

  return len - Math.max(...dp);
};
