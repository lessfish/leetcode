Think it over straightly, we could quickly find a way to solve it. For each integer, we could have two choices, the length of array is 20 at most, so the total time complexity will be O(2^20), about 100w, but get a TLE!

```javascript
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  let ans = 0
    , len = nums.length;

  let dfs = (index, sum) => {
    if (index === len) {
      if (sum === S)
        ans++;
      return;
    }

    dfs(index + 1, sum - nums[index]);
    dfs(index + 1, sum + nums[index]);
  };

  dfs(0, 0);

  return ans;
};
```

It's strange and unbelievable to me, 100w is a normal time complexity in my memory. (**Is there something wrong in my code?**)

Then I think about it in the opposite way, `sum` is the sum of elements, and `S` is the target, what about `sum - S`? The question can transform to, how many ways to choose from the array that added up the `(sum - S) / 2` (think about why not `sum - S`?)? The solution is [here](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Target%20Sum/dfs-solution.js), it's not a good solution, for the time complexity is still O(2^20), with some prunings, finally pass it with over 1000ms.

Look back to the question, we miss a piece of important information that **The sum of elements in the given array will not exceed 1000**, so I write down the [following solution ](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Target%20Sum/better-solution.js) with time complexity O(20*1000) at most, obviously getting an much quicker solution.
