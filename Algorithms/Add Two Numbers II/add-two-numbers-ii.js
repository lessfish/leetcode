// Source : https://leetcode.com/problems/add-two-numbers-ii/
// Author : Han Zichi
// Date   : 2016-11-04

"use strict";

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
  let a = []
    , b = []
    , newL1 = l1
    , newL2 = l2;

  while (newL1) {
    a.push(newL1.val);
    newL1 = newL1.next;
  }

  while (newL2) {
    b.push(newL2.val);
    newL2 = newL2.next;
  }

  a.reverse();
  b.reverse();

  let ans = [];
  let add = 0;

  while (a.length || b.length) {
    let c = a.length ? a.shift() : 0;
    let d = b.length ? b.shift() : 0;
    let sum = c + d + add;

    ans.push(sum % 10);
    add = ~~(sum / 10);
  }

  add && (ans.push(add));

  ans.reverse();

  let ret = [];

  for (let i = 0, len = ans.length; i < len; i++)
    ret[i] = new ListNode(ans[i]);

  for (let i = 0, len = ans.length; i < len - 1; i++)
    ret[i].next = ret[i + 1];

  return ret[0];
};