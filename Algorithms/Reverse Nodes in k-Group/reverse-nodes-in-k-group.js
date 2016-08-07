// Source : https://leetcode.com/problems/reverse-nodes-in-k-group/
// Author : Han Zichi
// Date   : 2016-08-07

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  var ans = [];

  while (head) {
    ans.push(new ListNode(head.val));
    head = head.next;
  }

  if (!ans.length)
    return null;

  var len = ans.length;
  var res = [];

  for (var i = 0; i < len; i += k) {
    var tmp;

    if (i + k > len)
      tmp = ans.slice(i, len);
    else {
      tmp = ans.slice(i, i + k);
      tmp.reverse();
    }

    Array.prototype.push.apply(res, tmp);
  }

  for (var i = 0, len = res.length - 1; i < len; i++)
    res[i].next = res[i + 1];

  return res[0];
};