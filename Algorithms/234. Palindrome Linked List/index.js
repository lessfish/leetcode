// Source : https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  var ans = [];
  while (head) {
    var tmp = head.val;
    ans.push(tmp);
    head = head.next;
  }  

  for(var i = 0, len = ans.length; i < len; i++)
    if (ans[i] !== ans[len - 1 - i])
      return false;

  return true;
};