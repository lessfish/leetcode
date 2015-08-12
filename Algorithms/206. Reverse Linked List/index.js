// Source : https://leetcode.com/problems/reverse-linked-list/
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
 * @param {ListNode} head
 * @return {ListNode}
 */

var ans = null;

function dfs(head) {
  if (head === null)
    return null;

  var cur_node = new ListNode(head.val);
  var tmp = dfs(head.next);

  if (tmp === null) 
    tmp = cur_node, ans = cur_node;
  else 
    tmp.next = cur_node;

  return cur_node;
}

var reverseList = function(head) {
  dfs(head);
  return ans;
};