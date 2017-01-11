// Source : https://leetcode.com/problems/license-key-formatting/
// Author : Han Zichi
// Date   : 2017-01-11
// Runtime: 86 ms

// Your runtime beats 100.00% of javascript submissions

/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  S = S.toUpperCase().replace(/-/g, '');

  let ans = [];
  let index = 0;

  if (S.length % K) {
    let str = S.substr(0, S.length % K);
    ans.push(str);
    index = S.length % K;
  }

  for (let i = index, len = S.length; i < len; i += K)
    ans.push(S.substr(i, K));

  return ans.join('-');
};
