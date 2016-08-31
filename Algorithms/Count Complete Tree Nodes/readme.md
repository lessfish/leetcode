Such a good question!

I cannot find the way solving it until I see the Tag that says **Binary Search**, suddenly find a way. We could find out the depth of the tree, defined as `h`, so the number of nodes of the tree is `[2^(h-1), (2^h)-1]`,  we could do a binary search, to check whether the number of nodes is larger than a value, until the binary search ends. We get the code [binary-search.js](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Count%20Complete%20Tree%20Nodes/binary-search.js), 420ms, nearly the slowest.

What's the pain spot? Every time we go for h steps to check, but we could do it with less steps, how to say? After each searching, we could find out whether the last node is in the left tree or right tree, so we can do the search from the child node (from left child node or the right one), after each searching, we could reduce step by 1. See the code [better-recursion.js](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Count%20Complete%20Tree%20Nodes/better-recursion.js). 628ms! Even slower.

I change the function `findDepth` from recursion to iteration.

```javascript
function findDepth(node) {
  var num = 0;
  while (node) {
    num++;
    node = node.left;
  }
  return num;
}
```
392 ms! But it's still a slow solution anyhow. Then I change all recursion to iteration, as the code [better-iteration.js](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Count%20Complete%20Tree%20Nodes/better-iteration.js), 264 ms, beat 80%! Err, stop here.. I think I cannot make it faster, please tell me how to make it!