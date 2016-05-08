// Source : https://leetcode.com/problems/merge-intervals/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
  intervals.sort(function(a, b) {
    if (a.start !== b.start)
      return a.start - b.start; // from small to big
    return a.end - b.end;
  });

  var len = intervals.length
    , ans = []
    , start
    , end;

  for (var i = 0; i < len; i++) {
    var s = intervals[i].start
      , e = intervals[i].end;

    // begin a new one
    if (start === undefined)
      start = s, end = e;
    else if (s <= end)
      end = Math.max(e, end);
    else {
      var obj = new Interval(start, end);
      ans.push(obj);
      start = s;
      end = e;
    }
  }

  if (start !== undefined) {
    var obj = new Interval(start, end);
    ans.push(obj);
  }

  return ans;
};
