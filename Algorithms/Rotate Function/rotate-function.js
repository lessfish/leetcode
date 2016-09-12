// Source : https://leetcode.com/problems/rotate-function/
// Author : Han Zichi
// Date   : 2016-09-12

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
  var ans
    , sum = 0
    , tmp = 0
    , len = A.length;

  A.forEach(function(item, index) {
    sum += item;
    tmp += index * item;
  });

  ans = tmp;

  while (A.length) {
    var last = A.pop();
    tmp = tmp + sum - last * len;
    ans = Math.max(ans, tmp);
  }

  return ans;
};