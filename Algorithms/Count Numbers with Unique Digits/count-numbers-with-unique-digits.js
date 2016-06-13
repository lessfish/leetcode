// Source : https://leetcode.com/problems/count-numbers-with-unique-digits/
// Author : Han Zichi
// Date   : 2016-06-13

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (!n)
    return 1;

  var ans = 0;
  
  for (var i = 1; i <= n; i++) {
    if (i === 1)
      ans += 10;
    else if (i <= 10) {
      ans += A(10, i);
      ans -= A(9, i - 1);
    } else {
      break;
    }
  }

  return ans;
};


function A(a, b) {
  var ans = 1;

  for (var i = a; i >= a - b + 1; i--)
    ans *= i;

  return ans;
}