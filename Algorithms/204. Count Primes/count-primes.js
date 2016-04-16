// Source : https://leetcode.com/problems/count-primes/
// Author : Han Zichi
// Date   : 2015-08-26

/**
 * @param {number} n
 * @return {number}
 */

var countPrimes = function(n) {
  // if modified to 'var hash = []'
  // it will be Memory Limit Exceeded
  // I don't know why
  // I think both are the same
  var hash = new Array(n)
    , a = Math.sqrt(n);

  for (var i = 2; i <= a; i++) {
    if (!hash[i])
      for (var j = i * i; j < n; j += i)
        hash[j] = true;
  }

  var ans = 0;
  for (var i = 2; i < n; i++)
    if (!hash[i])
      ans ++;

  return ans;
};