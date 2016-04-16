Simple problem, to be careful.

See the code:

```javascript
var deleteNode = function(node) {
  node.val = node.next.val;
  var tmp = node.next;
  node.next = node.next.next;
  tmp = null;
};
```