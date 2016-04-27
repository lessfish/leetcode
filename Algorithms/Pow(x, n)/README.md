I just use `Math.pow` indolently, maybe it's better to use a kind of binary if you are having an interview. 

Let's see. If `n` is positive, it's quite simple to write down following code:

```javascript
var ans = 1;
while (n) {
  (n & 1) && (ans *= x);
  x *= x;
  n >>= 1;
}

return ans;
```

But we should consider about the situation when `n` is negative, after thinking, we do this:

```javascript
var myPow = function(x, n) {
  var isNegative = n < 0 ? (n *= -1, true) : false;

  var ans = 1;
  while (n) {
    (n & 1) && (ans *= x);
    x *= x;
    n >>= 1;
  }

  return isNegative ? 1 / ans : ans;
};
```

But it still fails, for we forget this situation when `n === 2147483648`, and `n >> 1` will get `-1073741824`, so we should use `/ 2` or `>>>` instead.

```javascript
var myPow = function(x, n) {
  var isNegative = n < 0 ? (n *= -1, true) : false;

  var ans = 1;
  while (n) {
    (n & 1) && (ans *= x);
    x *= x;
    n >>>= 1;
  }

  return isNegative ? 1 / ans : ans;
};
```


