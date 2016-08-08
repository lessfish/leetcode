// Source : https://leetcode.com/problems/super-pow/
// Author : Han Zichi
// Date   : 2016-08-08

/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
  // find the loop of the mod
  var rem = [];
  // a ^ 0 % 1337 === 1
  rem.push(1);

  var product = 1;
  var dividend = b.join('');
  // if the loop is a total loop
  var f = true;

  for ( ; ; ) {
    product *= a;
    product %= 1337;
    if (~rem.indexOf(product)) {
      var pos = rem.indexOf(product);
      if (+dividend < rem.length)
        return rem[+dividend];

      if (pos) {
        f = false;
        rem.splice(0, pos);
      }

      break;
    }
    rem.push(product);
  }

  var mod = getMod(dividend, rem.length);
  return f ? rem[mod] : rem[mod - pos];
};

function getMod(str, b) {
  var mod = 0;
  for (var i = 0, len = str.length; i < len; i++) {
    mod = mod * 10 + (+str[i]);
    mod %= b;
  }

  return mod;
}