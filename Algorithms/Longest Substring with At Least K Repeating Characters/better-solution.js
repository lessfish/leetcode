// Source : https://leetcode.com/problems/longest-substring-with-at-least-k-repeating-characters/
// Author : Han Zichi
// Date   : 2016-09-21
// Runtime: 89 ms

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  if (k > s.length)
    return 0;

  if (k <= 1)
    return s.length;

  let hash = {};
  for (let item of s)
    !hash[item] ? hash[item] = 1 : hash[item]++;

  for (let i = 0, len = s.length; i < len; i++) {
    let item = s[i];
    if (hash[item] < k) {
      let subA = s.substring(0, i);
      let subB = s.substring(i + 1);
      return Math.max(longestSubstring(subA, k), longestSubstring(subB, k));
    }
  }

  return s.length;
};