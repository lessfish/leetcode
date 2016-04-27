Use array `a` to show the position of a number.

For instance, if `a[i] === undefined`, it means we don't have the number of `i` in the array, and if not, it means the number of `i` appears in the position of `index === a[i]`.

So it will be easy, we can enum the array, and check if `a[target - item]` is undefined or not.