// Source : https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/
// Author : Han Zichi
// Date   : 2016-08-29

/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  var ans = preorder.split(',');
  var s = [{left: true}];

  for (var i = 0, len = ans.length; i < len; i++) {
    var item = ans[i];

    if (s.length) {
      var last = s[s.length - 1];
      if (!last.left)
        last.left = true;
      else {
        s.pop();
      }
    } else
      return false;

    item !== '#' && s.push({});
  }

  return !s.length;
};