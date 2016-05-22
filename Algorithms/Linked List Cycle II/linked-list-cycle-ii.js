// Source : https://leetcode.com/problems/linked-list-cycle-ii/
// Author : Han Zichi
// Date   : 2016-05-22

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
var detectCycle = function(head) {
  flag = null;

  dfs(head);

  return flag;
};

function dfs(node) {
  if (flag)
    return;

  if (node === null)
    return;

  if (node.flag) {
    flag = node;
    return;
  }

  if (node.next === null)
    return;

  node.flag = true;

  dfs(node.next);
}