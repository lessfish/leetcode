// Source : https://leetcode.com/problems/reverse-integer/
// Author : Han Zichi
// Date   : 2015-08-09

/**
 * @param {number} x
 * @return {number}
 */

// the int32 range: -2^31 ~ 2^31-1
// this problem is a little puzzling, you should take overflow into consideration
// although it's really nothing to JavaScript
// you should also notice that 1 << 31 will overflow in JavaScript

var reverse = function(x) {
  var minn = - (1 << 30) * 2;
  var maxn = (1 << 30) * 2 - 1;
  var ans;
  var arr = x.toString().split('');
  if (x < 0) 
    arr.shift();  // remove '-'
  ans = Number(arr.reverse().join(''));
  if (x < 0)
    ans *= -1;
  console.log(minn, maxn)
  if (ans < minn || ans > maxn)
    return 0;
  else
    return ans;
};

