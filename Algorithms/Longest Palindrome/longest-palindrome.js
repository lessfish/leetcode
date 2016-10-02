// Source : https://leetcode.com/problems/longest-palindrome/
// Author : Han Zichi
// Date   : 2016-10-02

"use strict";
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let hash = {};

  for (let item of s)
    hash[item] = ~~hash[item] + 1;

  let exsitsOld = false;
  let ans = 0;

  for (let key in hash) {
    let cnt = hash[key];
    ans += cnt & 1 ? cnt - 1 : cnt;
    (cnt & 1) && (exsitsOld = true);
  }

  return ans + exsitsOld;
};