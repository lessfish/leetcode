// Source : https://leetcode.com/problems/sort-list/
// Author : Han Zichi
// Date   : 2015-08-14

/**
 * Definition for singly-linked list.
 * function ListNode(val) 
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (head === null) 
    return null;

  var tmp = [];
  while (head) {
    var node = new ListNode(head.val);
    tmp.push(node);
    head = head.next;
  }

  tmp.sort(function(a, b) {
    return a.val - b.val;
  });

  for (var i = 0, len = tmp.length; i < len - 1; i++)
    tmp[i].next = tmp[i + 1];

  return tmp[0];
};