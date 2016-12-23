// Source : https://leetcode.com/problems/number-of-segments-in-a-string/
// Author : Han Zichi
// Date   : 2016-12-23

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  let arr = s.split(' ');
  let ans = 0;

  arr.forEach(function(item) {
    item && (ans++);
  });

  return ans;
};
