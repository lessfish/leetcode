Recently I start to learn Python, it's my first solution with Python.

If thinking it over in the normal way, the time complexity will be O(n^2), but we can do it linearly.

Define an array `sum`, `sum[n]` means the sum of the first n + 1 items, so the sum from `nums[n]` to `nums[m]` is `sum[m] - sum[n - 1]`, we can judge if the value is the multiple of `k`. But the complexity is still O(n^2).

Think it further, define the remainder of `sum[m]` and `k` as `a`, and the one of `sum[n - 1]` and `k` as b, if `a` is equal to `b`, `sum[m] - sum[n - 1]` will be the multiple of `k`.

So it will be easy, just judge `sum[m] % k` is exsited or not, using Set to hash.

Two points to care:

- k is 0
- the continuous subarray of size is at least 2, so we should define a variable `pre` to store the previous sum(maybe sum % k), and add it to the set later on.


