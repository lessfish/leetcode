// Source : https://leetcode.com/problems/longest-common-prefix/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';

  var len = strs.reduce(function(pre, item) {
    return Math.min(pre, item.length);
  }, Number.MAX_VALUE);

  var ans = '';
  for (var i = 0; i < len; i++) {
    var a = strs[0][i];
    var f = strs.every(function(item) {
      return item[i] === a;
    });

    if (!f) break;
    ans += a;
  }

  return ans;
};