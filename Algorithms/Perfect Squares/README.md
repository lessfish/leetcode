Solved by `dynamic programming`.

define an array named `dp`, and `dp[i]` means the fewest number that can make up `i`, we can enum 1, 4, 9 .. and update the value `dp[i]` at the same time.

See the code below:

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  var dp = [];
  
  for (var i = 1; i <= n; i++)
    dp[i] = Infinity;

  dp[0] = 0;

  for (var i = 0; i <= n; i++) 
    for (var j = 1; ; j++) {
      if (i + j * j > n) break;
      dp[i + j * j] = Math.min(dp[i + j * j], dp[i] + 1);
    }
  
  return dp[n];
};
```