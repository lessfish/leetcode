// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Author : Han Zichi
// Date   : 2016-05-01

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  prices.push(0);

  var len = prices.length;
  var sum = 0;
  var begin;

  for (var i = 0; i < len; i++) {
    if (i === 0) {
      begin = prices[i];
      continue;
    }

    if (prices[i] >= prices[i - 1])
      continue;

    sum += (prices[i - 1] - begin);
    begin = prices[i];
  }

  return sum;
};