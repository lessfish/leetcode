// Source : https://leetcode.com/problems/assign-cookies/
// Author : Han Zichi
// Date   : 2016-11-16

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  g.sort(function(a, b) {return a - b;});
  s.sort(function(a, b) {return a - b;});

  let ans = 0;
  let sIndex = 0;
  let sLen = s.length;

  // greedy
  loop:
  for (let i = 0, len = g.length; i < len; i++) {
    let item = g[i];

    for (let j = sIndex; j < sLen; j++) {
      if (s[j] >= item) {
        ans++;
        sIndex = j + 1; // the index next loop should be from
        if (sIndex === sLen) break loop;
        break;
      }
    }
  }

  return ans;
};
