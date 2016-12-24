At first, I think it over in the wrong way. We define `sum` as the sum of the total length, I think if there is a way to reach the goal, any combination that can reach `sum / 4` can be a side of the four sides of the square.

It's wrong! If the array is `[5, 5, 5, 5, 4, 4, 4, 4, 3, 3, 3, 3]`, obviously it can make up a square, and `[4, 4, 4]` can be a side of the square, but if we choose them from the array, the remaining cannot make another three sides! (can make only one side, use `[5, 4, 3]`)

So I use simple depth-first search with backtrace.

PS: At first I use `sort` to resort the array from large to small, but it seems that it makes no sense in leetcode, but I think it's of use to cut down the times of recursions in the depth-first search.
