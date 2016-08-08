// Source : https://leetcode.com/problems/reorder-list/
// Author : Han Zichi
// Date   : 2016-08-08

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
  if (!head)
    return;

  var node = head;
  var ans = [];

  while (node) {
    ans.push(node);
    node = node.next;
  }

  // remove the head node
  ans.shift();

  // rearrange the node array
  var res = [];
  var f = true;

  while (ans.length) {
    var tmp = f ? ans.pop() : ans.shift();
    res.push(tmp);
    f = !f;
  }

  // make a new list
  for (var i = 0, len = res.length; i < len; i++)
    if (i !== len - 1)
      res[i].next = res[i + 1];
    else
      res[i].next = null;

  head.next = res[0];
};