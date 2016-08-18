Think over another problem, given a string, to calculate the value, how to do it? Maybe you should use `stack`. For example, given a string `1+2*2`, you should have two stacks, one saves the numbers, and the other saves the symbols, once encounters priority symbols, maybe `*`, or `()`，then the stacks have a pop operation, until the end.

It's very straightfoward with this problem by this way, you can maintain two stacks, and you can decide when the stack should have a pop operation. The only thing I concern about is the memory, for I pass the stack array as the arguments in recursion. The code is [here](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Different%20Ways%20to%20Add%20Parentheses/different-ways-to-add-parentheses.js).

It's better to solve it with divide and conquer algorithm, to divide a big problem to small ones because they are similar.

```javascript
/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
  // save the possible values from the string input
  var ans = [];
  for (var i = 0, len = input.length; i < len; i++) {
    var item = input[i];
    if (~'+-*'.indexOf(item)) {
      var left = diffWaysToCompute(input.substring(0, i));
      var right = diffWaysToCompute(input.substring(i + 1));
      left.forEach(function(a) {
        right.forEach(function(b) {
          ans.push(eval('(' + a + ')' + item + '(' + b + ')'));
        });
      });
    }
  }

  !ans.length && ans.push(+input);
  return ans;
};
```

What's more, you can cache the middle results, define an array `cache`, `cache[i][j]` means the values that  `input.substring(i, j)` can form, so you will be quicker!

