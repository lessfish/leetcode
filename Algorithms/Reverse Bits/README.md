I just solve it simply.

Firstly I change the integer to binary string using `toString` function. Then I add some `0` to the head of the string as it is not longer enough. Lastly we can calculate the answer with the string.

If this function is called many times, how would you optimize it? Well, I calculate 2^1, 2^2, 2^3 .. until 2^32 before the function is called, so we can use it immediately in the `reverseBits` function.