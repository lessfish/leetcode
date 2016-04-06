`n` is Infinity, so we cannot simulate the process, we should find the rule.

After running the first several thousand cases, we finally find the rule as below:

```javascript
var bulbSwitch = function(n) {
  var ans = -1 + Math.sqrt(1 + n);
  return Math.ceil(ans);
};
```