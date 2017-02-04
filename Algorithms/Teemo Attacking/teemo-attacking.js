// Source : https://leetcode.com/problems/teemo-attacking/
// Author : Han Zichi
// Date   : 2017-02-04

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
  let ans = 0;

  for (let i = 0, len = timeSeries.length; i < len; i++) {
    if (i === len - 1) {
      ans += duration;
      continue;
    }

    let curItem = timeSeries[i]
      , nextItem = timeSeries[i + 1];

    if (curItem + duration <= nextItem)
      ans += duration;
    else
      ans += nextItem - curItem;
  }

  return ans;
};
