// Source : https://leetcode.com/problems/binary-watch/
// Author : Han Zichi
// Date   : 2016-09-18

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  let hours = [1, 2, 4, 8];
  let minutes = [1, 2, 4, 8, 16, 32];
  let ans = [];

  dfs(num, 0, 0, 0, 0);

  function dfs(left, a, b, hoursTotal, minutesTotal) {
    if (hoursTotal >= 12 || minutesTotal >= 60)
      return;

    if (left === 0) {
      let str = hoursTotal + ":";
      str += minutesTotal < 10 ? '0' + minutesTotal : minutesTotal;
      ans.push(str);
      return;
    }

    // add i to hour
    for (let i = a; i < 4; i++) {
      dfs(left - 1, i + 1, b, hoursTotal + hours[i], minutesTotal);
    }

    // add i to minute
    for (let i = b; i < 6; i++) {
      dfs(left - 1, a, i + 1, hoursTotal, minutesTotal + minutes[i]);
    }
  }

  return Array.from(new Set(ans));
};