// Source : https://leetcode.com/problems/h-index-ii/
// Author : Han Zichi
// Date   : 2015-09-11

var hIndex = function(citations) {
  var len = citations.length;
  for (var i = len; ; i--) {
    if ((!i || citations[len - i] >= i) && (len - i - 1 < 0 || citations[len - i - 1] <= i))
      return i;
  }
};