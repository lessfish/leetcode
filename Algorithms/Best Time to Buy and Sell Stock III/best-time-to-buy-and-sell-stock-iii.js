// Source : https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
// Author : Han Zichi
// Date   : 2016-08-11

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var len = prices.length
    , sell = []
    , buy = []
    , item
    , i;

  if (!len)
    return 0;

  for (i = 0; i < len; i++) {
    sell[i] = [],
    buy[i] = [],
    item = prices[i];

    if (!i) {
      sell[i][0] = 0;
      sell[i][1]= 0;
      sell[i][2] = 0;
      buy[i][0] = -item;
      buy[i][1] = -item;
      buy[i][2] = -item;
    } else {
      sell[i][0] = sell[i - 1][0];
      sell[i][1] = Math.max(sell[i - 1][1], buy[i - 1][1] + item);
      sell[i][2] = Math.max(sell[i - 1][2], buy[i - 1][2] + item);
      buy[i][0] = buy[i - 1][0];
      buy[i][1] = Math.max(buy[i - 1][1], sell[i - 1][0] - item);
      buy[i][2] = Math.max(buy[i - 1][2], sell[i - 1][1] - item);
    }
  }

  return sell[len - 1][2];
};