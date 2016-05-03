// Source : https://leetcode.com/problems/fraction-to-recurring-decimal/
// Author : Han Zichi
// Date   : 2016-05-03

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {

  var isNegative = '';

  if (numerator * denominator < 0) {
    isNegative = '-';
  }

  numerator = Math.abs(numerator);

  denominator = Math.abs(denominator);

  var rem = numerator % denominator;

  var ans = Math.floor(numerator / denominator);

  // can be divided
  if (!rem) {
    return isNegative + ans;
  }

  // the answer string
  var arr = [];

  // the remain hash to find a loop
  var hash = [];

  hash.push(rem);

  while (rem) {
    rem *= 10;

    var num = Math.floor(rem / denominator);

    rem %= denominator;

    var pos = hash.indexOf(rem);

    arr.push(num);
    
    hash.push(rem);

    if (pos === -1) {
      
    } else {
      arr.splice(pos, 0, '(');
      arr.push(')');
      break;
    }
  }

  return isNegative + ans + '.' + arr.join('');
};