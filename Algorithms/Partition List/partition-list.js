// Source : https://leetcode.com/problems/partition-list/
// Author : Han Zichi
// Date   : 2015-08-18

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  var tmp = []
    , ans = [];

  while (head) {
    tmp.push(new ListNode(head.val));
    head = head.next;
  } 

  tmp.forEach(function(item) {
    if (item.val < x)
      ans.push(item);
  });

  tmp.forEach(function(item) {
    if (item.val >= x)
      ans.push(item);
  });

  if (!ans.length) return null;
  for (var i = 0, len = ans.length; i < len - 1; i++)
    ans[i].next = ans[i + 1];

  return ans[0];
};

