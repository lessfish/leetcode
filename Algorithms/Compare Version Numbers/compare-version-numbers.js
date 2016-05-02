// Source : https://leetcode.com/problems/compare-version-numbers/
// Author : Han Zichi
// Date   : 2016-05-02

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  var a = version1.split('.');
  var b = version2.split('.');

  var len1 = a.length;
  var len2 = b.length;
  for (var i = 0, len = Math.max(len1, len2); i < len; i++) {
    var item1 = i < len1 ? +a[i] : 0;
    var item2 = i < len2 ? +b[i] : 0;

    if (item1 > item2)
      return 1;

    if (item1 < item2)
      return -1;
  }
};