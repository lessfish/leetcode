// Source : https://leetcode.com/problems/remove-linked-list-elements/
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  var ans = [];
  
  while (head) {
    ans.push(new ListNode(head.val));
    head = head.next;
  }

  for (var i = ans.length; i--; ) {
    if (ans[i].val === val)
      ans.splice(i, 1);
  }

  if (!ans.length)
    return null;

  for (var i = 0, len = ans.length; i < len - 1; i++)
    ans[i].next = ans[i + 1];

  return ans[0];
};