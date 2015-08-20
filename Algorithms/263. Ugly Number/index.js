// Source : https://leetcode.com/problems/ugly-number/
// Author : Han Zichi
// Date   : 2015-08-19

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  if (num === 0) 
    return false;
  
  var a = [2, 3, 5];
  for (var i = 0; i < 3; i++) {
    while (num % a[i] === 0)
      num /= a[i];
  }

  return num === 1 ? true : false;
};