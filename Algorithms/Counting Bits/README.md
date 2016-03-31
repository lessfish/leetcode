There is a quick way to calculate the 1 bits in one number converting to a binary number, as below:

```javascript
var hammingWeight = function(n) {
  n = ((n & 0xAAAAAAAA) >>> 1) + (n & 0x55555555);
  n = ((n & 0xCCCCCCCC) >>> 2) + (n & 0x33333333);
  n = ((n & 0xF0F0F0F0) >>> 4) + (n & 0x0F0F0F0F);
  n = ((n & 0xFF00FF00) >>> 8) + (n & 0x00FF00FF);
  n = ((n & 0xFFFF0000) >>> 16) + (n & 0x0000FFFF);
  return n;
};
```

It is not the best way to solve this problem, but it may be a hacking way.