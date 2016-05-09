/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  if (!root) return [];

  var ans = []
    , tmp = [root];

  while (tmp.length) {
    var res = []
      , a = [];

    for (var i = 0, len = tmp.length; i < len; i++) {
      if (!tmp[i]) continue;
      res.push(tmp[i].val);
      a.push(tmp[i].left);
      a.push(tmp[i].right);
    }

    tmp = a.concat();
    if (res.length)
      ans.push(res);
  }

  var a = [];
  ans.forEach(function(item) {
    a.push(item.pop());
  });

  return a;
};