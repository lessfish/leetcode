A simple dynamic programming problem.

Define array `dp`, `dp[i]` means the answer when `n === i`, if you want to get `dp[10]`, you may compare dp[1] * 9, dp[2] * 8, dp[3] * 7 ... That's really dynamic programming by O(n^2) Complexity.

To make it easier, I consider the case `n === 2` and `n === 3` as the special cases to avoid some error. That's because dp[i] may be made up by only one factor, dp[2] is 2, not 1, and dp[3] is 3, not 2, after dp[3], we can get correct answer as we expect.