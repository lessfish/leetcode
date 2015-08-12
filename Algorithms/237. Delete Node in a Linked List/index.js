// Source : https://leetcode.com/problems/delete-node-in-a-linked-list/
// Author : Han Zichi
// Date   : 2015-08-12

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
  node.val = node.next.val;
  var tmp = node.next;
  node.next = node.next.next;
  tmp = null;
};