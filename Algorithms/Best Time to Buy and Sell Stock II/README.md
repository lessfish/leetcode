See the example, `[1, 2, 4, 5, 8, 9, 1, 3, 5]`.

Day 0 you buy it at the price of 1, then day 1, you should keep it, until day 5, you can sell it at the price of 9, then you can earn 8. What to see? When the number is increasing, you should keep it, then the problem can be that find the increasing subarray of the array. Obviously the answer is `[1, 2, 4, 5, 8, 9]` and `[1, 3, 5]`, then you can get `(9 - 1) + (5 - 1)` as the result.

For convenience, I push `0` to the array, for we don't need to calculate the last answer of the subarray.