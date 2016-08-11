// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
// Author : Han Zichi
// Date   : 2016-08-11

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var len = prices.length;

  if (len === 0)
    return 0;

  var sell = []
    , buy = []
    , rest = [];

  for (var i = 0; i < len; i++) {
    var item = prices[i];
    if (!i) {
      sell[i] = 0;
      buy[i] = -item;
      rest[i] = 0;
    } else {
      sell[i] = Math.max(sell[i - 1], buy[i - 1] + item);
      buy[i] = Math.max(buy[i - 1], rest[i - 1] - item);
      rest[i] = Math.max(rest[i - 1], sell[i - 1]);
    }
  }

  return Math.max(sell[len - 1], buy[len - 1], rest[len - 1]);
};