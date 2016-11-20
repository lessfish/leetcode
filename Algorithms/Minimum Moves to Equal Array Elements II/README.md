The base value is the middle one of the sorted array with the first feeling, but I am not sure. After submitting, I get an AC.

Err, the middle one is the median when the length of the array is old, and either of the two middle ones when the length is even.

And I write O(n^2)  code to prove:

```javascript
// Source : https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/
// Author : Han Zichi
// Date   : 2016-11-20

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
  nums.sort(function(a, b) {return a - b;});

  let len = nums.length;
  let midValue = nums[len >> 1];
  let ans = 0;

  for (let i = 0; i < len; i++)
    ans += Math.abs(nums[i] - midValue);

  return ans;
};


function violenceFunc(nums) {
  let minn = Infinity;
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    let sum = 0;

    nums.forEach(function(item) {
      sum += Math.abs(item - nums[i]);
    });

    minn = Math.min(minn, sum);
  }

  return minn;
}

for (let i = 0; i < 1000; i++) {
  let nums = [];

  for (let j = 0; j < 100; j++) {
    let item = ~~(Math.random() * 100);
    nums.push(item);
  }

  if (minMoves2(nums) !== violenceFunc(nums))
    console.log('wrong!'); // no console
}
```