// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Author : Han Zichi
// Date   : 2016-08-11

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices.length)
    return 0;

  var buy = []
    , sell = [];

  prices.forEach(function(item, index) {
    if (!index) {
      buy[index] = -item;
      sell[index] = 0;
    } else {
      buy[index] = Math.max(buy[index - 1], sell[index - 1] - item);
      sell[index] = Math.max(sell[index - 1], buy[index - 1] + item);
    }
  });

  var len = prices.length;
  return sell[len - 1];
};