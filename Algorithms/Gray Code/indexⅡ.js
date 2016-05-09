// Source : https://leetcode.com/problems/gray-code/
// Author : Han Zichi
// Date   : 2015-09-20

var grayCode = function(n) {
  var ans = [];
  for (var i = 0; i < (1 << n); i++) 
    ans[i] = i ^ (i >> 1);
  return ans;
};