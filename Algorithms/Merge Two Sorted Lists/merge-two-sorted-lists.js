// Source : https://leetcode.com/problems/merge-two-sorted-lists/
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var ans = [];
  while (l1) {
    ans.push(new ListNode(l1.val));
    l1 = l1.next;
  }

  while (l2) {
    ans.push(new ListNode(l2.val));
    l2 = l2.next;
  }

  ans.sort(function(a, b) {
    return a.val - b.val;
  });

  if (!ans.length) return null;
  for (var i = 0, len = ans.length; i < len - 1; i++)
    ans[i].next = ans[i + 1];

  return ans[0];
};