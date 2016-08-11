See the example, `[1, 2, 4, 5, 8, 9, 1, 3, 5]`.

Day 0 you buy it at the price of 1, then day 1, you should keep it, until day 5, you can sell it at the price of 9, then you can earn 8. What to see? When the number is increasing, you should keep it, then the problem can be that find the increasing subarray of the array. Obviously the answer is `[1, 2, 4, 5, 8, 9]` and `[1, 3, 5]`, then you can get `(9 - 1) + (5 - 1)` as the result.

For convenience, I push `0` to the array, for we don't need to calculate the last answer of the subarray.

--- 

**2016-08-11 add:**

We can change a way of thinking, above we just find out the buying day as well as the selling day, but we do not need to consider about it, what we really care is the total sum! We can use dynamic programming， we can just do three things in a day, selling, buying, or neither selling nor buying,

We define two array `sell` and `buy`, `sell[i]` means the largest sum by day i ending with selling, that means next day you can buy, or do nothing, and `buy[i]` means the largest sum by day i ending with buying, that means next day you can sell, or do nothing. So the result may be the larger one of `buy[lastDay]` and `sell[lastDay]`.

```javascript
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
  return Math.max(buy[len - 1], sell[len - 1]);
};
```

It's very straightforward to understand, but we can make it shorter. See below.

```javascript
buy[index] = Math.max(buy[index - 1], sell[index - 1] - item);
sell[index] = Math.max(sell[index - 1], buy[index - 1] + item);
```

`buy[index - 1] + item` is always larger than `buy[index - 1]`, and `sell[index - 1` is always larger than `sell[index - 1] - item`, so `sell[index]` is always larger than `buy[index]`, so we can just return ` sell[len - 1]` as the answer.

What's more? We can reduce the O(n) space to O(1), try it!