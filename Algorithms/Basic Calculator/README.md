Clever solution from <https://discuss.leetcode.com/topic/22359/16-ms-solution-in-c-with-stacks> using awesome stacks!

For instance, `1+2+(3+4)` as a case, we use `sum` to represent the sum, and we can calculate `1+2` to `3` simply, then we encounter `(`, we just put `3` to a stack named `numStack`, and put `+` to a stack named `symStack` (the `+` in front of `(`), after calculating the sum `3+4` until meeting `)`, we do a pop operation to the two stacks, and get `3+7` as a result (`3` is on the top of the stack `numStack`, and `+` is on the top of the stack `symStack`).

There is two tricks in the code, clever tricks!

If the character is not a digit or `(`, we should do an add operation, but as we have set `num` to 0 after encountering `()+-`, so we can do an add operation even when the character is `(`, for it will always get `0` to add up.

There is another trick when dealing with the result, when the string is `1+2`, we should add up `sign * num` in the end, but if the string is like `1+(2)`, when doing the pop operations, we have added it to `ans`, so `ans` is the one should be returned. How to deal with the two cases? Don't worry, we set `num` to 0 after encountering `()+-` like above, so we can always return `ans + sign * num` as the answer, for `num` will be `0` if it should be `0`!

The clever solution is [here](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Basic%20Calculator/better-solution.js), and if you are free, my ugly solution is [there](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Basic%20Calculator/basic-calculator.js). 
