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
  var ans = [];

  while (head) {
    var node = new ListNode(head.val);
    ans.push(node);
    head = head.next;
  }

  ans.reverse();

  if (!ans.length)
    return null;

  for (var i = 0, len = ans.length; i < len - 1; i++) {
    ans[i].next = ans[i + 1];
  }

  return ans[0];
};

