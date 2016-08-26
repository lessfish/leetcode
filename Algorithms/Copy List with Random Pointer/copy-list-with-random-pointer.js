// Source : https://leetcode.com/problems/copy-list-with-random-pointer/
// Author : Han Zichi
// Date   : 2016-08-26
// Runtime: 176 ms
// Your runtime beats 100.00% of javascript submissions.

/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
  if (!head)
    return null;

  let hash = new Map();
  let newArr = [];
  let node = head;

  while (node) {
    hash.set(node, newArr.length);
    newArr.push(new RandomListNode(node.label));
    node = node.next;
  }

  node = head;
  for (let i = 0, len = newArr.length; i < len; i++) {
    if (i !== len - 1)
      newArr[i].next = newArr[i + 1];

    let random = node.random;
    let index = hash.get(random);
    if (index !== undefined) {
      newArr[i].random = newArr[index];
    }

    node = node.next;
  }

  return newArr[0];
};