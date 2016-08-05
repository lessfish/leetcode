// Source : https://leetcode.com/problems/longest-substring-without-repeating-characters/
// Author : Han Zichi
// Date   : 2016-08-05

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var hash = {};
  var start = 0;
  var ans = 0;

  for (var i = 0, len = s.length; i < len; i++) {
    var item = s[i];

    if (!hash[item])
      hash[item] = true;
    else {
      // item 已经在 substring 中存在了
      for (; ;) {
        if (s[start] === item) {
          start++;
          break;
        }

        hash[s[start]] = false;
        start++;
      }
    }

    ans = Math.max(ans, i - start + 1);
  }

  return ans;
};