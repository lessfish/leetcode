It may be a case to calculate how many times `n!` can be divided by 5. It's quite easy, see the code straightly:

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var ans = 0;
  while (n) {
  	ans += ~~(n / 5);
  	n /= 5;
  	n = ~~n;
  }

  return ans;
};
```