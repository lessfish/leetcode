we define two variables `first` and `second` as the first two of the increasing subsequence of length 3, and `first2` and `second2` as the "backup", we replace `first2` and `second2` for `first` and `second` at the right time.

Here comes an example. If the array is `[1, 2, -3, -2, -1]`, firstly, `first = 1`, and `second = 2`, 


// 比如 [1, 2, -3, -2, -1]
// 一开始 first = 1, second = 2
// 然后 first2 = -3, second2 = -2
// 之后用 first2, second2 取代 first 和 second