Firstly, I find a way which is quite straightforward. We can find the two traces whose first node is always the same (the root), and they have the same path until a different node, the last same node is the answer.

It's easy to understand and code, but it's not the best answer. The code is long, what's more, to find the two traces we should do the search twice! (maybe recursion or iteration) you can find the code here [lowest-common-ancestor-of-a-binary-tree.js](https://github.com/hanzichi/leetcode/blob/master/Algorithms/Lowest%20Common%20Ancestor%20of%20a%20Binary%20Tree/lowest-common-ancestor-of-a-binary-tree.js)

In fact, we can reduce the search to once. See the code below.

```javascript
var lowestCommonAncestor = function(root, p, q) {
  if (!root)
    return null;

  if (root === p || root === q)
    return root;

  var left = lowestCommonAncestor(root.left, p, q);
  var right = lowestCommonAncestor(root.right, p, q);

  if (left && right)
    return root;
  else if (left)
    return left;
  else
    return right;
};
```

It is not that easy to understand, see the tree below firstly.

```
      1
    /  \
   2    5
  / \
 3   4
```

If we want to know the Lowest Common Ancestor  of node 3 and node 5, it's easy to find it **from the bottom up**, the code above is the same meaning with recursion.

When node a is traversed, if p and q is in the different child nodes of node a, we can decide that node a is the Lowest Common Ancestor  of p and q, if not, just return the value which is not null, that is the answer, because we have found the answer before traversing to node a (always remember **from the bottom up**).

Think it over, how to say? understand the way of **from the bottom up**.


