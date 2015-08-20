// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  var ans = []
    , hash = [];

  while (head) {
    ans.push(new ListNode(head.val));

    if (!hash[head.val])
      hash[head.val] = 1;
    else 
      hash[head.val]++;

    head = head.next;
  }

  for (var i = ans.length; i--; ) {
    if (hash[ans[i].val] > 1)
      ans.splice(i, 1);
  }

  if (!ans.length)
    return null;
  
  for (var i = 0, len = ans.length; i < len - 1; i++)
    ans[i].next = ans[i + 1];

  return ans[0];
};