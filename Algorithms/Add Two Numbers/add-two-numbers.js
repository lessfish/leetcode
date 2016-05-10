// Source : https://leetcode.com/problems/add-two-numbers/
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  var add = 0
    , ans
    , head;

  while(l1 || l2) {
    var a = l1 ? l1.val : 0
      , b = l2 ? l2.val : 0;

    var sum = a + b + add;
    add = ~~(sum / 10);

    var node = new ListNode(sum % 10);

    if (!ans)
      ans = head = node;
    else {
      head.next = node;
      head = node; 
    }
    
    if (l1)
      l1 = l1.next;
    if (l2)
      l2 = l2.next;
  }

  if (add) {
    var node = new ListNode(add);
    head.next = node;
    head = node;
  }

  return ans;
};