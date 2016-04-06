An easy dynamic programming problem.

We define `ans[i]` as the fewest numbers that we can make up the amount `i`, and if can not, we define it as the value `undefined`, then we can enum every number that the array `coins` give, update the array `ans`, finally to check the value `ans[amount]`.

The recursion is as below:

```javascript
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
```