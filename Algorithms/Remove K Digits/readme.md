Firstly I think it is a dynamic programming problem, it's easy to understand. Define *dp[i][j]* that means taking *i* items from the first *j* items of the given string which makes the minimum substring, and you can find the recurrence formula as below:

```javascript
dp[i][j] = min(dp[i-1][j], dp[i-1][j-1]+num[i])
```

I write down the code below:

```javascript
var removeKdigits = function(num, k) {
  let len = num.length;
  let maxnStr = '9'.repeat(len);
  // dp[i][j] 表示前 i 个数中取 j 个的最小值
  let dp = [];

  for (let i = 0; i <= len; i++)
    dp[i] = [];

  for (let i = 0; i <= len; i++)
    for (let j = 0; j <= i; j++) {
      if (j === 0)
        dp[i][j] = '';
      else {
        let a = i - 1 >= j ? dp[i - 1][j] : maxnStr;
        let b = i - 1 >= 0 && j - 1 >= 0 ? dp[i - 1][j - 1] + num[i - 1] : maxnStr;
        dp[i][j] = a < b ? a : b;
      }
    }

  let str = dp[len][len - k];

  for (let i = 0, strLen = str.length; i < strLen; i++) {
    if (str[i] !== '0')
      return str.substring(i);
  }

  return '0';
};
```

Returned an MLE result, obviously the array *dp* cost too much. Think for a while, *dp[i]* is only relevant to *dp[i-1]*, so we could reduce memory cost by only using two sub arrays.

```javascript
var removeKdigits = function(num, k) {
  let len = num.length;
  let maxnStr = '9'.repeat(len);
  // dp[i][j] 表示前 i 个数中取 j 个的最小值
  let dp = [];

  // 压缩
  dp[0] = [], dp[1] = [];

  for (let i = 0; i <= len; i++)
    for (let j = 0; j <= i; j++) {
      if (j === 0)
        dp[i & 1][j] = '';  // to reduce memory cost
      else {
        let a = i - 1 >= j ? dp[(i - 1) & 1][j] : maxnStr;
        let b = i - 1 >= 0 && j - 1 >= 0 ? dp[(i - 1) & 1][j - 1] + num[i - 1] : maxnStr;
        dp[i & 1][j] = a < b ? a : b; // to reduce memory cost
      }
    }

  let str = dp[len & 1][len - k];

  for (let i = 0, strLen = str.length; i < strLen; i++) {
    if (str[i] !== '0')
      return str.substring(i);;
  }

  return '0';
};
```

But ... TLE! Err, it seems the time complexity is O(n), but this line ` a < b ? a : b; ` cost too much for the length of *a* as well as *b* maybe over 10000!

So what is the right way? Use stack, maybe a little greedy.

Take `num = "1432219", k = 3` into consideration, you should return a string with length 4. We enum the items of string *"1432219"*, firstly *1*, then *14*, here there are two items in the stack. Then the item *3*, compared with the top item of the stack *4*, *3* is smaller than *4*, *13xx* will always be smaller than *14xx*, and we are sure that the left items are enough to make the length 4, so we do a pop operation to the stack. 

See the [code](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Remove%20K%20Digits/remove-k-digits.js) in detail.

