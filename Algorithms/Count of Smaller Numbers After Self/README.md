If you are Chinese, I suggest you reading [this article](http://www.cnblogs.com/zichi/p/5107442.html) written by me.

Change a thought, give you an array, and count the smaller numbers before self. If the numbers before self are sorted, we can use binary search to find the answer, so we can enum the items of the array, ans maintain another array which is sorted, after one item is enumed, insert it to the sorted array using binary search.

In fact, I solve the problem using Binary Indexed Tree at first which makes it really Complicated, also using discretization in it.

Both solutions are right there.