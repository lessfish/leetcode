// Source : https://leetcode.com/problems/gray-code/
// Author : Han Zichi
// Date   : 2015-09-20

var grayCode = function(n) {
  if (!n) return [0];
  
  var ans = [];
  ans[0] = 0, ans[1] = 1;

  for (var i = 1; i < n; i++) 
    for (var j = 1 << i; j < (1 << i + 1); j++) 
      ans[j] = ans[(1 << (i + 1)) - 1 - j] + (1 << i);

  return ans;
};