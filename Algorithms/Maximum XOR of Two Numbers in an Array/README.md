Clear solution [here](https://discuss.leetcode.com/topic/63213/java-o-n-solution-using-bit-manipulation-and-hashmap) and [here](https://discuss.leetcode.com/topic/63299/python-6-lines-bit-by-bit).

> Build the answer bit by bit from left to right. Let's say we already know the largest first seven bits we can create. How to find the largest first eight bits we can create? Well it's that maximal seven-bits prefix followed by 0 or 1. Append 0 and then try to create the 1 one (i.e., answer ^ 1) from two eight-bits prefixes from nums. If we can, then change that 0 to 1.

And also remember this:

      A ^ B = C
      => (A ^ C = B) & (B ^ C = A)