// Source : https://leetcode.com/problems/super-ugly-number/
// Author : Han Zichi
// Date   : 2016-02-05

// 丑数是一道经典的 dp
// 但是这道题用 dp 解，时间复杂度 O(10^8)，也就是 1 亿，理论上看明显超时
// 而且每次 primes 都不一样，不可以预处理
// 但是就是 AC 了，而且还不慢
// 总结：不值得做的一题

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
  var len = primes.length
    , index = [];

  for (var i = 0; i < len; i++)
    index[i] = 0;

  var ans = [];
  ans.push(1);

  for (var i = 1; i < n; i++) {

    var minNumber = Infinity;

    for (var j = 0; j < len; j++) {
      var item = index[j];
      minNumber = Math.min(minNumber, primes[j] * ans[item]);
    }

    ans[i] = minNumber;

    for (var j = 0; j < len; j++) {
      var item = index[j];
      if (minNumber === primes[j] * ans[item])
        index[j]++;
    }
  }

  return ans[n - 1];
};