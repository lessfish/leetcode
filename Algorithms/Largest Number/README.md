If you are Chinese, I suggest you reading [this article](http://www.cnblogs.com/zichi/p/5180489.html) written by me.

Anyway, it's a case of `sort`. If the array is `[1, 23]`, obviously we will compare `123` with `231`, and find the bigger one, that's the answer. As there may be more elements in the array, we can sort the array with a comparing function, as below:

```javascript
nums.sort(function(a, b) {
  return (b + '' + a) - (a + '' + b);
});
```

Be careful, the integer cannot begin with `0`!