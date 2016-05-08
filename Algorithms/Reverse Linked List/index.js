// Source : https://leetcode.com/problems/reverse-linked-list/
// Author : Han Zichi
// Date   : 2015-08-17

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

var reverseList = function(head) {
  if (head === null || head.next === null)
    return head;

  var next = head.next;
  head.next = null;
  var newHead = reverseList(next);
  next.next = head;

  return newHead;
};

