// Source : https://leetcode.com/problems/coin-change/
// Author : Han Zichi
// Date   : 2016-01-20

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  var ans = [];
  ans[0] = 0;

  for (var i = 0, len = coins.length; i < len; i++) {
    var item = coins[i];
    for (var j = 0; j + item <= amount; j++) {
      if (ans[j] === undefined)
        continue;
      if (ans[j + item] === undefined)
        ans[j + item] = ans[j] + 1;
      else 
        ans[j + item] = Math.min(ans[j + item], ans[j] + 1);
    }

  }

  return ans[amount] === undefined ? -1 : ans[amount];
};