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
  var pre = null;

  while (head) {
    var next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }

  return pre;
};

