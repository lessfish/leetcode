An easy `dynamic programming` problem.

Given array `arr`, we can define another array `dp`, `dp[i]` means the length of longest increasing subsequence when the last item is `arr[i]`. How to get `dp[i]`? We can get it by enumerating from `index=0` to `index=i-1`(for instance j), and check the value of `arr[j]` and `arr[i]`, if `arr[i] > arr[j]`, then `dp[i]=max(dp[i],dp[j]+1)`.

The algorithm above runs in O(n2) complexity, how to improve it to O(n log n) time complexity? Use binary search, see the code in detail. My runtime beats 100.00% of javascript submissions.