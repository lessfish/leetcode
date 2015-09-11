// Source : https://leetcode.com/problems/h-index/
// Author : Han Zichi
// Date   : 2015-09-11

/* You are here! 
Your runtime beats 100.00% of javascript submissions. 
I cannot believe my eyes */

var hIndex = function(citations) {
  var len = citations.length;
  for (var i = len; ; i--) {
    var cnt = 0
      , cnt_equal = 0;
    citations.forEach(function(item) {
      if (item > i) cnt++;
      if (item === i) cnt_equal++;
    });

    if (cnt > i) continue;
    if (cnt + cnt_equal < i) continue;
    return i;
  }
};