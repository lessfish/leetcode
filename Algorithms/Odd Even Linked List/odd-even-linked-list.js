// Source : https://leetcode.com/problems/odd-even-linked-list/
// Author : Han Zichi
// Date   : 2016-05-06

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
  if (!head)
    return null;

  var old = [];
  var even = [];

  var f = true;

  while (head) {
    var next = head.next;
    head.next = null;

    if (f) {
      old.push(head);
    } else 
      even.push(head);

    f = !f;
    head = next;
  }

  for (var i = 0; i < old.length - 1; i++)
    old[i].next = old[i + 1];

  for (var i = 0; i < even.length - 1; i++)
    even[i].next = even[i + 1];

  old[old.length - 1].next = even[0];

  return old[0];
};