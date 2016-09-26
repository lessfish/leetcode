// Source : https://leetcode.com/problems/queue-reconstruction-by-height/
// Author : Han Zichi
// Date   : 2016-09-26

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  people.sort(function(a, b) {
    if (a[0] !== b[0])
      return b[0] - a[0];
    return a[1] - b[1];
  });

  let ans = [];

  people.forEach(function(item) {
    ans.splice(item[1], 0, item);
  });

  return ans;
};