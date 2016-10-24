At first, I thought it was a difficult problem, I found a way straightly with the complexity O(n^2), and of course got an result with TLE.

```javascript
"use strict";

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  p = help(p);
  let len = p.length;
  let ans = [];

  for (let i = 0, l = s.length; i < l; i++) {
    let sub = s.substr(i, len);
    if (p === help(sub))
      ans.push(i);
  }

  return ans;

  function help(str) {
    return str.split('').sort().join('');
  }
};
```

The time complexity  will reach 20100*20100 at worst. 

Until I notice that line **Strings consists of lowercase English letters only** and think of a way of **hash**. Still comparing the string `p` and the substring, not comparing the total string, but to compare the count of every letter in the string, and the times of comparation will be 26. And the time complexity  will be O(20100*26) at worst.


