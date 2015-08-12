// Source : https://leetcode.com/problems/happy-number/
// Author : Han Zichi
// Date   : 2015-08-11

/**
 * @param {number} n
 * @return {boolean}
 */

function add(n) {
  var ans = 0;
  while(n) {
    ans += (n % 10) * (n % 10);
    n /= 10;
    n = parseInt(n.toString());
  }
  return ans;
}

var isHappy = function(n) {
  hash = [];
  while(n) {
    if (n === 1) return true;
    if (hash[n]) return false;
    hash[n] = true;
    n = add(n);
  }  
};