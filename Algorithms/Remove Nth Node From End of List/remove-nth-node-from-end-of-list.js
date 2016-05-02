// Source : https://leetcode.com/problems/remove-nth-node-from-end-of-list/
// Author : Han Zichi
// Date   : 2016-05-02

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var arr = [];

  while (head) {
    arr.push(new ListNode(head.val));
    head = head.next;
  }

  arr.splice(-n, 1);

  for (var i = 0, len = arr.length; i < len - 1; i++)
    arr[i].next = arr[i + 1];
  
  return arr.length === 0 ? null : arr[0];
};