// Source : https://leetcode.com/problems/minimum-time-difference/#/description
// Author : Han Zichi
// Date   : 2016-03-26

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
  let helper = str => {
    let arr = str.split(':');
    return +arr[0] * 60 + (+arr[1]);
  };

  timePoints = timePoints.map(helper);
  timePoints = [...timePoints, ...timePoints.map(item => item + 60 * 24)];
  timePoints.sort((a, b) => a - b);

  let ans = Infinity;
  for (let i = 1, len = timePoints.length; i < len; i++)
    ans = Math.min(ans, timePoints[i] - timePoints[i - 1]);

  return ans;
};