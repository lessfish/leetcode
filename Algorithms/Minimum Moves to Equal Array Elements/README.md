I think it's not quite easy!

Suppose the array is `nums`, and `n` is the length, `sum` is the sum of the array, and `minn` is the minimal item of the array.

Suppose `x` is the minimum moves, we should reach that:

```
(sum + (n - 1) * x) % n === 0		// should be true
```

Simplify it, we can get:

```
(sum - x) % n === 0   // should be true
```

and we can get the smallest `x` by a loop:

```javascript
for (let i = 0; ; i++) {
  if ((sum - i) % n)
    continue;

  return i; 
}
```

And we can get the final value of each item, it's `(sum + (n - 1) * x) / n`, define it as `finalValue`, and we should reach `finalValue - minn <= x`. Think for a while, `finalValue - minn` is the time the minimal item of the array should be added, and in fact we will add for `x` times, so `finalValue` should be smaller than `x` (or equal to).

